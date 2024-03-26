const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const app = express();

async function parseLink(link, name) {
    try {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);

        const imgSrc = $(
            "section.column.col-6.col-md-12 div.carousel-container figure.carousel-item img.img-responsive"
        ).attr("src");

        let description = "";
        if (
            $(
                'section.column.col-6.col-md-12 div#description p[itemprop="aggregateRating"]'
            ).length > 0
        ) {
            description = $(
                'section.column.col-6.col-md-12 div#description p[itemprop="aggregateRating"]'
            )
                .text()
                .trim();
        }

        const prices = [];
        $(
            'section.column.col-12.col-md-12 table.table tbody tr[itemprop="offers"]'
        ).each((index, element) => {
            const vendor = $(element).find("td img").attr("alt");
            const shipping = $(element).find("td:nth-child(2)").text().trim();
            const availability = $(element)
                .find('td span[itemprop="availability"]')
                .text()
                .trim();
            const price = $(element)
                .find('td a span[itemprop="price"]')
                .text()
                .trim();
                const priceDetailLink = $(element).find('td a.priceDetailLink').attr('href');

            prices.push({
                vendor,
                shipping,
                availability: availability ? availability : "Not in stock",
                price,
                priceLink:priceDetailLink
            });
        });

        return { imgSrc, description, prices };
    } catch (error) {
        console.error(`Error parsing linkz: ${name}`, error.message);
        return { imgSrc: null, description: null, prices: [] };
    }
}

function isObjectWithNameExists(arr, name) {
    return arr.some(item => item.name === name);
  }
async function scrape(name) {
    try {
        let url = `https://www.pc-kombo.com/us/components/${name}`;

        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        // Scraping data
        const products = [];
        $("ol#hardware li.columns").each(async (index, element) => {
            try {
                let product = {};
                let link = $(element).find("a").attr("href");
                const name = $(element).find("h5.name").text().trim();
                const subtitle = $(element).find('.subtitle').children().map((i, el) => $(el).text().trim()).get();
                if(name=="displays"){
                    subtitle[0] = "Panel " + subtitle[0]; 
                    subtitle[1] = "Resolution " + subtitle[1];
                }else if(name=="cpus"){
                    subtitle[0] = "Socket " + subtitle[0]; 
                }
               
                const price = $(element)
                    .find(
                        "div.column.col-1.col-lg-2.col-sm-4.text-right a span.price"
                    )
                    .text()
                    .trim();

                link = link.split(" ").join("");
product.features=subtitle
                product.link = link;
                product.name = name;
                product.price = price;

                products.push(product);
            } catch (error) {
                console.log("Error 1", error.message);
            }
        });
        console.log("products", products.length);
        let count = 0;
        let query = await admin
                .firestore()
                .collection("scrapData")
                .where("name", "==", name)
                .get();
                
                    let data=query.docs[0]?.data()?.data||[]
                    for (let product of products) {
                        const exist = isObjectWithNameExists(data, product.name);
                            
            
                        if (!exist) {
                            const { imgSrc, description, prices } = await parseLink(
                                product.link,
                                product.name
                            );
            
                            if (description !== "" && description !== null) {
                                if (name == "cpus" || name == "gpus") {
                                    let ind = description.indexOf("/");
            
                                    let valueBeforeSlash = description.substring(
                                        ind - 4,
                                        ind
                                    );
                                    let performanceLevel = valueBeforeSlash.trim();
                                    product.performanceLevel = performanceLevel;
                                }
                            }
            
                            product.imgSrc = imgSrc ? imgSrc : "";
                            product.prices = prices ? prices : "";
                            data.push(product)
                        }
                        count = count + 1;
                        console.log("count", count);
                    }
                    if(query.size>0){
                    await admin
                .firestore()
                .collection("scrapData")
                .doc(query.docs[0].id)
                .update({data});
                }else{
                    await admin
                    .firestore()
                    .collection("scrapData")
                    .add({name,data});
                }
               
    } catch (error) {
        console.error("Error main:", error.message);
    }
}

scrape("displays");
// exports.app = functions.https.onRequest(app);

<template>
    <div class="home h-100 text-center">
        <b-container>
            <h1 class="fw-bold mt-5">Your PC your way</h1>
            <p>
                3XS Systems has been building thousands of custom PCs,
                workstations, laptops and servers a month in our
                state-of-the-art factory in the UK for more than 10 years. Our
                team of engineers has racked up more than 293 awards in the
                press for supplying High Performance Personal Computers and IT
                Hardware.
            </p>
            <b-row class="my-5">
                <b-col
                    cols="12"
                    md="6"
                    lg="4"
                    v-for="(item, idx) of data"
                    :key="idx"
                >
                    <ItemsCard :data="item" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ItemsCard from "../components/cards/ItemsCard.vue";

export default {
    name: "Home",
    components: {
        ItemsCard,
    },

    data() {
        return {
            data: [
                {
                    img: "https://picsum.photos/600/300/?image=25",
                    heading: "Low-Tier build",
                    text: "A range of highly customisable PCs, workstations and laptops optimised for gaming, professional DCC applications and home/office tasks. The Custom PC series are built to order and deliver the ultimate in specification and satisfaction with systems that perform and look amazing - you dream it and we'll build it. We'll even overclock your CPU and graphics card, fill of which is covered by our premium 3 year warranty including one year on-site cover.",
                },
                {
                    img: "https://picsum.photos/600/300/?image=2",
                    heading: "Mid-Tier build",
                    text: "Unlike other PC manufacturers we don't believe in fobbing off our customers with unbranded components. We're just as demanding as you are and expect our PCs to work reliably for years. For this reason we have over the years built up close partnerships with key manufacturers, ensuring that your 3XS PC is built using only the finest quality components.",
                    link: "Quality Components",
                },
                {
                    img: "https://picsum.photos/600/300/?image=24",
                    heading: "High-Tier build",
                    text: "All Scan 3XS Custom Series systems are covered by our Premium Warranty, which includes access to our technical support team 7 days a week. If your system is in need of repair you may be eligible for an onsite engineer to come to your home or office. Alternatively we can repair your system at our UK-based service centre.",
                    link: "Support Info",
                },
            ],
        };
    },
};
</script>

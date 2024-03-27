<template>
    <b-modal :id="`product-list-model`" size="lg" hide-footer>
        <div
            v-if="isDataLoading"
            class="my-4 w-100 d-flex justify-content-center"
        >
            <b-spinner style="width: 3rem; height: 3rem"></b-spinner>
        </div>
        <div v-else>
            <h2 class="text-capitalize font-weight-bold">
                {{ scrapData.name }}
            </h2>
            <div class="my-4 modal-height">
                <b-card v-for="item in scrapData.data" class="mb-2">
                    <b-row>
                        <b-col cols="4" md="3" lg="2">
                            <b-img
                                thumbnail
                                fluid
                                :src="item.imgSrc"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>{{ item.name }}</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <b-badge
                                    v-for="feature in item.features"
                                    variant="secondary"
                                    class="mr-1 mt-1"
                                    >{{ feature }}</b-badge
                                >
                            </div>
                            <small v-if="item.performanceLevel">
                                <span class="font-weight-bold"
                                    >Performance Level:</span
                                >
                                <span class="ml-2">{{
                                    item.performanceLevel
                                }}</span>
                            </small>
                            <div class="mb-2">
                                <span class="font-weight-bold">Price:</span>
                                <span class="ml-2">{{ item.price }}</span>
                            </div>
                        </b-col>
                        <b-col cols="3" md="3" lg="2">
                            <b-button
                                v-b-modal="'pricing-list-model'"
                                variant="primary"
                                :disabled="!item.price"
                                @click.stop="
                                    pricingDetail = item.prices;
                                    $emit(
                                        'product-selected',
                                        item,
                                        scrapData.name
                                    );
                                "
                                class="font-weight-bold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </div>
        <PricingListModal
            @pricing-selected="addSelectedPricing"
            @close-product-modal="closeProductModal"
            :pricingList="pricingDetail"
            :refId="scrapData.name"
        />
    </b-modal>
</template>

<script>
import { mapState } from "vuex";
import PricingListModal from "./PricingListModal.vue";
export default {
    name: "ProductListModal",
    components: { PricingListModal },
    props: ["productId"],
    data() {
        return {
            pricingDetail: "",
            productData: "",
        };
    },
    computed: {
        ...mapState({
            isDataLoading: (state) => state.ScrapData.isDataLoading,
            scrapData: (state) => {
                console.log("Hammza CPUS", state.ScrapData.scrapData);
                return state.ScrapData.scrapData;
            },
        }),
    },
    mounted() {
        this.$store.dispatch("fetchScrapData", this.productId);
    },
    watch: {
        productId(newValue, oldValue) {
            console.log("productId old:", oldValue);
            console.log("productId changed:", newValue);
            this.$store.dispatch("fetchScrapData", this.productId);
        },
    },
    methods: {
        addSelectedPricing(pricing, refId) {
            this.$emit("pricing-selected", pricing, refId);
        },
        closeProductModal() {
            this.$bvModal.hide("product-list-model");
        },
    },
};
</script>

<style scoped>
.modal-height {
    max-height: 380px;
    overflow-x: hidden;
    overflow-y: scroll;
}
::-webkit-scrollbar {
    width: 8px !important;
    height: 8px !important;
    margin-left: 2px !important;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #f7f6f6;
}

/* Handle */
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(204, 204, 204, 0.3);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(204, 204, 204, 0.5);
}
</style>

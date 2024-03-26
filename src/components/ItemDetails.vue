<template>
    <b-container class="table-responsive my-5">
        <table class="table border text-start rounded">
            <thead class="table-dark h5">
                <tr>
                    <th>Component</th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Product Link</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(tableData, idx) of tableData" :key="idx">
                    <td class="h5 fw-bold my-auto">{{ tableData.title }}</td>
                    <td>
                        <b-button
                            v-if="!tableData.productData"
                            variant="primary"
                            class="fw-semibold"
                            v-b-modal="`product-list-model`"
                            @click.stop="selectedProduct = tableData.refId"
                            >+ ADD Component</b-button
                        >
                        <div
                            class="d-flex flex-column justify-center"
                            v-if="tableData.productData"
                        >
                            <img :src="processor" width="50px" class="m-auto" />
                            <b-form-rating
                                v-model="rating"
                                variant="primary"
                                class="border-0"
                            ></b-form-rating>
                        </div>
                    </td>
                    <td v-if="tableData.productData">
                        <h5>
                            {{ tableData.productData.name }}
                            <!-- Intel® Core™ ¡9-14900KF, 24 Cores & 32 Threads
                            Unlocked Gaming Processor -->
                        </h5>
                        <b-row>
                            <b-col sm="6">
                                <span class="fw-semibold">Brand:</span
                                ><span>Intel</span>
                            </b-col>
                            <b-col sm="6" class="text-end">
                                <span class="fw-semibold">Model:</span
                                ><span>Core i9-14900KF</span>
                            </b-col>
                            <b-col sm="4">
                                <span class="fw-semibold">Cores:</span
                                ><span>24</span>
                            </b-col>
                            <b-col sm="4">
                                <span class="fw-semibold">Threads:</span
                                ><span>32</span>
                            </b-col>
                            <b-col sm="4" class="text-end">
                                <span class="fw-semibold">Socket Type:</span
                                ><span>LGA 1700</span>
                            </b-col>
                            <b-col sm="6">
                                <span class="fw-semibold">Base Speed:</span
                                ><span>3.2 GHz</span>
                            </b-col>
                            <b-col sm="6" class="text-end">
                                <span class="fw-semibold">Turbo Speed:</span
                                ><span>6 GHz</span>
                            </b-col>
                        </b-row>
                    </td>
                    <td v-if="tableData.productData" class="fw-semibold">
                        €540.58
                    </td>
                    <td v-if="tableData.productData">
                        <b-button variant="primary" class="fw-semibold"
                            >Buy from Amazon</b-button
                        >
                    </td>
                    <td v-if="tableData.productData">
                        <b-button
                            variant="danger"
                            class="fw-semibold"
                            @click.stop="
                                tableData.component = !tableData.component
                            "
                            ><i class="fas fa-trash"></i>del</b-button
                        >
                    </td>
                </tr>
            </tbody>
        </table>

        <ProductListModal
            :productId="selectedProduct"
            @product-selected="addComponentToTable"
            @pricing-selected="addSelectedPriceToTable"
        />
    </b-container>
</template>

<script>
import { mapState } from "vuex";
import processor from "../assets/processor.jpg";
import ProductListModal from "../components/modals/ProductListModal.vue";
export default {
    name: "ItemDetails",
    components: { ProductListModal },
    data() {
        return {
            component: false,
            processor,
            rating: "4.5",
            selectedProduct: "cpus",
            tableData: [
                {
                    title: "Processor",
                    component: false,
                    refId: "cpus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Motherboard",
                    component: false,
                    refId: "motherboards",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Power Supply",
                    component: false,
                    refId: "psus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Casing",
                    component: false,
                    refId: "cases",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "CPU Cooler",
                    component: false,
                    refId: "cpucoolers",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Display",
                    component: false,
                    refId: "displays",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Graphics Card",
                    component: false,
                    refId: "gpus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "RAM",
                    component: false,
                    refId: "rams",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Solid State Drive",
                    component: false,
                    refId: "ssds",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Hard Disk",
                    component: false,
                    refId: "hdds",
                    productData: null,
                    selectedPricing: null,
                },
            ],
        };
    },
    watch: {
        tableData(newValue, oldValue) {
            console.log("New Table Data", newValue);
        },
    },
    methods: {
        addComponentToTable(componentData, refId) {
            console.log("Compoent data", componentData, refId);
            const index = this.tableData.findIndex(
                (item) => item.refId === refId
            );
            this.$set(this.tableData, index, {
                ...this.tableData[index],
                productData: componentData,
            });
        },
        addSelectedPriceToTable(pricingData, refId) {
            console.log("Pricing detail data", pricingData, refId);
            const index = this.tableData.findIndex(
                (item) => item.refId === refId
            );
            this.$set(this.tableData, index, {
                ...this.tableData[index],
                selectedPricing: pricingData,
            });
        },
    },
    // computed: {
    //     ...mapState({
    //         isDataLoading: (state) => state.ScrapData.isDataLoading,
    //         processors: (state) => {
    //             console.log("Hammza CPUS", state.ScrapData.processors);
    //             return state.ScrapData.processors;
    //         },
    //     }),
    // },
    // mounted() {
    //     this.$store.dispatch("fetchCpus");
    // },
};
</script>

<style lang="scss" scoped>
th,
td {
    padding: 20px !important;
}
</style>

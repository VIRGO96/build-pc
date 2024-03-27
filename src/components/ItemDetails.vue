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
                    <td class="h5 font-weight-bold my-auto">
                        {{ tableData.title }}
                    </td>
                    <td>
                        <b-button
                            v-if="
                                !tableData.productData &&
                                !tableData.selectedPricing
                            "
                            variant="primary"
                            class="font-weight-bold"
                            v-b-modal="`product-list-model`"
                            @click.stop="selectedProduct = tableData.refId"
                            >+ ADD Component</b-button
                        >
                        <div
                            class="d-flex flex-column justify-content-center"
                            v-if="
                                tableData.productData &&
                                tableData.selectedPricing
                            "
                        >
                            <img
                                :src="tableData.productData.imgSrc"
                                width="50px"
                                class="m-auto"
                            />
                            <small
                                v-if="tableData.productData.performanceLevel"
                            >
                                <p class="font-weight-bold mb-1">
                                    Performance Level
                                </p>
                                <p class="">
                                    {{ tableData.productData.performanceLevel }}
                                </p>
                            </small>
                            <!-- <b-form-rating
                                v-model="rating"
                                variant="primary"
                                class="border-0"
                            ></b-form-rating> -->
                        </div>
                    </td>
                    <td
                        v-if="
                            tableData.productData && tableData.selectedPricing
                        "
                    >
                        <h5>
                            {{ tableData.productData.name }}
                            <!-- Intel® Core™ ¡9-14900KF, 24 Cores & 32 Threads
                            Unlocked Gaming Processor -->
                        </h5>
                        <!-- <b-row class="w-100"> -->
                        <div class="d-flex flex-wrap mb-2">
                            <b-col>
                                <p>
                                    <b-badge
                                        v-for="feature in tableData.productData
                                            .features"
                                        variant="secondary"
                                        class="mr-1 mt-1"
                                    >
                                        {{ feature }}
                                    </b-badge>
                                </p>
                            </b-col>
                        </div>
                        <!-- <b-col sm="6">
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
                            </b-col> -->
                        <!-- </b-row> -->
                    </td>
                    <td
                        v-if="
                            tableData.productData && tableData.selectedPricing
                        "
                        class="font-weight-bold"
                    >
                        ${{ tableData.selectedPricing.price }}
                    </td>
                    <td v-if="tableData.productData">
                        <a
                            :href="tableData.selectedPricing.priceLink"
                            target="_blank"
                        >
                            <b-button
                                variant="primary"
                                class="font-weight-bold text-capitalize"
                                >Buy from
                                {{ tableData.selectedPricing.vendor }}</b-button
                            >
                        </a>
                    </td>
                    <td
                        v-if="
                            tableData.productData && tableData.selectedPricing
                        "
                    >
                        <b-button
                            variant="danger"
                            class="font-weight-bold"
                            @click.stop="
                                deleteComponentFromTable(tableData.refId)
                            "
                            ><i class="fas fa-trash"></i>del</b-button
                        >
                    </td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td
                        colspan="5"
                        class="font-weight-bold h4 text-capitalize text-right"
                    >
                        <span>Total:</span>
                    </td>
                    <td class="font-weight-bold h4 text-secondary">
                        <span>${{ totalAmount }}</span>
                    </td>
                </tr>
            </tfoot>
            <tfoot>
                <tr>
                    <td
                        colspan="5"
                        class="font-weight-bold h4 text-capitalize text-right"
                    >
                        <span>Shipping Cost:</span>
                    </td>
                    <td class="font-weight-bold h4 text-secondary">
                        <span>${{ totalShippingCost }}</span>
                    </td>
                </tr>
            </tfoot>
        </table>

        <div class="mt-3 w-100 d-flex justify-content-end">
            <b-button
                variant="primary"
                class="font-weight-bold py-3"
                v-b-modal="`submit-build-model`"
                @click.stop="handleSubmitBuild"
                >Submit</b-button
            >
        </div>

        <ProductListModal
            :productId="selectedProduct"
            @product-selected="addComponentToTable"
            @pricing-selected="addSelectedPriceToTable"
        />
        <b-modal :id="`submit-build-model`" hide-footer>
            <div>
                <h4 class="mb-3">What do you want to title this PC?</h4>
                <b-form @submit="handleSubmitBuild">
                    <b-row class="mb-3">
                        <b-col>
                            <b-form-input
                                size="lg"
                                type="text"
                                class="form-control"
                                placeholder="Title of Pc"
                                required
                            />
                        </b-col>
                    </b-row>

                    <b-button
                        type="submit"
                        variant="primary"
                        block
                        class="mt-2 py-2 text-white w-100 font-weight-bold"
                    >
                        <span>Submit Build</span></b-button
                    >
                </b-form>
            </div>
        </b-modal>
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
                    refId: "cpus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Motherboard",
                    refId: "motherboards",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Power Supply",
                    refId: "psus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Casing",
                    refId: "cases",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "CPU Cooler",
                    refId: "cpucoolers",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Display",
                    refId: "displays",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Graphics Card",
                    refId: "gpus",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "RAM",
                    refId: "rams",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Solid State Drive",
                    refId: "ssds",
                    productData: null,
                    selectedPricing: null,
                },
                {
                    title: "Hard Disk",
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
        handleSubmitBuild() {},
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
        deleteComponentFromTable(refId) {
            console.log("Compoent data delete", refId);
            const index = this.tableData.findIndex(
                (item) => item.refId === refId
            );
            this.$set(this.tableData, index, {
                ...this.tableData[index],
                productData: null,
                selectedPricing: null,
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
    computed: {
        totalAmount() {
            return this.tableData
                .reduce((total, item) => {
                    return (
                        total +
                        (item.selectedPricing
                            ? Number(item.selectedPricing.price)
                            : 0)
                    );
                }, 0)
                .toFixed(2);
        },
        totalShippingCost() {
            return this.tableData
                .reduce((total, item) => {
                    return (
                        total +
                        (item.selectedPricing
                            ? Number(item.selectedPricing.shipping)
                            : 0)
                    );
                }, 0)
                .toFixed(2);
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

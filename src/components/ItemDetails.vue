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
                            v-if="!tableData.component"
                            variant="primary"
                            class="fw-semibold"
                            v-b-modal="'product-list-model'"
                            @click.stop=""
                            >+ ADD Component</b-button
                        >
                        <div
                            class="d-flex flex-column justify-center"
                            v-if="tableData.component"
                        >
                            <img :src="processor" width="50px" class="m-auto" />
                            <b-form-rating
                                v-model="rating"
                                variant="primary"
                                class="border-0"
                            ></b-form-rating>
                        </div>
                    </td>
                    <td v-if="tableData.component">
                        <h5>
                            Intel® Core™ ¡9-14900KF, 24 Cores & 32 Threads
                            Unlocked Gaming Processor
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
                    <td v-if="tableData.component" class="fw-semibold">
                        €540.58
                    </td>
                    <td v-if="tableData.component">
                        <b-button variant="primary" class="fw-semibold"
                            >Buy from Amazon</b-button
                        >
                    </td>
                    <td v-if="tableData.component">
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
        <b-modal
            id="product-list-model"
            size="lg"
            title="Products List"
            hide-footer
        >
            <div class="my-4 modal-height">
                <b-card class="mb-2">
                    <b-row>
                        <b-col cols="6" md="3">
                            <b-img
                                thumbnail
                                fluid
                                src="https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Acdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FE200%2FBX8070110700KF_01.png&feedId=34189&k=03717e9ee5afcfc02ca80cebdbb74c46fcec8e65"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>Intel Core i7-10700KF</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Socket AM4</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Clock 3.7 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Turbo 4.6 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >6 Cores</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >12 Threads</span
                                >
                            </div>
                            <small>
                                <span class="fw-bold">Performance Level:</span>
                                <span class="ms-2">7.64</span>
                            </small>
                            <div class="mb-2">
                                <span class="fw-bold">Price:</span>
                                <span class="ms-2">USD 289.96</span>
                            </div>
                            <b-button variant="primary" class="fw-semibold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
                <b-card class="mb-2">
                    <b-row>
                        <b-col cols="6" md="3">
                            <b-img
                                thumbnail
                                fluid
                                src="https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Acdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FE200%2FBX8070110700KF_01.png&feedId=34189&k=03717e9ee5afcfc02ca80cebdbb74c46fcec8e65"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>Intel Core i7-10700KF</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Socket AM4</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Clock 3.7 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Turbo 4.6 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >6 Cores</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >12 Threads</span
                                >
                            </div>
                            <small>
                                <span class="fw-bold">Performance Level:</span>
                                <span class="ms-2">7.64</span>
                            </small>
                            <div class="mb-2">
                                <span class="fw-bold">Price:</span>
                                <span class="ms-2">USD 289.96</span>
                            </div>
                            <b-button variant="primary" class="fw-semibold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
                <b-card class="mb-2">
                    <b-row>
                        <b-col cols="6" md="3">
                            <b-img
                                thumbnail
                                fluid
                                src="https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Acdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FE200%2FBX8070110700KF_01.png&feedId=34189&k=03717e9ee5afcfc02ca80cebdbb74c46fcec8e65"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>Intel Core i7-10700KF</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Socket AM4</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Clock 3.7 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Turbo 4.6 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >6 Cores</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >12 Threads</span
                                >
                            </div>
                            <small>
                                <span class="fw-bold">Performance Level:</span>
                                <span class="ms-2">7.64</span>
                            </small>
                            <div class="mb-2">
                                <span class="fw-bold">Price:</span>
                                <span class="ms-2">USD 289.96</span>
                            </div>
                            <b-button variant="primary" class="fw-semibold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
                <b-card class="mb-2">
                    <b-row>
                        <b-col cols="6" md="3">
                            <b-img
                                thumbnail
                                fluid
                                src="https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Acdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FE200%2FBX8070110700KF_01.png&feedId=34189&k=03717e9ee5afcfc02ca80cebdbb74c46fcec8e65"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>Intel Core i7-10700KF</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Socket AM4</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Clock 3.7 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Turbo 4.6 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >6 Cores</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >12 Threads</span
                                >
                            </div>
                            <small>
                                <span class="fw-bold">Performance Level:</span>
                                <span class="ms-2">7.64</span>
                            </small>
                            <div class="mb-2">
                                <span class="fw-bold">Price:</span>
                                <span class="ms-2">USD 289.96</span>
                            </div>
                            <b-button variant="primary" class="fw-semibold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
                <b-card class="mb-2">
                    <b-row>
                        <b-col cols="6" md="3">
                            <b-img
                                thumbnail
                                fluid
                                src="https://images2.productserve.com/?w=200&h=200&bg=white&trim=5&t=letterbox&url=ssl%3Acdn-reichelt.de%2Fbilder%2Fweb%2Fxxl_ws%2FE200%2FBX8070110700KF_01.png&feedId=34189&k=03717e9ee5afcfc02ca80cebdbb74c46fcec8e65"
                                alt="Product Image"
                            ></b-img>
                        </b-col>
                        <b-col>
                            <h5>Intel Core i7-10700KF</h5>

                            <div class="d-flex flex-wrap mb-2">
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Socket AM4</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Clock 3.7 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >Turbo 4.6 GHz</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >6 Cores</span
                                >
                                <span
                                    class="badge rounded-pill bg-secondary me-1 mt-1"
                                    >12 Threads</span
                                >
                            </div>
                            <small>
                                <span class="fw-bold">Performance Level:</span>
                                <span class="ms-2">7.64</span>
                            </small>
                            <div class="mb-2">
                                <span class="fw-bold">Price:</span>
                                <span class="ms-2">USD 289.96</span>
                            </div>
                            <b-button variant="primary" class="fw-semibold"
                                >+ ADD</b-button
                            >
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-modal>
    </b-container>
</template>

<script>
import processor from "../assets/processor.jpg";
export default {
    name: "ItemDetails",
    data() {
        return {
            component: false,
            processor,
            rating: "4.5",
            tableData: [
                {
                    title: "Processor",
                    component: false,
                },
                {
                    title: "Motherboard",
                    component: false,
                },
                {
                    title: "CPU Cooler",
                    component: false,
                },
                {
                    title: "Graphics Card",
                    component: false,
                },
                {
                    title: "RAM",
                    component: false,
                },
                {
                    title: "Storage",
                    component: false,
                },
                {
                    title: "Case Cooler",
                    component: false,
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
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

th,
td {
    padding: 20px !important;
}
</style>

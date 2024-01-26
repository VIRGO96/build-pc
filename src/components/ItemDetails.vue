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
                            @click.stop="
                                tableData.component = !tableData.component
                            "
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
                    component: true,
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
th,
td {
    padding: 20px !important;
}
</style>

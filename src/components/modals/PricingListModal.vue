<template>
    <b-modal id="pricing-list-model" size="lg" hide-footer>
        <div>
            <h2 class="text-capitalize font-weight-bold">Pricing List</h2>
            <div class="my-4 modal-height">
                <table class="table border text-start rounded">
                    <thead class="table-dark h5">
                        <tr>
                            <th>Vendor</th>
                            <th>Shipping</th>
                            <th>Availability</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pricing in pricingList">
                            <td class="h5 my-auto">{{ pricing.vendor }}</td>
                            <td class="h5 my-auto">{{ pricing.shipping }}</td>
                            <td class="h5 my-auto">
                                <b-badge
                                    :variant="
                                        pricing.availability.toLowerCase() ===
                                        'in stock'
                                            ? 'success'
                                            : 'danger'
                                    "
                                    >{{ pricing.availability }}</b-badge
                                >
                            </td>

                            <td class="h5 my-auto">
                                <a :href="pricing.priceLink" target="_blank"
                                    >${{ pricing.price }}</a
                                >
                            </td>
                            <td>
                                <b-button
                                    variant="primary"
                                    class="font-weight-bold"
                                    @click.stop="
                                        $emit(
                                            'pricing-selected',
                                            pricing,
                                            refId
                                        )
                                    "
                                    >Select</b-button
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: "PricingListModal",
    props: ["pricingList", "refId"],
};
</script>

<style scoped>
.modal-height {
    max-height: 380px;
    overflow: auto;
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

<template>
    <b-card class="text-left pc-card shadow border-0">
        <b-card-title
            class="font-weight-bold pointer"
            @click="$router.push('/item-details')"
            >{{ data.title }}</b-card-title
        >
        <div class="d-flex align-items-center justify-content-between my-3">
            <div>
                <small>Reviews:</small><br />
                <b-form-rating
                    v-model="data.rating"
                    readonly
                    variant="warning"
                    show-value
                    precision="2"
                >
                </b-form-rating>
            </div>
            <div>
                <small>Total cost:</small><br />
                $ {{ data.totalCost }}
            </div>
        </div>
        <div class="d-flex align-items-end justify-content-between">
            <div>
                <small>Submitted By:</small><br />
                <h6 class="font-weight-bold mb-0">{{ data.submittedBy }}</h6>
            </div>
            <!-- <div>
                    <small>Total cost:</small><br />
                    $ 230.3
                </div> -->
            <small class="pc-card__date">{{ data.submittedDate }}</small>
        </div>

        <!-- <b-button href="#" variant="primary">View PC</b-button> -->
        <!-- <small class="pc-card__date">{{ data.submittedDate }}</small> -->
    </b-card>
</template>

<script>
export default {
    name: "PcCard",
    props: ["data"],
    data() {
        return {
            value: 4.7,
        };
    },
};
</script>

<style lang="scss" scoped>
.pc-card {
    border-radius: 10px;

    .b-rating.form-control {
        padding: 0;
        border: 0;
        width: auto;
        height: auto;
    }
    &__date {
        // position: absolute;
        bottom: 10px;
        right: 10px;
        color: rgb(149, 148, 148);
    }
}
</style>

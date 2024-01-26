<template>
    <div class="d-flex h-100">
        <b-card
            :img-src="data.img"
            img-top
            class="mb-2"
            @click="$router.push('/item-details')"
        >
            <!-- <img :src="data.img" /> -->
            <b-card-title class="fw-semibold">{{ data.heading }}</b-card-title>
            <b-card-text>
                {{ data.text }}
            </b-card-text>
            <b-link
                v-if="data?.link"
                class="mt-auto text-dark text-decoration-none fw-bold h6"
                >{{ data?.link }} ></b-link
            >
            <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        </b-card>
    </div>
</template>

<script>
export default {
    name: "ItemsCard",
    props: ["data"],
};
</script>

<style lang="scss" scoped></style>

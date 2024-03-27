<template>
    <b-container class="mt-5">
        <h1>My Builds</h1>
        <b-row class="my-5">
            <b-col
                cols="12"
                md="6"
                lg="4"
                v-for="(item, idx) of myBuilds"
                :key="idx"
                class="mb-4"
            >
                <PcCard :data="item" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import PcCard from "../components/cards/PcCard.vue";

export default {
    name: "MyBuilds",
    components: {
        PcCard,
    },

    data() {
        return {
            myBuilds: [
                {
                    title: "Perfect PC for 2023",
                    rating: 4.0,
                    totalCost: 230.5,
                    submittedBy: "Jeon Charlie",
                    submittedDate: "26:12:2023",
                },
                {
                    title: "New PC",
                    rating: 3.5,
                    totalCost: 200.5,
                    submittedBy: "Happy singh",
                    submittedDate: "26:01:2024",
                },
                {
                    title: "Super PC",
                    rating: 4.9,
                    totalCost: 430.5,
                    submittedBy: "Denna chuhdary",
                    submittedDate: "06:02:2024",
                },
                {
                    title: "Perfect PC",
                    rating: 4.5,
                    totalCost: 300.5,
                    submittedBy: "Jess Musk",
                    submittedDate: "16:03:2024",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>

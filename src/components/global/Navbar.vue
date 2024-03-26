<template>
    <div>
        <b-navbar toggleable="md" type="light" class="px-md-4 px-sm-3 px-2">
            <router-link to="/">
                <b-navbar-brand
                    ><img src="../../assets/logo.png"
                /></b-navbar-brand>
            </router-link>

            <b-navbar-toggle
                target="nav-collapse"
                class="ml-auto justify-content-end"
            ></b-navbar-toggle>

            <b-collapse
                id="nav-collapse"
                is-nav
                class="ml-auto d-flex justify-content-end"
            >
                <b-navbar-nav class="d-flex align-items-center">
                    <b-nav-item href="#" class="font-weight-bold"
                        >Support info</b-nav-item
                    >
                    <b-nav-item href="#" class="font-weight-bold"
                        >Quality Components</b-nav-item
                    >
                    <b-nav-item href="#" class="font-weight-bold"
                        >User Builds</b-nav-item
                    >
                    <b-nav-item href="#" class="font-weight-bold"
                        >Profile</b-nav-item
                    >
                    <b-nav-item v-if="!isUserLoggedIn" class="font-weight-bold">
                        <b-button
                            @click="$router.push('/login')"
                            class="bg-dark text-white"
                        >
                            Login
                        </b-button></b-nav-item
                    >
                    <b-nav-item v-if="isUserLoggedIn" class="font-weight-bold">
                        <b-button
                            @click="logout"
                            class="bg-secondary text-white"
                        >
                            Logout
                        </b-button></b-nav-item
                    >
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <!-- <b-navbar-nav class="ml-auto"> -->
                <!-- <b-nav-form>
                        <b-form-input
                            size="sm"
                            class="mr-sm-2"
                            placeholder="Search"
                        ></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit"
                            >Search</b-button
                        >
                    </b-nav-form> -->

                <!-- <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown> -->

                <!-- <b-nav-item-dropdown right>
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown> -->
                <!-- </b-navbar-nav> -->
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { RouterLink } from "vue-router";
import { mapState } from "vuex";
export default {
    components: { RouterLink },
    computed: {
        ...mapState({
            isUserLoggedIn: (state) => {
                console.log("Hamza", state.Auth.isUserLoggedIn);
                console.log("Hamza uid", state.Auth.uid);
                console.log("Hamza user", state.Auth.user);
                return state.Auth.isUserLoggedIn;
            },
        }),
    },
    methods: {
        logout() {
            console.log("Logout!");
            this.$store.dispatch("logout");
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar {
    background-color: #cad7e7;
    .navbar-brand {
        img {
            width: 400px;
            @media (max-width: 991.92px) {
                width: 240px;
            }
            @media (max-width: 768.92px) {
                width: 300px;
            }
            @media (max-width: 600px) {
                width: 200px;
            }
        }
    }
}
</style>

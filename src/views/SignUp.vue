<template>
    <b-container>
        <b-row>
            <b-col md="10" lg="8" xl="6" class="mx-auto">
                <b-card class="mt-5 justify-content-center">
                    <h3 class="mb-4 text-capitalize fw-bold">Sign Up</h3>
                    <div>
                        <b-form
                            ref="signUpForm"
                            id="form-section"
                            @submit.prevent="handleSubmit"
                        >
                            <b-row class="mb-3">
                                <b-col>
                                    <b-form-input
                                        v-model="formData.username"
                                        size="lg"
                                        type="text"
                                        class="form-control"
                                        placeholder="Username"
                                        required
                                    />
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col>
                                    <b-form-input
                                        v-model="formData.email"
                                        size="lg"
                                        type="email"
                                        class="form-control"
                                        placeholder="Email"
                                        required
                                    />
                                </b-col>
                            </b-row>
                            <b-row class="mb-3">
                                <b-col>
                                    <b-form-input
                                        size="lg"
                                        v-model="formData.password"
                                        type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                </b-col>
                            </b-row>

                            <b-button
                                type="submit"
                                variant="primary"
                                block
                                class="mt-2 py-2 text-white w-100 fw-bold"
                            >
                                <span
                                    class="d-flex align-items-center justify-content-center"
                                    v-if="isLoading"
                                    ><b-spinner
                                        class="mr-1"
                                        small
                                        label="Loading..."
                                    />
                                    Signing Up...</span
                                >
                                <span v-else>Sign Up</span></b-button
                            >
                        </b-form>
                    </div>
                    <p class="mt-3">
                        or
                        <router-link to="/login">go back</router-link> to login.
                    </p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
    name: "SignUp",
    components: { RouterLink },
    data() {
        return {
            isLoading: false,
            formData: {
                username: "",
                email: "",
                password: "",
            },
        };
    },
    methods: {
        handleSubmit() {
            console.log("Submitting SignUp", this.formData);
        },
    },
};
</script>

<style scoped></style>

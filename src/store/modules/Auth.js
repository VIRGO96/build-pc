import {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
} from "../../config/firebase";

let state = {
    isUserRegistered: false,
    isUserLoggedIn: false,
    isLoading: false,
};

let getters = {
    isUserRegistered: (state) => state.isUserRegistered,
    isUserLoggedIn: (state) => state.isUserLoggedIn,
    isLoading: (state) => state.isLoading,
};

let actions = {
    async signupUser({ commit }, payload) {
        try {
            commit("setIsLoading", true);
            let onSuccess = payload["onSuccess"]
                ? payload["onSuccess"]
                : () => {};

            const { email, password } = payload.payload;
            // console.log("I'm in action ", payload, email, password);

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log("Hamza 1234", user);
                    onSuccess();
                    alert(`User Created Successfully ☺!`);
                    commit("setIsLoading", false);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`${errorCode}: ${errorMessage}`);
                    commit("setIsLoading", false);
                });
        } catch (error) {
            alert(error.response.data.message);
            commit("setIsLoading", false);
        }
    },
    async loginUser({ commit }, payload) {
        try {
        } catch (error) {
            alert(error.response.data.message);
            commit("setIsLoading", false);
        }
    },
};

let mutations = {
    setIsUserRegistered(state, payload) {
        state.isUserRegistered = payload;
    },
    setIsUserLoggedIn(state, payload) {
        state.isUserLoggedIn = payload;
    },
    setIsLoading(state, payload) {
        state.isLoading = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

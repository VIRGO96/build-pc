import {
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    collection,
    getDoc,
    setDoc,
    onAuthStateChanged,
    doc,
} from "../../config/firebase";

async function saveUserData(uid, userData) {
    try {
        const userRef = doc(db, "users", uid);
        await setDoc(userRef, userData);
    } catch (error) {
        console.error("Error saving user data:", error);
        throw error;
    }
}
async function getUserData(uid) {
    try {
        const userRef = doc(db, "users", uid);
        const userSnapshot = await getDoc(userRef);
        if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            return userData;
        } else {
            console.error("User data not found for UID:", uid);
            return null;
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

let state = {
    uid: null,
    user: null,
    isUserLoggedIn: false,
    isLoading: false,
};

let getters = {
    isUserLoggedIn: (state) => state.isUserLoggedIn,
    isLoading: (state) => state.isLoading,
    uid: (state) => state.uid,
    user: (state) => state.user,
};

let actions = {
    async signupUser({ commit }, payload) {
        try {
            commit("setIsLoading", true);
            let onSuccess = payload["onSuccess"]
                ? payload["onSuccess"]
                : () => {};

            const { email, password, username } = payload.payload;
            // console.log("I'm in action ", payload, email, password);

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const { uid } = user;
                    // console.log("Hamza 123 Login user", user);
                    // console.log("Hamza 123 Login uid", uid);
                    await saveUserData(uid, { email, username });
                    if (uid) {
                        commit("setIsUserLoggedIn", true);
                        const userData = await getUserData(uid);
                        // console.log("Hamza 123 Login userData", userData);
                        commit("setUid", uid);
                        commit("setUser", userData);
                    }

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
            commit("setIsLoading", true);
            let onSuccess = payload["onSuccess"]
                ? payload["onSuccess"]
                : () => {};

            const { email, password } = payload.payload;
            // console.log("I'm in action of login ", payload, email, password);

            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    const { uid } = user;
                    if (uid) {
                        commit("setIsUserLoggedIn", true);

                        // console.log("Hamza 123 Login user", user);
                        // console.log("Hamza 123 Login uid", uid);
                        const userData = await getUserData(uid);
                        // console.log("Hamza 123 Login userData", userData);
                        commit("setUid", uid);
                        commit("setUser", userData);
                    }
                    onSuccess();
                    alert(`User Login Successfully ☺!`);
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
    async logout({ commit }) {
        try {
            commit("setIsLoading", true);
            signOut(auth).then(() => {
                commit("setIsUserLoggedIn", false);
                commit("setIsLoading", false);
                console.log("I'm in action of logout ");
            });
        } catch (error) {
            alert(error.response.data.message);
            commit("setIsLoading", false);
        }
    },
    async checkAuthState({ commit }) {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                commit("setIsUserLoggedIn", true);
            } else {
                commit("setIsUserLoggedIn", false);
            }
        });
    },
};

let mutations = {
    setIsUserLoggedIn(state, payload) {
        state.isUserLoggedIn = payload;
    },
    setIsLoading(state, payload) {
        state.isLoading = payload;
    },
    setUser(state, payload) {
        state.user = payload;
    },
    setUid(state, payload) {
        state.uid = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

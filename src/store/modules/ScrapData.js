import {
    app,
    db,
    collection,
    getDoc,
    setDoc,
    doc,
    query,
    where,
    getDocs,
} from "../../config/firebase";

// async function getScrapData(name) {
//     try {
//         const q = query(collection(db, "scrapData"), where("name", "==", name));
//         const querySnapshot = await getDocs(q);
//         if (!querySnapshot.empty) {
//             const data = querySnapshot.docs[0].data();
//             return data;
//         } else {
//             console.error(
//                 "No documents found with name 'cpus' in scrapData collection"
//             );
//             return null;
//         }
//     } catch (error) {
//         console.error("Error fetching data from scrapData collection:", error);
//         throw error;
//     }
// }

let state = {
    scrapData: -1,
    isDataLoading: false,
};

let getters = {
    isDataLoading: (state) => state.isDataLoading,
    scrapData: (state) => state.scrapData,
};

let actions = {
    async fetchScrapData({ commit }, payload) {
        try {
            console.log(payload);
            commit("setIsDataLoading", true);
            console.log("Fetching Cpus");
            const q = query(
                collection(db, "scrapData"),
                where("name", "==", payload)
            );
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const scrapData = querySnapshot.docs[0].data();
                console.log(scrapData);
                commit("setScrapData", scrapData);
            } else {
                console.error(
                    "No documents found with name 'cpus' in scrapData collection"
                );
            }
            commit("setIsDataLoading", false);
        } catch (error) {
            console.error(error);
            commit("setIsDataLoading", false);
        }
    },
};

let mutations = {
    setIsDataLoading(state, payload) {
        state.isDataLoading = payload;
    },
    setScrapData(state, payload) {
        state.scrapData = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};

<template>
    <div id="app">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/global/Navbar.vue";

export default {
    name: "Home",
    components: {
        Navbar,
    },
};
</script>
<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.navbar-toggler {
    padding: 0.25rem 0.5rem !important;
    .navbar-toggler-icon {
        width: 1.2rem;
        height: 1.2rem;
    }
}
</style>

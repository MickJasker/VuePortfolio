<template>
  <div id="app">
    <header-comp/>
    <router-view/>
    <footer><h5>2018</h5></footer>
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp";
//import firebase from "firebase";
//import "firebase/firestore";

export default {
  components: {
    HeaderComp
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600,700,900");

@import "../node_modules/bootstrap/scss/bootstrap.scss";

@import "./assets/_var.scss";

* {
  margin: 0;

  html,
  body {
    background: $white;
    main {
      min-height: calc(100vh - 50px);
    }
  }

  #app {
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black;
    min-height: 100vh;
    font-weight: 400;

    footer {
      background: $black;
      display: flex;
      color: $white;
      justify-content: center;
      align-items: center;
      height: 50px;
      h5 {
        margin: 0;
      }
    }
  }
}
</style>

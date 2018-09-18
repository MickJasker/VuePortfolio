<template>
  <div id="app">
    <header-comp />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer>
      <div class="container">
        <h6>FHICT</h6>
        <h6>Mick Jasker</h6>
        <h6>2018</h6>
      </div>

    </footer>
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

@import "./assets/prism.css";

* {
  margin: 0;

  html,
  body {
    background: $white;

    main {
      min-height: calc(100vh - 40px);
    }
  }

  #app {
    font-family: "Montserrat", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black;
    min-height: 100vh;
    font-weight: 400;

    article {
      a {
        color: $primary;
        transition: 0.3s ease;

        &:hover {
          text-decoration: none;
          color: lighten($primary, 20);
        }
      }

      button {
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.25);
        transition: 0.3s ease;
        background-color: $primary;
        color: $white;

        &:hover {
          box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.125);
          cursor: pointer;
        }

        &:active {
          background: lighten($color: $primary, $amount: 5);
          box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.125);
        }

        &:focus {
          outline: none;
        }
      }

      .primaryBtn {
        background-color: $primary;
        color: $white;

        &:active {
          background: lighten($color: $primary, $amount: 5);
          box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.125);
        }
      }

      .secondaryBtn {
        background-color: lighten($color: $primary, $amount: 30);
        color: $primary;

        &:active {
          background: lighten($color: $primary, $amount: 35);
          box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.125);
        }
      }

      img {
        max-width: 100%;
        //max-height: 50vh;
        margin: 10px auto;
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.25);
      }

      blockquote {
        padding: 20px;
        background-color: lighten($color: $primary, $amount: 35);
        border-left: $primary solid 7px;
        border-radius: 10px;
      }

      pre {
        border-radius: 10px;
        box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.25);
      }
    }

    footer {
      background: $black;
      display: flex;
      color: $white;
      justify-content: space-around;
      align-items: center;
      height: 40px;

      div {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      h6 {
        margin: 0;
        color: lighten($color: $black, $amount: 40);
        font-size: 16px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  transition-delay: 0.3s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}
</style>

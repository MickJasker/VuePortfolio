<template>
  <header v-if="nav">
    <transition name="slide">
      <nav v-if="header">
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/portfolio">Portfolio</router-link>
          <router-link to="/about">About me</router-link>
          <router-link to="/contact">Contact</router-link>
        </ul>
      </nav>
    </transition>
    <button @click="headerShow()">
      <i class="material-icons">menu</i>
    </button>
  </header>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "header-comp",
  data() {
    return {
      header: false,
      nav: true
    };
  },
  methods: {
    headerShow() {
      if (this.header) {
        this.header = false;
      } else {
        this.header = true;
      }
    }
  },
  watch: {
    $route() {
      this.header = false;
      if (firebase.auth().currentUser) {
        this.nav = false;
      } else {
        this.nav = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_var.scss";

header {
  position: fixed;
  z-index: 10000;

  button {
    border: none;
    padding: 0;
    position: absolute;
    margin: 20px;
    //z-index: 2200;
    background: none;
    z-index: 1020;

    i {
      padding: 10px;
      color: $primary;
      -webkit-backdrop-filter: blur(10px);
      border-radius: 30px;
      font-size: 30px;
      //z-index: 2200;
      transition: 0.3s ease;

      &:active {
        background: lighten(rgba($color: $primary, $alpha: 0.8), 35);
      }
    }

    &:focus {
      outline: none;
    }
  }

  nav {
    //z-index: 1100;
    background: white;
    position: fixed;
    width: 100vw;
    //height: calc(100vh + 100px);
    height: 100vh;
    box-shadow: 0 30px 60px rgba($color: #000000, $alpha: 0.3);
    //top: -100px;
    font-size: 36px;

    button {
      position: absolute;
    }

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      padding: 0;
      margin: 0;

      a {
        display: block;
        margin: 10px;
        color: $primary;
        transition: 0.3s ease;

        &:hover {
          text-decoration: none;
          color: lighten($primary, 20);
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.2s;
}

.slide-enter,
  .slide-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  height: 0px;

  a {
    opacity: 0;
  }
}
</style>

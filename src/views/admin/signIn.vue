<template>
  <main class="auth d-flex justify-content-center align-items-center">

    <form @submit.prevent="auth">
      <h1>Admin login</h1>
      <label>Mail</label>
      <input type="text" v-model="mail">
      <label>Password</label>
      <input type="password" v-model="pw">
      <input type="submit" value="Login">
    </form>
    <section class="snackbar container" v-if="errorMsg">
      <h3>Error</h3>
      <p>{{errorMsg}}</p>
    </section>
  </main>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      mail: "",
      pw: "",
      errorMsg: ""
    };
  },
  methods: {
    auth() {
      this.errorMsg = "";
      firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          return firebase
            .auth()
            .signInWithEmailAndPassword(this.mail, this.pw)
            .then(() => {
              this.$router.replace("/admin");
            })
            .catch(err => {
              this.errorMsg = err.message;
            });
        })
        .catch(err => {
          this.errorMsg = err.message;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/_var.scss";

.auth {
  .snackbar {
    position: fixed;
    background: $error;
    padding: 20px;
    bottom: 20px;
    color: $white;
    border-radius: 15px;
    animation: snackbar 0.3s ease-out;
    transition: 0.3s ease-in;
    box-shadow: $el300;

    p {
      margin: 0;
    }
  }

  flex-flow: column;

  blockquote {
    width: 90vw;
    max-width: 600px;
  }

  form {
    padding: 50px;
    box-shadow: $el500;
    display: flex;
    flex-flow: column;
    width: 90vw;
    max-width: 600px;
    border-radius: $border-radius;

    input {
      width: 100%;
      border: none;

      border-radius: 100px;
      padding: 15px 25px;
      transition: 0.3s ease;

      &:focus {
        outline: none;
      }
    }

    input[type="text"],
    input[type="password"] {
      box-shadow: $el100;
      margin-bottom: 30px;

      &:focus {
        outline: none;
        box-shadow: $el200;
      }
    }

    input[type="submit"] {
      background: $primary;
      color: $white;
      box-shadow: $el100;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-color: lighten($color: $primary, $amount: 10);
      }
    }
  }
}

@keyframes snackbar {
  from {
    bottom: -200px;
    opacity: 0;
  }

  to {
    bottom: 20px;
    opacity: 1;
  }
}
</style>

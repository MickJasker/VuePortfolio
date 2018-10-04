<template>
  <main class="manager">
    <section class="toolbar">
      <div>
        <button>Add</button>
        <button>Settings</button>
        <button @click="signOut()">Sign out</button>
      </div>
    </section>
    <section class="items container">
      <div :to="{name: 'portfolioItem', params: {id: item.id, name: item.name}}" class="item" v-for="item in portfolioItems"
           :key="item.id">
        <div class="image" :style="'background-image: url(' + item.image + ')'"/>
        <div class="params">
          <div>
            <h4>{{item.name}}</h4>
            <h6>{{item.tag}}</h6>
          </div>
          
          <div class="buttons">
            <button class="edit">Edit</button>
            <button class="delete" @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      portfolioItems: [],
      deleteAlert: false,
      delete: false
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/login");
        })
        .catch(() => {});
    },
    deleteItem(id) {
      firebase
        .firestore()
        .doc("portfolio/" + id)
        .delete()
        .then(() => {
          //console.log("The item is deleted");
        })
        .catch(() => {
          //console.log(err);
        });
    }
  },
  created() {
    const portfolioCollection = firebase.firestore().collection("portfolio");
    portfolioCollection.orderBy("name").onSnapshot(snap => {
      this.portfolioItems = [];
      snap.forEach(doc => {
        const item = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          tag: doc.data().tag
        };
        this.portfolioItems.push(item);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/_var.scss";

.manager {
  .toolbar {
    display: flex;
    height: 90px;
    background: white;
    box-shadow: $el500;
    position: fixed;
    width: 100%;
    z-index: 500;

    div {
      display: flex;
      justify-content: flex-end;
      width: 100%;

      button {
        margin: auto 20px;
        padding: 10px 20px;
        border: none;
        color: $primary;
        font-size: 24px;
        transition: 0.3s ease;

        &:hover {
          background-color: lighten($color: $primary, $amount: 30);
          cursor: pointer;
        }

        &:active {
          background-color: lighten($color: $primary, $amount: 35);
          color: lighten($color: $primary, $amount: 15);
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  .items {
    padding-top: 100px;

    .item {
      display: flex;
      border-radius: $border-radius;
      margin: 40px auto;
      box-shadow: $el200;
      align-content: flex-end;

      .image {
        height: 200px;
        width: 30%;
        background-size: cover;
        border-radius: 20px 0 0 20px;
      }

      .params {
        width: 70%;
        h4,
        h6 {
          margin: 20px;
        }
        h4 {
          margin-bottom: 0;
        }
        h6 {
          margin-top: 0;
          color: lighten($color: $black, $amount: 40);
        }
        justify-content: space-between;
        display: flex;
        align-items: flex-end;

        .buttons {
          button {
            margin: 20px;
            border: none;
            padding: 10px 20px;
            font-size: 20px;
            transition: 0.3s ease;
            &:hover {
              cursor: pointer;
            }
            &:focus {
              outline: none;
            }
          }
          .edit {
            color: $primary;
            &:hover {
              background: lighten($color: $primary, $amount: 30);
            }
            &:active {
              background: lighten($color: $primary, $amount: 35);
              color: lighten($color: $primary, $amount: 10);
            }
          }
          .delete {
            color: $error;
            &:hover {
              background: lighten($color: $error, $amount: 30);
            }
            &:active {
              background: lighten($color: $error, $amount: 35);
              color: lighten($color: $error, $amount: 10);
            }
          }
        }
      }
    }
  }
}
</style>

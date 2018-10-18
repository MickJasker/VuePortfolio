<template>
  <main class="manager">
    <transition name="fade" mode="out-in">
      <section class="deletePopUp" v-if="deleteAlert.active">
        <section>
          <h2>Are you sure you want to delete this document?</h2>
          <h6 class="warning"><b>Warning</b>: This can't be undone!</h6>
          <button id="no" @click="deleteAlert.active = false">Cancel</button>
          <button id="yes" @click="deleteConfirmed()">Delete</button>
        </section>
      </section>
    </transition>
    <section class="toolbar">
      <div>
        <button>Add</button>
        <button>Settings</button>
        <button @click="signOut()">Sign out</button>
      </div>
    </section>
    <section class="items container">
      <transition-group name="fade" mode="out-in">
        <div class="item" v-for="item in portfolioItems"
             :key="item.id">
          <div class="image" :style="'background-image: url(' + item.image + ')'" />
          <div class="params">
            <div>
              <h4>{{item.name}}</h4>
              <h6>{{item.tag}}</h6>
            </div>
            <div class="buttons">
              <router-link :to="{name: 'PortfolioAdminEditor', params: {id: item.id, name: item.name, tag: item.tag, date: item.date, content:  item.content}}" >
                <button class="edit">Edit</button>
              </router-link>
              <button class="delete" @click="deleteItem(item.id)">Delete</button>
            </div>
          </div>
        </div>
      </transition-group>
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
      deleteAlert: {
        targetDocId: "",
        active: false
      },
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
      this.deleteAlert.active = true;
      this.deleteAlert.targetDocId = id;
    },
    deleteConfirmed() {
      firebase
        .firestore()
        .doc("portfolio/" + this.deleteAlert.targetDocId)
        .delete()
        .then(() => {
          setTimeout(() => {
            this.deleteAlert.active = false;
          }, 2000);
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
          tag: doc.data().tag,
          date: doc.data().date,
          content: doc.data().content
        };
        this.portfolioItems.push(item);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/_var.scss";

.manager {
  .deletePopUp {
    position: fixed;
    z-index: 2000;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color: $black, $alpha: 0.2);

    section {
      padding: 50px;
      box-shadow: $el500;
      background: white;
      border-radius: 20px;

      .warning {
        background: lighten($color: $warning, $amount: 38);
        border-left: solid $warning 3px;
        padding: 10px;
        color: $warning;
      }

      button {
        padding: 10px 20px;
        border: none;
        margin-right: 20px;
        transition: 0.3s ease;

        &:focus {
          outline: none;
        }

        &:hover {
          cursor: pointer;
        }
      }

      #yes {
        color: $error;
        background: lighten($color: $error, $amount: 35);

        &:active {
          background: lighten($color: $error, $amount: 37);
        }
      }

      #no {
        color: $primary;
        background: lighten($color: $primary, $amount: 35);

        &:active {
          background: lighten($color: $primary, $amount: 37);
        }
      }
    }
  }

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
      animation: fade 0.3s ease-in reverse;

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

@keyframes fade {
  from {
    opacity: 0;

    .image {
      height: 0;
    }
  }

  to {
    opacity: 1;

    .image {
      height: 200px;
    }
  }
}
</style>

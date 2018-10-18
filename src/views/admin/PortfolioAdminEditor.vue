<template>
  <main class="portfolioAdminEditor">
    <form class="container" @submit.prevent="saveDoc">
      <label>Name</label>
      <br>
      <input type="text" v-model="FormData.name">
      <br>
      <label>Tags</label>
      <br>
      <input type="text" v-model="FormData.tag">
      <br>
      <label>Date</label>
      <br>
      <input type="text" v-model="FormData.date">
      <vue-ckeditor v-model="FormData.content"/>
      <input type="submit" value="Save and publish">
    </form>
  </main>
</template>
<script>
import VueCkeditor from "vue-ckeditor2";
import firebase from "firebase/app";
import "firebase/firestore";

export default {
  data() {
    return {
      config: {
        toolbar: [["Bold", "Italic", "Underline", "Strike", "Subscript", "Superscript"]]
      },
      FormData: {
        name: this.name,
        tag: this.tag,
        date: this.date,
        content: this.content
      }
    };
  },
  props: {
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    tag: {
      type: String
    },
    date: {
      type: String
    },
    content: {
      type: String
    }
  },
  components: { VueCkeditor },
  methods: {
    saveDoc() {
      firebase
        .firestore()
        .doc("portfolio/" + this.id)
        .set(
          {
            name: this.FormData.name,
            tag: this.FormData.tag,
            date: this.FormData.date,
            content: this.FormData.content
          },
          { merge: true }
        )
        .then(() => {})
        .catch(() => {});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/_var.scss";
.portfolioAdminEditor {
  padding-top: 50px;
  form {
    input,
    .ckeditor {
      margin-bottom: 30px;
    }
    input {
      padding: 10px 20px;
      border: none;
      border-radius: 100px;
      box-shadow: $el100;
      transition: 0.3s ease;
      &:focus {
        outline: none;
      }
      &:hover {
        cursor: pointer;
      }
    }
    label {
      margin-bottom: 10px;
    }
    input[type="submit"] {
      border: none;
      background: $primary;
      color: white;
      &:hover {
        box-shadow: $el200;
      }
    }
  }
}
</style>

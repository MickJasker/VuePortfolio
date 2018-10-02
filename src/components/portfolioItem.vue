<template>
  <main class="portfolioItem">
    <section class="landing" :style="'background-image: url(' + image + ');'">
      <div class="container d-flex justify-content-center align-items-center flex-column">
        <div>
          <h1>{{name}}</h1>
          <h6>{{tag}}</h6>
          <h6>{{date}}</h6>
        </div>
      </div>
    </section>
    <article class="container" v-html="content"/>
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  data() {
    return {
      title: this.name,
      content: "",
      image: "",
      tag: "",
      date: ""
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
    }
  },
  created() {
    firebase
      .firestore()
      .doc("portfolio/" + this.id)
      .onSnapshot(doc => {
        this.content = doc.data().content;
        this.title = doc.data().name;
        this.image = doc.data().image;
        this.tag = doc.data().tag;
        this.date = doc.data().date;
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_var.scss";
.portfolioItem {
  .landing {
    height: 100vw;
    max-height: 40vh;
    background: whitesmoke;
    background-size: cover;
    background-position: center;
    margin-bottom: 50px;
    h1,
    h6 {
      margin: 0;
      color: white;
    }

    .container {
      height: 100%;
    }
  }
}
</style>

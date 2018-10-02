<template>
  <main class="portfolio container">
    <h1>My work</h1>
    <section class="grid">
      <router-link 
        data-aos="fade-up"
        :to="{name: 'portfolioItem', params: {id: item.id, name: item.name}}" 
        class="item" 
        v-for="item in portfolioItems" 
        :key="item.id" 
        :style="'height: ' + item.height + 'px; background-image: url(' + item.image + ')'"
      >
        <h4>{{item.name}}</h4>
        <i class="material-icons">arrow_forward</i>
      </router-link>
    </section>
  </main>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";
export default {
  data() {
    return {
      portfolioItems: []
    };
  },
  created() {
    const portfolioCollection = firebase.firestore().collection("portfolio");
    portfolioCollection.onSnapshot(snap => {
      this.portfolioItems = [];
      snap.forEach(doc => {
        const item = {
          id: doc.id,
          name: doc.data().name,
          height: doc.data().height,
          image: doc.data().image
        };
        this.portfolioItems.push(item);
      });
    });
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/_var.scss";
.portfolio {
  padding: 50px;
  margin: 0 auto;
  blockquote {
    padding: 20px;
    background-color: lighten($color: $warning, $amount: 35);
    border-left: $warning solid 7px;
    border-radius: 10px;
    i {
      color: $warning;
    }
    p {
      margin: 0;
    }
  }
  .grid {
    column-count: 3;
    column-gap: 20px;
    @media only screen and (max-width: 900px) {
      column-count: 2;
    }
    @media only screen and (max-width: 600px) {
      column-count: 1;
      column-gap: 0;
    }

    .item {
      display: flex;
      align-items: flex-end;
      background-size: cover !important;
      justify-content: space-between;
      break-inside: avoid;
      width: 100%;
      margin: 0 0 20px;
      padding: $border-radius;
      height: 500px;
      box-shadow: $el100;
      border-radius: 20px;
      transition: 0.3s ease;
      background: white;
      color: white !important;
      text-decoration: none;
      i {
        opacity: 0;
      }
      h4 {
        margin: 0;
      }
      &:hover {
        box-shadow: $el300;
        transform: scale(1.01);
        cursor: pointer;
        i {
          animation-name: wiggle;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      }
    }
  }
}

@keyframes wiggle {
  25% {
    transform: translateX(2.5px);
    opacity: 1;
  }
  75% {
    transform: translateX(-2.5px);
    opacity: 1;
  }
}
</style>

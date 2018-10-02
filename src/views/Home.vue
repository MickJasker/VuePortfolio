<template>
  <main>
    <section class="landing">
      <h1>Mick Jasker</h1>
      <h4>Webdeveloper, UX-designer and bartender.</h4>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
    </section>
    <section class="info d-flex">
      <section class="box" data-aos="fade-up">
        <img src="../assets/work.svg" alt="work">
        <h3>My portfolio</h3>
        <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
        <router-link to="/portfolio">
          <button>View my work</button>
        </router-link>
      </section>
      <section class="box" data-aos="fade-up">
        <img src="../assets/personal.svg" alt="personal">
        <h3>About me</h3>
        <h6>As a bartender and a ICT student I'm always on the lookout for social interaction and ways to make my workflow more efficient.</h6>
        <router-link to="/about">
          <button>Read more</button>
        </router-link>
      </section>
      <section class="box" data-aos="fade-up">
        <img src="../assets/contact.svg" alt="contact">
        <h3>Contact</h3>
        <h6>Send me an email, a phone call or an old fashioned letter.</h6>
        <router-link to="/contact">
          <button>Send me a message</button>
        </router-link>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
@import "../assets/_var.scss";

main {
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  background-position: left bottom;
  .landing {
    padding: 150px;

    h1 {
      font-size: 144px;
    }

    h4 {
      font-weight: 300;
      font-size: 36px;
    }

    h5 {
      font-size: 24px;
      font-weight: 300;
      color: lighten($color: $black, $amount: 30);
    }
  }
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-content: center;
  .info {
    justify-content: space-around;
    .box {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      box-shadow: $el500;
      background: $white;
      border-radius: 16px;
      padding: 30px;
      margin: 50px;
      max-width: 400px;

      h3,
      h6,
      a {
        margin: 10px;
      }

      img {
        height: 159px;
        margin: 20px auto;
      }

      h6 {
        color: lighten($color: $black, $amount: 30);
      }

      a {
        text-decoration: none;

        button {
          border: none;
          border-radius: 8px;
          color: $white;
          background: $primary;
          padding: 10px 20px;
          box-shadow: $el200;
          transition: 0.3s ease;
          &:hover {
            box-shadow: $el300;
            cursor: pointer;
          }
          &:active {
            background: lighten($color: $primary, $amount: 5);
            box-shadow: $el200;
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>

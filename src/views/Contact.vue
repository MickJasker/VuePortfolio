<template>
  <main class="contact">
    <section class="container contactBlock">
      <h2>Send me an email, a phone call or an old fashioned letter.</h2>
      <ul>
        <li>Mick Jasker</li>
        <li><a href="mailto:info@mickjasker.nl">info@mickjasker.nl</a></li>
        <li>+31 6 37609725</li>
        <li>Vestdijk 7-131</li>
        <li>5611CA Eindhoven</li>
        <li>The Netherlands</li>
      </ul>
    </section>
  </main>
</template>
<style lang="scss" scoped>
@import "../assets/_var.scss";
.contact {
  display: flex;
  align-items: center;
  background-image: url("../assets/map.jpg");
  background-size: cover;
  background-position: center;
  .contactBlock {
    padding: 50px;
    background: white;
    box-shadow: $el500;
    ul {
      padding: 0;
      margin: 0;
      li {
        list-style: none;
        margin-top: 10px;
      }
    }
  }
}
</style>

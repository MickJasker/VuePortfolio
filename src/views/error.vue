<template>
  <main class="error container">
    <h1>404</h1>
    <h2>Oh no, something went wrong!</h2>
    <h5>Either you got lost, or I really screwed up.</h5>
    <router-link to="/">Quick, take me back home!</router-link>
  </main>
</template>
<style lang="scss" scoped>
@import "../assets/_var.scss";
.error {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 144px;
    color: $error;
    font-weight: 200;
  }
  a {
    color: $primary;
    transition: 0.3s ease;
    &:hover {
      text-decoration: none;
      color: lighten($primary, 20);
    }
  }
}
</style>

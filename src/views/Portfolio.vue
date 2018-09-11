<template>
  <main class="portfolio">
    <h1>My work</h1>
    <section class="grid">
      <article class="item">
        <h4>Name</h4>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.portfolio {
  padding: 50px;
  .grid {
    column-count: 4;
    column-gap: 30px;
    .item {
      display: flex;
      align-items: flex-end;
      break-inside: avoid;
      width: 100%;
      margin: 0 0 30px;
      padding: 20px;
      height: 500px;
      box-shadow: 0 15px 30px rgba($color: #000000, $alpha: 0.25);
      border-radius: 20px;
      transition: 0.3s ease;
      background: white;
      h4 {
        margin: 0;
      }
      &:hover {
        box-shadow: 0 20px 35px rgba($color: #000000, $alpha: 0.25);
        cursor: pointer;
      }
    }
  }
}
</style>

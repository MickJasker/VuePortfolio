<template>
  <main class="about">
    <section class="container desc">
      <div class="row">
        <div class="col-lg-7">
          <h1 data-aos="fade-up">Hi, my name is Mick Jasker.</h1>
          <h5 data-aos="fade-up">As a bartender and a ICT student I'm always on the lookout for social interaction and
          ways to make my
          workflow more efficient.</h5>
          <p data-aos="fade-up">In august 2016 I started the study ICT at the Fontys University of applied sciences in
          Eindhoven. After going through all the basics (HTML, CSS, C#, UX, Business, Arduino) in the first semester
          I chose the ICT & media design route. In the second semester I started learning working with web
          programming languages like PHP and JavaScript. I also learned a lot about concepting, media strategies and
          user experience.</p>
          <p>
            After this semester I dropped PHP and focused myself completely on JavaScript and I started working with
            the CSS preprocessor SCSS. During this semester I also first got into contact with JS framework, after
            doing a really basic tutorial on React and Vue I decided to start with working with Vue because this
            framework has less steeper learning curve and only starts showing disadvantages if you’re really building
            huge applications, which wasn’t the case for me. Because I dropped PHP I didn’t have a backend environment
            for my projects. That’s when a friend recommended Firebase to me, backend made easy. It gave all the things
            I needed to get my projects up and running, like Firestore to store my data and Firebase Auth to
            authenticate my users.
          </p>
        </div>
        <div class="col-lg-5">
          <img src="../assets/Profiel.jpg" alt="" data-aos="fade-up">
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "../assets/_var.scss";

.about {
  padding-top: 100px;

  .desc {
    p {
      color: lighten($color: $black, $amount: 30);
    }

    img {
      width: 100%;
      border-radius: 1000px !important;
      box-shadow: $el400;
    }
  }
}
</style>

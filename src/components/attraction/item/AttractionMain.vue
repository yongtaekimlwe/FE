<template>
  <div>
    <section class="hero" id="home">
      <div class="container">
        <h2 class="h1 hero-title">BonVoyage With Good Vibe</h2>

        <p class="hero-text">
          가고 싶은 여행지, 펜션, 호텔, 맛집이 궁금하지 않으신가요? 저희
          서비스를 통해서 확인해보세요!
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AttractionMain",
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.h1,
.h2,
.h3 {
  font-weight: var(--fw-800);
  font-family: var(--ff-montserrat);
  text-transform: uppercase;
}

.h1 {
  font-weight: 800;
  font-family: Montserrat;
  text-transform: uppercase;
  color: var(--white);
  font-size: 2rem;
}

.h2,
.h3 {
  color: var(--gunmetal);
}

.h2 {
  font-size: var(--fs-2);
}
.hero {
  background-image: url("@/assets/hero-banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: hsla(0, 0%, 0%, 0.7);
  background-blend-mode: overlay;
  display: grid;
  place-items: center;
  min-height: 600px;
  text-align: center;
  padding-top: 125px;
}
.hero .container {
  max-width: 740px;
}

.hero-title {
  margin-bottom: 20px;
}

.hero-text {
  color: var(--white);
  font-size: var(--fs-5);
  margin-bottom: 40px;
}

@media (min-width: 580px) {
  .container {
    max-width: 580px;
    margin-inline: auto;
  }
}
</style>

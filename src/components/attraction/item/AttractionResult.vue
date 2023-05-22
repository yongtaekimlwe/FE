<template>
  <div class="popular" id="destination">
    <div class="container">
      <p class="section-subtitle">Bon Voyage Recommendation</p>

      <h2 class="h2 section-title">여행지</h2>

      <p class="section-text">검색 결과에 따른 추천 여행지입니다</p>
      <ul class="popular-list" v-if="destinations.length > 0">
        <li v-for="destination in destinations" :key="destination.title">
          <router-link
            :to="{
              name: 'attractiondetail',
              query: { address: encodeURIComponent(destination.addr1), id: 1 },
            }"
            class="popular-card"
          >
            <figure class="card-img">
              <img
                v-if="destination.firstimage.length > 0"
                :src="destination.firstimage"
              />
              <img v-else src="@/assets/popular-3.jpg" />
            </figure>
            <div class="card-content">
              <div class="card-rating"></div>
              <h3 class="h3 card-title">
                <a :href="destination.link">{{ destination.title }}</a>
              </h3>
              <p class="card-text">
                {{ destination.addr1 }}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
      <p v-else>검색 결과가 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AttractionResult",
  components: {},
  props: {
    destinations: [],
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
input,
button {
  background: none;
  border: none;
  font: inherit;
}

button {
  cursor: pointer;
}

input {
  width: 100%;
}
a {
  text-decoration: none;
}

a,
img,
span,
input,
label,
button,
ion-icon {
  display: block;
}
li {
  list-style: none;
}
.section-title {
  margin-bottom: 15px;
}
h2 {
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: hsl(206, 34%, 20%);
  font-size: calc(18px + 1.6vw);
}

h3 {
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  color: hsl(206, 34%, 20%);
  font-size: calc(16px + 0.45vw);
  font-weight: 700;
}
.popular {
  padding-block: 100px;
}

.popular-list,
.popular-list > li:not(:last-child) {
  margin-bottom: 30px;
}

.popular-card {
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  height: 430px;
}

.popular-card .card-img {
  height: 100%;
}

.popular-card .card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popular-card .card-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: hsl(0, 0%, 100%);
  border-radius: 25px;
  padding: 20px;
}

.popular-card .card-rating {
  background: hsl(214, 57%, 51%);
  color: hsl(0, 0%, 100%);
  position: absolute;
  top: 0;
  right: 25px;
  display: flex;
  align-items: center;
  gap: 1px;
  transform: translateY(-50%);
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
}

.popular-card .card-subtitle {
  color: hsl(197, 100%, 36%);
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.popular-card .card-title {
  margin-bottom: 5px;
}

.popular-card :is(.card-subtitle, .card-title) > a {
  color: inherit;
}

.popular .btn {
  margin-inline: auto;
}

.popular-card .card-content {
  right: auto;
}

.popular-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 50px;
}

.popular-list > li:not(:last-child) {
  margin-bottom: 0;
}

.popular-card .card-content {
  right: 20px;
}

.popular-list {
  grid-template-columns: repeat(3, 1fr);
}

.section-subtitle {
  color: hsl(214, 57%, 51%);
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 8px;
}
</style>

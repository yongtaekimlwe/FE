<template>
  <div>
    <section class="tour-search">
      <div class="container">
        <form action="" class="tour-search-form" @submit.prevent="submit">
          <div class="input-wrapper">
            <label for="destination" class="input-label"
              >Search Destination</label
            >
            <input
              type="text"
              v-model="destination"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              class="input-field"
            />
          </div>
          <div class="input-wrapper">
            <label for="destination" class="input-label">콘텐츠 선택</label>
            <b-form-select
              id="inline-form-custom-select-pref"
              v-model="content"
              class="mb-2 mr-sm-2 mb-sm-0 input-field wider-select"
              required
              :options="[
                { text: 'Choose...', value: null },
                { text: '관광지', value: 12 },
                { text: '문화시설', value: 14 },
                { text: '축제공연행사', value: 15 },
                { text: '여행코스', value: 25 },
                { text: '레포츠', value: 28 },
                { text: '숙박', value: 32 },
                { text: '쇼핑', value: 38 },
                { text: '음식점', value: 39 },
              ]"
              :value="null"
            ></b-form-select>
          </div>
          <div class="input-wrapper">
            <button type="submit" class="btn btn-secondary">검색하기</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AttractionSearch",
  components: {},
  data() {
    return {
      destination: "",
      content: null,
    };
  },
  created() {},
  methods: {
    submit() {
      this.$emit("search", {
        destination: this.destination,
        content: this.content,
      });
    },
  },
};
</script>
<style scoped>
.tour-search {
  padding: 60px;
}

.tour-search-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.input-wrapper {
  flex: 1;
  margin-right: 15px;
  margin-bottom: 10px;
}

.input-label {
  color: #fff;
  font-size: 15px;
  margin-bottom: 5px;
  display: block;
}

.input-field {
  background: #fff;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 50px;
  width: 100%;
}

.input-field::placeholder {
  color: #999;
}

.btn {
  width: 100%;
  font-weight: 600;
  margin-top: 35px;
}

.wider-select {
  height: auto;
}
</style>

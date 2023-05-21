<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <article>
      <attraction-main> </attraction-main>
      <attraction-search @search="handleSearch"></attraction-search>
      <attraction-result
        v-if="data.length > 0"
        :destinations="data"
      ></attraction-result>
    </article>
  </div>
</template>

<script>
import AttractionMain from "./item/AttractionMain.vue";
import AttractionSearch from "./item/AttractionSearch.vue";
import AttractionResult from "./item/AttractionResult.vue";
import axios from "axios";

export default {
  name: "AttractionList",
  components: { AttractionMain, AttractionSearch, AttractionResult },
  data() {
    return {
      data: [],
    };
  },
  created() {},
  methods: {
    handleSearch(data) {
      // 전달된 데이터를 처리하는 로직 작성
      const { destination, content } = data;
      console.log("Destination:", destination);
      console.log("Content:", content);
      const url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=r%2FMIIDRF9tywU%2FCiHu%2BLe6UxraE7ut%2FudEzoEzQYrk0N8hWsgRoncRKk0GJPa1G78A62DhHcuzfZDjNHal6osQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${destination}&contentTypeId=${content}`;

      const api = axios.create({
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      api
        .get(url)
        .then(({ data }) => {
          console.log(data);
          this.data = data.response.body.items.item;
          this.data.forEach((item) => {
            console.log(item.addr1);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>

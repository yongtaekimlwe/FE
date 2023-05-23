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
//import axios from "axios";

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
      console.log(data);
      //const { destination, content } = data;

      this.data = [
        {
          title: "개원사(경기)",
          addr1: "경기도 광주시 남한산성면 남한 산성로 731-73",
          addr2: "경기도 광주시 남한산성면 남한 산성로 731-72",
          first_image: "",
          first_image2: "",
          overview:
            "여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지",
          likeCount: 5,
        },
        {
          title: "경기 남양주 조안[슬로 시티]",
          addr1: "경기도 남양주시 조안면 북한강로 413",
          addr2: "경기도 광주시 남한산성면 남한 산성로 731-72",
          first_image:
            "http://tong.visitkorea.or.kr/cms/resource/61/1720461_image2_1.jpg",
          first_image2: "",
          overview:
            "여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지",
          likeCount: 10,
        },
        {
          title: "경기광주 한옥마을",
          addr1: "경기도 광주시 새오개길 39",
          addr2: "경기도 광주시 남한산성면 남한 산성로 731-72",
          first_image:
            "http://tong.visitkorea.or.kr/cms/resource/09/2739309_image2_1.jpg",
          first_image2: "",
          overview:
            "여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지",
          likeCount: 21,
        },
        {
          title: "경기전",
          addr1: "전라북도 전주시 완산구 태조로 44",
          addr2: "경기도 광주시 남한산성면 남한 산성로 731-72",
          first_image:
            "http://tong.visitkorea.or.kr/cms/resource/80/2648780_image2_1.jpg",
          first_image2: "",
          overview:
            "여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지여행지",
          likeCount: 4,
        },
      ];
      //   const url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=r%2FMIIDRF9tywU%2FCiHu%2BLe6UxraE7ut%2FudEzoEzQYrk0N8hWsgRoncRKk0GJPa1G78A62DhHcuzfZDjNHal6osQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${destination}&contentTypeId=${content}`;

      //   const api = axios.create({
      //     headers: {
      //       "Content-Type": "application/json;charset=utf-8",
      //     },
      //   });

      //   api
      //     .get(url)
      //     .then(({ data }) => {
      //       console.log(data);
      //       this.data = data.response.body.items.item;
      //       this.data.forEach((item) => {
      //         console.log(item.addr1);
      //       });
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
    },
  },
};
</script>

<style scoped></style>

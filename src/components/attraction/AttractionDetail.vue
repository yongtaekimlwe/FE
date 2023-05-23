<template>
  <div>
    <middle-title :input="this.destination.title"></middle-title>
    <map-item :address="this.destination.addr1"></map-item>
    <br />
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="8"
          ><div class="custom-div">
            {{ this.destination.overview }}
          </div>
        </b-col>
        <b-col
          ><b-card title="여행 시작하기" img-alt="Image" img-top>
            <b-card-text>
              여행 시작하기를 통해 나만의 여행목록을 관리해보세요!
            </b-card-text>
            <b-button class="button-color">Start</b-button>
          </b-card></b-col
        >
      </b-row>
      <b-row>
        <b-col
          ><h6 class="text-type">
            {{ this.destination.likeCount }}명의 사람들이 관심을 보이고 있는
            여행지입니다👋
          </h6></b-col
        >
      </b-row>
    </b-container>
    <br />
    <attraction-youtube></attraction-youtube>
  </div>
</template>
<script>
import AttractionYoutube from "@/components/attraction/item/AttractionYoutube.vue";
import MapItem from "@/components/attraction/item/MapItem.vue";
import MiddleTitle from "@/components/common/MiddleTitle.vue";
export default {
  name: "AttractionDetail",
  components: { MapItem, AttractionYoutube, MiddleTitle },

  data() {
    return {
      destination: [],
      isIconClicked: false,
    };
  },
  created() {
    console.log(this.$route.params.destination);
    this.destination = this.$route.params.destination;
    if (
      this.destination.first_image === "" &&
      this.destination.first_image2 === ""
    )
      this.destination.first_image = "@/assets/popular-3.jpg";
    // console.log(this.destination.addr1);
    // console.log(this.destination.addr2);
    // console.log(this.destination.first_image);
    // console.log(this.destination.first_image2);
    // console.log(this.destination.likeCount);
    // console.log(this.destination.overview);
    // console.log(this.destination.title);
  },
  methods: {
    toggleIconClicked() {
      this.isIconClicked = !this.isIconClicked;
    },
  },
};
</script>
<style scoped>
.text-type {
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 400;
  text-align: left;
  margin: 0;
  color: #df5000;
}

.custom-div {
  position: relative;
  padding-right: 30px;
  border-radius: 10px;
  background-color: #fcf6f1;
  padding: 20px;
}

.button-color {
  background-color: #df5000;
  outline: none;
}

.heart-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  color: red;
}

.clicked {
  color: red;
}
</style>

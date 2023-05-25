<template>
  <div id="app" class="container">
    <!-- hashtag -->
    <div class="tag-item-wrapper">
      <div v-for="tag in tags" :key="tag.id">
        <tag-item
          class="col-3"
          :menu_icon_src="tag.menu_icon_src"
          :menu_desc="tag.menu_desc"
        ></tag-item>
      </div>
    </div>

    <!-- 새로 만들기 -->
    <br />
    <div id="buttons" class="row justify-content-end">
      <b-button id="delete" variant="outline-dark" @click="doCreate()">새로 만들기</b-button>
    </div>

    <br />
    <!-- 여행 아이템 -->
    <b-container id="route">
      <div class="route-item-wrapper">
        <div v-for="route in routes" :key="route.routeId">
          <router-link :to="{ name: 'routeView', params: { routeId: route.routeId } }">
            <route-list-item
              :routeId="route.routeId"
              :userName="route.userName"
              :title="route.title"
              :tags="route.hashtags"
              :likes="route.likes"
            ></route-list-item>
          </router-link>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import TagItem from "../common/TagItem";
import RouteListItem from "@/components/route/item/RouteListItem";
import { getAllRoutes } from "@/api/route";

export default {
  name: "RouteList",
  components: {
    TagItem,
    RouteListItem,
  },
  data() {
    return {
      tags: [
        { menu_icon_src: "fa-umbrella-beach", menu_desc: "바다" },
        { menu_icon_src: "fa-umbrella-beach", menu_desc: "산" },
        { menu_icon_src: "fa-route", menu_desc: "가족과 함께" },
        { menu_icon_src: "fa-route", menu_desc: "연인과 함께" },
        { menu_icon_src: "fa-route", menu_desc: "호캉스" },
        { menu_icon_src: "fa-route", menu_desc: "촌캉스" },
        { menu_icon_src: "fa-route", menu_desc: "액티비티" },
        { menu_icon_src: "fa-route", menu_desc: "힐링" },
      ],
      routes: [],
    };
  },
  methods: {
    doCreate() {
      this.$router.push({ name: "routeWrite" });
    },
  },
  created() {
    // TODO: axios로 tag item 가져오기
    // TODO: axios로 여행 경로 게시글 item 가져오기
    getAllRoutes(
      ({ data }) => {
        console.log(data);
        this.routes = data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style>
.tag-item-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.route-item-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>

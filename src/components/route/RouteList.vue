<template>
  <div id="app" class="container">
    <!-- hashtag -->
    <div class="tag-item-wrapper">
      <div v-for="tag in hashtags" :key="tag.id">
        <tag-item class="col-3" :menu_icon_src="tag.tagIcon" :menu_desc="tag.tagName"></tag-item>
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
import { getHashtags } from "@/api/hashtag";

export default {
  name: "RouteList",
  components: {
    TagItem,
    RouteListItem,
  },
  data() {
    return {
      hashtags: [],
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
    getAllRoutes(
      ({ data }) => {
        // console.log(data);
        this.routes = data;
      },
      (error) => {
        console.log(error);
      }
    );
    getHashtags(
      ({ data }) => {
        this.hashtags = data.hashtags;
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

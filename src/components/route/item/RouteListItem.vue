<template>
  <div id="item">
    <div class="container">
      <div class="content">
        <!-- 제목 -->
        <div id="title" class="row justify-content-center">
          <h4>{{ title }}</h4>
        </div>
        <!-- 태그 -->
        <div id="tags" class="row justify-content-center">
          <div id="tag" v-for="(tag, index) in tags" :key="index">
            <tag-item :menu_icon_src="tag.menu_icon_src" :menu_desc="tag.menu_desc"></tag-item>
          </div>
        </div>
        <!-- 좋아요 수, 작성자 -->
        <div id="infos">
          <small class="text-muted">
            <font-awesome-icon icon="fa-regular fa-heart" />
            {{ likes }}
            &nbsp;
          </small>
          {{ userName }}
        </div>
      </div>
      <div class="overlay">
        <map-item :plans="plans"></map-item>
      </div>
    </div>
  </div>
</template>

<script>
import TagItem from "@/components/common/TagItem.vue";
import MapItem from "./MapItem.vue";

export default {
  data() {
    return {
      plans: [
        {
          day: 1,
          order: 1,
          simpleDesc: "해운대해수욕장",
          addr: "부산 해운대구 우동",
          latitude: "129.158109075138",
          logtitude: "35.1628906355142",
        },
        {
          day: 1,
          order: 2,
          simpleDesc: "감천문화마을",
          addr: "부산 사하구 감내1로 200",
          latitude: "129.009426440728",
          logtitude: "35.0962593359206",
        },
      ],
    };
  },
  props: {
    routeId: Number,
    userName: String,
    title: String,
    tags: Array,
    likes: Number,
  },
  components: {
    TagItem,
    MapItem,
  },
};
</script>

<style>
a,
a:hover {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

#item {
  height: 100%;
  border: 1px solid black;
  border-radius: 10%;
}

#title {
  margin-bottom: 10%;
}

#tag {
  display: inline;
  margin: 1px;
  pointer-events: none;
}

#infos {
  padding-top: 10%;
}

.container {
  position: relative;
  width: 100%;
  height: 250px;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10%;
}
</style>

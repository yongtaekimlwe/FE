<template>
  <div id="item">
    <!-- 제목 -->
    <div id="title" class="row justify-content-center">
      <h4>{{ this.title }}</h4>
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
        {{ this.likes }}
        &nbsp;
      </small>
      {{ this.userName }}
    </div>
  </div>
</template>

<script>
import TagItem from "@/components/common/TagItem.vue";

export default {
  props: {
    routeId: Number,
    userName: String,
    title: String,
    tags: Array,
    likes: Number,
  },
  components: {
    TagItem,
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
  margin: 20px;
  height: 30%;
}

#tag {
  display: inline;
  margin: 1px;
  pointer-events: none;
}

#infos {
  margin: 5px;
  border: 50px;
  padding-top: 5%;
  padding-bottom: 5%;
}
</style>

<template>
  <div id="item">
    <div class="container">
      <div class="content">
        <!-- 제목 -->
        <div id="title" class="row justify-content-center">
          <h4>{{ title }}</h4>
        </div>
        <!-- 태그 -->
        <div class="tag-container" v-for="tag in this.tags" :key="tag.id">
          <b-badge href="#" variant="dark" :menu_icon_src="tag.menu_icon_src" class="tag-item">
            {{ tag.tagName }}
          </b-badge>
          <span id="spanblank"></span>
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
    </div>
  </div>
</template>

<script>
// import TagItem from "@/components/common/TagItem.vue";
// import { getRoute } from "@/api/route";

export default {
  data() {
    return {};
  },
  props: {
    routeId: Number,
    userName: String,
    title: String,
    tags: Array,
    likes: Number,
  },
  components: {
    // TagItem,
  },
  created() {},
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

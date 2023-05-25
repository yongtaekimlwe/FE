<template>
  <div class="tag-container">
    <b-badge
      v-for="tag in this.tags"
      :key="tag.tagName"
      href="#"
      variant="dark"
      :menu_icon_src="tag.tagIcon"
      class="tag-item"
    >
      {{ tag.tagName }}
    </b-badge>
  </div>
</template>

<script>
export default {
  name: "TagListDetail",
  components: {},
  props: {
    tags: [],
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.tag-container {
  margin-top: auto;
}

.tag-item {
  margin-right: 10px;
}
</style>

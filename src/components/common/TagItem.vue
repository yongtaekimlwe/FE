<template>
  <div id="app">
    <b-button pill variant="outline-dark">
      <font-awesome-icon :icon="this.menu_icon_src" />
      {{ menu_desc }}
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    menu_icon_src: String,
    menu_desc: String,
  },
};
</script>

<style scoped>
div {
  display: inline;
}
</style>

<template>
  <div id="block">
    <!-- <h6> -->
    <font-awesome-icon icon="fa-location-dot" />
    <strong> {{ simple_desc }}</strong>
    <!-- </h6> -->
    <div>{{ addr }}</div>
  </div>
</template>

<script>
export default {
  props: {
    addr: String,
    simple_desc: String,
  },
};
</script>

<style scoped>
#block {
  line-height: 180%;
  border-style: solid;
  border-color: rgb(210, 215, 221);
  border-width: 1px;
  background-color: rgb(232, 236, 238);
}
</style>

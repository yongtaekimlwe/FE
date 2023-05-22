<template>
  <div>
    <map-item :address="this.address"></map-item>
  </div>
</template>
<script>
import MapItem from "./item/MapItem.vue";

export default {
  name: "AttractionDetail",
  components: { MapItem },
  data() {
    return {
      address: "",
    };
  },
  created() {
    this.address = decodeURIComponent(this.$route.query.address);
    const id = this.$route.query.id;
    console.log(this.address);
    console.log(id);
  },
  methods: {},
};
</script>
<style scoped></style>

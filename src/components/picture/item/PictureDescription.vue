<template>
  <div>
    <b-card no-body class="overflow-hidden" style="width: 100%">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            src="https://picsum.photos/300/150/?image=41"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="this.data.title">
            <b-card-text>
              {{ this.data.content }}
            </b-card-text>
            <tag-list-detail :tags="this.data.hashtags"></tag-list-detail>
            <div class="heart-container">
              <font-awesome-icon
                icon="heart"
                class="heart-icon"
              ></font-awesome-icon>
              <span class="heart-count">{{ 5 }}</span>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import TagListDetail from "@/components/common/TagListDetail.vue";

export default {
  name: "PictureDescription",
  components: { TagListDetail },
  props: {
    data: {},
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.heart-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.heart-icon {
  margin-left: 5px;
}

.heart-count {
  font-weight: bold;
}
</style>

<template>
  <div>
    <div class="tag-item-wrapper">
      <div v-for="tag in hashtags" :key="tag.id">
        <tag-item
          class="col-3"
          :menu_icon_src="tag.tagIcon"
          :menu_desc="tag.tagName"
        ></tag-item>
      </div>
    </div>
    <br />
    <div class="text-right">
      <router-link :to="{ name: 'picturepost' }"
        ><b-button
          variant="outline-secondary"
          class="button-right"
          v-if="userInfo"
          >사진 공유하기</b-button
        ></router-link
      >
    </div>
    <br />
    <br />
    <b-card-group deck>
      <div class="card-wrapper">
        <router-link
          class="router-link"
          v-for="picture in pictures"
          :key="picture.imageId"
          :to="{ name: 'picturedetail', params: { imageId: picture.imageId } }"
        >
          <b-card
            :title="picture.title"
            :img-src="picture.imageUrl"
            img-alt="Image"
            img-top
          >
            <b-card-body
              ><tag-list-detail :tags="picture.hashtags"></tag-list-detail
            ></b-card-body>
            <template #footer>
              <small class="text-muted"> Liked: 3 </small>
            </template>
          </b-card>
        </router-link>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import { getPictures } from "@/api/picture";
import TagItem from "@/components/common/TagItem.vue";
import TagListDetail from "../common/TagListDetail.vue";
import { getHashtags } from "@/api/hashtag";
import { mapState } from "vuex";
const userStore = "userStore";
export default {
  name: "PictureList",
  components: { TagItem, TagListDetail },
  data() {
    return {
      message: "Picture List",
      hashtags: [],
      pictures: [],
    };
  },
  created() {
    getPictures(
      ({ data }) => {
        this.pictures = data.pictures;
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
  methods: {},
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
};
</script>
<style scoped>
.text-right {
  text-align: right;
}

.button-right {
  float: right;
}
.tag-item-wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>

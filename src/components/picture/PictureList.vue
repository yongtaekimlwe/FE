<template>
  <div>
    <div class="tag-item-wrapper">
      <div v-for="tag in tags" :key="tag.id">
        <tag-item
          class="col-3"
          :menu_icon_src="tag.menu_icon_src"
          :menu_desc="tag.menu_desc"
        ></tag-item>
      </div>
    </div>
    <br />
    <div class="text-right">
      <router-link :to="{ name: 'picturepost' }"
        ><b-button variant="outline-secondary" class="button-right"
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
          v-for="card in cards"
          :key="card.id"
          :to="{ name: 'picturedetail', params: { id: card.id } }"
        >
          <b-card
            :title="card.title"
            :img-src="card.imgSrc"
            img-alt="Image"
            img-top
          >
            <b-card-text>{{ card.writer }}님의 게시글</b-card-text>
            <template #footer>
              <small class="text-muted"> Liked: {{ card.likeCount }} </small>
            </template>
          </b-card>
        </router-link>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import TagItem from "@/components/common/TagItem.vue";

export default {
  name: "PictureList",
  components: { TagItem },
  data() {
    return {
      message: "Picture List",
      tags: [
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
        {
          menu_icon_src: "fa-brands fa-fort-awesome",
          menu_desc: "즐길거리",
        },
      ],
      cards: [
        {
          id: 0,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
        {
          id: 1,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
        {
          id: 2,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
        // 더미 데이터 추가
        {
          id: 3,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
        {
          id: 4,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
        {
          id: 5,
          title: "Title 1",
          writer: "작성자",
          likeCount: "3",
          imgSrc: "https://picsum.photos/300/300/?image=41",
          tags: [],
        },
      ],
    };
  },
  created() {},
  methods: {},
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

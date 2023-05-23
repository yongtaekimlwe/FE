<template>
  <div class="home">
    <!-- 메뉴 이동 -->
    <div id="menu" class="row">
      <router-link :to="{ name: 'attraction' }">
        <tag-item
          class="col-3"
          menu_icon_src="fa-brands fa-fort-awesome"
          menu_desc="즐길거리"
        ></tag-item>
      </router-link>
      <router-link :to="{ name: 'routeList' }">
        <tag-item class="col-3" menu_icon_src="fa-route" menu_desc="여행 경로"></tag-item>
      </router-link>
      <router-link :to="{ name: 'picture' }"
        ><tag-item
          class="col-3"
          menu_icon_src="fa-regular fa-image"
          menu_desc="사진 게시판"
        >
        </tag-item
      ></router-link>
      <tag-item
        class="col-3"
        menu_icon_src="fa-solid fa-database"
        menu_desc="추억 공유"
      ></tag-item>
    </div>
    <!-- carousel -->
    <br />
    <div class="banner">
      <div class="video-container">
        <video
          src="@/assets/files/bgvid.mp4"
          type="video/mp4"
          autoplay
          muted
          loop
        ></video>
        <h1 class="video-title">BonVoyage</h1>
      </div>
    </div>
    <!-- 인기 여행지 -->
    <br />
    <div id="popular">
      <div id="pop-text">인기 여행지</div>
    </div>
    <!-- TODO: 여행지 컴포넌트 불러오기 -->
  </div>
</template>

<script>
import TagItem from "@/components/common/TagItem";

export default {
  name: "HomeView",
  components: { TagItem },
};
</script>

<style>
#pop-text {
  text-align: left;
  font-weight: bold;
}
.banner {
  position: relative;
}

.video-container {
  position: relative;
}

.video-title {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 10vh;
  text-decoration: none;
  color: rgb(255, 255, 255);
  transform: translate(-50%, -50%);
  z-index: 1;
}
.banner video {
  width: 100%;
}
</style>

<template>
  <div class="home">
    <!-- 메뉴 이동 -->
    <div id="menu" class="row">
      <menu-item
        class="col-3"
        menu_icon_src="fa-brands fa-fort-awesome"
        menu_desc="즐길거리"
      ></menu-item>
      <menu-item class="col-3" menu_icon_src="fa-route" menu_desc="여행 경로"></menu-item>
      <menu-item
        class="col-3"
        menu_icon_src="fa-regular fa-image"
        menu_desc="사진 게시판"
      ></menu-item>
      <menu-item
        class="col-3"
        menu_icon_src="fa-solid fa-database"
        menu_desc="추억 공유"
      ></menu-item>
    </div>
    <!-- carousel -->
    <br />
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=13"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=15"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=43"></b-carousel-slide>
    </b-carousel>
    <!-- 인기 여행지 -->
    <br />
    <div id="popular">
      <div id="pop-text">인기 여행지</div>
    </div>
    <!-- TODO: 여행지 컴포넌트 불러오기 -->
  </div>
</template>

<script>
import MenuItem from "@/components/home/MenuItem";

export default {
  name: "HomeView",
  components: { MenuItem },
};
</script>

<style>
#pop-text {
  text-align: left;
  font-weight: bold;
}
</style>

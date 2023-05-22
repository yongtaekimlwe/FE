<template>
  <div id="navbar">
    <b-navbar toggleable="lg" class="py-4">
      <!-- 왼쪽 로고 -->
      <router-link :to="{ name: 'home' }">
        <!-- <img src=""> -->
        <h3>BonVoyage</h3>
      </router-link>

      <!-- 오른쪽 회원-->
      <!-- TODO: 로그인 여부에 따라 다르게 보이도록 하기 -->
      <div class="ml-auto">
        <!-- 로그인 X -->
        <div v-if="false">
          <router-link :to="{ name: 'login' }">로그인</router-link> |
          <router-link :to="{ name: 'join' }">회원가입</router-link>
        </div>
        <!-- 로그인 O -->
        <div v-else>
          <b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <!-- TODO: 사용자가 지정한 이미지가 있으면 해당 이미지 사용하기 -->
                <b-avatar size="2rem"></b-avatar>
              </template>
              <b-dropdown-item @click="mvProfile">회원 정보</b-dropdown-item>
              <hr />
              <b-dropdown-item href="#">좋아요 누른 글 보기</b-dropdown-item>
              <b-dropdown-item href="#">작성한 글 보기</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    mvProfile() {
      this.$router.push({ name: "mypage" });
    },
  },
};
</script>

<style scoped>
navbar {
  background-color: white;
}

#navItem {
  display: flex;
}

a,
a:hover,
a:link,
a:visited {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

hr {
  width: 75%;
}
</style>

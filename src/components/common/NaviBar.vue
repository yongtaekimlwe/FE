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
        <div v-if="true">
          <a href="#">로그인</a> |
          <a href="#">회원가입</a>
        </div>
        <!-- 로그인 O -->
        <div v-else>
          <b-navbar-nav>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <b-avatar></b-avatar>
              </template>
              <b-dropdown-item href="#">회원 정보</b-dropdown-item>
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
export default {};
</script>

<style scoped>
navbar {
  background-color: white;
}

#navItem {
  display: flex;
}

a,
a:hover {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

hr {
  width: 75%;
}
</style>

<template>
  <b-container id="app">
    <br />
    <b-row>
      <!-- 지도 -->
      <b-col id="map" md="8">
        <map-item :plans="this.plans"></map-item>
      </b-col>
      <b-col md="4">
        <div class="row">
          <div id="blank"></div>
          <!-- 태그 -->
          <div id="tag" v-for="(tag, index) in tags" :key="index">
            <tag-item :menu_icon_src="tag.menu_icon_src" :menu_desc="tag.menu_desc"></tag-item>
          </div>
          <!-- 사람 -->
          <!-- TODO: 참여자인지 아닌지에 따라 하트 or 참여자 목록 보기 -->
          <div id="people" v-if="true">
            <b-avatar-group size="2rem" id="people-group">
              <b-avatar
                v-for="(person, index) in filterdPeople"
                :key="index"
                :src="person.src"
              ></b-avatar>
            </b-avatar-group>
            <!-- 참여하는 모든 사람 보기 -->
            <b-tooltip target="people-group" triggers="click" placement="bottom" variant="light">
              <b-list-group>
                <b-list-group-item
                  class="d-flex align-items-center"
                  v-for="(person, index) in people"
                  :key="index"
                >
                  <b-avatar class="mr-2" :src="person.src"></b-avatar>
                  <div>
                    <div id="person-name">{{ person.name }}</div>
                    <div>{{ person.email }}</div>
                  </div>
                </b-list-group-item>
              </b-list-group>
              <!-- 멤버 추가하기 -->
              <!-- TODO: 글 작성자라면 멤버를 추가할 수 있도록 -->
              <div v-if="true">
                <add-item-modal add="addMember"></add-item-modal>
              </div>
            </b-tooltip>
          </div>
          <div class="heart" v-else>
            <!-- TODO: 사용자가 좋아요 눌렀는지, 안눌렸는지에 따라 다르게 나타남 -->
            <font-awesome-icon icon="fa-regular fa-heart" v-if="true" />
            <font-awesome-icon icon="fa-solid fa-heart" style="color: #ff0000" v-else />
          </div>
        </div>
        <br />
        <!-- 제목 -->
        <h5>{{ this.title }}</h5>
        <!-- 좋아요, 작성자 이름 -->
        <div class="row justify-content-center">
          <p>
            <small class="text-muted">
              <font-awesome-icon icon="fa-regular fa-heart" />
              {{ this.likes }}
              &nbsp;
            </small>
            {{ this.userName }}
          </p>
        </div>
        <!-- 소개글 -->
        <p>{{ this.content }}</p>
        <!-- 여행지 아이템 -->
        <div id="plan">
          <draggable v-model="plans" draggable=".plans" :options="{ disabled: true }">
            <div v-for="item in plans" :key="item.order" class="plans">
              <route-attraction-item
                :addr="item.addr"
                :simple_desc="item.simpleDesc"
              ></route-attraction-item>
            </div>
          </draggable>
        </div>
        <!-- 수정 삭제 버튼 -->
        <!-- TODO: 작성자인지 아닌지에 따라 수정, 삭제 가능 여부 변경-->
        <div id="buttons" class="row justify-content-end" v-if="true">
          <b-button id="modify" variant="outline-dark" @click="doModify()">수정</b-button>
          &nbsp;
          <b-button id="delete" variant="outline-dark" @click="doDelete()">삭제</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import draggable from "vuedraggable";
import MapItem from "@/components/route/item/MapItem.vue";
import TagItem from "../common/TagItem.vue";
import AddItemModal from "@/components/route/item/AddItemModal.vue";
import RouteAttractionItem from "@/components/route/item/RouteAttractionItem.vue";

export default {
  components: {
    draggable,
    MapItem,
    TagItem,
    AddItemModal,
    RouteAttractionItem,
  },
  data() {
    return {
      routeId: "",
      people: [
        {
          name: "민지",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1guYM__zMkuh98K9iEx3kivS4VKuOuUapA&usqp=CAU",
          email: "minji@ssafy.com",
        },
        {
          name: "하니",
          src: "https://i.namu.wiki/i/pWjwjQ8g8PHy37F-IQvM0qmUH6-NhCH0mLeMGrBArerxV_eATwJT_7rgdHcUhWZrRWG-TF7nMY7BiD0YSu5Tbg.webp",
          email: "hani@ssafy.com",
        },
        {
          name: "안유진",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyt1L4ehWnB3ETLc_7dG7pzoq3av0EYmIc0g&usqp=CAU",
          email: "yujin@ssafy.com",
        },
        {
          name: "카즈하",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAslJ3B-tcuQK3WcAgqJWwjb4ZyDOKxbIEGw&usqp=CAU",
          email: "kazuha@ssafy.com",
        },
      ],
      newFriendEmail: "",
      tags: [
        { menu_icon_src: "fa-umbrella-beach", menu_desc: "바다" },
        { menu_icon_src: "fa-route", menu_desc: "가족과 함께" },
      ],
      title: "[0603-0608] 부산 여행 계획",
      userName: "박예한",
      content: "부산에 가려고 합니다. 물떡도 먹고 서핑도 하고 등산도 하고 재밌게 놀 예정~",
      likes: 3,
      plans: [
        {
          day: 1,
          order: 1,
          simpleDesc: "해운대해수욕장",
          addr: "부산 해운대구 우동",
          latitude: "129.158109075138",
          logtitude: "35.1628906355142",
        },
        {
          day: 1,
          order: 2,
          simpleDesc: "감천문화마을",
          addr: "부산 사하구 감내1로 200",
          latitude: "129.009426440728",
          logtitude: "35.0962593359206",
        },
        {
          day: 2,
          order: 3,
          simpleDesc: " 해운대블루라인파크",
          addr: "부산 해운대구 달맞이길62번길 1",
          latitude: "129.171510713128",
          logtitude: "35.1609046409049",
        },
        {
          day: 2,
          order: 4,
          simpleDesc: "롯데월드 어드벤처 부산",
          addr: "부산 기장군 기장읍 동부산관광로 42",
          latitude: "129.213206917811",
          logtitude: "35.1960618136802",
        },
        {
          day: 2,
          order: 5,
          simpleDesc: "허심청",
          addr: "부산 동래구 온천장로107번길 32",
          latitude: "129.082686623437",
          logtitude: "35.2211550981779",
        },
      ],
    };
  },
  methods: {
    doModify() {
      this.$router.replace({
        name: "routeModify",
        params: { routeId: this.routeId },
      });
    },
    doDelete() {
      // TODO: 삭제하기 API
      this.$router.push({ name: "routeList" });
    },
  },
  created: {
    // TODO: axios로 게시글 상세 정보 가져오기
    // 1) 지도
    // 2) 참여하는 사람 정보(people 배열)
    // 3) 태그
  },
  computed: {
    filterdPeople() {
      return this.people.slice(0, 3);
    },
  },
};
</script>

<style scoped>
#app {
  position: relative;
}

#map {
  height: 38vw;
}

#blank {
  width: 5%;
}

#tag {
  display: inline;
  margin: 1px;
  pointer-events: none;
}

#people {
  position: absolute;
  top: 0.5%;
  right: 0px;
}

#person-name {
  text-align: left;
}

#buttons {
  position: absolute;
  bottom: 0px;
  right: 10%;
}
</style>

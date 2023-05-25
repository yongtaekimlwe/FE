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
          <div id="tag" v-for="(tag, index) in hashtags" :key="index">
            <tag-item :menu_icon_src="tag.tagIcon" :menu_desc="tag.tagName"></tag-item>
          </div>
          <!-- 사람 -->
          <!-- TODO: 참여자인지 아닌지에 따라 하트 or 참여자 목록 보기 -->
          <div id="people" v-if="userName === userInfo.name">
            <b-avatar-group size="2rem" id="people-group">
              <b-avatar
                v-for="(person, index) in filterdPeople"
                :key="index"
                :src="person.imgSrc"
              ></b-avatar>
            </b-avatar-group>
            <!-- 참여하는 모든 사람 보기 -->
            <b-tooltip target="people-group" triggers="click" placement="bottom" variant="light">
              <b-list-group>
                <b-list-group-item
                  class="d-flex align-items-center"
                  v-for="(person, index) in friends"
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
        <div id="buttons" class="row justify-content-end" v-if="userName == userInfo.name">
          <b-button id="modify" variant="outline-dark" @click="doModify()">수정</b-button>
          &nbsp;
          <b-button id="delete" variant="outline-dark" @click="doDelete()">삭제</b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Draggable from "vuedraggable";
import MapItem from "@/components/route/item/MapItem.vue";
import TagItem from "../common/TagItem.vue";
import AddItemModal from "@/components/route/item/AddItemModal.vue";
import RouteAttractionItem from "@/components/route/item/RouteAttractionItem.vue";
import { getRoute } from "@/api/route";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
  components: {
    Draggable,
    MapItem,
    TagItem,
    AddItemModal,
    RouteAttractionItem,
  },
  data() {
    return {
      friends: [],
      newFriendEmail: "",
      title: "",
      content: "",
      userName: "",
      likes: "",
      hashtags: [],
      plans: [
        {
          day: 1,
          order: 1,
          simpleDesc: "해운대해수욕장",
          addr: "부산 해운대구 우동",
          latitude: "129.158109075138",
          logtitude: "35.1628906355142",
        },
      ],
    };
  },
  methods: {
    doModify() {
      // this.$router.replace({
      //   name: "routeModify",
      //   params: { routeId: this.routeId },
      // });
    },
    doDelete() {
      // TODO: 삭제하기 API
      this.$router.push({ name: "routeList" });
    },
  },
  created() {
    this.routeId = this.$route.params.routeId;
    getRoute(
      this.routeId,
      ({ data }) => {
        console.log(data);
        this.friends = data.participants;
        this.title = data.title;
        this.content = data.content;
        this.userName = data.userName;
        this.likes = data.likes;
        this.hashtags = data.hashtags;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
    filterdPeople() {
      return this.friends.slice(0, 3);
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
  border-radius: 10%;
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

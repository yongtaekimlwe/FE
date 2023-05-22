<template>
  <b-container id="app">
    <br />
    <b-row>
      <!-- 지도 -->
      <b-col id="map" md="8">
        <map-item></map-item>
      </b-col>
      <b-col md="4">
        <div id="blank"></div>
        <b-row>
          <!-- 태그 -->
        </b-row>
        <br />
        <!-- 제목 -->
        <div>
          <b-form-input v-model="this.title" placeholder="제목을 입력하세요."></b-form-input>
        </div>
        <br />
        <!-- 소개글 -->
        <div>
          <b-form-textarea
            id="textarea"
            v-model="this.content"
            placeholder="간단한 소개글을 작성해 주세요."
            rows="3"
            max-rows="3"
          ></b-form-textarea>
        </div>
        <br />
        <!-- 여행지 아이템 -->
        <div>
          <b-row class="justify-content-end">
            <add-item-modal add="addAttraction"></add-item-modal>
          </b-row>
          <div id="plan">
            <draggable v-model="plans" draggable=".plans">
              <div v-for="item in plans" :key="item.order" class="plans">
                <route-attraction-item
                  :addr="item.addr"
                  :simple_desc="item.simpleDesc"
                ></route-attraction-item>
              </div>
            </draggable>
          </div>
        </div>
        <!-- 저장 버튼 -->
        <!-- TODO: 여행 경로 저장하기 -->
        <b-button id="save" variant="outline-dark">저장</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import MapItem from "./item/MapItem.vue";
import AddItemModal from "@/components/route/item/AddItemModal.vue";
import RouteAttractionItem from "./item/RouteAttractionItem.vue";

export default {
  components: {
    MapItem,
    AddItemModal,
    RouteAttractionItem,
  },
  data() {
    return {
      title: "",
      content: "",
      tags: [],
      selectedTags: [],
      plans: [],
    };
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

#addContent {
  border: 2px solid gray;
  border-radius: 50%;
  width: 8%;
  height: 5%;
  font-weight: bold;
}

#save {
  position: absolute;
  bottom: 0px;
  right: 10%;
}
</style>

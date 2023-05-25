<template>
  <div id="app" class="container">
    <div>
      <br />
      <!-- 제목 -->
      <section>
        <middle-title :input="firstTitle"></middle-title>
        <input-title v-model="title"></input-title>
      </section>
      <!-- 태그 -->
      <section>
        <select-tag @handleTagChange="handleTagChange"></select-tag>
      </section>
      <br />
      <!-- 소개글 -->
      <section>
        <middle-title :input="secondTitle"></middle-title>
        <input-content v-model="content"></input-content>
      </section>
      <br />
      <!-- 여행지 아이템 -->
      <section>
        <middle-title :input="thirdTitle"></middle-title>
        <b-row class="justify-content-end">
          <add-item-modal add="addAttraction"></add-item-modal>
        </b-row>
      </section>

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
    <!-- 지도 -->
    <br />
    <section id="map" class="row">
      <map-item></map-item>
    </section>
    <!-- 저장 버튼 -->
    <section>
      <b-button id="save" variant="outline-dark">저장</b-button>
    </section>
  </div>
</template>

<script>
import MapItem from "./item/MapItem.vue";
import AddItemModal from "@/components/route/item/AddItemModal.vue";
import RouteAttractionItem from "./item/RouteAttractionItem.vue";
import SelectTag from "@/components/picture/item/SelectTag.vue";
import Draggable from "vuedraggable";
import MiddleTitle from "@/components/common/MiddleTitle.vue";
import InputTitle from "@/components/picture/item/InputTitle.vue";
import InputContent from "../picture/item/InputContent.vue";

export default {
  components: {
    MapItem,
    AddItemModal,
    RouteAttractionItem,
    SelectTag,
    Draggable,
    MiddleTitle,
    InputTitle,
    InputContent,
  },
  data() {
    return {
      firstTitle: "제목을 입력하고 태그들을 선택해주세요",
      secondTitle: "소개글을 입력해주세요",
      thirdTitle: "여행지를 선택하세요",
      title: "",
      selectedTags: [],
      content: "",
      plans: [],
    };
  },
  methods: {
    handleTagChange(selectedTags) {
      this.selectedTags = selectedTags;
    },
  },
};
</script>

<style scoped>
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
</style>

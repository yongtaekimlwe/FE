<template>
  <div>
    <h6>{{ message }}</h6>
    <b-form-group label-for="tags-component-select">
      <b-form-tags
        id="tags-component-select"
        v-model="value"
        size="lg"
        class="mb-2"
        add-on-change
        no-outer-focus
      >
        <template
          v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }"
        >
          <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
            <li v-for="tag in tags" :key="tag" class="list-inline-item">
              <b-form-tag
                @remove="removeTag(tag)"
                :title="tag"
                :disabled="disabled"
                class="custom-tag"
                >{{ tag }}</b-form-tag
              >
            </li>
          </ul>
          <b-form-select
            v-bind="inputAttrs"
            v-on="inputHandlers"
            :disabled="disabled || availableOptions.length === 0"
            :options="availableOptions"
          >
            <template #first>
              <option disabled value="">Choose a tag...</option>
            </template>
          </b-form-select>
        </template>
      </b-form-tags>
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "SelectTag",
  components: {},
  data() {
    return {
      options: [
        "산",
        "바다",
        "호캉스",
        "촌캉스",
        "액티비티",
        "힐링",
        "도심",
        "가족과 함께",
        "연인과 함께",
        "친구와 함께",
      ],
      value: [],
      message: "태그 선택",
    };
  },
  watch: {
    value: {
      handler(newVal) {
        this.handleTagChange(newVal);
      },
    },
  },
  created() {},
  methods: {
    handleTagChange(newVal) {
      this.$emit("handleTagChange", newVal);
    },
  },
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
  },
};
</script>

<style scoped>
h6 {
  font-family: "Spoqa Han Sans Neo", sans-serif;
  font-weight: 700;
  text-align: left;
  margin-top: 50px;
}

.custom-tag {
  background-color: #ffcd00; /* 원하는 색상으로 변경 */
  color: black; /* 텍스트 색상 변경 */
}
</style>

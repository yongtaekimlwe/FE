<template>
  <div>
    <section>
      <middle-title :input="firstTitle"></middle-title>
      <input-title v-model="title"></input-title>
    </section>
    <section>
      <select-tag @handleTagChange="handleTagChange"></select-tag>
    </section>
    <section>
      <middle-title :input="secondTitle"></middle-title>
      <input-content v-model="content"></input-content>
      <input-file @handleFileChange="handleFileChange"></input-file>
      <b-button variant="outline-secondary" class="button-right" @click="submit"
        >확인</b-button
      >
      <b-button variant="outline-secondary" class="button-right" @click="cancel"
        >취소</b-button
      >
    </section>
  </div>
</template>
<script>
import MiddleTitle from "@/components/common/MiddleTitle.vue";
import InputContent from "@/components/picture/item/InputContent.vue";
import SelectTag from "@/components/picture/item/SelectTag.vue";
import InputTitle from "@/components/picture/item/InputTitle.vue";
import InputFile from "@/components/picture/item/InputFile.vue";
import AWS from "aws-sdk";
import { postPictureBoard, updatePictureBoard } from "@/api/picture";
import { mapState, mapActions } from "vuex";

const userStore = "userStore";

export default {
  name: "PicturePost",
  components: {
    MiddleTitle,
    SelectTag,
    InputContent,
    InputTitle,
    InputFile,
  },
  data() {
    return {
      id: "",
      firstTitle: "제목을 입력하고 태그들을 선택해주세요",
      secondTitle: "소개글을 입력해주시고 사진을 선택해주세요",
      title: "",
      selectedTags: [],
      hashtags: [],
      file: [],
      content: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    AWS.config.update({
      region: process.env.VUE_APP_BUCKET_REGION,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
      }),
    });
  },
  methods: {
    ...mapActions(userStore, ["userLogout"]),
    handleTagChange(selectedTags) {
      this.selectedTags = selectedTags;
    },
    handleFileChange(file) {
      this.file = file;
    },
    cancel() {
      this.$router.go(-1);
    },
    submit() {
      const mapping = {
        산: 1,
        바다: 2,
        호캉스: 3,
        촌캉스: 4,
        액티비티: 5,
        힐링: 6,
        도심: 7,
        "가족과 함께": 8,
        "연인과 함께": 9,
        "친구와 함께": 10,
      };
      if (this.isEmpty()) {
        alert("모든 폼에 대한 입력을 완료해야 합니다.");
      } else {
        //전송 로직
        const vm = this;
        this.selectedTags.forEach((tagName) => {
          this.hashtags.push(mapping[tagName]);
        });
        this.addPhoto(vm); // AWS에 이미지 추가
      }
    },
    addPhoto(vm) {
      var fileName = this.file.name;
      var albumPhotosKey = encodeURIComponent("images") + "/"; // encodeURIComponent("image") : albumName
      var photoKey = albumPhotosKey + fileName;

      var upload = new AWS.S3.ManagedUpload({
        // 업로드
        params: {
          Bucket: process.env.VUE_APP_ALBUM_BUCKET_NAME,
          Key: photoKey,
          Body: this.file,
        },
      });

      var promise = upload.promise();
      promise.then(
        function (data) {
          const pictureBoard = {
            userId: vm.userInfo.id,
            title: vm.title,
            content: vm.content,
            hashtags: vm.hashtags,
            imageUrl: data.Location,
          };
          console.log(vm.$route.name);
          console.log(pictureBoard);
          if (vm.$route.name === "picturepost") {
            postPictureBoard(pictureBoard)
              .then(() => vm.$router.go(-1))
              .catch((error) => console.log(error));
          } else {
            updatePictureBoard(vm.id, pictureBoard)
              .then(() => vm.$router.go(-1))
              .catch((error) => console.log(error));
          }
        },
        function (err) {
          console.log("There was an error uploading photo", err.message);
        }
      );
    },
    isEmpty() {
      return (
        this.title === "" ||
        this.file.length === 0 ||
        this.selectedTags.length === 0 ||
        this.content === ""
      );
    },
  },
  computed: {
    ...mapState(userStore, ["userInfo"]),
  },
};
</script>

<style scoped>
.button-right {
  margin-top: 100px;
  float: right;
}
</style>

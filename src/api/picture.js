import { pictureInstance } from "./index.js";

const picture = pictureInstance();

// 사진 게시물 리스트
async function getPictures(success, fail) {
  await picture.get("/list").then(success).catch(fail);
}

//사진 게시물 상세보기
async function getPictureDetail(imageId, success, fail) {
  await picture.get(`/${imageId}`).then(success).catch(fail);
}

//사진 게시물 전체 댓글 조회
async function getPictureCommentsByImageId(imageId, success, fail) {
  await picture.get(`/comments/${imageId}`).then(success).catch(fail);
}

//사진 게시물에 댓글 생성
async function postComment(imageId, comment, success, fail) {
  await picture
    .post(`/comments/${imageId}`, JSON.stringify(comment))
    .then(success)
    .catch(fail);
}

export {
  getPictures,
  getPictureDetail,
  getPictureCommentsByImageId,
  postComment,
};

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

//사진 게시물 댓글 삭제
async function deleteComment(commentId, success, fail) {
  await picture.delete(`/comments/${commentId}`).then(success).catch(fail);
}

//사진 게시물 생성
async function postPictureBoard(pictureBoard, success, fail) {
  await picture
    .post("", JSON.stringify(pictureBoard))
    .then(success)
    .catch(fail);
}

//사진 게시물 수정
async function updatePictureBoard(imageId, pictureBoard, success, fail) {
  await picture
    .update(`/${imageId}`, JSON.stringify(pictureBoard))
    .then(success)
    .catch(fail);
}

//사진 게시물 삭제
async function deletePictureBoard(imageId, success, fail) {
  await picture.delete(`/${imageId}`).then(success).catch(fail);
}

export {
  getPictures,
  getPictureDetail,
  getPictureCommentsByImageId,
  postComment,
  deleteComment,
  postPictureBoard,
  updatePictureBoard,
  deletePictureBoard,
};

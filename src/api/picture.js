import { pictureInstance } from "./index.js";

const picture = pictureInstance();

async function getPictures(success, fail) {
  await picture.get("/list").then(success).catch(fail);
}

async function getPictureDetail(imageId, success, fail) {
  await picture.get(`/${imageId}`).then(success).catch(fail);
}

export { getPictures, getPictureDetail };

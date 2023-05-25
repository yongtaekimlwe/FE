import { hashtagInstance } from "./index.js";

const hashtag = hashtagInstance();

async function getHashtags(success, fail) {
  await hashtag.get("/list").then(success).catch(fail);
}

export { getHashtags };


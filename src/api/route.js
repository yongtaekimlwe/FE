import { routeInstance } from "./index.js";

const route = routeInstance();

async function getAllRoutes(success, fail) {
    await route.get('/').then(success).catch(fail);
}

async function getRoute(routeId, success, fail) {
    await route.get(`/${routeId}`).then(success).catch(fail);
}

async function searchByEmail(routeId, email, success, fail) {
    await route.get(`/friend?email=${email}`).then(success).catch(fail);
}

// async function registRoute(success, fail) {
//     await user.get(`/kakao/token?code=${code}`).then(success).catch(fail);
// }

export { getAllRoutes, getRoute, searchByEmail };
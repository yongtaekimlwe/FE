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

async function addFriend(email, routeId, success, fail) {
    await route.get(`/friend/add/${routeId}?email=${email}`).then(success).catch(fail);
}
  
async function deleteFriend(email, routeId, success, fail) {
    await route.get(`/friend/delete/${routeId}?email=${email}`).then(success).catch(fail);
  }

export { getAllRoutes, getRoute, searchByEmail, addFriend, deleteFriend };
export const BASE_URL = 'https://nuxt-todo-server.herokuapp.com/api/';

const RESOURCES = {
  auth: 'auth'
};

export const ENDPOINT = {
  auth: {
    index: `${RESOURCES.auth}`,
    login: `${RESOURCES.auth}/login`
  }
};

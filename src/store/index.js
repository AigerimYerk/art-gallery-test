import axios from 'axios'
import { createStore } from 'vuex';

const CLIENT_ID = 'g8kSVxtgnL-nsxGwdsnavs8rjCNpsKlLkaNx8_wc22c';
const IMAGES_COUNT = 8;

const store = createStore({
  state: {
    images: [],
    favoritesList: [],
  },
  mutations: {
    updateList(state, response) {
      return state.images = response.results;
    },
    setNewFavorite(state, item) {
      state.favoritesList.push(item);
    }
  },
  actions: {
    updateList({ commit }, title) {
      return axios.get(`https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&per_page=${IMAGES_COUNT}&query=${title}`).then(({ data }) => {
        commit('updateList', data);
      }).catch((error) => {
        console.error(error);
      });
    },
    setNewFavorite({ commit }, item) {
      commit('setNewFavorite', item);
    }
  }
});

export default store;
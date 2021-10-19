import {
  createStore
} from 'vuex'

export default createStore({
  state() {
    return {
      stockPhotos: []
    };
  },
  getters: {
    fetchedStockPhotos(state) {
      return state.stockPhotos;
    }
  },
  mutations: {
    getStockPhotos(state, accessKey, url) {
      fetch(url + '/photos/' + "?client_id=" + accessKey)
        .then((response) => {
          state.stockPhotos = response;
        });
    }
  },
  actions: {
    getStockPhotos(context, accessKey, url) {
      context.commit('getStockPhotos', accessKey, url);
    }
  },
  modules: {}
})
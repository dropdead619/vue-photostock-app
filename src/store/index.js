import {
  createStore
} from 'vuex'
import axios from 'axios';

export default createStore({
  state() {
    return {
      stockPhotos: [
        [],
        [],
        [],
        [],
      ],
      searchInput: '',
      isLoading: false,
      accessKey: "uMIpaI-f_-INqfzuz_3gXZM926Yj8dlxP0zd81w8Wq0",
      url: "https://api.unsplash.com",
      page: 1,
      perPage: 28,
    };
  },
  getters: {
    fetchedStockPhotos(state) {
      return state.stockPhotos;
    }
  },
  mutations: {
    incrementPage(state) {
      state.page++;
    },
    fetchStockPhotos(state, data) {
      for (let i = 0; i < data.length; i++) {
        if (i % 4 === 0) {
          state.stockPhotos[0].push(data[i]);
        } else if (i % 4 === 1) {
          state.stockPhotos[1].push(data[i]);
        } else if (i % 4 === 2) {
          state.stockPhotos[2].push(data[i]);
        } else if (i % 4 === 3) {
          state.stockPhotos[3].push(data[i]);
        }
      }
    },
    toggleLoadingState(state) {
      state.isLoading = !state.isLoading;
    },
    updateSearchInput(state, searchValue) {
      state.searchInput = searchValue;
    },
    resetStockPhotos(state) {
      state.stockPhotos = [
        [],
        [],
        [],
        [],
      ];
    }
  },
  actions: {
    incrementPage(context) {
      context.commit("incrementPage");
    },
    updateSearchInput(context, args) {
      context.commit("updateSearchInput", args.searchValue);
    },
    fetchStockPhotos(context) {
      axios.get(`${context.state.url}/photos`, {
          params: {
            client_id: context.state.accessKey,
            page: context.state.page,
            per_page: context.state.perPage,
          }
        })
        .then(response => {
          context.commit('toggleLoadingState');
          if (response.status === 200) {
            return response.data;
          } else {
            throw 'Status exception!';
          }
        })
        .catch(err => {
          console.log(err);
        })
        .then(data => {
          console.log(data);
          context.commit('fetchStockPhotos', data);
          context.commit('toggleLoadingState');
        });
    },
    fetchPhotosBySearchValue(context) {
      axios.get(`${context.state.url}/search/photos`, {
          params: {
            client_id: context.state.accessKey,
            page: context.state.page,
            per_page: context.state.perPage,
            query: context.state.searchInput.trim()
          }
        })
        .then(response => {
          context.commit('toggleLoadingState');
          if (response.status === 200) {
            return response.data;
          } else {
            throw 'Status exception!';
          }
        })
        .catch(err => {
          console.log(err);
        })
        .then(data => {
          console.log(data.results);
          context.commit('fetchStockPhotos', data.results);
          context.commit('toggleLoadingState');
        });
    },
    resetStockPhotos(context) {
      context.commit('resetStockPhotos');
    }
  },
})
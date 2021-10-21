import {
  createStore
} from 'vuex'

export default createStore({
  state() {
    return {
      stockPhotos: [
        [],
        [],
        [],
        [],
      ],
      stockPhotosArr: [],
      searchInput: '',
      isLoading: false
    };
  },
  getters: {
    fetchedStockPhotos(state) {
      return state.stockPhotos;
    }
  },
  mutations: {
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
    fetchStockPhotosArray(state, data) {
      state.stockPhotosArr = data;
      console.log(state.stockPhotosArr);
    },
    addStockPhotosArrayElems(state, data) {
      for(const photo of data) {
        state.stockPhotosArr.push(photo);
      }
    },
    toggleLoadingState(state) {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    fetchStockPhotos(context, args) {
      fetch(`${args.url}/${args.path}?client_id=${args.accessKey}&page=${args.page}&per_page=${args.perPage}`)
        .then(response => {
          context.commit('toggleLoadingState');
          if (response.ok) {
            return response.json()
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
          context.commit(args.arrayMutation, data);
          context.commit('toggleLoadingState');
        });
    },
  },
})
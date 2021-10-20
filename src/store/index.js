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
    fetchStockPhotos(state, data) {
      state.stockPhotos = data;
    },
    addMorePhotos(state, data) {
      for(const photo of data) {
        state.stockPhotos.push(photo);
      }
    }
  },
  actions: {
    fetchStockPhotos(context, args) {
      fetch(`${args.url}/photos/?client_id=${args.accessKey}&page=${args.page}&per_page=${args.perPage}`)
        .then(response => {
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
          context.commit(args.mutation, data);
        });
    },
  },
  modules: {}
})
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: false
    },
    mutations: {
      loginSucces (state) {
        state.isLoggedIn = true;
      }
    }
  })
};

export default createStore

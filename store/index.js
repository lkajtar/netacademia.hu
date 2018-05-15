import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      isLoggedIn: false,
      isLoading: false,
      name: "",
      email: ""
    },
    actions: {
      AUTH_REQ({ commit, dispatch }) {
        // TODO: axios refaktor
        fetch("https://app.netacademia.hu/api/Profile/1.0.0/profile", {
          credentials: "include"
        })
          .then(r => {
            if (r.ok) {
              return r.json();
            } else {
              commit("AUTH_LOGOUT");
              dispatch("SHOW_ERROR", "Server mondja: You shall not pass!");
            }
          })
          .then(resp => commit("AUTH_SUCCESS", resp))
          .catch(err => dispatch("SHOW_ERROR", err));
      },
      AUTH_LOGOUT({ commit, dispatch }) {
        // TODO: axios refaktor
        fetch("https://app.netacademia.hu/Account/LogOffAjax", {
          method: "POST",
          credentials: "include"
        })
          .then(r => {
            if (r.ok) {
              commit("AUTH_LOGOUT");
            } else {
              dispatch("SHOW_ERROR", "Logout para");
            }
          })
          .catch(err => dispatch("SHOW_ERROR", err));
      },
      SHOW_ERROR({ commit, dispatch }, msg) {
        console.warn(msg);
      }
    },
    mutations: {
      AUTH_REQ(state) {
        state.isLoading = true;
      },
      AUTH_SUCCESS(state, resp) {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.name = resp.name || "Felhasználó";
        state.email = resp.email || "";
      },
      AUTH_LOGOUT(state) {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.name = "";
        state.email = "";
      }
    }
  });
};

export default createStore;

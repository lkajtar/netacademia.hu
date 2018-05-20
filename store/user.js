import { ERROR_ACTION } from "./index";

export const AUTH_REQ_ACTION = "AUTH_REQ";
export const AUTH_LOGOUT_ACTION = "AUTH_LOGOUT";

export const state = () => ({
  isLoggedIn: false,
  isLoading: false,
  name: "",
  email: ""
});

export const actions = {
  [AUTH_REQ_ACTION]: ({ rootState, state, commit, dispatch }) => {
    // TODO: axios refaktor
    if (!state.isLoggedIn) {
      fetch(rootState.backend.user, {
        credentials: "include"
      })
        .then(r => {
          if (r.ok) {
            return r.json();
          } else {
            // commit("AUTH_LOGOUT");
            return Promise.reject("Server mondja, you shall not pass!");
          }
        })
        .then(resp => commit("AUTH_SUCCESS", resp))
        .catch(err => dispatch(ERROR_ACTION, err, { root: true }));
    }
  },
  [AUTH_LOGOUT_ACTION]: ({ rootState, commit, dispatch }) => {
    // TODO: axios refaktor
    fetch(rootState.backend.logout, {
      method: "POST",
      credentials: "include"
    })
      .then(r => {
        if (r.ok) {
          commit("AUTH_LOGOUT");
          return true;
        } else {
          return Promise.reject("Gond volt valami a logoutnal");
        }
      })
      .catch(err => dispatch(ERROR_ACTION, err, { root: true }));
  }
};
export const mutations = {
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
};

import { ERROR_ACTION } from "./index";

export const AUTH_REQ_ACTION = "AUTH_REQ";
export const AUTH_LOGOUT_ACTION = "AUTH_LOGOUT";

export const AUTH_REQ_MUTATION = "AUTH_REQ";
export const AUTH_SUCCESS_MUTATION = "AUTH_SUCCESS";
export const AUTH_LOGOUT_MUTATION = "AUTH_LOGOUT";

export const state = () => ({
  isLoggedIn: false,
  isLoading: false,
  name: "",
  email: ""
});

export const actions = {
  [AUTH_REQ_ACTION](ctx) {
    if (!ctx.state.isLoggedIn) {
      return this.$axios
        .$get(ctx.rootState.url.user)
        .then(resp => ctx.commit(AUTH_SUCCESS_MUTATION, resp))
        .catch(err => ctx.dispatch(ERROR_ACTION, err, { root: true }));
    }
  },
  [AUTH_LOGOUT_ACTION](ctx) {
    return this.$axios
      .$post(ctx.rootState.url.logout)
      .then(resp => ctx.commit(AUTH_LOGOUT_MUTATION))
      .catch(err => ctx.dispatch(ERROR_ACTION, err, { root: true }));
  }
};
export const mutations = {
  [AUTH_REQ_MUTATION](state) {
    state.isLoading = true;
  },
  [AUTH_SUCCESS_MUTATION](state, resp) {
    state.isLoading = false;
    state.isLoggedIn = true;
    state.name = resp.name || "Felhasználó";
    state.email = resp.email || "";
  },
  [AUTH_LOGOUT_MUTATION](state) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.name = "";
    state.email = "";
  }
};

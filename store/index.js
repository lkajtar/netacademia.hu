export const ERROR_ACTION = 'ERROR';

export const state = () => ({
  cookieOK: false,
  baseUrl: process.env.baseUrl,
  backend: {
    base: process.env.backendUrl,
    user: process.env.backendUrl + "/api/Profile/1.0.0/profile",
    login: process.env.backendUrl + '/Account/Logon',
    logout: process.env.backendUrl + '/Account/LogOffAjax',
    courses: process.env.backendUrl + "/api/Courses/1.0.0"
  }
});


export const actions = {
  [ERROR_ACTION]: ({ commit, dispatch }, err) => {
    console.warn(err);
  }
}

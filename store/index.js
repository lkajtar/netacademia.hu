export const ERROR_ACTION = "ERROR";

export const state = () => ({
  cookieOK: false,
  url: {
    base: process.env.baseUrl,
    backend: process.env.backendUrl,
    user: "/api/Profile/1.0.0/profile",
    login: "/Account/Logon",
    logout: "/Account/LogOffAjax",
    courses: "/api/Courses/1.0.0/CourseCards",
    categories: "/api/Courses/1.0.0/PublicCategories"
  }
});

export const actions = {
  [ERROR_ACTION]: ({ commit, dispatch }, err) => {
    console.warn(err);
  }
};

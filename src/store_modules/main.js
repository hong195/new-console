import router from '@/router';

export default {
  state: {
    user: {},
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    login({ commit }, username, password) {
      console.log(username)
      let user = {
        id: 1,
        name: username,
        role: "user",
        permissions: ["view", "", "create", "delete"],
      };
      commit("setUser", user)
      commit("successMessage", "You are logged in")
      router.push({ name: "Dashboard" })
    },
    logout({ commit }) {
      let user = {};
      commit("setUser", user)
      router.push({ name: "Login" })
    }
  },
}

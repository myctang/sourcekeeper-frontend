import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        id: 1,
        admin: true
      },

      sources: [
        {
          id: 1,
          url: "none",
          title: 'Как стать программистом',
          author: 'Игорь Попов',
          category: 'lection',
          keywords: "",
          group: "white"
        },
        {
          id: 2,
          url: "none",
          title: 'Как стать программистом',
          author: 'Игорь Попов',
          category: 'book',
          keywords: "",
          group: "green"
        }
      ]
    },

    mutations: {
      setSources (state, payload) {
        state.sources = []

        for (let i = 0; i < payload.length; i++) {
          state.sources.push(payload)
        }
      },

      setUser (state, payload) {
        state.user.id = payload.id
        state.user.admin = payload.admin
      },

      unsetUser (state, payload) {
        state.user.id = 0
        state.user.admin = false
      }
    }
  })
}

export default createStore

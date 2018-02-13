import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        id: 0
      },

      sources: [
        {
          id: 1,
          title: 'Как стать программистом',
          author: 'Игорь Попов',
          category: 'История успеха',
          keywords: [],
          group: "white",
          language: ""
        },
        {
          id: 1,
          title: 'Как стать программистом',
          author: 'Игорь Попов',
          category: 'История успеха',
          keywords: [],
          group: "green",
          language: ""
        }
      ]
    },

    mutations: {
      newSource (state, payload) {
        state.sources.push({
          id: payload.id,
          title: payload.title,
          author: payload.author,
          category: payload.category,
          keywords: payload.keywords,
          group: payload.group,
          language: payload.language
        })
      },

      removeSource (state, payload) {

      }
    }
  })
}

export default createStore

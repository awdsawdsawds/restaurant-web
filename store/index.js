export const state = () => ({
  restaurants: [],
  nextPageToken: null
})

export const getters = {
  restaurantByID (state) {
    return state.restaurants
      .find(restaurant => restaurant.place_id)
  }
}

export const mutations = {
  clearRestaurant (state) {
    state.restaurants = []
  },

  setRestaurant (state, restaurants) {
    state.restaurants = [...state.restaurants, ...restaurants]
  },

  setNextPageToken (state, nextPageToken) {
    state.nextPageToken = nextPageToken
  }

}

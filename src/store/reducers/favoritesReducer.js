const INITIAL_STATE ={
     favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
}

export function favoritesReducer (state = INITIAL_STATE, action)  {
    switch (action.type) {
        case "ADD_TO_FAVORITES": {
            return {
                ...state,
                favorites: [...state.favorites, action.favoriteLocation]
            }
        }
        case "REMOVE_FROM_FAVORITES": {
            return {
                ...state,
                favorites: state.favorites.filter(favLocation => favLocation.id !== action.locationId)
            }
        }
        default:
            return state
    }
}

export default favoritesReducer
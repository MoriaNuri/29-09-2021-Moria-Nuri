const INITIAL_STATE ={
<<<<<<< HEAD
     favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
}

export function favoritesReducer (state = INITIAL_STATE, action)  {
=======
    // favorites:[]
     favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
}


export function favoritesReducer (state = INITIAL_STATE, action)  {
    
>>>>>>> b29dca0e0ba0af0d994318eabb3c48b32333f729
    switch (action.type) {
        case "ADD_TO_FAVORITES": {
            console.log(action);
            return {
                ...state,
                favorites: [...state.favorites, action.favoriteLocation]
            }
        }
        case "REMOVE_FROM_FAVORITES": {
            console.log(action);
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
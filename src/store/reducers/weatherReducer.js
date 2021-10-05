
const INITIAL_STATE = {
  options: [],
  currWeather: {},
  forecast: null,
  favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
  loading: true,
  isDay: true

};

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_AUTOCOMPLETE_OPTIONS':
      return {
        ...state,
        options: action.options
      };
    case 'SET_CURR_WEATHER':
      return {
        ...state,
        currWeather: action.currWeather
      }
    case 'SET_CURR_FORECAST':
      return {
        ...state,
        forecast: action.forecast,
        loading: false
      }

    case 'SET_ISDAY':
      return {
        ...state,
        isDay: false
      }
    case 'ADD_LOCATION_TO_FAV':
      return {
        ...state,
        favorites: [...state.favorites, action.favLocation]
      }
    case 'DELETE_LOCATION_FROM_FAV':
      return {
        ...state,
        favorites: state.favorites.filter(favLocation => favLocation.id !== action.locationId)
      }
    default:
      return state;
  }
}

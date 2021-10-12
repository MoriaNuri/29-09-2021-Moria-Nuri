
const INITIAL_STATE = {
  options: [],
  currWeather: {},
  forecast: null,
  favorites: localStorage.favoriteDB ? JSON.parse(localStorage.favoriteDB) : [],
  loading: true,
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
      // If no case is found  return the state-To prevent the app from crashing and 
      // because Ridex initially initializes the state without action(undefined)
    default:
      return state;
  }
}

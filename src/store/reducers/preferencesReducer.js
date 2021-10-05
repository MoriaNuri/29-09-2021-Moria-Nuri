const INITIAL_STATE ={
    isCelsius:localStorage.getItem ('isCelsius')|| false
}

export function preferencesReducer (state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_TEMP_TOGGLE':
            localStorage.setItem('isCelsius', !state.isCelsius)
            return{
                ...state,isCelsius:!state.isCelsius
            }
            
        default:
           return state
    }
}
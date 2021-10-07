const INITIAL_STATE ={
    isCelsius:localStorage.getItem ('isCelsius')|| false,
    mode: localStorage.getItem('mode') || '#36393f'
}

export function preferencesReducer (state=INITIAL_STATE,action){
    switch (action.type) {
        case 'SET_TEMP_TOGGLE':
            localStorage.setItem('isCelsius', !state.isCelsius)
            return{
                ...state,isCelsius:!state.isCelsius
            }

            case 'SET_APP_MODE_THEME':
                localStorage.setItem('mode',action.mode)
                return {
                    ...state,
                    mode: action.mode
                }
            
        default:
           return state
    }
}
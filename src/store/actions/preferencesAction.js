export function toggleTemp(){
    return{
        type: 'SET_TEMP_TOGGLE'
    }
}

export function setAppMode(mode) {
    return {
        type: 'SET_APP_MODE_THEME',
        mode
    }
}

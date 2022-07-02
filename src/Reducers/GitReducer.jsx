const GitReducer = (state, action) => {
    if(action.type === "get data") {
        return action.payLoad
    }else if(action.type === "loading") {
        return state.isLoading
    }else if(action.type === 'stop loading'){
        return {...state, isLoading: false}
    } else if(action.type === "start loading"){
        return {
            ...state, isLoading: true
        }
    }else if (action.type === 'clear search'){
        return {
            ...state,
            items: []
        }
    }else {
        return state
    }
}

export default GitReducer
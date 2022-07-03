const GitReducer = (state, action) => {
    if(action.type === "get data") {
        return {...state, items: action.payLoad.items, isLoading: false}
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
    }else if (action.type === 'get user') {
        return {
            ...state,
            user: action.payLoad,
            isLoading: false
        }
    }else if(action.type="get repos"){
        return {
            ...state,
            repos: action.payLoad
        }

    }else{
        return state
    }
}

export default GitReducer
const GitReducer = (state, action) => {
    if(action.type === "get data") {
        return action.payLoad
    }else if(action.type === "loading") {
        return state.isLoading
    } else {
        return state
    }
}

export default GitReducer
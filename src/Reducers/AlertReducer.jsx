const AlertReducer = (state, action) => {
    switch(action.type){
        case "set alert":
            return action.payload
        case "remove alert":
            return null
    }
    
}

export default AlertReducer
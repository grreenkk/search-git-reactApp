import {createContext, useReducer} from 'react'
import AlertReducer from '../Reducers/AlertReducer'

const AlertContext = createContext()

export const AlertProvider =({children})=> {
    const[state, dispatchAlert] = useReducer(AlertReducer, null)


    const setAlert = (msg, type) => {
        dispatchAlert({type: "set alert", payload: {
            type,
            msg
        }}) 

        setTimeout(()=>dispatchAlert({type: "remove alert"}), 2000)
    }


    return <AlertContext.Provider value={{
        state,
        setAlert
    }}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext
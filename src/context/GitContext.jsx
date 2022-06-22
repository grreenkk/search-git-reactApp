import {createContext, useState, useEffect, useReducer} from 'react'
import GitReducer from '../Reducers/GitReducer'

const GitContext = createContext()

export const GitContextProvider = ({children}) => {
   
    const [gitState, dispatchState] = useReducer(GitReducer, {data : [], isLoading: true} ) 

    const gitData = async() => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            header: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()
        // getData(data)
        // setIsLoading(false)

        dispatchState({type:'get data', payLoad: {data, isLoading: false}})

    }

    
    return(
        <GitContext.Provider value={{
            data: gitState.data,
            isLoading: gitState.isLoading,
            gitData
        }}>
            {children}
        </GitContext.Provider>
    )
}

export default GitContext
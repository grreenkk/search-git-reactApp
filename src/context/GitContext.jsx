import {createContext, useState, useEffect, useReducer} from 'react'
import GitReducer from '../Reducers/GitReducer'

const GitContext = createContext()

export const GitContextProvider = ({children}) => {

    const [gitState, dispatchState] = useReducer(GitReducer, {items : [], isLoading: false} ) 

    const loadingControl = () => {
        dispatchState({type: 'start loading' })
    }

    
 

    const searchUsers = async(text)=> {
        console.log(text)
        loadingControl()

        const params = new URLSearchParams({
            q: text
        })

        console.log(params)

        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json()
        console.log(items)

        dispatchState({type: 'get data', payLoad: {items, isLoading: false}})
    }

    const clearSearch = () => {
        dispatchState({type: "clear search"}) 
    }

    
    // const gitData = async() => {

    //     loadingControl() 
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
    //         header: {
    //             Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json()
    //     // getData(data)
    //     // setIsLoading(false)

    //     // dispatchState({type:'get data', payLoad: {data, isLoading: false}})

    // }

    
    return(
        <GitContext.Provider value={{
            data: gitState.items,
            isLoading: gitState.isLoading,
            searchUsers,
            loadingControl,
            clearSearch
        }}>
            {children}
        </GitContext.Provider>
    )
}

export default GitContext
import {useEffect, useState} from 'react'
import Spinner from '../../images/Spinner'

const UserList = () => {
    const [userData, getUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        fetchData()
    }, [])

    const  fetchData = async()=>{
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN }`
            }
        })

        const data = await response.json()

        getUserData(data)
        setIsLoading(false)
        
    }

    console.log(userData)
    
    return isLoading ? <Spinner/> : (<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        
        {userData.map((data)=>
            (
                <h3 key={data.id}>{data.login}</h3>
            )
        )}
        
    </div>)
}

export default UserList
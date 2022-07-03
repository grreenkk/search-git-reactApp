import {useEffect, useState, useContext} from 'react'
import Spinner from '../../images/Spinner'
import UserTab from './UserTab'
import GitContext from '../../context/GitContext'

const UserList = () => {
    const {data, isLoading, searchUsers, loadingControl} = useContext(GitContext)

    console.log(data)

    // useEffect(()=>{
    //     searchUsers()
    //  }, [])
    
 
    
    return isLoading ? <Spinner/> : (<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        
        {data.map((data)=>
            (
                <UserTab key={data.id} data={data} />
            )
        )}
        
    </div>)
}

export default UserList
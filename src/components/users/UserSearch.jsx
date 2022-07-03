import {useState, useContext} from 'react'
import GitContext from '../../context/GitContext'
import AlertContext from '../../context/AlertContext'


const UserSearch = () =>{
    const {searchUsers, data, clearSearch} = useContext(GitContext)

    const {setAlert} = useContext(AlertContext)

    const [text, setText] = useState('')

    const changeHandler = (e) => {

        setText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please insert a username', 'error')
        }else{
            searchUsers(text)
            setText('')
        }
       
    }

    const pushClearSearch = () => {
        
        clearSearch(data)
    }
        
    
    return <div className='grid grid-cols-1 xl:grid-cols-2 lg: grid-cols2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <div className="relative">
                        <input type="text" onChange={changeHandler} className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder='Search' value={text} />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" >GO</button>
                    </div>
                  
                </div>
            </form>
        </div>
        <div>
            <button className="btn btn-ghost btn-lg" onClick={pushClearSearch}>
                Clear
            </button>
        </div>
    </div>
}

export default UserSearch
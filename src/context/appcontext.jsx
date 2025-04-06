import { createContext, useState , useEffect } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const Appcontext = createContext()

const AppContextProvider = (props) =>{
    const [user,setUser]= useState(null);
    const [showLogin , setShowLogin] = useState(false);
    const [token , setToken] = useState(localStorage.getItem('token'))
    const [credit ,setCredit] = useState(false)

    const backendUrl = "https://ai-image-generator-backend-y663.onrender.com"

    const navigate = useNavigate()

    const loadCreditsData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/credits' , {headers : {token}})

            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
            TransformStream.error(error.message)
        }
    }

    const generateImage = async (prompt) => {
        try {
            const {data} = await axios.post(backendUrl + '/api/image/generate-image',{prompt} , {headers : {token}})
            if(data.success){
                loadCreditsData()
                return data.resultImage
            }
            else{
                toast.error(data.message)
                loadCreditsData()
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)
        
    }

    useEffect(() => {
        if(token){
            loadCreditsData()
        }
    },[token])

    const value = {
        user , setUser, showLogin, setShowLogin , backendUrl , token , setToken , credit , setCredit, loadCreditsData ,logout, generateImage
    }

    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}

export default AppContextProvider
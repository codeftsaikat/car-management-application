import axios from "axios"
import { useEffect } from "react";
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://car-management-server.onrender.com',
    withCredentials:true,
})

const useAxiosSecure = () => {
    const { logoutUser } = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use((res)=>{
              return res;
        },error=>{
            console.log("tracked error",error.response.status);
            if (error.response.status === 401 || error.response.status === 403) {
                logoutUser()
                .then(() => {
                  navigate("/login")
                })
                .catch(error=>console.log(error.message)
                )
            }
        })
    },[])
    return axiosSecure;
}

export default useAxiosSecure

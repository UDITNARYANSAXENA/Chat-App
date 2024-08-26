import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {

  const [loading , setloading] = useState(false);
  const { setAuthUser } = useAuthContext()

  const signup =async ({fullname , username , password , confirmPassword , gender}) =>{
   const success = handleInputErrors({fullname , username , password , confirmPassword , gender})
   if(!success) return;

   setloading(true);
   try {
    const res =await fetch ("/api/auth/signup",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify({fullname , username , password , confirmPassword , gender})
    })

    const data = await res.json();
    if(data.error){
        throw new Error(data.error)
    }
    //localstorage 
    localStorage.setItem("chat-user",JSON.stringify(data))
    //context
    setAuthUser(data)
    
   } catch (error) {
    toast.error(error.message)
   }
  };
  return{ loading, signup}

}

export default useSignup;

function handleInputErrors({fullname , username , password , confirmPassword , gender}){
    if(!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("Plz Fill All the fields ")
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Password don't match")
        return false;
    }
    if(password.length < 6){
        toast.error("Password is too small")
        return false;
        
    }
    return true
}


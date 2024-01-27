import { createContext, useContext, useState } from "react";

const AuthContext=createContext()

export const AuthProvider=({childern})=>{

    const initialLogedinpage=!!localStorage.getItem("token")
    const [authenticated,setAuthenticated]=useState(initialLogedinpage)
    console.log('initialLogedinpage',initialLogedinpage)

     const login=(formValues)=>{
        console.log(formValues)
        localStorage.setItem("token","userDetails")
        setAuthenticated(true)
        console.log("authenticated",authenticated)
     }

     return(
        <AuthContext.Provider value={{authenticated,login}}>
          {childern}
        </AuthContext.Provider>
     )

}




// export default AuthContext
export const useAuth=()=>useContext(AuthContext)








//     const initialLogedInpage=!!localStorage.getItem("token")

//     const getusername=localStorage.getItem('user')
//     console.log('getusername',getusername)


//     const[authenticated,setAuthenticated]=useState(initialLogedInpage)

//     const contextValue="hello this is from useContext"
//     const storeSomeData="useContextdata based on useContext"

//     // const[cartData,setCartData]=useState[{}]

   
//     const[user,setUser]=useState(getusername)

//     const login=(loginvalues)=>{
//         console.log(loginvalues)
//         localStorage.setItem("token","userdetails")
//         localStorage.setItem('user',loginvalues.user_name)
//         setAuthenticated(true)
//     }
//     const logout=()=>{
//         localStorage.removeItem("token")
//         setAuthenticated(false)
//     }
//     return(
//         <AuthContext.Provider value={{login,logout,authenticated ,contextValue,user,storeSomeData}}>
//            {children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth=()=>useContext(AuthContext)
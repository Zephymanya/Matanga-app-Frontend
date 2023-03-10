import Cookies from "js-cookie"

export const TokenExpired = () =>
{
    Cookies.remove("token")
    Cookies.remove("user")
}

export const configAuthHeaderServer = (token) => 
{
    const value =
    {
      headers:{
        "Content-Type" : "application/json",
        "Authorization": token,
      }
    }

    return value
}


export const numberData = 2,
             numberDataHome = 12
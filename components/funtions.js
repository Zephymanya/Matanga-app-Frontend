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


export const configAuthHeaderParamServer = (token,param) => 
{
    const value =
    {
      headers:{
        "Content-Type" : "application/json",
        "Authorization": token,
      },
      params:{
        param
      }
    }

    return value
}

export const numberData = 12,
             numberDataHome = 12
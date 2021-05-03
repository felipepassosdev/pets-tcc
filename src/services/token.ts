export const getUserToken = ():string =>{
    if (sessionStorage.getItem("userToken")) {
        let tokenresponse = sessionStorage.getItem("userToken");
        if (tokenresponse == null) {
            tokenresponse = "";
        }
        return tokenresponse;
    }else{
        return "";
    }
}
export const setUserToken = (token:string) =>{
    if(token != null ){
        sessionStorage.setItem("userToken",token);
    }else{
        console.error("Token Invalido");
    }
}

export const expireUserToken = () =>{
    sessionStorage.setItem("userToken","");
}
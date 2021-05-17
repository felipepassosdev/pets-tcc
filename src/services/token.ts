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
export const getUserInfo = ():string =>{
    if (sessionStorage.getItem("userInfo")) {
        let response = sessionStorage.getItem("userInfo");
        
        if (response == null) {
            response = "";
            return response;
        }else{
            let JSONOBJ:any = JSON.parse(response);
            let info = JSONOBJ;
            return info;
        }
        
    }else{
        return "";
    }
}
export const getUserEmail = ():string =>{
    if (sessionStorage.getItem("userInfo")) {
        let response = sessionStorage.getItem("userInfo");
        
        if (response == null) {
            response = "";
            return response;
        }else{
            let JSONOBJ:any = JSON.parse(response);
            let email = JSONOBJ.email;
            return email;
        }
        
    }else{
        return "";
    }
}
export const getUserID = ():number =>{
    if (sessionStorage.getItem("userInfo")) {
        let response = sessionStorage.getItem("userInfo");
        
        if (response == null) {
            response = "";
            return 0;
        }else{
            let JSONOBJ:any = JSON.parse(response);
            let id = JSONOBJ.id;
            return id;
        }
        
    }else{
        return 0;
    }
}
export const setUserInfo = (token:string) =>{
    if(token != null ){
        sessionStorage.setItem("userInfo",JSON.stringify(token));
    }else{
        console.error("Info Invalido");
    }
}
export const expireUserToken = () =>{
    sessionStorage.setItem("userToken","");
    sessionStorage.setItem("userInfo","");
}
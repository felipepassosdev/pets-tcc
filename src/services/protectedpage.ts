import { getUserToken } from "./token";
//Implementar uma validação melhor de token

const Protectedpage = () =>{
    let tokenResponse = getUserToken();
    if (tokenResponse != "") {
      return true;
    } else {
        return false;
    }
}

export default Protectedpage
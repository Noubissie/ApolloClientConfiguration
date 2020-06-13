import {HttpLink} from "apollo-link-http"


let HTTPlink = (Token)=>{
    return (
        new HttpLink(
            {
                uri: "http://localhost:5000/g",
                credentials:"include", //same-origin
                header:{
                    authetication:Token,
                    
                },
            }
        )
    )
}

export default HTTPlink

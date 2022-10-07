//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router"
import { navigate } from "react-router-dom"
//import {faAngleLeft} from "@fortawesome/free-regular-svg-icons"


export default function Header(props) {
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: "center", display:"flex", alignItems: "center" }}>
            
             {window.location.pathname !== '/' &&
                <div onClick={()=>{
                navigate('/')
            }}
            style={{paddingRight: "20px", paddingLeft: "10px", fontSize: "20px", fontWeight: "800", cursor:"pointer"}}>
                {"<"}
            {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
            </div> 
            }  

            <div>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}




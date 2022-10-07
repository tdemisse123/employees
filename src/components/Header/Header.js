import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router"
import { navigate } from "react-router-dom"
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons"


export default function Header(props) {
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: "center", display:"flex", alignItems: "center" }}>
            
             {window.location.pathname !== '/' &&
                <div onClick={()=>{
                navigate('/')
            }}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> 
            </div> 
            }  

            <div>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}




import { useLocation } from "react-router-dom";
import EmployeeDisplay from "../../components/EmployeeDisplay/EmployeeDisplay";
import EmployeeListItem from "../../components/EmployeeListItem/EmployeeListItem";
import Header from "../../components/Header/Header";

function Employee() {
    const{state} = useLocation();
    return(
        <div style={{width:"50%"}}>

            <Header title="Employee" />
            <div style={{border: "1px solid gainsboro"}}>
                <EmployeeListItem emp={state}/>
                <EmployeeDisplay emp={state}/>

            </div>
        </div>

    )
}
export default Employee;
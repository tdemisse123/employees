import { useLocation } from "react-router-dom";
import EmployeeDisplay from "../../components/EmployeeDisplay/EmployeeDisplay";
import EmployeeListItem from "../../components/EmployeeListItem/EmployeeListItem";
import Header from "../../components/Header/Header";

function Employee() {
    const{state} = useLocation();
    return(
        <div className="Box2">

            <Header title="Employee" />
            <div>
                <EmployeeListItem emp={state}/>
                <EmployeeDisplay emp={state}/>

            </div>
        </div>

    )
}
export default Employee;
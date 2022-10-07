import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import EmployeeListItem from "../../components/EmployeeListItem/EmployeeListItem";



function Home() { 

    const employee = [
      { id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWyYU7Oa8BIz8dcM4B753_rks84gQHHZUYDSexoBtN6sTDW-RQx_6zdFR-4XxJKdJjLs&usqp=CAU", 
        name: "James king", 
        position: "President and CEO",
        officePhone: "781-000-0001",
        mobilePhone: "671-000-0002",
        sms: "671-000-0002", 
        email: "jking@fakeemail.com"},
      { id: 2,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMFZR_8foIAeVu6PJXRUvK-r6U43oBM5sECfQdxJABZhCmZA_O8gKjPH5hbDr2DEiUw4&usqp=CAU", 
            name: "Julie Taylor", 
            position: "VP of Marketing",
            officePhone: "781-000-0002",
            mobilePhone: "671-000-0002",
            sms: "671-000-0002", 
            email: "jtaylor@fakeemail.com"},
        { id: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66tomkq5tfWElGDIuP-TgRaL2Nfjtiq-hqlJsJydo760DIPIKfTuNnDDqmdDY-j86AIk&usqp=CAU", 
            name: "Eugene Lee", 
            position: "CEO",
            officePhone: "781-000-0003",
            mobilePhone: "671-000-0002",
            sms: "671-000-0002", 
            email: "elee@fakeemail.com"},
        { id: 4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHHkXRztdM0p_jBYb3BLbvZq1NM3YJWS7EXLaORqB-EO6LpVAES2f7wxaJj6Y2hcSABg&usqp=CAU", 
            name: "John Williams", 
            position: "VP of Engineering",
            officePhone: "781-000-0004",
            mobilePhone: "671-000-0002",
            sms: "671-000-0002", 
            email: "jwilliams@fakeemail.com"},
            { id: 5,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWyYU7Oa8BIz8dcM4B753_rks84gQHHZUYDSexoBtN6sTDW-RQx_6zdFR-4XxJKdJjLs&usqp=CAU", 
            name: "Ray Moore", 
            position: "VP of Sales",
            officePhone: "781-000-0005",
            mobilePhone: "671-000-0002",
            sms: "671-000-0002", 
            email: "rmoore@fakeemail.com"},
            { id: 6,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnjJM6pP2--WL2FcbdZotGU77Kc5sbapMyLCN2G3D02i9_aU9In09WHyX8TG3jvkbSxs&usqp=CAU", 
            name: "Paul Jones", 
            position: "QA Manager",
            officePhone: "781-000-0006",
            mobilePhone: "671-000-0002",
            sms: "671-000-0002", 
            email: "pjones@fakeemail.com"},
    ];
    const [employees, setEmployees] = useState(employee)
    
    const [empName, setEmpName] = useState();
    const navigate = useNavigate()

    useEffect(() => {
      setEmployees(employees)
    }, [])

    useEffect(() => {
     if(empName)
      setEmployees(employees.filter((x)=>x.name.toLowerCase().indexOf(empName.toLowerCase()) !== -1))
     else
      setEmployees(employees)   
    }, [empName])
   
    return (
      <div style={{width:"50%", border: "1px solid gainsboro"}}>
        
        <Header title="Employee Directory" />
        <input type="text" onChange={(event)=>setEmpName(event.target.value)} style={{width: "50%", height:"30px"}} />
        <div>
          {employees?.map((x)=> <div onClick={()=> navigate('Employee', {state: x})}> <EmployeeListItem emp={x} /></div>)}
        </div>
      </div>
    )
  }
  
  export default Home;
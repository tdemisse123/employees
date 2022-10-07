 
 
 function EmployeeDisplay(props) {
    const { name, email, sms, officePhone, mobilePhone } = props.emp
    return (
        <div>
            <div className="Box" onClick={()=>window.open()}
            style={{ display: "flex", justifyContent: "space-between" }}>
  
                <div>
                    <div>
                        Call Office
                    </div>
                    <div>
                        {officePhone}
                    </div>
                </div>
                 <div style={{ placeSelf: "center"}}>
                    {">"}
                </div> 
            </div>
            <div className="Box"
            style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div>
                        Call Mobile
                    </div>
                    <div>
                        {mobilePhone}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="Box"
            style={{ display: "flex", justifyContent: "space-between" }}>
    
                <div>
                    <div>
                       SMS
                    </div>
                    <div>
                        {sms}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
            <div className="Box"
            style={{ display: "flex", justifyContent: "space-between" }}>
       
                <div>
                    <div>
                       Email
                    </div>
                    <div>
                        {email}
                    </div>
                </div>
                <div style={{ placeSelf: "center" }}>
                    {">"}
                </div>
            </div>
        </div>

    )
}
export default EmployeeDisplay;




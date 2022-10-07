

function EmployeeListItem(props) {
  const{img,position,name} = props.emp
  return (
    <div style={{display:"flex", fontFamily:"inherit"}}>
            <div><img width="85" style={{borderRadius: "50%"}}  src={img} alt={name} /></div>
              <div style={{placeSelf:"center", paddingLeft:"20px"}}>
                  <div>
                    <p><b>{name}</b></p>
                      <p>{position}</p>
                  </div>
            </div>
  </div>
              
        )
    }
export default EmployeeListItem;

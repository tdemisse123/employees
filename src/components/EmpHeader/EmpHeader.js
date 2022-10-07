function EmpHeader(props){
    const{name, position,img} = props.emp
    return(
        <div style={{display:"flex", padding: "20px"}}>
            <div style={{paddingRight:"20px"}}><img width="100" style={{borderRadius: "50%"}} src={img} alt={name}/></div>
            <div style={{ placeSelf: "center"}}>
                <div>{name}</div>
                <div>{position}</div>
            </div>

        </div>
    )
}
export default EmpHeader;







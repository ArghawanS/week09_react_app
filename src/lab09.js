import React from "react"


function StudentDetails(props){
    let{coll,city}= props.studentDetails
    return(
        <React.Fragment>
    
        <h1>Welcome to FullStack Development - 1</h1>
        <h2>
          React JS Programming Week09 lab exsercise 
          </h2>
          <p>Student Id: {props.studentDetails.sId}</p>
          <p>Student Name: {props.studentDetails.snm}</p>
          <p>College:  {coll}, {city}</p>
          
        
   
    </React.Fragment>

    )
}
export default StudentDetails
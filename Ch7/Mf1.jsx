{/*
    Create react components that contains an array of students objects with id,name and std
    Perform the following task using filter and map.
    1. Display only students whose std is 5
    2. Increase thier standard by 1
    3. Display student names and updated std
*/}

function Mf1(){
    const students=[{id:1,name:"Ram",std:4},{id:2,name:"Helly",std:6},{id:3,name:"Siya",std:5}]
    return(
        <div>
            <h1>Students Details</h1>
            {students.filter((student)=>student.std==5).map((student)=>
            <div key={student.id}>
            <h2>Student name : {student.name.toUpperCase()}</h2>
            <h2>Updated Std : {student.std+1}</h2></div>)}
        </div>
    )
}

export default Mf1

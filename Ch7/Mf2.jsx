function Mf2(){
    const students=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div>
            <h1>Map Array</h1>
            {students.map((student)=>
            <div key={student.id}>
            <h2>Updated Array : {student*5}</h2></div>)}
        </div>
    )
}

export default Mf2

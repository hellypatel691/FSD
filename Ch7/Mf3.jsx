function Mf3(){
    const students=[1,2,3,4,5,6,7,8,9,10]
    return(
        <div>
            <h1>Filter Array</h1>
            {students.filter((student)=>student%2==0).join(", ")}
        </div>
    )
}

export default Mf3

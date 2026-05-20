{
    /*
    write react code to render a component with the following data
        1. heading in italic in blue color and font size 25px
        2. an ordered list of 3 flowers that start with the letter A. List should be in red background color
    */
}
function Comp1(){
    return(
        <>
        <h1 style={{color:'blue', fontStyle:'italic', fontSize:'25px'}}>Hello Helly</h1>
        <ol type='A' style={{backgroundColor:'red'}}>
            <li>Tulip</li>
            <li>Lilies</li>
            <li>Sunflower</li>
        </ol>
        </>
    )
}
export default Comp1

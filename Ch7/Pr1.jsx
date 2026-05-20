// Create a react application using props to pass an obj from one component to another component
// 1. Create a parent component Pr1.jsx
// 2. Create an object named details containing student name and university name
// 3. Pass the details obj to child component Pr2.jsx using props
// 4. In child component recieve the object using props and display student name and university name in browser

import Pr2 from "./Pr2.jsx"
function Pr1(){
    const details={name:"Helly" ,uni:"Lj"}
    return(
        <div>
        <Pr2 details={details}/>
        </div>
    )
}

export default Pr1

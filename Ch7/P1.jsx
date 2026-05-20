// Create a react application using props to display students details. 
// 1. Create a parent component P1.jsx 
// 2. Pass the following data to child component P2.jsx using props
// Data. Student name,rollno,marks
// 3. In child component ,display students details and inc marks by 1 and display updated marks

import P2 from "./P2.jsx"
function P1(){
    return(
        <div>
            <P2 name="Arjun" roll="11" marks = {20}/>
            <P2 name="Helly" roll="84" marks = {22}/>
            <P2 name="Hannah" roll="103" marks = {23}/>
        </div>
    )
}

export default P1

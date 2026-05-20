{
/*
write react code to render a component with the following data
1. a para with green color font size 30px and bold in style. Use external css for this paragraph
2. render an image hero.png in assets folder
3. the current time and current date in pink color and alignment should be center
*/
}
import './Comp2.css'
import img1 from './assets/hero.png'

function Comp2(){
   const curr=new Date().toLocaleString()
    return(
        <div> 

        <p className="a">Hello Everyone!!!</p><br></br>
        <img src={img1} width="200" alt="Hero"/><br></br>
        <div style={{color:'pink', textAlign:'center'}}> {curr} </div>
        </div>
    )
}
export default Comp2
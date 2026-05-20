// create react components that contains array of fruit obj with item id, item name,price and availability. Perform the following task using filter and map
// 1. Display only available fruits 
// 2. Display fruit name in h1 tag
// 3. Inc the price by 10 rupees of the fruits which gets filtered out

function Mf4(){
    const fruits=[{id:1,name:"Mango",price:50,available:true},{id:2,name:"Kiwi",price:70,available:false},{id:3,name:"Chickoo",price:40,available:true},]
    return(
        <div>
            <h1>Fruits Details</h1>
            {fruits.filter((fruit)=>fruit.available==true).map((fruit)=>
            <div key={fruit.id}>
            <h2>Fruit name : {fruit.name}</h2>
            <h2>Updated price : {fruit.price+10}</h2></div>)}
        </div>
    )
}

export default Mf4

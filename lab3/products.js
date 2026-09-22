const products = [
    {id:1, name: 'marker' ,qty:100,price:103},
    {id:2, name: 'duster' ,qty:50,price:50},
]
let nextID = 3;
   export const getAllproducts =()=>{//arrow fuction
    return products;
}

 export const AddProducts = (item) =>{
    item.id = nextID;
    nextID++;
    products.push(item);
    return item;


 };
 export const deleteProduct =(pid)=>{
    const item =products.findIndex((prd)=>prd,id===pid);
    if(item ==-1)return false;
    products.splice(item, 1);
    console.log("products remaining:",products);
    return true;
 };
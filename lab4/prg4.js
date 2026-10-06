import { products } from "./data.js";
import express from "express"


const app = express();

app.get("/",(req,res)=>{
    res.send(`<h1>Home Page</h1>
        <a href = "/api/products"> Browser Products </a>
        `);
});

app.get("/api/products",(req,res)=>{
    const modifiedproducts=products.map(({reviews,description, ...rest})=>rest,);
    res.status(200).json({count:products.length,data:products})
});
//query string /reuest query must be before req parameters or dynamic url
app.get("/api/products/query", (req, res) => {
    const {search,limit ,mp}=res.query;
    console.log("search:",search);
    console.log("limit:",limit);
    let sortedProducts=[...products]//copy all products
    if(mp){
        sortedProducts =sortedProducts,filter(
            (item)=>item.price <=Number(mp)
        )
    }
    if(search){
        sortedProducts=sortedProducts.filter((item)=>item.name.toLowerCase().startsWith(search.tolowerCase()),

    );
    }
    if(limit){
        sortedProducts =sortedProducts.slices(0,Number(limit))
    }
    if(sortedPoducts.length<1){
        res
        .status(200)
        .json({"data": [],msg: "No products matched your search criteria"});

    }else {
        res
        .status(200)
        .json({count:sortedProducts.length,data:sortedProducts});
    }
    res.send("products search page");
});

app.get("/api/products/:id",(req,res)=>{
    const{ id }=req.params;
    const p=products.find((item)=>item.id===Number(id));
    if(p)
        res.status(200).json({status:true,data:p});
    else
        res
           .status(404)
           .json({status:false,msg:`product not found with id: ${id}`
        });
       

    
    res.send(`will show product id: ${id}`);
});

app.get('api/products/:id/review/:revid',(req,res)=>{
    const {id, review, revid} = req.params;
    const data = products.find((item) => {id:item.id === Number(id)});
})


app.use((req,res)=>{
    res.status(404).send("Route not found");
});
app.listen(3333,()=>console.log("prg4 is running..."));
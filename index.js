
import express from "express";


const app = express();



app.get('/',(req,res)=>{
    res.send({data:"soy una app"})
})


// app.use(express.static(path.resolve("src/public")));

app.listen(process.env.PORT || 3000);
console.log("Server on port", 3000);

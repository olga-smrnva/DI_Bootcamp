const express = require("express");
const app = express();

app.get("/:id", (req,res) => {
    res.send(req.params.id);    
    res.send("Hello World")
});
app.listen(3000/1234);
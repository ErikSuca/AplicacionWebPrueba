const express = require('express');
const app = express();
const path = require('path');
const web = require('./routes/web');
// server
app.listen( process.env.PORT || 3000, ()=> console.log("Server on http://localhost:3000"));

// public static 
app.use(express.static(path.resolve(__dirname, "../public")));

//websites routes
app.use(web);
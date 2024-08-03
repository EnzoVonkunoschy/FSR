const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()

app.use(express.static('public'))
app.set('view engine','ejs')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

var estaUrl = path.join(__dirname);

var _url = "";

if(estaUrl[0] == "C" && estaUrl[1] == ":"){
    _url = "http://localhost:3000";
}else{
    _url = "https://farmaciasantarita.up.railway.app/";
}



app.get('/',(req,res)=>{
    
    //res.send(`<p>Hola desde servidor</p>`)
    res.render('pages/index',{url: _url})
})

app.get('/cu1',(req,res)=>{
    res.render('pages/index1',{url: _url})
})

app.get('/cu11',(req,res)=>{
    res.render('pages/index11',{url: _url})
})

app.get('/cu111',(req,res)=>{
    res.render('pages/index111',{url: _url})
})
 
app.post('/carnet',upload.single('carnet'),(req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.render('pages/receta',{url: _url})
})

app.post('/receta',upload.single('receta'),(req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.render('pages/chat',{url: _url})
})

/*
app.post('/carnet',(req,res)=>{
    res.send("Respuesta desde carnet.")
})*/
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`Server listen on port ${port}`)

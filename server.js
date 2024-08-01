import express from 'express'
import multer from 'multer'

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

app.get('/',(req,res)=>{
    
    //res.send(`<p>Hola desde servidor</p>`)
    res.render('pages/index',{})
})

app.get('/cu01',(req,res)=>{
    res.render('pages/index1',{})
})

app.get('/cu11',(req,res)=>{
    res.render('pages/index11',{})
})

app.get('/cu111',(req,res)=>{
    res.render('pages/index111',{})
})
 
app.post('/carnet',upload.single('carnet'),(req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.render('pages/receta',{})
})

app.post('/receta',upload.single('receta'),(req, res)=>{
    console.log(req.body)
    console.log(req.file)
    res.render('pages/index',{})
})

/*
app.post('/carnet',(req,res)=>{
    res.send("Respuesta desde carnet.")
})*/

app.listen(3000,()=>{console.log("Server listen on port 3000")})
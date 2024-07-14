import express from 'express'

const app = express()

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    
    //res.send(`<p>Hola desde servidor</p>`)
    res.render('pages/index',{})
})


app.listen(3000,()=>{console.log("Server listen on port 3000")})
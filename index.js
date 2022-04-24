const express =require('express');
const app =express();
const cors = require('cors');
const { query } = require('express');
const port =process.env.PORT ||5000;
app.get('/',(req,res)=>{
    res.send('Look my mama i can code in node')
})
app.use(cors());
app.use(express.json())
const users =[
    {id:1, name:'sabana',email:'sabana@gmail.com',phone:'01788888'},
    {id:2, name:'sabnur',email:'sabnur@gmail.com',phone:'01788888'},
    {id:3, name:'sabana',email:'suchorita@gmail.com',phone:'01788888'},
    {id:4, name:'suchonda',email:'suchonda@gmail.com',phone:'01788888'},
    {id:5, name:'srabonti',email:'srabonti@gmail.com',phone:'01788888'},
    
    {id:6, name:'sabila',email:'sabila@gmail.com',phone:'01788888'},
    {id:7, name:'suhana',email:'suhana@gmail.com',phone:'01788888'}

]
app.get('/users',(req,res)=>{
    
    if(req.query.name){
        const search=req.query.name.toLocaleLowerCase();
        const matched=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
   else{
    res.send(users)
   }
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u=>u.id==id);
    res.send(user)
});
app.get('/fruits',(req,res)=>{
    res.send(['mango','apple','oranges'])
})
app.get('/fruits/mango/fazle',(req,res)=>{
    res.send('sour mango')
})
app.post('/users',(req,res)=>{
    console.log(req.body);
    const user =req.body;
    user.id =users.length+1;
    users.push(user);
    res.send(user)
})
app.listen(port,()=>{
    console.log('listheing to port',port)
})


 import express from 'express'

 const app = express();

app.get('/', (req, res) => {
  res.send('Project Is Ready To Start')
})

//getting apis
app.get('/chatbot', (req, res) => {
  res.send('Hear we take the answer that we fetch from the apis and how questions')
  
})

const PORT= process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})
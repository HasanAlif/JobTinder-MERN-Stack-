const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
 })

app.post('/test', (req, res) => {
    res.send('Got a POST request');
 })

app.put('/test', (req, res) => {
        res.send('Got a PUT request');
    })

app.delete('/test', (req, res) => {
        res.send('Got a DELETE request');
    })

app.use((req,res)=>{
    res.send(`Hello World I'm a server`);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
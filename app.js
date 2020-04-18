const express = require('express')
const path = require('path');
const axios = require('axios')
const app = express()

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/new', (req, res) => res.send('My new route'))
app.get('/resource123*', (req, res) => {
axios
  .get('https://api.adviceslip.com/advice')
  .then(response => {
    console.log(req, 'HIIIIIIIIIIIIIIIIIIIIIIII');
    console.log(`statusCode: ${res.statusCode}`)
    console.log(response)
    res.send(response.data)
  })
  .catch(error => {
    console.error(error)
    res.send('Server is 404')    
  })
})

app.get('/contest', (req, res) => {
axios
  .get('https://api.adviceslip.com/advice')
  .then(response => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(response)
    res.send(response.data)
  })
  .catch(error => {
    console.error(error)
    res.send('Server is 404')    
  })
})

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


// const port = process.env.PORT || 5000;
const port = 5000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
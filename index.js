const express = require('express');
const axios = require('axios')
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/client/build'));
// Sett up Api

app.get('/joke', (req, res) => {
    const joke = []
    axios.get('http://api.icndb.com/jokes/random/').then((res) => {
        joke.push(res.data.value.joke)
        console.log(joke);
    })
    res.json(joke)
})
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
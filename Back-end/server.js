const port = 3000;
const app = require('./app');

app.get('/', (req, res) => res.send("Hello world"))
app.listen(port, ()=> console.log(`Server is running on port ${port}!`))
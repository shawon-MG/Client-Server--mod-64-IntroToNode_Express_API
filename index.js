const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());  /* Short cut system. Ignoring midleware */

app.get('/', (req, res) => {
    res.send('Hello from another NODE File - nodemon');
});


const users = [
    { id: 1, name: 'Asif', job: 'Krishibid' },
    { id: 2, name: 'Sazzad', job: 'Senior Software Engineer' },
    { id: 3, name: 'Forhad', job: 'Junior Web Developer' },
    { id: 4, name: 'Arko', job: 'Front End Web Developer' },
    { id: 5, name: 'Himel', job: 'Onk kisu pare kintu bole na' },
    { id: 6, name: 'Fariha', job: 'Onk calak' },
    { id: 7, name: 'Ami', job: 'Vaadaimmma no-1' },
];
app.get('/users', (req, res) => {
    res.send(users);
});

/*---------- ID diye dynamic:------ */
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});


/*-----sending data to server using POST (eta hoche POST er route set kora)----*/
app.post('/users', (req, res) => {
    console.log('Request : ', req.body);
    res.send({ massage: 'Sending data to server using POST method---success' });
});   /*------- ekhankar data sudhu server e pathano hocche. UI te seta dekhano hocchen na-------- */





app.listen(port, () => {
    console.log('Listening to port', port);
});


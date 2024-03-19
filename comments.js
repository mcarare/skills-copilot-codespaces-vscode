// Create web server
const express = require('express');
const app = express();

// create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// create another route
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});

// listen on port
app.listen(3000, () => console.log('Listening on port 3000...'));
```

###
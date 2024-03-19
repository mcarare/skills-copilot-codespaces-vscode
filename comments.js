// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  // write a header
  res.write('Comments\n');
  // write a comment
  res.write('This is a comment\n');
  // write a comment
  res.write('This is another comment\n');
  // end the response
  res.end();
});

// start server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
```

### 4.4.2. Sending JSON

```javascript
// Path: comments.js
// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  // set the content type
  res.set('Content-Type', 'application/json');
  // write the JSON object
  res.write(JSON.stringify({
    comments: [
      'This is a comment',
      'This is another comment'
    ]
  }));
  // end the response
  res.end();
});

// start server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
```

### 4.4.3. Sending HTML

```javascript
// Path: comments.js
// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  // set the content type
  res.set('Content-Type', 'text/html');
  // write the HTML
  res.write('<h1>Comments</h1>');
  res.write('<p>This is a comment</p>');
  res.write('<p>This is another comment</p>');
  // end the response
  res.end();
});

// start server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
```

### 4.4.4. Sending a file

```javascript
// Path: comments.js
// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  // send a file
  res.sendFile(__dirname + '/comments.html');
});

// start server
app.listen(3000, function() {
  console.log('Listening on port 300




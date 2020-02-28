const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//running our server
app.listen(port, () =>{
	console.log(`App is running on port ${port}....`);
});

//combine the absolute path in a variable viewsDir
const viewsDir = path.join(__dirname, 'views');

app.use(express.static('views'));

app.get('/', (req, res) => {
	res.sendFile(path.join(viewsDir, 'home.html'));
});


const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

app.use(express.json);
app.use(bodyParser.json());

app.listen(port, ()=> {
     console.log(`Hello! server is started at: http://localhost:${port}`);
});

app.get("/", (req, res) => {
     res.send("Home Page");
});


app.get("/search-results/:place", (req, res) => {
     res.send("Search for rooms and hotels for any location");
});

app.get("/favourites/:guestUser", (req, res) => {
     res.send("list of favourited hotels");
});

app.post("/login-register", (req, res) => {
     res.send("Login/Register");
});

app.post("/login", (req, res) => {
res.send("Login to your account");
});

app.post("/register", (req, res) => {
     res.send("No account, create one");
});

app.get("/recently-viewed/:guestUser", (req, res) => {
     res.send("List of recently viewed hotels and rooms");
});

app.get("/help-and-support", (req,res) => {
     res.send("Here for help and support");
})

app.get("/my-bookings/:regUser", (req, res) => {
     res.send("List of hotels booked by user");
})

app.get("/*", (req, res) => {
     res.send("Not a right port");
})


app.post('/login', (req, res) => {
     const formData = req.body;
     console.log('Received form data:', formData);
     // Perform actions with form data (e.g., store it in a database)
     // Respond with a success message
     res.json({ message: 'Form data received successfully!' });
   });
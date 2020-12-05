const express = require("express");
const Datastore = require("nedb");

// load database
const database = new Datastore({ filename: "posts.db", autoload: true });

// init express app
const port = 4000;
const app = express();
app.use(express.json()); // middleware for parsing application/json

// admin login
app.post("/auth", (req, res) => {
  const { key } = req.body;
  if (key === "Apple1996") {
    res.status(200).end();
  } else {
    res.status(401).end(); // 401 for not authorized
  }
});

// read all posts
app.get("/posts", (req, res) => {
  // query database
  database.find({}, (err, data) => {
    if (err) {
      console.log("find failed");
      res.status(500).end();
    }
    console.log(data);
    console.log(typeof data);
    res.send(data);
    res.status(200).end();
  });
});

// read post details
app.get("/posts/:id", (req, res) => {
  res.send(`you are reading post ${req.params.id}`);
  res.status(200).end();
});

// create new post
app.post("/newpost", (req, res) => {});

// update post
app.put("/posts/:id", (req, res) => {
  const { id, title, date, topic } = req.body;
  //
});

// delete post
app.delete("/posts/:id", (req, res) => {});

app.listen(port, () => {
  console.log(`node app running at http://localhost:${port}`);
});

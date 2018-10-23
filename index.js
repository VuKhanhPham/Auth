const express = require( 'express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
//localhost:5000

//testing branch
/*
0.1 Check remote url destination  git remote -v
0.2 Check status                  git status
1. Add All files.                 git add .
2. Commit all files.              git commit -m "Message goes here"
3. Push files to repository.      git push origin branch-name
*/
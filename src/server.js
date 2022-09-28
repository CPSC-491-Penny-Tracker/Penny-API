const app = require('./app');
const { PORT, DB_URL } = require('./config');

app.listen(PORT, ()=> {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

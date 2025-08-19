const express = require('express');
const app = express();
const PORT = 3000;

const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes'); // new route

app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes); // register contact route

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

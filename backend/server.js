const express = require(“express”);
const cors = require(“cors”); const app = express(); var corsOptions = {
    origin: “http://localhost:4200" // URL of the frontend
}; app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencodedconst PORT = process.env.PORT || 8080; // Portapp.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
const express = require("express");
const app = express();
const connectDB = require("./src/config/db");
const path = require("path");
const cors = require("cors");
//connect to Database
connectDB();

// initialise middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use("/api/register", require("./src/routes/users"));
app.use("/api/login", require("./src/routes/login"));
app.use("/api/customerdetails", require("./src/routes/customer"));
app.use("/api/isAgreement", require("./src/routes/salesDetail"));
app.use("/api/isPayment", require("./src/routes/payment"));
app.use("/api/status", require("./src/routes/status"));
app.use("/api/installDate", require("./src/routes/installDate"));
app.use("/api/tracking", require("./src/routes/salesDetail"));
app.use("/api/isToggle", require("./src/routes/agreementToggle"));
//app.use('/api/auth', require('./src/routes/auth'))

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "PUT"],
  })
);

app.use(
  cors({
    allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"],
  })
);

app.use(
  cors({
    maxAge: 86400, // One day
  })
);

////server static assets in production

//// set static folder
//app.use(express.static('client/build'));

//app.get('*', (req, res) => {

//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

//})

const PORT = process.env.PORT || 3001;

// Start the server @ port
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});

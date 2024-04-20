const express=require('express');
const app=express();        
const cors=require('cors');
const bodyParser=require('body-parser');
const { default: mongoose } = require('mongoose');
const tasksRoutes=require('./routes/taskRoutes');
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors()); // Allows all options requests
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies
app.use(bodyParser.json());
app.use(tasksRoutes);
const uri='mongodb+srv://ishitatrivedidocs:0igGPEyNpfTZo9gp@cluster0.e3eie3v.mongodb.net/taskDB';
//connect to mongodb
mongoose.connect(uri);
 // Once connected, set up routes
   
// Listen for connection events
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
    // Start Express server
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

mongoose.connection.on('close', () => console.log('close'));
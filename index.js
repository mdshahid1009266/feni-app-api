// External dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './config/db.js';
import userRouter from './routes/user.routes.js';


connection();


// Initialize express app
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


app.use(userRouter);



// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// try {
//     await connection();
//     console.log('Database connected successfully');
// } catch (error) {
//     console.error('Database connection failed:', error.message);
//     process.exit(1);
// }

// // Routes
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Server is running' });
// });

// // Router middleware
// app.use(adminRouter);

// // Global error handler
// app.use((err, req, res, next) => {
//     console.error('Error:', err.stack);
//     res.status(500).json({ 
//         error: 'Internal Server Error',
//         message: process.env.NODE_ENV === 'development' ? err.message : undefined
//     });
// });



// Configuration
const PORT = process.env.PORT || 2000;
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err.message);
    process.exit(1);
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
});


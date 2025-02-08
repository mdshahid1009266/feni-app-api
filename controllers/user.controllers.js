import User from '../models/user.model.js';

// @desc    Register new user
const signup = async (req, res) => {
    try {
        const { name, email, number, address, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ email }, { number }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email or number' });
        }

        const user = await User.create({ name, email, number, address, password });

        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Authenticate user
const login = async (req, res) => {
    // console.log(req.body);

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please enter email/number and password' });
        }

        const user = await User.findOne({
            $or: [
                { email: email },
                { number: email }
            ]
        }).select('+password');

        if (!user || (user.password !== password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }


        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};



export { signup, login };
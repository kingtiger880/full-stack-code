// ייבוא מודולים
import express from 'express'; 

import userModel from "./backend/modules/users.js";


const app = express();
app.use(express.json());

// Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send("משתמש לא נמצא");
        }
        if (user.password !== password) {
            return res.status(401).send("סיסמה שגויה");
        }
        res.send("התחברות הצליחה");
    } catch (error) {
        console.error(error);
        res.status(500).send("שגיאת שרת");
    }
});

// Signup
app.post("/sign-up", async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send("משתמש כבר קיים");
        }
        const newUser = new userModel({ email, password });
        await newUser.save();
        res.status(201).send("משתמש נוצר בהצלחה");
    } catch (error) {
        console.error(error);
        res.status(500).send("שגיאת שרת");
    }
});

// הפעלת השרת
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`השרת מאזין על http://localhost:3001`);
});
מ

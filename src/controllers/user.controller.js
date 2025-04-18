const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res) => {
    try {
        const {  email, password, name, role, adminCode } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            });
        }

        // Verify admin registration
        if (role === 'admin') {
            if (!adminCode || adminCode !== process.env.ADMIN_SECRET_CODE) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid admin registration code'
                });
            }
        }

        // Create user
        const user = await User.create({
            email,
            password,
            name,
            role: role || 'user'
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        // Remove password from response
        const { password: _, ...userWithoutPassword } = user.toJSON();

        return res.status(201).json({
            
                user: userWithoutPassword,
                token
            
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await user.validatePassword(password))) {
            return res.status(401).json({
                err: 1,
                msg: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        return res.json({
             user, token 
        });
    } catch (error) {
        return res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: { exclude: ['password'] }
        });
        return res.json({
            err: 0,
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const { name, email, image } = req.body;
        await req.user.update({
            name: name || req.user.name,
            
            image: image || req.user.image
        });

        return res.json({
            err: 0,
            msg: 'Profile updated successfully',
            data: req.user
        });
    } catch (error) {
        return res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findByPk(req.user.id);

        // Verify current password
        if (!(await user.validatePassword(currentPassword))) {
            return res.status(401).json({
                err: 1,
                msg: 'Current password is incorrect'
            });
        }

        // Update password
        await user.update({ password: newPassword });

        return res.json({
            err: 0,
            msg: 'Password changed successfully'
        });
    } catch (error) {
        return res.status(500).json({
            err: 1,
            msg: error.message
        });
    }
};
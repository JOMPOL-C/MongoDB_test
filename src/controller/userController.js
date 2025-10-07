const users = require('../models/userModel');
const cloudinary = require('cloudinary').v2;

exports.createUser = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send({ message: "please upload an image" });
        }

        cloudinary.uploader
            .upload_stream({ resource_type: "image" }, async (error, result) => {
                if (error) {
                    return res.status(500).send({ message: "Cloudinary upload error", error });
                }
                const newUser = new users({
                    username: req.body.username,
                    email: req.body.email,
                    avatarUrl: result.secure_url,
                    cloudinaryId: result.public_id,
                })
                await newUser.save();
                res.status(201).json(newUser);
                console.log(result);
                
            }).end(req.file.buffer);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        console.log(error);
    }
}
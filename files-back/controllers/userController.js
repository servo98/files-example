import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { tmpdir } from 'os';
import User from '../models/User.js';

const storage = multer.diskStorage({
  destination: tmpdir(),
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const createUser = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.create({
      avatar: result.secure_url,
      ...req.body,
    });
    return res.json({
      msg: 'Crear usuario',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear usuario',
      error,
    });
  }
};

export { createUser, upload };

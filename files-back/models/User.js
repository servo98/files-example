import { model, Schema } from 'mongoose';
/**
 * 1.- Schema ✅
 * 2.- Nombrar el modelo
 */

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
});

export default model('User', userSchema);

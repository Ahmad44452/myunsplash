const mongoose = require('mongoose');
const validator = require('validator');

const imgSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, "Label is required"],
    trim: true
  },
  imgurl: {
    type: String,
    unique: [true, "Image already exists!"],
    required: [true, "Image url is required"],
    validate(value) {
      if (!validator.isURL(value)) {
        throw new Error("Invalid image URL")
      }
    }
  }
});

imgSchema.index({ name: 'text', 'label': 'text' });

const ImgModel = mongoose.model("Img", imgSchema);
module.exports = { ImgModel };
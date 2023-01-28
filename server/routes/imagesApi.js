const express = require('express');
let router = express.Router();

///////////// GET USER MODEL
const { ImgModel } = require('../models/imgModel');

router.route('/test').get(async (req, res) => {
  try {
    return res.status(200).json({ test: "Working" })
  } catch (error) {
    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/addimg').post(async (req, res) => {
  try {

    if (await ImgModel.findOne({ imgurl: req.body.imgurl })) {
      throw new Error("Image already exists!");
    }

    const img = new ImgModel({
      label: req.body.label,
      imgurl: req.body.imgurl
    })

    const doc = await img.save();
    return res.status(200).json(doc);

  } catch (error) {

    return res.status(400).json({
      message: error.message,
      error: error
    })
  }
});

router.route('/allimages').get(async (req, res) => {
  try {
    const images = await ImgModel.find();

    return res.status(200).json(images);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/searchimages/:searchQuery').get(async (req, res) => {
  try {

    const images = await ImgModel.find({ $text: { $search: req.params.searchQuery } });

    return res.status(200).json(images);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route('/deleteimg').delete(async (req, res) => {
  try {
    const doc = await ImgModel.findByIdAndDelete(req.body.id);

    return res.status(200).json(doc);
  } catch (error) {

    return res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

module.exports = router;
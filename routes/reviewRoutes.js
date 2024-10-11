const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const { createReview, getAllReviews } = reviewController;

const router = express.Router();

router
  .route('/')
  .get(getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    createReview,
  );

module.exports = router;

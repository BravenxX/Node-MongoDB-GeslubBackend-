const express = require("express");
const router = express.Router();

const {
  getActivities,
  getActivity,
  postActivity,
  deleteActivity,
  putActivity
} = require("../controllers/actProg.controller");

router
  .route("/")
  .get(getActivities)
  .post(postActivity);

router
  .route("/:id")
  .get(getActivity)
  .delete(deleteActivity)
  .put(putActivity);

module.exports = router;

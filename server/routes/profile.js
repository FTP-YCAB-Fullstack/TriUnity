const profileRouter = require("express").Router();
const ProfileContoller = require("../controllers/profileController")

profileRouter.get("/profile", ProfileContoller.getProfile)
profileRouter.patch("/profile/:id", ProfileContoller.patchProfile )
module.exports = profileRouter;
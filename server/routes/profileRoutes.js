const express = require("express");
const {
  createProfile,
  getProfileByProfileId,
  getProfileByUserId,
  updateProfile,
  deleteProfile,
} = require("../model/profile");

const router = express.Router();

const mustBeLoggedIn = async (req, res, next) =>{
  if(req.user){
    next()
    return
  }
  res.sendStatus(401)
}

let testProfileJson = {
  userId: "6195f25f0b944fa89fe45ca6",
  skills: ["C++", "Javascript", "Frontend development2"],
  interest: ["Machine learning"],
};

/* @author: Woojae Kim
 create a new profile for user
  param: same as profile schema
  return: status 200 and created profile if successful, status 500 otherwise
*/
router.post("/create", async (req, res) => {
  let pofile = await createProfile(testProfileJson);
  if (!pofile) res.status(500).send("failed to create");
  res.status(200).send(pofile);
});

/* 
  @author: Woojae Kim
  @test: curl -X POST http://localhost:5000/profile/update -H 'Content-Type: application/json' -d '{"_id": "619c059592a570bf8451d8b1", "userId": "6195f25f0b944fa89fe45ca6","skills": ["update"],"interest": ["testUpdate"]}'
  update existing profile 
  param: new profile 
  return: updated profile model
*/
router.put("/update", mustBeLoggedIn, async (req, res) => {
  let profile = req.body;
  updateProfile(profile, (updatedModel) => {
    res.status(200).send(updatedModel);
  });
});

/* @author: Woojae Kim
   get user profile using userId
  param: user id
  return: profile object
*/
router.get("/getByUserId/:userId", mustBeLoggedIn , async (req, res) => {
  let userId = req.params.userId;
  let profile = await getProfileByUserId(userId);
  res.status(200).send(profile);
});

/* @author: Brian
 get user profile using profileId
  param: profile id
  return: profile object
*/
router.get("/getByProfileId/:profileId", mustBeLoggedIn , async (req, res) => {
  let profileId = req.params.profileId;
  let profile = await getProfileByProfileId(profileId);
  res.status(200).send(profile);
});

/* @author: Brian
 delete profile
  param: profile id
return: true if succeed false otherwise

*/
router.delete("/:profile_id", async (req, res) => {
  database
    .collection("profile")
    .deleteOne({ id: parseInt(req.params.id) }, (err, result) => {
      if (err) throw error;
      res.send("Profile has been deleted.");
    });
});

router.put("/updateProfilePicture", async (req, res) => {
  
  updateProfile(req.body, (updatedModel) => {
    res.status(200).send(updatedModel);
  });
});

module.exports = router;

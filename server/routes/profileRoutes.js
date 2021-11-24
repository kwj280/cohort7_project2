const express = require("express");
const {
  createProfile,
  getProfileByProfileId,
  getProfileByUserId,
  updateProfile,
  deleteProfile,
} = require("../model/profile");

const app = express();

let testProfileJson = {
  userId: "6195f25f0b944fa89fe45ca6",
  skills: ["C++", "Javascript", "Frontend dveleopemnt2"],
  interest: ["Machine learnoing"],
};

/* @author: Woojae Kim
 create a new profile for user
  param: same as profile schema
  return: status 200 and created profile if successful, status 500 otherwise
*/
app.post("/create", async (req, res) => {
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
app.post("/update", async (req, res) => {
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
app.get("/getByUserId/:userId", async (req, res) => {
  let userId = req.params.userId;
  console.log(userId);
  let profile = await getProfileByUserId(userId);
  res.status(200).send(profile);
});

/* @author: Brian
 get user profile using profileId
  param: profile id
  return: profile object
*/
app.get("/getByProfileId/:profileId", async (req, res) => {
  let profileId = req.params.profileId;
  console.log(profileId);
  let profile = await getProfileByProfileId(profileId);
  res.status(200).send(profile);
});

/* @author: Brian
 delete profile
  param: profile id
return: true if suceed false otherwise

*/
app.delete("/:profile_id", async (req, res) => {
  database
    .collection("profile")
    .deleteOne({ id: parseInt(req.params.id) }, (err, result) => {
      if (err) throw error;
      res.send("Profile is deleted");
    });
});

module.exports = app;

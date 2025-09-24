import express from "express"
import jwt from "jsonwebtoken"
const router = express.Router()

import users from "../model/schema.js";

router.post("/usercreation", async (req, res) => {
  const newUser = await users.create(req.body)
  res.json(newUser)
})

router.put("/update/:id", async (req, res) => {
  const updateUser = await users.findOneAndUpdate(
    { userId: req.params.id },
    req.body,
    { new: true }
  )
  res.json(updateUser)
})

router.get("/", async (req, res) => {
  const allUsers = await users.find()
  res.json(allUsers)
})

router.get("/userid/:id", async (req, res) => {
  const findById = await users.findOne({ userId: req.params.id })
  res.json(findById)
})

router.get("/role/:role", async (req, res) => {
  const findByRole = await users.find({ role: req.params.role })
  res.json(findByRole)
})

router.delete("/delete/:id", async (req, res) => {
  await users.findOneAndDelete({ userId: req.params.id })
  res.send("User Deleted Successfully")
})

router.post("/login", (req, res) => {
  res.send("Login route working")
})

router.use((req, res) => {
  res.status(404).send("Not found")
})

export default router;

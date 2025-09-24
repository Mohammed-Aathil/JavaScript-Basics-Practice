import express from 'express'
const router=express.Router();

router.get("/", (req,res) => {
  res.status(200).send("Hello, World!");
});

router.get("/user/:name",(req,res) => {
  const userName = req.params.name;
  res.status(200).send(`Hello ${userName}`);
});

router.post("/post",(req,res) => {
  const userData = req.body;
  res.status(200).json(userData);
});
export default router;
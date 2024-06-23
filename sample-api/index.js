import express from 'express'
import userData from './data/userData.json' assert { type: 'json' }
import userCandies from './data/userCandies.json' assert { type: 'json' }

const app = new express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hiiii")
})

app.post("/getUserId", (req, res) => {
  try {
    console.log("REQUEST: ", req.body)
    const username = req.body.username

    let user = userData.users.filter(user => user.name == username)[0]

    if(!user)
      throw Error('User not found!')

    res.send(user)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
})

app.post("/getFavCandies", (req, res) => {
  try {
    console.log("REQUEST: ", req.body)
    if(!req.body || !req.body.userId)
      throw Error('Invalid request!')

    const userId = req.body.userId

    console.log(userId)

    let candies = userCandies.candies.filter(user => user.id == userId)[0]

    if(!candies)
      throw Error('User not found!')

    if(candies.candies.length === 0)
      throw Error('User has no favourite candies!')

    res.send(candies.candies)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
})

app.listen(8756, () => {
  console.log("Hello World")
})
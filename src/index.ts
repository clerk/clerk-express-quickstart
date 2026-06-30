import 'dotenv/config'
import express from 'express'
import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express'

const app = express()
const PORT = 3002

app.use(clerkMiddleware())

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})

// Use `getAuth()` to protect this route
app.get('/protected', async (req, res) => {
  // Use `getAuth()` to get the user's `userId`
  // or you can use `req.auth()`
  const { userId } = getAuth(req)

  // If the user isn't authenticated, return a 401 status code
  if (!userId) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

  // Use Clerk's JavaScript Backend SDK to get the user's User object
  const user = await clerkClient.users.getUser(userId)

  res.json({ user })
})

// Assuming you have a template engine installed and are using a Clerk JavaScript SDK on this page
app.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

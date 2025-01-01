import { Hono } from 'hono'
import { authCheck } from './auth'

const app = new Hono()
app.use(authCheck)

app.post('/', async (c) => {
  // console.log(c)
  // const body =  await c.req.json();
  // const auth = c.req.header("Authorization")
  // const params = c.req.header("param")
  // console.log("body" , body)
  // console.log("auth" , auth)
  // console.log("params" ,params )
  return c.text('Hello Hono!')
})



export default app

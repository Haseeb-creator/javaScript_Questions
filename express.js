const Express = require("express")

const app = Express()
const port = 5000


app.get('/api', (req, res) => {
	console.log('request body', req);
	res.send({ message: 'hello world' })
})


app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})
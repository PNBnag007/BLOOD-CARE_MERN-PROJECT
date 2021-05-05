const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')

//const cors = require('cors')


const usersRoutes = require('./routes/users-routes');
const bloodbanksRoutes = require('./routes/bloodbanks-routes');
const ordersRoutes = require('./routes/orders-routes');
const HttpError = require('./models/http-error');

const app = express();
app.use(flash());
app.use(cors());

app.use(bodyParser.json());


const razorpay = new Razorpay({
	key_id: 'rzp_test_QQz5khL9L6FKoC',
	key_secret: 'Ly9mzQb14NPsj27HI6jhztBp'
})

app.post('/razorpay', async (req, res) => {
  const {amount} = req.body;
	const payment_capture = 1
	const currency = 'INR'

	const options = {
		amount: amount ,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})


const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')
const authRouterb = require('./routes/auth.routeb')
const userRouterb = require('./routes/user.routeb')


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,PUT');
  
    next();
});

app.use('/api/users',usersRoutes);
app.use('/api/bloodbanks',bloodbanksRoutes);
app.use('/api/orders',ordersRoutes);
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', authRouterb)
app.use('/api', userRouterb)



app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

app.use((req, res) => {
  res.status(404).json({
      success: false,
      msg: "Page not founded"
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});


// app.listen(5000);
const PASSWORD = encodeURIComponent('PNBnag@007'); 

mongoose
  .connect(
    `mongodb+srv://PNBnag007:${PASSWORD}@cluster0.jfatg.mongodb.net/User?retryWrites=true&w=majority`,
    { useNewUrlParser: true},
    { useCreateIndex: true },
    { useFindAndModify: false},
    { useUnifiedTopology: true },
  )
  .catch(err => {
    console.log(err);
  });
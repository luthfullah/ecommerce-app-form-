const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors');
const productRoutes = require('./routes/productRoutes');
// const ecom= require('./routes/newRoute')

const app = express();
app.use(express.json());
app.use(cors());
const port =5000;

app.get('/', (req,res)=>{
    res.send("getting ")
})


// Use product routes
app.use('/api', productRoutes);

app.use('/products', productRoutes)
// app.use('/send', ecom)
// app.use('/ecommerce', ecom)

app.use('/images', express.static('./images'))
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

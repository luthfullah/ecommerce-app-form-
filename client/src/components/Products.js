import React, { useEffect, useState } from 'react'


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    fetch('http://localhost:5000/api/products')
      .then((res) => {
        res.json().then((result) => {

          console.log(result)
          setProducts(result)
          const productsWithFormattedDate = result.map((product) => ({
            ...product,
            dateAdded: new Date(product.dateAdded).toLocaleDateString(),
          }));
          setProducts(productsWithFormattedDate);

        })
      }).catch(err => console.log(err))
  }



  return (
    <div>
      {
        products.map((product) => (

          <article key={product.id} style={{ display: 'inline-block', margin: '10px' }} className="center btn bg-yellow">
            <div className='black f3 '>
              <ul className='list pa1'>

                <li className='tc'>{product.id}</li>
                <img
                  src={`http://localhost:5000/${product.image}`} // IMAGE
                  alt="Product"
                  className='max-w-6xl mx-auto'
                  width='250px' height='250px'
                />
                <li>{product.name}</li>
                <li>{product.description}</li>
                <li>{product.price}</li>
                <li>{product.quantity}</li>
                <li>{product.quantityInStock}</li>
                <li>{product.manufacturer}</li>
                <li>{product.dateAdded}</li>
              </ul>

            </div>


          </article>
        ))
      }

    </div>
  )
}

export default Products
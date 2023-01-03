import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'

export default function Home() {
  const [data, isLoading, serverError] = useFetch("https://dummyjson.com/products", "GET", {});
    /* const [authData, loading, error] = useFetch("https://dummyjson.com/auth/login", "POST", {
      username: 'kminchelle',
      password: '0lelplR',
    }); */
  // console.log(data)
    return (
      <div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">
              {
                data?.products.map((product, index) => {
                  return <Card
                    id={product.id}
                    key={index + 'product'}
                    price={product.price}
                    imageUrl={product.thumbnail} />
                })
              }
            </div>
          </div>
        </section>
      </div>
    )
}

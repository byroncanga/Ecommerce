import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Products from "./Products";
import productos from "./listProducts";
import Filters from "./Filters";

function App() {  

  const [filter, setFilter] = useState({category: "all", minPrecio:0})
  //Filtra los productos
  const filterProducts = (products)=>{
    return products.filter(product=>{
      return (
        product.precio >= filter.minPrecio && (filter.category === "all" || product.categoria === filter.category)
      )    
    })
  }
  
  const productosFiltrados = filterProducts(productos)

  const [shoppingCard, setShoppingCard] = useState([])

  const handleNewProduct=(product)=>{  
      const newCart = [...shoppingCard, product]
      setShoppingCard(newCart)
  }
  const sumaCarrito = shoppingCard.length

  return (
    <>
      <Navbar cart={sumaCarrito} />
      <Header />
      <Filters filtro={setFilter} />
      <div className="container my-4">           
        <div className="row">
         { productosFiltrados.map((product)=>{
            return (
            <Products 
              key={product.id}
              image={product.image_url}
              title={product.title}
              content={product.content}
              category={product.categoria}
              price={product.precio}
              handleNewProduct={handleNewProduct}
              id={product.id}
            />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

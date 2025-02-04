import { useState } from "react";

export default function App() {
  const [firstProduct, setFirstProduct] = useState ("");
  const [shoppingList, setShoppingList] = useState(["Nighiri" , "Sashimi", "Hosomaki"])

  const handleSubmit = (e) => {
    e.preventDefault();

    //const newShoppingList = [...shoppingList, firstProduct]; //nuovo array di un prodotto
    setShoppingList(currentState => [...currentState, firstProduct] )

    setFirstProduct("")
  }

  const emptyList = () => {
    setShoppingList([])
  }

  const handDelete = (productDelete) => {
    setShoppingList((currentState) => 
      currentState.filter((product) =>
      product !== productDelete)
    );
  };


  return (

    <div>

      <h1>Shopping List</h1>
      <ul>
        {
          shoppingList.map((product, index) => (
            <li key={index}>
              {product} <button onClick={() => handDelete(product)}>❌</button>
              
            </li>
          ))}
      </ul>

      <button onClick={emptyList}>🔴Cancella lista</button>
      <hr />
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={firstProduct}
          onChange={(e) => {
            setFirstProduct(e.target.value);
          }}
          placeholder="Scrivi il prodotto"
        />

        <button type="submit">invia</button>
      </form>
    </div>
  )
}


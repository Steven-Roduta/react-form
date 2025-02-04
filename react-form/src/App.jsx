import { useState } from "react";

export default function App() {
  const [firstProduct, setFirstProduct] = useState ("");
  const [shoppingList, setShoppingList] = useState(["Nighiri" , "Sashimi", "Hosomaki"])

  const handleSubmit = (event) => {
    e.preventDefault;
  }

  return (

    <div>

      <h1>Shopping List</h1>
      <ul>
        {
          shoppingList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
      </ul>
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


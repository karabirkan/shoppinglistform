import { useState } from "react";
export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (evt) => {
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>
        Product is : {formData.product} and quantity is : {formData.quantity}
      </h1>
      <label htmlFor="product"></label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity"></label>
      <input
        type="number"
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>Add Item</button>
    </form>
  );
}

import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryItem, setGroceryItem] = useState();
  const [cost,setCost] = useState();
  const [groceryList,setGroceryList] = useState([]);


  
  const updateItem = (userInput, index) => {
    const newgroceryItem = [...groceryItem];
    newgroceryItem[index] = userInput;
    setGroceryItem(newgroceryItem);
  };
  const deleteItem = index => {
    setGroceryItem(
      groceryItem.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      item:groceryItem,
      cost:cost
    }
 const temp = [...groceryList];
    temp.push(obj);
    console.log(temp)
    setGroceryList(temp)

  }
  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form className="form-inline" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="text"
            name="item"
            placeholder="Name of grocery item..."
            aria-label="Name of grocery item..."
            onChange = {(e)=> setGroceryItem(e.target.value)}
            
          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            onChange = {(e)=> setCost(e.target.value)}
          />
          <div>
            <button type="submit" className="btn btn-success" onClick={newItem}>
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
          {/* {groceryItem.map((item, index) =>{return()})} */}
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody
          {groceryList.map((userInput, inedx) => {
          return (<td> {groceryItem}</td>)
          })};
            {/**
             * Complete me. (You can use something else instead of a table if you like)
             * @example
             * <tr>
             *   <td>Toilet Paper</td>
             *   <td>$1.99</td>
             *   <td>
             *     <button aria-label="Delete" title="Delete" ... >
             *       &times;
             *     </button>
             *   </td>
             * </tr>
             */}
          />
        </table>
        <p className="lead">
          <strong>Total Cost: {/* Complete me */}</strong>
        </p>
        <div className="text-right">
          <button type="button" className="btn btn-outline-success">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;

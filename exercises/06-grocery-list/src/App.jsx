import React, { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryItem, setGroceryItem] = useState("");
  const [cost, setCost] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [hasError, setHasError] = useState(false);


  const updateList = () => {
    setGroceryList([...groceryList, { groceryItem, cost: parseFloat(cost) }])
  }


  const deleteItem = deleteIndex => {
    setGroceryList(
      [...groceryList].filter((currentIndex) => currentIndex !== deleteIndex)
    );
  };

  const clearList = () => setGroceryList([]);

  const calcTotal = () => {
    return groceryList.reduce((total, item) => {
      return total + item.cost;
    }, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      (groceryItem && (cost || cost === 0)) ? updateList() && setHasError(false) : setHasError(true)
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
            value={groceryItem}
            onChange={(e) => setGroceryItem(e.target.value)}

          />
          <input
            className="form-control"
            type="number"
            min="0"
            step=".01"
            placeholder="Cost of grocery Item..."
            aria-label="Cost of grocery Item..."
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          <div>
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
        {hasError && (
          <p className="help-block text-danger"> Both fields are required.</p>
        )}
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-compact">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {groceryList.map((item, index) => {
              return (
                <tr>
                  <td>{item.groceryItem}</td>
                  <td>${item.cost.toFixed(2)}</td>
                  <td><button aria-label="Delete"
                    title="Delete"
                    className="btn"
                    onClick={() => deleteItem(index)}>
                    &times;
                  </button>
                  </td>
                </tr>)
            })}

          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {calcTotal().toFixed(2)}</strong>
        </p>
        <div className="text-right">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={clearList}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;

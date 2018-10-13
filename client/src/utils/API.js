import axios from "axios";

export default {

  // Gets all items in your inventory
  getInventory: function(userID) {
    return axios.post("/api/inventory", userID);
  },
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves an item to the database
  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  },
  // Updates an item in the database
  updateItem: function(id) {
    return axios.put("/api/items" + id);
  }
};


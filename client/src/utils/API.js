import axios from "axios";

export default {
    //Get blog from webscraper
    getBlog: function() {
        return axios.get("/blog");
    },
    // Gets all cafe menu items
    getCafeMenuItems: function() {
        return axios.get("/api/menu/cc-menu/cafe");
    },
    //Get all of the catering menu items
    getCateringMenuItems: function() {
        return axios.get("/api/menu/cc-menu/catering");
    },
    //Get all of the cake menu items
    getCakeMenuItems: function() {
        return axios.get("/api/menu/cake-menu");
    },
    //Add a new item to the cafe/catering table
    addCCMenuItem: function(newItem) {
        return axios.post("/api/manager/cc-menu");
    },
    //Add new composed cake
    addCakeMenuItem: function(newItem) {
        return axios.post("/api/manager/cake-menu");
    },
    //Delete item in Cafe and Catering table
    deleteCCMenuItem: function(id) {
        return axios.delete("/api/manager/cc-menu");
    },
    //Delete Cake Menu Item
    deleteCakeMenuItem: function(id) {
        return axios.delete("/api/manager/cake-menu");
    },
    //Update item in cafe and catering table
    updateCCMenuItem: function(id) {
        return axios.put("/api/manager/cc-menu");
    },
    //Update Item in Cake Menu
    updateCakeMenuItem: function(id) {
        return axios.put("/api/manager/cake-menu");
    }
};

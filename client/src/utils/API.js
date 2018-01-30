import axios from "axios";
axios.defaults.headers.common['Authorization'] = "jwt " + sessionStorage.getItem('token');


export default {
    //Get blog from webscraper
    getBlog: function() {
        return axios.get("/api/blog");
    },
    // Gets all cafe menu items
    getCafeMenuItems: function() {
        return axios.get("/api/menu/cc-menu/cafe");
    },
    //Get all of the catering menu items
    getCateringMenuItems: function() {
        return axios.get("/api/menu/cc-menu/catering");
    },
    //Get all of the composed cake menu items
    getComposedCakeMenuItems: function() {
        return axios.get("/api/menu/cake-menu/composed");
    },
    //Add a new item to the cafe/catering table
    addCCMenuItem: function(newItem) {
        return axios.post("/api/manager/cc-menu", newItem);
    },
    //Add new composed cake
    addCakeMenuItem: function(newItem) {
        return axios.post("/api/manager/cake-menu/composed", newItem);
    },
    //Delete item in Cafe and Catering table
    deleteCCMenuItem: function(id) {
        return axios.delete("/api/manager/cc-menu", { data: (id) });
    },
    //Delete Cake Menu Item
    deleteCakeMenuItem: function(id) {
        return axios.delete("/api/manager/cake-menu", { data: (id) });
    },
    //Update item in cafe and catering table
    updateCCMenuItem: function(itemData) {
        return axios.put("/api/manager/cc-menu", itemData);
    },
    //Update Item in Cake Menu
    updateCakeMenuItem: function(itemData) {
        return axios.put("/api/manager/cake-menu", itemData);
    },
    managerLogin: function(name, password) {
        console.log(name + "   " + password);
        return axios.post("/login", { name: name, password: password })
    },
    sendEmail: function(email, subject, text) {
        return axios.post('/api/email/', { email: email, subject: subject, text: text })
    }
};

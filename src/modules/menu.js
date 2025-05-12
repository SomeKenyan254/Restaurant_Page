import  createCard  from "./util.js";
const menu =  (() => {
   

   
    const menuCard = () => {
        const content = document.querySelector('#content')
        const menuTitle = document.createElement("h1");
        menuTitle.textContent = "Menu";
        content.appendChild(menuTitle);
        
        const menuItems = [
            { name: "Pizza", price: "$10" },
            { name: "Burger", price: "$8" },
            { name: "Pasta", price: "$12" },
            { name: "Salad", price: "$7" },
            { name: "Fries", price: "$2" }
        ];
        
        menuItems.forEach(item => {
            const card = createCard(`${item.name} - ${item.price}`, "menu-item");
            content.appendChild(card);
           
        });
       
    }
    return { menuCard }
})();
export default menu
import  createCard  from "./util.js";
const about = (() => {
    const aboutCard = () => {
        const card = createCard("about us", "about");
        const description = "Experience culinary excellence with our handcrafted burgers made from locally-sourced ingredients. Our chefs blend tradition with innovation to create unforgettable dining experiences.";
    
        const content = document.querySelector('#content')
      
        card.textContent = description;
    
        content.appendChild(card);
    }
   
    return { aboutCard }

  
})();


export default about



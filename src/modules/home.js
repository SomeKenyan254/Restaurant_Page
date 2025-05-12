import createCard from "./util.js";
const home = (() => {
   
   const homeCard = () => {
        const card_mission = "Bite Into Bliss: Where Fresh Meets Flavor!"
        const para = "Established in 1905 Bliss Burgers has been providing exquisite burgers to the residence of Hoodoo Valley. Welcome and experience the Bliss too!"
        
    
        const content = document.querySelector('#content')
        

        //create cards//
        const paraCard = createCard(para,"para")
        const missionCard = createCard (card_mission,"mission")
       
        
      
        //add the content to page
        content.appendChild(missionCard) 
        content.appendChild(paraCard)
       
       
        

    };
    
    return {homeCard}

    

   
    
    
   

})();


export default home
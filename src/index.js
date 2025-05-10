import "./styles.css";
import home from "./modules/home";
import about from "./modules/about";
import menu from "./modules/menu";

const nav = (() => {
    home.homeCard();
  
    const pageLoad = () => {
        const buttons = document.querySelectorAll(".buttons");
        buttons.forEach((button) => {
            button.addEventListener("click", (e) => {
                const target = e.target.id;
                if (target === "home") {
                    content.textContent = "";
                    home.homeCard();
                }
                else if(target === "about"){
                    content.textContent = "";
                    about.aboutCard();
                    
                }
                else if(target === "menu"){
                    content.textContent = "";
                    menubar.loadAbout()
                    
                }
            });
        });
        
    }
    return { pageLoad }
})();
nav.pageLoad();
  //function to create a blank div //
  const createCard =(content,className = "card") =>{
    const card = document.createElement("div")
    card.classList.add(className)
    card.textContent = content;

    return card
}
export default createCard
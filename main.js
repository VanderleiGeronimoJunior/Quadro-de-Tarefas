const columns = document.querySelectorAll(".column-cards");
// const cards = document.querySelectorAll(".card");

let draggedCard;

const dragstart = (e) => {
  draggedCard = e.target;
  e.dataTransfer.effectAllowed = "move";
};
const dragOver = (e) => {
  e.preventDefault();
};
const dragEnter = ({ target }) => {
  if (target.classList.contains("column-cards")) {
    target.classList.add("column-highlight");
  }
};

const dragLeave = ({ target }) => {
  target.classList.remove("column-highlight");
};
const drop = ({ target }) => {
  if (target.classList.contains("column-cards")) {
    target.classList.remove("column-highlight");
    target.append(draggedCard);
  }
};

const creatCard = ({ target }) => {
    if (!target.classList.contains("column-cards")) return;
    const card = document.createElement('section')
    card.className = 'card'
    card.draggable = 'true'
    card.contentEditable = 'true'

    
    card.addEventListener("focusout", ()=>{
    card.contentEditable = 'false'
    if(!card.textContent) card.remove()
    })
    card.addEventListener("dragstart", dragstart)
    
    target.append(card)
    card.focus()
}

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", drop);
  column.addEventListener("dblclick", creatCard);
});

// cards.forEach((card) => {
//   card.addEventListener("dragstart", dragstart);
// });

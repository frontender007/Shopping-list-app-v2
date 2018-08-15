var addBtn = document.getElementById("add");
var item = document.getElementById("item");
var numItems = document.getElementById("numItems");
var counter = 0;

var listItems = JSON.parse(localStorage.geItem("listItems"))||[];

addBtn.addEventListener("click", addItem);

function addItem(e){

  e.preventDefault();
  var text = item.value;
  if(text){
    var li = document.createElement("li");
    var doneButton = document.createElement("span");
    var removeButton = document.createElement("span");
    removeButton.textContent = "X";
    doneButton.innerHTML = "&#10004";
    doneButton.id = "doneButton";
    li.textContent = text;
    li.append(doneButton);
    li.append(removeButton);
    li.classList.add("added");
    document.getElementById("list").append(li);
    removeButton.addEventListener("click", removeItem);
    doneButton.addEventListener("click",  markDone);
    counter++;
    if(counter> 0){
      numItems.textContent = "Number of items : " + counter;
    }
    else {
      numItems.textContent = "";
    }
  }
  else{
    alert("Please enter a value in the input box.");
    item.focus();
    return;
  }
  item.value = "";
}


/* function to remove item from the list */
function removeItem(e){
  e.currentTarget.parentNode.classList.remove("added");
  e.currentTarget.parentNode.classList.add("removed");
  list.removeChild(e.currentTarget.parentNode);
  if(counter > 0){
    numItems.textContent = "Number of items : " + --counter;
  }
  else{
    numItems.textContent = "";
  }
}

/* function to mark an item completed/done on the list */
function markDone(e){
  e.currentTarget.parentNode.classList.add("markDone");
  var removed = e.currentTarget.parentNode.children[1];
  e.currentTarget.parentNode.removeChild(removed);
  e.currentTarget.style.right = "10px";
  e.currentTarget.style.color = "#4be772";
}

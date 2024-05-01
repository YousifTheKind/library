const myLibrary = [];


const table = document.querySelector(".myTable").querySelector(".tableBody");

const removeBtn = document.createElement('button');
removeBtn.type = 'button'
removeBtn.textContent = "Remove";

const toggleReadStatus = document.createElement('button')
toggleReadStatus.textContent = "Read Status"

const dialog = document.querySelector("dialog");
const showDialog = document.querySelector(".addButton");
const closeDialog = document.querySelector(".cancelBtn");
const confirmBtn = document.querySelector(".confirmBtn")

const form = document.querySelector("form");


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function() {
      if(read === "true") {return "Yes"}
      else {return "No"}
    };
    this.info = function () {
      let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read()}`
      return info
    }
  };
  
  function addBookToLibrary(title, author, pages, read) {

    const bookObject = new Book(title, author, pages, read);
    
    myLibrary.push(bookObject);
}


function displayBooks() {
    // loop that checks if data is already displayed
    const rows = document.querySelectorAll(".PlzRemove")
    console.log(rows);
    if(rows.length > 0) {rows.forEach(rows => rows.remove()); console.log("Rows removed")}
    // loop that displays the data
    for (let index in myLibrary) {
        let tr = table.insertRow();
        tr.insertCell().textContent = myLibrary[index].title;
        tr.insertCell().textContent = myLibrary[index].author;
        tr.insertCell().textContent = myLibrary[index].pages;
        tr.insertCell().textContent = myLibrary[index].read();
        tr.setAttribute("class", "PlzRemove");
        tr.setAttribute("att", index);
    }
}

showDialog.addEventListener("click", function(){
    dialog.showModal();
    form.reset();
});

confirmBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.querySelector("input[name='read']:checked").value;
    console.log(read)
    addBookToLibrary(title, author, pages, read);
    displayBooks()
    dialog.close();
});

closeDialog.addEventListener("click", function(){
    dialog.close();
});

// removeBtn.addEventListener("click", function(e){
//     delete myLibrary[index];
//     tr.remove();
// });  

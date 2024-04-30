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

const rows = document.querySelector(".tableBody > * ")
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
    for (let index in myLibrary) {
        let tr = table.insertRow();
        tr.insertCell().textContent = myLibrary[index].title;
        tr.insertCell().textContent = myLibrary[index].author;
        tr.insertCell().textContent = myLibrary[index].pages;
        tr.insertCell().textContent = myLibrary[index].read();

        removeBtn.addEventListener("click", function(e){
            delete myLibrary[index];
            tr.remove();
        });  
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
    addBookToLibrary(title, author, pages, read);
    displayBooks()
    dialog.close();
});

closeDialog.addEventListener("click", function(){
    dialog.close();
});
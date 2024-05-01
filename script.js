const myLibrary = [];


const table = document.querySelector(".myTable").querySelector(".tableBody");


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
      if(read === "Yes") return read;
      else return "No";
    };
  };
  
  function addBookToLibrary(title, author, pages, read) {

    const bookObject = new Book(title, author, pages, read);

    myLibrary.push(bookObject);
}


function displayBooks() {
    // remove all rows
    const rows = document.querySelectorAll(".remove")
    if(rows.length > 0) rows.forEach(rows => rows.remove())

    // add rows from myLibrary
    for (let index in myLibrary) {
        let tr = table.insertRow();
        tr.insertCell().textContent = myLibrary[index].title;
        tr.insertCell().textContent = myLibrary[index].author;
        tr.insertCell().textContent = myLibrary[index].pages;
        tr.insertCell().textContent = myLibrary[index].read();
        
        let removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = "Remove";

        let toggleReadStatus = document.createElement('button');
        toggleReadStatus.textContent = "Read Status";

        removeBtn.addEventListener("click", function(e){
            let rowIndex = removeBtn.closest("tr").getAttribute("att");
            myLibrary.splice(rowIndex, 1);
            removeBtn.closest("tr").remove();
            });  

        tr.insertCell().append(removeBtn)

        tr.setAttribute("class", "remove");
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

    // checks if it's already in the array
    duplicate = myLibrary.some(e => 
        e.title === title && 
        e.author === author &&
        e.pages === pages &&
        e.read() === read 
    );


    if(!duplicate) {
        addBookToLibrary(title, author, pages, read);
        displayBooks();
        dialog.close();
    }
    else {
        alert("Book is already added")
    } 
});

closeDialog.addEventListener("click", function(){
    dialog.close();
});


// removeBtn.addEventListener("click", function(e){
//     delete myLibrary[index];
//     tr.remove();
// });  


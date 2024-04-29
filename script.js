const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = function() {
      if(read) {return "read"}
      else {return "not read yet"}
    };
    this.info = function () {
      let info = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read()}`
      return info
    }
  };
  

  function addBookToLibrary() {
    let title = prompt("Type Title: ");
    let author = prompt("Type author: ");
    let pages = prompt("Type pages: ");
    let read = prompt("did you read it?(true or false): ");
    read = (read === "true")

    const Outliers = new Book(title, author, pages, read);

    myLibrary.push(Outliers)
    console.log(myLibrary)
}

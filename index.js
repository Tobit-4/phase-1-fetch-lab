function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then((reponse) => reponse.json())

  .then(data=>{
    console.log(data)

    const jsonString = JSON.stringify(data,null,2)

    console.log(jsonString)
    renderBooks(data)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});

// JavaScript Document
// get all my books from gbooks api
fetch('https://www.googleapis.com/books/v1/users/110124112182099433343/bookshelves/4/volumes?key=AIzaSyArwqAV0X3Kbb9loZyvZBKaeifNdfnSdCw')
    .then(response => response.json())
    .then(readBooks => {
        for (let readBook of readBooks.items) {
            document.getElementById("read").innerHTML +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="card-plain">
                        <img src=${readBook.volumeInfo.imageLinks.thumbnail} alt="book thumbnail">
                        <h5><a href=${readBook.volumeInfo.previewLink} target="_blank">${readBook.volumeInfo.title}</a></h5>
                    </div>
                </div>
                `;
        }
    });
fetch('https://www.googleapis.com/books/v1/users/110124112182099433343/bookshelves/3/volumes?key=AIzaSyArwqAV0X3Kbb9loZyvZBKaeifNdfnSdCw')
    .then(response => response.json())
    .then(books => {
        for (let book of books.items) {
            document.getElementById("reading").innerHTML +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="card-plain">
                        <img src=${book.volumeInfo.imageLinks.thumbnail} alt="book thumbnail">
                        <h5><a href=${book.volumeInfo.previewLink} target="_blank">${book.volumeInfo.title}</a></h5>
                    </div>
                </div>
                `;
        }
    });
// JavaScript Document
// get all my books from gbooks api
fetch('https://www.googleapis.com/books/v1/users/110124112182099433343/bookshelves/4/volumes?key=AIzaSyArwqAV0X3Kbb9loZyvZBKaeifNdfnSdCw')
    .then(response => response.json())
    .then(readBooks => {
        document.getElementById("readBadge").innerHTML = readBooks.totalItems;
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
        document.getElementById("readingBadge").innerHTML = books.totalItems;
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
fetch('https://www.googleapis.com/books/v1/users/110124112182099433343/bookshelves/2/volumes?key=AIzaSyArwqAV0X3Kbb9loZyvZBKaeifNdfnSdCw')
    .then(response => response.json())
    .then(booksTo => {
        document.getElementById("toReadBadge").innerHTML = booksTo.totalItems;
        for (let bookTo of booksTo.items) {
            document.getElementById("toRead").innerHTML +=
                `
                <div class="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div class="card-plain">
                        <img src=${bookTo.volumeInfo.imageLinks.thumbnail} alt="book thumbnail">
                        <h5><a href=${bookTo.volumeInfo.previewLink} target="_blank">${bookTo.volumeInfo.title}</a></h5>
                    </div>
                </div>
                `;
        }
    });
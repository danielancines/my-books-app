const electron = require('electron')
const https = require('https');
const axios = require('axios')
const booksService = require('../../services/booksService')
const title = document.querySelector('title')
const addButton = document.getElementById('addButtonId')
const booksContainer = document.getElementById('booksContainer')
const BrowserWindow = electron.remote.BrowserWindow

title.innerText = 'My Books Catalog'
addButton.innerText = 'Inserir'

window.onload = () => {
    loadBooks()
}

addButton.addEventListener('click', () => {
    let win = new BrowserWindow({ width: 400, height: 200 })
    win.on('close', () => {
        win = null
    })

    win.loadUrl()
    win.show()
})

async function loadBooks() {
    const books = await booksService.getMyBooks()

    books.map(book => {
        booksContainer.innerHTML += `<div class="col-4">
            <div>
                <img src=${book.imgUrl} alt="Book Cover" class="img-thumbnail bookThumbnail"/><br>
                <p class="text-center">${book.name}</p>
            </div>
        </div>`
    })
}

async function findBook(isbnNumber) {
    const book = await booksService.getBookByISBN(isbnNumber)
    booksContainer.innerHTML += `<div class="col-sm">
                                <h5>${book.name}</h5>
                                <img src=${book.imgUrl} alt="Book Cover" class="img-thumbnail bookThumbnail"/>
                                </div>`
}
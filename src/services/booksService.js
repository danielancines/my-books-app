const axios = require('axios')

let operations = {
    getBookByISBN: getBookByISBN,
    getMyBooks: getMyBooks
}

async function getBookByISBN(isbnNumber) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNumber}`)
    if (response === undefined) {
        return {}
    }

    return {
        name: response.data.items[0].volumeInfo.title,
        imgUrl: response.data.items[0].volumeInfo.imageLinks ? response.data.items[0].volumeInfo.imageLinks.thumbnail : '../../assets/images/bookcovermissing.jpg'
    }
}

async function getMyBooks(){
    return [
        {
            name: 'The Da Vinci Code',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51NJ2nNdkvL._SX329_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And Demons: (Robert ',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And Demons: (Robert Langdon Book 1)',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And Demons: (R',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        },
        {
            name: 'The Da Vinci Code',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51NJ2nNdkvL._SX329_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And D',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And Demons: Book 1)',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        },
        {
            name: 'Angels And Demons: (Robert Langdon Book 1)',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51m1HzK8oIL._SX320_BO1,204,203,200_.jpg'
        }
    ]
}

module.exports = operations

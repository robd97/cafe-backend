import { addnewBook, 
        getBooks,
        getBookWithID,
        deleteBook,
        updateBook
} from '../controllers/controllers'

const routes = (app) => {
    app.route('/books')
        // get multiple products
        .get(getBooks)

        //Post endpoint
        .post(addnewBook);

    app.route('/books/:BookID')
        // Get a specific product with ID
        .get(getBookWithID)

        // Update a specific product
        .put(updateBook)
        
        // Delete a specific product
        .delete(deleteBook);
}

export default routes;

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a book title'
    },
    authorList: {
        type: [String],
        validate: v => v == null || v.length > 0
    },
    yearOfPublication: Date,
    isbn: {
        type:String,
        match: /(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)/,
        required: 'Enter a ISBN'
    },
    totalCopies: {
        type: Number,
        min: 0,
        default: 1
    }
});

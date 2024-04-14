const AuthorModel = require('../../models/book/AuthorModel')

const authorController = {
    getAllAuthor: async (req, res) => {
        try {
            const getBookGenre = await AuthorModel.find();
            res.status(200).json(getBookGenre);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = authorController


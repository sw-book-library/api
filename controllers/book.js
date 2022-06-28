const Book = require("../models/book");

//GET: Search all books.
exports.findAll = async (req, res) => {
    try {
        const books = await Book.findAll({
            order: [["title", "ASC"]],
            raw: true,
        });
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//GET: Search books by id receive.
exports.findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findOne({ 
            where: { id } 
        });

        if (!!book) {
            res.json(book);
        } else {
            res.status(404).json({ error: "Book not found." })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

//GET: Search books by code receive.
exports.findByCode = async (req, res) => {
    const { code } = req.params;
    try {
        const book = await Book.findOne({ 
            where: { code } 
        });

        if (!!book) {
            res.json(book);
        } else {
            res.status(404).json({ error: "Book not found." })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

//POST: Insert a book.
exports.create = async (req, res) => {
    try {
        const newBook = await Book.create({
            title: req.body.title,
            productionYear: req.body.productionYear,
            author: req.body.author,
            description: req.body.description,
            category: req.body.category,
            publishingCompany: req.body.publishingCompany,
            code: req.body.code,
            active: true,
        });
        res.json(newBook);
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
};   

//PUT: Update book data.
exports.update = async (req, res) => {
    const { id } = req.params;
    try {
      const payload = {};

      if (!!req.body.title) {
          payload.title = req.body.title;
      }
      if (!!req.body.productionYear) {
          payload.productionYear = req.body.productionYear;
      }
      if (!!req.body.author) {
          payload.author = req.body.author;
      }
      if (!!req.body.description) {
          payload.description = req.body.description;
      }
      if (!!req.body.active) {
          payload.active = req.body.active;
      }
      if (!!req.body.publishingCompany) {
          payload.publishingCompany = req.body.publishingCompany;
      }
      if (!!req.body.code) {
          payload.code = req.body.code;
      }

      const updatedBook = await Book.update(payload, {
          where: { id },
      });

      res.json({ success: !!updatedBook && +updatedBook[0] > 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
}
};

//DELETE: Remove book data.
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBook = await Book.destroy({ where: { id } });

        res.json({ success: !!deletedBook });
    } catch (err) {
        res.status(500).json({ error: "Book not found." });
    }
}; 
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const morgan = require('morgan');
const bodyparser = require("body-parser");
const cors = require('cors')

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const connectdb = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/Bookdb');
        console.log("connected");
    }
    catch (err) {
        console.log(err);
    }
}
connectdb()

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publication: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", BookSchema);

app.post("/add_book", async (request, response) => {
    const book = new Book({
        title: request.body.title,
        category: request.body.category,
        author: request.body.author,
        description: request.body.description,
        publication: request.body.publication
    });

    try {
        await book.save(book);
        response.send(book);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.get("/view_book", async (request, response) => {
    Book.find()
        .then(book => {
            response.send(book);
        })
        .catch(err => {
            response.status(500).send({ message: err.message || "Error occured while fetching" });
        });
})

app.get("/view_one_book/:id", async (request, response) => {
    const id = request.params.id;
    Book.findById(id)
        .then(book => {
                response.send(book)
            })
        .catch(err => {
            response.status(500).send({ message: "Error occured while deleting" });
        })
})

app.delete("/delete_book/:id", (request, response) => {
    const id = request.params.id;
    Book.findByIdAndDelete(id)
        .then(data => {
            if (data) {
                response.send({msg:"success"})
            }
            else {
                response.status(404).send({ message: `Can't delete user with ${id}. May be not found` })
            }
        })
        .catch(err => {
            response.status(500).send({ message: "Error occured while deleting" });
        })
})


app.put("/update_book/:id", (request, response) => {
    const id = request.params.id;
    Book.findByIdAndUpdate(id, request.body)
        .then(data => {
            if (data) {
                response.send({msg:"success"})
            }
            else {
                response.status(404).send({ message: `Can't update user with ${id}. May be not found` })
            }
        })
        .catch(err => {
            response.status(500).send({ message: "Error occured while updating" });
        })
})

// app.post('/api/add_book',(req, res) => {
//     if (!req.body) {
//         res.status(400).send({ message: "Inputs can not be empty" });
//         return;
//     }

//     const user = new Userdb({
//         name: req.body.title
//     });

//     //save user to database
//     user
//         .save(user)
//         .then(data => {
//             res.redirect("/");
//             //res.send(data) -->will send the data
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occured"
//             });
//         });
// }
// );

app.listen(8000, () => {
    console.log(`Server is running on http://localhost:8000`);
});

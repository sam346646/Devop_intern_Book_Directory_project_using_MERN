import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

import Breadcrumbs from '../components/Breadcrumbs'

function UpdateBook() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("History")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [publication, setPublication] = useState("")

    const [book, setBook] = useState({})

    const { id } = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:8000/view_one_book/${id}`).then((response) => {
            setBook(response.data)
        })
    }, [])

    useEffect(() => {
        if (book) {
            setTitle(book.title)
            setCategory(book.category)
            setAuthor(book.author)
            setDescription(book.description)
            setPublication(book.publication)
        }
    }, [book])

    const Update = (event) => {
        event.preventDefault();
       
            const data = {
                title: title,
                category: category,
                author: author,
                description: description,
                publication: publication
            }
            Axios.put(`http://localhost:8000/update_book/${id}`, data);
            navigate("/");
        
    }


    return (
        <div className="row content_area mx-2 p-4 rounded">
            <div className="col-lg-12">
                <Breadcrumbs breadcrumbs_title='ADD BOOK' breadcrumbs_icon='pencil' />

                <form className="form-vertical" encType="multipart/form-data">
                    <div className="form-group mb-3">
                        <label className="form-label">Book title</label>
                        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Product category</label>

                        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-select" required>

                            return (
                            <option value='History'> History </option>
                            <option value='Science'> Science </option>
                            <option value='Other'> Other </option>
                            )

                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Book author</label>
                        <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label">Publication</label>
                        <input type="text" name="publication" value={publication} onChange={(e) => setPublication(e.target.value)} className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label"></label>
                        <input type="submit" onClick={Update} name="submit" value="Update book" className="form-control btn btn-success" />
                    </div>
                </form>
            </div >

        </div >
    )
}

export default UpdateBook

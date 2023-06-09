import { React, useState, useEffect } from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom';

import Breadcrumbs from '../components/Breadcrumbs';

function Dashboard() {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:8000/view_book').then((response) => {
      setBookList(response.data)
    })
  }, [])

  return (
    <div className='content_area mx-2 p-4 rounded'>
      <Breadcrumbs breadcrumbs_title='Dashboard' breadcrumbs_icon='dashboard' />
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Description</th>
            <th>Publication</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            bookList.map((book) => {
              return (
                <tr>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                  <td>{book.author}</td>
                  <td>{book.description}</td>
                  <td>{book.publication}</td>
                  <td><NavLink className='nav-link text-primary' to={`UpdateBook/${book._id}`}><i className="fa fa-pencil"></i> Edit</NavLink></td>
                  <td><NavLink className='nav-link text-primary' to={`DeleteBook/${book._id}`}><i className="fa fa-trash-o"></i> Delete</NavLink></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
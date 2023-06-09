import React from 'react'
import { NavLink } from 'react-router-dom';

function ViewBook() {
    return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Publication</th>
                        <th>Image</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cdgjc</td>
                        <td>cdgjc</td>
                        <td>cdgjc</td>
                        <td>cdgjc</td>
                        <td><img src='' alt="" width='60' height='60' /></td>
                        <td><NavLink className='nav-link text-primary' ><i className="fa fa-pencil"></i> Edit</NavLink></td>
                        <td><NavLink className='nav-link text-primary'><i className="fa fa-trash-o"></i> Delete</NavLink></td>
                        {/* to={`update_order/${prod.Prod_id}`} */}
                    </tr>
                </tbody>
            </table>
    )
}

export default ViewBook

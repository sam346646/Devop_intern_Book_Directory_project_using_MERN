import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

function DeleteBook() {
    const navigate = useNavigate()
        const { id } = useParams();
        useEffect(()=>{
            Axios.delete(`http://localhost:8000/delete_book/${id}`)
        navigate('/')
        })
        
}

export default DeleteBook

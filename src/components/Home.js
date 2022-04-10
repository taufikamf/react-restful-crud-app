import React from 'react'
import { useState, useEffect } from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    let navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/programs")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result[0]);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      const handleDelete = (id) => {
        let confirmation = window.confirm("Yakin ingin menghapus data?")
        if(confirmation){
          axios.delete("http://127.0.0.1:8000/api/programs/"+id)
        .then(() => {
          window.alert("Data berhasil dihapus");
          window.location.reload();
        });
        }else{
         window.alert("Gagal menghapus data") 
        }
      }
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="divUtama">
            <h1>Product List</h1>
            <table>
              <tr>
                <th>ID Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
              {items.map(item => (
                <tr key={item.id}>
                  <th>{item.id_product}</th>
                  <th>{item.productName}</th>
                  <th>{item.price}</th>
                  <th>{item.quantity}</th>
                  <th>
                    <Link to={'/edit/' + item.id} state={{data: item}}><FaEdit/></Link> 
                    <button onClick={() => handleDelete(item.id)} className='delButton'><FaRegTrashAlt/></button>
                  </th>
                </tr>
              ))}
            </table>
            <Link className='submitLink' to="/add">Create New Data</Link>
          </div>
        );
      }
}

export default Home
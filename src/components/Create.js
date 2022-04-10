import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
    const [getId, setId] = useState('')
    const [getName, setName] = useState('')
    const [getPrice, setPrice] = useState(0)
    const [getQty, setQty] = useState(0)

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            id_product : getId,
            productName : getName,
            price : getPrice,
            quantity : getQty,
        }

        axios.post("http://127.0.0.1:8000/api/programs", formData).then((response) => {
            console.log(response.status);
            window.alert('Success add New Product');
            navigate("/", { replace: true });

        })
    }
  return (
    <div className='divUtama'>
        <h1>Create New Data</h1>
        <form className='form'>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputIdProduct">ID Product</label>
                    <input type="text" className="form-control" id="inputIdProduct" onChange={event => {setId(event.target.value)}}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputProduct">Product Name</label>
                    <input type="text" className="form-control" id="inputProduct" onChange={event => {setName(event.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputPrice">Product Price</label>
                    <input type="number" className="form-control" id="inputPrice" onChange={event => {setPrice(event.target.value)}}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputQuantity">Quantity</label>
                    <input type="number" className="form-control" id="inputQuantity" onChange={event => {setQty(event.target.value)}}/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit} to="/">Add Data</button>
        </form>
    </div>
  )
}

export default Create
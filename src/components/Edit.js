import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {

    const location = useLocation()
    const {data} = location.state
    const navigate = useNavigate();

    const [getId, setId] = useState(data.id_product)
    const [getName, setName] = useState(data.productName)
    const [getPrice, setPrice] = useState(data.price)
    const [getQty, setQty] = useState(data.quantity)

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put("http://127.0.0.1:8000/api/programs/"+data.id, {
            id_product: getId,
            productName: getName,
            price : getPrice,
            quantity : getQty,
        }).then((response) => {
            console.log(response.status);
            console.log(response.data);
            window.alert('Success Update Product');
            navigate("/", { replace: true });

        }).catch(error => {
            this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
    }
  return (
    <div className='divUtama'>
        <h1>Edit Data</h1>
        <form className='form'>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputIdProduct">ID Product</label>
                    <input type="text" className="form-control" id="inputIdProduct" value={getId} onChange={event => {setId(event.target.value)}}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputProduct">Product Name</label>
                    <input type="text" className="form-control" id="inputProduct" value={getName} onChange={event => {setName(event.target.value)}}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputPrice">Product Price</label>
                    <input type="number" className="form-control" id="inputPrice" value={getPrice} onChange={event => {setPrice(event.target.value)}}/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputQuantity">Quantity</label>
                    <input type="number" className="form-control" id="inputQuantity" value={getQty} onChange={event => {setQty(event.target.value)}}/>
                </div>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Update Data</button>
        </form>
    </div>
  )
}

export default Edit
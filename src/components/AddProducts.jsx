import React, { useState } from "react";
import {db, storage} from "../config/Config";

function AddProducts(){

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState("");

    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError("");
        } else {
            setProductImg(null);
            setError("Please select a valid image type.");
        }
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log("Product Name : "+productName+" Product Price : "+productPrice+" Product Image : "+productImg);
        const uploadTask = storage.ref("productImages/"+productImg.name).put(productImg);
        uploadTask.on("state_changed", snapshot => {
            const progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => {
            setError(err.message);
        }, () => {
            storage.ref("productImages").child(productImg.name).getDownloadURL().then(url => {
                db.collection("Products").add({
                    productName : productName,
                    productPrice : Number(productPrice),
                    productImageUrl : url
                }).then(()=> {
                    setProductName("");
                    setProductPrice(0);
                    setError("");
                    setProductImg("");
                    document.getElementById("file").value = "";
                }).catch(err=>setError(err.message));
            });
        });
    }

    return <div className="container">
        <br />
        <h2>Add Products</h2>
        <hr />
        <form autoComplete="off" className="form-group" onSubmit={addProduct}>
            <label htmlFor="product-name">Product Name</label>
            <br />
            <input type="text" className="form-control" required onChange={(e) => {setProductName(e.target.value)}} value={productName}/>
            <br />
            <label htmlFor="product-price">Product Price</label>
            <br />
            <input type="number" className="form-control" required onChange={(e) => {setProductPrice(e.target.value)}} value={productPrice}/>
            <br />
            <label htmlFor="product-img">Product Image</label>
            <br />
            <input type="file" className="form-control" onChange onChange={productImgHandler}/>
            <br />
            <br />
            <button className="btn btn-success btn-md">Add Product</button>
        </form>
        {error && <span>{error}</span>}
    </div>
}

export default AddProducts;
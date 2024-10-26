import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Productadmin } from '../Service/Action/Product.action';
import { NavLink } from 'react-router-dom';


const CreateProducts = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [productData, setproductData] = useState({
    Product_name: '',
    price: '',
    category: '',
    rating: '',
    Quantity: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setproductData({ ...productData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(Productadmin(productData));
    setproductData({
      Product_name: '',
      price: '',
      category: '',
      rating: '',
      description: '',
      image: ''
    })
    console.log('Form submitted:', productData);
    navigate('/ViewProducts');
  };

  return (
    <>
      <div className="page-wrapper product">
        <div className="content">
          <div className="page-header d-flex justify-content-between align-items-center">
            <div className="page-title">
              <h4 style={{ fontWeight: "700", color: "#212B36", fontSize: "18px" }}>Product Add</h4>
              <h6 style={{ fontWeight: "400", color: "#555", fontSize: "14px" }}>Create new product</h6>
            </div>
            <div className="page-btn">
              <NavLink to="/ViewProducts" className="text-light">
                  Product View
              </NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <Form className="pt-3 form-container" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Product name</Form.Label>
                      <Form.Control type="text" placeholder="Enter The Name" name="Product_name" value={productData.Product_name} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Price</Form.Label>
                      <Form.Control type="text" placeholder="Enter The Price" name="price" value={productData.price} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Category</Form.Label>
                      <Form.Control type="text" placeholder="Enter The Category" name="category" value={productData.category} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Rating</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Rating" name="rating" value={productData.rating} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Quantity</Form.Label>
                      <Form.Control type="text" placeholder="Enter your Quantity" name="Quantity" value={productData.Quantity} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridFirstName" className='mb-2'>
                      <Form.Label className="mb-2">Product Image</Form.Label>
                      <Form.Control type='text' placeholder="Enter your image" name="image" value={productData.image} onChange={handleChange} />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProducts;

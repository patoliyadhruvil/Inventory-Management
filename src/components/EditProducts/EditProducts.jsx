import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { dataEdit } from "../Service/Action/Product.action";

const EditProducts = () => {

    const { product } = useSelector(state => state.ProductReducer)
    const [productData, setproductData] = useState(product);
    // console.log("producgsvdgvdvds",product); 

    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setproductData({ ...productData, [name]: value });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        // console.log('Form submitted:', productData);
        dispatch(dataEdit(productData));
        navigate('/ViewProducts');
    };


    return (

        <>
            <div className="page-wrapper product">
                <div className="content">
                    <div className="page-header d-flex justify-content-between">
                        <div className="page-title">
                            <h4 style={{ fontWeight: "700", color: "#212B36", fontSize: "18px" }}>Product update</h4>
                            <h6 style={{ fontWeight: "400", color: "#555", fontSize: "14px" }}>Manage your products</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <Form className="pt-3 form-container" onSubmit={handleUpdate}>
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
                                            <Form.Control type="text" placeholder="Enter your Quantity" name="Quantity" value={productData.rating} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row className="mb-3">
                                </Row>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}
export default EditProducts;
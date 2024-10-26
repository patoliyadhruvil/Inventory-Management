import { Button, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { dataDelete, dataGet, datasingle } from "../Service/Action/Product.action";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ViewProducts = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { products } = useSelector(state => state.ProductReducer)

    const handleUpdate = async (id) => {
        await dispatch(datasingle(id))
        navigate('/EditProducts');

    }

    const handleDelete = (id) => {
        dispatch(dataDelete(id))
    }

    useEffect(() => {

        dispatch(dataGet());
        console.log("hrllp");

    },[])

    return (

        <>

            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header d-flex justify-content-between align-items-center">
                        <div className="page-title">
                            <h4 style={{ fontWeight: "700", color: "#212B36", fontSize: "18px" }}>Product List</h4>
                            <h6 style={{ fontWeight: "400", color: "#555", fontSize: "14px" }}>Manage your products</h6>
                        </div>
                        <div className="page-btn">
                            <NavLink to="/CreateProducts" className="text-light">
                                <img src="https://dreamspos.dreamstechnologies.com/html/template/assets/img/icons/plus.svg" alt="img" className="me-1"/>
                                Add New Product
                            </NavLink>
                        </div>
                    </div>
                    <Row className='view-table'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    <th>Rating</th>
                                    <th>image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((add, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{add.Product_name}</td>
                                        <td>{add.price}</td>
                                        <td>{add.Quantity}</td>
                                        <td>{add.category}</td>
                                        <td>{add.rating}</td>
                                        <td className="product-image">
                                            <img src={add.image} alt="" />
                                        </td>
                                        <td>
                                            <Button variant="info" onClick={() => handleUpdate(add.id)}>
                                                Update
                                            </Button>
                                            |||||
                                            <Button variant="danger" onClick={() => handleDelete(add.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Row>
                </div>
            </div>
        </>

    )

}
export default ViewProducts;
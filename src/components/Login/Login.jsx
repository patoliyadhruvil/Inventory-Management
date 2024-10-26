import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { googlelogin, loginuser } from '../Service/Action/Product.action';


function Login() {


  const { isLogin } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({ ...prevLogin, [name]: value }));
  };

  const handlegoogle = () => {
    dispatch(googlelogin())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      dispatch(loginuser(login.email, login.password));
    }
  };

  if (isLogin) {

    return (
      navigate('/')

    )
  }
  else {
    return (
      <>
        <section className='form-01-main position-fixed'>
          <div className='form-01-main'>
            <div className='form-coverr'>
              <div className="container">
                <div className="row">
                  <center>
                    <div className="col-12">
                      <div class="_main_head_as">
                        <a href="#">
                          <img src="https://www.shutterstock.com/image-photo/businessman-checking-time-watch-600nw-381472021.jpg" alt="" />
                        </a>
                      </div>
                      <form action="#" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label className='form-labell'>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" className='form-controll' name="email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <Form.Label className='form-labell'>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" className='form-controll' name="password" onChange={handleChange} />
                        </Form.Group>
                        <div className='btn_uy'>
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </div>
                      </form>
                      <p onClick={handlegoogle} className='text-white'>Log in with Google <a href="#" className='text-primary'>Click Me</a></p>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    );

  }


};


export default Login

import React from 'react'
import { Button, Container, Row, Form, Col } from 'react-bootstrap'
import * as Yup from 'yup';
import { Form as BootstrapForm } from 'react-bootstrap'
import { Formik, Field } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../pages/AuthContext';

const LoginForm = () => {

    // const navigate=useNavigate()
    // const {login}=useAuth();

    const initialValues = {
        userName: "",
        password: ""
    }
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required("Required username"),
        password: Yup.string().required("Required password")
    })

    const onSubmit=async(values)=>{
        console.log(values)
        // try {
        //     await login(values);
        //     navigate('/');  
  
        //   } catch (error) {
            
        //   }
    }
    return (
        <>
            <Container className='loginContainer normal-login'>
                <Row>
                    <div className='col-md-12 text-center'>
                        <img src={"/nestle-logo.png"} style={{ height: "30px" }} />
                    </div>
                </Row>
                <Row>
                    <div className='col-md-12'>
                        <p>Login in using your Email or phoneNumber </p>
                    </div>
                </Row>
                <Row>
                    <div className='col-md-12'>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ touched, errors, isSubmitting }) => (
                                <Form>
                                    <Row>
                                        <Col md={9}>
                                            <BootstrapForm.Group controlId='userName'>
                                                <BootstrapForm.Label>User Name</BootstrapForm.Label>
                                                <Field type='text' name='userName' id='inputformControl' className={touched.userName && errors.userName ? 'form-control is-invalid ' : "form-control"} />
                                                {touched.userName && errors.userName && (<div className='text-danger'>{errors.userName}</div>)}
                                            </BootstrapForm.Group>
                                        </Col>
                                        <Col md={9}>
                                            <BootstrapForm.Group controlId='password'>
                                                <BootstrapForm.Label>Password</BootstrapForm.Label>
                                                <Field type='text' name='password' id='inputformControl' className={touched.password && errors.password ? 'form-control is-invalid' : 'form-control'}/>
                                                {touched.password && errors.password && (<div className='text-danger'>{errors.password}</div>)}
                                            </BootstrapForm.Group>
                                        </Col>
                                    </Row>
                                    <div className='col-md-12 text-center'>
                                        <Button type='submit' className='Submitbutton' disabled={isSubmitting}>Submit</Button>
                                    </div>
                                    <Row />

                                </Form>
                            )}

                        </Formik>

                    </div>
                </Row>

            </Container>
        </>
    )
}

export default LoginForm

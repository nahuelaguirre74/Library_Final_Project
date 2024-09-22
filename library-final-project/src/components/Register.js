import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
    name: Yup.string().required('Requerido'),
    email: Yup.string().email('El email es inválido').required('Requerido'),
    password: Yup.string().required('Requerido'),
});

const Register = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const onSubmit = (values, { setSubmitting }) => {
        axios.post('http://localhost:27017/Libreria_BD', values)
            .then(response => {
                console.log(response.data);
                // Maneja la lógica después de un registro exitoso
            })
            .catch(error => {
                console.error("Error al registrar:", error);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="register-container">
            <h2>Crear Usuario</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Nombre</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="email">Correo</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div>
                            <label htmlFor="password">Contraseña</label>
                            <Field type="password" id="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Crear Usuario</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Register;

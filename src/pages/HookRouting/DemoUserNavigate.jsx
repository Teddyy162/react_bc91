import React from 'react'

import { useFormik } from 'formik'
import * as yup from 'yup'

import {useNavigate} from 'react-router-dom'

const DemoUserNavigate = () => {
    //Quy tắc dùng hook: Hook không bỏ trong if else hay function và luôn đặt trên đầu component
    const navigate = useNavigate();


    const userLoginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
            fullName: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank!').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email is invalid'),
            password: yup.string('password cannot be blank!').matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Phải có ít nhất 8 ký tự và 1 số và 1 ký tự đặc biệt'),
            fullName: ''
        }),
        onSubmit: (valueForm) => {
            console.log(123);
            //Check đăng nhập
            //Email: cybersoft password: cybersoft
            if (valueForm.email == 'cybersoft@gmail.com' && valueForm.password == 'Cybersoft@123'){
                //thành công
                // navigate('/profile', {replace:true});
                navigate('/profile',{
                    state: {
                        message: `Chúc mừng ${valueForm.email}`
                    }
                });
            }else{
                //thất bại
                navigate('/forgot-pass');
                // navigate('/forgot-pass', {replace:true});
            }
        }
    })



    return (
        <form className='container' onSubmit={userLoginForm.handleSubmit}>
            <div className="w-50 mx-auto card my-5">
                <div className="card-header bg-dark text-white text-center">Login</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" id='email' name='email' value={userLoginForm.values.email} onInput={userLoginForm.handleChange} onBlur={userLoginForm.handleBlur} />
                        <p className="text text-danger">{userLoginForm.errors.email}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type='password' id='password' name='password' value={userLoginForm.values.password} onInput={userLoginForm.handleChange} />
                        <p className="text text-danger">{userLoginForm.errors.password}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Fullname</label>
                        <input className="form-control" type='text' id='fullName' name='fullName' value={userLoginForm.values.fullName} onInput={userLoginForm.handleChange} />
                        <p className="text text-danger">{userLoginForm.errors.fullName}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-dark" type='submit' disabled={!userLoginForm.isValid}>Login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default DemoUserNavigate
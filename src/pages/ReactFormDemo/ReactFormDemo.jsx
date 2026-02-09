import React, { useState } from 'react'

const ReactFormDemo = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        fullName: ''
    });

    const [errLogin, setErrrLogin] = useState({
        email: '',
        password: '',
        fullName: ''
    })

    const handleChangeInput = (e) => {
        //Lấy giá trị value khi input
        //Xử lý cho value
        let { value, name } = e.target;
        let dataType = e.target.getAttribute('dataType'); //Nếu thẻ không có thì trả null


        let newValue = {
            ...userLogin,
            [name]: value
        }
        setUserLogin(newValue);
        //Xử lý cho trường hợp lỗi
        let newError = { ...errLogin };
        if (newValue[name].trim() == '') {
            newError[name] = `${name} cannot be blank!`
        } else {
            newError[name] = '';
            if (dataType) {
                switch (dataType) {
                    case 'email': {
                        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!regexEmail.test(value)) {
                            newError[name] = 'Email is invalid - Ex: email@gmail.com';
                        }
                    }; break
                    case 'password': {
                        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                        if(!passwordRegex.test(value)){
                            newError[name] = 'Password is invalid - Ex: Cybersoft@123';
                        }
                    }; break;
                    default: {

                    }
                }
            }
        }



        //Cuối cùng là setState
        setUserLogin(newValue);
        setErrrLogin(newError);
    }
    console.log(userLogin);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Một form được xem là hợp lệ khi các trường đã được nhập và err tất cả phải = ''
        let valid = true;
        for (let key in userLogin){
            if(userLogin[key].trim() == ''){
                valid = false;
                return;
            }
        }
        for (let key in errLogin){
            if(errLogin[key] !== ''){
                valid = false;
                return;
            }
        }
        //Sau khi check thì mới cho submit
        console.log(userLogin, 'submit')
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className="w-50 mx-auto card my-5">
                <div className="card-header bg-dark text-white text-center">Login</div>
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input datatype='email' className="form-control" id='email' name='email' value={userLogin.email} onInput={handleChangeInput} />
                        <p className="text text-danger">{errLogin.email}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input datatype='password' className="form-control" type='password' id='password' name='password' value={userLogin.password} onInput={handleChangeInput} />
                        <p className="text text-danger">{errLogin.password}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullName">Fullname</label>
                        <input className="form-control" type='text' id='fullName' name='fullName' value={userLogin.fullName} onInput={handleChangeInput} />
                        <p className="text text-danger">{errLogin.fullName}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-dark" type='submit'>Login</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ReactFormDemo
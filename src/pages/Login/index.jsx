import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetLayoutTitle } from '../../context/LayoutTitleContext';
import { useIsLoggedIn, useSetIsLoggedIn } from '../../context/LoginContext';

import Form from '../../components/Form';

const Login = () => {
    const [user, setUser] = useState({});

    const setLayoutTitle = useSetLayoutTitle();
    const isLoggedIn = useIsLoggedIn();
    const setIsLoggedIn = useSetIsLoggedIn();

    const navigate = useNavigate();

    const updateUser = event => {
        setUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const onFormSubmit = event => {
        event.preventDefault();
        setIsLoggedIn(true);
    };

    const inputs = [
        {
            label: 'Username',
            type: 'text',
            required: true,
            id: 'form-username',
            name: 'formUsername',
            className: 'form-input-text',
            onChange: updateUser,
        },
        {
            label: 'Password',
            type: 'password',
            required: true,
            id: 'form-password',
            name: 'formPassword',
            className: 'form-input-text',
            onChange: updateUser,
        },
        {
            type: 'submit',
            value: 'Login',
            className: 'button blue-button',
        },
    ];

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        } else {
            document.title = 'Login - MyAnimeList.net';
            setLayoutTitle('Login');
        }
    }, [isLoggedIn, navigate, setLayoutTitle]);

    return <Form inputs={inputs} onFormSubmit={onFormSubmit} />;
};

export default Login;

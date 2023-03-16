import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetLayoutTitle } from '../../context/LayoutTitleContext';
import { useIsLoggedIn, useSetIsLoggedIn } from '../../context/LoginContext';

import Form from '../../components/Form';

const Register = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const isLoggedIn = useIsLoggedIn();
    const setLoggedIn = useSetIsLoggedIn();
    const setLayoutTitle = useSetLayoutTitle();

    const navigate = useNavigate();

    const updateUser = event => {
        setUser(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    };

    const checkInput = event => {
        const { name, value } = event.target;
        setError(prev => {
            const current = { ...prev, [name]: '' };

            switch (name) {
                case 'formEmail':
                    if (!value) {
                        current[name] = 'It should be a valid email address';
                    }
                    break;
                case 'formUsername':
                    if (!value || !/^[a-zA-Z0-9]{4,16}$/.test(value)) {
                        current[name] =
                            "Username should be 4-16 characters long and shouldn't include any special characters";
                    }
                    break;
                case 'formPassword':
                    if (
                        !value ||
                        !/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
                            value
                        )
                    ) {
                        current[name] =
                            'Password should be 8-20 characters long and should include at least 1 letter, 1 number and 1 special character';
                    } else if (user.formConfirmPassword && value !== user.formConfirmPassword) {
                        current['formConfirmPassword'] = "Passwords don't match";
                    }
                    break;
                case 'formConfirmPassword':
                    if (!value) {
                        current[name] = 'Please enter Confirm Password';
                    } else if (user.formPassword && value !== user.formPassword) {
                        current[name] = "Passwords don't match";
                    }
                    break;
                default:
                    break;
            }

            return current;
        });
    };

    const onFormSubmit = event => {
        event.preventDefault();
        setLoggedIn(true);
    };

    const inputs = [
        {
            label: 'Email',
            type: 'email',
            required: true,
            id: 'form-email',
            name: 'formEmail',
            className: `form-input-text ${error.formEmail ? 'form-input-invalid' : ''}`,
            onChange: updateUser,
            onBlur: checkInput,
            errorMessage: error.formEmail,
        },
        {
            label: 'Username',
            type: 'text',
            required: true,
            id: 'form-username',
            name: 'formUsername',
            className: `form-input-text ${error.formUsername ? 'form-input-invalid' : ''}`,
            onChange: updateUser,
            onBlur: checkInput,
            errorMessage: error.formUsername,
        },
        {
            label: 'Password',
            type: 'password',
            required: true,
            id: 'form-password',
            name: 'formPassword',
            className: `form-input-text ${error.formPassword ? 'form-input-invalid' : ''}`,
            onChange: updateUser,
            onBlur: checkInput,
            errorMessage: error.formPassword,
        },
        {
            label: 'Confirm Password',
            type: 'password',
            required: true,
            id: 'form-confirm-password',
            name: 'formConfirmPassword',
            className: `form-input-text ${error.formConfirmPassword ? 'form-input-invalid' : ''}`,
            onChange: updateUser,
            onBlur: checkInput,
            errorMessage: error.formConfirmPassword,
        },
        {
            type: 'submit',
            className: 'button blue-button',
            value: 'Create Account',
        },
    ];

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        } else {
            document.title = 'Sign Up - MyAnimeList.net';
            setLayoutTitle('Sign Up');
        }
    }, [isLoggedIn, navigate, setLayoutTitle]);

    return <Form inputs={inputs} onFormSubmit={onFormSubmit} />;
};

export default Register;

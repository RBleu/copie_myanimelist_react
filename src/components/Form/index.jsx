import FormInput from '../FormInput';
import './style.css';

const Form = ({ inputs, onFormSubmit }) => {
    return (
        <div className='form-container flex-center'>
            <div className='form-border'>
                <form onSubmit={onFormSubmit}>
                    {inputs.map((input, index) => (
                        <FormInput key={index} input={input} />
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Form;

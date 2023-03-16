import './style.css';

const FormInput = ({ input }) => {
    const { label, errorMessage, ...attributes } = input;

    return (
        <div className='form-input-container'>
            {label && <label htmlFor={attributes.id}>{label}</label>}
            <input {...attributes} />
            {errorMessage && <div className='form-input-error'>{errorMessage}</div>}
        </div>
    );
};

export default FormInput;

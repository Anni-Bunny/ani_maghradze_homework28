const FirstName = () => {
    return (
        <div className='labelAndInput'>
            <label htmlFor="firstName" className='label'>სახელი</label>
            <input type="text" id='firstName' placeholder='შეიყვანეთ სახელი' className='input'/>
        </div>
    )
}
export default FirstName;

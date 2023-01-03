import React from "react";

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, TOS } = props.values;

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newVal = type === "checkbox" ? checked : value
        change(name, newVal);

    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                <h1>My Form!</h1>
                <p>{errors.username}</p>
                <p>{errors.password}</p>
                <p>{errors.email}</p>
                <p>{errors.TOS}</p>
                
                <label>Name:
                    <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    />
                </label>

                <label>Email:
                    <input 
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    />
                </label>

                <label>Password:
                    <input 
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    />
                </label>

                <label>Terms of Service:
                    <input 
                    type="checkbox"
                    name="TOS"
                    value={TOS}
                    onChange={onChange}
                    />
                </label>
                <input type="submit" value="Create a Friend!" />
            </div>
        </form>

    )
}

export default Form;
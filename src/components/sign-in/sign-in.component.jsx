import React from 'react'

import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle,auth } from '../../firebase/firebase.utils'
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        const {email,password} = this.state;
        try{            
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' });
        }catch(e){
            console.log(e)
        }

        
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email" value={this.state.email}
                        required
                        type="email"
                        label="Email"
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="password"
                        value={this.state.password}
                        required
                        type="password"
                        label="Password"
                    />
                    <div className="button-section">
                        <CustomButton  type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleSignIn  style={{flex:2}} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>

                </form>
            </div>)
    }
}

export default SignIn;
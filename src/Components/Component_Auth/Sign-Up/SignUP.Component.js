import React from "react";
import "./SignUp.Style.scss";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { auth , createUserProfileDocument } from "../../../Firebase/Firebase.Utils";


class SignUP extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  handelSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if(password !== confirmPassword){
        alert("ما تركز شويه ياعم");
        return;
    }

    try{
        const { user } = await auth.createUserWithEmailAndPassword(email,password );

        console.log("name",displayName)
        console.log("userAuth",user)

        await createUserProfileDocument(user ,{displayName}  )


        this.setState({
            email: "",
            password: "",
        })

    }catch(error){
        console.error(error)
    }

  }

  handelChange = e => {
    const {name , value} = e.target;

    this.setState({
        [name] : value
    })
    // console.log(name , value)
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not hane an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handelSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handelChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handelChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handelChange}
            label="Password"
            required
          />

          <FormInput
            type="Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handelChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit" >SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUP;

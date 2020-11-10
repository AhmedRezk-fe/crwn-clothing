import React from "react";
import "./SignIn.style.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  // HandelSubmit
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };


  // handelChange
  handelChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={this.handelSubmit}>
          {/* input email  */}
          <FormInput
            onChange={this.handelChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />

          {/* input password */}
          <FormInput
            onChange={this.handelChange}
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            required
          />

          {/* input submit */}
          <CustomButton type="submit">Submit Form</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;

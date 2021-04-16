import React from 'react';

export class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
     this.props.nextStep();
  }

  render () {
    const { values, handleChange } = this.props;
    return (
      <div className="content-wrapper">
        <h1>Enter user details</h1>

        <form>
          <label>Enter your first name</label>
          <input
          type="text"
          onChange={handleChange("firstName")} defaultValue={values.firstName} />

          <label>Enter your last name</label>
          <input
          type="text"
          onChange={handleChange("lastName")} defaultValue={values.lastName} />

          <label>Enter your email</label>
          <input
          type="email"
          onChange={handleChange("email")} defaultValue={values.email} />
        </form>
        
        <div className="button-wrapper">
          <button onClick={this.continue} style={{marginLeft: "auto"}}>Continue</button><br/>
        </div>
      </div>

    );
  }
}

export default FormUserDetails;

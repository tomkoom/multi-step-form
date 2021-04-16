import React from 'react';

export class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    // Process form
     this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
     this.props.prevStep();
  };

  render () {
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
    return (
      <div className="content-wrapper">

      <h1 style={{textAlign: "center"}}>Confirm user data</h1>

      <ul>
        <li><p>First name</p> {firstName}</li><br/>
        <li><p>Last name</p> {lastName}</li><br/>
        <li><p>Email</p> {email}</li><br/>
        <li><p>Occupation</p> {occupation}</li><br/>
        <li><p>City</p> {city}</li><br/>
        <li><p>Bio</p> {bio}</li><br/>
      </ul>

      <div className="button-wrapper">
        <button className="back" onClick={this.back}>Back</button>
        <button onClick={this.continue}>Continue</button>
      </div>
      </div>
    );
  }
}


export default Confirm;

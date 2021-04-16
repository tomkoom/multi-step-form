import React from 'react';

export class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
     this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
     this.props.prevStep();
  };

  render () {
    const { values, handleChange } = this.props;
    return (
      <div className="content-wrapper">
        <h1>Enter personal details</h1>

        <form>
          <label>Enter your occupation</label>
          <input
          type="text"
          onChange={handleChange("occupation")} defaultValue={values.occupation} />

          <label>Enter your city</label>
          <input
          type="text"
          onChange={handleChange("city")} defaultValue={values.city} />

          <label>Enter your bio</label>
          <input
          type="text"
          onChange={handleChange("bio")} defaultValue={values.bio} />
        </form>

        <div className="button-wrapper">
          <button className="back" onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default FormPersonalDetails;

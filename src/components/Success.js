import React from 'react';

export class Success extends React.Component {
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
    return (
      <div className="content-wrapper">
        <div className="success">
          <h1>Success!</h1>
          <div className="succcess-msg">
            <p>Thank you for your submission</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;

import React, { Component } from 'react';
import "../Styles/RegFormStyle.css"


class RegForm extends Component {



  render() {
    return(
        <div className="mb-3" style={{marginTop:this.props.Margin}}>
            <label for="exampleInputEmail1" className="form-label">
              {this.props.Label}
            </label>
            <input
              type="email"
              required="true"
              pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder={this.props.placeHolder}
              style={{width:this.props.Width}}
              
            />
          </div>

    );
}
}

export default RegForm;
import React, { Component } from 'react';

class Ingredient extends Component {
  render() {
    return (
      <div className="col-md-3">
        <span className="fa-stack fa-4x">
          <input type="checkbox" className="menuRadio" value="veg" name="ing" id={this.props.id} />
            <em></em>
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-pageline fa-stack-1x fa-inverse"></i>
        </span>
        <br />
        <label htmlFor={this.props.id}>
          <h4 className="my-3">{this.props.title}</h4>
          <p className="text-muted">{this.props.sub}</p>
        </label>
      </div>
    )
  }
}

export default Ingredient;
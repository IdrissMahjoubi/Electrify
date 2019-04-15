import React, { Component } from "react";
import { Link } from "react-router-dom";

class Trade extends Component {

  componentWillMount() {
    console.log("single " + this.props.trans.from);
  }
  render() {
    const { trans } = this.props;
    return (
      <tr>
      <td className="align-middle">
        <Link to={`/users/${trans.from}`}>
          {trans.from.substr(0, 30) + "..."}
        </Link>
      </td>
      <td className="align-middle">
        <Link to={`/users/${trans.to}`}>{trans.to.substr(0, 30) + "..."}</Link>
      </td>
      <td className="align-middle">{trans.quantity}</td>
      <td className="align-middle">{trans.unitPrice}</td>
      <td className="align-middle">{trans.date}</td>
    </tr>
    );
  }
}


export default Trade;

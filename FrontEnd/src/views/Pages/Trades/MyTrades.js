import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";

import Trade from "../../components/Trade";
import { connect } from "react-redux";

class MyTrades extends Component {

  componentWillMount() {
    console.log(this.props.myTransactions); 
  }


  render() {
    const { myTransactions } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="cui-cart" /> All transactions made on the blockchain
              </CardHeader>
              <CardBody>
                <Table hover striped responsive>
                  <thead>
                    {myTransactions.length > 0 ? (
                      <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Energy (kwh)</th>
                        <th>Price (Ether)</th>
                        <th>Purshase date</th>
                      </tr>
                    ) : (
                      <tr>
                        <th>Loading Transactions</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                   {myTransactions.map((trans, index) => (
                      <Trade key={index} trans={trans} />
                  ))}
                  </tbody>
                </Table>
                <nav>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myTransactions: state.trans.myTransactions,
});

export default connect(
  mapStateToProps,
)(MyTrades);
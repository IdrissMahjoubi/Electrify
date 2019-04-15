import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button
} from "reactstrap";

import Trade from "../../components/Trade";
import { connect } from "react-redux";

class Trades extends Component {

  
  componentWillMount() {
    console.log(this.props.transactions);
 }
  toMyTransactions = () => {
    this.props.history.push("/trades/my-trades");
  }
  render() {
    const { transactions } = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="cui-cart" /> All transactions made on the blockchain
                <Button
                  onClick={this.toMyTransactions}
                  className="float-right ml-2 mr-2"
                  color="info"
                  outline
                >
                  <i className="fa fa-plus" />
                  &nbsp;My Transactions
                </Button>
              </CardHeader>
              <CardBody>
                <Table hover striped responsive>
                  <thead>
                    {transactions.length > 0 ? (
                      <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Energy (kwh)</th>
                        <th>Price (Ether)</th>
                        <th>Purshase date</th>
                      </tr>
                    ) : (
                      <tr>
                        <th>There are no transactions yet.</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                   {transactions.map((trans, index) => (
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
  transactions: state.trans.transactions,
});

export default connect(
  mapStateToProps,
)(Trades);
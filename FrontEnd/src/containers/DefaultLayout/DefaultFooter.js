import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {


  // async componentDidMount() {
  //   try {
  //     const { web3 } = await getContract();
  //     const [account] = await web3.eth.getAccounts();
  //     this.setState({ account });
  //   } catch (error) {
  //     this.setState({ errorMsg: "Something went wrong !" });
  //   }
  // }
  render() {
    // eslint-disable-next-line
    const { account } = this.props;

    return (
      <React.Fragment>
        {account ? (
          <span>
            <strong>Your wallet address : </strong> {account}
          </span>
        ) : (
          <span>
            <strong  color="danger">
              {"You're not connected to your wallet !"}
            </strong>
          </span>
        )}

        <span className="ml-auto">
          Powered by <a href="electrify.com">Hexagone</a>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;

import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";

import {
  AppAsideToggler,
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";

import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";
// import beep from "../../assets/beep.mp3";

import "toasted-notes/src/styles.css";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundFile: "../../assets/beep.mp3",
      badgeVisible: true
    };
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/login");
  };

  // async getNbrMyTransaction(contract, user) {
  //   const totalTrans = await contract.methods.transCount().call();

  //   let transactions = 0;

  //   for (let i = 0; i < totalTrans; i++) {
  //     const tr = await contract.methods.transactions(i).call();

  //     const trans = {
  //       from: tr[0],
  //       to: tr[1]
  //     };
  //     if (trans.from === user.walletAddress) transactions++;
  //   }
  //   return transactions;
  // }

  // async componentDidMount() {
  //   let user = this.props.user;
  //   const { contract } = await getContract();

  //   if (user) {
  //     const { id, avatar, email, walletAddress } = user;
  //     const nbrPayments = await this.getNbrMyTransaction(contract, user);
  //     this.setState({ id, avatar, email, walletAddress, nbrPayments });
  //   }

  //   contract.events
  //     .message()
  //     .on("data", async event => {
  //       let time = new Date(event.returnValues[4] * 1000).toLocaleString();
  //       // time = time.format
  //       const trans = {
  //         from: event.returnValues[0],
  //         to: event.returnValues[1],
  //         unitPrice: event.returnValues[1],
  //         quantity: event.returnValues[3],
  //         time
  //       };

  //       if (trans.to === this.state.walletAddress) {
  //         // get notifications
  //         new Audio(beep).play();

  //         const notifs = this.state.notif;
  //         notifs.unshift(trans);
  //         notifs.slice(-4); // get only last 4 notifs

  //         //get nbr payements
  //         const nbrPayments = await this.getNbrMyTransaction(contract, user);

  //         this.setState({
  //           notif: notifs,
  //           badgeVisible: true,
  //           badgeCount: this.state.badgeCount + 1,
  //           nbrPayments
  //         });

  //         console.log("trnsaction confrimed !");
  //       }
  //     })
  //     .on("error", console.error);
  // }



  // componentWillReceiveProps(nextProps) {
  //     this.notify(nextProps.transactions);
  // }

  handleClickBell = () => {
    this.setState({badgeVisible: false});
  };
  handleProfil = () => {
    // eslint-disable-next-line no-restricted-globals
    //location.href = `/users/${this.state.walletAddress}`;
  };

  render() {
    const {user} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{src: logo, width: 89, height: 25, alt: "CoreUI Logo"}}
          minimized={{src: sygnet, width: 30, height: 30, alt: "CoreUI Logo"}}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/trades" className="nav-link">
              Trades
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/offers" className="nav-link">
              Offers
            </Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/settings" className="nav-link">
              Settings
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={user.avatar} className="img-avatar" alt={user.email} />
            </DropdownToggle>
            <DropdownMenu right style={{right: "auto"}}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account Settings</strong>
              </DropdownItem>
              <DropdownItem onClick={this.handleProfil}>
                <i className="fa fa-user" /> Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem>
              <DropdownItem onClick={this.onLogoutClick}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

const mapStateToProps = state => ({
  user: state.auth.user,
  transactions: state.trans.transactions
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(DefaultHeader);

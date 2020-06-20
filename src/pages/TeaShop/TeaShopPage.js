import React, { Component } from "react";
import "./TeaShopPage.scss";
import TeaShopList from "../../components/TeaShopList/TeaShopList";
import VideoLayer from "../../components/VideoLayer/VideoLayer";
import Footer from "../../components/Footer/Footer";
import NavMove from "../../components/NavMove/NavMove";
import TopGoButton from "../../components/TopGoButton/TopGoButton";

class TeaShopPage extends Component {
  constructor() {
    super();
    this.state = {
      navMoving: false,
    };
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div className="TeaShopPage">
        <NavMove />
        <div
          className={
            this.state.navMoving
              ? "contents contentsOn"
              : "contents contentsOff"
          }
        >
          <VideoLayer />
          <TeaShopList history={this.props.history} />
          <Footer />
        </div>
        <TopGoButton />
      </div>
    );
  }
}

export default TeaShopPage;

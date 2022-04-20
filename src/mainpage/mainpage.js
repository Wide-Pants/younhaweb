import React, { Component } from "react";
import "./mainpage.css";

class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <div className="logo">YounHa Introduce</div>
        <nav>
          <ul className="Menu">
            <li id="About">
              About YounHa
              <ul>
                <li>20</li>
                <li>20</li>
              </ul>
            </li>
            <li id="Album">
              Album
              <ul>
                <li>20</li>
                <li>20</li>
              </ul>
            </li>
            <li id="Photo">
              Photo
              <ul>
                <li>20</li>
                <li>20</li>
              </ul>
            </li>
            <li id="Holics">
              Holics.
              <ul>
                <li>20</li>
                <li>20</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainPage;

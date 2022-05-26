import React from "react";
import axios from "axios";
import "./Avatars.css";
import AvatarCards from "./AvatarsCards";
import InputFilter from "./InputFilter";

class Avatars extends React.Component {
  state = { avatars: [], filtered: [] };

  getRandomAvatars = () => {
    this.setState({ avatars: [], filtered: [] });
    let random = (Math.random() * 30 + 20) | 0;
    this.getAvatars(random);
  };

  getAvatars = async (random) => {
    const avatars = await axios.get(
      `https://randomuser.me/api/?results=${random}`
    );
    console.log(avatars);
    this.getAvatarObjs(avatars.data.results);
  };

  getAvatarObjs = (objs) => {
    const cardArrOfObjs = objs.map((objData) => {
      return {
        firstName: objData.name.first,
        lastName: objData.name.last,
        picture: objData.picture.large,
        city: objData.location.city,
        country: objData.location.country,
        age: objData.dob.age + "",
      };
    });
    this.setState({ avatars: cardArrOfObjs, filtered: cardArrOfObjs });
  };

  getInputValue = (value) => {
    const newFiltered = this.state.avatars.filter((avatar) => {
      if (
        avatar.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.lastName.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.city.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        avatar.age.toLowerCase().indexOf(value.toLowerCase()) !== -1
      ) {
        return true;
      }
      return false;
    });
    this.setState({ filtered: newFiltered });
  };

  componentDidMount = () => {
    this.getRandomAvatars();
  };

  render() {
    return (
      <div className="mainContainer">
        <h1>
          Click get avatar to fetch randomly 20-50 avatars, use input to filter
          info
        </h1>
        <div className="inputDiv">
          <InputFilter getValue={this.getInputValue} />
          <button onClick={this.getRandomAvatars}>get avatar</button>
        </div>
        {this.state.avatars.length === 0 && (
          <div className="lds-dual-ring"></div>
        )}
        {this.state.avatars.length > 0 && (
          <AvatarCards avatars={this.state.filtered} />
        )}
      </div>
    );
  }
}

export default Avatars;
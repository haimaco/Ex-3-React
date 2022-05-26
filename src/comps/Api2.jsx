import React from "react";
import data from "./data";

export default class DataMassging extends React.Component {
  state = { names: [], before90: [] };
  getAllNames() {
    // return data.map((people, i) => <div key={people.name + people.birthday + i}>{people.name}</div>);
    const namesArr = data.map((people, i) => <div key={people.name + people.birthday + i}>{people.name}</div>);
    this.setState({ names: [...namesArr] });
  }

  getAllOlders() {
    const olders = data.filter((people) => {
      return parseInt(people.birthday.split("-")[2]) < 1990;
    });
    // return olders;
    this.setState({ before90: olders });
  }

  componentDidMount() {
    this.getAllNames();
    this.getAllOlders();
    // console.log(this.getAllOlders());
  }

  render() {
    return (
      <div>
        <Names name={this.state.names} />
        <Card before90={this.state.before90} />
      </div>
    );
  }
}

function Names(props) {
  return <div>{props.name}</div>;
}

function Card(props) {
  const before90 = props.before90;
  const data = before90.map((p, i) => {
    return (
      <div key={i}>
        <h3>{p.name}</h3>
        <div>{p.birthday}</div>
        <div>
          <b>Favorite meat:</b>
          {p.favoriteFoods.meats.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
          <b>Favorite fish:</b>
          {p.favoriteFoods.fish.map((f, i) => (
            <div key={i}>{f}</div>
          ))}
        </div>
      </div>
    );
  });
  return (
    <>
      <div>{data}</div>
    </>
  );
}
import React from "react";
import axios from "axios";

export default class ChuckNorisJokes extends React.Component {
  state = { joke: undefined, categorisArr: [], category: undefined };
  onJokeClick = async () => {
    // const randomJoke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`);
    const randomJoke = await axios.get("https://api.chucknorris.io/jokes/random", {
      params: { category: this.state.category },
    });
    // console.log(randomJoke.data);
    this.setState({ joke: randomJoke.data.value });
    // this.getCategoris();
  };

  componentDidMount = async () => {
    // await this.getCategoris();
    const categories = await axios.get("https://api.chucknorris.io/jokes/categories");
    this.setState({ categorisArr: [...categories.data] });
  };

  getCat = async (cat) => {
    await this.setState({ category: cat });
    // console.log(this.state.category);
  };
  //   componentDidUpdate() {
  //     console.log(this.state.categorisArr);
  //   }
  render() {
    return (
      <div>
        <Categories catValue={this.getCat} categoryOptions={this.state.categorisArr} />
        <JokeBtn seeJoke={this.onJokeClick} />
        <h4>{"joke" ? this.state.joke !== undefined : ""}</h4>
        {this.state.joke}
      </div>
    );
  }
}

function JokeBtn(props) {
  return <button onClick={props.seeJoke}>click for joke</button>;
}

function Categories(props) {
  //   console.log(props.categoryOptions);
  return (
    <select
      onChange={(e) => {
        props.catValue(e.target.value);
        // console.log(e.target.value);
      }}
    >
      {props.categoryOptions.map((el) => {
        return (
          <option key={el} value={el}>
            {el}
          </option>
        );
      })}
      {/* <option value={2}>two</option>
      <option value={3}>three</option> */}
    </select>
  );
}
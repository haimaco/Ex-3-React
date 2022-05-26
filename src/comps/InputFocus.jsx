import React from "react";

class InputFocus extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  componentDidMount = () => {
    this.ref.current.focus();
  };

  render() {
    return (
      <div>
        <h1>Focus from start</h1>
        <input ref={this.ref} type="text" name="focus" id="focus" />
      </div>
    );
  }
}

export default InputFocus;
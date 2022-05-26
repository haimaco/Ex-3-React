import React from "react";

class TextCopy extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  copyText = () => {
    this.ref.current.select();
    navigator.clipboard.writeText(this.ref.current.value);

    //! this exec method is Deprecated, but it works, i used above navigator.clipboard for another option.
    // document.execCommand("copy");
  };

  render() {
    return (
      <div>
        <h1>Textarea text copy</h1>
        <textarea
          ref={this.ref}
          name="copy"
          id="copy"
          cols="30"
          rows="10"
        ></textarea>
        <div>
          <button onClick={this.copyText}>copy</button>
        </div>
      </div>
    );
  }
}

export default TextCopy;
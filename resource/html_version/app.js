"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  // We can change this function by using the react life cycle component
  // changeDisplayText() {
  //   const displayTextElement = document.querySelector("#display-text");
  //   displayTextElement.innerHTML = this.state.liked
  //     ? "You liked this."
  //     : "Would you give me a like?";
  // }

  // update lifecycle
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.liked !== this.state.liked) {
      const displayTextElement = document.querySelector("#display-text");
      displayTextElement.innerHTML = this.state.liked
        ? "You liked this."
        : "Would you give me a like?";
    }
  }

  // mount lifecycle
  componentDidMount() {
    const displayTextElement = document.querySelector("#display-text");
    displayTextElement.innerHTML = this.state.liked
      ? "You liked this."
      : "Would you give me a like?";
  }

  render() {
    // this.changeDisplayText();

    return e(
      "button",
      { onClick: () => this.setState({ liked: !this.state.liked }) },
      "Like"
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(e(LikeButton), domContainer);

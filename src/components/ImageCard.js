import React from 'react';

class ImageCard extends React.Component {
  state = { spans: 0 };
  imageRef = React.createRef();

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10) + 1;

    this.setState({ spans: spans });
  };

  render() {
    const { alt_description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={alt_description}
          className="image-list__img"
        />
      </div>
    );
  }
}

export default ImageCard;

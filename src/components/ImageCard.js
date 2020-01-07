import React from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }
  downloadHandler(event) {
    event.preventDefault();
    console.log(`${document.getElementById('my-node')}`);
    domtoimage.toBlob(document.getElementById('my-node')).then(function(blob) {
      saveAs(blob, 'myImage.png');
    });
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans + 10}` }}>
        <div id='my-node'>
          <img ref={this.imageRef} alt={description} src={urls.regular} />*
          <button
            onClick={this.downloadHandler.bind(this)}
            className='ui primary button'
          >
            {' '}
            Download
          </button>
        </div>
      </div>
    );
  }
}

export default ImageCard;

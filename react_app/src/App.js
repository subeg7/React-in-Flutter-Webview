import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const herokuCorsProtectionUrl = "https://cors-anywhere.herokuapp.com/";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasEventOccurred: false,
      fileLink: "",
      fileName: ""
    };
  }

  handleEvent = (name, link) => {
    console.log("inside setData method in javascript");
    this.setState({ hasEventOccurred: true, fileLink: link, fileName: name });
  }

  render() {
    return (
      this.state.hasEventOccurred ?
        <div>
          <h3>File Name : {this.state.fileName}</h3>
          <PDFViewer
            document={{
              url: this.state.fileLink
            }}
          />
        </div>

        : <div onClick={() => this.handleEvent("African PDF", herokuCorsProtectionUrl + 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf?hsLang=en')}>
          < h2> No event has occurred yet</h2 >
          < h3>click to see sample change</h3 >
        </div >
    )
  }
}

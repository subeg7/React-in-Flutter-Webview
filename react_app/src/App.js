import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const herokuCorsProtectionUrl = "https://cors-anywhere.herokuapp.com/";
const samplePdfDetails = {
  "fileName": "Flutter PDF article",
  "fileLink": "https://ijesc.org/upload/b3930ac14331fd1b425af8cd1c341d41.Cross%20Platform%20Development%20using%20Flutter%20(1).pdf",
}
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasEventOccurred: false,
      fileName: "",
      fileLink: "",
    };
  }

  handleEvent = (name, link) => {
    console.log("inside the handleEvent method");
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

        : <div onClick={() => this.handleEvent(samplePdfDetails.fileName, herokuCorsProtectionUrl + samplePdfDetails.fileLink)}>
          < h2> No event has occurred yet</h2 >
          < h3>click to see sample change</h3 >
        </div >
    )
  }
}

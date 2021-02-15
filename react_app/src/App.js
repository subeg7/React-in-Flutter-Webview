import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

const samplePdfDetails = {
  "fileName": "React.js PDF article",
  "fileLink": "https://websitesetup.org/wp-content/uploads/2020/09/Javascript-Cheat-Sheet.pdf",
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

  componentDidMount() {
    window.addEventListener("flutterInAppWebViewPlatformReady", (event) => {
      window.flutter_inappwebview.callHandler('fileDetailsHandler', "test")
        .then((fileDetailsJson) => {
          this.handleEvent(fileDetailsJson.name, fileDetailsJson.link);
        });
    });
  }

  handleEvent = (name, link) => {
    const herokuCorsProtectionUrl = "https://cors-anywhere.herokuapp.com/";
    console.log("Event has occurred, rendering pdf now");
    this.setState({ hasEventOccurred: true, fileLink: herokuCorsProtectionUrl + link, fileName: name });
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

        : <div onClick={() => this.handleEvent(samplePdfDetails.fileName, samplePdfDetails.fileLink)}>
          < h2> No event has occurred yet</h2 >
          < h3>click to see sample change</h3 >
        </div >
    )
  }
}

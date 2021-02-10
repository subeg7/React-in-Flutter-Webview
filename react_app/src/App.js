import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

// const ExamplePDFViewer = () => {
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isPdfUrlRecieved: false, fileLink: "", count: 0, fileName: "" };
  }


  componentDidMount() {
    console.log("component did mount");
    window.addEventListener("flutterInAppWebViewPlatformReady", (event) => {
      console.log("flutter is connected");
      window.flutter_inappwebview.callHandler('pdfUrlGetHandler', "test")
        .then((fileDetailsJson) => {
          console.log("setting url as " + fileDetailsJson.link);
          this.setData(fileDetailsJson.name, fileDetailsJson.link);
          console.log("set state has been performed");
        });
    });
  }

  setData = (name, link) => {
    console.log("inside setData method in javascript");
    this.setState({ isPdfUrlRecieved: true, fileLink: link, fileName: name });
  }

  render() {
    return (
      this.state.isPdfUrlRecieved ?
        <div>
          <h1>File Name : {this.state.fileName}</h1>
          <PDFViewer
            document={{
              // url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
              // url: 'http://www.africau.edu/images/default/sample.pdf'
              // url: 'https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf'
              // url: 'https://cors-anywhere.herokuapp.com/https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
              url: this.state.fileLink,
            }}
          />
        </div>

        : <div onClick={() => this.setData("African PDF", 'https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf')}>
          < h1 > Click here to see sample change </h1 >
        </div >
    )
  }
}

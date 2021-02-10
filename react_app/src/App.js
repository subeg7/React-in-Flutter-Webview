import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

// const ExamplePDFViewer = () => {
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isPdfUrlRecieved: false, pdfUrl: "", count: 0 };
  }



  setUrl = (result) => {
    console.log("inside setUrl method in javascript");
    this.setState({ isPdfUrlRecieved: true, pdfUrl: result });
  }

  render() {
    return (
      this.state.isPdfUrlRecieved ?
        <PDFViewer
          document={{
            // url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
            // url: 'http://www.africau.edu/images/default/sample.pdf'
            // url: 'https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf'
            // url: 'https://cors-anywhere.herokuapp.com/https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf',
            url: this.state.pdfUrl,
          }}
        />
        : <div onClick={() => this.setUrl('https://cors-anywhere.herokuapp.com/http://www.africau.edu/images/default/sample.pdf')}>
          <h1>Waiting for flutter to send pdf link [{this.state.count}]</h1>
        </div>
    )
  }
}

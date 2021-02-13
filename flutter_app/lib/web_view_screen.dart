import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

const samplePdfName = "First PDF from flutter";
const samplePdfLink = "http://www.pdf995.com/samples/pdf.pdf";

class WebViewScreen extends StatelessWidget {
  final String fileName;
  final String fileLink;

  const WebViewScreen(
      {Key key, this.fileName = samplePdfName, this.fileLink = samplePdfLink})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
      color: Colors.teal,
      child: SafeArea(
        child: InAppWebView(
          initialOptions: InAppWebViewGroupOptions(
            crossPlatform: InAppWebViewOptions(
              useOnDownloadStart: true,
              javaScriptCanOpenWindowsAutomatically: true,
              javaScriptEnabled: true,
              useShouldOverrideUrlLoading: true,
            ),
            ios: IOSInAppWebViewOptions(
              sharedCookiesEnabled: true,
            ),
          ),
          initialFile: "assets/react_pdf_app/index.html",
          onWebViewCreated: (InAppWebViewController controller) {
            controller.addJavaScriptHandler(
                handlerName: 'fileDetailsHandler',
                callback: (args) {
                  return {
                    "name": fileName,
                    "link": fileLink,
                  };
                });
          },
          onConsoleMessage: (controller, message) {},
          onDownloadStart: (controller, string) {},
        ),
      ),
    );
  }
}

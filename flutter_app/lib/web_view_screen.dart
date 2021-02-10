import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class WebViewScreen extends StatelessWidget {
  final String fileName;
  final String fileLink;

  const WebViewScreen({Key key, this.fileName, this.fileLink})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 400,
      color: Colors.blue,
      child: SafeArea(
        child: InAppWebView(
          initialOptions: InAppWebViewGroupOptions(
            crossPlatform: InAppWebViewOptions(
              debuggingEnabled: true,
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
          onConsoleMessage: (controller, message) {
            print(message);
          },
          onWebViewCreated: (InAppWebViewController controller) {
            print("web view is created");
            controller.addJavaScriptHandler(
                handlerName: 'pdfUrlGetHandler',
                callback: (args) {
                  return {
                    "name": fileName,
                    "link": fileLink,
                  };
                });
          },
          onDownloadStart: (controller, string) {
            print("file is getting downloaded");
          },
        ),
      ),
    );
  }
}

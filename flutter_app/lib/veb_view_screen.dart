import 'package:flutter/material.dart';
import 'package:flutter_inappwebview/flutter_inappwebview.dart';

class WebViewScreen extends StatelessWidget {
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
                  return 'https://cors-anywhere.herokuapp.com/https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf';
                  // return "test";
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

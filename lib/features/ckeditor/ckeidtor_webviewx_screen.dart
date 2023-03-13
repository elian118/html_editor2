import 'package:flutter/material.dart';
import 'package:webviewx/webviewx.dart';

class CkeditorWebViewXScreen extends StatefulWidget {
  const CkeditorWebViewXScreen({Key? key}) : super(key: key);

  @override
  State<CkeditorWebViewXScreen> createState() => _CkeditorWebViewXScreenState();
}

class _CkeditorWebViewXScreenState extends State<CkeditorWebViewXScreen> {
  late WebViewXController webViewXController;

  @override
  void dispose() {
    webViewXController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        // appBar: AppBar(title: const Text('CK에디터 - 이지웹뷰')),
        body: SafeArea(
      child: SingleChildScrollView(
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          child: WebViewX(
            initialContent: 'http://localhost:5173',
            initialSourceType: SourceType.url,
            onWebViewCreated: (controller) => webViewXController = controller,
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height,
          ),
        ),
      ),
    ));
  }
}

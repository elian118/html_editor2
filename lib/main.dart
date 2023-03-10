import 'package:flutter/material.dart';
import 'package:html_editor2/features/ckeditor/ckeidtor_webviewx_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'HTML 에디터 - 웹뷰X',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const CkeditorWebViewXScreen(),
    );
  }
}

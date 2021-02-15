import 'package:flutter/material.dart';
import 'package:flutter_app/web_view_screen.dart';

import 'common/file_data_list.dart';

class FileListViewScreen extends StatefulWidget {
  @override
  _FileListViewScreenState createState() => _FileListViewScreenState();
}

class _FileListViewScreenState extends State<FileListViewScreen> {
  @override
  Widget build(BuildContext context) {
    List files = fileListMap;
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.teal,
          title: Text("PDF Lists"),
        ),
        body: Container(
          padding: EdgeInsets.all(10),
          child: SingleChildScrollView(
            child: Column(
              children: [
                Text("Click on one of the file below"),
                SizedBox(height: 10),
                _buildFileColumn(files),
              ],
            ),
          ),
        ),
      ),
    );
  }

  _buildFileColumn(List files) {
    int index = 0;
    return Column(
        children: files
            .map<Widget>((fileMap) => _buildFileTile(++index, fileMap))
            .toList());
  }

  _buildFileTile(int index, fileMap) {
    return Column(
      children: [
        InkWell(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => WebViewScreen(
                  fileLink: fileMap["link"],
                  fileName: fileMap["name"],
                ),
              ),
            );
          },
          child: Container(
            padding: EdgeInsets.all(10),
            child: Row(
              children: [
                Text("$index"),
                SizedBox(width: 20),
                Text(
                  "${fileMap["name"]}",
                  style: TextStyle(
                    color: Colors.teal,
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),
                Spacer(),
                Icon(
                  Icons.arrow_forward_ios_rounded,
                  size: 15,
                )
              ],
            ),
          ),
        ),
        Divider(thickness: 1),
      ],
    );
  }
}

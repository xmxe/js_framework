




// --------------- request -----------------------------------

// var http = require('http');

// http.createServer(function (req, res) {
//   // + `request.headers`
//   // + `request.rawHeaders`
//   // + `request.httpVersion`
//   // + `request.method`
//   // + `request.url`


//   // 1. 获取所有请求报文头
//   // req.headers 返回的是一个对象，这个对象中包含了所有的请求报文头
//   // console.log(req.headers);

//   // req.rawHeaders 返回的是一个数组，数组中保存的都是请求报文头的字符串
//   // console.log(req.rawHeaders);



//   // 2. httpVersion
//   // 获取请求客户端所使用的http版本
//   // console.log(req.httpVersion);


//   // 3. method
//   // 获取客户端请求使用的方法(POST、GET、....)
//   // console.log(req.method);


//   // 4. url
//   // 获取这次请求的路径（获取请求报文中的请求路径，不包含主机名称、端口号、协议）
//   console.log(req.url);

//   res.end('over');

// }).listen(9091, function () {
//   console.log('http://localhost:9091');
// });




// ------------------------ response --------------------------------


var http = require('http');

http.createServer(function (req, res) {

  // res.statusCode = 404;
  // res.statusMessage = 'Not Found';
  // // 这句代码要放到前面
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8');


  // 通过 res.writeHead() 来实现
  // res.writeHead(404, 'Not Found', {
  //   'Content-Type': 'text/plain; charset=utf-8'
  // });


  // res.writeHead(200, 'OK', {
  //   'Content-Type': 'text/plain; charset=utf-8'
  // });

  // // 1. res.write() 
  // res.write('hello world！ 你好世界！！！');
  // res.write('hello world！ 你好世界！！！');
  // res.write('hello world！ 你好世界！！！');

  // // 2. 每个请求都必须要调用的一个方法 res.end();
  // // 结束响应（请求）
  // // 告诉服务器该响应的报文头、报文体等等全部已经响应完毕了，可以考虑本次响应结束。
  // // res.end() 要响应数据的话，数据必须是 String 类型或者是 Buffer 类型
  // res.end();



  // 4. 通过 res.setHeader() 来设置响应报文头
  // res.setHeader() 要放在 res.write() 和 res.end() 之前设置
  // 因为即便我们不设置响应报文头，系统也会默认有响应报文头，并且默认发送给浏览器，当已经发送过响应报文头后，就不能再通过 res.setHeader() 来再次设置响应报文头了
  // 否则就会报错
  // res.setHeader('Content-Type', 'text/plain; charset=utf-8');



  // 5. 设置 http 响应状态码
  // res.statusCode 设置 http 响应状态码
  // res.statusMessage 设置 http 响应状态码对应的消息
  // res.statusCode = 404;
  // res.statusMessage = 'Not Found';


  // 6. res.writeHead() 
  // 直接向客户端响应（写入） http 响应报文头
  // 建议在 res.write() 和 res.end() 之前调用

  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'text/plain; chartset=utf8');

  // res.writeHead(res.statusCode, res.statusMessage, {})

  // res.writeHead(404, 'Not Found', {
  //   'Content-Type': 'text/html; chartset=utf8'
  // });
  res.end('over!');



}).listen(9091, function () {
  console.log('http://localhost:9091');
});

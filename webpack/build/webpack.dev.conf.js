const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const HtmlWebpackPluginConfig={
    title: 'hello,零和壹在线课堂', // html5文件中<title>部分
    filename: 'index.html', // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样
    // 也是 context+template是最后模板的完整路径，./不能少
    template: './template/daqi.html', // 如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
    inject:'body', // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
}


module.exports = {
    // 上下文是查找入口文件的基本目录，是一个绝对值，所以要用到path.resolve
    // 如果不设，默认为当前目录
    // 与命令行中的 webpack --context是一样的
    // 最后入口文件是 context+entry,
    // context 除了这里的入口文件用到，象很多loader,plugin都会要用到这个值
    context: path.resolve(__dirname,'../src'), //D:\03www2018\study\webpack2017\build\src
    
    // entry可以为字符串|对象|数组三种形式,实际中取一种就行
    // 数组
    // entry: ["./home.js","./about.js","./contact.js"],

    // 对象，适合于多入口网站，也就是mpa，对象格式的每个键，如home,about,contact是每个入口文件chunk的名字，字符串和数组没有键，它也有一个chunk，名字默认为main    
    // entry: {
    //   home: "./home.js",
    //   about: "./about.js",
    //   contact: "./contact.js"
    // }, 
    entry: './main', //main.js中的js可以省略，前面的./不能省


    // 最后生成的打包文件所在的目录，是一个绝对值，如果不指定，表示当前目录。如果文件夹不存在，会自动创建
    // 这个路径除了这里会用到之外，象html插件,file-loader加载器也会用到
    // 最后生成的打包文件是 path+ filename
    output:{
        path:path.resolve(__dirname,'../dist'),
        // filename中可以使用[name],[id],[hash],[chunkhash][query]五种变量
        // filename中可以含子文件夹，如如filename: "a/b/c/[id]app.js"
        filename: './[hash]app.js',
        
        //指定最后chunkhash和hash变量生成字符串的长度，默认是20个字符
        hashDigestLength: 8
    },
    mode: 'development',
    module: {        
        rules: [
            // {
            //   test: /\.html$/, 
            //   use: {
            //       loader: 'html-loader',
            //       options: {
            //       //  attrs: [':data-src']
            //           sources: {
            //               list: [
            //               // All default supported tags and attributes
            //               "...",
            //               {
            //                   tag: "img",
            //                   attribute: "data-src",
            //                   type: "src",
            //               },
            //               ]
            //           },
            //       }
            //   }
            // },
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                      //name: '[path][name].[ext]',
                      name: '[name]2.[ext]', //最后生成的文件名是 output.path+ outputPaht+ name，[name],[ext],[path]表示原来的文件名字，扩展名，路径
                      //useRelativePath:true,
                      outputPath: 'img/' // 后面的/不能少
                  }  
                }
            ]
          },
        ]
      },
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig), // 生成首页html5文件，外部插件需要安装
        new webpack.DefinePlugin({BJ: JSON.stringify('北京'),}) // 内置插件，无须安装，可以理解为它是webpack实例的一个方法，该插件相当于apache等web服务器上定义一个常量
    ], 
    devServer: {
      static:{
        directory :  path.resolve(__dirname, "../dist"), //网站的根目录为 根目录/dist，这个路径一般与output.path一致，因为html插件生成的html5页是放在output.path这个目录下
      },
      port: 9000, //端口改为9000
      open:true, // 自动打开浏览器，每次启动服务器会自动打开默认的浏览器
      hot:'only',
      // devMiddleware: {
      //   index: true,
      //   mimeTypes: { phtml: 'text/html' },
      //   publicPath: '/publicPathForDevServe',
      //   serverSideRender: true,
      //   writeToDisk: true,
      // },
    }
}
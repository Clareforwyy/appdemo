'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	//入口
	entry:{
		main:'./main.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'build.js'
	},
	module:{
		rules:[
			{
		        test: /\.(css|less)$/,
		        use: [
		           { loader: "style-loader" },
		           { loader: "css-loader" },
		           { loader: "less-loader" },
		        ]
		    },
		    {
		        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|svg)$/,
		        use: [
		            {
		            	loader: 'url-loader',
		            	options: {
		              		limit: 8192
		            	}
		          	}
		        ]
		    },
		    {
		      	test: /\.js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	use: {
		        	loader: 'babel-loader',
		        	options: {
		          		presets: ['env']
		        	}
		      	}
		    },
		    {
		    	test:/\.vue$/,
		    	use:{
		    		loader:'vue-loader'
		    	}
		    }
		    
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'./index.html'
		})
	],
	devServer:{//配置express服务器的选项
		host:'127.0.0.1',
		port:'8888',
		//代理
		proxy:{ //this.$ajax.get('/v2/xxx')就是跨域请求，指向target
			'/v2/*':{
				changeOrigin:true,
				target:'https://api.douban.com/',
			}
		}
	}
}

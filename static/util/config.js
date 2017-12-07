
//let http = ('https:' == document.location.protocol ? 'https://' : 'http://');
let remoteHost =  'http://127.0.0.1:8888';

const config = {
	LUNBOURL :  "./static/api/tu.json",
	NEWSLIST :  "./static/api/newslist.json",
	NEWDETAIL : remoteHost+  "/static/api/newdetail.json",
	BOOKLIST : ""
}

export default config;

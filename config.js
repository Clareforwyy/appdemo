
let http = ('https:' == document.location.protocol ? 'https://' : 'http://');
let remoteUrl = http + '';

const config = {
	LUNBOURL : "./static/api/tu.json",
	NEWSLIST : "./static/api/newslist.json"
}

export default config;

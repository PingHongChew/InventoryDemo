(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[41],{623:function(e,a){!function(e,a){for(var t in a)e[t]=a[t]}(a,function(e){var a={};function t(r){if(a[r])return a[r].exports;var l=a[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)t.d(r,l,function(a){return e[a]}.bind(null,l));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";t.r(a),t.d(a,"deepObjectsMerge",(function(){return r})),t.d(a,"getColor",(function(){return m})),t.d(a,"getStyle",(function(){return c})),t.d(a,"hexToRgb",(function(){return o})),t.d(a,"hexToRgba",(function(){return i})),t.d(a,"makeUid",(function(){return u})),t.d(a,"omitByKeys",(function(){return d})),t.d(a,"pickByKeys",(function(){return E})),t.d(a,"rgbToHex",(function(){return g}));var r=function e(a,t){for(var r=0,l=Object.keys(t);r<l.length;r++){var s=l[r];t[s]instanceof Object&&Object.assign(t[s],e(a[s],t[s]))}return Object.assign(a||{},t),a},l=function(){for(var e={},a=document.styleSheets,t="",r=a.length-1;r>-1;r--){for(var l=a[r].cssRules,s=l.length-1;s>-1;s--)if(".ie-custom-properties"===l[s].selectorText){t=l[s].cssText;break}if(t)break}return(t=t.substring(t.lastIndexOf("{")+1,t.lastIndexOf("}"))).split(";").forEach((function(a){if(a){var t=a.split(": ")[0],r=a.split(": ")[1];t&&r&&(e["--".concat(t.trim())]=r.trim())}})),e},s=function(){return Boolean(document.documentMode)&&document.documentMode>=10},n=function(e){return e.match(/^--.*/i)},c=function(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(n(e)&&s()){var r=l();a=r[e]}else a=window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"");return a},m=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,t="--".concat(e),r=c(t,a);return r||e},o=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var a,t,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(a=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(a=parseInt(e.slice(1,2),16),t=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(a,", ").concat(t,", ").concat(r,")")},i=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,l,s=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!s)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),l=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),l=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(l,", ").concat(a/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,a){for(var t={},r=Object.keys(e),l=0;l<r.length;l++)!a.includes(r[l])&&(t[r[l]]=e[r[l]]);return t},E=function(e,a){for(var t={},r=0;r<a.length;r++)t[a[r]]=e[a[r]];return t},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var a=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!a)throw new Error("".concat(e," is not a valid rgb color"));var t="0".concat(parseInt(a[1],10).toString(16)),r="0".concat(parseInt(a[2],10).toString(16)),l="0".concat(parseInt(a[3],10).toString(16));return"#".concat(t.slice(-2)).concat(r.slice(-2)).concat(l.slice(-2))},p={deepObjectsMerge:r,getColor:m,getStyle:c,hexToRgb:o,hexToRgba:i,makeUid:u,omitByKeys:d,pickByKeys:E,rgbToHex:g};a.default=p}]))},680:function(e,a,t){"use strict";t.r(a);var r=t(1),l=t.n(r),s=t(617),n=t(620),c=t(625),m=t(623),o=Object(m.getStyle)("success")||"#4dbd74",i=Object(m.getStyle)("info")||"#20a8d8",u=Object(m.getStyle)("danger")||"#f86c6b",d=function(e){var a=function(e,a){return Math.floor(Math.random()*(a-e+1)+e)},t=function(){for(var e=[],t=[],r=[],l=0;l<=27;l++)e.push(a(50,200)),t.push(a(80,100)),r.push(65);return[{label:"My First dataset",backgroundColor:Object(m.hexToRgba)(i,10),borderColor:i,pointHoverBackgroundColor:i,borderWidth:2,data:e},{label:"My Second dataset",backgroundColor:"transparent",borderColor:o,pointHoverBackgroundColor:o,borderWidth:2,data:t},{label:"My Third dataset",backgroundColor:"transparent",borderColor:u,pointHoverBackgroundColor:u,borderWidth:1,borderDash:[8,5],data:r}]}(),r={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250},gridLines:{display:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};return l.a.createElement(c.c,Object.assign({},e,{datasets:t,options:r,labels:["Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su","Mo","Tu","We","Th","Fr","Sa","Su"]}))},E=Object(r.lazy)((function(){return t.e(24).then(t.bind(null,636))})),g=Object(r.lazy)((function(){return t.e(40).then(t.bind(null,635))}));a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(s.j,null,l.a.createElement(s.k,null,l.a.createElement(s.wb,null,l.a.createElement(s.u,{sm:"5"},l.a.createElement("h4",{id:"traffic",className:"card-title mb-0"},"Traffic"),l.a.createElement("div",{className:"small text-muted"},"November 2017")),l.a.createElement(s.u,{sm:"7",className:"d-none d-md-block"},l.a.createElement(s.f,{color:"primary",className:"float-right"},l.a.createElement(n.a,{name:"cil-cloud-download"})),l.a.createElement(s.g,{className:"float-right mr-3"},["Day","Month","Year"].map((function(e){return l.a.createElement(s.f,{color:"outline-secondary",key:e,className:"mx-0",active:"Month"===e},e)}))))),l.a.createElement(d,{style:{height:"300px",marginTop:"40px"}})),l.a.createElement(s.l,null,l.a.createElement(s.wb,{className:"text-center"},l.a.createElement(s.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},l.a.createElement("div",{className:"text-muted"},"Visits"),l.a.createElement("strong",null,"29.703 Users (40%)"),l.a.createElement(s.ub,{className:"progress-xs mt-2",precision:1,color:"success",value:40})),l.a.createElement(s.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none"},l.a.createElement("div",{className:"text-muted"},"Unique"),l.a.createElement("strong",null,"24.093 Users (20%)"),l.a.createElement(s.ub,{className:"progress-xs mt-2",precision:1,color:"info",value:40})),l.a.createElement(s.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},l.a.createElement("div",{className:"text-muted"},"Pageviews"),l.a.createElement("strong",null,"78.706 Views (60%)"),l.a.createElement(s.ub,{className:"progress-xs mt-2",precision:1,color:"warning",value:40})),l.a.createElement(s.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0"},l.a.createElement("div",{className:"text-muted"},"New Users"),l.a.createElement("strong",null,"22.123 Users (80%)"),l.a.createElement(s.ub,{className:"progress-xs mt-2",precision:1,color:"danger",value:40})),l.a.createElement(s.u,{md:!0,sm:"12",className:"mb-sm-2 mb-0 d-md-down-none"},l.a.createElement("div",{className:"text-muted"},"Bounce Rate"),l.a.createElement("strong",null,"Average Rate (40.15%)"),l.a.createElement(s.ub,{className:"progress-xs mt-2",precision:1,value:40}))))),l.a.createElement(g,{withCharts:!0}),l.a.createElement(s.wb,null,l.a.createElement(s.u,null,l.a.createElement(s.j,null,l.a.createElement(s.n,null,"Traffic "," & "," Sales"),l.a.createElement(s.k,null,l.a.createElement(s.wb,null,l.a.createElement(s.u,{xs:"12",md:"6",xl:"6"},l.a.createElement(s.wb,null,l.a.createElement(s.u,{sm:"6"},l.a.createElement(s.i,{color:"info"},l.a.createElement("small",{className:"text-muted"},"New Clients"),l.a.createElement("br",null),l.a.createElement("strong",{className:"h4"},"9,123"))),l.a.createElement(s.u,{sm:"6"},l.a.createElement(s.i,{color:"danger"},l.a.createElement("small",{className:"text-muted"},"Recurring Clients"),l.a.createElement("br",null),l.a.createElement("strong",{className:"h4"},"22,643")))),l.a.createElement("hr",{className:"mt-0"}),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Monday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"34"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"78"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Tuesday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"56"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"94"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Wednesday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"12"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"67"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Thursday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"43"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"91"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Friday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"22"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"73"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Saturday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"53"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"82"}))),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-prepend"},l.a.createElement("span",{className:"progress-group-text"},"Sunday")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"9"}),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"69"}))),l.a.createElement("div",{className:"legend text-center"},l.a.createElement("small",null,l.a.createElement("sup",{className:"px-1"},l.a.createElement(s.b,{shape:"pill",color:"info"},"\xa0")),"New clients \xa0",l.a.createElement("sup",{className:"px-1"},l.a.createElement(s.b,{shape:"pill",color:"danger"},"\xa0")),"Recurring clients"))),l.a.createElement(s.u,{xs:"12",md:"6",xl:"6"},l.a.createElement(s.wb,null,l.a.createElement(s.u,{sm:"6"},l.a.createElement(s.i,{color:"warning"},l.a.createElement("small",{className:"text-muted"},"Pageviews"),l.a.createElement("br",null),l.a.createElement("strong",{className:"h4"},"78,623"))),l.a.createElement(s.u,{sm:"6"},l.a.createElement(s.i,{color:"success"},l.a.createElement("small",{className:"text-muted"},"Organic"),l.a.createElement("br",null),l.a.createElement("strong",{className:"h4"},"49,123")))),l.a.createElement("hr",{className:"mt-0"}),l.a.createElement("div",{className:"progress-group mb-4"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{className:"progress-group-icon",name:"cil-user"}),l.a.createElement("span",{className:"title"},"Male"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"43%")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"warning",value:"43"}))),l.a.createElement("div",{className:"progress-group mb-5"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{className:"progress-group-icon",name:"cil-user-female"}),l.a.createElement("span",{className:"title"},"Female"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"37%")),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"warning",value:"37"}))),l.a.createElement("div",{className:"progress-group"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{className:"progress-group-icon",name:"cil-globe-alt"}),l.a.createElement("span",{className:"title"},"Organic Search"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"191,235 ",l.a.createElement("span",{className:"text-muted small"},"(56%)"))),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"56"}))),l.a.createElement("div",{className:"progress-group"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{name:"cib-facebook",className:"progress-group-icon"}),l.a.createElement("span",{className:"title"},"Facebook"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"51,223 ",l.a.createElement("span",{className:"text-muted small"},"(15%)"))),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"15"}))),l.a.createElement("div",{className:"progress-group"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{name:"cib-twitter",className:"progress-group-icon"}),l.a.createElement("span",{className:"title"},"Twitter"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"37,564 ",l.a.createElement("span",{className:"text-muted small"},"(11%)"))),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"11"}))),l.a.createElement("div",{className:"progress-group"},l.a.createElement("div",{className:"progress-group-header"},l.a.createElement(n.a,{name:"cib-linkedin",className:"progress-group-icon"}),l.a.createElement("span",{className:"title"},"LinkedIn"),l.a.createElement("span",{className:"ml-auto font-weight-bold"},"27,319 ",l.a.createElement("span",{className:"text-muted small"},"(8%)"))),l.a.createElement("div",{className:"progress-group-bars"},l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"8"}))),l.a.createElement("div",{className:"divider text-center"},l.a.createElement(s.f,{color:"link",size:"sm",className:"text-muted"},l.a.createElement(n.a,{name:"cil-options"}))))),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-hover table-outline mb-0 d-none d-sm-table"},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{className:"text-center"},l.a.createElement(n.a,{name:"cil-people"})),l.a.createElement("th",null,"User"),l.a.createElement("th",{className:"text-center"},"Country"),l.a.createElement("th",null,"Usage"),l.a.createElement("th",{className:"text-center"},"Payment Method"),l.a.createElement("th",null,"Activity"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/1.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-success"}))),l.a.createElement("td",null,l.a.createElement("div",null,"Yiorgos Avraamu"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-us",title:"us",id:"us"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"50%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"50"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-cc-mastercard"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"10 sec ago"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/2.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-danger"}))),l.a.createElement("td",null,l.a.createElement("div",null,"Avram Tarasios"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"Recurring")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-br",title:"br",id:"br"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"10%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"10"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-cc-visa"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"5 minutes ago"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/3.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-warning"}))),l.a.createElement("td",null,l.a.createElement("div",null,"Quintin Ed"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-in",title:"in",id:"in"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"74%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"warning",value:"74"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-stripe"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"1 hour ago"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/4.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-secondary"}))),l.a.createElement("td",null,l.a.createElement("div",null,"En\xe9as Kwadwo"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-fr",title:"fr",id:"fr"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"98%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"danger",value:"98"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-paypal"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"Last month"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/5.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-success"}))),l.a.createElement("td",null,l.a.createElement("div",null,"Agapetus Tade\xe1\u0161"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-es",title:"es",id:"es"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"22%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"info",value:"22"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-google-pay"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"Last week"))),l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center"},l.a.createElement("div",{className:"c-avatar"},l.a.createElement("img",{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}),l.a.createElement("span",{className:"c-avatar-status bg-danger"}))),l.a.createElement("td",null,l.a.createElement("div",null,"Friderik D\xe1vid"),l.a.createElement("div",{className:"small text-muted"},l.a.createElement("span",null,"New")," | Registered: Jan 1, 2015")),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cif-pl",title:"pl",id:"pl"})),l.a.createElement("td",null,l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"float-left"},l.a.createElement("strong",null,"43%")),l.a.createElement("div",{className:"float-right"},l.a.createElement("small",{className:"text-muted"},"Jun 11, 2015 - Jul 10, 2015"))),l.a.createElement(s.ub,{className:"progress-xs",color:"success",value:"43"})),l.a.createElement("td",{className:"text-center"},l.a.createElement(n.a,{height:25,name:"cib-cc-amex"})),l.a.createElement("td",null,l.a.createElement("div",{className:"small text-muted"},"Last login"),l.a.createElement("strong",null,"Yesterday"))))))))))}}}]);
//# sourceMappingURL=41.870951ae.chunk.js.map
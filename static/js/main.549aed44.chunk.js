(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{54:function(a){a.exports=JSON.parse('[{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District Of Columbia","abbreviation":"DC"},{"name":"Federated States Of Micronesia","abbreviation":"FM"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Guam","abbreviation":"GU"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Northern Mariana Islands","abbreviation":"MP"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Palau","abbreviation":"PW"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virgin Islands","abbreviation":"VI"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]')},70:function(a,e,n){},71:function(a,e,n){},75:function(a,e){},77:function(a,e){},90:function(a,e,n){"use strict";n.r(e);var i=n(0),t=n.n(i),r=n(15),o=n.n(r),b=(n(70),n(38)),c=(n(71),n(72),n(52)),l=n(93),s=n(54),d=n(6),m=function(a){var e=0,n=function(a,e){return a>=0&&a<e?"normalCell":"redCell"},i=function(a){return""===a?"FALSE":a},t=function(a){var e=a.split(/(?:,| )+/).map((function(a){return s.find((function(e){return e.name===a}))}));return void 0!==e[0]?e.map((function(a){return"| "+a.abbreviation+" |"})):null},r=function(e,n,i){var t=a.file.findIndex((function(a){return a.data.Phone===e})),r=a.file.findIndex((function(a){return a.data.Email.toLowerCase()===n.toLowerCase()}));return t===i&&r===i?null:t===i&&r!==i?r+1:t!==i&&r===i?t+1:t!==i&&r!==i?t>r?r+1:t+1:void 0};return Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{className:"table--header",children:[Object(d.jsx)("th",{children:Object(d.jsx)("b",{children:"Id"})}),Object.keys(a.file[0].data).map((function(a){return Object(d.jsx)("th",{children:Object(d.jsx)("b",{children:a})})})),Object(d.jsx)("th",{children:Object(d.jsx)("b",{children:"Duplicate with"})})]}),a.file.map((function(a,o){return e+=1,Object(d.jsxs)("tr",{className:(u=e,Number.isInteger(u/2)?"grey":"white"),children:[Object(d.jsx)("td",{children:e}),Object(d.jsx)("td",{children:a.data["Full Name"].trim()}),Object(d.jsx)("td",{children:(v=a.data.Phone,10===v.length?"+1"+v:11===v.length?"+"+v:v)}),Object(d.jsx)("td",{children:a.data.Email}),Object(d.jsx)("td",{className:(m=parseFloat(a.data.Age.replace(",",".")),Number.isInteger(m)&&m>=21?"normalCell":"redCell"),children:a.data.Age}),Object(d.jsx)("td",{className:n(a.data.Experience,a.data.Age),children:a.data.Experience}),Object(d.jsx)("td",{className:(s=a.data["Yearly Income"],s<=1e6&&s>0?"normalCell":"redCell"),children:(Math.round(100*a.data["Yearly Income"])/100).toFixed(2)}),Object(d.jsx)("td",{className:(l=a.data["Has children"],"TRUE"===l||"FALSE"===l||""===l?"normalCell":"redCell"),children:i(a.data["Has children"])}),Object(d.jsx)("td",{children:t(a.data["License states"])}),Object(d.jsx)("td",{className:(c=a.data["Expiration date"],c.match(/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$|^\d{4}[\-](0?[1-9]|1[0-2])[\-](0?[1-9]|[1-2][0-9]|3[01])$/)&&Date.parse(c)>Date.now()?"normalCell":"redCell"),children:a.data["Expiration date"]}),Object(d.jsx)("td",{className:(b=a.data["License number"],b.match(/^\w{6}$/)?"normalCell":"redCell"),children:a.data["License number"]}),Object(d.jsx)("td",{children:r(a.data.Phone,a.data.Email,o)})]});var b,c,l,s,m,v,u}))]})};var v=function(){var a=Object(i.useState)(void 0),e=Object(b.a)(a,2),n=e[0],t=e[1],r=Object(i.useState)(!1),o=Object(b.a)(r,2),s=o[0],v=o[1],u=Object(i.useState)(!1),h=Object(b.a)(u,2),j=h[0],O=h[1],f=function(a){t(n=a),v(s=!0),console.log("fileCSVReader",n),(s&&n.some((function(a){return""===a.data["Full Name"]}))||s&&n.some((function(a){return""===a.data.Phone}))||s&&n.some((function(a){return""===a.data.Email})))&&O(!0)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(l.a,{title:"Basic Modal",visible:j,onOk:function(){O(!1),v(s=!1),t(void 0)},onCancel:function(){O(!1),v(s=!1),t(void 0)},children:Object(d.jsx)("p",{children:"File is incorect"})}),Object(d.jsx)(c.a,{config:{header:!0,skipEmptyLines:!0},onDrop:function(a){f(a)},onError:function(){var a;console.log(a)},addRemoveButton:!0,removeButtonColor:"#659cef",onRemoveFile:function(){var a;console.log("---------------------------"),console.log(a),v(s=!1),t(n=void 0),console.log("---------------------------")},children:Object(d.jsx)("span",{children:"Drop CSV file here or click to upload."})}),s?Object(d.jsx)(m,{file:n}):null]})},u=function(a){a&&a instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(e){var n=e.getCLS,i=e.getFID,t=e.getFCP,r=e.getLCP,o=e.getTTFB;n(a),i(a),t(a),r(a),o(a)}))};o.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),u()}},[[90,1,2]]]);
//# sourceMappingURL=main.549aed44.chunk.js.map
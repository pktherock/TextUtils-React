(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(15),r=a.n(l),n=(a(21),a(10)),o=(a(22),a(8)),i=a(0);function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link active",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"," mx-4"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode!"})]}),Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],l=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{className:"mb-4",children:e.heading}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"FormControl",className:"form-label mx-2",children:"Example textarea"}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){l(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#12332d":"white",color:"dark"===e.mode?"white":"black"},id:"FormControl",rows:"10"})]}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-success btn-lg mx-1 my-1 shadow",onClick:function(){if(s){console.log("Uppercase was clicked!");var t=s.toUpperCase();l(t),e.showAlert("Converted to uppercase!","success")}},children:"Convert to Uppercase"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary btn-lg mx-1 my-1 shadow",onClick:function(){if(s){var t=s.toLowerCase();l(t),e.showAlert("Converted to lowercase!","success")}},children:"Convert to Lowercase"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-danger btn-lg mx-1 my-1 shadow",onClick:function(){if(s){l(""),e.showAlert("Cleared Text!","danger")}},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary btn-lg mx-1 my-1 shadow",onClick:function(){if(s){var t=s.trim();l(t),e.showAlert("Trimed Your Text!","success")}},children:"Trim Text"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-warning btn-lg mx-1 my-1 shadow",onClick:function(){if(s){var t=s.charAt(0).toUpperCase()+s.slice(1);l(t),e.showAlert("Capitalized First Latter!","success")}},children:"Capitilize First latter"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary btn-lg mx-1 my-1 shadow",onClick:function(){if(s){l((function(e){var t=e.trim();t=t.split(" ");var a=[];return t.forEach((function(e){a.push(e[0].toUpperCase()+e.slice(1,e.length))})),a.join(" ")})),e.showAlert("Capitalized Each first latter of your sentence !","success")}},children:"Capitilize Each First latter"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary btn-lg mx-1 my-1 shadow",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Copied to Clipboard!","success")},children:"Copy Text!"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary btn-lg mx-1 my-1 shadow",onClick:function(){var t=s.split(/[ ]+/);l(t.join(" ")),e.showAlert("Removed Extra Spaces!","success")},children:"Remove Extra Spaces!"})]}),Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:s.split(/\s+/).filter((function(e){return 0!==e.length})).length})," words and ",Object(i.jsx)("b",{children:s.length})," characters!"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:0===s.split(" ").filter((function(e){return 0!==e.length})).length?0:.008*s.split(" ").filter((function(e){return 0!==e.length})).length})," Minute read!"]}),Object(i.jsx)("h2",{children:"Text preview"}),Object(i.jsx)("div",{style:{color:"dark"===e.mode?"white":"black"},children:Object(i.jsx)("p",{children:s.length>0?s:"Nothing to preview!"})})]})]})}function h(e){var t={color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{children:"About Us!"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(i.jsx)("strong",{children:"Analyze Your Text1"})})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(i.jsx)("strong",{children:"Free to use"})})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"Textutils is free character couter tool that provides instant character count & word count statistics for a given text. TextUtils the number of word and characters. Thus it is suitable for writing text with text with word/ character limit."})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:t,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(i.jsx)("strong",{children:"Free to useBrowser Compatible"})})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc."})})]})]})]})}d.defaultProps={title:"Set title here",aboutText:"About text here"};var j=function(e){var t;return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:(t=e.alert.type,t.charAt(0).toUpperCase()+t.slice(1))})," : ",e.alert.msg]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(null),r=Object(n.a)(l,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{title:"TextUtils",aboutText:"About Utils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#08112cf7",p("Dark Mode has been enbled","success")):(s("light"),document.body.style.backgroundColor="white",p("Light Mode has been enbled","success"))}}),Object(i.jsx)(j,{alert:u}),Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{mode:a})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{heading:"Try TextUtils - Word Counter, Character Couter, Remove extra Spaces",mode:a,showAlert:p})})]})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),l(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[32,1,2]]]);
//# sourceMappingURL=main.54761964.chunk.js.map
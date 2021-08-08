(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(6),c=n.n(s),i=(n(11),n(2)),o=n.p+"static/media/bg-masthead.094fb84e.jpg",l=n(0);var j=function(e){return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Heather Jackson"}),Object(l.jsx)("img",{src:o,alt:"background"}),e.children]})};var h=function(e){var t=e.pages,n=void 0===t?[]:t,a=e.setCurrentPage,s=e.currentPage;return Object(r.useEffect)((function(){document.title=s.name}),[s]),Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(l.jsx)("li",{className:"mx-5 ".concat(s.name===e.name&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return a(e)},children:e.name})},e.name)}))})})},m=function(e){return console.log(e),Object(l.jsx)("div",{children:e.children})};var u=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsx)("div",{className:"profile-img my-5",children:Object(l.jsx)("i",{className:"fas fa-code",style:{fontSize:"96px"}})}),Object(l.jsx)("p",{children:"Hi, I'm Heather. I'm on my way to becoming a Full-Stack Web Developer, currently enrolled in University of Pennsylvania's Coding Bootcamp."}),Object(l.jsx)("p",{children:"Soon I plan to retire from the food industry so I can dive into a full time position in tech. In order to be well-rounded in this field, I'm interested in a variety of positions, but I can't deny a special interest in Front-End configuration. This August I will recieve my Full-Stack Web Development Certificate and I am really excited to continue learning while actually on the ground. My Coding experience is recent, but intensive. I also have a Bachelor's Degree in Art History and Criticism from Temple University, where I spent years gaining experience constantly adapting to new enviornments with roles in a variety of departments and organizations in the art world. More recently, I've also been working with small businesses to build their brands through various forms of marketing and gaining virtual foot traffic by means of website design and e-commerce."})]})})};var b=function(e){var t=e.project,n=t.name,r=t.repo,a=t.link,s=t.description,c=t.screenshot;return Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("img",{src:c,alt:n,className:"project-bg"}),Object(l.jsxs)("div",{className:"project-text",children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("a",{href:a,children:n})," ",Object(l.jsx)("a",{href:r,children:Object(l.jsx)("i",{className:"fab fa-github"})})]}),Object(l.jsx)("p",{children:s})]})]},n)};var d=function(){var e=Object(r.useState)([{name:"Bottom Drawer Marketplace",description:"MongoDB/Express/Node/Handlebars",link:"http://bottomdrawermarketplace.herokuapp.com/",repo:"https://github.com/heatherloisejackson/super-octo-funicular",screenshot:"https://github.com/heatherloisejackson/super-octo-funicular/blob/main/public/images/Untitled%203.png"},{name:"Book Search Engine",description:"MERN Stack",link:"https://heathers-google-book-search.herokuapp.com/",repo:"https://github.com/heatherloisejackson/BookSearchEngine",screenshot:"../../assets/projects/booksearch.png"},{name:"Flobi",description:"Third Party APIs/HTML/JavaScript",link:"https://heatherloisejackson.github.io/Project-API/",repo:"https://github.com/heatherloisejackson/Project-API",screenshot:"../../assets/projects/flobi.png"},{name:"Fitness Tracker",description:"MongoDB/Express/Node/HTML/CSS",link:"https://heathersfitnesstracker.herokuapp.com/?id=60ee2098fa027f0015fc91fe",repo:"https://github.com/heatherloisejackson/FitnessTracker",screenshot:"../../assets/projects/fitnesstracker.png"},{name:"Team Profile Generator",description:"Node.js/HTML/CSS",link:"https://github.com/heatherloisejackson/ProfessionalTeamProfileCreator",repo:"https://github.com/heatherloisejackson/ProfessionalTeamProfileCreator",screenshot:"../../assets/projects/teamprofilegenerator.png"}]),t=Object(i.a)(e,1)[0];return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"flex-row",children:t.map((function(e,t){return Object(l.jsx)(b,{project:e},"project"+t)}))})})},p=n(3),f=n(5);var g=function(){var e=Object(r.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),c=Object(i.a)(s,2),o=c[0],j=c[1],h=n.name,m=n.email,u=n.message,b=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);j(t?"":"Your email is invalid.")}else e.target.value.length?j(""):j("".concat(e.target.name," is required."));o||(a(Object(f.a)(Object(f.a)({},n),{},Object(p.a)({},e.target.name,e.target.value))),console.log("Handle Form",n))};return Object(l.jsx)("section",{children:Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",n)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:h,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:m,onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:b})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})};var x=function(){return Object(l.jsx)("section",{className:"my-5",children:Object(l.jsx)("div",{className:"my-2",children:Object(l.jsxs)("p",{children:["Download my"," ",Object(l.jsx)("a",{href:"CodingResumeAUG2021.pdf",download:"CodingResumeAUG2021.pdf",children:"resume"})]})})})};var O=function(e){var t=e.currentPage;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)(m,{children:function(){switch(t.name){case"About Me":return Object(l.jsx)(u,{});case"Portfolio":return Object(l.jsx)(d,{});case"Contact":return Object(l.jsx)(g,{});case"Resume":return Object(l.jsx)(x,{});default:return Object(l.jsx)(u,{})}}()})]})};var v=function(){return Object(l.jsx)("footer",{className:"flex-row px-1",children:[{name:"fab fa-github",link:"https://github.com/heatherloisejackson"},{name:"fab fa-linkedin",link:"https://www.linkedin.com/in/heather-jackson-3099971a6/"},{name:"fab fa-stack-overflow",link:"https://stackoverflow.com/users/15125696/heatherj?tab=profile"}].map((function(e){return Object(l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:e.name})},e.name)}))})};var k=function(){var e=Object(r.useState)([{name:"About"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}]),t=Object(i.a)(e,1)[0],n=Object(r.useState)(t[0]),a=Object(i.a)(n,2),s=a[0],c=a[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{children:Object(l.jsx)(h,{pages:t,setCurrentPage:c,currentPage:s})}),Object(l.jsx)("main",{children:Object(l.jsx)(O,{currentPage:s})}),Object(l.jsx)(v,{})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.4ea499fe.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=(n(0),n(103),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{children:["This website is created with <3 using"," ",Object(a.jsx)("span",{className:"blue-text",children:"React"})," and images from"," ",Object(a.jsx)("a",{href:"https://www.freepik.com",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{className:"blue-text",children:"freepik.com"})})]})})})},103:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){},365:function(e,t,n){},395:function(e,t,n){"use strict";n.r(t),n.d(t,"AboutPage",(function(){return T}));var a=n(44),c=n(1),r=n(0),i=n(46),s=n(58),o=n(48),l=(n(363),n(54)),d=n(45),u=function(e){var t=e.pageY,n=e.data,a=Object(s.useTransform)(t,(function(e){return e/3}));return Object(c.jsxs)("section",{className:"favourites-container",children:[Object(c.jsx)(s.Frame,{background:"",width:"100%",height:"100%",left:"10%",top:"50vh",y:a,children:Object(c.jsx)("img",{src:l.a,alt:"decor-again",className:"decorations decorations-back decorations-trivia-laptop",style:{width:"40vw"}})}),Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,{children:"Trivia"})}),Object(c.jsx)(d.a,{delay:.2,children:Object(c.jsx)("div",{className:"favourites-table",children:Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:n.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"left-table",children:Object(c.jsx)("p",{children:e.title})}),Object(c.jsx)("td",{className:"right-table",children:e.content.map((function(e){return Object(c.jsx)("p",{children:e},e)}))})]},e.title)}))})})})})]})},b=(n(364),n(18)),j=n.p+"static/media/secondary-photo.1fffd9df.jpg",h=n.p+"static/media/secondary-photo-min.097a1f6b.jpg",f=n(68),m=n(96),O=n(51),g=n(15),p=function(e){var t=e.pageY,n=e.handleResize,l=Object(s.useTransform)(t,(function(e){return e/1.5})),u=Object(r.useState)(0),p=Object(a.a)(u,2),x=p[0],v=p[1],y=["...Didn't I tell you not to click the button?","Listen here, you little ...",":v","Well","Now that's some serious dedication","This is my last warning","Fine. Enjoy :)"];return Object(r.useEffect)((function(){var e=function(e,t){setTimeout((function(){b.b.dark(e)}),t)};localStorage.getItem("pranked")&&(Object(g.d)(g.b,"Return after getting pranked"),localStorage.removeItem("pranked"),e("How was that?",200),e("Ehehe :)",400))}),[]),Object(c.jsxs)("section",{className:"hello-world",children:[Object(c.jsx)(s.Frame,{background:"",width:"20%",height:"20%",right:"-15%",top:"-5%",y:l,children:Object(c.jsx)("img",{src:m.a,alt:"decor",className:"decorations decorations-back decorations-hello-shard",style:{width:"60vw",maxWidth:"400px",zIndex:-1}})}),Object(c.jsxs)("div",{className:"hello-world-desc",children:[Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,{children:"HelloWorld"})}),Object(c.jsx)(d.a,{delay:.2,children:Object(c.jsxs)("p",{children:["My name is Christopher Ivan Gunardi, and I am a Telecommunication Engineering student based in West Java, Indonesia. ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})," While I am not pursuing a degree in Computer Science or Art, I am experienced in"," ",Object(c.jsx)("span",{className:"blue-text",children:"Frontend Web Development and UI/UX"})," ","and have worked on several projects in these two fields. I enjoy creating websites with React and MERN Stack. I am also comfortable with using Adobe Photoshop and Figma to create professional UI/UX Designs. Oh by the way,"," ",Object(c.jsx)("span",{className:"blue-text",children:"the image is draggable :)"})]})})]}),Object(c.jsxs)("div",{className:"hello-world-image",children:[Object(c.jsx)("div",{className:"hello-world-image-hidden-button",children:Object(c.jsx)(d.a,{delay:1,children:Object(c.jsx)(O.a,{label:"Don't Click",onClick:function(){x<=y.length-1&&b.b.dark(y[x]),0===x?Object(g.d)(g.b,"Click the hidden button on page load"):x>=y.length-1&&(x===y.length-1&&(Object(g.d)(g.b,"Get Pranked"),localStorage.setItem("pranked",!0)),b.b.dark("Refresh to the rescue"),setInterval((function(){b.b.dark("LOL!")}),200)),v((function(e){return e+1}))}})})}),Object(c.jsx)(i.a.div,{drag:!0,dragConstraints:{left:-100,top:-100,right:100,bottom:100},dragElastic:.5,onDrag:function(){n(!1)},onDragEnd:function(){setTimeout((function(){n(!0)}),200)},children:Object(c.jsx)(d.a,{delay:.4,children:Object(c.jsx)(f.a,{src:j,tinySrc:h,alt:"main profile pic",rotate:!0,shadow:!0,progressive:!0})})})]})]})},x=(n(365),n(70)),v=n(97),y=n(63),w=n(72),k=function(e){var t=e.pageY,n=Object(s.useTransform)(t,(function(e){return e/3})),a=Object(s.useTransform)(t,(function(e){return e/-5}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s.Frame,{background:"",width:"20%",height:"20%",left:"-5%",top:"100%",y:n,children:Object(c.jsx)("img",{src:v.a,alt:"more-decor",className:"decorations decorations-back decorations-more-image",style:{width:"30vw",maxWidth:"300px"}})}),Object(c.jsx)(s.Frame,{background:"",width:"100%",height:"100%",right:"-40%",top:"-10%",y:a,children:Object(c.jsx)("img",{src:y.a,alt:"more-decor",className:"decorations decorations-back decorations-more-grid",style:{width:"70vw",maxWidth:"none"}})})]})},N=function(e){var t=e.pageY,n=e.data;return Object(c.jsxs)("section",{className:"more-about-container",children:[Object(c.jsx)(k,{pageY:t}),Object(c.jsx)(d.a,{children:Object(c.jsx)(o.a,{children:"MoreAboutMe"})}),n.length>0&&n.map((function(e,t){return Object(c.jsx)(d.a,{delay:.2*(t+1),children:Object(c.jsx)(x.a,{title:e.title,badges:Object(w.d)(e.data)})},t)}))]})},I=n(73),E=n(102),S=n(49),C=n(56),_=n(75),T=function(){var e=Object(s.useMotionValue)(10),t=Object(r.useState)(Object(w.a)()),n=Object(a.a)(t,2),o=n[0],l=n[1],d=function(){l(Object(w.a)())};Object(r.useEffect)((function(){return window.addEventListener("resize",d),d(),function(){window.removeEventListener("resize",d)}}));var b=Object(r.useState)([]),j=Object(a.a)(b,2),h=j[0],f=j[1],m=Object(r.useState)([]),O=Object(a.a)(m,2),g=O[0],x=O[1];Object(r.useEffect)((function(){Object(w.b)(["EDUCATION","EXPERIENCES","CERTIFICATIONS"],f),Object(C.e)().then((function(e){return x(e)}))}),[]);return Object(c.jsx)(i.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onTouchStart:w.c,children:function(){return h.length>0&&g.length>0}?Object(c.jsx)(s.Scroll,{width:"100%",height:"100%",contentOffsetY:e,dragEnabled:o,onresize:d,children:Object(c.jsxs)(S.a,{children:[Object(c.jsx)(p,{pageY:e,handleResize:l}),Object(c.jsx)(I.a,{label1:"Let's Connect",link1:"/contact",label2:"All Projects",link2:"/project"}),Object(c.jsx)(N,{pageY:e,data:h}),Object(c.jsx)(u,{pageY:e,data:g}),Object(c.jsx)(E.a,{})]})}):Object(c.jsx)(_.a,{})})}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(44),c=n(1),r=n(0),i=n(46),s=n(65),o=function(e){var t=e.children,n=e.delay,o=void 0===n?0:n,l=e.disabledView,d=Object(i.b)(),u=Object(s.a)({threshold:.05}),b=Object(a.a)(u,2),j=b[0],h=b[1];Object(r.useEffect)((function(){h?d.start("visible"):d.start("hidden")}),[d,h]);var f={visible:{y:0,opacity:1,transition:{delay:.2+o,duration:500,type:"spring",stiffness:100,staggerChildren:.5}},hidden:{y:20,opacity:0}};return Object(c.jsx)(i.a.div,{className:"init-container",ref:j,animate:l?"visible":d,initial:"hidden",variants:f,children:t})}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=(n(53),function(e){var t=e.children;return Object(a.jsx)("h2",{className:"H2",children:Object(a.jsx)("span",{className:"blue-span",children:Object(a.jsx)("span",{className:"code-heading",children:t})})})})},49:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=(n(0),n(50),function(e){var t=e.children;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"content-container",children:t})})})},50:function(e,t,n){},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(1),c=n(0),r=n(46),i=n(9),s=n(57);n(55);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=c.createElement("path",{fill:"#56CCF2",d:"M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"},c.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.5s",repeatCount:"indefinite"}));function u(e,t){var n=e.title,a=e.titleId,r=l(e,["title","titleId"]);return c.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 50 50",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,d)}var b=c.forwardRef(u),j=(n.p,function(e){var t=e.label,n=e.onClick,c=e.link,o=e.outLink,l=e.icon,d=e.iconPosition,u=e.primary,j=e.small,h=e.loading,f=Object(a.jsxs)("div",{className:"button-content",children:["left"===d&&Object(a.jsx)("div",{className:"button-icon",children:Object(a.jsx)(l,{alt:"button-icon"})}),j?Object(a.jsx)("p",{children:t}):Object(a.jsx)("h4",{children:t}),"right"===d&&Object(a.jsx)("div",{className:"button-icon",children:Object(a.jsx)(l,{alt:"button-icon"})})]});return Object(a.jsx)(r.a.div,{whileHover:{scale:1.02,transition:{duration:.25}},whileTap:{scale:.98,transition:{duration:.25}},className:"button-container ".concat(h&&"button-loading"," button-container").concat(j?"-small":"-large").concat(u?"-primary":"-secondary"),children:Object(a.jsxs)(s.a,{children:[c&&Object(a.jsx)(i.b,{to:c,children:Object(a.jsx)("button",{children:f})}),o&&Object(a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("button",{children:f})}),n&&Object(a.jsxs)("button",{onClick:n,children:[Object(a.jsx)(b,{className:"loading-animation"}),f]})]})})})},53:function(e,t,n){},54:function(e,t,n){"use strict";t.a=n.p+"static/media/laptop.afbf9ccc.png"},55:function(e,t,n){},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(81),c=n.n(a)()({projectId:"f86t30l6",dataset:"production",useCdn:!0}),r=function(e){return c.fetch('*[_type == "project" && slug.current == $id][0]{\n      title,\n      slug,\n      carousel[]{asset->{url}},\n      body,\n      "tech": *[ _type == "badge" && _id in ^.technologies[]._ref ]{\n        icon{asset->{url}},\n        name,\n        label\n      },\n      link[]\n      {\n        url,\n        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{\n        // icon{asset->{url}},\n        name,\n        label\n      },\n      },\n      "allProjects": *[_type == "project"]|order(id asc){\n        slug,\n        title,\n        isComingSoon\n      },\n    }',{id:e})},i=function(){return c.fetch('*[_type == "project"]|order(id asc){\n      title,\n      slug,\n      isOngoing,\n      isComingSoon,\n      tags,\n      previewImage{\n        asset->{\n        url,\n        }\n      },\n      loadingImage{\n        asset->{\n        url\n        }\n      }\n    }')},s=function(e){return c.fetch('*[_type == "badgeContainer" && name in $arr]{\n      title,\n  \t\tname,\n  \t\t"data": *[ _type == "badge" && _id in ^.content[]._ref ]{\n        icon{asset->{url}},\n        name,\n        label\n      },\n    }',{arr:e})},o=function(){return c.fetch('*[_type == "trivia"]{\n      title,\n  \t\tcontent\n    }')},l=function(){return c.fetch('*[_type == "project" && displayAtHomePage == true]{\n      title,\n      slug,\n  \t\thomeLoadingBackground{\n        asset->{\n        url,\n        }\n      },\n  \t\thomeBackground{\n        asset->{\n        url,\n        }\n      },\n  \t\thomePagePreviewText,\n  \t\tmobileImage{\n        asset->{\n        url,\n        }\n      },\n  \t\tdesktopImage{\n        asset->{\n        url,\n        }\n      },\n\t\t\tlink[]\n      {\n        url,\n        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{\n        name,\n        label\n      \t}\n      }\n    }')}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=(n(0),n(60),function(e){var t=e.component,n=e.alt,c=e.label,r=e.src,i=e.color;return Object(a.jsxs)("div",{className:"badge ".concat(!i&&"badge-icon-white"),children:[t?Object(a.jsx)(t,{alt:n}):r&&Object(a.jsx)("img",{src:r,alt:n}),Object(a.jsx)("p",{children:c})]})})},60:function(e,t,n){},63:function(e,t,n){"use strict";t.a=n.p+"static/media/grid.8f602aa9.svg"},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(44),c=n(1),r=n(0),i=n.n(r),s=function(e,t){var n=i.a.useState(e),c=Object(a.a)(n,2),r=c[0],s=c[1];return i.a.useEffect((function(){s(e);var n=new Image;n.src=t,n.onload=function(){s(t)}}),[e,t]),[r,{blur:r===e}]},o=(n(69),function(e){var t=e.src,n=e.tinySrc,r=e.rotate,i=e.alt,o=e.shadow,l=e.progressive,d=s(n,t),u=Object(a.a)(d,2),b=u[0],j=u[1].blur;return Object(c.jsxs)("div",{className:"image-outer-container",children:[o&&Object(c.jsx)("div",{className:"image-shadow ".concat(r&&"image-shadow-rotate")}),Object(c.jsx)("div",{className:"image-container ".concat(r&&"image-component-rotate"),children:Object(c.jsx)("img",{src:b,className:"image-component ".concat(l&&j&&"image-component-progressive"),alt:i})})]})})},69:function(e,t,n){},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(1),c=(n(0),n(59)),r=(n(71),function(e){var t=e.title,n=e.badges,r=e.width;return Object(a.jsxs)("div",{className:"badge-container",style:r&&{width:r},children:[Object(a.jsx)("h4",{children:t}),Object(a.jsx)("div",{className:"badge-container-inner",children:n.map((function(e){return Object(a.jsx)(c.a,{component:e.component,alt:e.alt,label:e.label,src:e.src},e.label)}))})]})})},71:function(e,t,n){},72:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return o}));var a=n(18),c=n(56),r=function(){return new RegExp("Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile","i").test(navigator.userAgent)},i=function(){!r()&&a.b.dark("Sorry, but this website currently doesn't support touch gestures on desktop :(")},s=function(e){return e.map((function(e){return{src:e.icon?e.icon.asset.url:"",alt:e.label,label:e.label}}))},o=function(e,t){Object(c.b)(e).then((function(n){var a=e.map((function(e){return n.filter((function(t){return t.name===e}))[0]}));t(a)}))}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),c=(n(0),n(74),n(51)),r=n(45),i=function(e){var t=e.label1,n=e.link1,i=e.label2,s=e.link2;return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{className:"double-button",children:[Object(a.jsx)(c.a,{label:t,link:n,primary:!0}),Object(a.jsx)(c.a,{label:i,link:s})]})})}},74:function(e,t,n){},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(1),c=(n(0),n(76),function(){return Object(a.jsx)("div",{className:"loading-container",children:Object(a.jsxs)("div",{className:"lds-ellipsis",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})})},76:function(e,t,n){},96:function(e,t,n){"use strict";t.a=n.p+"static/media/shard.9d02a2dd.svg"},97:function(e,t,n){"use strict";t.a=n.p+"static/media/image.5c9f9b9d.svg"}}]);
//# sourceMappingURL=8.975fa70d.chunk.js.map
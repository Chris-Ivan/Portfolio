(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[13],{258:function(e,t,n){},259:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t),n.d(t,"ProjectPreviewPage",(function(){return I}));var a=n(46),i=n(1),r=n(0),c=n(23),s=n(248),o=n(249),l=n(133),u=n(390),d=n(388),f=n(8),h=n.n(f),m=n(250),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).componentDidUpdate=function(e){if(e.animValues!==a.props.animValues){var t=a.state.animValues;a.setState({animValues:t+a.props.animValues},a.calculate())}else a.calculate()},a.state={animValues:0},a.onScrollStart=a.onScrollStart.bind(Object(l.a)(a)),a.resetMin=a.resetMin.bind(Object(l.a)(a)),a.resetMax=a.resetMax.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(this.props.pageLock){var e=document.firstElementChild.className;document.firstElementChild.className=e+(e?" ":"")+"locked__"}h.a.findDOMNode(this.hScrollParent).addEventListener("wheel",this.onScrollStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.props.pageLock&&(document.firstElementChild.className=document.firstElementChild.className.replace(/ ?locked__/,"")),h.a.findDOMNode(this.hScrollParent).removeEventListener("wheel",this.onScrollStart)}},{key:"onScrollStart",value:function(e){var t=this;e.preventDefault();var n=e.deltaY?e.deltaY:e.deltaX,a=Math.floor(n),i=this.state.animValues,r=i+a,c=i-a;if(this.caniscroll()){window.requestAnimationFrame((function(){t.props.reverseScroll?t.setState({animValues:c}):t.setState({animValues:r})}))}}},{key:"shouldComponentUpdate",value:function(e,t){return(void 0===this.calculate.timer||this.props.children!==e.children||this.state.animValues!==t.animValues||this.props.animValues!==e.animValues)&&(this.props.children!==e.children||!1!==this.caniscroll())}},{key:"caniscroll",value:function(){var e=h.a.findDOMNode(this.hScrollParent),t=e.getBoundingClientRect(),n=e.firstElementChild;return n.offsetLeft<t.left||n.offsetLeft+n.offsetWidth>t.width}},{key:"calculate",value:function(){var e=this;clearTimeout(this.calculate.timer),this.calculate.timer=setTimeout((function(){var t=h.a.findDOMNode(e.hScrollParent),n=t.lastElementChild.scrollWidth,a=t.offsetWidth,i=e.state.animValues,r=-(n-a);if(i>=1)e.resetMin();else if(i<=r){var c=r+1;e.resetMax(c)}}))}},{key:"resetMin",value:function(){this.setState({animValues:0})}},{key:"resetMax",value:function(e){this.setState({animValues:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.config,a=t.style,r=t.children,s=a.width,o=a.height,l=n||m.presets.noWobble,u=Object(c.a)({height:o||"100%",width:s||"100%",overflow:"hidden",position:"relative"},a);return Object(i.jsx)("div",{ref:function(t){e.hScrollParent=t},style:u,className:"scroll-horizontal ".concat(this.props.className||""),children:Object(i.jsx)(m.Motion,{style:{z:Object(m.spring)(this.state.animValues,l)},children:function(e){var t=e.z,n={transform:"translate3d(".concat(t,"px, 0,0)"),display:"inline-flex",height:"100%",position:"absolute",willChange:"transform"};return Object(i.jsx)("div",{style:n,children:r})}})})}}]),n}(r.Component);p.defaultProps={reverseScroll:!1,pageLock:!1,config:null,style:{width:"100%",height:"100%"},className:null,animValues:null};var g=n(18),j=n(48),b=(n(258),n(3)),v=n(70),O=(n(259),n(61));function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var S=r.createElement("path",{d:"M15 1.875A13.13 13.13 0 0 0 1.875 15 13.13 13.13 0 0 0 15 28.125 13.13 13.13 0 0 0 28.125 15 13.13 13.13 0 0 0 15 1.875zm0 24.023A10.9 10.9 0 0 1 4.102 15 10.9 10.9 0 0 1 15 4.102 10.9 10.9 0 0 1 25.898 15 10.9 10.9 0 0 1 15 25.898zm5.118-7.188L15.94 15.7V8.44c0-.13-.105-.234-.234-.234h-1.4c-.13 0-.234.105-.234.234v8.068a.23.23 0 0 0 .097.19l4.846 3.533c.105.076.252.053.328-.05l.838-1.143c.076-.108.053-.255-.053-.328z"});function w(e,t){var n=e.title,a=e.titleId,i=x(e,["title","titleId"]);return r.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",fill:"#27c93f",ref:t,"aria-labelledby":a},i),n?r.createElement("title",{id:a},n):null,S)}var N=r.forwardRef(w),k=(n.p,function(e){var t=e.src,n=e.tinySrc,a=e.title,r=e.tags,c=e.isComingSoon,s=e.isOngoing,o=e.slug,l=Object(b.g)();return Object(i.jsxs)("div",{className:"projectCard",onClick:function(){!c&&l.push("/project/".concat(o))},children:[s&&!c&&Object(i.jsx)("div",{className:"ongoing-container",children:Object(i.jsx)(O.a,{component:N,alt:"".concat(a," is an ongoing project"),label:"Ongoing",color:"#27C93F"})}),Object(i.jsxs)("div",{className:"projectCard-image",children:[c&&Object(i.jsx)("div",{className:"coming-soon-container",children:"COMING SOON"}),Object(i.jsx)(v.a,{src:t,tinySrc:n,alt:"a thumbnail for ".concat(a),progressive:!0})]}),Object(i.jsxs)("div",{className:"projectCard-info",children:[Object(i.jsx)("p",{children:a}),Object(i.jsx)("div",{className:"projectCard-info-tags",children:r.map((function(e){return Object(i.jsx)("h5",{children:e},e)}))})]})]})}),C=n(51),_=n(47),V=n(65),M=n(63),P=n(56),E=n(58),I=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){Object(E.a)().then((function(e){c(e)})).catch((function(e){console.log(e),g.b.dark("Unfortunately, I can't afford regular CMS pricing, so we'll have to wait a month until the monthly CMS usage is restart :( ")}))}),[]),Object(i.jsx)(j.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(i.jsxs)(C.a,{children:[Object(i.jsxs)("div",{className:"projectpreviewpage-decorations",children:[Object(i.jsx)("img",{src:V.a,alt:"",className:"decorations decorations-back decorations-project-grid"}),Object(i.jsx)("img",{src:M.a,alt:"",className:"decorations decorations-back decorations-project-video"}),Object(i.jsx)("img",{src:P.a,alt:"",className:"decorations decorations-back decorations-project-laptop"})]}),Object(i.jsx)("div",{className:"projectpreviewpage-container",children:n&&Object(i.jsx)(p,{reverseScroll:!0,config:{stiffness:60,damping:10},style:{height:"calc(100vh - 140px)"},children:n.map((function(e,t){return Object(i.jsx)(_.a,{delay:.2*t,disabledView:!0,children:Object(i.jsx)(k,{className:"horizontal-scroll",src:e.previewImage.asset.url,tinySrc:e.loadingImage.asset.url,title:e.title,tags:e.tags,isComingSoon:e.isComingSoon,isOngoing:e.isOngoing,slug:e.slug.current},e.title)},t)}))})})]})})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(46),i=n(1),r=n(0),c=n(48),s=n(67),o=function(e){var t=e.children,n=e.delay,o=void 0===n?0:n,l=e.disabledView,u=Object(c.b)(),d=Object(s.a)({threshold:.05}),f=Object(a.a)(d,2),h=f[0],m=f[1];Object(r.useEffect)((function(){m?u.start("visible"):u.start("hidden")}),[u,m]);var p={visible:{y:0,opacity:1,transition:{delay:.2+o,duration:500,type:"spring",stiffness:100,staggerChildren:.5}},hidden:{y:20,opacity:0}};return Object(i.jsx)(c.a.div,{className:"init-container",ref:h,animate:l?"visible":u,initial:"hidden",variants:p,children:t})}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),i=(n(0),n(52),function(e){var t=e.children;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"content-container",children:t})})})},52:function(e,t,n){},56:function(e,t,n){"use strict";t.a=n.p+"static/media/laptop.afbf9ccc.png"},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(81),i=n.n(a)()({projectId:"f86t30l6",dataset:"production",useCdn:!0}),r=function(e){return i.fetch('*[_type == "project" && slug.current == $id][0]{\n      title,\n      slug,\n      carousel[]{asset->{url}},\n      body,\n      "tech": *[ _type == "badge" && _id in ^.technologies[]._ref ]{\n        icon{asset->{url}},\n        name,\n        label\n      },\n      link[]\n      {\n        url,\n        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{\n        // icon{asset->{url}},\n        name,\n        label\n      },\n      },\n      "allProjects": *[_type == "project"]|order(id asc){\n        slug,\n        title,\n        isComingSoon\n      },\n    }',{id:e})},c=function(){return i.fetch('*[_type == "project"]|order(id asc){\n      title,\n      slug,\n      isOngoing,\n      isComingSoon,\n      tags,\n      previewImage{\n        asset->{\n        url,\n        }\n      },\n      loadingImage{\n        asset->{\n        url\n        }\n      }\n    }')},s=function(e){return i.fetch('*[_type == "badgeContainer" && name in $arr]{\n      title,\n  \t\tname,\n  \t\t"data": *[ _type == "badge" && _id in ^.content[]._ref ]{\n        icon{asset->{url}},\n        name,\n        label\n      },\n    }',{arr:e})},o=function(){return i.fetch('*[_type == "trivia"]{\n      title,\n  \t\tcontent\n    }')},l=function(){return i.fetch('*[_type == "project" && displayAtHomePage == true]{\n      title,\n      slug,\n  \t\thomeLoadingBackground{\n        asset->{\n        url,\n        }\n      },\n  \t\thomeBackground{\n        asset->{\n        url,\n        }\n      },\n  \t\thomePagePreviewText,\n  \t\tmobileImage{\n        asset->{\n        url,\n        }\n      },\n  \t\tdesktopImage{\n        asset->{\n        url,\n        }\n      },\n\t\t\tlink[]\n      {\n        url,\n        "badge": *[ _type == "badge" && _id == ^.badge._ref ][0]{\n        name,\n        label\n      \t}\n      }\n    }')}},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1),i=(n(0),n(62),function(e){var t=e.component,n=e.alt,i=e.label,r=e.src,c=e.color;return Object(a.jsxs)("div",{className:"badge ".concat(!c&&"badge-icon-white"),children:[t?Object(a.jsx)(t,{alt:n}):r&&Object(a.jsx)("img",{src:r,alt:n}),Object(a.jsx)("p",{children:i})]})})},62:function(e,t,n){},63:function(e,t,n){"use strict";t.a=n.p+"static/media/video.9ac93e4d.svg"},65:function(e,t,n){"use strict";t.a=n.p+"static/media/grid.8f602aa9.svg"},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(46),i=n(1),r=n(0),c=n.n(r),s=function(e,t){var n=c.a.useState(e),i=Object(a.a)(n,2),r=i[0],s=i[1];return c.a.useEffect((function(){s(e);var n=new Image;n.src=t,n.onload=function(){s(t)}}),[e,t]),[r,{blur:r===e}]},o=(n(71),function(e){var t=e.src,n=e.tinySrc,r=e.rotate,c=e.alt,o=e.shadow,l=e.progressive,u=s(n,t),d=Object(a.a)(u,2),f=d[0],h=d[1].blur;return Object(i.jsxs)("div",{className:"image-outer-container",children:[o&&Object(i.jsx)("div",{className:"image-shadow ".concat(r&&"image-shadow-rotate")}),Object(i.jsx)("div",{className:"image-container ".concat(r&&"image-component-rotate"),children:Object(i.jsx)("img",{src:f,className:"image-component ".concat(l&&h&&"image-component-progressive"),alt:c})})]})})},71:function(e,t,n){}}]);
//# sourceMappingURL=13.75e6a550.chunk.js.map
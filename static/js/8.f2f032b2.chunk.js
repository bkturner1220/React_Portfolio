(this.webpackJsonpreact_portfolio=this.webpackJsonpreact_portfolio||[]).push([[8,10],{115:function(e,t,r){"use strict";var o=r(34),a=r(95),n=(r(0),r(230)),i=r(397),p=r(392),c=r(410),s=r(2),l=["icon","href","fontSize"],d=Object(p.a)((function(e){return{icon:{color:e.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:function(e){return e.fontSize?"".concat(e.fontSize,"px"):"32px"},"&:hover":{color:e.palette.text.primary}}}}));t.a=function(e){var t=e.icon,r=e.href,p=e.fontSize,u=Object(a.a)(e,l),f=d({fontSize:p});return Object(s.jsx)(n.a,Object(o.a)(Object(o.a)({display:"inline"},u),{},{component:c.a.div,whileHover:{scale:1.1},children:Object(s.jsx)(i.a,{href:r,children:Object(s.jsx)(t,{className:f.icon})})}))}},230:function(e,t,r){"use strict";var o=r(17),a=r(1),n=(r(10),r(15));function i(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}function p(e){var t=function(t){var r=e(t);return t.css?Object(a.a)({},Object(n.a)(r,e(Object(a.a)({theme:t.theme},t.css))),i(t.css,[e.filterProps])):t.sx?Object(a.a)({},Object(n.a)(r,e(Object(a.a)({theme:t.theme},t.sx))),i(t.sx,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css","sx"].concat(Object(o.a)(e.filterProps)),t}var c=p;var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(n.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},l=r(12),d=r(37);function u(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var f=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,a=e.themeKey,n=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=u(e.theme,a)||{};return Object(d.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=u(i,e)||e,n&&(t=n(t))),!1===o?t:Object(l.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var b=s(f({prop:"border",themeKey:"borders",transform:m}),f({prop:"borderTop",themeKey:"borders",transform:m}),f({prop:"borderRight",themeKey:"borders",transform:m}),f({prop:"borderBottom",themeKey:"borders",transform:m}),f({prop:"borderLeft",themeKey:"borders",transform:m}),f({prop:"borderColor",themeKey:"palette"}),f({prop:"borderRadius",themeKey:"shape"})),h=s(f({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),f({prop:"display"}),f({prop:"overflow"}),f({prop:"textOverflow"}),f({prop:"visibility"}),f({prop:"whiteSpace"})),j=s(f({prop:"flexBasis"}),f({prop:"flexDirection"}),f({prop:"flexWrap"}),f({prop:"justifyContent"}),f({prop:"alignItems"}),f({prop:"alignContent"}),f({prop:"order"}),f({prop:"flex"}),f({prop:"flexGrow"}),f({prop:"flexShrink"}),f({prop:"alignSelf"}),f({prop:"justifyItems"}),f({prop:"justifySelf"})),v=s(f({prop:"gridGap"}),f({prop:"gridColumnGap"}),f({prop:"gridRowGap"}),f({prop:"gridColumn"}),f({prop:"gridRow"}),f({prop:"gridAutoFlow"}),f({prop:"gridAutoColumns"}),f({prop:"gridAutoRows"}),f({prop:"gridTemplateColumns"}),f({prop:"gridTemplateRows"}),f({prop:"gridTemplateAreas"}),f({prop:"gridArea"})),g=s(f({prop:"position"}),f({prop:"zIndex",themeKey:"zIndex"}),f({prop:"top"}),f({prop:"right"}),f({prop:"bottom"}),f({prop:"left"})),x=s(f({prop:"color",themeKey:"palette"}),f({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),O=f({prop:"boxShadow",themeKey:"shadows"});function y(e){return e<=1?"".concat(100*e,"%"):e}var k=f({prop:"width",transform:y}),w=f({prop:"maxWidth",transform:y}),W=f({prop:"minWidth",transform:y}),S=f({prop:"height",transform:y}),z=f({prop:"maxHeight",transform:y}),N=f({prop:"minHeight",transform:y}),P=(f({prop:"size",cssProperty:"width",transform:y}),f({prop:"size",cssProperty:"height",transform:y}),s(k,w,W,S,z,N,f({prop:"boxSizing"}))),K=r(84),C=s(f({prop:"fontFamily",themeKey:"typography"}),f({prop:"fontSize",themeKey:"typography"}),f({prop:"fontStyle",themeKey:"typography"}),f({prop:"fontWeight",themeKey:"typography"}),f({prop:"letterSpacing"}),f({prop:"lineHeight"}),f({prop:"textAlign"})),R=r(4),T=r(0),E=r.n(T),I=r(86),L=r(16),A=r.n(L),G=r(83);function M(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var H=r(18),B=function(e){var t=function(e){return function(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.name,i=Object(R.a)(o,["name"]),p=n,c="function"===typeof t?function(e){return{root:function(r){return t(Object(a.a)({theme:e},r))}}}:{root:t},s=Object(G.a)(c,Object(a.a)({Component:e,name:n||e.displayName,classNamePrefix:p},i));t.filterProps&&(r=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=E.a.forwardRef((function(t,o){var n=t.children,i=t.className,p=t.clone,c=t.component,l=Object(R.a)(t,["children","className","clone","component"]),d=s(t),u=Object(I.a)(d.root,i),f=l;if(r&&(f=M(f,r)),p)return E.a.cloneElement(n,Object(a.a)({className:Object(I.a)(n.props.className,u)},f));if("function"===typeof n)return n(Object(a.a)({className:u},f));var m=c||e;return E.a.createElement(m,Object(a.a)({ref:o,className:u},f),n)}));return A()(l,e),l}}(e);return function(e,r){return t(e,Object(a.a)({defaultTheme:H.a},r))}},D=c(s(b,h,j,v,g,x,O,P,K.b,C)),V=B("div")(D,{name:"MuiBox"});t.a=V},231:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r(392),n=r(422),i=r(410),p=r(174),c=Object(p.a)(o.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub"),s=Object(p.a)(o.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),l=Object(p.a)(o.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email"),d=r(115),u=r(36),f=r(2),m=Object(a.a)((function(e){return{wrapper:{display:"flex",flexDirection:"column",alignItems:"flex-end",position:"fixed",bottom:0,right:0,padding:e.spacing(2),zIndex:100},mobileWrapper:{display:"flex"}}})),b=function(e){var t=e.mobile,r=m(),a=Object(o.useContext)(u.a).isLoading,p=Object(n.a)();return Object(o.useEffect)((function(){a?p.start({opacity:0,y:0}):p.start((function(e){return{opacity:1,y:0,transition:{delay:1.8+.1*e}}}))}),[a,p]),t?Object(f.jsxs)("div",{className:r.mobileWrapper,children:[Object(f.jsx)(d.a,{icon:c,m:1,href:"https://github.com/bkturner1220"}),Object(f.jsx)(d.a,{icon:s,m:1,href:"https://www.linkedin.com/in/bkturner1220/"}),Object(f.jsx)(d.a,{icon:l,m:1,href:"mailto:bturner@texascdlprep.com"})]}):Object(f.jsxs)(i.a.div,{className:r.wrapper,children:[Object(f.jsx)(i.a.div,{animate:p,custom:0,children:Object(f.jsx)(d.a,{icon:c,m:1,href:"https://github.com/bkturner1220"})}),Object(f.jsx)(i.a.div,{animate:p,custom:2,children:Object(f.jsx)(d.a,{icon:s,m:1,href:"https://www.linkedin.com/in/bkturner1220/"})}),Object(f.jsx)(i.a.div,{animate:p,custom:3,children:Object(f.jsx)(d.a,{icon:l,m:1,href:"mailto:bturner@texascdlprep.com"})})]})};t.default=b},246:function(e,t,r){"use strict";var o=r(1),a=r(4),n=r(12),i=r(0),p=(r(10),r(86)),c=r(32),s=r(87),l=i.forwardRef((function(e,t){var r=e.classes,n=e.className,c=e.component,l=void 0===c?"div":c,d=e.disableGutters,u=void 0!==d&&d,f=e.fixed,m=void 0!==f&&f,b=e.maxWidth,h=void 0===b?"lg":b,j=Object(a.a)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return i.createElement(l,Object(o.a)({className:Object(p.a)(r.root,n,m&&r.fixed,u&&r.disableGutters,!1!==h&&r["maxWidth".concat(Object(s.a)(String(h)))]),ref:t},j))}));t.a=Object(c.a)((function(e){return{root:Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,r){var o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:o}),t}),{}),maxWidthXs:Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(n.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(n.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(n.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(n.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},363:function(e,t,r){"use strict";var o=r(1),a=r(4),n=r(0),i=(r(10),r(86)),p=r(32),c=r(19),s=n.forwardRef((function(e,t){var r=e.absolute,p=void 0!==r&&r,c=e.classes,s=e.className,l=e.component,d=void 0===l?"hr":l,u=e.flexItem,f=void 0!==u&&u,m=e.light,b=void 0!==m&&m,h=e.orientation,j=void 0===h?"horizontal":h,v=e.role,g=void 0===v?"hr"!==d?"separator":void 0:v,x=e.variant,O=void 0===x?"fullWidth":x,y=Object(a.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(d,Object(o.a)({className:Object(i.a)(c.root,s,"fullWidth"!==O&&c[O],p&&c.absolute,f&&c.flexItem,b&&c.light,"vertical"===j&&c.vertical),role:g,ref:t},y))}));t.a=Object(p.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)},421:function(e,t,r){"use strict";r.r(t);r(0);var o=r(68),a=r(79),n=r(246),i=r(363),p=r(230),c=r(395),s=r(392),l=r(231),d=r(2),u=Object(s.a)((function(e){return{footer:{paddingTop:e.spacing(4),paddingBottom:e.spacing(6)}}})),f=function(){var e=u(),t=Object(o.a)(),r=Object(a.a)(t.breakpoints.down("sm"));return Object(d.jsxs)(n.a,{children:[Object(d.jsx)(i.a,{style:{backgroundColor:t.palette.primary.main}}),Object(d.jsxs)(p.a,{className:e.footer,children:[r&&Object(d.jsx)(l.default,{mobile:!0}),Object(d.jsx)(c.a,{variant:"body2",color:"initial"})]})]})};t.default=f}}]);
//# sourceMappingURL=8.f2f032b2.chunk.js.map
(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{25:function(e,t){},36:function(e,t,n){},67:function(e,t){},68:function(e,t){},69:function(e,t){},70:function(e,t){},71:function(e,t){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(26),r=n.n(a),o=(n(36),n(27)),s=n(28),u=n(31),l=n(30),h=n(29),d=n.n(h),f=n(0),p="React.js PDF article",j="https://websitesetup.org/wp-content/uploads/2020/09/Javascript-Cheat-Sheet.pdf",v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handleEvent=function(e,t){console.log("Event has occurred, rendering pdf now"),c.setState({hasEventOccurred:!0,fileLink:"https://cors-anywhere.herokuapp.com/"+t,fileName:e})},c.state={hasEventOccurred:!1,fileName:"",fileLink:""},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("flutterInAppWebViewPlatformReady",(function(t){window.flutter_inappwebview.callHandler("fileDetailsHandler","test").then((function(t){e.handleEvent(t.name,t.link)}))}))}},{key:"render",value:function(){var e=this;return this.state.hasEventOccurred?Object(f.jsxs)("div",{children:[Object(f.jsxs)("h3",{children:["File Name : ",this.state.fileName]}),Object(f.jsx)(d.a,{document:{url:this.state.fileLink}})]}):Object(f.jsxs)("div",{onClick:function(){return e.handleEvent(p,j)},children:[Object(f.jsx)("h2",{children:" No event has occurred yet"}),Object(f.jsx)("h3",{children:"click to see sample change"})]})}}]),n}(i.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),b()}},[[77,1,2]]]);
//# sourceMappingURL=main.2bfcc979.chunk.js.map
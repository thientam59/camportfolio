(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/img1.45308dfb.jpg"},14:function(e,t,a){e.exports=a.p+"static/media/img2.5ec06c55.jpg"},15:function(e,t,a){e.exports=a.p+"static/media/img3.2dacbf2b.jpg"},16:function(e,t,a){e.exports=a.p+"static/media/img4.d2e93368.jpg"},19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(12),o=a.n(s),i=(a(24),a(32)),r=a(31),l=a(5),m=a(6),u=a(8),d=a(7),p=a(9),h=a(30),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.link,a=e.name,n=e.funcClick,s=e.active?"nav-item current":"nav-item";return c.a.createElement("li",{className:s},c.a.createElement(h.a,{to:t,className:"nav-link",onClick:n},a))}}]),t}(c.a.Component),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={showMenu:!1,tabActive:""},a.toggleMenu=function(e){var t=document.querySelector(".menu"),n=document.querySelector(".menu-btn"),c=document.querySelector(".menu-nav"),s=document.querySelector(".menu-branding"),o=document.querySelectorAll(".nav-item");a.state.showMenu?(n.classList.remove("close"),t.classList.remove("show"),c.classList.remove("show"),s.classList.remove("show"),o.forEach(function(e){return e.classList.remove("show")}),a.setState({showMenu:!1,tabActive:"closeMenu"!==e?e:a.state.tabActive})):(n.classList.add("close"),t.classList.add("show"),c.classList.add("show"),s.classList.add("show"),o.forEach(function(e){return e.classList.add("show")}),a.setState({showMenu:!0}))},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match;return c.a.createElement("header",null,c.a.createElement("div",{className:"menu-btn",onClick:function(){return e.toggleMenu("closeMenu")}},c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"})),c.a.createElement("nav",{className:"menu"},c.a.createElement("div",{className:"menu-branding"},c.a.createElement("div",{className:"portrait"})),c.a.createElement("ul",{className:"menu-nav"},c.a.createElement(f,{link:"".concat(t,"/"),name:"Home",funcClick:function(){return e.toggleMenu("")},active:""===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/about"),name:"About Me",funcClick:function(){return e.toggleMenu("about")},active:"about"===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/works"),name:"My Work",funcClick:function(){return e.toggleMenu("works")},active:"works"===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/contact"),name:"How To Reach Me",funcClick:function(){return e.toggleMenu("contact")},active:"contact"===this.state.tabActive}))))}}]),t}(c.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(u.a)(this,Object(d.a)(t).call(this,e)),document.querySelector("body").setAttribute("id","bg-img"),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{id:"home"},c.a.createElement("h1",{className:"lg-heading"},"Hiiam",c.a.createElement("span",{className:"text-secondary"},"Cam")),c.a.createElement("h2",{className:"sm-heading"},"Web Developer, Mobile App Developer, Programmer & Designer"),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-facebook fa-2x"})),c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-github fa-2x"})),c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-google fa-2x"}))))}}]),t}(n.Component),b=a(13),g=a.n(b),E=a(14),k=a.n(E),x=a(15),N=a.n(x),w=a(16),S=a.n(w),L=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.numSpan,a=e.funClick,n=[],s=function(e){var t=0===e?"btnNav btnNav1 active":"btnNav btnNav1";n.push(c.a.createElement("span",{className:t,onClick:function(){return a(e)},key:e}))},o=0;o<t;o++)s(o);return c.a.createElement("div",{id:"navigation"},n)}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.txtClips,a=e.imgAbout,n=e.backgroundPosition,s=e.idSld,o=e.active,i=e.location,r=e.tit1,l=e.tit2,m=e.children,u=o?"sld active":"sld";return c.a.createElement("div",{className:u,style:{backgroundImage:"url(".concat(a,")")}},c.a.createElement("div",{id:s,className:"txtClip",style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:n}},t),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"data"},c.a.createElement("span",{className:"location"},i),c.a.createElement("div",{className:"title-info"},c.a.createElement("span",{className:"tit1"},r),c.a.createElement("span",{className:"tit2"},l)),c.a.createElement("div",{className:"info"},m)))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={flag:1,activeSld:1},a.moveBackground=function(){document.querySelector("main").addEventListener("mousemove",function(e){var t=document.querySelector(".sld.active .txtClip"),n=a.state.activeSld,c=t.style,s=-1*e.pageX/20,o=-1*e.pageY/20,i=0,r=0;switch(n){case 1:default:case 2:i=-725,r=0;break;case 3:i=-1020,r=120;break;case 4:i=600,r=0}t.style.backgroundImage=c.backgroundImage,t.style.backgroundPositionX="".concat(s+i,"px"),t.style.backgroundPositionY="".concat(o+r,"px")})},a.clickBtnNavigator=function(e){var t=e+1;a.setState({flag:2,activeSld:t}),a.changeSlider(t),setTimeout(function(){a.setState({flag:1})},1e4)},a.changeSlider=function(e){var t=document.querySelectorAll("#navigation span"),a=document.querySelector("#navigation span:nth-child("+e+")");t.forEach(function(e){return e.classList.remove("active")}),a.classList.add("active");var n=document.querySelectorAll(".sld"),c=document.querySelector(".sld:nth-child("+e+")");n.forEach(function(e){return e.classList.remove("active")}),c.classList.add("active");var s=-100*(e-1);document.querySelector("#slider").setAttribute("style","left:".concat(s,"%"));var o=document.querySelectorAll(".data"),i=document.querySelectorAll(".txtClip"),r=document.querySelectorAll(".line");switch(e){case 0:case 2:default:o.forEach(function(e){return e.classList.add("left")}),i.forEach(function(e){return e.classList.add("left")}),r.forEach(function(e){return e.classList.add("left")});break;case 1:case 3:o.forEach(function(e){return e.classList.remove("left")}),i.forEach(function(e){return e.classList.remove("left")}),r.forEach(function(e){return e.classList.remove("left")})}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.moveBackground(),this.countdown=setInterval(function(){var t=e.state,a=t.flag,n=t.activeSld;if(1===a){var c=n===document.querySelectorAll("#navigation span").length?1:n+1;e.changeSlider(c),e.setState({activeSld:c})}},3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.countdown)}},{key:"render",value:function(){var e=this;return c.a.createElement("main",{id:"about"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"lg-heading"},"About ",c.a.createElement("span",{className:"text-secondary"},"Me")),c.a.createElement("h2",{className:"sm-heading"},"Let me tell you a few things...")),c.a.createElement("div",{className:"about-info"},c.a.createElement("div",{id:"slider"},c.a.createElement(j,{active:!0,txtClips:"H",imgAbout:g.a,backgroundPosition:"-725px 0px",idSld:"id1",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonado]",c.a.createElement("span",{className:"text-secondary"}," #Ronadinho"))),c.a.createElement(j,{txtClips:"I",imgAbout:k.a,backgroundPosition:"-725px 0px",idSld:"id2",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonado]",c.a.createElement("span",{className:"text-secondary"}," #Ronadinho"))),c.a.createElement(j,{txtClips:"A",imgAbout:N.a,backgroundPosition:"-1020px 120px",idSld:"id3",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonado]",c.a.createElement("span",{className:"text-secondary"}," #Ronadinho"))),c.a.createElement(j,{txtClips:"C",imgAbout:S.a,backgroundPosition:"-725px 0px",idSld:"id4",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text ever since the 1500s, When an unkown printer took a gallery of type and scrambled it to make a type specimen book."),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonado]",c.a.createElement("span",{className:"text-secondary"}," #Ronadinho")))),c.a.createElement(L,{numSpan:4,funClick:function(t){return e.clickBtnNavigator(t)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(function(){var e="/camportfolio";return c.a.createElement(i.a,null,c.a.createElement("div",{id:"warpper"},c.a.createElement(y,{match:e}),c.a.createElement(r.a,{exact:!0,path:e+"/",component:v}),c.a.createElement(r.a,{exact:!0,path:e+"/about",component:O}),c.a.createElement(r.a,{exact:!0,path:e+"/works",component:v}),c.a.createElement(r.a,{exact:!0,path:e+"/contact",component:O})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.86d8f8c0.chunk.js.map
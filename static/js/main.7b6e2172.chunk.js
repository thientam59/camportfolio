(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/img1.45308dfb.jpg"},14:function(e,t,a){e.exports=a.p+"static/media/img2.5ec06c55.jpg"},15:function(e,t,a){e.exports=a.p+"static/media/img3.2dacbf2b.jpg"},16:function(e,t,a){e.exports=a.p+"static/media/img4.d2e93368.jpg"},19:function(e,t,a){e.exports=a(29)},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),l=(a(24),a(32)),i=a(31),s=a(5),u=a(6),m=a(8),d=a(7),p=a(9),v=a(30),f=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.link,a=e.name,n=e.funcClick,o=e.active?"nav-item current":"nav-item";return c.a.createElement("li",{className:o},c.a.createElement(v.a,{to:t,className:"nav-link",onClick:n},a))}}]),t}(c.a.Component),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={showMenu:!1,tabActive:""},a.toggleMenu=function(e){var t=document.querySelector(".menu"),n=document.querySelector(".menu-btn"),c=document.querySelector(".menu-nav"),o=document.querySelector(".menu-branding"),r=document.querySelectorAll(".nav-item");a.state.showMenu?(n.classList.remove("close"),t.classList.remove("show"),c.classList.remove("show"),o.classList.remove("show"),r.forEach(function(e){return e.classList.remove("show")}),a.setState({showMenu:!1,tabActive:"closeMenu"!==e?e:a.state.tabActive})):(n.classList.add("close"),t.classList.add("show"),c.classList.add("show"),o.classList.add("show"),r.forEach(function(e){return e.classList.add("show")}),a.setState({showMenu:!0}))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match;return c.a.createElement("header",null,c.a.createElement("div",{className:"menu-btn",onClick:function(){return e.toggleMenu("closeMenu")}},c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"})),c.a.createElement("nav",{className:"menu"},c.a.createElement("div",{className:"menu-branding"},c.a.createElement("div",{className:"portrait"})),c.a.createElement("ul",{className:"menu-nav"},c.a.createElement(f,{link:"".concat(t,"/"),name:"Home",funcClick:function(){return e.toggleMenu("")},active:""===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/about"),name:"About Me",funcClick:function(){return e.toggleMenu("about")},active:"about"===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/works"),name:"My Work",funcClick:function(){return e.toggleMenu("works")},active:"works"===this.state.tabActive}),c.a.createElement(f,{link:"".concat(t,"/contact"),name:"How To Reach Me",funcClick:function(){return e.toggleMenu("contact")},active:"contact"===this.state.tabActive}))))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(s.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e)),document.querySelector("body").setAttribute("id","bg-img"),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{id:"home"},c.a.createElement("h1",{className:"lg-heading"},"Hiiam",c.a.createElement("span",{className:"text-secondary"},"Cam")),c.a.createElement("h2",{className:"sm-heading"},"Web Developer, Mobile App Developer, Programmer & Designer"),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-facebook fa-2x"})),c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-github fa-2x"})),c.a.createElement("a",{href:"#!"},c.a.createElement("i",{className:"fab fa-google fa-2x"}))))}}]),t}(n.Component),b=a(13),E=a.n(b),y=a(14),k=a.n(y),N=a(15),S=a.n(N),w=a(16),O=a.n(w),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.numSpan,a=e.funClick,n=[],o=function(e){var t=0===e?"btnNav btnNav1 active":"btnNav btnNav1";n.push(c.a.createElement("span",{className:t,onClick:function(){return a(e)},key:e}))},r=0;r<t;r++)o(r);return c.a.createElement("div",{id:"navigation"},n)}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.txtClips,a=e.imgAbout,n=e.backgroundPosition,o=e.active,r=e.location,l=e.tit1,i=e.tit2,s=e.children,u=o?"sld active":"sld";return c.a.createElement("div",{className:u,style:{background:"url(".concat(a,") no-repeat center center")}},c.a.createElement("div",{className:"txtClip",style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:n}},t),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"data"},c.a.createElement("span",{className:"location"},r),c.a.createElement("div",{className:"title-info"},c.a.createElement("span",{className:"tit1"},l),c.a.createElement("span",{className:"tit2"},i)),c.a.createElement("div",{className:"info"},s)))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={flag:1,activeSld:1},a.moveBackground=function(){document.querySelector("main").addEventListener("mousemove",function(e){var t=document.querySelector(".sld.active .txtClip"),n=a.state.activeSld,c=t.style,o=-1*e.pageX/20,r=-1*e.pageY/20,l=0,i=0;switch(n){case 1:case 2:case 4:default:l=-725,i=0;break;case 3:l=-1020,i=120}t.style.backgroundImage=c.backgroundImage,t.style.backgroundPositionX="".concat(o+l,"px"),t.style.backgroundPositionY="".concat(r+i,"px")})},a.clickBtnNavigator=function(e){var t=e+1;a.setState({flag:2,activeSld:t}),a.changeSlider(t),setTimeout(function(){a.setState({flag:1})},1e4)},a.changeSlider=function(e){var t=document.querySelectorAll("#navigation span"),a=document.querySelector("#navigation span:nth-child("+e+")");t.forEach(function(e){return e.classList.remove("active")}),a.classList.add("active");var n=document.querySelectorAll(".sld"),c=document.querySelector(".sld:nth-child("+e+")");n.forEach(function(e){return e.classList.remove("active")}),c.classList.add("active");var o=-100*(e-1);document.querySelector("#slider").setAttribute("style","left:".concat(o,"%"));var r=document.querySelectorAll(".data"),l=document.querySelectorAll(".txtClip"),i=document.querySelectorAll(".line");switch(e){case 0:case 2:default:r.forEach(function(e){return e.classList.add("left")}),l.forEach(function(e){return e.classList.add("left")}),i.forEach(function(e){return e.classList.add("left")});break;case 1:case 3:r.forEach(function(e){return e.classList.remove("left")}),l.forEach(function(e){return e.classList.remove("left")}),i.forEach(function(e){return e.classList.remove("left")})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.moveBackground(),this.countdown=setInterval(function(){var t=e.state,a=t.flag,n=t.activeSld;if(1===a){var c=n===document.querySelectorAll("#navigation span").length?1:n+1;e.changeSlider(c),e.setState({activeSld:c})}},3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.countdown)}},{key:"render",value:function(){var e=this;return c.a.createElement("main",{id:"about"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"lg-heading"},"About ",c.a.createElement("span",{className:"text-secondary"},"Me")),c.a.createElement("h2",{className:"sm-heading"},"Let me tell you a few things...")),c.a.createElement("div",{className:"about-info"},c.a.createElement("div",{id:"slider"},c.a.createElement(A,{active:!0,txtClips:"H",imgAbout:E.a,backgroundPosition:"-725px 0px",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"I was born and grown-up at Hue city."),c.a.createElement("p",null,"Summer 2013, after I graduated Applied Mathematics & Informatics, I'm worked for Sion company - A company outsources at Hue city."),c.a.createElement("p",null,"[ Joomla, Wordpress ... ]"),c.a.createElement("p",null,"[ PHP, MySQL - Website Developer ]"),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonaldo]",c.a.createElement("span",{className:"text-secondary"}," #Ronaldinho"))),c.a.createElement(A,{txtClips:"I",imgAbout:k.a,backgroundPosition:"-725px 0px",location:"HUE CITY",tit1:"FRONTEND",tit2:"GOSU HUE"},c.a.createElement("p",null,"Spring 2015, I started working for GOSU company - an online game company in Hue - I'm joined Website Technical team of the company, frontend."),c.a.createElement("p",null,"[ Codeigniter, vBulletin ... ]"),c.a.createElement("p",null,"[ HTML5, CSS3, PHP, MySQL - Website Developer, Designer ]"),c.a.createElement("p",{className:"hastag"},"[#notMARVEL, #notDC]",c.a.createElement("span",{className:"text-secondary"}," #LesMiserables"))),c.a.createElement(A,{txtClips:"A",imgAbout:S.a,backgroundPosition:"-1020px 120px",location:"HOCHIMINH CITY",tit1:"BACKEND, MOBILE APP DEVERLOPER",tit2:"GIHOT - GOSU HCM"},c.a.createElement("p",null,"Spring 2017, I moved to Ho Chi Minh City and joined GihOt Studio - Gosu."),c.a.createElement("p",null,"I take responsibility for:",c.a.createElement("br",null),"- Website GmTools Game: creating API for client Game and server Game, analyzing statistically game data, creating Crontab in Linux server to get log data game ...",c.a.createElement("br",null),"- Website PmTool & website LMS - managing information and tasks of GihOt",c.a.createElement("br",null),"- Create GihOt App: app for users play games of GihOt."),c.a.createElement("p",null,"[ PHP, MySQL, React Native, Nodejs, MongoDB - Website Developer, Mobile App Developer ]"),c.a.createElement("p",{className:"hastag"},c.a.createElement("span",{className:"text-secondary"},"#LeagueOfLegends[PlatinumV]"))),c.a.createElement(A,{txtClips:"C",imgAbout:O.a,backgroundPosition:"-725px 0px",location:"HOCHIMINH CITY",tit1:"",tit2:"START"},c.a.createElement("p",null,"I would like to work and develop more about Website as well as cross-platform Mobile App with ReactJS, React Native & NodeJS, MongoDB."),c.a.createElement("p",null,"I can go so fast, but I want to go so far."),c.a.createElement("p",null,"Contact me!"),c.a.createElement("p",{className:"hastag"},c.a.createElement("span",{className:"text-secondary"},"#QuangBinh #QuangTri #Hue #DaNang #QuangNam #PhanThiet #GiaLai #DaLat #NhaTrang #VungTau #HCM #PhuQuoc")))),c.a.createElement(C,{numSpan:4,funClick:function(t){return e.clickBtnNavigator(t)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(function(){var e="/camportfolio";return c.a.createElement(l.a,null,c.a.createElement("div",{id:"warpper"},c.a.createElement(h,{match:e}),c.a.createElement(i.a,{exact:!0,path:e+"/",component:g}),c.a.createElement(i.a,{exact:!0,path:e+"/about",component:j}),c.a.createElement(i.a,{exact:!0,path:e+"/works",component:g}),c.a.createElement(i.a,{exact:!0,path:e+"/contact",component:j})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.7b6e2172.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/img1.45308dfb.jpg"},function(e,t,a){e.exports=a.p+"static/media/img2.5ec06c55.jpg"},function(e,t,a){e.exports=a.p+"static/media/img3.2dacbf2b.jpg"},function(e,t,a){e.exports=a.p+"static/media/img4.d2e93368.jpg"},function(e,t,a){e.exports=a.p+"static/media/p1.60743008.gif"},function(e,t,a){e.exports=a.p+"static/media/p2.f4ed2818.png"},function(e,t,a){e.exports=a.p+"static/media/p3.ece7583b.gif"},function(e,t,a){e.exports=a.p+"static/media/p4.7f259ced.gif"},function(e,t,a){e.exports=a.p+"static/media/logo.59f4bb31.png"},,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),l=(a(30),a(38)),i=a(37),s=a(3),m=a(4),u=a(6),p=a(5),d=a(7),v=a(36),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.link,a=e.name,n=e.funcClick,r=e.active?"nav-item current":"nav-item";return c.a.createElement("li",{className:r},c.a.createElement(v.a,{to:t,className:"nav-link",onClick:n},a))}}]),t}(c.a.Component),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={showMenu:!1,tabActive:""},a.toggleMenu=function(e){var t=document.querySelector(".menu"),n=document.querySelector(".menu-btn"),c=document.querySelector(".menu-nav"),r=document.querySelector(".menu-branding"),o=document.querySelectorAll(".nav-item");a.state.showMenu?(n.classList.remove("close"),t.classList.remove("show"),c.classList.remove("show"),r.classList.remove("show"),o.forEach(function(e){return e.classList.remove("show")}),a.setState({showMenu:!1,tabActive:"closeMenu"!==e?e:a.state.tabActive})):(n.classList.add("close"),t.classList.add("show"),c.classList.add("show"),r.classList.add("show"),o.forEach(function(e){return e.classList.add("show")}),a.setState({showMenu:!0}))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match;return c.a.createElement("header",null,c.a.createElement("div",{className:"menu-btn",onClick:function(){return e.toggleMenu("closeMenu")}},c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"}),c.a.createElement("div",{className:"btn-line"})),c.a.createElement("nav",{className:"menu"},c.a.createElement("div",{className:"menu-branding"},c.a.createElement("div",{className:"portrait"})),c.a.createElement("ul",{className:"menu-nav"},c.a.createElement(E,{link:"".concat(t,"/"),name:"Home",funcClick:function(){return e.toggleMenu("")},active:""===this.state.tabActive}),c.a.createElement(E,{link:"".concat(t,"/about"),name:"About Me",funcClick:function(){return e.toggleMenu("about")},active:"about"===this.state.tabActive}),c.a.createElement(E,{link:"".concat(t,"/works"),name:"My Work",funcClick:function(){return e.toggleMenu("works")},active:"works"===this.state.tabActive}),c.a.createElement(E,{link:"".concat(t,"/contact"),name:"How To Reach Me",funcClick:function(){return e.toggleMenu("contact")},active:"contact"===this.state.tabActive}))))}}]),t}(c.a.Component),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{id:"home"},c.a.createElement("h1",{className:"lg-heading"},"Hiiam",c.a.createElement("span",{className:"text-secondary"},"Cam")),c.a.createElement("h2",{className:"sm-heading"},"Web Developer, Mobile App Developer, Programmer & Designer"),c.a.createElement("div",{className:"icons"},c.a.createElement("a",{href:"https://www.facebook.com/tam.vir",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-facebook fa-2x"})),c.a.createElement("a",{href:"https://github.com/thientam59/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-github fa-2x"})),c.a.createElement("a",{href:"mailto:tam.vir89@gmail.com",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-google fa-2x"}))))}}]),t}(n.Component),g=a(14),b=a.n(g),N=a(15),k=a.n(N),y=a(16),w=a.n(y),S=a(17),O=a.n(S),C=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.numSpan,a=e.funClick,n=[],r=function(e){var t=0===e?"btnNav btnNav1 active":"btnNav btnNav1";n.push(c.a.createElement("span",{className:t,onClick:function(){return a(e)},key:e}))},o=0;o<t;o++)r(o);return c.a.createElement("div",{id:"navigation"},n)}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.txtClips,a=e.imgAbout,n=e.backgroundPosition,r=e.active,o=e.location,l=e.tit1,i=e.tit2,s=e.children,m=r?"sld active":"sld";return c.a.createElement("div",{className:m,style:{background:"url(".concat(a,") no-repeat center center")}},c.a.createElement("div",{className:"txtClip",style:{backgroundImage:"url(".concat(a,")"),backgroundPosition:n}},t),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"data"},c.a.createElement("span",{className:"location"},o),c.a.createElement("div",{className:"title-info"},c.a.createElement("span",{className:"tit1"},l),c.a.createElement("span",{className:"tit2"},i)),c.a.createElement("div",{className:"info"},s)))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={flag:1,activeSld:1},a.moveBackground=function(){document.querySelector("main").addEventListener("mousemove",function(e){var t=document.querySelector(".sld.active .txtClip"),n=a.state.activeSld,c=t.style,r=-1*e.pageX/20,o=-1*e.pageY/20,l=0,i=0;switch(n){case 1:case 2:case 4:default:l=-725,i=0;break;case 3:l=-1020,i=120}t.style.backgroundImage=c.backgroundImage,t.style.backgroundPositionX="".concat(r+l,"px"),t.style.backgroundPositionY="".concat(o+i,"px")})},a.clickBtnNavigator=function(e){var t=e+1;a.setState({flag:2,activeSld:t}),a.changeSlider(t),setTimeout(function(){a.setState({flag:1})},1e4)},a.changeSlider=function(e){var t=document.querySelectorAll("#navigation span"),a=document.querySelector("#navigation span:nth-child("+e+")");t.forEach(function(e){return e.classList.remove("active")}),a.classList.add("active");var n=document.querySelectorAll(".sld"),c=document.querySelector(".sld:nth-child("+e+")");n.forEach(function(e){return e.classList.remove("active")}),c.classList.add("active");var r=-100*(e-1);document.querySelector("#slider").setAttribute("style","left:".concat(r,"%"));var o=document.querySelectorAll(".data"),l=document.querySelectorAll(".txtClip"),i=document.querySelectorAll(".line");switch(e){case 0:case 2:default:o.forEach(function(e){return e.classList.add("left")}),l.forEach(function(e){return e.classList.add("left")}),i.forEach(function(e){return e.classList.add("left")});break;case 1:case 3:o.forEach(function(e){return e.classList.remove("left")}),l.forEach(function(e){return e.classList.remove("left")}),i.forEach(function(e){return e.classList.remove("left")})}},a.goContact=function(){document.querySelector(".menu-btn").click(),setTimeout(function(){console.log(123),document.querySelector(".menu-nav .nav-item:nth-child(4) .nav-link").click()},1e3)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.moveBackground(),this.countdown=setInterval(function(){var t=e.state,a=t.flag,n=t.activeSld;if(1===a){var c=n===document.querySelectorAll("#navigation span").length?1:n+1;e.changeSlider(c),e.setState({activeSld:c})}},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.countdown)}},{key:"render",value:function(){var e=this;return c.a.createElement("main",{id:"about"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"lg-heading"},"About ",c.a.createElement("span",{className:"text-secondary"},"Me")),c.a.createElement("h2",{className:"sm-heading"},"Let me tell you a few things...")),c.a.createElement("div",{className:"about-info"},c.a.createElement("div",{id:"slider"},c.a.createElement(x,{active:!0,txtClips:"H",imgAbout:b.a,backgroundPosition:"-725px 0px",location:"HUE CITY",tit1:"BORN",tit2:"START"},c.a.createElement("p",null,"I was born and grown up in Hue city."),c.a.createElement("p",null,"In summer 2013, after graduating Applied Mathematics & Informatics, I'm worked for Sion company - A company outsources in Hue city."),c.a.createElement("p",null,"[ Joomla, Wordpress ... ]"),c.a.createElement("p",null,"[ PHP, MySQL - Website Developer ]"),c.a.createElement("p",{className:"hastag"},"[#notMessi, #notRonaldo]",c.a.createElement("span",{className:"text-secondary"}," #Ronaldinho"))),c.a.createElement(x,{txtClips:"I",imgAbout:k.a,backgroundPosition:"-725px 0px",location:"HUE CITY",tit1:"FRONTEND",tit2:"GOSU HUE"},c.a.createElement("p",null,"In spring 2015, I started working for GOSU company - an online game company in Hue - I'm joined Website Technical team of the company and work as a frontend."),c.a.createElement("p",null,"[ Codeigniter, vBulletin ... ]"),c.a.createElement("p",null,"[ HTML5, CSS3, PHP, MySQL - Website Developer, Designer ]"),c.a.createElement("p",{className:"hastag"},"[#notMARVEL, #notDC]",c.a.createElement("span",{className:"text-secondary"}," #LesMiserables"))),c.a.createElement(x,{txtClips:"A",imgAbout:w.a,backgroundPosition:"-1020px 120px",location:"HOCHIMINH CITY",tit1:"BACKEND, MOBILE APP DEVERLOPER",tit2:"GIHOT STUDIO - GOSU HCM"},c.a.createElement("p",null,"n spring 2017, I moved to Ho Chi Minh City and joined GihOt Studio - Gosu."),c.a.createElement("p",null,"I take responsibility for:",c.a.createElement("br",null),"- Website GmTools Game: creating API for clients and server, analyzing statistically game data, creating Crontab in Linux server to get log data game...",c.a.createElement("br",null),"- Website PmTool & website LMS - managing information and tasks of GihOt",c.a.createElement("br",null),"- GihOt App: app for users play games of GihOt."),c.a.createElement("p",null,"[ PHP, MySQL, ReactJS, React Native, Nodejs, MongoDB - Website Developer, Mobile App Developer ]"),c.a.createElement("p",{className:"hastag"},c.a.createElement("span",{className:"text-secondary"},"#LeagueOfLegends[PlatinumV]"))),c.a.createElement(x,{txtClips:"C",imgAbout:O.a,backgroundPosition:"-725px 0px",location:"HOCHIMINH CITY",tit1:"BE COMPANION",tit2:"TODAY, TOMORROW"},c.a.createElement("p",null,"I would like to work and develop more about Website as well as cross-platform Mobile App with ReactJS, React Native & NodeJS, MongoDB."),c.a.createElement("p",null,"I can go so fast, but I want to go so far."),c.a.createElement("p",null,c.a.createElement("span",{onClick:function(){return e.goContact()}},"Contact me.")),c.a.createElement("p",{className:"hastag"},c.a.createElement("span",{className:"text-secondary"},"#QuangBinh #QuangTri #Hue #DaNang #QuangNam #PhanThiet #GiaLai #DaLat #NhaTrang #VungTau #HCM #PhuQuoc")))),c.a.createElement(C,{numSpan:4,funClick:function(t){return e.clickBtnNavigator(t)}})))}}]),t}(n.Component),A=a(10),L=a(18),M=a.n(L),I=a(19),P=a.n(I),D=a(20),H=a.n(D),T=a(21),q=a.n(T),W=a(22),G=a.n(W),R=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={workActive:1},a.updateWindowDimensions=function(){var e=document.querySelector("#work");window.innerHeight+300>window.innerWidth?e.classList.add("wid"):e.classList.remove("wid")},a.setFrameActive=function(e){var t=a.state.workActive,n=1;n="pre"===e?1===t?4:t-1:4===t?1:t+1,a.showFrame(n),a.setState({workActive:n})},a.showFrame=function(e){var t=document.querySelector("#work .boxImg"),a=document.querySelectorAll("#work .boxImg .box"),n=document.querySelectorAll("#work .infoP .product"),c=document.querySelector("#work .boxImg .box:nth-child("+e+")"),r=document.querySelector("#work .infoP .product:nth-child("+e+")");a.forEach(function(e){return e.classList.remove("active")}),c.classList.add("active"),n.forEach(function(e){return e.classList.remove("active")}),r.classList.add("active");var o=-100*(e-1);t.setAttribute("style","top:".concat(o,"%"))},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(A.a)(Object(A.a)(a))),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"render",value:function(){var e=this;return c.a.createElement("main",{id:"work"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"lg-heading"},"My ",c.a.createElement("span",{className:"text-secondary"},"Work")),c.a.createElement("h2",{className:"sm-heading"},"Check out some of my projects...")),c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"imgP"},c.a.createElement("div",{className:"boxImg"},c.a.createElement("div",{className:"box active"},c.a.createElement("img",{src:M.a,alt:"project 1"})),c.a.createElement("div",{className:"box"},c.a.createElement("img",{src:P.a,alt:"project 2"})),c.a.createElement("div",{className:"box mobileR"},c.a.createElement("img",{src:H.a,alt:"project 3"})),c.a.createElement("div",{className:"box mobile"},c.a.createElement("img",{src:q.a,alt:"project 4"}))),c.a.createElement("img",{src:G.a,className:"logo",alt:"project logoName"})),c.a.createElement("div",{className:"infoP"},c.a.createElement("div",{className:"product p1 active"},c.a.createElement("div",{className:"pName"},"HOMEPAGE, INTRO & LANDING GAME"),c.a.createElement("p",{className:"pSkill"},"\u2665 html5, css3 (SCSS), Jquery, [responsive]"),c.a.createElement("p",{className:"pSkill"},"\u2665 PHP (Codeigniter), MySQL"),c.a.createElement("p",{className:"pDone"},"\u2606 [9+]Homepage, [22+]Intro Game, [69+]Landing Game"),c.a.createElement("p",{className:"pDone"},"\u2606"," ",c.a.createElement("a",{href:"https://nkvs2.gosu.vn/",target:"_blank",rel:"noopener noreferrer"},"Ng\u1ea1o Ki\u1ebfm V\xf4 Song II"),",",c.a.createElement("a",{href:"https://cuuam.gosu.vn/",target:"_blank",rel:"noopener noreferrer"},"C\u1eedu \xc2m Ch\xe2n Kinh"))),c.a.createElement("div",{className:"product p2"},c.a.createElement("div",{className:"pName"},"GMTOOL OF GAME"),c.a.createElement("p",{className:"pSkill"},"\u2665 HTML, CSS(SCSS), Jquery, [responsive]"),c.a.createElement("p",{className:"pSkill"},"\u2665 PHP (Codeigniter), MySQL, MongoDB"),c.a.createElement("p",{className:"pSkill"},"\u2665 Create API for Client and Server game, write Crontab in Linux server to get log data, ..."),c.a.createElement("p",{className:"pDone"},"\u2606 [4+]Gmtool of game"),c.a.createElement("p",{className:"pDone"},"\u2606 Private projects")),c.a.createElement("div",{className:"product p3"},c.a.createElement("div",{className:"pName"},"POS APP"),c.a.createElement("p",{className:"pSkill"},"\u2665 React Native, React JS"),c.a.createElement("p",{className:"pSkill"},"\u2665 NodeJS, MongoDB, Firebase"),c.a.createElement("p",{className:"pSkill"},"\u2665 Design Logo & App UI"),c.a.createElement("p",{className:"pDone"},"\u2606 Demo app of my project to learn React.")),c.a.createElement("div",{className:"product p4"},c.a.createElement("div",{className:"pName"},"ZIHOT APP"),c.a.createElement("p",{className:"pSkill"},"\u2665 React Native"),c.a.createElement("p",{className:"pSkill"},"\u2665 NodeJS, MongoDB"),c.a.createElement("p",{className:"pSkill"},"\u2665 Push Notification, Get data form API server, ..."),c.a.createElement("p",{className:"pDone"},"\u2606 Private project"))),c.a.createElement("div",{className:"next",onClick:function(){return e.setFrameActive("next")}},"\u2192"),c.a.createElement("div",{className:"pre",onClick:function(){return e.setFrameActive("pre")}},"\u2190")))}}]),t}(c.a.Component),B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{id:"contact"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"lg-heading"},"Contact ",c.a.createElement("span",{className:"text-secondary"},"Me")),c.a.createElement("h2",{className:"sm-heading"},"This is how you can reach me...")),c.a.createElement("div",{className:"boxs"},c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"text-secondary"},"Email: "),c.a.createElement("a",{href:"mailto:tam.vir89@gmail.com",target:"_blank",rel:"noopener noreferrer"},"tam.vir89@gmail.com")),c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"text-secondary"},"Phone: "),c.a.createElement("span",null,"+84 1635093277")),c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"text-secondary"},"Facebook: "),c.a.createElement("a",{href:"https://www.facebook.com/tam.vir",target:"_blank",rel:"noopener noreferrer"},"Tr\u1ea7n C\u1ea3nh Thi\u1ec7n T\xe2m")),c.a.createElement("div",{className:"item"},c.a.createElement("span",{className:"text-secondary"},"Skype: "),c.a.createElement("span",null,"thientam59"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(function(){var e="/camportfolio";return c.a.createElement(l.a,null,c.a.createElement("div",{id:"warpper"},c.a.createElement(f,{match:e}),c.a.createElement(i.a,{exact:!0,path:e+"/",component:h}),c.a.createElement(i.a,{exact:!0,path:e+"/about",component:j}),c.a.createElement(i.a,{exact:!0,path:e+"/works",component:R}),c.a.createElement(i.a,{exact:!0,path:e+"/contact",component:B})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.74d42383.chunk.js.map
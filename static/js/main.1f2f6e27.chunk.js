(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Ryu","clicked":false,"image":"http://wiki.shoryuken.com/images/6/6d/ORyu.png"},{"id":2,"name":"E. Honda","clicked":false,"image":"http://wiki.shoryuken.com/images/3/38/OEHonda.png"},{"id":3,"name":"Blanka","clicked":false,"image":"http://wiki.shoryuken.com/images/c/ce/OBlanka.png"},{"id":4,"name":"Guile","clicked":false,"image":"http://wiki.shoryuken.com/images/8/85/OGuile.png"},{"id":5,"name":"T. Hawk","clicked":false,"image":"http://wiki.shoryuken.com/images/b/b3/OTHawk.png"},{"id":6,"name":"Fei Long","clicked":false,"image":"http://wiki.shoryuken.com/images/a/a3/FeiLong.png"},{"id":7,"name":"Balrog","clicked":false,"image":"http://wiki.shoryuken.com/images/7/77/OBalrog.png"},{"id":8,"name":"Sagat","clicked":false,"image":"http://wiki.shoryuken.com/images/a/a9/OSagat.png"},{"id":9,"name":"Ken","clicked":false,"image":"http://wiki.shoryuken.com/images/c/ca/OKen.png"},{"id":10,"name":"Chun-Li","clicked":false,"image":"http://wiki.shoryuken.com/images/7/70/OChunLi.png"},{"id":11,"name":"Zangief","clicked":false,"image":"http://wiki.shoryuken.com/images/0/0e/OZangief.png"},{"id":12,"name":"Dhalsim","clicked":false,"image":"http://wiki.shoryuken.com/images/7/79/ODhalsim.png"},{"id":13,"name":"Cammy","clicked":false,"image":"http://wiki.shoryuken.com/images/4/48/OCammy.png"},{"id":14,"name":"Deejay","clicked":false,"image":"http://wiki.shoryuken.com/images/1/11/ODeeJay.png"},{"id":15,"name":"Vega","clicked":false,"image":"http://wiki.shoryuken.com/images/c/cc/OVega.png"},{"id":16,"name":"M. Bison","clicked":false,"image":"http://wiki.shoryuken.com/images/f/f3/OMBison.png"}]')},,,function(e,n,a){e.exports=a(18)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var i=a(0),t=a.n(i),c=a(2),o=a.n(c),r=(a(14),function(){return t.a.createElement("div",{className:"jumbotron jumbotron-fluid"},t.a.createElement("div",{className:"container text-center"},t.a.createElement("h1",{className:"display-4"},"React Clicky Game! Street Fighter Edition"),t.a.createElement("p",{className:"lead"},"Click on one of the fighters to earn points, but don't click on the same fighter more than once!")))}),s=a(3),l=a(4),m=a(7),g=a(5),d=a(8),u=(a(15),function(e){return t.a.createElement("div",{className:"allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},t.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),h=a(6),k=(a(16),function(e){function n(){var e,a;Object(s.a)(this,n);for(var i=arguments.length,t=new Array(i),c=0;c<i;c++)t[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(g.a)(n)).call.apply(e,[this].concat(t)))).state={images:h,message:"Click one of the fighters to begin!",score:0,topScore:0},a.handleClick=function(e,n){var i=a.state.images;if(n)return i.forEach((function(e,n){i[n].clicked=!1})),a.setState({image:i.sort((function(){return Math.random()-.5})),message:"You Guessed Incorrectly!",score:0});i.forEach((function(n,a){e===n.id&&(i[a].clicked=!0)}));var t=a.state,c=t.topScore,o=t.score+1,r=o>c?o:c;return a.setState({image:i.sort((function(){return Math.random()-.5})),message:"You Guessed Correctly!",score:o,topScore:r})},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return t.a.createElement("div",{className:"container-fluid mainCardContainer"},t.a.createElement("div",{className:"gameMessage text-center"},t.a.createElement("p",null,this.state.message)),t.a.createElement("div",{className:"gameScores text-center"},t.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore)),t.a.createElement("div",{className:"container",id:"cards-container"},t.a.createElement("div",{className:"row"},this.state.images.map((function(n){return t.a.createElement(u,{key:n.id,id:n.id,name:n.name,clicked:n.clicked,image:n.image,handleClick:e.handleClick})})))))}}]),n}(i.Component)),f=(a(17),function(){return t.a.createElement("div",{className:"container-fluid mainContainer"},t.a.createElement(r,null),t.a.createElement(k,null))}),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(t.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Clicky-game",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Clicky-game","/service-worker.js");p?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.1f2f6e27.chunk.js.map
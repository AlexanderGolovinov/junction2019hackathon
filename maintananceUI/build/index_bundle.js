!function(t){function e(e){for(var o,l,u=e[0],i=e[1],s=e[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);for(c&&c(e);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={0:0},a=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=i;a.push([49,1]),n()}({107:function(t,e,n){var o=n(108);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(47)(o,r);o.locals&&(t.exports=o.locals)},108:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"html,body{margin:0px;padding:0px}.flex-container{display:flex;flex-direction:row}.leaflet-container{width:100%;height:100vh}.alertContainer{background-color:white;width:200px;color:black}.alertContainer div{border:1px solid black}\n",""])},49:function(t,e,n){"use strict";var o=l(n(50)),r=l(n(14)),a=l(n(56));function l(t){return t&&t.__esModule?t:{default:t}}n(104),n(107),r.default.render(o.default.createElement(a.default,null),document.getElementById("app"))},56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=f(n(57)),r=f(n(62)),a=f(n(63)),l=f(n(67)),u=f(n(93)),i=n(1),s=f(i),c=n(109);function f(t){return t&&t.__esModule?t:{default:t}}var p=function(t){function e(t){(0,r.default)(this,e);var n=(0,l.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return n.state={focus:[60.1855949,24.8248988],lat:60.1855949,lng:24.8248988,zoom:15,markers:[{name:"test",lat:60.1859949,lng:24.8248988,Slots:10,emptySlots:4},{name:"test",lat:60.1895949,lng:24.8278988,Slots:15,emptySlots:22}]},n.focusOnStation=n.focusOnStation.bind(n),n}return(0,u.default)(e,t),(0,a.default)(e,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){console.log(e.coords),t.setState({lat:e.coords.latitude,lng:e.coords.longitude})}))}},{key:"focusOnStation",value:function(t){console.log(t)}},{key:"render",value:function(){var t=this,e=(this.state.lat,this.state.lng,this.state.markers.map((function(t,e){return s.default.createElement(c.Marker,{position:[t.lat,t.lng],key:e},s.default.createElement(c.Popup,null,"Name: ",t.name," ",s.default.createElement("br",null)," EmptySlots: ",t.emptySlots))}))),n=this.state.markers.map((function(e,n){return s.default.createElement("div",{key:n,onClick:t.focusOnStation([e.lat,e.lng])},s.default.createElement("p",null,"Name: ",e.name),s.default.createElement("p",null,"EmptySlots:",e.emptySlots))}));return s.default.createElement("div",{className:"flex-container"},s.default.createElement("div",{className:"alertContainer"},n),s.default.createElement(c.Map,{center:this.state.focus,zoom:this.state.zoom},s.default.createElement(c.TileLayer,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e))}}]),e}(i.Component);e.default=p}});
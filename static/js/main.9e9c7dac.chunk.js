(this["webpackJsonppics-react"]=this["webpackJsonppics-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=a(7),o=a.n(s),u=a(18),l=a(2),m=a(3),p=a(5),h=a(4),f=a(19),v=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID TXYl8_3gXxJy3gc4HGhYRiSwESEnJAqNPv1Ke5bXqw0"}}),g=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).setSpans=function(){var e=n.imageRef.current.clientHeight,t=Math.ceil(e/10);n.setState({spans:t})},n.state={spans:0},n.imageRef=r.a.createRef(),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),a}(r.a.Component)),b=function(e){var t=e.images.map((function(e){return r.a.createElement(g,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},d=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form",action:""},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:""},"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),a}(r.a.Component);a(43).config();var S=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(u.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),t.next=3,v.get("/search/photos",{params:{query:a}});case 3:n=t.sent,console.log(n),e.setState({images:n.data.results});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"20px"}},r.a.createElement(d,{onSubmit:this.onSearchSubmit}),r.a.createElement(b,{images:this.state.images}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9e9c7dac.chunk.js.map
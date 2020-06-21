(this.webpackJsonpsheworks=this.webpackJsonpsheworks||[]).push([[0],{127:function(e,t,a){e.exports=a(137)},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(66),o=a.n(l),i=a(7),c=a(1),u=(a(64),a(67)),s=a.n(u),d=a(68),m=a.n(d),h=a(69),p=a.n(h),E=a(70),y=a.n(E),f=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:s.a}),r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"what is sheworks?"),r.a.createElement("p",null,"sheworks is a web app that allows women to track their time spent on domestic labor.")),r.a.createElement("br",null),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:m.a}),r.a.createElement("p",null,"share how much time you spend on hard work with your loved ones, so they can help too.")),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:y.a}),r.a.createElement("p",null,"celebrate your accomplishments with your family & friends because you deserve it!")),r.a.createElement("div",{id:"container"},r.a.createElement("img",{src:p.a}),r.a.createElement("p",null,"empower yourself to appreciate your contributions, value your time, and do your best work.")))},g=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"About sheworks"),r.a.createElement("h3",null,"Have you ever read Melinda Gates' book, Moment Of Lift?"),r.a.createElement("p",null,"She talks about this topic of unpaid labor where women usually do alot of unpaid labor like housework, taking care of their kids, making food etc. And because of this they are put in a state where it's much more difficult for them to find time and energy to actually put effort into working on improving themselves, whether that be getting a job, education or exploring their own interest etc."),r.a.createElement("p",null,"Sheworks can help them track their unpaid labor each day. We remind them that they too also have the right to improve themselves and should be valued for their work.")))},b=a(10),v=a(11),k=a(13),w=a(12),H=a(2),O=function(e){Object(k.a)(a,e);var t=Object(w.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=this.props.width,t=this.props.height,a=this.props.margin,n=Math.min(e,t)/2-a,r=H.l("#donut_time").append("svg").attr("width",e).attr("height",t).append("g").attr("transform","translate("+e/2+","+t/2+")"),l={Father:27,Mother:44,Older_Sister:24,Younger_Sister:10,Older_Brother:20,Younger_Brother:6},o=H.j().domain(l).range(H.k),i=H.h().sort(null).value((function(e){return e.value}))(H.d(l)),c=H.a().innerRadius(.5*n).outerRadius(.8*n),u=H.a().innerRadius(.9*n).outerRadius(.9*n);r.selectAll("allSlices").data(i).enter().append("path").attr("d",c).attr("fill",(function(e){return o(e.data.key)})).attr("stroke","white").style("stroke-width","2px").style("opacity",.7),r.selectAll("allPolylines").data(i).enter().append("polyline").attr("stroke","black").style("fill","none").attr("stroke-width",1).attr("points",(function(e){var t=c.centroid(e),a=u.centroid(e),r=u.centroid(e),l=e.startAngle+(e.endAngle-e.startAngle)/2;return r[0]=.95*n*(l<Math.PI?1:-1),[t,a,r]})),r.selectAll("allLabels").data(i).enter().append("text").text((function(e){return e.data.value})).attr("transform",(function(e){var t=u.centroid(e),a=e.startAngle+(e.endAngle-e.startAngle)/2;return t[0]=.99*n*(a<Math.PI?1:-1),"translate("+t+")"})).style("text-anchor",(function(e){return e.startAngle+(e.endAngle-e.startAngle)/2<Math.PI?"start":"end"}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"donut_time"})}}]),a}(n.Component),A=function(e){Object(k.a)(a,e);var t=Object(w.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){document.addEventListener("DOMContentLoaded",(function(e){var t=10,a=50,n=50,r=60,l=460-r-a,o=400-t-n,i=H.l("#my_dataviz").append("svg").attr("width",l+r+a).attr("height",o+t+n).append("g").attr("transform","translate("+r+","+t+")"),c=[{days:"1",id:"1",Hours:1},{days:"2",id:"1",Hours:2},{days:"3",id:"1",Hours:1.5},{days:"4",id:"1",Hours:1},{days:"5",id:"1",Hours:2},{days:"6",id:"1",Hours:1.5},{days:"7",id:"1",Hours:1.5},{days:"1",id:"2",Hours:6},{days:"2",id:"2",Hours:5},{days:"3",id:"2",Hours:7},{days:"4",id:"2",Hours:3},{days:"5",id:"2",Hours:4},{days:"6",id:"2",Hours:2},{days:"7",id:"2",Hours:5},{days:"1",id:"3",Hours:2},{days:"2",id:"3",Hours:1},{days:"3",id:"3",Hours:.1},{days:"4",id:"3",Hours:4},{days:"5",id:"3",Hours:.5},{days:"6",id:"3",Hours:.75},{days:"7",id:"3",Hours:.5}],u=H.g().key((function(e){return e.id})).entries(c),s=H.i().domain([1,H.f(c,(function(e){return e.days}))]).range([0,l]);i.append("g").attr("transform","translate(0,"+o+")").call(H.b(s).ticks(3));var d=H.i().domain([0,H.f(c,(function(e){return+e.Hours}))]).range([o,0]);i.append("g").call(H.c(d));var m=u.map((function(e){return e.key})),h=H.j().domain(m).range(H.k);i.selectAll(".line").data(u).enter().append("path").attr("fill","none").attr("stroke",(function(e){return h(e.key)})).attr("stroke-width",5).attr("d",(function(e){return H.e().x((function(e){return s(e.days)})).y((function(e){return d(+e.Hours)}))(e.values)}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"my_dataviz"})}}]),a}(n.Component),x=function(e){Object(k.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={width:450,height:500,margin:40},e}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",null,r.a.createElement("h1",null,"Daily"),r.a.createElement(O,{width:this.state.width,height:this.state.height,margin:this.state.margin})),r.a.createElement("div",null,r.a.createElement("h1",null,"Weekly"),r.a.createElement(A,null)),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("h1",null,"Family Members"),r.a.createElement("ul",null,r.a.createElement("li",{style:{background:"#2AB290"}},"Father"),r.a.createElement("li",{style:{background:"#F17B3C"}},"Mother"),r.a.createElement("li",{style:{background:"#7B68B4"}},"Older Sister"),r.a.createElement("li",{style:{background:"#FF3D96"}},"Younger Sister"),r.a.createElement("li",{style:{background:"#87B858"}},"Older Brother"),r.a.createElement("li",{style:{background:"#F4B644"}},"Younger Brother"))))}}]),a}(r.a.Component),j=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"Family"),r.a.createElement("p",null,"This is your family"),r.a.createElement("h2",null,"Father"),r.a.createElement("h2",null,"Mother"),r.a.createElement("h2",null,"Older Sister"),r.a.createElement("h2",null,"Younger Sister"),r.a.createElement("h2",null,"Older Brother"),r.a.createElement("h2",null,"Yonger Brother")))},B=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"container"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Let's login!"),r.a.createElement("form",null,r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit"))))},M=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"No match"))},_=function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("ul",null,r.a.createElement("h1",null,"sheworks"),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},"home")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/about"},"about")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/time"},"time")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/family"},"family")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/login"},"login"))))};var F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(_,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:f}),r.a.createElement(c.a,{path:"/about",component:g}),r.a.createElement(c.a,{path:"/time",component:x}),r.a.createElement(c.a,{path:"/family",component:j}),r.a.createElement(c.a,{path:"/login",component:B}),r.a.createElement(c.a,{component:M}))))};o.a.render(r.a.createElement(F,null),document.getElementById("root"))},64:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/sheworks_logo_wo_tag.cbeaac25.png"},68:function(e,t,a){e.exports=a.p+"static/media/6.6fd20b81.png"},69:function(e,t,a){e.exports=a.p+"static/media/7.967b8ffa.png"},70:function(e,t,a){e.exports=a.p+"static/media/8.848d0395.png"}},[[127,1,2]]]);
//# sourceMappingURL=main.5686af1a.chunk.js.map
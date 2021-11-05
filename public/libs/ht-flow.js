!function(s){"use strict";var f=s.ht,P=f.Default,W=P.getInternal(),M=W.ui(),T=null,X="__segmentLengths",S="__lineTotalLength",d="__linePoints",L="__distance0",m="flow.count",$="flow.step",U="flow.element.max",A="flow.element.count",v="flow.element.min",E="flow.element.space",g="flow.element.autorotate",F="flow.element.background",V="flow.element.shadow.max",J="flow.element.shadow.min",Y="flow.element.shadow.begincolor",l="flow.element.shadow.endcolor",C="flow.element.shadow.visible",j="flow.element.image",I="flow",k=f.Math.Vector2,B=new k;new k,new k,f.List;var i=f.Default._edgeProtectMethod,h=i.getStraightLinePoints,u=function(x,T){for(var _=[],Z=x.length,Q=0;Z>Q;Q++){var l=x[Q];l._as&&(l=l._as);for(var h=l[0],Y=1;Y<l.length;Y++)_.push([h,l[Y]]),h=l[Y]}for(var G=[],Q=0;Q<_.length;Q++){var W=r(_[Q][0],_[Q][1],T);G.push(W)}return{distance:G,segments:_}},Q=function(K,e,g){if(K){for(var p,V=u(K,e),m=V.distance,d=V.segments,W=1/0,q=null,r=0,x=m.length;x>r;r++){var $=m[r];$.z<W&&(p=r,W=$.z,q=$)}if(null==g&&(g=.1),q.z<g){for(var G=0,a=0;p>=a;a++)G+=P.getDistance(d[a][0],p>a?d[a][1]:q);return G}}},r=function(L,i,q){var k=L.x,K=L.y,l=i.x,F=i.y,s=q.x,U=q.y,f=l-k,b=F-K,E=Math.sqrt(f*f+b*b),d=f/E,J=b/E,I=(-k+s)*d+(-K+U)*J,B={x:k+I*d,y:K+I*J};return B.x>=Math.min(L.x,i.x)&&B.x<=Math.max(L.x,i.x)&&B.y>=Math.min(L.y,i.y)&&B.y<=Math.max(L.y,i.y)||(B.x=Math.abs(B.x-L.x)<Math.abs(B.x-i.x)?L.x:i.x,B.y=Math.abs(B.y-L.y)<Math.abs(B.y-i.y)?L.y:i.y),f=s-B.x,b=U-B.y,B.z=Math.sqrt(f*f+b*b),B},R=function(N,r){if(N){var j=u(N,r).distance,Y=1/0,v=null;return j.forEach(function(p){p.z<Y&&(Y=p.z,v=p)}),v}},G=i.calculateLineLength,D=i.calcSegmentIndexByDistance,N=i.calculatePointAlongLine,K=function(F,p,k){if(!F)return k;if(0===p){var X=F[0][0],U=F[0][1];return k+Math.atan2(U.y-X.y,U.x-X.x)}if(100===p){F=F[F.length-1];var X=F[F.length-2],U=F[F.length-1];return k+Math.atan2(U.y-X.y,U.x-X.x)}for(var O=0,v=[],g=F.length,w=0;g>w;w++){var W=F[w],o=G(W);O+=o,v.push(o)}for(var T=O*p/100,q=D(T,v),d=0,j=0;q>j;j++)d+=v[j];T-=d;for(var m=N(F[q],T),H=F[q],Q=0,A=0,I=0;I<H.length-1;I++){var n=H[I],Y=H[I+1],z=Y.x-n.x,M=Y.y-n.y,l=Math.sqrt(z*z+M*M);if(Q+=l,Q>T){A=I;break}}var $=H[A];return k+Math.atan2(m.y-$.y,m.x-$.x)},O=function(V){var t=0;if(V)if(Array.isArray(V[0]))for(var K=V.length,X=0;K>X;X++){var l=V[X],Z=G(l);t+=Z}else t=G(V);return t},q=function(H,r,x,y){return B.set(r,x).rotateAround(null,y),H?{x:H.x+B.x,y:H.y+B.y}:{x:B.x,y:B.y}},_=function(t){var N=t._data,H=h(t);if(H){N.s("flow.reverse")&&(H.reverse(),H.forEach(function($){$.reverse()}));for(var j=0,a=[],Y=H.length,D=0;Y>D;D++){var Q=H[D],v=G(Q);j+=v,a.push(v)}if(N[X]=a,N[S]=j,N[d]=H,N instanceof f.Edge){var l=P.unionPoint(H),x=l.x+l.width/2,V=l.y+l.height/2;N.$10e={x:x,y:V}}n(t,!0)}},c=i.getPercentPosition,n=function(y,Y){var q=y._data,p=q[S],i=q.s(m),w=q.s($),D=0,K=q[X],J=q.s(U),G=q.s(v),P=q.s(A),z=(J-G)/(P-1),C=[];if(K){if(1===P)C.push(J);else if(2===P)C.push(J),C.push(G);else{if(!(P>2))return;C.push(J);for(var f=P-2;f>0;f--)C.push(G+z*f);C.push(G)}var k=0,M=0;C.forEach(function(t){P-1>k&&(M+=q.getFlowElementSpace(t)),k++}),M+=(J+G)/2,D=(p-i*M+M)/i;var x=y[L];for(null==x&&(x=0),Y||(x+=w);x>p+M;){var j=y._overCount;j?j++:j=1,j>=i&&(j=null),y._overCount=j,q.s("flow.autoreverse")?j?x-=D+M:(x=0,q.s("flow.reverse",!q.s("flow.reverse"))):x-=D+M}y[L]=x}},H="prototype",z=f.graph.GraphView[H],w=f.Data[H],b=M.DataUI[H],e=M.ShapeUI[H],y=M.EdgeUI[H],p=f.DataModel[H],t=f.Style;t[U]==T&&(t[U]=7),t[v]==T&&(t[v]=0),t[m]==T&&(t[m]=1),t[$]==T&&(t[$]=3),t[A]==T&&(t[A]=10),t[E]==T&&(t[E]=3.5),t[g]==T&&(t[g]=!1),t[F]==T&&(t[F]="rgba(255, 255, 114, 0.4)"),t[Y]==T&&(t[Y]="rgba(255, 255, 0, 0.3)"),t[l]==T&&(t[l]="rgba(255, 255, 0, 0)"),t[C]==T&&(t[C]=1),t[V]==T&&(t[V]=22),t[J]==T&&(t[J]=4),z.calculatePointLength=function(f,L,o){var U=this.getDataUI(f),g=h(U);return Q(g,L,o)},P.calculatePointLength=function(Y,r,d,n){var l=h(T,Y,r);return Q(l,d,n)},P.calculateClosestPointOnLine=r,z.calculateClosestPoint=function(J,v){var H=this.getDataUI(J),K=h(H);return R(K,v)},P.calculateClosestPoint=function($,O,k){var w=h(T,$,O);return R(w,k)},z.getPercentAngle=function(J,Z){var r=this.getDataUI(J),z=h(r);return J.getRotation?J.getRotation():0,K(z,Z,J.getRotation?J.getRotation():0)},P.getPercentAngle=function(N,f,n){var L=h(T,N,f);return K(L,n,0)},z.calculateLength=function(Q){var M=this.getDataUI(Q),$=h(M);return O($)},P.calculateLength=function(y,v){var s=h(T,y,v);return O(s)},z.getPercentPosition=function(W,O){var i=this.getDataUI(W),Q=h(i);return c(Q,O)},P.getPercentPositionOnPoints=function(z,C,Y){var X=h(T,z,C);return c(X,Y)};var o=function(m){var j=m.data,Y=this.dm();if(j&&"add"===m.kind){var e=Y.$3e;e&&j.s(I)&&e.indexOf(j)<0&&e.push(j)}"clear"===m.kind&&(Y.$3e=[])},Z=function(Z){var K=Z.property,G=Z.data,c=Z.newValue,E=this.dm().$3e;if(E&&"s:flow"===K)if(c)E.indexOf(G)<0&&E.push(G);else for(var L=E.length,O=0;L>O;O++)if(E[O]===G){E.splice(O,1);break}},x=z.setDataModel;z.setDataModel=function(N){var c=this,W=c._dataModel;if(W!==N){W&&(W.umm(o,c),W.umd(Z,c),W.$3e=[]),N.mm(o,c),N.md(Z,c);var C=N.$3e=[];N.each(function(K){K.s(I)&&C.indexOf(K)<0&&C.push(K)}),x.call(c,N)}},w.getFlowElementSpace=function(){return this.s(E)};var a=function(O){var Y=this,s=Y._data,p=s[S],u=s[X],H=s[d],W=s.s(m),C=0,b=Y[L],a=s.s(U),h=s.s(v),j=s.s(A),x=s.s(J),Z=s.s(V),o=s.s(g),n=(Z-x)/(j-1),e=(a-h)/(j-1),Q=s.getRotation?s.getRotation():0,f=s.getPosition?s.p():s.$10e,t=[],k=[];if(b!=T){if(1===j)t.push(a);else if(2===j)t.push(a),t.push(h);else{if(!(j>2))return;t.push(a);for(var E=j-2;E>0;E--)t.push(h+e*E);t.push(h)}if(1===j)k.push(Z);else if(2===j)k.push(Z),k.push(x);else{if(!(j>2))return;k.push(Z);for(var E=j-2;E>0;E--)k.push(x+n*E);k.push(x)}var R=0,l=0;t.forEach(function(a){j-1>R&&(l+=s.getFlowElementSpace(a)),R++}),l+=(a+h)/2,C=(p-W*l+l)/W,O.save();for(var E=0;W>E;E++){var P=b,r=0,K=Y._overCount,y=0;s.s("flow.autoreverse")&&K&&K>W-(E+1)||(P-=E*(C+l),R=0,t.forEach(function(U){var i=P-r;if(i>=0&&p>i){var B=!0,w=D(i,u);y=0;for(var l=0;w>l;l++)y+=u[l];if(i-=y,B){var x=N(H[w],i),d=Q;if(o){for(var L=H[w],$=0,z=0,T=0;T<L.length-1;T++){var j=L[T],m=L[T+1],G=m.x-j.x,I=m.y-j.y,F=Math.sqrt(G*G+I*I);if($+=F,$>i){z=T;break}}var _=L[z];d+=Math.atan2(x.y-_.y,x.x-_.x)}Q&&(x=q(f,x.x-f.x,x.y-f.y,Q)),Y.$5e(O,x,U,k[R],d)}}r+=s.getFlowElementSpace(t[R]),R++}))}O.restore()}},hd=y._80o;y._80o=function(R){hd.call(this,R);var i=this,C=i._data,H=i.gv;C.s(I)&&H.$7e!=T&&a.call(i,R)};var op=e._80o;e._80o=function(C){op.call(this,C);var h=this,w=h._data,e=h.gv;w.s(I)&&e.$7e!=T&&a.call(h,C)};var Yb=y._79o,vf=e._79o,wo=function(){var s=this,b=s._data,m=b.s(U),A=!1,F=T;if(s._6I||(A=!0),F=b instanceof f.Edge?Yb.call(s):vf.call(s),b.s(I)&&A){var H=b.s(V),J=b.s(C);J&&H>m&&(m=H),m>0&&P.grow(F,Math.ceil(m/2)),_(s)}return!b.s(I)&&A&&(b[X]=b[S]=b[d]=s[L]=T),F};e._79o=wo,y._79o=wo,b.$5e=function(G,g,k,s,J){var A=this,V=A._data,M=A.gv,o=V.s(F),U=V.s(Y),x=V.s(l),X=V.s(C),u=M.$8e,v=V.s(j);if(u==T&&(u=M.$8e={}),G.beginPath(),v!=T){var $=P.getImage(v),n=k/2;G.translate(g.x,g.y),G.rotate(J),G.translate(-g.x,-g.y),P.drawImage(G,$,g.x-n,g.y-n,k,k,V),G.translate(g.x,g.y),G.rotate(-J),G.translate(-g.x,-g.y)}else if(M.__flowBatch){var I=M.__flowBatchGroup;I||(I=M.__flowBatchGroup={});var E=[g.x,g.y,k/2];I[o]?I[o].push(E):I[o]=[E]}else G.fillStyle=o,G.arc(g.x,g.y,k/2,0,2*Math.PI,!0),G.fill();if(X){var h=22,i=h+"_"+U+"_"+x,Q=u[i];if(Q==T){var w=document.createElement("canvas");W.setCanvas(w,h,h);var R=w.getContext("2d"),f=h/2,p=f,H=f;W.translateAndScale(R,0,0,1),R.beginPath();var m=R.createRadialGradient(p,H,0,p,p,f);m.addColorStop(0,U),m.addColorStop(1,x),R.fillStyle=m,R.arc(p,H,f,0,2*Math.PI,!0),R.fill(),Q=u[i]=w}var n=s/2;P.drawImage(G,Q,g.x-n,g.y-n,s,s,V)}},z.$9e=function(){var O=this,o=O.dm().$3e;O._24I,o.forEach(function(u){O._24I[u._id]=u}),O.iv()};var Ee=p.prepareRemove;p.prepareRemove=function(J){Ee.call(this,J);var H=J._dataModel,B=H.$3e;if(B)for(var c=B.length,G=0;c>G;G++)if(B[G]===J){B.splice(G,1);break}},z.setFlowInterval=function(g){var k=this,_=k.$11e;k.$11e=g,k.fp("flowInterval",_,g),k.$7e!=T&&(clearInterval(k.$7e),delete k.$7e,k.enableFlow(g))},z.getFlowInterval=function(){return this.$11e},z.enableFlow=function(i){var Z=this,f=Z.dm(),B=f.$3e;Z.$7e==T&&(B.forEach(function($){var j=Z.getDataUI($);_(j)}),Z.$7e=setInterval(function(){f.$3e.forEach(function(N){n(Z.getDataUI(N))}),Z.$9e()},i||Z.$11e||50))},z.disableFlow=function(){var E=this;clearInterval(E.$7e),delete E.$7e;var t=E.dm().$3e;t&&E.$9e()};var Pe=function(){this.__flowBatchGroup={}},Ef=function(o){var j=this.__flowBatchGroup;if(j){o.save();for(var D in j){o.fillStyle=D,o.beginPath();var Z=j[D];Z.forEach(function(I){o.moveTo(I[0],I[1]),o.arc(I[0],I[1],I[2],0,2*Math.PI,!0)}),o.fill()}o.restore()}};z.setFlowBatch=function(g){var o=this;!!o.__flowBatch!=!!g&&(o.__flowBatch=g,g?(o.addBottomPainter(Pe),o.addTopPainter(Ef)):(o.removeBottomPainter(Pe),o.removeTopPainter(Ef)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);
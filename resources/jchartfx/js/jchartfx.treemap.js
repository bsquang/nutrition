(function(){var m=window.cfx,e=window.sfx,h={Version:"7.2.5289.19355"};m.treemap=h;h.TreeMapLayout={Naive:0,Squarified:1};var n=function f(){f._ic();this.d=this.g=null;this.j=this.h=0;this.f=null;this._0_1()};h.TreeMap=n;n.prototype={_0_1:function(){this.setLayout(1);this.e=!1;this.n();return this},getLayout:function(){return this.h},setLayout:function(f){this.h=f;switch(this.h){case 0:this.g=(new o)._0dP();break;case 1:this.g=(new p)._0dO()}},getRandomLocations:function(){return this.e},setRandomLocations:function(f){this.e=
f},getTemplate:function(){return null==this.d?null:this.d.v()},setTemplate:function(f){null==this.d&&(this.d=(new m.vector._Zt)._0_Zt());this.d.sv(f)},o:function(f,l,b){if(this.j!=f.c&&!b){l=new e.U;this.j=f.c;if(null==this.f||this.f.length==f.d)this.f=Array(f.d);for(b=0;b<f.d;b++)this.f[b]=l.c(2)}},reset:function(){},icX:function(){return 1},icY:function(){return 142762241},icW:function(f,e){switch(e){case 4:return 1;default:return null}},icZ:function(f,l,b){l=b.m_bDetecting;f.a=1;f.b=0;var a=new m.bh;
b.bp(a);var a=b.a.b.iaI(),c=!1;l?(b.C=1,b.e=0,b.n=0,b.q=a):b.e=b.n;var d=(new q)._01dM(b,a);this.e&&this.o(d,b,l);this.g.b(d,b);for(var k=b.R,i=new e.e,j=0;j<a;j++){b.az();d.f=e.a.d(b.I);d.g=d.f/d.h;this.e&&(d.e=0!=this.f[j]);b.e==b.q?d.b._cf(d.a):this.g.c(d);if(0!=d.f)if(d.c-=d.c*d.g,d.h-=d.f,b.au(b.d,b.e,!1),b.P(!0),b.aA(b.d,b.e),l){if(b.c.idR(b.z,d.b),b.c.idB(b.p,d.b),b.detectCheck()){c=!0;break}}else{var g=e.d.r(d.b);k&&(g.w*=b.aW,g.h*=b.aW,g.x+=(d.b.w-g.w)/2,g.y+=(d.b.h-g.h)/2);if(null!=this.d&&
!e.b.p(this.d.v())){for(var h=this.d.id().Sb();!0==h.SI();)this.d.m(h.SK(),b,this,g);this.l(b,this.d,e.d.r(d.b)._nc())}else b.c.idS(b.z,g),b.c.idC(b.p,g);if(b.b.a.b){switch(b.b.a.h){case 0:i.x=g.x;break;case 2:i.x=g.g();break;case 1:i.x=e.i(g.x+g.g(),2)}switch(b.b.a.f){case 0:i.y=g.y;break;case 2:i.y=g.c();break;case 1:i.y=e.i(g.y+g.c(),2)}b.aY(i._nc(),!1,null)}}b.at(0,1)}this.g.d(d,b);c?(f.b=0,f.a=f.b):(b.an-=a-1,b.e=b.q,null!=this.d&&this.d._dispose1(!1))},n:function(){if(void 0!=m._Zt){var f=m.vector.eO.h("TreeMap",
!0);null!=f&&this.setTemplate(f)}},l:function(f,e,b){var a=1;2==f.m_highlightState&&(a=0.25);e.r(f.c,b,a,0)}};n._dt("CWTT",e.Sy,0,m.icV);var q=function l(){l._ic();this.g=0;this.b=new e.c;this.f=0;this.e=!1;this.c=this.d=0;this.a=new e.c;this.h=0};q.prototype={_i1:function(e,b){this.a._cf(e.m);this.h=e.L;this.d=b;this.b._i();this.c=this.a.w*this.a.h;this.f=this.g=0;this.e=!0},_i:function(){this.g=0;this.b._i();this.f=0;this.e=!1;this.c=this.d=0;this.a._i();this.h=0},_01dM:function(e,b){this._i1(e,
b);return this}};q._dt("CWTT",e.W,0);h=function b(){b._ic()};h.prototype={_0dN:function(){return this},d:function(){},b:function(){}};h._dt("CWTT",e.Sy,0);var p=function a(){a._ic();this.e=this.k=this.g=this.l=this.r=0;this.n=null;this.h=!1;this.i=this.m=this.j=this.p=this.q=this.f=0};p.prototype={_0dO:function(){this._bc._0dN.call(this);return this},v:function(a,c,d){this.m=this.j;for(var k=0,i=0;i<c;i++,a++)var j=this.t(a,i,c),j=e.a.o(j/d,d/j),k=e.a.o(j,k);return k},d:function(){this.n=null},u:function(a,
c){this.j=c.w>c.h?c.h:c.w;var d=e.D.c,k=1,i=0;this.f=this.i=0;for(var j=a;j<this.q;j++,k++){var g=this.o(j);this.i+=g;var i=this.r*this.i/this.j,h=this.v(a,k,i);if(1>h||h>d){this.i-=g;k--;break}this.f=e.a.k(i);d=h}return k},t:function(a,c,d){var a=this.o(a),h=0;c==d-1?h=this.m:(h=e.a.k(this.j*(a/this.i)),this.m-=h);return h},o:function(a){a=this.n.getItem(this.p,a);return a=1.0E108==a||e.D.h(a)?0:e.a.d(a)},c:function(a){var c=a.a.w>a.a.h;this.g-this.k>=this.l&&(this.k=this.g,this.h=a.e,this.l=this.u(this.g,
a.a),c?(a.b.w=this.f,this.h?(this.e=a.a.y,a.b.x=a.a.x):(this.e=a.a.c(),a.b.x=a.a.g()-this.f)):(a.b.h=this.f,this.h?(this.e=a.a.x,a.b.y=a.a.y):(this.e=a.a.g(),a.b.y=a.a.c()-this.f)),this.m=this.j);var d=this.t(this.g,this.g-this.k,this.l);c?(a.b.h=d,this.h?(a.b.y=this.e,this.e+=d):(this.e-=d,a.b.y=this.e)):(a.b.w=d,this.h?(a.b.x=this.e,this.e+=d):(this.e-=d,a.b.x=this.e));this.g++;if(this.g-this.k>=this.l||this.g==a.d-1)c?(a.a.w-=this.f,this.h&&(a.a.x+=this.f)):(a.a.h-=this.f,this.h&&(a.a.y+=this.f))},
b:function(a,c){this.p=c.d;this.n=c.a.b.iaP();this.r=a.c/a.h;this.q=a.d;this.k=this.l=this.g=0}};p._dt("CWTT",h,0);var o=function c(){c._ic()};o.prototype={_0dP:function(){this._bc._0dN.call(this);return this},c:function(c){c.b.sf(c.a.f());c.a.w>c.a.h?(c.b.h=c.a.h,c.b.w=c.a.w*c.g,c.e?c.a.x+=c.b.w:c.b.x=c.a.g()-c.b.w,c.a.w-=c.b.w):(c.b.w=c.a.w,c.b.h=c.a.h*c.g,c.e?c.a.y+=c.b.h:c.b.y=c.a.c()-c.b.h,c.a.h-=c.b.h)}};o._dt("CWTT",h,0)})();

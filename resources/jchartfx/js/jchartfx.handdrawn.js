(function(){var z=window.cfx,b=window.sfx,G={Version:"7.2.5289.19355"};z.handdrawn=G;var f=function(){};f.j=function(b,q,h,m,k,i,o,j,a){i=f.i(m/2,i,o);q+=m/2;h+=k/2;for(k=0;k<i.length;k++)i[k].x=i[k].x+q+f.c(j,a),i[k].y=i[k].y+h+f.c(j,a);b.j(i);return i[i.length-1]};f.d=function(r,q,h,m,k,i,o){var j=m-q,a=k-h,c=b.a.d(j),a=b.a.d(a),g=0,d=0,e=0,p=0;20>c||20>a?0!=j?(g=q,d=h+f.b(i,o),e=q,p=h+f.b(i,o)):(g=q+f.b(i,o),d=h,e=q+f.b(i,o),p=h):(g=(2*q+m)/3,d=(2*h+k)/3,e=(q+2*m)/3,p=(h+2*k)/3,j=f.c(i,1.5*o),
i=f.c(i,1.5*o),c>a?(d+=j,p+=i):(g+=j,e+=i));r.i(q,h,g,d,e,p,m,k)};f.i=function(r,q,h){0>q&&(q+=360);var q=q*b.a.c/180,h=h*b.a.c/180,m=q+h,k=!1;0>h&&(h=q,q=m,m=h,k=!0);var h=2*b.a.c,i=b.a.c/2;0>q&&(q+=h,m+=h);for(var o=q,j=b.a.k(o/i),m=b.a.p(h,m-q),a=1,c=m;1.0E-5<c;){var g=o+b.a.p(c,i),d=b.a.k(g/i);j!=d&&(g=i*(j+1));a+=3;c-=g-o;o=g;j=d}var c=b.f._ca(a),o=q,j=b.a.k(o/i),q=r*b.a.i(o),e=r*b.a.t(o),p=0,n=0;k?(n=a-1,p=-1):(n=0,p=1);c[n].x=q;c[n].y=e;for(n+=p;1.0E-5<m;)g=o+b.a.p(m,i),d=b.a.k(g/i),j!=d&&
(g=i*(j+1)),k=r*b.a.i(g),a=r*b.a.t(g),o=g-o,n=f.m(r,o,j,q,e,k,a,c,n,p),m-=o,g>=h&&(d=g=0),o=g,j=d,q=k,e=a;return c};f.m=function(f,q,h,m,k,i,o,j,a,c){var g=1,d=1;3==h?d=-1:2==h?d=g=-1:1==h&&(g=-1);0.01>b.a.d(q-b.a.c/2)?(m=0.552285*f,3==h||1==h?(j[a].x=m*g,j[a].y=f*d,a+=c,j[a].x=f*g,j[a].y=m*d):(j[a].x=f*g,j[a].y=m*d,a+=c,j[a].x=m*g,j[a].y=f*d)):(f=m*m+k*k,h=f+m*i+k*o,f=4/3*(b.a.u(2*f*h)-h)/(m*o-k*i),j[a].x=m-f*k,j[a].y=k+f*m,a+=c,j[a].x=i+f*o,j[a].y=o-f*i);a+=c;j[a].x=i;j[a].y=o;return a+c};f.g=function(r,
q,h,m,k,i,o,j){var a=(new b.aA)._0aA();f.j(a,r,q,h,m,k,i,o,j);return a};f.l=function(r,q,h,m,k,i){var o=(new b.aA)._0aA(),j=b.f._ca(13);j[0]._i1(h,m/2);j[1]._i1(f.a(1,k,i,h),f.a(0.775,k,i,m));j[2]._i1(f.a(0.775,k,i,h),f.a(1,k,i,m));j[3]._i1(f.a(0.5,k,i,h),f.a(1,k,i,m));j[4]._i1(f.a(0.225,k,i,h),f.a(1,k,i,m));j[5]._i1(f.a(0,k,i,h),f.a(0.775,k,i,m));j[6]._i1(f.a(0,k,i,h),f.a(0.5,k,i,m));j[7]._i1(f.a(0,k,i,h),f.a(0.225,k,i,m));j[8]._i1(f.a(0.225,k,i,h),f.a(0,k,i,m));j[9]._i1(f.a(0.5,k,i,h),f.a(0,k,i,
m));j[10]._i1(f.a(0.775,k,i,h),f.a(0,k,i,m));j[11]._i1(f.a(1,k,i,h),f.a(0.225,k,i,m));j[12]._i1(h,m/2);for(h=0;h<j.length;h++)j[h].x+=r,j[h].y+=q;o.j(j);return o};f.f=function(r,q,h,m,k,i,o){var j=(new b.aA)._0aA(),a=0,c=!0;5>b.a.d(r-h)?c=70<b.a.d(q-m):5>b.a.d(q-m)&&(c=70<b.a.d(r-h));c&&(a=f.c(k,o),f.c(k,o));f.d(j,r,q,h+a,m+a,k,i);return j};f.e=function(r,q,h){r.hasArcs=!1;var m=r.c();if(0==m.length)return r;for(var r=r.d(),k=(new b.aA)._0aA(),i=m[0]._nc(),o=0,o=0==r[0]?1:0;o<r.length;){var j=m[o]._nc(),
a=r[o]&15;if(1==a||0==a)f.d(k,i.x,i.y,j.x,j.y,q,h),o++,i._cf(j);else if(3==a){var a=m[o+1]._nc(),c=m[o+2]._nc();j.x+=f.b(q,h);j.y+=f.b(q,h);a.x+=f.b(q,h);a.y+=f.b(q,h);c.x+=f.b(q,h-0.5);c.y+=f.b(q,h-0.5);k.i(i.x,i.y,j.x,j.y,a.x,a.y,c.x,c.y);i._cf(c);o+=3}else 4==a&&(a=m[o+1],c=m[o+2],i._cf(f.j(k,j.x,j.y,a.x,a.y,c.x,c.y,q,h)),o+=3)}0!=(r[r.length-1]&128)&&k.B();return k};f.k=function(r,q,h,m,k,i,o,j){if(h<=j)return f.f(r,q,r,q+m,k,i,0);if(m<=j)return f.f(r,q,r+h,q,k,i,0);var j=b.a.p(h/2,o+k.d()*i),
a=b.a.p(h/2,o+k.d()*i),c=b.a.p(h/2,o+k.d()*i),g=b.a.p(h/2,o+k.d()*i),d=b.a.p(m/2,o+k.d()*i),e=b.a.p(m/2,o+k.d()*i),p=b.a.p(m/2,o+k.d()*i),n=b.a.p(m/2,o+k.d()*i),o=(new b.aA)._0aA(),l=b.f._ca(25);l[0]._i1(0,d);l[1]._i1(0,d/2);l[2]._i1(j/2,0);l[3]._i1(j,0);l[4]._i1(h/2,f.b(k,i));l[5]._i1(h/2,f.b(k,i));l[6]._i1(h-a,0);l[7]._i1(h-a/2,0);l[8]._i1(h,e/2);l[9]._i1(h,e);l[10]._i1(f.a(1,k,i,h),m/2);l[11]._i1(f.a(1,k,i,h),m/2);l[12]._i1(h,m-n);l[13]._i1(h,m-n/2);l[14]._i1(h-g/2,m);l[15]._i1(h-g,m);l[16]._i1(h/
2,f.a(1,k,i,m));l[17]._i1(h/2,f.a(1,k,i,m));l[18]._i1(c,m);l[19]._i1(c/2,m);l[20]._i1(0,m-p/2);l[21]._i1(0,m-p);l[22]._i1(f.b(k,i),m/2);l[23]._i1(f.b(k,i),m/2);l[24]._i1(0,d);for(h=0;h<l.length;h++)l[h].x+=r,l[h].y+=q;o.j(l);return o};f.c=function(b,f){return b.d()*2*f-f};f.a=function(b,f,h,m){var k=f.d();1!=f.b()%3&&(k*=-1);return m*b+k*h};f.b=function(b,f){var h=b.d();1!=b.b()%3&&(h*=-1);return h*f};var w=function q(){q._ic();this.a=this.i=0;this.d=!1;this.e=this.f=null};w.prototype={_0dO:function(){this.b=
new b.c;return this},sg:function(b){this.f=b.b()},sj:function(b){this.e=b.m()},l:function(){},h:function(b){this.b.x=b.x;this.b.y=b.y;this.b.w=b.w;this.b.h=b.h}};w._dt("CWHR",b.Sy,0);var D=function h(){h._ic();this.m=this.p=null;this.o=0;this.n=null;this.q=this.r=0};D.prototype={_0dP:function(){this._bc._0dO.call(this);this.u=new b.d;return this},sv:function(b){this.p=b.k()},st:function(h){this.m=new b.at;this.m.sb(h.b());this.m.sd(h.d())},k:function(b,f,k){1<=k&&(0==this.o?b.idH(this.n,this.p,this.f,
this.r,this.q,this.m):1==this.o&&b.idF(this.n,this.p,this.f,this.u,this.m))}};D._dt("CWHR",w,0);var E=function m(){m._ic();this.m=this.n=0};E.prototype={_0dQ:function(){this._bc._0dO.call(this);this.d=!0;return this},k:function(b){switch(this.n){case 0:b.side(this.m)}}};E._dt("CWHR",w,0);var F=function k(){k._ic()};F.prototype={_0dR:function(f,i,o){this._bc._0dO.call(this);this.m=new b.d;this.m._cf(f);this.a=1;null!=i?(this.sg(i),this.d=!0):this.sj(o);return this},l:function(b,f){0==this.b.w&&this.h(this.m);
f._cf(this.b)},k:function(b){null!=this.e?b.idC(this.e,this.m):b.idS(this.f,this.m)}};F._dt("CWHR",w,0);var B=function i(){i._ic()};B.prototype={_0dS:function(b,f,j){this._bc._0dO.call(this);this.m=b.A();null!=f?(this.sg(f),this.a=1,this.d=!0):(this.sj(j),this.a=this.m.c().length,this.d=50<this.a);return this},l:function(b,f){0==this.b.w&&this.h(this.m.C());f._cf(this.b)},k:function(f,o){var j=this.m;if(o<this.a)for(var j=(new b.aA)._0aA(),a=this.m.d(),c=this.m.c(),g=0,d=(new b.f)._01e(0,0),e=new b.f;g<
o;g++){var p=a[g];e._cf(c[g]);0==p?d._cf(e):1==p?(j.q(d,e),d._cf(e)):3==p&&(p=c[g+2],j.h(d,e,c[g+1],p),d._cf(p),g+=2)}null!=this.e?f.idu(this.e,j):f.idN(this.f,j);j!=this.m&&j._d()}};B._dt("CWHR",w,0);var C=function o(){o._ic();this.m=null};C.prototype={_0dT:function(b){this._bc._0dO.call(this);this.d=!0;null!=b&&(this.m=b.b());return this},l:function(b,j){null!=this.m&&(0==this.b.w&&this.h(this.m.c(b)),j._cf(this.b))},k:function(b){b.sida(this.m)}};C._dt("CWHR",w,0);var H=function j(){j._ic();this.j=
this.k=this.l=null;this.i=0;this.h=!1;this.c=this.g=0};H.prototype={_0dU:function(j){this.a=(new b._L)._0_L();this.b=j;this.f=this.d=-1;return this},ic_:function(){throw new b.T;},idb:function(){return this.j},sidb:function(b){this.j=b},ide:function(){return this.g},side:function(b){this.g=b;var a=(new E)._0dQ();a.n=0;a.m=b;this.a.Si(a)},idc:function(){return this.k},sidc:function(b){this.k=b},idd:function(){return this.b.idd()},sidd:function(b){this.b.sidd(b)},ida:function(){return this.l},sida:function(b){this.l=
b;this.a.Si((new C)._0dT(b))},idf:function(){throw new b.T;},sidf:function(){throw new b.T;},idG:function(b,a,c,g,d,e){var f=(new D)._0dP();f.n=b;f.sv(a);f.sg(c);f.st(e);f.r=g;f.q=d;this.a.Si(f);this.b.idG(b,a,c,g,d,e)},e:function(b,a){var c=(new F)._0dR(a,b,null);this.c+=c.a;this.a.Si(c)},_d:function(){throw new b.T;},idW:function(b){return this.b.idW(b)},id1:function(){throw new b.T;},idZ:function(){throw new b.T;},idX:function(b,a){return this.b.idX(b,a)},idP:function(){throw new b.T;},idQ:function(){throw new b.T;
},idR:function(f,a){this.e(f,b.d.r(a))},idV:function(){throw new b.T;},idS:function(b,a){this.e(b,a)},idN:function(b,a){var c=(new B)._0dS(a,b,null);this.c+=c.a;this.a.Si(c)},idl:function(){throw new b.T;},idz:function(){throw new b.T;},idy:function(){throw new b.T;},idw:function(){throw new b.T;},idx:function(){throw new b.T;},idA:function(){throw new b.T;},idB:function(){throw new b.T;},idC:function(){throw new b.T;},idu:function(b,a){var c=(new B)._0dS(a,null,b);this.c+=c.a;this.a.Si(c)},idY:function(){throw new b.T;
},renderToolBarCommand:function(){throw new b.T;},id2:function(){throw new b.T;},id0:function(){throw new b.T;},idm:function(){throw new b.T;},idn:function(){throw new b.T;},idO:function(){throw new b.T;},ido:function(){throw new b.T;},idp:function(){throw new b.T;},idv:function(){throw new b.T;},idF:function(b,a,c,g,d){var e=(new D)._0dP();e.n=b;e.sv(a);e.sg(c);e.st(d);e.u._cf(g);e.o=1;this.a.Si(e);this.b.idF(b,a,c,g,d)},idT:function(f,a,c,g,d){this.e(f,(new b.d)._02c(a,c,g,d))},idL:function(){throw new b.T;
},idM:function(){throw new b.T;},idU:function(f,a,c,g,d){this.e(f,(new b.d)._02c(a,c,g,d))},ids:function(){throw new b.T;},idj:function(){throw new b.T;},idD:function(){throw new b.T;},idE:function(){throw new b.T;},idt:function(){throw new b.T;},idk:function(){throw new b.T;},idi:function(){throw new b.T;},idH:function(b,a,c,g,d,e){this.idG(b,a,c,g,d,e)},idI:function(){throw new b.T;},idJ:function(){throw new b.T;},idK:function(){throw new b.T;},idg:function(){throw new b.T;},idh:function(){throw new b.T;
},idq:function(){throw new b.T;},idr:function(){throw new b.T;},n:function(b,a){var c=1<=b;this.f=-1;if(-1!=this.d){var g=this.d+1;if(g<this.a.Se()){var d=this.c*b,e=this.a.So(g);if(!(10>e.a)&&c&&(this.i+e.a>d||c))c=e,-1!=e.i&&(c=this.a.So(e.i)),c.l(this.b.idd(),a),this.f=g}}},m:function(f,a){if(!this.h){this.h=!0;for(var c=this.a.Se(),g=0,d=0;d<c;d++){var e=this.a.So(d);e.d||(d!=g&&(this.a.Sn(d),this.a.Sl(g,e)),g++)}g=-1;for(d=0;d<c;d++)e=this.a.So(d),b.V.E(e,C)?g=d:e.i=g}for(var c=0,d=this.c*a,
g=0,p=this.a.Sb();!0==p.SI();){e=p.SK();e.k(f,d-c,a);c+=e.a;if(c>d)break;this.d=g;this.i=c;g++}}};H._dt("CWHR",b.Sy,0,z.ic$,b.Su);w=function a(){a._ic();this.v=null;this.B=0;this.y=this.a=this.z=this.r=this.t=this.u=this.A=null;this.q=!1;this.i=null;this._0_1()};G.HandDrawn=w;w.prototype={_0_1:function(){this.b=new b.U;this.e=this.d=this.c=3;this.g=!0;this.j=4;this.h=0.25;this.k=20;return this},idb:function(){return this.y},sidb:function(a){this.y=a;this.z.CH(a)},idc:function(){return this.A},sidc:function(a){this.q=
!1;"number"==typeof a&&(a=null);this.A=a;var c=b.V.C(a,z.ieR);null!=c&&"Border"==c.ieS(2)&&(this.q=!0);this.z.CO(a)},getFillStrokeAngle:function(){return this.k},setFillStrokeAngle:function(a){this.k=a;this.f()},getFillStrokeCurvePercentage:function(){return this.h},setFillStrokeCurvePercentage:function(a){this.h=a;this.f()},getFillStrokeThickness:function(){return this.j},setFillStrokeThickness:function(a){this.j=a;this.f()},getFillWithStrokes:function(){return this.g},setFillWithStrokes:function(a){this.g=
a;this.f()},ic_:function(){var a=1;this.g&&(a|=128);this.z.st&&(a|=8);return a|52},ide:function(){return this.a.ide()},side:function(a){this.a.side(a)},idd:function(){return this.z},sidd:function(a){this.z=a;this.a=(new z.bp)._0bp(a)},ida:function(){return this.a.ida()},sida:function(a){this.a.sida(a)},idf:function(){return this.a.idf()},sidf:function(a){this.a.sidf(a)},getMessiness:function(){return this.e},setMessiness:function(a){this.e=a;this.f()},getRandomness:function(){return this.c},setRandomness:function(a){this.c=
a;this.f()},getStrokeOffsetRandomness:function(){return this.d},setStrokeOffsetRandomness:function(a){this.d=a;this.f()},o:function(){var a=(new b.aA)._0aA();a.Z=!1;return a},I:function(a,c,g,d,e,p,n){var l=this.e,v=this.c;if(10>=d||10>=e)v=l=2;for(var s=0,s=1>=l&&0==this.d?1:b.a.o(l,1),l=0;l<s;l++){var u=f.g(c,g,d,e,p,n,this.b,v);this.a.idu(a,u);u._d()}},H:function(a,c,g,d,e){var p=this.e,n=this.c;if(10>=d||10>=e)n=p=2;for(var l=0,l=1>=p&&0==this.d?1:b.a.o(p,1),p=0;p<l;p++){var v=f.l(c,g,d,e,this.b,
n);this.a.idu(a,v);v._d()}},G:function(a,c,g,d,e){for(var p=0,p=1>=this.e&&0==this.d?1:b.a.o(this.e,1),n=0;n<p;n++){var l=f.f(c,g,d,e,this.b,this.c,this.d);this.a.idu(a,l);l._d()}},n:function(a,c,g){if(1>=this.e&&0==this.d){for(var d=this.o(),e=c[0]._nc(),p=1;p<c.length;p++){var n=c[p]._nc();f.d(d,e.x,e.y,n.x,n.y,this.b,this.c);e._cf(n)}g&&(n=c[0]._nc(),f.d(d,e.x,e.y,n.x,n.y,this.b,this.c));this.a.idu(a,d);d._d()}else for(var l=b.a.o(this.e,1),p=0;p<l;p++){for(var d=this.o(),e=c[0]._nc(),v=-1,s=1;s<
c.length;)n=c[s]._nc(),f.d(d,e.x,e.y,n.x,n.y,this.b,this.c),e._cf(n),s++,s<c.length&&(0<this.d&&3<=s-v&&0.7<this.b.d())&&(this.a.idu(a,d),d._d(),d=this.o(),e.x+=f.c(this.b,this.d),e.y+=f.c(this.b,this.d),v=s);g&&(n=c[0]._nc(),f.d(d,e.x,e.y,n.x,n.y,this.b,this.c));this.a.idu(a,d);d._d()}},m:function(a,c,g,d,e){for(var p=this.e,n=0,n=1>=p&&0==this.d?1:b.a.o(p,1),p=0;p<n;p++){var l=f.k(c,g,d,e,this.b,this.c,0,1);this.a.idu(a,l);l._d()}},F:function(a,c,b,d,e){c=f.g(c,b,d,e,0,360,this.b,this.c);this.E(a,
c,c);c._d()},K:function(a,c){var b=f.e(c,this.b,this.c);this.E(a,c,b);b._d()},E:function(a,c,g){var d=!0;if(this.g){c.hasArcs=!1;var e=c.c();0!=e.length&&(c=c.d(),e=this.C(e,c),this.p(a,e.x,e.y,e.w,e.h)&&(d=this.a.ida(),this.a.sida((new b.aq)._01aq(g)),this.x(a,e.x,e.y,e.w,e.h,this.b),this.a.sida(d),d=!1))}d&&this.a.idN(a,g)},D:function(a,c){var g=this.J(c);if(this.g){var d=this.C(c,null);if(this.p(a,d.x,d.y,d.w,d.h)){var e=this.a.ida();this.a.sida((new b.aq)._01aq(g));this.x(a,d.x,d.y,d.w,d.h,this.b);
this.a.sida(e);return}}g=f.e(g,this.b,this.c);this.a.idN(a,g);g._d()},l:function(a,c,b,d,e,f){this.p(a,c,b,d,e)?this.x(a,c,b,d,e,f):this.a.idU(a,c,b,d,e)},x:function(a,c,g,d,e,p){if(!(0==d||0==e)){var n=this.j,l=this.k,v=null;if(4>e)l=0,n=1,null==this.u&&(this.u=this.w(0)),v=this.u;else if(4>d)l=90,n=1,null==this.r&&(this.r=this.w(90)),v=this.r;else{if(l!=this.B||null==this.t)this.t=this.w(l);v=this.t}a=(new b.ao)._02ao(a,n);a.si(2);for(var c=c+0.6*n,d=d-1.6*n,s=c,u=g+2*n,w=c+d,e=g+(e-n),t=0,x=0,
y=0,A=0,z=!0,D=v.length,B=this.o(),A=y=0,C=0.8*n,E=0.6*n,F=n,H=0!=this.h&&1!=this.h,G=1==this.h,J=0,K=0;800>K;K++){x=p.b()%D;if(z){t=s+d;x=u-d*v[x];x<g&&(y=(x-u)/(t-s),A=u-y*s,x=g,t=(g-A)/y);t>w&&(y=(x-u)/(t-s),A=u-y*s,t=w,x=y*t+A);var y=t,A=x,I=this.b.d();0.15>I?t=t+E+this.b.d()*C:0.85>I&&(t-=this.b.d()*C)}else t=s-d,x=u+d*v[x],t<c&&(y=(x-u)/(t-s),A=u-y*s,t=c,x=y*t+A),x>e&&(y=(x-u)/(t-s),A=u-y*s,x=e,t=(x-A)/y),y=t,A=x,I=this.b.d(),0.15>I?t-=E+this.b.d()*C:0.85>I&&(t+=this.b.d()*C);if(x>=e&&t>=w&&
0!=J)break;H&&(G=p.d()<this.h);G?f.d(B,s,u,t,x,this.b,this.c):B.t(s,u,t,x);J++;s=y;u=A;z?(t=1.2*n*this.b.d(),1>t&&(t=1),u+=t):(y>=t&&(u+=1.2*n*this.b.d()),s+=this.b.d()*(n-1));z=!z;if(b.a.d(u-e)<F&&b.a.d(s-w)<F)break;if(0==l&&u>e)break}this.a.idu(a,B);B._d();a._d()}},C:function(a,c){var g=0,d=0,e=0,p=0,n=0;null==c||4!=c[0]?(g=a[0].x,e=a[0].y,d=g,p=e,n=1):(g=e=b.C.b,d=p=b.C.c,n=0);for(;n<a.length;n++){var l=a[n]._nc();if(null!=c&&4==c[n]){var v=a[n+1],s=a[n+2],u=v.x/2,w=l.x+u,v=l.y+v.y/2,s=f.i(u,s.x,
s.y);w<g&&(g=w);w>d&&(d=w);v<e&&(e=v);v>p&&(p=v);for(u=0;u<s.length;u++)(l._cf(s[u]),l.x+=w,l.y+=v,l.x<g?g=l.x:l.x>d&&(d=l.x),l.y<e)?e=l.y:l.y>p&&(p=l.y);l.x=w;l.y=v;n+=2}l.x<g?g=l.x:l.x>d&&(d=l.x);l.y<e?e=l.y:l.y>p&&(p=l.y)}return(new b.d)._02c(g,e,d-g,p-e)},_d:function(){},ic9:function(a){0==a||null==this.i?this.i=(new H)._0dU(this.a):this.i.m(this.a,a);1>a&&(this.a=this.i)},_iCommands:function(){return!0},icr:function(a){this.v=b.V.C(a,z.iQ);return!0},ics:function(){return null},idW:function(a){return this.a.idW(a)},
id1:function(a,c){this.a.id1(a,c)},idZ:function(a,c){this.a.idZ(a,c)},ic8:function(a,c){this.i.n(a,c)},idX:function(a,c){return this.a.idX(a,c)},idP:function(a,c){this.D(a,c)},idQ:function(a,c){this.D(a,c)},idR:function(a,c){this.l(a,c.x,c.y,c.w,c.h,this.b)},idV:function(a,c){this.a.idV(a,c)},idS:function(a,c){this.l(a,c.x,c.y,c.w,c.h,this.b)},idN:function(a,c){this.K(a,c)},idl:function(a,c){this.a.idl(a,c)},idy:function(a,c){for(var b=c.length,d=1;d<b;d++)this.a.ids(a,c[d-1].x,c[d-1].y,c[d].x,c[d].y);
this.a.ids(a,c[b-1].x,c[b-1].y,c[0].x,c[0].y)},idw:function(a,c){this.n(a,c,!0)},idz:function(a,c){this.n(a,c,!1)},idA:function(a,c){this.n(a,c,!1)},idx:function(a,c){this.n(a,c,!0)},idB:function(a,c){this.m(a,c.x,c.y,c.w,c.h)},idC:function(a,c){this.m(a,c.x,c.y,c.w,c.h)},idu:function(a,c){for(var g=this.e,d=0,d=1>=g&&0==this.d?1:b.a.o(g,1),g=0;g<d;g++){var e=f.e(c,this.b,this.c);this.a.idu(a,e);e._d()}},idY:function(a,c){this.a.idY(a,c)},renderToolBarCommand:function(){},id2:function(a,c,b){this.a.id2(a,
c,b)},id0:function(a,c,b){this.a.id0(a,c,b)},idm:function(a,c,b){this.a.idm(a,c,b)},idn:function(a,c,b){this.a.idn(a,c,b)},idO:function(a,c,b,d){this.a.idO(a,c,b,d)},ido:function(a,c,b,d){this.a.ido(a,c,b,d)},idp:function(a,c,b,d){this.a.idp(a,c,b,d)},idv:function(a,c,b,d){this.a.idv(a,c,b,d)},idF:function(a,c,b,d,e){this.a.idF(a,c,b,d,e)},idT:function(a,c,b,d,e){this.l(a,c,b,d,e,this.b)},idL:function(a,c,b,d,e){this.F(a,c,b,d,e)},idU:function(a,c,b,d,e){this.l(a,c,b,d,e,this.b)},idM:function(a,c,
b,d,e){this.F(a,c,b,d,e)},ids:function(a,c,b,d,e){this.G(a,c,b,d,e)},idj:function(a,c,b,d,e){this.H(a,c,b,d,e)},idD:function(a,c,b,d,e){this.m(a,c,b,d,e)},idt:function(a,c,b,d,e){this.G(a,c,b,d,e)},idk:function(a,c,b,d,e){this.H(a,c,b,d,e)},idE:function(a,c,b,d,e){this.m(a,c,b,d,e)},idi:function(a,c,b,d,e){this.a.idi(a,c,b,d,e)},idG:function(a,c,b,d,e,f){this.a.idG(a,c,b,d,e,f)},idH:function(a,c,b,d,e,f){this.a.idH(a,c,b,d,e,f)},idI:function(a,c,b,d,e,f){this.a.idI(a,c,b,d,e,f)},idJ:function(a,c,
b,d,e,f){this.a.idJ(a,c,b,d,e,f)},idK:function(a,c,b,d,e,f,n){this.a.idK(a,c,b,d,e,f,n)},idg:function(a,b,f,d,e,p,n){this.I(a,b,f,d,e,p,n)},idh:function(a,b,f,d,e,p,n){this.I(a,b,f,d,e,p,n)},idq:function(a,b,f,d,e,p,n,l){this.a.idq(a,b,f,d,e,p,n,l)},idr:function(a,c,f,d,e,p,n,l){this.a.idr(a,b.d.r((new b.c)._02c(c.x,c.y,c.w,c.h)),f,d,e,p,n,l)},w:function(a){this.B=a;for(var c=Array(5),a=0.0174533*a-0.0349066,f=0;f<c.length;f++)c[f]=b.a.t(a),a+=0.0174533;return c},J:function(a){var c=(new b.aA)._0aA();
c.y(a);return c},f:function(){null!=this.v&&this.v.iag(1048608)},p:function(a,c,f,d,e){if(!this.g||this.q)return!1;a=b.V.D(a,b.ar);return null==a||0==a.j().a||16>d&&16>e?!1:!0}};w._dt("CWHH",b.Sy,0,z.icq,z.ic7,z.ic$,b.Su)})();

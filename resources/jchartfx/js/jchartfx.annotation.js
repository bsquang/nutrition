(function(){var u=window.cfx,a=window.sfx,q={Version:"7.2.5289.19355"};u.annotation=q;q.AnnImageMode={Original:0,Stretch:1,Tile:2};q.AttachMode={None:0,Point:1,Elastic:2};q.BalloonTailCorner={TopLeft:0,TopRight:1,BottomRight:2,BottomLeft:3,Top:4,Right:5,Bottom:6,Left:7};var v=function M(){M._ic()};v.prototype={_0dN:function(){return this}};v.c=function(a){return 0==a.w||0==a.h};v.b=function(d,m,j){!m.c()&&!j.c()&&(d.x=a.i(d.x*m.x,j.x),d.w=a.i(d.w*m.x,j.x),d.y=a.i(d.y*m.y,j.y),d.h=a.i(d.h*m.y,j.y))};
v.a=function(a,d,j){a.m(a.x<=a.g()?d:-d,a.y<=a.c()?j:-j)};v._dt("CWAM",a.Sy,0);var y=function N(){N._ic();this.a=null};q.SerializableArrowCap=y;y.prototype={_0_1:function(){return this},_01_1:function(a){this.a=a;return this}};y._dt("CWAS",a.Sy,0);var m=function j(){j._ic();this.e=this.d=this.h=this.f=this.b=this.u=null;this.W=0;this.l=null;this.g=this.r=this.t=this.y=0;this.N=null;this.F=!1;this.q=0;this.x=this.L=this.E=!1};m.prototype={_0dO:function(){this.j=new a.m;this.a=new a.c;this.c=new a.c;
this.M=new a.c;this.n=new a.c;this.L=!1;this.e=null;this.W=3;this.j._cf(a.m.g());this.b=(new u.Line)._01_2(3);this.b.setColor(a.m.c());this.g=0;this.x=!0;this.q=-1;this.y=5;this.t=this.r=1;return this},_01dO:function(a){this._0dO();this.a._cf(a);this.p();return this},getAnchor:function(){return this.y},setAnchor:function(a){this.y=a;this.detach()},bA:function(){return this.g},getBorder:function(){return this.b},setBorder:function(a){this.b=a},z:function(){var a=this.c._nc();this.L&&a.m(4,4);return a},
getColor:function(){return this.j},setColor:function(j){j=a.m._t(j);this.j._cf(j)},getHeight:function(){return this.c.h},setHeight:function(a){this.C(0,a-this.c.h,!0,576,!1)},id5:function(){return 14},id4:function(){return null},getLeft:function(){return this.c.x},setLeft:function(a){this.w(a-this.c.x,0,!0,!1)},bB:function(){return this.g},getObjectBounds:function(){return this.a},setObjectBounds:function(a){this.a._cf(a);this.p()},getPaintBefore:function(){return this.F},setPaintBefore:function(a){this.F=
a},getPattern:function(){return this.q},setPattern:function(a){this.q=a},getPlotAreaOnly:function(){return this.E},setPlotAreaOnly:function(a){this.E=a},T:function(){return(new a.g)._01g(this.c.g()-this.c.x,this.c.c()-this.c.y)},getTag:function(){return this.N},setTag:function(a){this.N=a},getTop:function(){return this.c.y},setTop:function(a){this.w(0,a-this.c.y,!0,!1)},getVisible:function(){return this.x},setVisible:function(a){this.x=a},getWidth:function(){return this.c.w},setWidth:function(a){this.C(a-
this.c.w,0,!0,2112,!1)},attach:function(a,h){this.t=this.r=1;this.A(1,[a,h])},A:function(a,h){var i=!1,i=!1;0!=a?null==h&&(1==a?h=[0,0]:2==a&&(h=[0,0,0,0]),i=!0):h=null;this.e=h;this.g=a;this.k(i)},attachElastic:function(a,h,i,f){this.A(2,[a,h,i,f])},attachAlign:function(a,h,i,f){this.t=a;this.r=i;this.A(1,[h,f])},p:function(){this.k(!0)},k:function(a){a&&(0!=this.g&&null!=this.f)&&this.V();this.n._cf(this.a);this.c._cf(this.i(this.a._nc()))},ab:function(){return-1==this.q?(new a.ar)._0ar(a.m.n(this.j,
a.m.g())?a.m.b:this.j):(new a.aB)._0aB(this.q,this.b.getColor(),this.j)},aa:function(){if(a.m.n(this.b.getColor(),a.m.g()))return(new a.ao)._01ao(a.m.g());var j=this.b.c(a.m.b._nc());j.sb(1);return j},detach:function(){this.A(0,null)},_d:function(){this._dispose1(!0)},_dispose1:function(){null!=this.h&&this.h._d();null!=this.d&&this.d._d()},flip:function(a){this.Q(a,-1)},Q:function(j,h){var i=this.a._nc();j?-1==h?this.a._cf(a.c.l(i.x,i.c(),i.g(),i.y)):this.a._cf(a.c.l(i.x,h-i.c(),i.g(),h-i.y)):-1==
h?this.a._cf(a.c.l(i.g(),i.y,i.x,i.c())):this.a._cf(a.c.l(h-i.g(),i.y,h-i.x,i.c()));this.p()},ah:function(){return this.e},getCommandMenu:function(){return-1},ieS:function(a){switch(a){case 1:return this.l}return null},ieT:function(a){switch(a){case 5:return this.u}return null},O:function(){var j=new a.c;null!=this.f&&(j._cf(this.z()),j.m(this.b.d,this.b.d),this.f.iaD(j._nc()))},X:function(j){var h=0,i=0,f=0,b=0,j=j._nc();switch(this.g){case 1:f=new a._pN(h,i,this.e[0],this.e[1]);b=this.f.iaE(f,1);
h=f.a;i=f.b;this.e[0]=f.c;this.e[1]=f.d;if(!b)break;switch(this.t){case 0:j.x=h;break;case 2:j.x=h-j.w;break;case 1:j.x=h-a.i(j.w,2)}switch(this.r){case 0:j.y=i;break;case 2:j.y=i-j.h;break;case 1:j.y=i-a.i(j.h,2)}break;case 2:var e=new a._pN(h,i,this.e[0],this.e[1]),c=this.f.iaE(e,1),h=e.a,i=e.b;this.e[0]=e.c;this.e[1]=e.d;if(!c)break;e=new a._pN(f,b,this.e[2],this.e[3]);c=this.f.iaE(e,1);f=e.a;b=e.b;this.e[2]=e.c;this.e[3]=e.d;if(!c)break;j.x=h;j.y=i;j.w=f-h;j.h=b-i}return j},w:function(a,h,i,f){this.a._cf(this.n);
this.a.q(a,h);i&&this.k(f)},i:function(a){if(0>a.w){var h=a.w;a.w=-h;a.x+=h}0>a.h&&(h=a.h,a.h=-h,a.y+=h);return a},D:function(a,h){this.w(a,h,!0,!1)},K:function(a){this.x&&(this.h=this.ab(),this.d=this.aa(),a.sidc(null),this.Y(a,!1,this.n._nc()),this.h._d(),this.h=null,this.d._d(),this.d=null)},V:function(){var j=0,h=0;switch(this.g){case 1:switch(this.t){case 0:j=this.a.x;break;case 2:j=this.a.g();break;case 1:j=a.i(this.a.x+this.a.g(),2)}switch(this.r){case 0:h=this.a.y;break;case 2:h=this.a.c();
break;case 1:h=a.i(this.a.y+this.a.c(),2)}j=new a._pN(j,h,this.e[0],this.e[1]);h=this.f.iaE(j,0);this.e[0]=j.c;this.e[1]=j.d;h||(this.g=0);break;case 2:j=this.a.x;h=this.a.y;j=new a._pN(j,h,this.e[0],this.e[1]);h=this.f.iaE(j,0);this.e[0]=j.c;this.e[1]=j.d;if(!h){this.g=0;break}j=this.a.g();h=this.a.c();j=new a._pN(j,h,this.e[2],this.e[3]);h=this.f.iaE(j,0);this.e[2]=j.c;this.e[3]=j.d;h||(this.g=0)}},refresh:function(){0!=this.g&&this.v((new a.e)._01e(0,0),(new a.e)._01e(0,0));this.O()},v:function(){this.M._cf(this.a);
if(!this.a.Sz(this.n))return!1;0!=this.g&&(this.a._cf(this.X(this.a)),this.k(!1));return!1},C:function(a,h,i,f,b){this.a._cf(this.n);320==(f&320)&&(this.a.y+=h,this.a.h-=h);576==(f&576)&&(this.a.h+=h);1088==(f&1088)&&(this.a.x+=a,this.a.w-=a);2112==(f&2112)&&(this.a.w+=a);i&&this.k(b)},J:function(){this.n._cf(this.a._cf(this.M));this.c._cf(this.i(this.a._nc()))},rotate:function(j){this.I(j,(new a.e)._01e(0,0))},I:function(j,h){h.c()&&(h.x=a.i(this.a.x+this.a.g()+1,2),h.y=a.i(this.a.y+this.a.c()+1,
2));this.a.q(-h.x,-h.y);j?this.a._cf(a.c.l(-this.a.y,this.a.x,-this.a.c(),this.a.g())):this.a._cf(a.c.l(this.a.y,-this.a.x,this.a.c(),-this.a.g()));this.a.q(h.x,h.y);this.p()},U:function(a,h){this.a._cf(a);h&&this.p()},B:function(a){this.u=a;this.f=null!=a?a.f():null}};m._dt("CWAA",a.Sy,0,a.Su);var d=function h(){h._ic();this._0_3()};q.AnnotationVector=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);this.ak=(new u.DataTemplate)._0_2();return this},getTemplate:function(){return this.ak.v()},
setTemplate:function(a){this.ak.sv(a)},Y:function(h,i,f){if(!a.b.p(this.ak.v())){i=a.d.r(f);for(f=this.ak.id().Sb();!0==f.SI();){var b=f.SK();switch(b.bA()){case "F":case "Fill":b.sa(this.h);break;case "S":case "Stroke":b.sa(this.d);break;case "W":case "Width":b.sa(i.w);break;case "H":case "Height":b.sa(i.h);break;case "FC":case "FillColor":b.sa(this.j);break;case "ST":case "StrokeThickness":b.sa(this.b.d);break;case "SD":case "StrokeDashStyle":b.sa(this.b.e)}}this.ak.r(h,i,1,0)}}};d._dt("CWAA",m,
0);var r=function i(){i._ic();this.at=this.al=this.av=0;this.as=this.am=null;this.ao=this.ay=0;this.aq=!1;this.an=0;this._0_3()};q.AnnotationText=r;r.prototype={_0_3:function(){this._bc._0dO.call(this);this.au=new a.m;this.an=1024;this.at=this.av=this.ao=0;this.ap="Text";this.au._cf(a.m.c());this.aq=!1;return this},_01_3:function(a){this._0_3();this.ap=a;this.sizeToFit();return this},getAlign:function(){return this.av},setAlign:function(a){this.av=a},getClip:function(){return 0==(this.an&512)},setClip:function(a){this.an=
a?this.an&-513:this.an|512},getCornerRadius:function(){return this.al},setCornerRadius:function(a){this.al=a},getFont:function(){return this.am},setFont:function(i){this.am=i=a.o._t(i);this.sizeToFit()},getLineAlignment:function(){return this.at},setLineAlignment:function(a){this.at=a},aw:function(){return null!=this.am?this.am:null!=this.f?this.f.iaA():null},getOrientation:function(){return this.ao},setOrientation:function(a){this.ao=a},getText:function(){return this.ap},setText:function(a){this.ap=
a;this.sizeToFit()},getTextColor:function(){return this.au},setTextColor:function(i){i=a.m._t(i);this.au._cf(i)},aB:function(){var a=this.c._nc();a.m(-this.b.d,-this.b.d);v.a(a,-(this.al-1),-(this.al-1));return a},getWordWrap:function(){return 0!=(this.an&1024)},setWordWrap:function(a){this.an=a?this.an|1024:this.an&-1025},aH:function(i,f,b,e){var c=0==f||2==f,k=0;c?(k=a.i(b.x+b.g(),2),e=a.a.p(e,a.i(b.w,2)-e)):(k=a.i(b.y+b.c(),2),e=a.a.p(e,a.i(b.h,2)-e));var n=k-e,g=k+e;if(c){var p=c=0;0==f?(c=b.y,
p=c-e):(c=b.c(),p=c+e,f=n,n=g,g=f);i.r(n,c,k,p);i.r(k,p,g,c)}else p=c=0,1==f?(c=b.g(),p=c+e):(c=b.x,p=c-e,f=n,n=g,g=f),i.r(c,n,p,k),i.r(p,k,c,g)},aA:function(a,f,b,e,c,k,n){for(var c=2*c,c=[(new z)._01dP(f.x,f.y,c,c,180,90),(new z)._01dP(f.g()-c,f.y,c,c,270,90),(new z)._01dP(f.g()-c,f.c()-c,c,c,0,90),(new z)._01dP(f.x,f.c()-c,c,c,90,90)],g=0;g<b;g++)e=(e+1)%4,c[e].e(a),e==k&&this.aH(a,k,f,n)},k:function(a){m.prototype.k.call(this,a)},_dispose1:function(a){null!=this.am&&(this.am._d(),this.am=null);
m.prototype._dispose1.call(this,a)},az:function(i){var f=this.aB()._nc(),b=(new a.e)._01e(a.i(f.x+f.g()+1,2),a.i(f.y+f.c()+1,2));f.q(-b.x,-b.y);for(var e=0;e<this.ao;e++)f._cf(a.c.l(-f.y,f.x,-f.c(),f.g()));f.q(b.x,b.y);f._cf(this.i(f._nc()));b=(new u.cJ)._04cJ(this.au._nc(),this.av,this.at,this.an,900*this.ao,!0);b.h(i,this.aw(),this.ap,f);b._d()},Y:function(i,f,b){f=this.i(b);0==this.al?(i.idT(this.h,f.x,f.y,f.w,f.h),i.idD(this.d,f.x,f.y,f.w,f.h)):(b=(new a.aA)._0aA(),this.aA(b,f,4,0,this.al,-1,
0),b.B(),null!=this.h&&i.idN(this.h,b),null!=this.d&&i.idu(this.d,b),b._d());i.sidc((new u.c5)._01c5("AnnotationText AnnotationObj"+this.l));this.az(i)},v:function(i,f){this.ay=this.al;this.aq&&this.ax(this.u.g());var b=m.prototype.v.call(this,i._nc(),f._nc());if(b&&i.y<f.y){var e=this.aw();2!=e.j()&&(e=(new a.o)._03o(e.b(),96*e.h()/72*i.y/f.y,e.i(),2,e.c(),e.d()),this.as=this.am,this.am=e)}b&&(this.al=a.i(this.al*i.y,f.y));return b},C:function(a,f,b,e,c){m.prototype.C.call(this,a,f,b,e,c);this.aq=
!1},J:function(){this.al=this.ay;m.prototype.J.call(this);null!=this.as&&(this.am._d(),this.am=this.as,this.as=null)},I:function(a,f){this.ao=(this.ao+(a?3:1))%4;m.prototype.I.call(this,a,f._nc())},B:function(a){m.prototype.B.call(this,a);this.aq&&this.sizeToFit()},sizeToFit:function(){this.aq=!0},ax:function(a){this.l=this.u.e();a.sidc((new u.c5)._01c5("Annotationnull AnnotationObj"+this.l));a=a.idX(this.ap,this.aw()).e();if(1==(this.ao&1)){var f=a.w;a.w=a.h;a.h=f}f=this.a._nc();f.w=a.w+2*this.b.d+
1;f.h=a.h+2*this.b.d+1;v.a(f,this.al,this.al);this.a._cf(f);this.aq=!1;this.k(!1)}};r._dt("CWAA",m,0);var z=function f(){f._ic();this.a=new a.c;this.c=this.d=0};z.prototype={_i1:function(a,b,e,c,k,n){this.a._i2(a,b,e,c);this.d=k;this.c=n},_i:function(){this.a._i();this.c=this.d=0},_01dP:function(a,b,e,c,k,n){this._i1(a,b,e,c,k,n);return this},e:function(a){0==this.a.w||0==this.a.h?a.p(this.a.f(),this.a.f()):a.e(this.a,this.d,this.c)}};z._dt("CWAA",a.W,0);d=function b(){b._ic();this.aT=0;this._0_4()};
q.AnnotationBalloon=d;d.prototype={_0_4:function(){this._bc._0_3.call(this);this.aM=new a.c;this.aS=new a.c;this.aP=12;this.al=5;this.aN=0;this.aM.x=0;this.aL=this.aM.y=0;this.aO();return this},z:function(){return r.prototype.z.call(this)._nc()},getTailCorner:function(){return this.aL},setTailCorner:function(a){this.aL=a},getTailFactor:function(){return this.aP},setTailFactor:function(a){this.aP=a},aB:function(){var b=this.a._nc();v.a(b,-this.b.d,-this.b.d);v.a(b,-this.aN,-this.aN);b._cf(this.i(b._nc()));
var e,c;c=new a._p2(0,0);this.aQ(c,b);e=c.a;c=c.b;b.w-=e;b.h-=c;switch(this.aL){case 0:b.x+=e;b.y+=c;break;case 1:b.y+=c;break;case 3:b.x+=e}v.a(b,-(this.al-1),-(this.al-1));return b},aV:function(a){var e=this.aP;0>e?(a.w+=-e,a.h+=-e):(e/=100,a.w/=1-e,a.h/=1-e)},aU:function(b){var e=this.al*(0>b.w?-1:1),c=this.al*(0>b.h?-1:1),k,n;n=new a._p2(0,0);this.aQ(n,b);k=n.a;n=n.b;var g=a.e._ca(3);switch(this.aL){case 0:g[1].x=b.x;g[1].y=b.y;b.x+=k;b.w-=k;b.y+=n;b.h-=n;g[0].x=b.x;g[0].y=b.y+c;g[2].x=b.x+e;
g[2].y=b.y;break;case 1:g[1].x=b.g();g[1].y=b.y;b.w-=k;b.y+=n;b.h-=n;g[2].x=b.g();g[2].y=b.y+c;g[0].x=b.g()-e;g[0].y=b.y;break;case 3:g[1].x=b.x;g[1].y=b.c();b.x+=k;b.w-=k;b.h-=n;g[2].x=b.x;g[2].y=b.c()-c;g[0].x=b.x+e;g[0].y=b.c();break;default:g[1].x=b.g(),g[1].y=b.c(),b.w-=k,b.h-=n,g[0].x=b.g(),g[0].y=b.c()-c,g[2].x=b.g()-e,g[2].y=b.c()}return g},aQ:function(a,e){var c=this.aP;0>c?(a.b=-c,a.a=a.b):(c/=100,a.a=e.w*c,a.b=e.h*c)},k:function(a){r.prototype.k.call(this,a);this.aO()},Q:function(a,e){r.prototype.Q.call(this,
a,e);switch(this.aL){case 0:this.aL=a?3:1;break;case 1:this.aL=a?2:0;break;case 2:this.aL=a?1:3;break;case 3:this.aL=a?0:2;break;case 4:a||(this.aL=6);break;case 6:a||(this.aL=4);break;case 7:a&&(this.aL=5);break;case 5:a&&(this.aL=7)}this.aO()},Y:function(b,e,c){v.a(c,-this.aN,-this.aN);c._cf(this.i(c._nc()));if(!e&&0<this.aN&&a.m.o(this.j,a.m.g())){var k=a.m.k(128,0,0,0),k=(new a.ar)._0ar(k);this.aR(b,k,null,(new a.c)._02c(c.x+this.aN,c.y+this.aN,c.w,c.h));k._d()}this.aR(b,this.h,this.d,c._nc());
b.sidc((new u.c5)._01c5("AnnotationBalloonText AnnotationObj"+this.l));!e&&null!=this.ap&&this.az(b)},O:function(){r.prototype.O.call(this)},w:function(a,e,c,k){r.prototype.w.call(this,a,e,c,k);c||this.aO()},D:function(a,e){r.prototype.D.call(this,a,e);this.aM.q(a,e)},aR:function(b,e,c,k){var n=(new a.aA)._0aA();n.E();var g=4,p=0,t=-1;4<=this.aL&&(t=this.aL-4);var o=0;if(-1==t){g=this.aU(k);for(p=1;p<g.length;p++)n.p(g[p-1],g[p]);g=3;p=this.aL}else{var p=4,l;l=new a._p2(0,0);this.aQ(l,k);o=l.a;l=
l.b;o=a.i(a.a.o(o,l),2)}this.aA(n,k,g,p,this.al,t,o);n.B();null!=e&&b.idN(e,n);null!=c&&b.idu(c,n);n._d()},v:function(b,e){this.aT=this.aN;this.aS._cf(this.aM);if(r.prototype.v.call(this,b._nc(),e._nc())){this.aN=a.i(this.aN*b.y,e.y);var c=a.i(this.aM.x*b.x,e.x),k=c-this.aM.x;this.aM.x=c;this.aM.w-=k;c=a.i(this.aM.y*b.y,e.y);k=c-this.aM.y;this.aM.y=c;this.aM.h-=k;return!0}return!1},C:function(a,e,c,k,n){r.prototype.C.call(this,a,e,c,k,n);c?this.aL=0>this.a.w?0>this.a.h?2:1:0>this.a.h?3:0:this.aO()},
J:function(){this.aN=this.aT;this.aM._cf(this.aS);r.prototype.J.call(this)},I:function(a,e){r.prototype.I.call(this,a,e._nc());var c=0;4<=this.aL&&(c=4,this.aL-=4);this.aL=a?(this.aL+1)%4:(this.aL+4-1)%4;this.aL+=c},U:function(a,e){r.prototype.U.call(this,a._nc(),e);e||this.aO()},ax:function(a){r.prototype.ax.call(this,a);a=this.a._nc();v.a(a,this.aN,this.aN);this.aV(a);this.a._cf(a);this.k(!1)},aO:function(){}};d._dt("CWAA",r,0);d=function e(){e._ic();this._0_3()};q.AnnotationRectangle=d;d.prototype=
{_0_3:function(){this._bc._0dO.call(this);return this},Y:function(a,c,k){c=this.i(k);a.idT(this.h,c.x,c.y,c.w,c.h);a.idD(this.d,c.x,c.y,c.w,c.h)}};d._dt("CWAA",m,0);d=function c(){c._ic();this.al=this.am=this.an=0;this.ak=null;this._0_3()};q.AnnotationPicture=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);this.al=0;return this},_01_3:function(c){this._0_3();c=a.an._t(c);this.setPicture(c);this.sizeToFit();return this},getMode:function(){return this.al},setMode:function(a){this.al=a},getPicture:function(){return null!=
this.ak?this.ak:null},setPicture:function(c){c=a.an._t(c);this.ap();this.ak=c;null!=c&&(this.an=this.ak.c(),this.am=this.ak.b());this.sizeToFit()},ap:function(){null!=this.ak&&(this.ak._d(),this.ak=null)},_dispose1:function(a){this.ap();m.prototype._dispose1.call(this,a)},Y:function(c,k,n){var g=this.i(n);if(k)c.idR(a.aj.G(),g);else if(c.idT(this.h,g.x,g.y,g.w,g.h),c.idD(this.d,g.x,g.y,g.w,g.h),null!=this.ak){var p=0,t=0,o=0,l=0,d=0,m=0,k=!1,v=0,q=0,o=c.idd(),r=0,w=0,p=this.T();0!=this.b.getColor().a&&
(l=2*this.b.d-1,p.w-=l,p.h-=l);switch(this.al){case 1:o=p.w;l=p.h;d=this.an;m=this.am;break;default:2==this.al&&(k=!0),v=3.93701E-4*o.c(),q=3.93701E-4*o.d(),o=this.an,l=this.am,o=a.a.p(o,p.w),l=a.a.p(l,p.h),d=o/v,m=l/q}var u=n.x>n.g(),n=n.y>n.c(),p=g.x+this.b.d,t=g.y+this.b.d;do if(r=1==this.al?d:o,w=1==this.al?m:l,c.idq(this.ak,(new a.c)._02c(p,t,o,l),u?this.an:0,n?this.am:0,u?-r:r,n?-w:w,2,null),k){p+=o;g=this.c._nc();if(p>=g.g()&&(p=g.x,t+=l,t>=g.c()))break;o=this.an;o=a.a.p(o,g.g()-p);d=o/v;l=
this.am;l=a.a.p(l,g.c()-t);m=l/q}while(k)}},sizeToFit:function(){var a=this.a._nc();a.w=this.an+2*this.b.d;a.h=this.am+2*this.b.d;this.a._cf(a);this.p()}};d._dt("CWAA",m,0);d=function k(){k._ic();this.ak=null;this._0_3()};q.AnnotationContainer=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);this.al=!0;return this},getElement:function(){return this.ak},setElement:function(k){this.ak=a.V.C(k,u.ieB)},Y:function(a,d,g){null!=this.ak&&this.ak.ieD(this.f,a,g._nc())},v:function(a,d){if(this.al){var g=
this.ak.ieC(this.f);0!=g.w&&0!=g.h&&(this.a.w=g.w,this.a.h=g.h);this.al=!1;this.k(!1)}return m.prototype.v.call(this,a._nc(),d._nc())}};d._dt("CWAA",m,0);d=function n(){n._ic();this._0_3()};q.AnnotationCircle=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);return this},Y:function(a,g,d){g=this.i(d);a.idL(this.h,g.x,g.y,g.w,g.h);a.idj(this.d,g.x,g.y,g.w,g.h)}};d._dt("CWAA",m,0);d=function g(){g._ic();this._0_3()};q.AnnotationArrow=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);this.ak=
null;this.al=(new y)._01_1((new a.av)._0av(5,5,!0));return this},z:function(){var a=m.prototype.z.call(this)._nc();if(null!=this.ak){var d=this.ak.a;a.m(d.w,d.h)}null!=this.al&&(d=this.al.a,a.m(d.w,d.h));return a},getEndCap:function(){return null==this.al?null:this.al.a},setEndCap:function(a){this.al=null!=a?(new y)._01_1(a):null},getStartCap:function(){return null==this.ak?null:this.ak.a},setStartCap:function(a){this.ak=null!=a?(new y)._01_1(a):null},Y:function(a,d,t){null!=this.ak&&this.d.sf(this.ak.a);
null!=this.al&&this.d.se(this.al.a);a.ids(this.d,t.x,t.y,t.g(),t.c())}};d._dt("CWAA",m,0);d=function p(){p._ic();this._0_3()};q.AnnotationArc=d;d.prototype={_0_3:function(){this._bc._0dO.call(this);return this},Y:function(d,t,o){t=90;if(!v.c(o)){var l=this.i(o._nc())._nc(),m=l.w,q=l.h;l.w=2*m;l.h=2*q;0>o.w?(l.x-=m,0>o.h?t=270:(l.y-=q,t=0)):0>o.h?t=180:l.y-=q;a.m.o(this.j,a.m.g())&&d.idO(this.h,l,t,90);d.idg(this.d,l.x,l.y,l.w,l.h,t,90)}}};d._dt("CWAA",m,0);var A=function t(){t._ic();this.c=!1};A.prototype=
{_0dQ:function(a){this._bc._0Y.call(this);this.a=a;return this},b:function(){return this.a},sb:function(a){this.a=a},getItem:function(a){return this._Sa().So(a)},add:function(a){this._Sa().Si(a)},contains:function(a){return this._Sa().Sj(a)},copyTo:function(a,d){this._Sa().Sd(a,d)},_d:function(){for(var d=this._Sa().Sb();!0==d.SI();){var o=d.SK(),o=a.V.C(o,a.Su);null!=o&&o._d()}},indexOf:function(a){return this._Sa().Sk(a)},insert:function(a,d){this._Sa().Sl(a,d)},_Sb:function(){a.Y.prototype._Sb.call(this);
this.c=!0},_Sc:function(d,o){a.Y.prototype._Sc.call(this,d,o);var l=a.V.D(o,m);null!=l&&l.B(this.a);this.c=!0},_Sd:function(d,o){a.Y.prototype._Sd.call(this,d,o);this.c=!0},remove:function(a){this._Sa().Sm(a)}};A._dt("CWAA",a.Y,0,a.Su);var C=function o(){o._ic();this.C=null;this.A=this.B=!1;this.q=0;this.x=null;this.w=0;this.v=null};q.AnnotationList=C;C.prototype={_0_3:function(){this._01_3(null);return this},_01_3:function(d){this._bc._0dQ.call(this,d);this.z=new a.m;this.y=new a.m;this.p=new a.c;
this.o=new a.c;this.t=new a.c;this.z._cf(a.m.g());this.y._cf(a.m.c());this.x=this.C=null;this.B=!1;this.v=null;this.p._cf(a.c.b);this.w=1;this.A=!1;return this},b:function(){return A.prototype.b.call(this)},sb:function(a){A.prototype.sb.call(this,a)},D:function(){return null!=this.b()?this.b().f():null},_Sb:function(){A.prototype._Sb.call(this)},r:function(d,l,m,q){var m=new a.c,r=new a.c,u=new a.c,y=new a.c,w=new a.c,B=new a.c,z=new a.c,x=new a.c,A=new a.c,C=new a.c,D=0,G=0,E=0,I=0,E=D=d.idd().c(),
I=G=d.idd().d(),D=(new a.e)._01e(D,G),E=(new a.e)._01e(E,I);this.p._cf(a.c.b);I=l.d();u._cf(this.D().iax());var G=d.ida(),K=(new a.aq)._0aq(u),O=!this.o.d()&&!l.Sz(this.o),P=!this.o.d()&&!u.Sz(this.o);B._cf(l);z._cf(u);A._cf(this.o);C._cf(this.t);v.b(B,E,D);v.b(z,E,D);v.b(A,E,D);v.b(C,E,D);this.q=-1;for(var L=this.Sb();!0==L.SI();){var s=L.SK();this.q++;if(s.F==q){var H=s.E;H?(y._cf(u),x._cf(z),x.q(-B.x,-B.y),w._cf(C)):(y._cf(l),x._cf(B),w._cf(A));var J=H?P:O;if(0==s.g){var F=s.y;J&&(0==F?(s.setTop(s.getTop()+
a.i(x.h-w.h,2)),s.setLeft(s.getLeft()+a.i(x.w-w.w,2))):(0!=(F&8)&&(0!=(F&4)?s.setWidth(s.getWidth()+(x.w-w.w)):s.setLeft(s.getLeft()+(x.w-w.w))),0!=(F&2)&&(0!=(F&1)?s.setHeight(s.getHeight()+(x.h-w.h)):s.setTop(s.getTop()+(x.h-w.h))),H&&(0!=(F&4)&&s.setLeft(s.getLeft()+(x.x-w.x)),0!=(F&1)&&s.setTop(s.getTop()+(x.y-w.y)))));s.D(B.x,B.y)}J=s.v(D._nc(),E._nc());I?s.K(d):(m._cf(s.z()),this.p._cf(a.c.t(this.p,m)),H&&d.sida(K),r._cf(a.c.n(y,m)),v.c(r)||s.K(d),H&&d.sida(G));J&&s.J();0==s.g&&s.D(-B.x,-B.y)}}null!=
G&&G._d();K._d();q||(u.q(-l.x,-l.y),this.t._cf(u),this.o._cf(l))},u:function(a){this.q=a}};C._dt("CWAA",A,0);d=function l(){l._ic();this.a=this.d=this.c=null;this._0_3()};q.Annotations=d;d.prototype={_0_3:function(){this.b=(new C)._01_3(this);return this},f:function(){return this.c},getList:function(){return this.b},g:function(){if(null==this.a){var a=this.c.SY();this.a=(new u.bp)._01bp(a,!0)}return this.a},_d:function(a){if(a){for(a=this.b.Sb();!0==a.SI();)a.SK()._d();this.b.clear();null!=this.a&&
(this.a._d(),this.a=null);null!=this.d&&(this.d._d(),this.d=null);this.c=null}},e:function(){return a.b.k(a.aG.e(),"{0}",this.b.q)},icr:function(d){this.c=a.V.D(d,u.Chart);for(var m=0,q=this.b.Sb();!0==q.SI();){var r=q.SK();this.b.u(m);r.B(this);m++}return null==d},ics:function(d){return 1!=d.length?null:this.b.getItem(a.u.d(d[0]))},ieI:function(){return!1},ieH:function(a,d,m,q,r){this.a=a;this.b.r(a,d._nc(),m,!0,q,r);this.a=null;return!1},ieF:function(a,d,m,q,r){this.a=a;this.b.r(a,d._nc(),m,!1,
q,r);this.a=null;return!1},ieG:function(){return!1}};d._dt("CWAA",a.Sy,0,u.icq,u.ieE)})();

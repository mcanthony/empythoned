(function(g){function f(b){var d;for(d=-1;;)switch(d){case -1:var e;d=b;e=d|0;d-=e;d=d<=-1|d>=1?1:2;break;case 1:T(w[wt],l);e=-1;d=2;break;case 2:return b=e;default:p(0,"bad label: "+d)}}function d(b,d){var e=s;s+=4;u(e,0,4);var c;for(c=-1;;)switch(c){case -1:var g,h,i,j=e;c=b;g=d;c=f(c);w[j]=c;c=w[j]==-1?1:3;break;case 1:c=nY()!=0?2:3;break;case 2:h=0;c=8;break;case 3:w[vV]=0;i=c=P[g](j);c=c==0?4:7;break;case 4:c=w[vV]==0?5:6;break;case 5:w[vV]=
22;c=6;break;case 6:h=B4(w[wt]);c=8;break;case 7:a:{h=i;c=a;for(c=-1;;)switch(c){case -1:var l,m,n;l=h;n=f8(U);c=n==0?1:2;break;case 1:m=0;c=8;break;case 2:var o=n;c=OZ(w[l+20]+1900);w[o+12]=c;o=n;c=OZ(w[l+16]+1);w[o+12+4]=c;o=n;c=OZ(w[l+12]);w[o+12+8]=c;o=n;c=OZ(w[l+8]);w[o+12+12]=c;o=n;c=OZ(w[l+4]);w[o+12+16]=c;o=n;c=OZ(w[l]);w[o+12+20]=c;o=n;c=OZ((w[l+24]+6)%7);w[o+12+24]=c;o=n;c=OZ(w[l+28]+1);w[o+12+28]=c;o=n;c=OZ(w[l+32]);w[o+12+32]=c;o=n;c=nY()!=0?3:7;break;case 3:c=o!=0?4:6;break;case 4:w[n]-=
1;c=w[n]==0?5:6;break;case 5:P[w[w[n+4]+24]](n);c=6;break;case 6:m=0;c=8;break;case 7:m=o;c=8;break;case 8:h=m;break a;default:p(0,"bad label: "+c)}h=a}c=8;break;case 8:return g=h,s=e,g;default:p(0,"bad label: "+c)}}function b(b,d,e){var f=s;s+=4;u(f,0,4);var c;for(c=-1;;)switch(c){case -1:var g,i,j,l=f,m;c=b;g=d;i=e;w[l]=0;c=A5(c,g,O([l,0,0,0],["%struct.PyObject**",0,0,0],E))==0?1:2;break;case 1:j=0;c=8;break;case 2:c=w[l]==0|w[l]==Q?3:4;break;case 3:c=h();w[i]=c;c=7;break;case 4:m=Z3(w[l]);c=nY()!=
0?5:6;break;case 5:j=0;c=8;break;case 6:w[i]=m;c=7;break;case 7:j=1;c=8;break;case 8:return b=j,s=f,b;default:p(0,"bad label: "+c)}}function e(b,d){var e=s;s+=4;u(e,0,4);var f;for(f=-1;;)switch(f){case -1:var c,g,h=e,i;f=b;c=d;PV(c,0,44,1,0);f=x5(f,aa,O([h,0,0,0,c+16,0,0,0,c+12,0,0,0,c+8,0,0,0,c+4,0,0,0,c,0,0,0,c+24,0,0,0,c+28,0,0,0,c+32,0,0,0],["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0],E))==0?1:2;break;case 1:g=0;f=13;break;
case 2:f=w[h]<=1899?3:12;break;case 3:i=U0(w[wa],K);f=i==0?6:4;break;case 4:f=(w[w[i+4]+84]&8388608)==0?6:5;break;case 5:f=c0(i)==0?6:7;break;case 6:T(w[wt],G);g=0;f=13;break;case 7:var j=w[h];f=w[h]<=68|w[h]>99?9:8;break;case 8:w[h]=j+1900;f=12;break;case 9:f=j<0|w[h]>68?11:10;break;case 10:w[h]+=2E3;f=12;break;case 11:T(w[wt],qa);g=0;f=13;break;case 12:w[c+20]=w[h]-1900;w[c+16]-=1;w[c+24]=(w[c+24]+1)%7;w[c+28]-=1;g=1;f=13;break;case 13:return c=g,s=e,c;default:p(0,"bad label: "+f)}}function c(b){var d=
s;s+=24;u(d,0,24);var e;for(e=-1;;)switch(e){case -1:var f,c,g,h=d,i,j,l,m=d+4,n=d+14;f=b;i=RX(0);w[h]=(i/31557600|0)*31557600;i=fY(h);j=0-w[i+36];e=w[i+40]!=0?1:2;break;case 1:g=w[i+40];e=3;break;case 2:g=Pa;e=3;break;case 3:eW(m,g,9);w[m+9]=0;w[h]+=15778800;i=fY(h);l=0-w[i+36];e=w[i+40]!=0?4:5;break;case 4:c=w[i+40];e=6;break;case 5:c=Pa;e=6;break;case 6:eW(n,c,9);w[n+9]=0;var o=f;e=j<l?7:8;break;case 7:x7(o,ra,l);x7(f,Ca,j);x7(f,ua,j!=l);e=P_(Sa,O([n,0,0,0,m,0,0,0],["i8*",0,0,0,"i8*",0,0,0],E));
w7(f,bb,e);e=9;break;case 8:x7(o,ra,j);x7(f,Ca,l);x7(f,ua,j!=l);e=P_(Sa,O([m,0,0,0,n,0,0,0],["i8*",0,0,0,"i8*",0,0,0],E));w7(f,bb,e);e=9;break;case 9:s=d;return;default:p(0,"bad label: "+e)}}function h(){var b=s;s+=20;u(b,0,20);var d;for(d=-1;;)switch(d){case -1:var e,f=b,c=b+8;d=hY(f)==0?1:2;break;case 1:e=w[f]+w[f+4]*1.0E-6;d=3;break;case 2:_ftime(c);e=w[c]+w[c+4]*0.001;d=3;break;case 3:return d=e,s=b,d;default:p(0,"bad label: "+d)}}function i(){l=O([116,105,109,101,115,116,97,109,112,32,111,117,
116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,116,105,109,101,95,116,0],"i8",x);m=O([116,105,109,101,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,10,70,114,97,99,116,105,111,110,115,32,111,102,32,97,32,115,101,
99,111,110,100,32,109,97,121,32,98,101,32,112,114,101,115,101,110,116,32,105,102,32,116,104,101,32,115,121,115,116,101,109,32,99,108,111,99,107,32,112,114,111,118,105,100,101,115,32,116,104,101,109,46,0],"i8",x);n=O([99,108,111,99,107,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,67,80,85,32,116,105,109,101,32,111,114,32,114,101,97,108,32,116,105,109,101,32,115,105,110,99,101,32,116,104,101,32,115,116,
97,114,116,32,111,102,32,116,104,101,32,112,114,111,99,101,115,115,32,111,114,32,115,105,110,99,101,10,116,104,101,32,102,105,114,115,116,32,99,97,108,108,32,116,111,32,99,108,111,99,107,40,41,46,32,32,84,104,105,115,32,104,97,115,32,97,115,32,109,117,99,104,32,112,114,101,99,105,115,105,111,110,32,97,115,32,116,104,101,32,115,121,115,116,101,109,10,114,101,99,111,114,100,115,46,0],"i8",x);q=O([100,58,115,108,101,101,112,0],"i8",x);o=O([115,108,101,101,112,40,115,101,99,111,110,100,115,41,10,10,68,
101,108,97,121,32,101,120,101,99,117,116,105,111,110,32,102,111,114,32,97,32,103,105,118,101,110,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,46,32,32,84,104,101,32,97,114,103,117,109,101,110,116,32,109,97,121,32,98,101,10,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,102,111,114,32,115,117,98,115,101,99,111,110,100,32,112,114,101,99,105,115,105,111,110,46,0],"i8",x);r=O([116,109,95,121,101,97,114,0],"i8",x);t=O([121,101,97,114,44,32,
102,111,114,32,101,120,97,109,112,108,101,44,32,49,57,57,51,0],"i8",x);v=O([116,109,95,109,111,110,0],"i8",x);y=O([109,111,110,116,104,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,49,50,93,0],"i8",x);A=O([116,109,95,109,100,97,121,0],"i8",x);z=O([100,97,121,32,111,102,32,109,111,110,116,104,44,32,114,97,110,103,101,32,91,49,44,32,51,49,93,0],"i8",x);C=O([116,109,95,104,111,117,114,0],"i8",x);F=O([104,111,117,114,115,44,32,114,97,110,103,101,32,91,48,44,32,50,51,93,0],"i8",
x);B=O([116,109,95,109,105,110,0],"i8",x);I=O([109,105,110,117,116,101,115,44,32,114,97,110,103,101,32,91,48,44,32,53,57,93,0],"i8",x);D=O([116,109,95,115,101,99,0],"i8",x);L=O([115,101,99,111,110,100,115,44,32,114,97,110,103,101,32,91,48,44,32,54,49,93,41,0],"i8",x);J=O([116,109,95,119,100,97,121,0],"i8",x);N=O([100,97,121,32,111,102,32,119,101,101,107,44,32,114,97,110,103,101,32,91,48,44,32,54,93,44,32,77,111,110,100,97,121,32,105,115,32,48,0],"i8",x);H=O([116,109,95,121,100,97,121,0],"i8",x);X=
O([100,97,121,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,51,54,54,93,0],"i8",x);W=O([116,109,95,105,115,100,115,116,0],"i8",x);S=O([49,32,105,102,32,115,117,109,109,101,114,32,116,105,109,101,32,105,115,32,105,110,32,101,102,102,101,99,116,44,32,48,32,105,102,32,110,111,116,44,32,97,110,100,32,45,49,32,105,102,32,117,110,107,110,111,119,110,0],"i8",x);R=O(80,["i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"],x);$=O([0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0],["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0],x);Y=O([116,105,109,101,46,115,116,114,117,99,116,95,116,105,109,101,0],"i8",x);ea=O([84,104,101,32,116,105,109,101,32,118,97,108,117,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,103,109,116,105,109,101,40,41,44,32,108,111,99,97,108,
116,105,109,101,40,41,44,32,97,110,100,32,115,116,114,112,116,105,109,101,40,41,44,32,97,110,100,10,32,97,99,99,101,112,116,101,100,32,98,121,32,97,115,99,116,105,109,101,40,41,44,32,109,107,116,105,109,101,40,41,32,97,110,100,32,115,116,114,102,116,105,109,101,40,41,46,32,32,77,97,121,32,98,101,32,99,111,110,115,105,100,101,114,101,100,32,97,115,32,97,10,32,115,101,113,117,101,110,99,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,46,10,10,32,78,111,116,101,32,116,104,97,116,32,115,101,118,
101,114,97,108,32,102,105,101,108,100,115,39,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,116,104,101,32,115,97,109,101,32,97,115,32,116,104,111,115,101,32,100,101,102,105,110,101,100,32,98,121,10,32,116,104,101,32,67,32,108,97,110,103,117,97,103,101,32,115,116,97,110,100,97,114,100,32,102,111,114,32,115,116,114,117,99,116,32,116,109,46,32,32,70,111,114,32,101,120,97,109,112,108,101,44,32,116,104,101,32,118,97,108,117,101,32,111,102,32,116,104,101,10,32,102,105,101,108,100,32,116,109,
95,121,101,97,114,32,105,115,32,116,104,101,32,97,99,116,117,97,108,32,121,101,97,114,44,32,110,111,116,32,121,101,97,114,32,45,32,49,57,48,48,46,32,32,83,101,101,32,105,110,100,105,118,105,100,117,97,108,10,32,102,105,101,108,100,115,39,32,100,101,115,99,114,105,112,116,105,111,110,115,32,102,111,114,32,100,101,116,97,105,108,115,46,0],"i8",x);U=O(196,["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",
0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",
0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0],x);V=O([124,79,58,103,109,116,105,109,101,0],"i8",x);Z=O([103,109,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,32,116,109,95,109,111,110,44,32,116,109,95,109,100,97,121,44,32,116,109,95,104,111,117,114,44,32,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,
115,101,99,44,32,116,109,95,119,100,97,121,44,32,116,109,95,121,100,97,121,44,32,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,85,84,67,32,40,97,46,107,46,97,46,10,71,77,84,41,46,32,32,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,
32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0],"i8",x);da=O([124,79,58,108,111,99,97,108,116,105,109,101,0],"i8",x);ja=O([108,111,99,97,108,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,116,109,95,109,111,110,44,116,109,95,109,100,97,121,44,116,109,95,104,111,117,114,44,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,116,109,95,119,100,97,121,44,116,109,95,121,100,97,121,44,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,
115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0],"i8",x);aa=O([40,105,105,105,105,105,105,105,105,105,41,0],"i8",x);wa=O(1,"%struct.PyObject*",x);K=O([97,99,99,101,112,116,50,100,121,101,97,114,0],"i8",x);G=O([121,101,97,114,32,62,61,32,49,57,48,48,32,114,101,113,117,105,114,101,100,0],"i8",x);qa=O([121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);fa=O([115,124,79,58,
115,116,114,102,116,105,109,101,0],"i8",x);ia=O([109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);Ja=O([100,97,121,32,111,102,32,109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);za=O([104,111,117,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);ca=O([109,105,110,117,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);ka=O([115,101,99,111,110,100,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);La=
O([100,97,121,32,111,102,32,119,101,101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);sa=O([100,97,121,32,111,102,32,121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);Ha=O([115,116,114,102,116,105,109,101,40,102,111,114,109,97,116,91,44,32,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,
32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,10,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,
101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0],"i8",x);na=O([95,115,116,114,112,116,105,109,101,0],"i8",x);Ga=O([95,115,116,114,112,116,105,109,101,95,116,105,109,101,0],"i8",x);xa=O([79,0],"i8",x);Ba=O([115,116,114,112,116,105,109,101,40,115,116,114,105,110,103,44,32,102,111,114,109,97,116,41,32,45,62,32,115,116,114,117,99,116,95,116,105,109,101,10,10,80,97,114,115,101,32,97,32,115,116,114,105,110,103,32,116,111,32,97,32,116,105,
109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,32,40,115,97,109,101,32,97,115,32,115,116,114,102,116,105,109,101,40,41,41,46,0],"i8",x);ta=O([97,115,99,116,105,109,101,0],"i8",x);Ta=O([105,
110,118,97,108,105,100,32,116,105,109,101,0],"i8",x);Ea=O([97,115,99,116,105,109,101,40,91,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,44,32,101,46,103,46,32,39,83,97,116,32,74,117,110,32,48,54,32,49,54,58,50,54,58,49,49,32,49,57,57,56,39,46,10,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,32,110,111,116,32,112,114,101,
115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,10,105,115,32,117,115,101,100,46,0],"i8",x);Ka=O([99,116,105,109,101,0],"i8",x);Na=O([117,110,99,111,110,118,101,114,116,105,98,108,101,32,116,105,109,101,0],"i8",x);oa=O([99,116,105,109,101,40,115,101,99,111,110,100,115,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,105,110,32,115,
101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,115,116,114,105,110,103,32,105,110,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,97,115,99,116,105,109,101,40,108,111,99,97,108,116,105,109,101,40,115,101,99,111,110,100,115,41,41,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,10,110,111,116,32,112,114,101,115,101,110,116,44,
32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0],"i8",x);ba=O([109,107,116,105,109,101,32,97,114,103,117,109,101,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",x);la=O([109,107,116,105,109,101,40,116,117,112,108,101,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,67,111,110,118,101,114,116,32,97,
32,116,105,109,101,32,116,117,112,108,101,32,105,110,32,108,111,99,97,108,32,116,105,109,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,0],"i8",x);Ia=O([116,105,109,101,0],"i8",x);Ya=O([116,122,115,101,116,40,41,10,10,73,110,105,116,105,97,108,105,122,101,44,32,111,114,32,114,101,105,110,105,116,105,97,108,105,122,101,44,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,116,111,32,116,104,101,32,118,97,108,117,101,
32,115,116,111,114,101,100,32,105,110,10,111,115,46,101,110,118,105,114,111,110,91,39,84,90,39,93,46,32,84,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,115,104,111,117,108,100,32,98,101,32,115,112,101,99,105,102,105,101,100,32,105,110,10,115,116,97,110,100,97,114,100,32,85,110,105,120,32,116,105,109,101,122,111,110,101,32,102,111,114,109,97,116,32,97,115,32,100,111,99,117,109,101,110,116,101,100,32,105,110,32,116,104,101,32,116,122,115,101,116,
32,109,97,110,32,112,97,103,101,10,40,101,103,46,32,39,85,83,47,69,97,115,116,101,114,110,39,44,32,39,69,117,114,111,112,101,47,65,109,115,116,101,114,100,97,109,39,41,46,32,85,110,107,110,111,119,110,32,116,105,109,101,122,111,110,101,115,32,119,105,108,108,32,115,105,108,101,110,116,108,121,10,102,97,108,108,32,98,97,99,107,32,116,111,32,85,84,67,46,32,73,102,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,105,115,32,110,111,116,32,115,101,
116,44,32,116,104,101,32,108,111,99,97,108,10,116,105,109,101,122,111,110,101,32,105,115,32,115,101,116,32,116,111,32,116,104,101,32,115,121,115,116,101,109,115,32,98,101,115,116,32,103,117,101,115,115,32,111,102,32,119,97,108,108,99,108,111,99,107,32,116,105,109,101,46,10,67,104,97,110,103,105,110,103,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,119,105,116,104,111,117,116,32,99,97,108,108,105,110,103,32,116,122,115,101,116,32,42,109,97,
121,42,32,99,104,97,110,103,101,10,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,117,115,101,100,32,98,121,32,109,101,116,104,111,100,115,32,115,117,99,104,32,97,115,32,108,111,99,97,108,116,105,109,101,44,32,98,117,116,32,116,104,105,115,32,98,101,104,97,118,105,111,117,114,10,115,104,111,117,108,100,32,110,111,116,32,98,101,32,114,101,108,105,101,100,32,111,110,46,0],"i8",x);Pa=O([32,32,32,0],"i8",x);ra=O([116,105,109,101,122,111,110,101,0],"i8",x);Ca=O([97,108,116,122,
111,110,101,0],"i8",x);ua=O([100,97,121,108,105,103,104,116,0],"i8",x);Sa=O([40,122,122,41,0],"i8",x);bb=O([116,122,110,97,109,101,0],"i8",x);lb=O([99,108,111,99,107,0],"i8",x);yb=O([115,108,101,101,112,0],"i8",x);Xa=O([103,109,116,105,109,101,0],"i8",x);Va=O([108,111,99,97,108,116,105,109,101,0],"i8",x);xb=O([109,107,116,105,109,101,0],"i8",x);Db=O([115,116,114,102,116,105,109,101,0],"i8",x);pa=O([115,116,114,112,116,105,109,101,0],"i8",x);gb=O([116,122,115,101,116,0],"i8",x);sb=O([0,0,0,0,0,0,0,
0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],x);ob=O([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,118,97,114,105,111,117,115,32,102,117,110,99,116,105,111,110,115,32,116,111,32,109,97,110,105,112,117,108,97,116,101,32,116,105,109,101,32,118,97,108,117,101,115,46,10,10,84,104,101,114,101,32,97,114,101,32,116,119,111,32,115,116,97,110,100,97,114,100,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,32,111,102,32,116,105,109,101,46,32,32,79,110,101,32,
105,115,32,116,104,101,32,110,117,109,98,101,114,10,111,102,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,44,32,105,110,32,85,84,67,32,40,97,46,107,46,97,46,32,71,77,84,41,46,32,32,73,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,101,103,101,114,10,111,114,32,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,40,116,111,32,114,101,112,114,101,115,101,110,116,32,102,114,97,99,116,105,111,110,115,32,111,102,32,115,
101,99,111,110,100,115,41,46,10,84,104,101,32,69,112,111,99,104,32,105,115,32,115,121,115,116,101,109,45,100,101,102,105,110,101,100,59,32,111,110,32,85,110,105,120,44,32,105,116,32,105,115,32,103,101,110,101,114,97,108,108,121,32,74,97,110,117,97,114,121,32,49,115,116,44,32,49,57,55,48,46,10,84,104,101,32,97,99,116,117,97,108,32,118,97,108,117,101,32,99,97,110,32,98,101,32,114,101,116,114,105,101,118,101,100,32,98,121,32,99,97,108,108,105,110,103,32,103,109,116,105,109,101,40,48,41,46,10,10,84,104,
101,32,111,116,104,101,114,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,105,115,32,97,32,116,117,112,108,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,32,103,105,118,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,101,32,116,117,112,108,101,32,105,116,101,109,115,32,97,114,101,58,10,32,32,121,101,97,114,32,40,102,111,117,114,32,100,105,103,105,116,115,44,32,101,46,103,46,32,49,57,57,56,41,10,32,32,109,111,110,116,104,32,40,49,45,49,50,41,10,32,32,100,97,
121,32,40,49,45,51,49,41,10,32,32,104,111,117,114,115,32,40,48,45,50,51,41,10,32,32,109,105,110,117,116,101,115,32,40,48,45,53,57,41,10,32,32,115,101,99,111,110,100,115,32,40,48,45,53,57,41,10,32,32,119,101,101,107,100,97,121,32,40,48,45,54,44,32,77,111,110,100,97,121,32,105,115,32,48,41,10,32,32,74,117,108,105,97,110,32,100,97,121,32,40,100,97,121,32,105,110,32,116,104,101,32,121,101,97,114,44,32,49,45,51,54,54,41,10,32,32,68,83,84,32,40,68,97,121,108,105,103,104,116,32,83,97,118,105,110,103,115,
32,84,105,109,101,41,32,102,108,97,103,32,40,45,49,44,32,48,32,111,114,32,49,41,10,73,102,32,116,104,101,32,68,83,84,32,102,108,97,103,32,105,115,32,48,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,114,101,103,117,108,97,114,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,49,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,68,83,84,32,116,105,109,101,32,122,111,110,
101,59,10,105,102,32,105,116,32,105,115,32,45,49,44,32,109,107,116,105,109,101,40,41,32,115,104,111,117,108,100,32,103,117,101,115,115,32,98,97,115,101,100,32,111,110,32,116,104,101,32,100,97,116,101,32,97,110,100,32,116,105,109,101,46,10,10,86,97,114,105,97,98,108,101,115,58,10,10,116,105,109,101,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,115,116,97,110,
100,97,114,100,32,116,105,109,101,10,97,108,116,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,68,83,84,32,116,105,109,101,10,100,97,121,108,105,103,104,116,32,45,45,32,119,104,101,116,104,101,114,32,108,111,99,97,108,32,116,105,109,101,32,115,104,111,117,108,100,32,114,101,102,108,101,99,116,32,68,83,84,10,116,122,110,97,109,101,32,45,45,32,116,117,112,108,
101,32,111,102,32,40,115,116,97,110,100,97,114,100,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,44,32,68,83,84,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,41,10,10,70,117,110,99,116,105,111,110,115,58,10,10,116,105,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,97,115,32,97,32,102,108,111,97,116,10,99,108,111,99,107,40,41,
32,45,45,32,114,101,116,117,114,110,32,67,80,85,32,116,105,109,101,32,115,105,110,99,101,32,112,114,111,99,101,115,115,32,115,116,97,114,116,32,97,115,32,97,32,102,108,111,97,116,10,115,108,101,101,112,40,41,32,45,45,32,100,101,108,97,121,32,102,111,114,32,97,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,32,103,105,118,101,110,32,97,115,32,97,32,102,108,111,97,116,10,103,109,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,
110,99,101,32,69,112,111,99,104,32,116,111,32,85,84,67,32,116,117,112,108,101,10,108,111,99,97,108,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,10,97,115,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,10,99,116,105,109,101,40,41,32,45,45,32,
99,111,110,118,101,114,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,116,111,32,115,116,114,105,110,103,10,109,107,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,10,115,116,114,102,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,
32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,115,116,114,112,116,105,109,101,40,41,32,45,45,32,112,97,114,115,101,32,115,116,114,105,110,103,32,116,111,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,116,122,115,101,116,40,41,32,45,45,32,99,104,97,110,103,101,32,116,104,101,32,108,111,99,97,108,
32,116,105,109,101,122,111,110,101,0],"i8",x);wb=O([80,89,84,72,79,78,89,50,75,0],"i8",x);Ua=O(1,"i1",x);Fb=O([115,116,114,117,99,116,95,116,105,109,101,0],"i8",x);w[R]=r;w[R+4]=t;w[R+8]=v;w[R+12]=y;w[R+16]=A;w[R+20]=z;w[R+24]=C;w[R+28]=F;w[R+32]=B;w[R+36]=I;w[R+40]=D;w[R+44]=L;w[R+48]=J;w[R+52]=N;w[R+56]=H;w[R+60]=X;w[R+64]=W;w[R+68]=S;w[$]=Y;w[$+4]=ea;w[$+8]=R;w[sb]=Ia;w[sb+4]=g+6;w[sb+12]=m;w[sb+16]=lb;w[sb+20]=g+8;w[sb+28]=n;w[sb+32]=yb;w[sb+36]=g+10;w[sb+44]=o;w[sb+48]=Xa;w[sb+52]=g+12;w[sb+
60]=Z;w[sb+64]=Va;w[sb+68]=g+14;w[sb+76]=ja;w[sb+80]=ta;w[sb+84]=g+16;w[sb+92]=Ea;w[sb+96]=Ka;w[sb+100]=g+18;w[sb+108]=oa;w[sb+112]=xb;w[sb+116]=g+20;w[sb+124]=la;w[sb+128]=Db;w[sb+132]=g+22;w[sb+140]=Ha;w[sb+144]=pa;w[sb+148]=g+24;w[sb+156]=Ba;w[sb+160]=gb;w[sb+164]=g+26;w[sb+172]=Ya}var j={arguments:[]},l,m,n,q,o,r,t,v,y,A,z,C,F,B,I,D,L,J,N,H,X,W,S,R,$,Y,ea,U,V,Z,da,ja,aa,wa,K,G,qa,fa,ia,Ja,za,ca,ka,La,sa,Ha,na,Ga,xa,Ba,ta,Ta,Ea,Ka,Na,oa,ba,la,Ia,Ya,Pa,ra,Ca,ua,Sa,bb,lb,yb,Xa,Va,xb,Db,pa,gb,sb,
ob,wb,Ua,Fb;j._inittime=function(){var b;for(b=-1;;)switch(b){case -1:var d,e,f;e=t7(Ia,sb,ob);b=e==0?10:1;break;case 1:b=w[KL]==0?3:2;break;case 2:f=0;b=5;break;case 3:f=b=$W(wb);b=b==0?5:4;break;case 4:b=w[f]==0?5:6;break;case 5:d=1;b=7;break;case 6:d=0;b=7;break;case 7:x7(e,K,d);b=h5(e);w[wa]=b;w[w[wa]]+=1;c(e);b=w[Ua]==0?8:9;break;case 8:C9(U,$);b=9;break;case 9:w[U]+=1;w7(e,Fb,U);w[Ua]=1;b=10;break;case 10:return;default:p(0,"bad label: "+b)}};P=P.concat([0,0,nFb,0,fY,0,function(){var b;for(b=
-1;;)switch(b){case -1:var d,e;e=h();b=e==0?1:2;break;case 1:B4(w[Vs]);d=0;b=3;break;case 2:d=UZ(e);b=3;break;case 3:return b=d;default:p(0,"bad label: "+b)}},0,function(){var b=EX()/1E6;return UZ(b)},0,function(b,d){var e=s;s+=8;u(e,0,8);var f;for(f=-1;;)switch(f){case -1:var c,g=e;f=A5(d,q,O([g,0,0,0],["double*",0,0,0],E))==0?1:2;break;case 1:c=0;f=5;break;case 2:a:{var h=w[g];f=s;s+=8;u(f,0,8);for(var i=a,i=-1;;)switch(i){case -1:var j,l=f,m,i=h;m=i%1;i=sW(i);w[l]=i|0;w[l+4]=m*1E6|0;i=_select(0,
0,0,0,l)!=0?1:3;break;case 1:i=w[vV]!=4?2:3;break;case 2:B4(w[Vs]);j=-1;i=4;break;case 3:j=0;i=4;break;case 4:h=j;s=f;f=h;break a;default:p(0,"bad label: "+i)}f=a}f=f!=0?3:4;break;case 3:c=0;f=5;break;case 4:w[Q]+=1;c=Q;f=5;break;case 5:return s=e,c;default:p(0,"bad label: "+f)}},0,function(e,f){var c=s;s+=8;u(c,0,8);var h;for(h=-1;;)switch(h){case -1:var i,j=c;h=b(f,V,j)==0?1:2;break;case 1:i=0;h=3;break;case 2:i=d(w[j],g+2);h=3;break;case 3:return h=i,s=c,h;default:p(0,"bad label: "+h)}},0,function(e,
f){var c=s;s+=8;u(c,0,8);var h;for(h=-1;;)switch(h){case -1:var i,j=c;h=b(f,da,j)==0?1:2;break;case 1:i=0;h=3;break;case 2:i=d(w[j],g+4);h=3;break;case 3:return h=i,s=c,h;default:p(0,"bad label: "+h)}},0,function(b,d){var f=s;s+=52;u(f,0,52);var c;for(c=-1;;)switch(c){case -1:var g,h=f,i=f+4,j,l=f+48;c=d;w[h]=0;c=S0(c,ta,0,1,O([h,0,0,0],["%struct.PyObject**",0,0,0],E))==0?1:2;break;case 1:g=0;c=11;break;case 2:c=w[h]==0?3:4;break;case 3:c=RX(0);w[l]=c;c=fY(l);iV(i,c,44,4,0);c=6;break;case 4:c=e(w[h],
i)==0?5:6;break;case 5:g=0;c=11;break;case 6:j=c=gY(i);c=c==0?7:8;break;case 7:T(w[wt],Ta);g=0;c=11;break;case 8:c=w[j+24]==10?9:10;break;case 9:w[j+24]=0;c=10;break;case 10:g=a3(j);c=11;break;case 11:return s=f,g;default:p(0,"bad label: "+c)}},0,function(b,d){var e=s;s+=8;u(e,0,8);var c;for(c=-1;;)switch(c){case -1:var g,h=e,i=e+4,j,l;c=d;w[h]=0;c=S0(c,Ka,0,1,O([h,0,0,0],["%struct.PyObject**",0,0,0],E))==0?1:2;break;case 1:g=0;c=14;break;case 2:c=w[h]==0|w[h]==Q?3:4;break;case 3:c=RX(0);w[i]=c;c=
9;break;case 4:l=Z3(w[h]);c=nY()!=0?5:6;break;case 5:g=0;c=14;break;case 6:c=f(l);w[i]=c;c=w[i]==-1?7:9;break;case 7:c=nY()!=0?8:9;break;case 8:g=0;c=14;break;case 9:j=c=gY(fY(i));c=c==0?10:11;break;case 10:T(w[wt],Na);g=0;c=14;break;case 11:c=w[j+24]==10?12:13;break;case 12:w[j+24]=0;c=13;break;case 13:g=a3(j);c=14;break;case 14:return s=e,g;default:p(0,"bad label: "+c)}},0,function(b,d){var f=s;s+=44;u(f,0,44);var c;for(c=-1;;)switch(c){case -1:var g,h=f,i;c=e(d,h)==0?1:2;break;case 1:g=0;c=6;break;
case 2:w[h+24]=-1;i=QX(h);c=i==-1?3:5;break;case 3:c=w[h+24]==-1?4:5;break;case 4:T(w[zu],ba);g=0;c=6;break;case 5:g=UZ(i);c=6;break;case 6:return c=g,s=f,c;default:p(0,"bad label: "+c)}},0,function(b,d){var f=s;s+=56;u(f,0,56);var c;for(c=-1;;)switch(c){case -1:var g,h;g=f;var i=f+4,j=f+48,l,m,n,o,q=f+52;c=d;n=w[g]=0;PV(i,0,44,1,0);c=A5(c,fa,O([j,0,0,0,g,0,0,0],["i8**",0,0,0,"%struct.PyObject**",0,0,0],E))==0?1:2;break;case 1:h=0;c=43;break;case 2:c=w[g]==0?3:4;break;case 3:c=RX(0);w[q]=c;c=fY(q);
iV(i,c,44,4,0);c=6;break;case 4:c=e(w[g],i)==0?5:6;break;case 5:h=0;c=43;break;case 6:var r=i+16;c=w[i+16]==-1?7:8;break;case 7:w[r]=0;c=11;break;case 8:c=w[r]<0?10:9;break;case 9:c=w[i+16]>11?10:11;break;case 10:T(w[wt],ia);h=0;c=43;break;case 11:var t=i+12;c=w[i+12]==0?12:13;break;case 12:w[t]=1;c=16;break;case 13:c=w[t]<0?15:14;break;case 14:c=w[i+12]>31?15:16;break;case 15:T(w[wt],Ja);h=0;c=43;break;case 16:c=w[i+8]<0?18:17;break;case 17:c=w[i+8]>23?18:19;break;case 18:T(w[wt],za);h=0;c=43;break;
case 19:c=w[i+4]<0?21:20;break;case 20:c=w[i+4]>59?21:22;break;case 21:T(w[wt],ca);h=0;c=43;break;case 22:c=w[i]<0?24:23;break;case 23:c=w[i]>61?24:25;break;case 24:T(w[wt],ka);h=0;c=43;break;case 25:c=w[i+24]<0?26:27;break;case 26:T(w[wt],La);h=0;c=43;break;case 27:var v=i+28;c=w[i+28]==-1?28:29;break;case 28:w[v]=0;c=32;break;case 29:c=w[v]<0?31:30;break;case 30:c=w[i+28]>365?31:32;break;case 31:T(w[wt],sa);h=0;c=43;break;case 32:var G=i+32;c=w[i+32]<-1?33:34;break;case 33:w[G]=-1;c=36;break;case 34:c=
w[G]>1?35:36;break;case 35:w[i+32]=1;c=36;break;case 36:l=ub(w[j]);o=1024;c=37;break;case 37:n=c=Ma(o);c=c==0?38:39;break;case 38:h=JY();c=43;break;case 39:m=0;c=m!=0?41:40;break;case 40:c=l*256<=o?41:42;break;case 41:h=NY(n,m);dW(n);c=43;break;case 42:dW(n);o+=o;c=37;break;case 43:return g=h,s=f,g;default:p(0,"bad label: "+c)}},0,function(b,d){var e;for(e=-1;;)switch(e){case -1:var f,c,g,h;f=d;g=J1(na);e=g==0?1:2;break;case 1:c=0;e=5;break;case 2:h=y_(g,Ga,xa,O([f,0,0,0],["%struct.PyObject*",0,0,
0],E));w[g]-=1;e=w[g]==0?3:4;break;case 3:P[w[w[g+4]+24]](g);e=4;break;case 4:c=h;e=5;break;case 5:return e=c;default:p(0,"bad label: "+e)}},0,function(){var b;for(b=-1;;)switch(b){case -1:var d,e;e=J1(Ia);b=e==0?1:2;break;case 1:d=0;b=5;break;case 2:PX();c(e);w[e]-=1;b=w[e]==0?3:4;break;case 3:P[w[w[e+4]+24]](e);b=4;break;case 4:w[Q]+=1;d=Q;b=5;break;case 5:return b=d;default:p(0,"bad label: "+b)}},0]);j.run=i;i();return j});
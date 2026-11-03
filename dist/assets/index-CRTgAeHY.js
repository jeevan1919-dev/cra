(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,Pe=2301,F=2302,Fe=2303,Ie=2400,Le=2401,I=2402,Re=3200,ze=`srgb`,L=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,R(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function st(e,t,n){return Math.max(t,Math.min(n,e))}function ct(e,t){return(e%t+t)%t}function lt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ut(e,t,n){return e===t?0:(n-e)/(t-e)}function dt(e,t,n){return(1-n)*e+n*t}function ft(e,t,n,r){return dt(e,t,1-Math.exp(-n*r))}function pt(e,t=1){return t-Math.abs(ct(e,t*2)-t)}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ht(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function gt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function _t(e,t){return e+Math.random()*(t-e)}function vt(e){return e*(.5-Math.random())}function yt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bt(e){return e*it}function xt(e){return e*at}function St(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ct(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function wt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Tt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Et(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ot(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var kt={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:st,euclideanModulo:ct,mapLinear:lt,inverseLerp:ut,lerp:dt,damp:ft,pingpong:pt,smoothstep:mt,smootherstep:ht,randInt:gt,randFloat:_t,randFloatSpread:vt,seededRandom:yt,degToRad:bt,radToDeg:xt,isPowerOfTwo:St,ceilPowerOfTwo:Ct,floorPowerOfTwo:wt,setQuaternionFromProperEuler:Tt,normalize:Ot,denormalize:Dt},B=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},At=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jt.copy(this).projectOnVector(e),this.sub(jt)}reflect(e){return this.sub(jt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jt=new V,Mt=new At,Nt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Pt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Pt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Pt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Pt=new Nt,Ft=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),It=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lt(){let e={enabled:!0,workingColorSpace:L,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Bt(e.r),e.g=Bt(e.g),e.b=Bt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[L]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Ft,fromXYZ:It,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var Rt=Lt();function zt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Vt,Ht=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vt===void 0&&(Vt=qe(`canvas`)),Vt.width=e.width,Vt.height=e.height;let t=Vt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Vt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=zt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(zt(t[e]/255)*255):t[e]=zt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ut=0,Wt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Gt(r[t].image)):e.push(Gt(r[t]))}else e=Gt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Gt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ht.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Kt=0,qt=new V,Jt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=ot(),this.name=``,this.source=new Wt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(qt).x}get height(){return this.source.getSize(qt).y}get depth(){return this.source.getSize(qt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=300,Jt.DEFAULT_ANISOTROPY=1;var Yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Jt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Wt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Zt=class extends Xt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Qt=class extends Jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$t=class extends Jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},en=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/tn.setFromMatrixColumn(e,0).length(),i=1/tn.setFromMatrixColumn(e,1).length(),a=1/tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rn,e,an)}lookAt(e,t,n){let r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),on.crossVectors(n,cn),on.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),on.crossVectors(n,cn)),on.normalize(),sn.crossVectors(cn,on),r[0]=on.x,r[4]=sn.x,r[8]=cn.x,r[1]=on.y,r[5]=sn.y,r[9]=cn.y,r[2]=on.z,r[6]=sn.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=tn.set(r[0],r[1],r[2]).length(),o=tn.set(r[4],r[5],r[6]).length(),s=tn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),nn.copy(this);let c=1/a,l=1/o,u=1/s;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=l,nn.elements[5]*=l,nn.elements[6]*=l,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,t.setFromRotationMatrix(nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tn=new V,nn=new en,rn=new V(0,0,0),an=new V(1,1,1),on=new V,sn=new V,cn=new V,ln=new en,un=new At,dn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-st(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(st(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ln.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ln,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return un.setFromEuler(this),this.setFromQuaternion(un,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER=`XYZ`;var fn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},pn=0,mn=new V,hn=new At,gn=new en,_n=new V,vn=new V,yn=new V,bn=new At,xn=new V(1,0,0),Sn=new V(0,1,0),Cn=new V(0,0,1),wn={type:`added`},Tn={type:`removed`},En={type:`childadded`,child:null},Dn={type:`childremoved`,child:null},On=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pn++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new dn,r=new At,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new en},normalMatrix:{value:new Nt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.multiply(hn),this}rotateOnWorldAxis(e,t){return hn.setFromAxisAngle(e,t),this.quaternion.premultiply(hn),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(Sn,e)}rotateZ(e){return this.rotateOnAxis(Cn,e)}translateOnAxis(e,t){return mn.copy(e).applyQuaternion(this.quaternion),this.position.add(mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(Sn,e)}translateZ(e){return this.translateOnAxis(Cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_n.copy(e):_n.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(vn,_n,this.up):gn.lookAt(_n,vn,this.up),this.quaternion.setFromRotationMatrix(gn),r&&(gn.extractRotation(r.matrixWorld),hn.setFromRotationMatrix(gn),this.quaternion.premultiply(hn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,e,yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vn,bn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};On.DEFAULT_UP=new V(0,1,0),On.DEFAULT_MATRIX_AUTO_UPDATE=!0,On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=class extends On{constructor(){super(),this.isGroup=!0,this.type=`Group`}},An={type:`move`},jn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(An)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pn={h:0,s:0,l:0};function Fn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var In=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=ct(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Fn(i,r,e+1/3),this.g=Fn(i,r,e),this.b=Fn(i,r,e-1/3)}return Rt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=Mn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}copyLinearToSRGB(e){return this.r=Bt(e.r),this.g=Bt(e.g),this.b=Bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return Rt.workingToColorSpace(Ln.copy(this),e),Math.round(st(Ln.r*255,0,255))*65536+Math.round(st(Ln.g*255,0,255))*256+Math.round(st(Ln.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=ze){Rt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pn);let n=dt(Nn.h,Pn.h,t),r=dt(Nn.s,Pn.s,t),i=dt(Nn.l,Pn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new In;In.NAMES=Mn;var Rn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new In(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},zn=class extends On{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new Yt,Zn=new Yt,Qn=new Yt,$n=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)!==null&&Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,rr=new er,ir=new V,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new V,gr=new B,_r=0,vr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:Et(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ot(e,this.array):Math.round(e*t)}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new V,wr=new V,Tr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new en,Or=new On,kr=new V,Ar=new er,jr=new er,Mr=new V,Nr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Er++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?br:yr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Nt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let l=new V,u=new V,d=new V,f=new B,p=new B,m=new B,h=new V,g=new V;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new V,b=new V,x=new V,S=new V;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=new V,Fr=new V,Ir=new Nt,Lr=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pr.subVectors(n,t).cross(Fr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ir.getNormalMatrix(e),r=this.coplanarPoint(Pr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Rr=0,zr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new In(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new In().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Lr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Br=new V,Vr=new V,Hr=new V,Ur=new V,Wr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vr.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Vr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Ur.dot(this.direction),s=-Ur.dot(Hr),c=Ur.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Vr).addScaledVector(Hr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Br.subVectors(e.center,this.origin);let n=Br.dot(this.direction),r=Br.dot(Br)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new In(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new en,qr=new Wr,Jr=new Tr,Yr=new V,Xr=new V,Zr=new V,Qr=new V,$r=new V,ei=new V,ti=new V,ni=new V,H=class extends On{constructor(e=new Nr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2)||(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),(n.boundingBox===null||qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ii(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ii(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ii(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ii(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ri(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ii(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ri(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new V;$n.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};$n.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var ai=class extends Jt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},oi=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},si=new en,ci=new en,li=[],ui=new er,di=new en,fi=new H,pi=new Tr,mi=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,di)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),ui.copy(e.boundingBox).applyMatrix4(si),this.boundingBox.union(ui)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,si),pi.copy(e.boundingSphere).applyMatrix4(si),this.boundingSphere.union(pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(fi.geometry=this.geometry,fi.material=this.material,fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pi.copy(this.boundingSphere),pi.applyMatrix4(n),e.ray.intersectsSphere(pi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,si),ci.multiplyMatrices(n,si),fi.matrixWorld=ci,fi.raycast(e,li);for(let e=0,n=li.length;e<n;e++){let n=li[e];n.instanceId=i,n.object=this,t.push(n)}li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hi=new Tr,gi=new B(.5,.5),_i=new V,vi=class{constructor(e=new Lr,t=new Lr,n=new Lr,r=new Lr,i=new Lr,a=new Lr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476+gi.distanceTo(e.center),hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(_i.x=r.normal.x>0?e.max.x:e.min.x,_i.y=r.normal.y>0?e.max.y:e.min.y,_i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_i)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yi=new en,bi=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new vi),n[e].setFromProjectionMatrix(yi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new vi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},xi=class extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new In(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Si=new V,Ci=new V,wi=new en,Ti=new Wr,Ei=new Tr,Di=new V,Oi=new V,ki=class extends On{constructor(e=new Nr,t=new xi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Si.fromBufferAttribute(t,e-1),Ci.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Si.distanceTo(Ci);e.setAttribute(`lineDistance`,new xr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere),Ei.applyMatrix4(r),Ei.radius+=i,e.ray.intersectsSphere(Ei)===!1)return;wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ai(this,e,Ti,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ai(this,e,Ti,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ai(this,e,Ti,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ai(this,e,Ti,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ai(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Si.fromBufferAttribute(s,i),Ci.fromBufferAttribute(s,a),n.distanceSqToSegment(Si,Ci,Di,Oi)>r)return;Di.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Di);if(!(c<t.near||c>t.far))return{distance:c,point:Oi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ji=new V,Mi=new V,Ni=class extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ji.fromBufferAttribute(t,e),Mi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ji.distanceTo(Mi);e.setAttribute(`lineDistance`,new xr(n,1))}else R(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Pi=class extends Jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends Jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends Jt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Li=class extends Ii{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},U=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zi=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bi=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends Bi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hi=class e extends Nr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new xr(i,3)),this.setAttribute(`normal`,new xr(i.slice(),3)),this.setAttribute(`uv`,new xr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ui=class e extends Hi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wi=new V,Gi=new V,Ki=new V,qi=new $n,Ji=class extends Nr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(it*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u=new Map,d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=qi;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),qi.getNormal(Ki),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=qi[c[e]],o=qi[c[t]],f=`${n}_${i}`,p=`${i}_${n}`,m=u.get(p);m?(Ki.dot(m.normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u.set(p,null)):u.has(f)||u.set(f,{index0:s[e],index1:s[t],normal:Ki.clone()})}}for(let e of u.values())if(e){let{index0:t,index1:n}=e;Wi.fromBufferAttribute(a,t),Gi.fromBufferAttribute(a,n),d.push(Wi.x,Wi.y,Wi.z),d.push(Gi.x,Gi.y,Gi.z)}this.setAttribute(`position`,new xr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Yi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new en;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(st(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(st(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Xi=class extends Yi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zi=class extends Xi{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Qi(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var $i=new V,ea=new V,ta=new Qi,na=new Qi,ra=new Qi,ia=class extends Yi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(ea.subVectors(r[0],r[1]).add(r[0]),c=ea);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:($i.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=$i),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ta.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),na.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),ra.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ta.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),na.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),ra.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ta.calc(s),na.calc(s),ra.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function aa(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function oa(e,t){let n=1-e;return n*n*t}function sa(e,t){return 2*(1-e)*e*t}function ca(e,t){return e*e*t}function la(e,t,n,r){return oa(e,t)+sa(e,n)+ca(e,r)}function ua(e,t){let n=1-e;return n*n*n*t}function da(e,t){let n=1-e;return 3*n*n*e*t}function fa(e,t){return 3*(1-e)*e*e*t}function pa(e,t){return e*e*e*t}function ma(e,t,n,r,i){return ua(e,t)+da(e,n)+fa(e,r)+pa(e,i)}var ha=class extends Yi{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,r.x,i.x,a.x,o.x),ma(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Yi{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ma(e,r.x,i.x,a.x,o.x),ma(e,r.y,i.y,a.y,o.y),ma(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_a=class extends Yi{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Yi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ya=class extends Yi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(la(e,r.x,i.x,a.x),la(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends Yi{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(la(e,r.x,i.x,a.x),la(e,r.y,i.y,a.y),la(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(aa(o,s.x,c.x,l.x,u.x),aa(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}},Sa=Object.freeze({__proto__:null,ArcCurve:Zi,CatmullRomCurve3:ia,CubicBezierCurve:ha,CubicBezierCurve3:ga,EllipseCurve:Xi,LineCurve:_a,LineCurve3:va,QuadraticBezierCurve:ya,QuadraticBezierCurve3:ba,SplineCurve:xa}),Ca=class extends Yi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Sa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Sa[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},wa=class extends Ca{constructor(e){super(),this.type=`Path`,this.currentPoint=new B,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _a(this.currentPoint.clone(),new B(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new ya(this.currentPoint.clone(),new B(e,t),new B(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ha(this.currentPoint.clone(),new B(e,t),new B(n,r),new B(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new xa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Xi(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ta=class extends wa{constructor(e){super(e),this.uuid=ot(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new wa().fromJSON(n))}return this}};function Ea(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Da(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Pa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ka(a,o,n,s,c,l,0),o}function Da(e,t,n,r,i){let a;if(i===io(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=to(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=to(i/r|0,e[i],e[i+1],a);return a&&qa(a,a.next)&&(no(a),a=a.next),a}function Oa(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(qa(n,n.next)||Ka(n.prev,n,n.next)===0)){if(no(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ka(e,t,n,r,i,a,o){if(!e)return;!o&&a&&za(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ja(e,r,i,a):Aa(e))t.push(c.i,e.i,l.i),no(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Ma(Oa(e),t),ka(e,t,n,r,i,a,2)):o===2&&Na(e,t,n,r,i,a):ka(Oa(e),t,n,r,i,a,1);break}}}function Aa(e){let t=e.prev,n=e,r=e.next;if(Ka(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Wa(i,s,a,c,o,l,m.x,m.y)&&Ka(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ja(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ka(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Va(p,m,t,n,r),v=Va(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Wa(s,u,c,d,l,f,y.x,y.y)&&Ka(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Wa(s,u,c,d,l,f,b.x,b.y)&&Ka(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Wa(s,u,c,d,l,f,y.x,y.y)&&Ka(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Wa(s,u,c,d,l,f,b.x,b.y)&&Ka(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ma(e,t){let n=e;do{let r=n.prev,i=n.next.next;!qa(r,i)&&Ja(r,n,n.next,i)&&Qa(r,i)&&Qa(i,r)&&(t.push(r.i,n.i,i.i),no(n),no(n.next),n=e=i),n=n.next}while(n!==e);return Oa(n)}function Na(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Ga(o,e)){let s=eo(o,e);o=Oa(o,o.next),s=Oa(s,s.next),ka(o,t,n,r,i,a,0),ka(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Pa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Da(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ha(o))}i.sort(Fa);for(let e=0;e<i.length;e++)n=Ia(i[e],n);return n}function Fa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ia(e,t){let n=La(e,t);if(!n)return t;let r=eo(n,e);return Oa(r,r.next),Oa(n,n.next)}function La(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(qa(e,n))return n;do{if(qa(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ua(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Qa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Ra(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Ra(e,t){return Ka(e.prev,e,t.prev)<0&&Ka(t.next,e,e.next)<0}function za(e,t,n,r){let i=e;do i.z===0&&(i.z=Va(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ba(i)}function Ba(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Va(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ha(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ua(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Wa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ua(e,t,n,r,i,a,o,s)}function Ga(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Za(e,t)&&(Qa(e,t)&&Qa(t,e)&&$a(e,t)&&(Ka(e.prev,e,t.prev)||Ka(e,t.prev,t))||qa(e,t)&&Ka(e.prev,e,e.next)>0&&Ka(t.prev,t,t.next)>0)}function Ka(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function qa(e,t){return e.x===t.x&&e.y===t.y}function Ja(e,t,n,r){let i=Xa(Ka(e,t,n)),a=Xa(Ka(e,t,r)),o=Xa(Ka(n,r,e)),s=Xa(Ka(n,r,t));return!!(i!==a&&o!==s||i===0&&Ya(e,n,t)||a===0&&Ya(e,r,t)||o===0&&Ya(n,e,r)||s===0&&Ya(n,t,r))}function Ya(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Xa(e){return e>0?1:e<0?-1:0}function Za(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ja(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Qa(e,t){return Ka(e.prev,e,e.next)<0?Ka(e,t,e.next)>=0&&Ka(e,e.prev,t)>=0:Ka(e,t,e.prev)<0||Ka(e,e.next,t)<0}function $a(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function eo(e,t){let n=ro(e.i,e.x,e.y),r=ro(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function to(e,t,n,r){let i=ro(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function no(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ro(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function io(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ao=class{static triangulate(e,t,n=2){return Ea(e,t,n)}},oo=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];so(e),co(n,e);let a=e.length;t.forEach(so);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,co(n,t[e]);let o=ao.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function so(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function co(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var lo=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},uo=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fo=class e extends Nr{constructor(e=new Ta([new B(0,.5),new B(-.5,-.5),new B(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new xr(r,3)),this.setAttribute(`normal`,new xr(i,3)),this.setAttribute(`uv`,new xr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;oo.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];oo.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=oo.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return po(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function po(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var mo=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ho=class e extends Nr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function go(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(vo(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(vo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function _o(e){let t={};for(let n=0;n<e.length;n++){let r=go(e[n]);for(let e in r)t[e]=r[e]}return t}function vo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function yo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function bo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Rt.workingColorSpace}var xo={clone:go,merge:_o},So=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Co=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wo=class extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=So,this.fragmentShader=Co,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=yo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new In().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Yt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Nt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new en().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},To=class extends wo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},W=class extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new In(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new In(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Eo=class extends W{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new In(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new In(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new In(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Do=class extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ko(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ao(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var jo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Mo=class extends jo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},No=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Po=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Fo=class extends jo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Ro(n,t,g,y,r);i[p]=Io(x,o,_,b,m)}return i}};function Io(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Lo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Ro(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Io(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Lo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var zo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ao(e.settings)&&(n.settings={inTangents:ko(e.settings.inTangents,Array),outTangents:ko(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case F:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return F;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ao(this.settings)&&(Bo(this.settings.inTangents,e),Bo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ao(this.settings)&&(Vo(this.settings.inTangents,e),Vo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===F,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ao(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Bo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Vo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}zo.prototype.ValueTypeName=``,zo.prototype.TimeBufferType=Float32Array,zo.prototype.ValueBufferType=Float32Array,zo.prototype.DefaultInterpolation=Pe;var Ho=class extends zo{constructor(e,t,n){super(e,t,n)}};Ho.prototype.ValueTypeName=`bool`,Ho.prototype.ValueBufferType=Array,Ho.prototype.DefaultInterpolation=Ne,Ho.prototype.InterpolantFactoryMethodLinear=void 0,Ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}};Uo.prototype.ValueTypeName=`color`;var Wo=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}};Wo.prototype.ValueTypeName=`number`;var Go=class extends jo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)At.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ko=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};Ko.prototype.ValueTypeName=`quaternion`,Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends zo{constructor(e,t,n){super(e,t,n)}};qo.prototype.ValueTypeName=`string`,qo.prototype.ValueBufferType=Array,qo.prototype.DefaultInterpolation=Ne,qo.prototype.InterpolantFactoryMethodLinear=void 0,qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends zo{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName=`vector`;var Yo=class extends On{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new In(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new In(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zo=new en,Qo=new V,$o=new V,es=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qo),$o.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($o),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ts=new V,ns=new At,rs=new V,is=class extends On{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ts,ns,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,rs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ts,ns,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ts,ns,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},as=new V,os=new B,ss=new B,cs=class extends is{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,os,ss),t.subVectors(ss,os)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ls=class extends is{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},us=class extends es{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new us}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fs=-90,ps=1,ms=class extends On{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new cs(fs,ps,e,t);r.layers=this.layers,this.add(r);let i=new cs(fs,ps,e,t);i.layers=this.layers,this.add(i);let a=new cs(fs,ps,e,t);a.layers=this.layers,this.add(a);let o=new cs(fs,ps,e,t);o.layers=this.layers,this.add(o);let s=new cs(fs,ps,e,t);s.layers=this.layers,this.add(s);let c=new cs(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hs=class extends cs{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},gs=`\\[\\]\\.:\\/`,_s=RegExp(`[\\[\\]\\.:\\/]`,`g`),vs=`[^\\[\\]\\.:\\/]`,ys=`[^`+gs.replace(`\\.`,``)+`]`,bs=`((?:WC+[\\/:])*)`.replace(`WC`,vs),xs=`(WCOD+)?`.replace(`WCOD`,ys),Ss=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,vs),Cs=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,vs),ws=RegExp(`^`+bs+xs+Ss+Cs+`$`),Ts=[`material`,`materials`,`bones`,`map`],Es=class{constructor(e,t,n){let r=n||Ds.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ds=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_s,``)}static parseTrackName(e){let t=ws.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ts.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ds.Composite=Es,Ds.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ds.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ds.prototype.GetterByBindingType=[Ds.prototype._getValue_direct,Ds.prototype._getValue_array,Ds.prototype._getValue_arrayElement,Ds.prototype._getValue_toArray],Ds.prototype.SetterByBindingTypeAndVersioning=[[Ds.prototype._setValue_direct,Ds.prototype._setValue_direct_setNeedsUpdate,Ds.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_array,Ds.prototype._setValue_array_setNeedsUpdate,Ds.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_arrayElement,Ds.prototype._setValue_arrayElement_setNeedsUpdate,Ds.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ds.prototype._setValue_fromArray,Ds.prototype._setValue_fromArray_setNeedsUpdate,Ds.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Os=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,R(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ks(e,t,n,r){let i=As(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function As(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function js(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ns={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new In(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new In(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new In(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new In(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ps={basic:{uniforms:_o([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Ns.meshbasic_vert,fragmentShader:Ns.meshbasic_frag},lambert:{uniforms:_o([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new In(0)},envMapIntensity:{value:1}}]),vertexShader:Ns.meshlambert_vert,fragmentShader:Ns.meshlambert_frag},phong:{uniforms:_o([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new In(0)},specular:{value:new In(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ns.meshphong_vert,fragmentShader:Ns.meshphong_frag},standard:{uniforms:_o([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new In(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ns.meshphysical_vert,fragmentShader:Ns.meshphysical_frag},toon:{uniforms:_o([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new In(0)}}]),vertexShader:Ns.meshtoon_vert,fragmentShader:Ns.meshtoon_frag},matcap:{uniforms:_o([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Ns.meshmatcap_vert,fragmentShader:Ns.meshmatcap_frag},points:{uniforms:_o([G.points,G.fog]),vertexShader:Ns.points_vert,fragmentShader:Ns.points_frag},dashed:{uniforms:_o([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ns.linedashed_vert,fragmentShader:Ns.linedashed_frag},depth:{uniforms:_o([G.common,G.displacementmap]),vertexShader:Ns.depth_vert,fragmentShader:Ns.depth_frag},normal:{uniforms:_o([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Ns.meshnormal_vert,fragmentShader:Ns.meshnormal_frag},sprite:{uniforms:_o([G.sprite,G.fog]),vertexShader:Ns.sprite_vert,fragmentShader:Ns.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ns.background_vert,fragmentShader:Ns.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ns.backgroundCube_vert,fragmentShader:Ns.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ns.cube_vert,fragmentShader:Ns.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ns.equirect_vert,fragmentShader:Ns.equirect_frag},distance:{uniforms:_o([G.common,G.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ns.distance_vert,fragmentShader:Ns.distance_frag},shadow:{uniforms:_o([G.lights,G.fog,{color:{value:new In(0)},opacity:{value:1}}]),vertexShader:Ns.shadow_vert,fragmentShader:Ns.shadow_frag}};Ps.physical={uniforms:_o([Ps.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new In(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new In(0)},specularColor:{value:new In(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ns.meshphysical_vert,fragmentShader:Ns.meshphysical_frag};var Fs={r:0,b:0,g:0},Is=new en,Ls=new Nt;Ls.set(-1,0,0,0,1,0,0,0,1);function Rs(e,t,n,r,i,a){let o=new In(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new H(new U(1,1,1),new wo({name:`BackgroundCubeMaterial`,uniforms:go(Ps.backgroundCube.uniforms),vertexShader:Ps.backgroundCube.vertexShader,fragmentShader:Ps.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Is.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ls),l.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new H(new lo(2,2),new wo({name:`BackgroundMaterial`,uniforms:go(Ps.background.uniforms),vertexShader:Ps.background.vertexShader,fragmentShader:Ps.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Fs,bo(e)),n.buffers.color.setClear(Fs.r,Fs.g,Fs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function zs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Bs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Vs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Hs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Lr,s=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Us=class extends Zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new U(5,5,5),i=new wo({name:`CubemapFromEquirect`,uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new H(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ms(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Ws=256,Gs=3,Ks=20,qs=256,Js=16,Ys=3,Xs=new V,Zs=new In,Qs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ms(1,10,null),this._boxMesh=new H(new U(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Xs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Zs));let h=new ms(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ws,wt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Ws:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=$s(e,!1,!1),n=Math.log2(e)-Gs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$s(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ic()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=tc(),this._integrationMaterial=nc());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Js);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ys)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(qs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rc());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function $s(e,t,n){return new Us(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:L,depthBuffer:n})}function ec(e,t,n){return new wo({name:e,uniforms:t,vertexShader:Ns.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function tc(){return ec(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function nc(){return ec(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Js}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rc(){return ec(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ks}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ic(){return ec(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ac(){return ec(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function oc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Us(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Qs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Qs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function sc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function cc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?br:yr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function lc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function uc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function dc(e,t,n){let r=new WeakMap,i=new Yt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Qt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new B(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function fc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var pc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function mc(e,t,n,r,i,a){let o=new Zt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Nr;u.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let d=new To({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new H(u,d),p=new ls(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Zt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Zt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Ii(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Rt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=pc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var hc=new Jt,gc=new Ii(1,1),_c=new Li(1),vc=new Qt,yc=new $t,bc=new Pi,xc=[],Sc=[],Cc=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function Ec(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=xc[i];if(a===void 0&&(a=new Float32Array(i),xc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Dc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Oc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function kc(e,t){let n=Sc[t];n===void 0&&(n=new Int32Array(t),Sc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ac(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2fv(this.addr,t),Oc(n,t)}}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Dc(n,t))return;e.uniform3fv(this.addr,t),Oc(n,t)}}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4fv(this.addr,t),Oc(n,t)}}function Pc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;Tc.set(r),e.uniformMatrix2fv(this.addr,!1,Tc),Oc(n,r)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;wc.set(r),e.uniformMatrix3fv(this.addr,!1,wc),Oc(n,r)}}function Ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Dc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Oc(n,t)}else{if(Dc(n,r))return;Cc.set(r),e.uniformMatrix4fv(this.addr,!1,Cc),Oc(n,r)}}function Lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2iv(this.addr,t),Oc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dc(n,t))return;e.uniform3iv(this.addr,t),Oc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4iv(this.addr,t),Oc(n,t)}}function Vc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dc(n,t))return;e.uniform2uiv(this.addr,t),Oc(n,t)}}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dc(n,t))return;e.uniform3uiv(this.addr,t),Oc(n,t)}}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dc(n,t))return;e.uniform4uiv(this.addr,t),Oc(n,t)}}function Gc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Gc(gc):hc,n.setTexture2D(t||a,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||yc,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Gc(_c):bc,n.setTextureCube(t||a,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||vc,i)}function Xc(e){switch(e){case 5126:return Ac;case 35664:return jc;case 35665:return Mc;case 35666:return Nc;case 35674:return Pc;case 35675:return Fc;case 35676:return Ic;case 5124:case 35670:return Lc;case 35667:case 35671:return Rc;case 35668:case 35672:return zc;case 35669:case 35673:return Bc;case 5125:return Vc;case 36294:return Hc;case 36295:return Uc;case 36296:return Wc;case 35678:case 36198:case 36298:case 36306:case 35682:return Kc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return Yc}}function Zc(e,t){e.uniform1fv(this.addr,t)}function Qc(e,t){let n=Ec(t,this.size,2);e.uniform2fv(this.addr,n)}function $c(e,t){let n=Ec(t,this.size,3);e.uniform3fv(this.addr,n)}function el(e,t){let n=Ec(t,this.size,4);e.uniform4fv(this.addr,n)}function tl(e,t){let n=Ec(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nl(e,t){let n=Ec(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rl(e,t){let n=Ec(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function il(e,t){e.uniform1iv(this.addr,t)}function al(e,t){e.uniform2iv(this.addr,t)}function ol(e,t){e.uniform3iv(this.addr,t)}function sl(e,t){e.uniform4iv(this.addr,t)}function cl(e,t){e.uniform1uiv(this.addr,t)}function ll(e,t){e.uniform2uiv(this.addr,t)}function ul(e,t){e.uniform3uiv(this.addr,t)}function dl(e,t){e.uniform4uiv(this.addr,t)}function fl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Gc(gc):hc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||yc,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Gc(_c):bc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=kc(n,i);Dc(r,a)||(e.uniform1iv(this.addr,a),Oc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||vc,a[e])}function gl(e){switch(e){case 5126:return Zc;case 35664:return Qc;case 35665:return $c;case 35666:return el;case 35674:return tl;case 35675:return nl;case 35676:return rl;case 5124:case 35670:return il;case 35667:case 35671:return al;case 35668:case 35672:return ol;case 35669:case 35673:return sl;case 5125:return cl;case 36294:return ll;case 36295:return ul;case 36296:return dl;case 35678:case 36198:case 36298:case 36306:case 35682:return fl;case 35679:case 36299:case 36307:return pl;case 35680:case 36300:case 36308:case 36293:return ml;case 36289:case 36303:case 36311:case 36292:return hl}}var _l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xc(t.type)}},vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gl(t.type)}},yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function xl(e,t){e.seq.push(t),e.map[t.id]=t}function Sl(e,t,n){let r=e.name,i=r.length;for(bl.lastIndex=0;;){let a=bl.exec(r),o=bl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xl(n,l===void 0?new _l(s,e,t):new vl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new yl(s),xl(n,e)),n=e}}}var Cl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function wl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Tl=37297,El=0;function Dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ol=new Nt;function kl(e){Rt._getMatrix(Ol,Rt.workingColorSpace,e);let t=`mat3( ${Ol.elements.map(e=>e.toFixed(4))} )`;switch(Rt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Al(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Dl(e.getShaderSource(t),r)}return i}function jl(e,t){let n=kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ml={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Nl(e,t){let n=Ml[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pl=new V;function Fl(){return Rt.getLuminanceCoefficients(Pl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pl.x.toFixed(4)}, ${Pl.y.toFixed(4)}, ${Pl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zl).join(`
`)}function Ll(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zl(e){return e!==``}function Bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(e){return e.replace(Hl,Wl)}function Wl(e,t){let n=Ns[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ul(n)}var Gl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(e){return e.replace(Gl,ql)}function ql(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Jl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Yl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Xl(e){return Yl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Zl={302:`ENVMAP_MODE_REFRACTION`};function Ql(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Zl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var $l={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function eu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:$l[e.combine]||`ENVMAP_BLENDING_NONE`}function tu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Xl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Ql(n),d=eu(n),f=Il(n),p=Ll(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(zl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(zl).join(`
`),g.length>0&&(g+=`
`)):(h=[Jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zl).join(`
`),g=[Jl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ns.tonemapping_pars_fragment,n.toneMapping===0?``:Nl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ns.colorspace_pars_fragment,jl(`linearToOutputTexel`,n.outputColorSpace),Fl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zl).join(`
`)),o=Ul(o),o=Bl(o,n),o=Vl(o,n),s=Ul(s),s=Bl(s,n),s=Vl(s,n),o=Kl(o),s=Kl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=wl(i,i.VERTEX_SHADER,v),x=wl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Al(i,b,`vertex`),n=Al(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Cl(i,m),w=Rl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Tl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=El++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var nu=0,ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new iu(e),t.set(e,n)),n}},iu=class{constructor(e){this.id=nu++,this.code=e,this.usedTimes=0}};function au(e){return e===1030||e===37490||e===36285}function ou(e,t,n,r,i,a){let o=new fn,s=new ru,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Ps[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?I.length-1:null,envMapSize:re?I[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&au(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Rt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Ps[t];n=xo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new tu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function su(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function cu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function lu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function uu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||cu),r.length>1&&r.sort(t||lu),i.length>1&&i.sort(t||lu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function du(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new uu,e.set(t,[i])):n>=r.length?(i=new uu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function fu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new In};break;case`SpotLight`:n={position:new V,direction:new V,color:new In,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new In,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new In,groundColor:new In};break;case`RectAreaLight`:n={color:new In,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function pu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var mu=0;function hu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function gu(e){let t=new fu,n=pu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new en,o=new en;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(hu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=mu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function _u(e){let t=new gu(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function vu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new _u(e),t.set(n,[a])):r>=i.length?(a=new _u(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var yu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Su=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Cu=new en,wu=new V,Tu=new V;function Eu(e,t,n){let i=new vi,a=new B,s=new B,c=new Yt,l=new Do,u=new Oo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new wo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:yu,fragmentShader:bu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Nr;y.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new H(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Zt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ii(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Us(a.x),p.map.depthTexture=new Li(a.x,m)):(p.map=new Zt(a.x,a.y),p.map.depthTexture=new Ii(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),wu.setFromMatrixPosition(d.matrixWorld),e.position.copy(wu),Tu.copy(e.position),Tu.add(xu[t]),e.up.copy(Su[t]),e.lookAt(Tu),e.updateMatrixWorld(),n.makeTranslation(-wu.x,-wu.y,-wu.z),Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Zt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Du(e,t){function n(){let t=!1,n=new Yt,r=null,i=new Yt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new In(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new Yt().fromArray(ie),se=new Yt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function I(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function ze(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new In(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:L}}function Ou(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function O(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:Rt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),N(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),N(e),P(e)}function se(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}C.clear(),b.clear()}function ce(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function le(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ae(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(e,t){let n=f.get(e);if(e.isVideoTexture&&Re(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ve(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ye(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Oe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let be={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},xe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Se={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Ce(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,be[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,be[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,be[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,xe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,xe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Se[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function we(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re),ne(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=he(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&le(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Te(r.start,t.width,4),c=Te(n.start,t.width,4);r.start<=o+1&&s===c&&Te(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function De(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=we(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Rt.getPrimaries(Rt.workingColorSpace),n=t.colorSpace===``?null:Rt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=ze(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Ce(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ee(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ks(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ks(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=L(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=L(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Oe(e,t,n){if(t.image.length!==6)return;let r=we(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Rt.getPrimaries(Rt.workingColorSpace),o=t.colorSpace===``?null:Rt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ze(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);Ce(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=te(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=L(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ke(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Le(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function je(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ye(t.depthTexture,0):ge(t.depthTexture,0);let o=i.__webglTexture,s=Le(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)je(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?je(t.__webglFramebuffer[0],e,0):je(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ae(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ae(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ne(e,t,n){let r=f.get(e);t!==void 0&&ke(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Me(e)}function Pe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ie),ne(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&I(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Le(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ae(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Ce(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ke(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Ce(o,r),ke(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Ce(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ke(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Me(e)}function F(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Fe=[];function Ie(e){if(e.samples>0){if(I(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Fe.length=0,Fe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Fe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Fe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Le(e){return Math.min(p.maxSamples,e.samples)}function I(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Re(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Rt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=se}function ku(e,t){function n(n,r=``){let i,a=Rt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ju=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ri(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wo({vertexShader:Au,fragmentShader:ju,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new lo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Mu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new B,k=null,A=null,ee=new cs;ee.viewport=new Yt;let j=new cs;j.viewport=new Yt;let te=[ee,j],M=new hs,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new jn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Zt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ii(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Zt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new cs,o.layers.enable(n),o.viewport=new Yt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ri,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let P=new js;P.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Pu=new en,Fu=new Nt;Fu.set(-1,0,0,0,1,0,0,0,1);function Iu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,bo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Pu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Fu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Lu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Ru=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zu=null;function Bu(){return zu===null&&(zu=new ai(Ru,16,16,k,g),zu.name=`DFG_LUT`,zu.minFilter=o,zu.magFilter=o,zu.wrapS=t,zu.wrapT=t,zu.generateMipmaps=!1,zu.needsUpdate=!0),zu}var Vu=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=ze;let ce=0,le=0,P=null,ue=-1,de=null,fe=new Yt,pe=new Yt,me=null,he=new In(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new Yt(0,0,_e,ve),Ce=new Yt(0,0,_e,ve),we=!1,Te=new vi,Ee=new bi,De=!1,Oe=!1,ke=new en,Ae=new V,je=new Yt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return P===null?ye:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,L,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at,ot,st;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ut,!1),t.addEventListener(`webglcontextrestored`,dt,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ct()}catch(e){throw t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),z(`WebGLRenderer: `+e.message),e}function ct(){Ie=new sc(F),Ie.init(),at=new ku(F,Ie),Le=new Vs(F,Ie,e,at),I=new Du(F,Ie),Le.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Re=new uc(F),L=new su,Be=new Ou(F,Ie,I,L,Le,at,Re),Ve=new oc(N),He=new Ms(F),ot=new zs(F,He),Ue=new cc(F,He,Re,ot),Ge=new fc(F,Ue,He,ot,Re),nt=new dc(F,Le,Be),Qe=new Hs(L),Ke=new ou(N,Ve,Ie,Le,ot,Qe),qe=new Iu(N,L),Ye=new du,Ze=new vu(Ie),tt=new Rs(N,Ve,I,Ge,x,s),et=new Eu(N,Ge,Le),st=new Lu(F,Re,Le,I),rt=new Bs(F,Ie,Re),it=new lc(F,Ie,Re),Re.programs=Ke.programs,N.capabilities=Le,N.extensions=Ie,N.properties=L,N.renderLists=Ye,N.shadowMap=et,N.state=I,N.info=Re}S!==1009&&(ne=new mc(S,t.width,t.height,o,r,i));let lt=new Nu(N,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){lt.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ut,!1),t.removeEventListener(`webglcontextrestored`,dt,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),tt.dispose(),Ye.dispose(),Ze.dispose(),Be.dispose(),L.dispose(),Ve.dispose(),Ge.dispose(),Ue.dispose(),ot.dispose(),st.dispose(),Ke.dispose(),lt.dispose(),lt.removeEventListener(`sessionstart`,yt),lt.removeEventListener(`sessionend`,bt),xt.stop()};function ut(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),re=!0}function dt(){Xe(`WebGLRenderer: Context Restored.`),re=!1;let e=Re.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;ct(),Re.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function ft(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function pt(e){let t=e.target;t.removeEventListener(`dispose`,pt),mt(t)}function mt(e){ht(e),L.remove(e)}function ht(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function gt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),De===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,r),e.side=0,e.needsUpdate=!0,Ot(e,t,r),e.side=2):Ot(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Ze.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),De===!0&&Qe.setGlobalState(this.clippingPlanes,t),ie!==null&&et.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];gt(o,n,t,e),r.add(o)}else gt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new js;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){_t=e,lt.setAnimationLoop(e),e===null?xt.stop():xt.start()},lt.addEventListener(`sessionstart`,yt),lt.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=lt.enabled===!0&&lt.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(t),t=lt.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Ze.get(e,M.length),j.init(t),j.state.textureUnits=Be.getTextureUnits(),M.push(j),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,We,t.reversedDepth),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),k=Ye.get(e,te.length),k.init(),te.push(k),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,N.sortObjects)}St(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Ne=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ne&&tt.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&Qe.beginShadows();let i=j.state.shadowsArray;if(et.render(i,e,t),De===!0&&Qe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Ne&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(k,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Ne&&tt.render(e),Ct(k,e,t)}P!==null&&le===0&&(Be.updateMultisampleRenderTarget(P),Be.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),ot.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],Be.setTextureUnits(j.state.textureUnits),De===!0&&Qe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ge.update(e),a=e.material;a.visible&&k.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,je.z,s,t)}}else a.visible&&k.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),De===!0&&Qe.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Zt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Ne&&tt.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),De===!0&&Qe.setGlobalState(N.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Dt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ot(e,t,n){t.isScene!==!0&&(t=Me);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,pt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=Ke.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),At(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Dt(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function kt(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ot(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function B(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(De===!0&&(Oe===!0||e!==de)){let t=e===de&&r.id===ue;Qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Dt(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?kt(r,t,i,s,h):Ot(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,Be),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,Be));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Bu()),w){if(E.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Mt(O,T),a&&r.fog===!0&&qe.refreshFogUniforms(O,a),qe.refreshMaterialUniforms(O,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Cl.upload(F,B(v),O,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cl.upload(F,B(v),O,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];st.update(n,S),st.bind(n,S)}}return S}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Pt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $e(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}},Hu=function(){var e=0,t=document.createElement(`div`);t.style.cssText=`position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000`,t.addEventListener(`click`,function(n){n.preventDefault(),r(++e%t.children.length)},!1);function n(e){return t.appendChild(e.dom),e}function r(n){for(var r=0;r<t.children.length;r++)t.children[r].style.display=r===n?`block`:`none`;e=n}var i=(performance||Date).now(),a=i,o=0,s=n(new Hu.Panel(`FPS`,`#0ff`,`#002`)),c=n(new Hu.Panel(`MS`,`#0f0`,`#020`));if(self.performance&&self.performance.memory)var l=n(new Hu.Panel(`MB`,`#f08`,`#201`));return r(0),{REVISION:16,dom:t,addPanel:n,showPanel:r,begin:function(){i=(performance||Date).now()},end:function(){o++;var e=(performance||Date).now();if(c.update(e-i,200),e>=a+1e3&&(s.update(o*1e3/(e-a),100),a=e,o=0,l)){var t=performance.memory;l.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:r}};Hu.Panel=function(e,t,n){var r=1/0,i=0,a=Math.round,o=a(window.devicePixelRatio||1),s=80*o,c=48*o,l=3*o,u=2*o,d=3*o,f=15*o,p=74*o,m=30*o,h=document.createElement(`canvas`);h.width=s,h.height=c,h.style.cssText=`width:80px;height:48px`;var g=h.getContext(`2d`);return g.font=`bold `+9*o+`px Helvetica,Arial,sans-serif`,g.textBaseline=`top`,g.fillStyle=n,g.fillRect(0,0,s,c),g.fillStyle=t,g.fillText(e,l,u),g.fillRect(d,f,p,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d,f,p,m),{dom:h,update:function(c,_){r=Math.min(r,c),i=Math.max(i,c),g.fillStyle=n,g.globalAlpha=1,g.fillRect(0,0,s,f),g.fillStyle=t,g.fillText(a(c)+` `+e+` (`+a(r)+`-`+a(i)+`)`,l,u),g.drawImage(h,d+o,f,p-o,m,d,f,p-o,m),g.fillRect(d+p-o,f,o,m),g.fillStyle=n,g.globalAlpha=.9,g.fillRect(d+p-o,f,o,a((1-c/_)*m))}}};var Uu=typeof self<`u`?self:{};function Wu(e,t){t:{for(var n=[`CLOSURE_FLAGS`],r=Uu,i=0;i<n.length;i++)if((r=r[n[i]])==null){n=null;break t}n=r}return(e=n&&n[e])??t}function Gu(e,t){e=e.split(`.`);for(var n,r=Uu;e.length&&(n=e.shift());)e.length||t===void 0?r=r[n]&&r[n]!==Object.prototype[n]?r[n]:r[n]={}:r[n]=t}function Ku(){throw Error(`Invalid UTF8`)}function qu(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}var Ju,Yu,Xu=void 0,Zu=typeof TextDecoder<`u`,Qu=typeof TextEncoder<`u`;function $u(e){if(Qu)e=(Yu||=new TextEncoder).encode(e);else{let n=0,r=new Uint8Array(3*e.length);for(let i=0;i<e.length;i++){var t=e.charCodeAt(i);if(t<128)r[n++]=t;else{if(t<2048)r[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&i<e.length){let a=e.charCodeAt(++i);if(a>=56320&&a<=57343){t=1024*(t-55296)+a-56320+65536,r[n++]=t>>18|240,r[n++]=t>>12&63|128,r[n++]=t>>6&63|128,r[n++]=63&t|128;continue}i--}t=65533}r[n++]=t>>12|224,r[n++]=t>>6&63|128}r[n++]=63&t|128}}e=n===r.length?r:r.subarray(0,n)}return e}function ed(e){Uu.setTimeout(()=>{throw e},0)}var td=Wu(610401301,!1),nd=Wu(748402147,!0);function rd(){var e=Uu.navigator;return(e&&=e.userAgent)?e:``}var id,ad=Uu.navigator;function od(e){return od[` `](e),e}id=ad&&ad.userAgentData||null,od[` `]=function(){};var sd={},cd=null;function ld(e){var t=e.length,n=3*t/4;n%3?n=Math.floor(n):`=.`.indexOf(e[t-1])!=-1&&(n=`=.`.indexOf(e[t-2])==-1?n-1:n-2);var r=new Uint8Array(n),i=0;return function(e,t){function n(t){for(;r<e.length;){let t=e.charAt(r++),n=cd[t];if(n!=null)return n;if(!/^[\s\xa0]*$/.test(t))throw Error(`Unknown base64 encoding at char: `+t)}return t}ud();for(var r=0;;){let e=n(-1),r=n(0),i=n(64),a=n(64);if(a===64&&e===-1)break;t(e<<2|r>>4),i!=64&&(t(r<<4&240|i>>2),a!=64&&t(i<<6&192|a))}}(e,function(e){r[i++]=e}),i===n?r:r.subarray(0,i)}function ud(){if(!cd){cd={};var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.split(``),t=[`+/=`,`+/`,`-_=`,`-_.`,`-_`];for(let n=0;n<5;n++){let r=e.concat(t[n].split(``));sd[n]=r;for(let e=0;e<r.length;e++){let t=r[e];cd[t]===void 0&&(cd[t]=e)}}}}var dd=typeof Uint8Array<`u`,fd=(!!(td&&id&&id.brands.length>0)||rd().indexOf(`Trident`)==-1&&rd().indexOf(`MSIE`)==-1)&&typeof btoa==`function`,pd=/[-_.]/g,md={"-":`+`,_:`/`,".":`=`};function hd(e){return md[e]||``}function gd(e){if(!fd)return ld(e);e=pd.test(e)?e.replace(pd,hd):e,e=atob(e);var t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function _d(e){return dd&&e!=null&&e instanceof Uint8Array}var vd={};function yd(){return xd||=new Sd(null,vd)}function bd(e){Cd(vd);var t=e.h;return(t=t==null||_d(t)?t:typeof t==`string`?gd(t):null)==null?t:e.h=t}var xd,Sd=class{i(){return new Uint8Array(bd(this)||0)}constructor(e,t){if(Cd(t),this.h=e,e!=null&&e.length===0)throw Error(`ByteString should be constructed with non-empty values`)}};function Cd(e){if(e!==vd)throw Error(`illegal external caller`)}function wd(e,t){e.__closure__error__context__984382||={},e.__closure__error__context__984382.severity=t}var Td=void 0;function Ed(e){return wd(e=Error(e),`warning`),e}function Dd(e,t){if(e!=null){var n=Td??={},r=n[e]||0;r>=t||(n[e]=r+1,wd(e=Error(),`incident`),ed(e))}}function Od(){return typeof BigInt==`function`}var kd=typeof Symbol==`function`&&typeof Symbol()==`symbol`;function Ad(e,t,n=!1){return typeof Symbol==`function`&&typeof Symbol()==`symbol`?n&&Symbol.for&&e?Symbol.for(e):e==null?Symbol():Symbol(e):t}var jd,Md=Ad(`jas`,void 0,!0),Nd=Ad(void 0,`0di`),Pd=Ad(void 0,`1oa`),Fd=Ad(void 0,Symbol()),Id=Ad(void 0,`0ub`),Ld=Ad(void 0,`0ubs`),Rd=Ad(void 0,`0ubsb`),zd=Ad(void 0,`0actk`),Bd=Ad(`m_m`,`lb`,!0),Vd=Ad(),Hd={Wa:{value:0,configurable:!0,writable:!0,enumerable:!1}},Ud=Object.defineProperties,K=kd?Md:`Wa`,Wd=[];function Gd(e,t){kd||K in e||Ud(e,Hd),e[K]|=t}function Kd(e,t){kd||K in e||Ud(e,Hd),e[K]=t}function qd(e){return Gd(e,34),e}function Jd(e){return Gd(e,8192),e}Kd(Wd,7),jd=Object.freeze(Wd);var Yd={};function Xd(e){return e!=null&&e[Bd]===Yd}function Zd(e,t){return t===void 0?e.i!==Qd&&!!(2&e.B[K]):!!(2&t)&&e.i!==Qd}var Qd={};function $d(e,t){if(e!=null){if(typeof e==`string`)e=e?new Sd(e,vd):yd();else if(e.constructor!==Sd){if(_d(e))e=e.length?new Sd(new Uint8Array(e),vd):yd();else{if(!t)throw Error();e=void 0}}}return e}var ef=class{constructor(e,t,n){this.h=e,this.i=t,this.l=n}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}};function tf(e,t,n){var r,i=128&t?0:-1,a=e.length;(r=!!a)&&(r=(r=e[a-1])!=null&&typeof r==`object`&&r.constructor===Object);var o=a+(r?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(r){e=e[a-1];for(let t in e)!isNaN(t)&&n(+t,e[t])}}Object.freeze({});var nf={};function rf(e){return 128&e?nf:void 0}function af(e){return e.jb=!0,e}var of=af(e=>typeof e==`number`),sf=af(e=>typeof e==`string`),cf=af(e=>typeof e==`boolean`),lf=typeof Uu.BigInt==`function`&&typeof Uu.BigInt(0)==`bigint`;function uf(e){var t=e;if(sf(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(of(t)&&!Number.isSafeInteger(t))throw Error(String(t));return lf?BigInt(e):e=cf(e)?e?`1`:`0`:sf(e)?e.trim()||`0`:String(e)}var df=af(e=>lf?e>=pf&&e<=hf:e[0]===`-`?gf(e,ff):gf(e,mf)),ff=(-(2**53-1)).toString(),pf=lf?BigInt(-(2**53-1)):void 0,mf=(2**53-1).toString(),hf=lf?BigInt(2**53-1):void 0;function gf(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r>i)return!1;if(r<i)return!0}}var _f,vf=typeof Uint8Array.prototype.slice==`function`,yf=0,bf=0;function xf(e){var t=e>>>0;yf=t,bf=(e-t)/4294967296>>>0}function Sf(e){if(e<0){xf(-e);let[t,n]=jf(yf,bf);yf=t>>>0,bf=n>>>0}else xf(e)}function Cf(e){var t=_f||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),bf=0,yf=t.getUint32(0,!0)}function wf(e,t){var n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Df(e,t)}function Tf(e,t){return uf(Od()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Df(e,t))}function Ef(e,t){return Od()?uf(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):uf(kf(e,t))}function Df(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=``+(4294967296*t+e);else Od()?n=``+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Of(n)+Of(e));return n}function Of(e){return e=String(e),`0000000`.slice(e.length)+e}function kf(e,t){if(2147483648&t){if(Od())e=``+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{let[n,r]=jf(e,t);e=`-`+Df(n,r)}}else e=Df(e,t);return e}function Af(e){if(e.length<16)Sf(Number(e));else if(Od())e=BigInt(e),yf=Number(e&BigInt(4294967295))>>>0,bf=Number(e>>BigInt(32)&BigInt(4294967295));else{let t=+(e[0]===`-`);bf=yf=0;let n=e.length;for(let r=t,i=(n-t)%6+t;i<=n;r=i,i+=6){let t=Number(e.slice(r,i));bf*=1e6,(yf=1e6*yf+t)>=4294967296&&(bf+=Math.trunc(yf/4294967296),bf>>>=0,yf>>>=0)}if(t){let[e,t]=jf(yf,bf);yf=e,bf=t}}}function jf(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Mf(e){return Array.prototype.slice.call(e)}var Nf=typeof BigInt==`function`?BigInt.asIntN:void 0,Pf=typeof BigInt==`function`?BigInt.asUintN:void 0,Ff=Number.isSafeInteger,If=Number.isFinite,Lf=Math.trunc,Rf=uf(0);function zf(e){if(typeof e!=`number`)throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Bf(e){return e==null||typeof e==`number`?e:e===`NaN`||e===`Infinity`||e===`-Infinity`?Number(e):void 0}function Vf(e){if(typeof e!=`boolean`){var t=typeof e;throw Error(`Expected boolean but got ${t==`object`?e?Array.isArray(e)?`array`:t:`null`:t}: ${e}`)}return e}var Hf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Uf(e){switch(typeof e){case`bigint`:return!0;case`number`:return If(e);case`string`:return Hf.test(e);default:return!1}}function Wf(e){if(e!=null){if(!If(e))throw Ed(`enum`);e|=0}return e}function Gf(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return If(e)?0|e:void 0}function Kf(e){if(e==null)return e;if(typeof e==`string`&&e)e=+e;else if(typeof e!=`number`)return;return If(e)?e>>>0:void 0}function qf(e,t){if(t??=1024,!Uf(e))throw Ed(`int64`);var n=typeof e;switch(t){case 512:switch(n){case`string`:return Qf(e);case`bigint`:return String(Nf(64,e));default:return Zf(e)}case 1024:switch(n){case`string`:return $f(e);case`bigint`:return uf(Nf(64,e));default:return uf(Ff(e)?e:Zf(e))}case 0:switch(n){case`string`:return Qf(e);case`bigint`:return uf(Nf(64,e));default:return Xf(e)}default:return function(e,t=`unexpected value ${e}!`){throw Error(t)}(t,`Unknown format requested type for int64`)}}function Jf(e){var t=e.length;return(e[0]===`-`?t<20||t===20&&e<=`-9223372036854775808`:t<19||t===19&&e<=`9223372036854775807`)?e:(Af(e),kf(yf,bf))}function Yf(e){if(e[0]===`-`)var t=!1;else t=(t=e.length)<20||t===20&&e<=`18446744073709551615`;return t?e:(Af(e),Df(yf,bf))}function Xf(e){if(e=Lf(e),!Ff(e)){Sf(e);var t=yf,n=bf;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=wf(t,n))==`number`?e?-t:t:e?`-`+t:t}return e}function Zf(e){return e=Lf(e),Ff(e)?e=String(e):(Sf(e),e=kf(yf,bf)),e}function Qf(e){var t=Lf(Number(e));return Ff(t)?String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),Jf(e))}function $f(e){var t=Lf(Number(e));return Ff(t)?uf(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),Od()?uf(Nf(64,BigInt(e))):uf(Jf(e)))}function ep(e){var t=typeof e;return e==null?e:t===`bigint`?uf(Nf(64,e)):Uf(e)?t===`string`?$f(e):uf(Ff(e)?e:Zf(e)):void 0}function tp(e){if(e==null)return e;var t=typeof e;if(t===`bigint`)return String(Nf(64,e));if(Uf(e)){if(t===`string`)return Qf(e);if(t===`number`)return Xf(e)}}function np(e){if(e==null)return e;var t=typeof e;if(t===`bigint`)return String(Pf(64,e));if(Uf(e)){if(t===`string`)return t=Lf(Number(e)),Ff(t)&&t>=0?e=String(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),e=Yf(e)),e;if(t===`number`)return function(e){return(e=Lf(e))>=0&&Ff(e)||(Sf(e),e=wf(yf,bf)),e}(e)}}function rp(e){if(e==null||typeof e==`string`||e instanceof Sd)return e}function ip(e){if(typeof e!=`string`)throw Error();return e}function ap(e){if(e!=null&&typeof e!=`string`)throw Error();return e}function op(e){return e==null||typeof e==`string`?e:void 0}function sp(e,t,n,r){return Xd(e)?e:Array.isArray(e)?((r=(n=0|e[K])|32&r|2&r)!==n&&Kd(e,r),new t(e)):(n?2&r?((e=t[Nd])||(qd((e=new t).B),e=t[Nd]=e),t=e):t=new t:t=void 0,t)}function cp(e,t,n){return t?qf(e,1024):ep(e)??(n?Rf:void 0)}function lp(e){return e}var up={},dp=function(){try{return od(new class extends Map{constructor(){super()}}),!1}catch{return!0}}(),fp=class{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,t){return this.h.set(e,t),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,t){return this.h.forEach(e,t)}[Symbol.iterator](){return this.entries()}},pp=dp?(Object.setPrototypeOf(fp.prototype,Map.prototype),Object.defineProperties(fp.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),fp):class extends Map{constructor(){super()}};function mp(e){return e}function hp(e){if(2&e.N)throw Error(`Cannot mutate an immutable Map`)}var gp,_p=class extends pp{constructor(e,t,n=mp,r=mp){super(),this.N=0|e[K],this.O=t,this.ca=n,this.oa=this.O?vp:r;for(let i=0;i<e.length;i++){let a=e[i],o=n(a[0],!1,!0),s=a[1];t?s===void 0&&(s=null):s=r(a[1],!1,!0,void 0,void 0,this.N),super.set(o,s)}}fa(e){return Jd(Array.from(super.entries(),e))}clear(){hp(this),super.clear()}delete(e){return hp(this),super.delete(this.ca(e,!0,!1))}entries(){if(this.O){var e=super.keys();e=new ef(e,yp,this)}else e=super.entries();return e}values(){if(this.O){var e=super.keys();e=new ef(e,_p.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.O?super.forEach((n,r,i)=>{e.call(t,i.get(r),r,i)}):super.forEach(e,t)}set(e,t){return hp(this),(e=this.ca(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.oa(t,!0,!0,this.O,!1,this.N))}hb(e){var t=this.ca(e[0],!1,!0);e=e[1],e=this.O?e===void 0?null:e:this.oa(e,!1,!0,void 0,!1,this.N),super.set(t,e)}has(e){return super.has(this.ca(e,!1,!1))}get(e){e=this.ca(e,!1,!1);var t=super.get(e);if(t!==void 0){var n=this.O;return n?((n=this.oa(t,!1,!0,n,this.Ga,this.N))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function vp(e,t,n,r,i,a){return e=sp(e,r,n,a),i&&(e=zp(e)),e}function yp(e){return[e,this.get(e)]}function bp(){return gp||=new _p(qd([]),void 0,void 0,void 0,up)}function xp(e){return Fd?e[Fd]:void 0}function Sp(e,t){for(let n in e)!isNaN(n)&&t(e,+n,e[n])}_p.prototype.toJSON=void 0;var Cp,wp,Tp=class{},Ep={eb:!0};function Dp(e,t){t<100||Dd(Ld,1)}function Op(e,t,n,r){var i=r!==void 0;r=!!r;var a,o=Fd;!i&&kd&&o&&(a=e[o])&&Sp(a,Dp),o=[];var s=e.length;a=4294967295;var c=!1,l=!!(64&t),u=l?128&t?0:-1:void 0;if(!(1&t)){var d=s&&e[s-1];typeof d==`object`&&d&&d.constructor===Object?a=--s:d=void 0,!l||128&t||i||(c=!0,a=lp(a-u,u,e,d,void 0)+u)}t=void 0;for(var f=0;f<s;f++){let i=e[f];if(i!=null&&(i=n(i,r))!=null){if(l&&f>=a){let e=f-u;(t??={})[e]=i}else o[f]=i}}if(d)for(let e in d){if((s=d[e])==null||(s=n(s,r))==null)continue;let i;f=+e,l&&!Number.isNaN(f)&&(i=f+u)<a?o[i]=s:(t??={})[e]=s}return t&&(c?o.push(t):o[a]=t),i&&Fd&&(e=xp(e))&&e instanceof Tp&&(o[Fd]=function(e){var t=new Tp;return Sp(e,(e,n,r)=>{t[n]=Mf(r)}),t.la=e.la,t}(e)),o}function kp(e){return e[0]=Ap(e[0]),e[1]=Ap(e[1]),e}function Ap(e){switch(typeof e){case`number`:return Number.isFinite(e)?e:``+e;case`bigint`:return df(e)?Number(e):``+e;case`boolean`:return+!!e;case`object`:if(Array.isArray(e)){var t=0|e[K];return e.length===0&&1&t?void 0:Op(e,t,Ap)}if(Xd(e))return jp(e);if(e instanceof Sd){if((t=e.h)==null)e=``;else if(typeof t==`string`)e=t;else{if(fd){for(var n=``,r=0,i=t.length-10240;r<i;)n+=String.fromCharCode.apply(null,t.subarray(r,r+=10240));n+=String.fromCharCode.apply(null,r?t.subarray(r):t),t=btoa(n)}else{n===void 0&&(n=0),ud(),n=sd[n],r=Array(Math.floor(t.length/3)),i=n[64]||``;let e=0,l=0;for(;e<t.length-2;e+=3){var a=t[e],o=t[e+1],s=t[e+2],c=n[a>>2];a=n[(3&a)<<4|o>>4],o=n[(15&o)<<2|s>>6],s=n[63&s],r[l++]=c+a+o+s}switch(c=0,s=i,t.length-e){case 2:s=n[(15&(c=t[e+1]))<<2]||i;case 1:t=t[e],r[l]=n[t>>2]+n[(3&t)<<4|c>>4]+s+i}t=r.join(``)}e=e.h=t}return e}return e instanceof _p?e=e.size===0?void 0:e.fa(kp):void 0}return e}function jp(e){return Op(e=e.B,0|e[K],Ap)}function Mp(e,t){return Np(e,t[0],t[1])}function Np(e,t,n,r=0){if(e==null){var i=32;n?(e=[n],i|=128):e=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error(`narr`);if(i=0|e[K],nd&&1&i)throw Error(`rfarr`);if(2048&i&&!(2&i)&&function(){if(nd)throw Error(`carr`);Dd(zd,5)}(),256&i)throw Error(`farr`);if(64&i)return(i|r)!==i&&Kd(e,i|r),e;if(n&&(i|=128,n!==e[0]))throw Error(`mid`);t:{i|=64;var a=(n=e).length;if(a){var o=a-1;let e=n[o];if(typeof e==`object`&&e&&e.constructor===Object){if((o-=t=128&i?0:-1)>=1024)throw Error(`pvtlmt`);for(var s in e)(a=+s)<o&&(n[a+t]=e[s],delete e[s]);i=-16760833&i|(1023&o)<<14;break t}}if(t){if((s=Math.max(t,a-(128&i?0:-1)))>1024)throw Error(`spvt`);i=-16760833&i|(1023&s)<<14}}}return Kd(e,64|i|r),e}function Pp(e,t){if(typeof e!=`object`)return e;if(Array.isArray(e)){var n=0|e[K];return e.length===0&&1&n?void 0:Fp(e,n,t)}if(Xd(e))return Lp(e);if(e instanceof _p){if(2&(t=e.N))return e;if(!e.size)return;if(n=qd(e.fa()),e.O)for(e=0;e<n.length;e++){let r=n[e],i=r[1];i=typeof i!=`object`||!i?void 0:Xd(i)?Lp(i):Array.isArray(i)?Fp(i,0|i[K],!!(32&t)):void 0,r[1]=i}return n}return e instanceof Sd?e:void 0}function Fp(e,t,n){return 2&t||(!n||4096&t||16&t?e=Rp(e,t,!1,n&&!(16&t)):(Gd(e,34),4&t&&Object.freeze(e))),e}function Ip(e,t,n){return e=new e.constructor(t),n&&(e.i=Qd),e.o=Qd,e}function Lp(e){var t=e.B,n=0|t[K];return Zd(e,n)?e:Up(e,t,n)?Ip(e,t):Rp(t,n)}function Rp(e,t,n,r){return r??=!!(34&t),e=Op(e,t,Pp,r),r=32,n&&(r|=2),Kd(e,t=16769217&t|r),e}function zp(e){var t=e.B,n=0|t[K];return Zd(e,n)?Up(e,t,n)?Ip(e,t,!0):new e.constructor(Rp(t,n,!1)):e}function Bp(e){if(e.i!==Qd)return!1;var t=e.B;return Gd(t=Rp(t,0|t[K]),2048),e.B=t,e.i=void 0,e.o=void 0,!0}function Vp(e){if(!Bp(e)&&Zd(e,0|e.B[K]))throw Error()}function Hp(e,t){t===void 0&&(t=0|e[K]),32&t&&!(4096&t)&&Kd(e,4096|t)}function Up(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Kd(t,2|n),e.i=Qd,!0)}var Wp=uf(0),Gp={};function Kp(e,t,n,r){if((t=qp(e.B,t,void 0,r))!==null||n&&e.o!==Qd)return t}function qp(e,t,n,r){if(t===-1)return null;var i=t+(n?0:-1),a=e.length-1;if(!(a<1+(n?0:-1))){if(i>=a){var o=e[a];if(typeof o==`object`&&o&&o.constructor===Object){n=o[t];var s=!0}else{if(i!==a)return;n=o}}else n=e[i];if(r&&n!=null){if((r=r(n))==null)return r;if(!Object.is(r,n))return s?o[t]=r:e[i]=r,r}return n}}function Jp(e,t,n,r){Vp(e);var i=e.B;return Yp(i,0|i[K],t,n,r),e}function Yp(e,t,n,r,i){var a=n+(i?0:-1),o=e.length-1;if(o>=1+(i?0:-1)&&a>=o){let i=e[o];if(typeof i==`object`&&i&&i.constructor===Object)return i[n]=r,t}return a<=o?(e[a]=r,t):(r!==void 0&&(n>=(o=(t??=0|e[K])>>14&1023||536870912)?r!=null&&(e[o+(i?0:-1)]={[n]:r}):e[a]=r),t)}function Xp(e,t){return Xd(e=qp(e.B,t))||Array.isArray(e)}function Zp(e,t,n){return Xp(e,t=sm(e,n)===t?t:-1)}function Qp(e,t,n,r,i){var a=e.B,o=0|a[K];r=r&&r!==4?r!==1&&Zd(e,o)?1:r:4,i=!!i||r===3,r===2&&Bp(e)&&(o=0|(a=e.B)[K]);var s=(e=em(a,t))===jd?7:0|e[K],c=tm(s,o),l=!(4&c);if(l){let t=0,r=0;for(;t<e.length;t++){let i=n(e[t]);i!=null&&(e[r++]=i)}r<t&&(e.length=r),n=-513&c|4,c=n&=-1025,c&=-4097}return c!==s&&(Kd(e,c),2&c&&Object.freeze(e)),$p(e,c,a,o,t,r,l,i)}function $p(e,t,n,r,i,a,o,s){var c=t,l=nm(t);return l&&a===2&&(e=Mf(e),c=0,t=vm(t,r),r=Yp(n,r,i,e),l=!1),l||(a===1||a===4&&(2&t||!(16&t)&&32&r)?((t|=!e.length||o&&!(4096&t)||32&r&&!(4096&t||16&t)?2:256)!==c&&Kd(e,t),Object.freeze(e)):(s||(t|=16),t!==c&&Kd(e,t))),2&t||!(4096&t||16&t)||Hp(n,r),e}function em(e,t,n){return e=qp(e,t,n),Array.isArray(e)?e:jd}function tm(e,t){return 2&t&&(e|=2),1|e}function nm(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function rm(e){return $d(e,!0)}function im(e){e=Mf(e);for(let t=0;t<e.length;t++){let n=e[t]=Mf(e[t]);Array.isArray(n[1])&&(n[1]=qd(n[1]))}return Jd(e)}function am(e,t,n,r){Vp(e),Yp(e=e.B,0|e[K],t,(r===`0`?Number(n)===0:n===r)?void 0:n)}function om(e,t,n){if(2&t)throw Error();var r=rf(t),i=em(e,n,r),a=i===jd?7:0|i[K],o=tm(a,t);return(2&o||nm(o)||16&o)&&(o===a||nm(o)||Kd(i,o),i=Mf(i),a=0,o=vm(o,t),Yp(e,t,n,i,r)),(o&=-13)!==a&&Kd(i,o),i}function sm(e,t){return um(cm(e=e.B),e,void 0,t)}function cm(e){if(kd)return e[Pd]??(e[Pd]=new Map);if(Pd in e)return e[Pd];var t=new Map;return Object.defineProperty(e,Pd,{value:t}),t}function lm(e,t,n,r,i){var a=cm(e),o=um(a,e,t,n,i);return o!==r&&(o&&(t=Yp(e,t,o,void 0,i)),a.set(n,r)),t}function um(e,t,n,r,i){var a=e.get(r);if(a!=null)return a;a=0;for(let e=0;e<r.length;e++){let o=r[e];qp(t,o,i)!=null&&(a!==0&&(n=Yp(t,n,a,void 0,i)),a=o)}return e.set(r,a),a}function dm(e,t,n){var r=0|e[K],i=rf(r),a=qp(e,n,i);if(Xd(a)){if(!Zd(a))return Bp(a),a.B;var o=a.B}else Array.isArray(a)&&(o=a);if(o){let e=0|o[K];2&e&&(o=Rp(o,e))}return(o=Mp(o,t))!==a&&Yp(e,r,n,o,i),o}function fm(e,t,n,r){var i=e.B,a=0|i[K];if(t=function(e,t,n,r,i){var a=!1;if((r=qp(e,r,i,e=>{var r=sp(e,n,!1,t);return a=r!==e&&r!=null,r}))!=null)return a&&!Zd(r)&&Hp(e,t),r}(i,a,t,n,r),t==null)return t;if(!Zd(e,a=0|i[K])){let o=zp(t);o!==t&&(Bp(e)&&(a=0|(i=e.B)[K]),Hp(i,a=Yp(i,a,n,t=o,r)))}return t}function pm(e,t,n,r,i,a,o,s){a=a&&a!==4?a!==1&&Zd(e,n)?1:a:4,o=!!o||a===3;var c=!!s&&!Zd(e,n);(a===2||c)&&Bp(e)&&(n=0|(t=e.B)[K]);var l=(e=em(t,i))===jd?7:0|e[K],u=tm(l,n);if(s=!(4&u)){var d=e,f=n;let t=!!(2&u);t&&(f|=2);let i=!t,a=!0,o=0,s=0;for(;o<d.length;o++){let e=sp(d[o],r,!1,f);if(e instanceof r){if(!t){let t=Zd(e);i&&=!t,a&&=t}d[s++]=e}}s<o&&(d.length=s),u|=4,u=a?-4097&u:4096|u,u=i?8|u:-9&u}if(u!==l&&(Kd(e,u),2&u&&Object.freeze(e)),c&&!(8&u||!e.length&&(a===1||a===4&&(2&u||!(16&u)&&32&n)))){for(nm(u)&&(e=Mf(e),u=vm(u,n),n=Yp(t,n,i,e)),r=e,c=u,l=0;l<r.length;l++)(d=r[l])!==(u=zp(d))&&(r[l]=u);c|=8,Kd(e,u=c=r.length?4096|c:-4097&c)}return $p(e,u,t,n,i,a,s,o)}function mm(e,t,n){var r=e.B;return pm(e,r,0|r[K],t,n,void 0,!1,!0)}function hm(e){return e??=void 0,e}function q(e,t,n,r,i){return Jp(e,n,r=hm(r),i),r&&!Zd(r)&&Hp(e.B),e}function gm(e,t,n,r){t:{var i=r=hm(r);Vp(e);let a=e.B,o=0|a[K];if(i==null){let e=cm(a);if(um(e,a,o,n)!==t)break t;e.set(n,0)}else o=lm(a,o,n,t);Yp(a,o,t,i)}return r&&!Zd(r)&&Hp(e.B),e}function _m(e,t,n){Vp(e);var r=e.B,i=0|r[K];if(n==null)return Yp(r,i,t),e;var a=n===jd?7:0|n[K],o=a,s=nm(a),c=s||Object.isFrozen(n),l=!0,u=!0;for(let e=0;e<n.length;e++){var d=n[e];s||(d=Zd(d),l&&=!d,u&&=d)}return s||(a=l?13:5,a=u?-4097&a:4096|a),c&&a===o||(n=Mf(n),o=0,a=vm(a,i)),a!==o&&Kd(n,a),i=Yp(r,i,t,n),2&a||!(4096&a||16&a)||Hp(r,i),e}function vm(e,t){return-273&(2&t?2|e:-3&e)}function ym(e,t,n,r){var i=r;Vp(e),e=pm(e,r=e.B,0|r[K],n,t,2,!0),i??=new n,e.push(i),t=n=e===jd?7:0|e[K],(i=Zd(i))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Kd(e,n),i||Hp(r)}function bm(e,t,n){return Gf(Kp(e,t,n))}function xm(e,t){return Kp(e,t,void 0,Bf)??0}function Sm(e,t,n,r){return fm(e,t,n=sm(e,r)===n?n:-1,void 0)}function Cm(e,t){am(e,3,t==null?t:Vf(t),!1)}function wm(e,t,n){if(n!=null){if(typeof n!=`number`||!If(n))throw Ed(`int32`);n|=0}Jp(e,t,n)}function Tm(e,t,n){return Jp(e,t,n==null?n:qf(n))}function Em(e,t,n){return Jp(e,t,n==null?n:function(e){if(!Uf(e))throw Ed(`uint64`);switch(typeof e){case`string`:var t=Lf(Number(e));return Ff(t)&&t>=0?e=uf(t):((t=e.indexOf(`.`))!==-1&&(e=e.substring(0,t)),e=Od()?uf(Pf(64,BigInt(e))):uf(Yf(e))),e;case`bigint`:return uf(Pf(64,e));default:return e>=0&&Ff(e)||((e=Lf(e))>=0&&Ff(e)?e=String(e):(Sf(e),e=Df(yf,bf))),uf(e)}}(n))}function J(e,t,n){Jp(e,t,n==null?n:zf(n))}function Dm(e,t,n){am(e,t,n==null?n:zf(n),0)}function Om(e,t,n){am(e,t,ap(n),``)}function km(e,t,n){{Vp(e);let o=e.B,s=0|o[K];if(n==null)Yp(o,s,t);else{var r=e=n===jd?7:0|n[K],i=nm(e),a=i||Object.isFrozen(n);for(i||(e=0),a||=(n=Mf(n),r=0,e=vm(e,s),!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,i=0;i<n.length;i++){let t=n[i],o=ip(t);Object.is(t,o)||(a&&=(n=Mf(n),r=0,e=vm(e,s),!1),n[i]=o)}e!==r&&(a&&(n=Mf(n),e=vm(e,s)),Kd(n,e)),Yp(o,s,t,n)}}}function Am(e,t,n){Vp(e),Qp(e,t,op,2,!0).push(ip(n))}var jm=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.h=t}};function Mm(e,t){if(typeof e==`string`)return new jm(gd(e),t);if(Array.isArray(e))return new jm(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new jm(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new jm(e,!1);if(e.constructor===Sd)return t=bd(e)||new Uint8Array,new jm(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new jm(e,!1);throw Error()}function Nm(e,t){var n=0,r=0,i=0,a=e.i,o=e.h;do{var s=a[o++];n|=(127&s)<<i,i+=7}while(i<32&&128&s);if(i>32)for(r|=(127&s)>>4,i=3;i<32&&128&s;i+=7)r|=(127&(s=a[o++]))<<i;if(Vm(e,o),!(128&s))return t(n>>>0,r>>>0);throw Error()}function Pm(e){for(var t=0,n=e.h,r=n+10,i=e.i;n<r;){let r=i[n++];if(t|=r,!(128&r))return Vm(e,n),!!(127&t)}throw Error()}function Fm(e){var t=e.i,n=e.h,r=t[n++],i=127&r;if(128&r&&(i|=(127&(r=t[n++]))<<7,128&r&&(i|=(127&(r=t[n++]))<<14,128&r&&(i|=(127&(r=t[n++]))<<21,128&r&&(i|=(r=t[n++])<<28,128&r&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return Vm(e,n),i}function Im(e){return Fm(e)>>>0}function Lm(e){return Nm(e,Ef)}function Rm(e){var t=e.i,n=e.h,r=t[n],i=t[n+1],a=t[n+2];return t=t[n+3],Vm(e,e.h+4),(r|i<<8|a<<16|t<<24)>>>0}function zm(e){var t=Rm(e);e=2*(t>>31)+1;var n=t>>>23&255;return t&=8388607,n==255?t?NaN:1/0*e:n==0?1401298464324817e-60*e*t:e*2**(n-150)*(t+8388608)}function Bm(e){return Fm(e)}function Vm(e,t){if(e.h=t,t>e.l)throw Error()}function Hm(e,t){if(t<0)throw Error();var n=e.h;if((t=n+t)>e.l)throw Error();return e.h=t,n}function Um(e,t){if(t==0)return yd();var n=Hm(e,t);return e.ga&&e.u?n=e.i.subarray(n,n+t):(e=e.i,n=n===(t=n+t)?new Uint8Array:vf?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?yd():new Sd(n,vd)}var Wm=class{constructor(e,t,n,r){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(e,t,n,r)}init(e,t,n,{ga:r=!1,na:i=!1}={}){this.ga=r,this.na=i,e&&(e=Mm(e,this.na),this.i=e.buffer,this.u=e.h,this.o=t||0,this.l=n===void 0?this.i.length:this.o+n,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},Gm=[],Km=0;function qm(e,t,n,r){if(rh.length){let i=rh.pop();return i.A(r),i.h.init(e,t,n,r),i}return new nh(e,t,n,r)}function Jm(e){e.h.clear(),e.l=-1,e.i=-1,rh.length<100&&rh.push(e)}function Ym(e){var t=e.h;if(t.h==t.l)return!1;e.o=e.h.h;var n=Im(e.h);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.i=n,!0}function Xm(e){try{switch(e.i){case 0:e.i==0?Pm(e.h):Xm(e);break;case 1:var t=e.h;Vm(t,t.h+8);break;case 2:if(e.i!=2)Xm(e);else{var n=Im(e.h),r=e.h;Vm(r,r.h+n)}break;case 5:var i=e.h;Vm(i,i.h+4);break;case 3:Zm();let a=e.l;try{for(;;){if(!Ym(e))throw Error();if(e.i==4){if(e.l!=a)throw Error();break}Xm(e)}}catch(e){throw e instanceof RangeError?SyntaxError():e}finally{Km>0&&Km--}break;default:throw Error()}}catch(e){throw e instanceof RangeError?SyntaxError():e}}function Zm(){if(Km>=100)throw SyntaxError();Km++}function Qm(e,t,n){var r=e.h.l,i=Im(e.h),a=(i=e.h.h+i)-r;if(a<=0&&(e.h.l=i,n(t,e,void 0,void 0,void 0),a=i-e.h.h),a)throw Error();return e.h.h=i,e.h.l=r,t}function $m(e){var t=Im(e.h),n=Hm(e=e.h,t);if(e=e.i,Zu){var r,i=e;(r=Ju)||(r=Ju=new TextDecoder(`utf-8`,{fatal:!0})),t=n+t,i=n===0&&t===i.length?i:i.subarray(n,t);try{var a=r.decode(i)}catch(e){if(Xu===void 0){try{r.decode(new Uint8Array([128]))}catch{}try{r.decode(new Uint8Array([97])),Xu=!0}catch{Xu=!1}}throw!Xu&&(Ju=void 0),e}}else{t=(a=n)+t,n=[];let s,c=null;for(;a<t;){var o=e[a++];o<128?n.push(o):o<224?a>=t?Ku():(s=e[a++],o<194||(192&s)!=128?(a--,Ku()):n.push((31&o)<<6|63&s)):o<240?a>=t-1?Ku():(s=e[a++],(192&s)!=128||o===224&&s<160||o===237&&s>=160||(192&(r=e[a++]))!=128?(a--,Ku()):n.push((15&o)<<12|(63&s)<<6|63&r)):o<=244?a>=t-2?Ku():(s=e[a++],(192&s)!=128||s-144+(o<<28)>>30||(192&(r=e[a++]))!=128||(192&(i=e[a++]))!=128?(a--,Ku()):(o=(7&o)<<18|(63&s)<<12|(63&r)<<6|63&i,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Ku(),n.length>=8192&&(c=qu(c,n),n.length=0)}a=qu(c,n)}return a}function eh(e){var t=Im(e.h);return Um(e.h,t)}function th(e,t,n){var r=Im(e.h);for(r=e.h.h+r;e.h.h<r;)n.push(t(e.h))}var nh=class{constructor(e,t,n,r){if(Gm.length){let i=Gm.pop();i.init(e,t,n,r),e=i}else e=new Wm(e,t,n,r);this.h=e,this.o=this.h.h,this.i=this.l=-1,this.A(r)}A({sa:e=!1}={}){this.sa=e}},rh=[];function ih(e){return new sh(0|e,Math.floor(e/4294967296))}function ah(e){return e?/^\d+$/.test(e)?(Af(e),new sh(yf,bf)):null:oh||=new sh(0,0)}var oh,sh=class{constructor(e,t){this.i=e>>>0,this.h=t>>>0}};function ch(e){return new vh(0|e,Math.floor(e/4294967296))}function lh(e){return e?/^-?\d+$/.test(e)?(Af(e),new vh(yf,bf)):null:uh||=new vh(0,0)}var uh,dh,fh,ph,mh,hh,gh,_h,vh=class{constructor(e,t){this.i=e>>>0,this.h=t>>>0}};function yh(e,t,n){return typeof BigInt64Array<`u`?(gh||(gh=new BigInt64Array(1),_h=new Uint32Array(gh.buffer),gh[0]=BigInt(1),hh=_h[0]===1),gh[0]=e,new t(_h[e=+!hh],_h[1-e])):(mh||=(dh=BigInt(-(2**53-1)),fh=BigInt(2**53-1),ph=BigInt(4294967295),BigInt(32)),e>=dh&&e<=fh?n(Number(e)):(e=BigInt.asUintN(64,e),new t(Number(e&ph),Number(e>>mh))))}function bh(e,t,n){for(;n>0||t>127;)e.h.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.h.push(t)}function xh(e,t){for(;t>127;)e.h.push(127&t|128),t>>>=7;e.h.push(t)}function Sh(e,t){if(t>=0)xh(e,t);else{for(let n=0;n<9;n++)e.h.push(127&t|128),t>>=7;e.h.push(1)}}function Ch(e,t){Af(t),function(e){var t=bf>>31;e(yf<<1^t,(bf<<1|yf>>>31)^t)}((t,n)=>{bh(e,t>>>0,n>>>0)})}function wh(e,t){e.h.push(t>>>0&255),e.h.push(t>>>8&255),e.h.push(t>>>16&255),e.h.push(t>>>24&255)}var Th=class{constructor(){this.h=[]}length(){return this.h.length}end(){var e=this.h;return this.h=[],e}};function Eh(e,t){t.length!==0&&(e.l.push(t),e.i+=t.length)}function Dh(e,t,n){xh(e.h,8*t+n)}function Oh(e,t){return Dh(e,t,2),t=e.h.end(),Eh(e,t),t.push(e.i),t}function kh(e,t){var n=t.pop();for(n=e.i+e.h.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.i++;t.push(n),e.i++}function Ah(e,t,n){if(n!=null)switch(Dh(e,t,0),typeof n){case`number`:e=e.h,Sf(n),bh(e,yf,bf);break;case`bigint`:n=yh(n,vh,ch),bh(e.h,n.i,n.h);break;default:n=lh(n),bh(e.h,n.i,n.h)}}function jh(e,t,n){Dh(e,t,2),xh(e.h,n.length),Eh(e,e.h.end()),Eh(e,n)}function Mh(e,t,n,r){n!=null&&(t=Oh(e,t),r(n,e),kh(e,t))}var Nh=class{constructor(){this.l=[],this.i=0,this.h=new Th}};function Ph(e){typeof e==`string`&&lh(e)}function Fh(){var e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Ih=Fh(),Lh=Fh(),Rh=Fh(),zh=Fh(),Bh=Fh(),Vh=Fh(),Hh=Fh(),Uh=Fh(),Wh=Fh(),Gh=Fh(),Kh=Fh(),qh=Fh();function Jh(e,t,n){var r=e.B;Fd&&Fd in r&&(r=r[Fd])&&delete r[t.h],t.i?t.u(e,t.i,t.h,n,t.l):t.u(e,t.h,n,t.l)}var Y=class{constructor(e,t){this.B=Np(e,t,void 0,2048)}toJSON(){return jp(this)}u(){var e=my,t=this.B,n=e.h,r=Fd;if(kd&&r&&t[r]?.[n]!=null&&Dd(Id,3),t=e.h,Vd&&Fd&&Vd===void 0&&(r=(n=this.B)[Fd])&&(r=r.la))try{r(n,t,Ep)}catch(e){ed(e)}return e.i?e.o(this,e.i,e.h,e.l):e.o(this,e.h,e.defaultValue,e.l)}clone(){var e=this.B,t=0|e[K];return Up(this,e,t)?Ip(this,e,!0):new this.constructor(Rp(e,t,!1))}};Y.prototype[Bd]=Yd,Y.prototype.toString=function(){return this.B.toString()};var Yh=class{constructor(e,t,n){this.h=e,this.i=t,e=Ih,this.l=!!e&&n===e||!1}};function Xh(e,t){return new Yh(e,t,Ih)}function Zh(e,t,n,r,i){Mh(e,n,lg(t,r),i)}var Qh,$h,eg=Xh(function(e,t,n,r,i){return e.i===2&&(Qm(e,dm(t,r,n),i),!0)},Zh),tg=Xh(function(e,t,n,r,i){return e.i===2&&(Qm(e,dm(t,r,n),i),!0)},Zh),ng=Symbol(),rg=Symbol(),ig=Symbol(),ag=Symbol(),og=Symbol();function sg(e,t,n,r){var i=r[e];if(i)return i;(i={}).Fa=r,i.da=function(e){switch(typeof e){case`boolean`:return Cp||=[0,void 0,!0];case`number`:return e>0?void 0:e===0?wp||=[0,void 0]:[-e,void 0];case`string`:return[0,e];case`object`:return e}}(r[0]);var a=r[1],o=1;a&&a.constructor===Object&&(i.ja=a,typeof(a=r[++o])==`function`&&(i.xa=!0,Qh??=a,$h??=r[o+1],a=r[o+=2]));for(var s={};a&&Array.isArray(a)&&a.length&&typeof a[0]==`number`&&a[0]>0;){for(var c=0;c<a.length;c++)s[a[c]]=a;a=r[++o]}for(c=1;a!==void 0;){let e;typeof a==`number`&&(c+=a,a=r[++o]);var l=void 0;if(a instanceof Yh?e=a:(e=eg,o--),e?.l){a=r[++o],l=r;var u=o;typeof a==`function`&&(a=a(),l[u]=a),l=a}for(u=c+1,typeof(a=r[++o])==`number`&&a<0&&(u-=a,a=r[++o]);c<u;c++){let r=s[c];l?n(i,c,e,l,r):t(i,c,e,r)}}return r[e]=i}function cg(e){return Array.isArray(e)?e[0]instanceof Yh?e:[tg,e]:[e,void 0]}function lg(e,t){return e instanceof Y?e.B:Array.isArray(e)?Mp(e,t):void 0}function ug(e,t,n,r){var i=n.h;e[t]=r?(e,t,n)=>i(e,t,n,r):i}function dg(e,t,n,r,i){var a,o,s=n.h;e[t]=(e,t,n)=>s(e,t,n,o||=sg(rg,ug,dg,r).da,a||=fg(r),i)}function fg(e){var t=e[ig];if(t!=null)return t;var n=sg(rg,ug,dg,e);return t=n.xa?(e,t)=>Qh(e,t,n):(e,t)=>{t:{Zm();try{for(;Ym(t)&&t.i!=4;){let c=t.l,l=n[c];if(l==null){let e=n.ja;if(e){let t=e[c];if(t){let e=mg(t);e!=null&&(l=n[c]=e)}}}if(l==null||!l(t,e,c)){var r=t;let n=r.o;if(Xm(r),r.sa)var i=void 0;else{let e=r.h.h-n;r.h.h=n,i=Um(r.h,e)}r=void 0;var a=e,o=c,s=i;s&&((r=a[Fd]??(a[Fd]=new Tp))[o]??(r[o]=[])).push(s)}}let l=xp(e);l&&(l.la=n.Fa[og]);var c=!0;break t}catch(e){throw e instanceof RangeError?SyntaxError():e}finally{Km>0&&Km--}}return c},e[ig]=t,e[og]=pg.bind(e),t}function pg(e,t,n,r){var i=this[rg],a=this[ig],o=Mp(void 0,i.da),s=xp(e);if(s){var c=!1,l=i.ja;if(l){if(i=(t,n,i)=>{if(i.length!==0){if(l[n])for(let e of i){t=qm(e);try{c=!0,a(o,t)}finally{Jm(t)}}else r?.(e,n,i)}},t==null)Sp(s,i);else if(s!=null){let e=s[t];e&&i(s,t,e)}if(c){let r=0|e[K];if(2&r&&2048&r&&!n?.eb)throw Error();let i=rf(r),a=(t,a)=>{if(qp(e,t,i)!=null){if(n?.mb===1)return;throw Error()}a!=null&&(r=Yp(e,r,t,a,i)),delete s[t]};t==null?tf(o,0|o[K],(e,t)=>{a(e,t)}):a(t,qp(o,t,i))}}}}function mg(e){var t=(e=cg(e))[0].h;if(e=e[1]){let n=fg(e),r=sg(rg,ug,dg,e).da;return(e,i,a)=>t(e,i,a,r,n)}return t}function hg(e,t,n){e[t]=n.i}function gg(e,t,n,r){var i,a,o=n.i;e[t]=(e,t,n)=>o(e,t,n,a||=sg(ng,hg,gg,r).da,i||=_g(r))}function _g(e){var t=e[ag];if(!t){let n=sg(ng,hg,gg,e);t=(e,t)=>vg(e,t,n),e[ag]=t}return t}function vg(e,t,n){tf(e,0|e[K],(e,r)=>{if(r!=null){var i=function(e,t){var n=e[t];if(n)return n;if((n=e.ja)&&(n=n[t])){var r=(n=cg(n))[0].i;if(n=n[1]){let t=_g(n),i=sg(ng,hg,gg,n).da;n=e.xa?$h(i,t):(e,n,a)=>r(e,n,a,i,t)}else n=r;return e[t]=n}}(n,e);i?i(t,r,e):e<500||Dd(Rd,3)}}),(e=xp(e))&&Sp(e,(e,n,r)=>{for(Eh(t,t.h.end()),e=0;e<r.length;e++)Eh(t,bd(r[e])||new Uint8Array)})}var yg=uf(0);function bg(e,t,n){if(Array.isArray(t)){var r=0|t[K];if(4&r)return t;for(var i=0,a=0;i<t.length;i++){let n=e(t[i]);n!=null&&(t[a++]=n)}return a<i&&(t.length=a),e=1|r,n&&(e=-1537&e|4),e!==r&&Kd(t,e),n&&2&e&&Object.freeze(t),t}}var xg=(e,t)=>{var n=new Nh;vg(e.B,n,sg(ng,hg,gg,t)),Eh(n,n.h.end()),e=new Uint8Array(n.i);var r=(t=n.l).length,i=0;for(let n=0;n<r;n++){let r=t[n];e.set(r,i),i+=r.length}return n.l=[e],e};function Sg(e,t,n){return new Yh(e,t,n)}function Cg(e,t,n){return new Yh(e,t,n)}function wg(e,t,n){Yp(e,0|e[K],t,n,rf(0|e[K]))}var Tg=Xh(function(e,t,n,r,i){if(e.i!==2)return!1;if(e=Mf(e=Qm(e,Mp([void 0,void 0],r),i)),i=rf(r=0|t[K]),2&r)throw Error();var a=qp(t,n,i);if(a instanceof _p)2&a.N?((a=a.fa()).push(e),Yp(t,r,n,a,i)):a.hb(e);else if(Array.isArray(a)){var o=0|a[K];8192&o||Kd(a,o|=8192),2&o&&Yp(t,r,n,a=im(a),i),a.push(e)}else Yp(t,r,n,Jd([e]),i);return!0},function(e,t,n,r,i){if(t instanceof _p)t.forEach((t,a)=>{Mh(e,n,Mp([a,t],r),i)});else if(Array.isArray(t)){for(let a=0;a<t.length;a++){let o=t[a];Array.isArray(o)&&Mh(e,n,Mp(o,r),i)}Jd(t)}});function Eg(e,t,n){(t=Bf(t))!=null&&(Dh(e,n,5),e=e.h,Cf(t),wh(e,yf))}function Dg(e,t,n){(t=tp(t))!=null&&(Ph(t),Ah(e,n,t))}function Og(e,t,n){(t=Gf(t))!=null&&t!=null&&(Dh(e,n,0),Sh(e.h,t))}function kg(e,t,n){(t=t==null||typeof t==`boolean`?t:typeof t==`number`?!!t:void 0)!=null&&(Dh(e,n,0),e.h.h.push(+!!t))}function Ag(e,t,n){(t=op(t))!=null&&jh(e,n,$u(t))}function jg(e,t,n,r,i){Mh(e,n,lg(t,r),i)}function Mg(e,t,n){(t=rp(t))!=null&&jh(e,n,Mm(t,!0).buffer)}function Ng(e,t,n){(t=Kf(t))!=null&&t!=null&&(Dh(e,n,0),xh(e.h,t))}function Pg(e,t,n){(t=Gf(t))!=null&&(t=parseInt(t,10),Dh(e,n,0),Sh(e.h,t))}function Fg(e,t,n){return(e.i===5||e.i===2)&&(t=om(t,0|t[K],n),e.i==2?th(e,zm,t):t.push(zm(e.h)),!0)}function Ig(e,t,n){return e.i===0&&(wg(t,n,Lm(e.h)),!0)}function Lg(e,t,n){return(e.i===0||e.i===2)&&(t=om(t,0|t[K],n),e.i==2?th(e,Fm,t):t.push(Fm(e.h)),!0)}function Rg(e,t,n){return e.i===2&&(wg(t,n,(e=eh(e))===yd()?void 0:e),!0)}var zg=Sg(function(e,t,n){if(e.i!==1)return!1;var r=e.h;e=Rm(r);var i=Rm(r);r=2*(i>>31)+1;var a=i>>>20&2047;return e=4294967296*(1048575&i)+e,wg(t,n,a==2047?e?NaN:1/0*r:a==0?5e-324*r*e:r*2**(a-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Bf(t))!=null&&(Dh(e,n,1),e=e.h,(n=_f||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),yf=n.getUint32(0,!0),bf=n.getUint32(4,!0),wh(e,yf),wh(e,bf))},Gh),Bg=Sg(function(e,t,n){return e.i===5&&(wg(t,n,zm(e.h)),!0)},Eg,Wh),Vg=Cg(Fg,function(e,t,n){if((t=bg(Bf,t,!0))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Dh(r,i,5),r=r.h,Cf(a),wh(r,yf))}},Wh),Hg=Cg(Fg,function(e,t,n){if((t=bg(Bf,t,!0))!=null&&t.length){Dh(e,n,2),xh(e.h,4*t.length);for(let r=0;r<t.length;r++)n=e.h,Cf(t[r]),wh(n,yf)}},Wh),Ug=Sg(function(e,t,n){return e.i===5&&(wg(t,n,(e=zm(e.h))===0?void 0:e),!0)},Eg,Wh),Wg=Sg(function(e,t,n){return Ig(e,t,n)},Dg,Vh),Gg=Sg(function(e,t,n){return Ig(e,t,n)},Dg,Vh),Kg=Cg(function(e,t,n){return e.i!==0&&e.i!==2?e=!1:(t=om(t,0|t[K],n),e.i==2?th(e,Lm,t):t.push(Lm(e.h)),e=!0),e},function(e,t,n){if((t=bg(tp,t,!1))!=null)for(let r=0;r<t.length;r++)Ah(e,n,t[r])},Vh),qg=Sg(function(e,t,n){return e.i===0?(wg(t,n,(e=Lm(e.h))===yg?void 0:e),t=!0):t=!1,t},Dg,Vh),Jg=Sg(function(e,t,n){return e.i===0?(wg(t,n,Nm(e.h,Tf)),e=!0):e=!1,e},function(e,t,n){if((t=np(t))!=null&&(typeof t==`string`&&ah(t),t!=null))switch(Dh(e,n,0),typeof t){case`number`:e=e.h,Sf(t),bh(e,yf,bf);break;case`bigint`:n=yh(t,sh,ih),bh(e.h,n.i,n.h);break;default:n=ah(t),bh(e.h,n.i,n.h)}},Hh),Yg=Sg(function(e,t,n){return e.i===0&&(wg(t,n,Fm(e.h)),!0)},Og,zh),Xg=Cg(Lg,function(e,t,n){if((t=bg(Gf,t,!0))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Dh(r,i,0),Sh(r.h,a))}},zh),Zg=Cg(Lg,function(e,t,n){if((t=bg(Gf,t,!0))!=null&&t.length){n=Oh(e,n);for(let n=0;n<t.length;n++)Sh(e.h,t[n]);kh(e,n)}},zh),Qg=Sg(function(e,t,n){return e.i===0&&(wg(t,n,(e=Fm(e.h))===0?void 0:e),!0)},Og,zh),$g=Sg(function(e,t,n){return e.i===0&&(wg(t,n,Pm(e.h)),!0)},kg,Lh),e_=Sg(function(e,t,n){return e.i===0&&(wg(t,n,!1===(e=Pm(e.h))?void 0:e),!0)},kg,Lh),t_=Cg(function(e,t,n){return e.i===2&&(e=$m(e),om(t,0|t[K],n).push(e),!0)},function(e,t,n){if((t=bg(op,t,!0))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&jh(r,i,$u(a))}},Rh),n_=Sg(function(e,t,n){return e.i===2&&(wg(t,n,(e=$m(e))===``?void 0:e),!0)},Ag,Rh),X=Sg(function(e,t,n){return e.i===2&&(wg(t,n,$m(e)),!0)},Ag,Rh),r_=function(e,t,n=Ih){return new Yh(e,t,n)}(function(e,t,n,r,i){return e.i===2&&(r=Mp(void 0,r),om(t,0|t[K],n).push(r),Qm(e,r,i),!0)},function(e,t,n,r,i){if(Array.isArray(t)){for(let a=0;a<t.length;a++)jg(e,t[a],n,r,i);1&(e=0|t[K])||Kd(t,1|e)}}),i_=Xh(function(e,t,n,r,i,a){if(e.i!==2)return!1;var o=0|t[K];return lm(t,o,a,n,rf(o)),Qm(e,t=dm(t,r,n),i),!0},jg),a_=Sg(function(e,t,n){return e.i===2&&(wg(t,n,eh(e)),!0)},Mg,Kh),o_=Cg(function(e,t,n){return e.i===2&&(e=eh(e),om(t,0|t[K],n).push(e),!0)},function(e,t,n){if((t=bg(rp,t,!1))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&jh(r,i,Mm(a,!0).buffer)}},Kh),s_=Sg(function(e,t,n){return e.i===0&&(wg(t,n,Im(e.h)),!0)},Ng,Bh),c_=Cg(function(e,t,n){return(e.i===0||e.i===2)&&(t=om(t,0|t[K],n),e.i==2?th(e,Im,t):t.push(Im(e.h)),!0)},function(e,t,n){if((t=bg(Kf,t,!0))!=null)for(let o=0;o<t.length;o++){var r=e,i=n,a=t[o];a!=null&&(Dh(r,i,0),xh(r.h,a))}},Bh),l_=Sg(function(e,t,n){return e.i===0&&(wg(t,n,(e=Im(e.h))===0?void 0:e),!0)},Ng,Bh),Z=Sg(function(e,t,n){return e.i===0&&(wg(t,n,Fm(e.h)),!0)},Pg,qh),u_=Sg(function(e,t,n){return e.i===0&&(wg(t,n,(e=Fm(e.h))===0?void 0:e),!0)},Pg,qh),d_=Sg(function(e,t,n){return e.i===0?(wg(t,n,function(e){return Nm(e,(e,t)=>{var n=-(1&e);return Ef(e=(e>>>1|t<<31)^n,t>>>1^n)})}(e.h)),e=!0):e=!1,e},function(e,t,n){if((t=tp(t))!=null&&(Ph(t),t!=null))switch(Dh(e,n,0),typeof t){case`number`:e=e.h,t=(n=t)<0,xf(n=2*Math.abs(n)),n=yf;let r=bf;t&&(n==0?r==0?r=n=4294967295:(r--,n=4294967295):n--),bh(e,yf=n,bf=r);break;case`bigint`:e=e.h,t=t<<BigInt(1)^t>>BigInt(63),yf=Number(BigInt.asUintN(32,t)),bf=Number(BigInt.asUintN(32,t>>BigInt(32))),bh(e,yf,bf);break;default:Ch(e.h,t)}},Uh),f_=class{constructor(e,t){var n=B_;this.h=e,this.i=t,this.o=fm,this.u=q,this.defaultValue=void 0,this.l=n.kb==null?void 0:nf}register(){od(this)}};function p_(e,t){return new f_(e,t)}function m_(e,t){return(n,r)=>{t:{let a={na:!0};r&&Object.assign(a,r),n=qm(n,void 0,void 0,a);try{let r=new e,a=r.B;fg(t)(a,n);var i=r;break t}catch(e){throw e instanceof RangeError?SyntaxError():e}finally{Jm(n)}}return i}}function h_(e){return t=>xg(t,e)}function g_(e){return function(){return xg(this,e)}}var __=[0,a_,o_,$g,X],v_=[0,n_,[0,u_,[0,qg,Qg],u_,-1,[0,Z],u_,-1],Sg(Rg,Mg,Kh)],y_,b_=class extends Y{constructor(e){super(e)}},x_=[0,n_,Sg(Rg,function(e,t,n){if(t!=null){if(t instanceof Y){let r=t.nb;r?(t=r(t),t!=null&&jh(e,n,Mm(t,!0).buffer)):Dd(Rd,3);return}if(Array.isArray(t))return void Dd(Rd,3)}Mg(e,t,n)},Kh)],S_=[0,1,[0,12,Yg,10,$g],[0,7,[0,Yg,-1]]],C_=globalThis.trustedTypes,w_=class{constructor(e){this.h=e}toString(){return this.h+``}};function T_(e){var t;return y_===void 0&&(y_=function(){var e=null;if(!C_)return e;try{let t=e=>e;e=C_.createPolicy(`goog#html`,{createHTML:t,createScript:t,createScriptURL:t})}catch{}return e}()),e=(t=y_)?t.createScriptURL(e):e,new w_(e)}function E_(e,...t){if(t.length===0)return T_(e[0]);var n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return T_(n)}var D_=[0,Yg,Z,$g,-1,Zg,Z,-1,$g,-1],O_=[0,Z,-1,$g],k_=class extends Y{constructor(e){super(e)}},A_=[0,$g,X,$g,Z,-1,Cg(function(e,t,n){return(e.i===0||e.i===2)&&(t=om(t,0|t[K],n),e.i==2?th(e,Bm,t):t.push(Fm(e.h)),!0)},function(e,t,n){if((t=bg(Gf,t,!0))!=null&&t.length){n=Oh(e,n);for(let n=0;n<t.length;n++)Sh(e.h,t[n]);kh(e,n)}},qh),X,-1,[0,$g,-1],Z,$g,-1,O_],j_=class extends Y{constructor(e){super(e)}},M_=class extends Y{constructor(e){super(e)}},N_=class extends Y{constructor(e){super(e)}h(){return Xp(this,9)}},P_=[0,3,$g,-1,2,[0,[2],Yg,i_,[0,s_]],[0,Z,$g,Z,$g,Z,4,[0,$g,X,-1,$g]],[0,[3,4],X,-1,i_,[0,Yg],i_,[0,Z,-1]],[0],X],F_=[0,X,-2],I_=class extends Y{constructor(e){super(e)}},L_=[0],R_=class extends Y{constructor(e){super(e)}},z_=[0,Yg,$g,1,$g,-4],B_=class extends Y{constructor(e){super(e,2)}},V_={};V_[336783863]=[0,X,$g,-1,Yg,[0,[1,2,3,4,5,6,7,8,9],i_,L_,i_,A_,i_,F_,i_,z_,i_,D_,i_,[0,X,-2],i_,[0,X,Z],i_,P_,i_,O_],[0,X],$g,[0,[1,3],[2,4],i_,[0,Zg],-1,i_,[0,t_],-1,r_,[0,X,-1]],X];var H_=[0,qg,-1,e_,-3,qg,Zg,n_,Qg,qg,-1,e_,Qg,e_,-2,n_];function U_(e,t){Am(e,3,t)}function W_(e,t){Am(e,4,t)}var G_=class extends Y{constructor(e){super(e,500)}A(e){return q(this,0,7,e)}},K_=[-1,{}],q_=[0,X,1,K_],J_=[0,X,t_,K_];function Y_(e,t){ym(e,1,G_,t)}function X_(e,t){Am(e,10,t)}function Z_(e,t){Am(e,15,t)}var Q_=class extends Y{constructor(e){super(e,500)}A(e){return q(this,0,1001,e)}},$_=[-500,r_,[-500,n_,-1,t_,-3,[-2,V_,$g],r_,x_,Qg,-1,q_,J_,r_,[0,n_,e_],n_,H_,Qg,t_,987,t_],4,r_,[-500,X,-1,[-1,{}],998,X],r_,[-500,X,t_,-1,[-2,{},$g],997,t_,-1],Qg,r_,[-500,X,t_,K_,998,t_],t_,Qg,q_,J_,r_,[0,n_,-1,K_],t_,-2,H_,n_,-1,e_,[0,e_,l_],978,K_,r_,x_];Q_.prototype.h=g_($_);var ev=m_(Q_,$_),tv=class extends Y{constructor(e){super(e)}},nv=class extends Y{constructor(e){super(e)}h(){return mm(this,tv,1)}},rv=[0,r_,[0,Yg,Bg,X,-1]],iv=m_(nv,rv),av=class extends Y{constructor(e){super(e)}},ov=class extends Y{constructor(e){super(e)}},sv=class extends Y{constructor(e){super(e)}l(){return fm(this,av,2)}h(){return mm(this,ov,5)}},cv=m_(class extends Y{constructor(e){super(e)}},[0,t_,Zg,Hg,[0,Z,[0,Yg,-3],[0,Bg,-3],[0,Yg,-1,[0,r_,[0,Yg,-2]]],r_,[0,Bg,-1,X,Bg]],X,-1,Gg,r_,[0,Yg,Bg],t_,Gg]),lv=class extends Y{constructor(e){super(e)}},uv=m_(class extends Y{constructor(e){super(e)}},[0,r_,[0,Bg,-4]]),dv=class extends Y{constructor(e){super(e)}},fv=m_(class extends Y{constructor(e){super(e)}},[0,r_,[0,Bg,-4]]),pv=class extends Y{constructor(e){super(e)}},mv=[0,Yg,-1,Hg,Z],hv=class extends Y{constructor(e){super(e)}};hv.prototype.h=g_([0,Bg,-4,Gg]);var gv=class extends Y{constructor(e){super(e)}},_v=m_(class extends Y{constructor(e){super(e)}},[0,r_,[0,1,Yg,X,rv],Gg]),vv=class extends Y{constructor(e){super(e)}},yv=class extends Y{constructor(e){super(e)}h(){return Kp(this,1,void 0,rm)??yd()}},bv=class extends Y{constructor(e){super(e)}},xv=[1,2],Sv=m_(class extends Y{constructor(e){super(e)}},[0,r_,[0,xv,i_,[0,Hg],i_,[0,a_],Yg,X],Gg]),Cv=class extends Y{constructor(e){super(e)}},wv=[0,X,Yg,Bg,t_,-1],Tv=class extends Y{constructor(e){super(e)}},Ev=[0,$g,-1],Dv=class extends Y{constructor(e){super(e)}h(){return Zp(this,2,Ov)}l(){return Sm(this,N_,6,Ov)}},Ov=[1,2,3,4,5,6],kv=class extends Y{constructor(e){super(e)}h(){return Kp(this,1,void 0,rm)!=null}l(){return op(Kp(this,2))!=null}},Av=class extends Y{constructor(e){super(e)}},jv=[0,a_,X,[0,Yg,Gg,-1],[0,Jg,Gg]],Mv=[0,jv,$g,[0,Ov,i_,z_,i_,A_,i_,D_,i_,L_,i_,F_,i_,P_],Z],Nv=h_(Mv),Pv=class extends Y{constructor(e){super(e)}},Fv=[0,Mv,Bg,-1,Yg],Iv=p_(502141897,Pv);V_[502141897]=Fv;var Lv=m_(class extends Y{constructor(e){super(e)}},[0,[0,Z,-1,Vg,c_],mv]),Rv=class extends Y{constructor(e){super(e)}},zv=class extends Y{constructor(e){super(e)}},Bv=[0,Mv,Bg,[0,Mv],$g],Vv=p_(508968150,zv);V_[508968150]=[0,Mv,Fv,Bv,Bg,[0,[0,jv]]],V_[508968149]=Bv;var Hv=class extends Y{constructor(e){super(e)}l(){return fm(this,Cv,2)}h(){Jp(this,2)}},Uv=[0,Mv,wv];V_[478825465]=Uv;var Wv=class extends Y{constructor(e){super(e)}},Gv=class extends Y{constructor(e){super(e)}},Kv=class extends Y{constructor(e){super(e)}},qv=class extends Y{constructor(e){super(e)}},Jv=class extends Y{constructor(e){super(e)}},Yv=[0,Mv,[0,Mv],Uv,-1],Xv=[0,Mv,Bg,Yg],Zv=[0,Mv,Bg],Qv=[0,Mv,Xv,Zv,Bg],$v=p_(479097054,Jv);V_[479097054]=[0,Mv,Qv,Yv],V_[463370452]=Yv,V_[464864288]=Xv;var ey=p_(462713202,qv);V_[462713202]=Qv,V_[474472470]=Zv;var ty=class extends Y{constructor(e){super(e)}},ny=class extends Y{constructor(e){super(e)}},ry=class extends Y{constructor(e){super(e)}},iy=class extends Y{constructor(e){super(e)}},ay=[0,Mv,Bg,-1,Yg],oy=[0,Mv,Bg,$g];iy.prototype.h=g_([0,Mv,Zv,[0,Mv],Fv,Bv,ay,oy]);var sy=class extends Y{constructor(e){super(e)}},cy=p_(456383383,sy);V_[456383383]=[0,Mv,wv];var ly=class extends Y{constructor(e){super(e)}},uy=p_(476348187,ly);V_[476348187]=[0,Mv,Ev];var dy=class extends Y{constructor(e){super(e)}},fy=class extends Y{constructor(e){super(e)}},py=[0,Z,-1],my=p_(458105876,class extends Y{constructor(e){super(e)}h(){var e=this.B,t=0|e[K],n=Zd(this,t);return e=function(e,t,n,r){var i=fy;!r&&Bp(e)&&(n=0|(t=e.B)[K]);var a=qp(t,2);if(e=!1,a==null){if(r)return bp();a=[]}else if(a.constructor===_p){if(!(2&a.N)||r)return a;a=a.fa()}else Array.isArray(a)?e=!!(2&a[K]):a=[];if(r){if(!a.length)return bp();e||(e=!0,qd(a))}else e&&(e=!1,Jd(a),a=im(a));return!e&&32&n&&Gd(a,32),n=Yp(t,n,2,r=new _p(a,i,cp,void 0)),e||Hp(t,n),r}(this,e,t,n),!n&&fy&&(e.Ga=!0),e}});V_[458105876]=[0,py,Tg,[!0,Gg,[0,X,-1,t_]],[0,Zg,$g,Z],$g];var hy=class extends Y{constructor(e){super(e)}},gy=p_(458105758,hy);V_[458105758]=[0,Mv,X,py];var _y=class extends Y{constructor(e){super(e)}},vy=class extends Y{constructor(e){super(e)}},yy=class extends Y{constructor(e){super(e)}},by=h_([0,r_,[0,u_,r_,[0,Ug,-1],e_]]),xy=class extends Y{constructor(e){super(e)}},Sy=[0,Ug,-1,e_],Cy=class extends Y{constructor(e){super(e)}},wy=class extends Y{constructor(e){super(e)}},Ty=[1,2];wy.prototype.h=g_([0,Ty,i_,Sy,i_,[0,r_,Sy]]);var Ey=class extends Y{constructor(e){super(e)}},Dy=p_(443442058,Ey);V_[443442058]=[0,Mv,X,Yg,Bg,t_,-1,$g,Bg],V_[514774813]=ay;var Oy=class extends Y{constructor(e){super(e)}},ky=p_(516587230,Oy);function Ay(e,t){return t=t?t.clone():new Cv,e.displayNamesLocale===void 0?e.displayNamesLocale===void 0&&Jp(t,1):Jp(t,1,ap(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Jp(t,2):wm(t,2,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Jp(t,3):J(t,3,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Jp(t,4):km(t,4,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Jp(t,5):km(t,5,e.categoryDenylist),t}function jy(e){var t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function My(e,t=-1,n=``){return{categories:e.map(e=>({index:bm(e,1)??0??-1,score:xm(e,2)??0,categoryName:op(Kp(e,3))??``??``,displayName:op(Kp(e,4))??``??``})),headIndex:t,headName:n}}function Ny(e){var t={classifications:mm(e,gv,1).map(e=>My(fm(e,nv,4)?.h()??[],bm(e,2)??0,op(Kp(e,3))??``))};return function(e){return e==null?e:typeof e==`bigint`?(df(e)?e=Number(e):(e=Nf(64,e),e=df(e)?Number(e):String(e)),e):Uf(e)?typeof e==`number`?Xf(e):Qf(e):void 0}(Kp(e,2,void 0,ep))!=null&&(t.timestampMs=jy(Kp(e,2,void 0,ep)??Wp)),t}function Py(e){var t=Qp(e,3,Bf),n=Qp(e,2,Gf),r=Qp(e,1,op),i=Qp(e,9,op),a={categories:[],keypoints:[]};for(let e=0;e<t.length;e++)a.categories.push({score:t[e],index:n[e]??-1,categoryName:r[e]??``,displayName:i[e]??``});if((t=fm(e,sv,4)?.l())&&(a.boundingBox={originX:bm(t,1,Gp)??0,originY:bm(t,2,Gp)??0,width:bm(t,3,Gp)??0,height:bm(t,4,Gp)??0,angle:0}),fm(e,sv,4)?.h().length)for(let t of fm(e,sv,4).h())a.keypoints.push({x:Kp(t,1,Gp,Bf)??0,y:Kp(t,2,Gp,Bf)??0,score:Kp(t,4,Gp,Bf)??0,label:op(Kp(t,3,Gp))??``});return a}function Fy(e){var t=[];for(let n of mm(e,dv,1))e={x:xm(n,1)??0,y:xm(n,2)??0,z:xm(n,3)??0,visibility:xm(n,4)??0},Kp(n,5,void 0,Bf)!=null&&(e.presence=xm(n,5)??0),t.push(e);return t}function Iy(e){var t=[];for(let n of mm(e,lv,1))e={x:xm(n,1)??0,y:xm(n,2)??0,z:xm(n,3)??0,visibility:xm(n,4)??0},Kp(n,5,void 0,Bf)!=null&&(e.presence=xm(n,5)??0),t.push(e);return t}function Ly(e){return Array.from(e,e=>e>127?e-256:e)}function Ry(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);var n=0,r=0,i=0;for(let a=0;a<e.length;a++)n+=e[a]*t[a],r+=e[a]*e[a],i+=t[a]*t[a];if(r<=0||i<=0)throw Error(`Cannot compute cosine similarity on embedding with 0 norm.`);return n/Math.sqrt(r*i)}V_[516587230]=[0,Mv,ay,oy,Bg],V_[518928384]=oy;var zy,By=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Vy(e){if(e)return!0;if(zy===void 0)try{await WebAssembly.instantiate(By),zy=!0}catch{zy=!1}return zy}async function Hy(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?`_module`:``}${await Vy(n)?``:`_nosimd`}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Uy=class{};function Wy(e){return Jp(new Gy,1,Wf(e))}Uy.forVisionTasks=function(e,t=!1){return Hy(`vision`,e??E_``,t)},Uy.forLiteRtLmTextTasks=function(e,t=!1){return Hy(`litertlm_text`,e??E_``,t)},Uy.forTextTasks=function(e,t=!1){return Hy(`text`,e??E_``,t)},Uy.forRetrievalTasks=function(e,t=!1){return Hy(`retrieval`,e??E_``,t)},Uy.forGenAiTasks=function(e,t=!1){return Hy(`genai`,e??E_``,t)},Uy.forDecisionTasks=function(e,t=!1){return Hy(`decision`,e??E_``,t)},Uy.forAudioTasks=function(e,t=!1){return Hy(`audio`,e??E_``,t)},Uy.isSimdSupported=function(e=!1){return Vy(e)};var Gy=class extends Y{constructor(e){super(e)}},Ky=class extends Y{constructor(e){super(e)}},qy=[0,Z,2,Jg,-2,Gg,r_,[0,Z,Gg]],Jy=class extends Y{constructor(e){super(e)}},Yy=class extends Y{constructor(e){super(e)}};function Xy(e,t){return Jp(e,1,Wf(t))}function Zy(e,t){return Jp(e,2,Wf(t))}var Qy=class extends Y{constructor(e){super(e)}},$y=[3,4,5,6,7],eb=class extends Y{constructor(e){super(e)}},tb=class extends Y{constructor(e){super(e)}};tb.prototype.h=g_([0,[0,Z,X,-3,Z],[0,$y,Z,-1,i_,[0,Z,X,Jg],i_,qy,i_,[0,1,qy],i_,[0,Z],i_,[0,Z,X,Jg]]]);var nb=class{constructor(){this.h=typeof AbortController<`u`}async send(e,t,n){var r=this.h?new AbortController:void 0,i=r&&e.ma>0?setTimeout(()=>{r.abort()},e.ma):void 0;try{let i=await fetch(e.url,{method:e.cb,headers:{...e.bb},...e.body&&{body:e.body},...e.withCredentials&&{credentials:`include`},signal:e.ma&&r?r.signal:null});i.status===200?t?.(await i.text()):n?.(i.status)}catch(e){e?.name===`AbortError`?n?.(408):n?.(400)}finally{clearTimeout(i)}}},rb=class extends Y{constructor(e){super(e,37)}},ib=[-4,{},S_,Z,v_],ab=[0,X,Z,1,X,-1,Z,1,Z,1,Gg],ob=[0,Z,X,-2],sb=[0,X,Z],cb=[0,X,Z],lb=[0,$g,-3],ub=[0,Z,X,-1,Gg,Yg,-1,X,-5,r_,[0,X,-4],-1,$g,[0,$g,-3],Z],db=class extends Y{constructor(e){super(e,19)}},fb=h_([-19,{},[0,Z,1,[0,X,-6,Gg,Yg,X,-1,Gg],1,[0,X,1,X,-5],X,-1,[0,Z,X,-8],[0,X,-3],[0,X,Z,X,-2],[0,X,-1,Z,X,-1,Z,X,-1,[0,r_,[0,X,-1],$g,X,-5],[0,Z,$g,Yg,-2]],Gg,[0,X,-3,Gg,Yg,X,-1],[0,Z,X,-1],[0,X,-9],[0,X,-6,Z,X,1,X,$g,Z,-1,$g,X,-2,Z,X,Z,X,Yg,-1],1,[0,Z],1,[0,X,-4],1,ab,[0,[1,2,3,4,5,6],i_,ab,i_,sb,i_,cb,i_,[0,Z],i_,ub,i_,ob],sb,cb,ub,[0,[0,Z,X,-1,Gg,Yg,-1,X,-4,r_,[0,X,-4],-1,1,lb],[0,Z,X,-1,Gg,Yg,-1,X,-4,lb]],ob,[0,X,[0,Yg,-3,Z],Z,-2,[0,Yg,-1],$g],4,[0,X,Z,X,-1,Gg,Z,X,-1,Z,Yg,-1]],Z,r_,[-37,{},Wg,X,r_,[0,X,-1],a_,1,a_,[0,t_,-1,Xg,Kg,-1],X,[0,Yg,X,-1],$g,Yg,Gg,X,-1,d_,__,Wg,a_,Z,Xg,Gg,-1,[0,Z,-1],X,$g,X,Zg,X,-1,zg,1,zg,ib,$g,[0,Z,[0,Bg,Yg,-2],[0,Bg]],[0,Z,Gg]],Wg,o_,X,-1,Wg,Z,-1,[0,$g,-1,Z,$g],[0,Gg,-1,X],[0,Wg,$g,Gg],Gg,1,s_,1,ib]),pb=class{constructor(e){this.i=[],this.o=new nb,this.l=e??``,this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(e,t){if(this.error)t?.(`net-send-failed`);else if(this.i.length===0)e?.();else{var n=this.i;this.i=[],n=function(e){var t=new db;return _m(t=Jp(t,2,Wf(1786)),3,e)}(n),n=fb(n),this.o.send({url:`https://odml.pa.googleapis.com/v1/log`,cb:`POST`,ma:1e4,body:n,ib:2,bb:{"Content-Type":`application/x-protobuf`,"x-goog-api-key":this.l},withCredentials:!1},()=>{e?.()},e=>{this.error=Error(`Logging failed with HTTP error: ${e}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),t?.(`net-send-failed`,e)})}}},mb=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};function hb(e,t){var n=new tb;n=q(n,0,1,e.C),n=q(n,0,2,t),t=Jp(t=new rb,6,$d(n=n.h(),!1)),(e=e.m).error||e.i.push(t)}function gb(e,t){var n={R:t.R-e.l.R,U:t.U-e.l.U,W:t.W-e.l.W,S:t.S-e.l.S,Y:t.Y-e.l.Y,V:t.V,ba:t.ba},r=Zy(Xy(new Qy,e.D),1);n=_b(e,n),hb(e,r=gm(r,4,$y,n)),e.l=t}function _b(e,t){var n=new Ky;return e=Em(e=Tm(e=Jp(n,1,Wf(e.F)),7,t.S),5,t.V),e=Em(e,6,t.ba),t.W>0&&Em(e,4,t.Y/t.W),t.R!==0&&(n=Tm(n=Wy(3),2,t.R),ym(e,8,Gy,n)),t.U!==0&&(t=Tm(n=Wy(4),2,t.U),ym(e,8,Gy,t)),e}var vb=class{constructor(e,t,n){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new mb,this.l=new mb,this.m=new pb(n),this.D=function(e){switch(e){case`AudioClassifier`:return 4;case`AudioEmbedder`:return 5;case`TextClassifier`:return 6;case`TextEmbedder`:return 7;case`GestureRecognizer`:return 8;case`HandDetector`:return 9;case`HandLandmarker`:return 10;case`ImageClassifier`:return 11;case`ImageEmbedder`:return 12;case`ImageSegmenter`:return 13;case`ObjectDetector`:return 14;case`FaceDetector`:return 15;case`FaceLandmarker`:return 16;case`InteractiveSegmenter`:case`InteractiveSegmenterLegacy`:return 18;case`HolisticLandmarker`:return 20;case`LlmInference`:return 21;case`LanguageDetector`:return 22;case`PoseLandmarker`:return 23;case`UniversalEmbedder`:return 28;case`SemanticRetriever`:return 29;case`DecisionMaker`:return 30;case`TextSummarizer`:return 26;case`TextProofreader`:return 27;case`AudioTranscriber`:return 31;case`TextToSpeech`:return 32;default:return 0}}(e),this.F=function(e){switch(e){case`IMAGE`:return 11;case`VIDEO`:return 12;case`LIVE_STREAM`:return 13;case`AUDIO_CLIPS`:return 14;case`AUDIO_STREAM`:return 15;default:return 10}}(t),e=new eb,typeof navigator>`u`?t=0:(t=navigator.userAgent,t=/Android/i.test(t)?1:/iPhone|iPad|iPod/i.test(t)?2:/Windows/i.test(t)?5:/Macintosh/i.test(t)?4:/Linux/i.test(t)?3:0),e=Jp(e,1,Wf(t)),e=Jp(e,2,ap(``)),e=Jp(e,3,ap(``)),e=Jp(e,4,ap(`1.2.0`)),e=Jp(e,5,ap(``)),this.C=Jp(e,6,Wf(function(){var e=globalThis.__HOST_ENVIRONMENT__;if(typeof e==`string`)switch(e){case`ANDROID`:return 1;case`IOS`:return 2;case`PYTHON`:return 3;case`WEB`:break;case`FLUTTER`:return 5;case`FLUTTER_WEB`:return 6;default:return 0}return 4}()))}za(){var e=new Yy;e=Em(e=Jp(e,1,Wf(this.F)),3,performance.now()-this.v),hb(this,e=gm(Zy(Xy(new Qy,this.D),0),3,$y,e)),this.o=performance.now()}Aa(e){var t=this.i.get(e);if(t!==void 0&&(this.i.delete(e),e=performance.now()-t,++this.h.W,this.h.Y+=e,this.h.V=Math.max(this.h.V,e),this.u=Math.max(this.u,e),performance.now()>this.o+3e4)){for(let[n,r]of this.i.entries())e=n,r<t&&(this.h.S++,this.i.delete(e));t={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),gb(this,t)}}ya(){var e={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};gb(this,e);var t=new Jy;t=q(t,0,2,e=_b(this,e)),hb(this,t=gm(e=Zy(Xy(new Qy,this.D),2),5,$y,t))}close(){var e=this.m;typeof e.close==`function`?e.close():e.flush()}};function yb(){var e=navigator;return typeof OffscreenCanvas<`u`&&(!function(e=navigator){return(e=e.userAgent).includes(`Safari`)&&!e.includes(`Chrome`)}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function bb(e){if(typeof importScripts!=`function`){let t=document.createElement(`script`);return t.src=e.toString(),t.crossOrigin=`anonymous`,new Promise((e,n)=>{t.addEventListener(`load`,()=>{e()},!1),t.addEventListener(`error`,e=>{n(e)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{let t=self.import;t?await t(e.toString()):await import(e.toString())}}}function xb(e){return e.videoWidth===void 0?e.naturalWidth===void 0?e.displayWidth===void 0?[e.width,e.height]:[e.displayWidth,e.displayHeight]:[e.naturalWidth,e.naturalHeight]:[e.videoWidth,e.videoHeight]}function Q(e,t,n){e.o||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`),n(t=e.j.stringToNewUTF8(t)),e.j._free(t)}function Sb(e,t,n){if(!e.j.canvas)throw Error(`No OpenGL canvas configured.`);if(n?e.j._bindTextureToStream(n):e.j._bindTextureToCanvas(),!(n=e.j.canvas.getContext(`webgl2`)||e.j.canvas.getContext(`webgl`)))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[r,i]=xb(t);return!e.l||r===e.j.canvas.width&&i===e.j.canvas.height||(e.j.canvas.width=r,e.j.canvas.height=i),[r,i]}function Cb(e,t,n){e.o||console.error(`No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target`);var r=new Uint32Array(t.length);for(let n=0;n<t.length;n++)r[n]=e.j.stringToNewUTF8(t[n]);t=e.j._malloc(4*r.length),e.j.HEAPU32.set(r,t>>2),n(t);for(let t of r)e.j._free(t);e.j._free(t)}function wb(e,t,n){e.j.simpleListeners=e.j.simpleListeners||{},e.j.simpleListeners[t]=n}function Tb(e,t,n){var r=[];e.j.simpleListeners=e.j.simpleListeners||{},e.j.simpleListeners[t]=(e,t,i)=>{t?(n(r,i),r=[]):r.push(e)}}var Eb=class{constructor(e,t){this.l=!0,this.j=e,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream==`function`,t===void 0?yb()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn(`OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas.`),this.j.canvas=document.createElement(`canvas`)):this.j.canvas=t}async initializeGraph(e){var t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(`.pbtxt`)||e.endsWith(`.textproto`)),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){var n=e.length,r=this.j._malloc(n);this.j.HEAPU8.set(e,r),t?this.j._changeBinaryGraph(n,r):this.j._changeTextGraph(n,r),this.j._free(r)}configureAudio(e,t,n,r,i){this.j._configureAudio||console.warn(`Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?`),Q(this,r||`input_audio`,r=>{Q(this,i||=`audio_header`,i=>{this.j._configureAudio(r,i,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.j._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.j.gpuOriginForWebTexturesIsBottomLeft=e}ka(e){wb(this,`__graph_config__`,t=>{e(t)}),Q(this,`__graph_config__`,e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(e){this.j.errorListener=e}attachEmptyPacketListener(e,t){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,r,i){var a=4*e.length;this.i!==a&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(a),this.i=a),this.j.HEAPF32.set(e,this.h/4),Q(this,r,e=>{this.j._addAudioToInputStream(this.h,t,n,e,i)})}addGpuBufferToStream(e,t,n){Q(this,t,t=>{var[r,i]=Sb(this,e,t);this.j._addBoundTextureToStream(t,r,i,n)})}addBoolToStream(e,t,n){Q(this,t,t=>{this.j._addBoolToInputStream(e,t,n)})}addDoubleToStream(e,t,n){Q(this,t,t=>{this.j._addDoubleToInputStream(e,t,n)})}addFloatToStream(e,t,n){Q(this,t,t=>{this.j._addFloatToInputStream(e,t,n)})}addIntToStream(e,t,n){Q(this,t,t=>{this.j._addIntToInputStream(e,t,n)})}addUintToStream(e,t,n){Q(this,t,t=>{this.j._addUintToInputStream(e,t,n)})}addStringToStream(e,t,n){Q(this,t,t=>{Q(this,e,e=>{this.j._addStringToInputStream(e,t,n)})})}addStringRecordToStream(e,t,n){Q(this,t,t=>{Cb(this,Object.keys(e),r=>{Cb(this,Object.values(e),i=>{this.j._addFlatHashMapToInputStream(r,i,Object.keys(e).length,t,n)})})})}addProtoToStream(e,t,n,r){Q(this,n,n=>{Q(this,t,t=>{var i=this.j._malloc(e.length);this.j.HEAPU8.set(e,i),this.j._addProtoToInputStream(i,e.length,t,n,r),this.j._free(i)})})}addEmptyPacketToStream(e,t){Q(this,e,e=>{this.j._addEmptyPacketToInputStream(e,t)})}addBoolVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateBoolVector(e.length);if(!r)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.j._addBoolVectorEntry(r,t);this.j._addBoolVectorToInputStream(r,t,n)})}addDoubleVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateDoubleVector(e.length);if(!r)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.j._addDoubleVectorEntry(r,t);this.j._addDoubleVectorToInputStream(r,t,n)})}addFloatVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateFloatVector(e.length);if(!r)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.j._addFloatVectorEntry(r,t);this.j._addFloatVectorToInputStream(r,t,n)})}addIntVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateIntVector(e.length);if(!r)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.j._addIntVectorEntry(r,t);this.j._addIntVectorToInputStream(r,t,n)})}addUintVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateUintVector(e.length);if(!r)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.j._addUintVectorEntry(r,t);this.j._addUintVectorToInputStream(r,t,n)})}addStringVectorToStream(e,t,n){Q(this,t,t=>{var r=this.j._allocateStringVector(e.length);if(!r)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Q(this,t,e=>{this.j._addStringVectorEntry(r,e)});this.j._addStringVectorToInputStream(r,t,n)})}addBoolToInputSidePacket(e,t){Q(this,t,t=>{this.j._addBoolToInputSidePacket(e,t)})}addDoubleToInputSidePacket(e,t){Q(this,t,t=>{this.j._addDoubleToInputSidePacket(e,t)})}addFloatToInputSidePacket(e,t){Q(this,t,t=>{this.j._addFloatToInputSidePacket(e,t)})}addIntToInputSidePacket(e,t){Q(this,t,t=>{this.j._addIntToInputSidePacket(e,t)})}addUintToInputSidePacket(e,t){Q(this,t,t=>{this.j._addUintToInputSidePacket(e,t)})}addStringToInputSidePacket(e,t){Q(this,t,t=>{Q(this,e,e=>{this.j._addStringToInputSidePacket(e,t)})})}addProtoToInputSidePacket(e,t,n){Q(this,n,n=>{Q(this,t,t=>{var r=this.j._malloc(e.length);this.j.HEAPU8.set(e,r),this.j._addProtoToInputSidePacket(r,e.length,t,n),this.j._free(r)})})}addBoolVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateBoolVector(e.length);if(!n)throw Error(`Unable to allocate new bool vector on heap.`);for(let t of e)this.j._addBoolVectorEntry(n,t);this.j._addBoolVectorToInputSidePacket(n,t)})}addDoubleVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateDoubleVector(e.length);if(!n)throw Error(`Unable to allocate new double vector on heap.`);for(let t of e)this.j._addDoubleVectorEntry(n,t);this.j._addDoubleVectorToInputSidePacket(n,t)})}addFloatVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateFloatVector(e.length);if(!n)throw Error(`Unable to allocate new float vector on heap.`);for(let t of e)this.j._addFloatVectorEntry(n,t);this.j._addFloatVectorToInputSidePacket(n,t)})}addIntVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateIntVector(e.length);if(!n)throw Error(`Unable to allocate new int vector on heap.`);for(let t of e)this.j._addIntVectorEntry(n,t);this.j._addIntVectorToInputSidePacket(n,t)})}addUintVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateUintVector(e.length);if(!n)throw Error(`Unable to allocate new unsigned int vector on heap.`);for(let t of e)this.j._addUintVectorEntry(n,t);this.j._addUintVectorToInputSidePacket(n,t)})}addStringVectorToInputSidePacket(e,t){Q(this,t,t=>{var n=this.j._allocateStringVector(e.length);if(!n)throw Error(`Unable to allocate new string vector on heap.`);for(let t of e)Q(this,t,e=>{this.j._addStringVectorEntry(n,e)});this.j._addStringVectorToInputSidePacket(n,t)})}attachBoolListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachBoolListener(e)})}attachBoolVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachBoolVectorListener(e)})}attachIntListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachIntListener(e)})}attachIntVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachIntVectorListener(e)})}attachUintListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachUintListener(e)})}attachUintVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachUintVectorListener(e)})}attachDoubleListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachDoubleListener(e)})}attachDoubleVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachDoubleVectorListener(e)})}attachFloatListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachFloatListener(e)})}attachFloatVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachFloatVectorListener(e)})}attachStringListener(e,t){wb(this,e,t),Q(this,e,e=>{this.j._attachStringListener(e)})}attachStringVectorListener(e,t){Tb(this,e,t),Q(this,e,e=>{this.j._attachStringVectorListener(e)})}attachProtoListener(e,t,n){wb(this,e,t),Q(this,e,e=>{this.j._attachProtoListener(e,n||!1)})}attachProtoVectorListener(e,t,n){Tb(this,e,t),Q(this,e,e=>{this.j._attachProtoVectorListener(e,n||!1)})}attachAudioListener(e,t,n){this.j._attachAudioListener||console.warn(`Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?`),wb(this,e,(e,n)=>{e=new Float32Array(e.buffer,e.byteOffset,e.length/4),t(e,n)}),Q(this,e,e=>{this.j._attachAudioListener(e,n||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};function Db(e){return class extends e{get qa(){return this.j}Ta(){if(typeof this.qa._mediapipeLoggerGetEncodedApiKey==`function`){let e=this.qa._mediapipeLoggerGetEncodedApiKey();return this.qa._decodeBase64(e)}}}}function Ob(e){return class extends e{ab(){this.j._registerModelResourcesGraphService()}}}var kb=Db(Ob(Eb)),Ab=class extends kb{};async function jb(e,t,n,r){return e=await(async(e,t,n,r,i)=>{if(t&&await bb(t),!self.ModuleFactory||n&&(await bb(n),!self.ModuleFactory))throw Error(`ModuleFactory not set.`);return self.Module&&i&&((t=self.Module).locateFile=i.locateFile,i.mainScriptUrlOrBlob&&(t.mainScriptUrlOrBlob=i.mainScriptUrlOrBlob)),i=await self.ModuleFactory(self.Module||i),self.ModuleFactory=self.Module=void 0,new e(i,r)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:e=>e.endsWith(`.wasm`)?n.wasmBinaryPath.toString():n.assetBinaryPath&&e.endsWith(`.data`)?n.assetBinaryPath.toString():e}),function(e,t){t=t.runningMode??``;var n=e.h.Ta();e.o=new vb(e.D(),t,n)}(e,r),await e.A(r),e}async function Mb(e,t,n,r){return jb(e,t,n,r)}function Nb(e,t,n){try{e.h.j.FS_unlink(`/${n}`)}catch{}e.h.j.FS_createDataFile(`/`,n,t,!0,!1,!1),Pb(e,`/${n}`)}function Pb(e,t){var n=fm(e.baseOptions,kv,1)||new kv;typeof t==`string`?(Jp(n,2,ap(t)),Jp(n,1)):t instanceof Uint8Array&&(Jp(n,1,$d(t,!1)),Jp(n,2)),q(e.baseOptions,0,1,n)}function Fb(e){try{let t=e.L.length;if(t===1)throw Error(e.L[0].message);if(t>1)throw Error(`Encountered multiple errors: `+e.L.map(e=>e.message).join(`, `))}finally{e.L=[]}}function $(e,t){e.J=Math.max(e.J,t)}function Ib(e,t){e.F=new G_,Om(e.F,2,`PassThroughCalculator`),U_(e.F,`free_memory`),W_(e.F,`free_memory_unused_out`),X_(t,`free_memory`),Y_(t,e.F)}function Lb(e,t){U_(e.F,t),W_(e.F,t+`_unused_out`)}function Rb(e){e.h.addBoolToStream(!0,`free_memory`,e.J)}var zb=class{constructor(e){this.h=e,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(e,t=!0,n=!1,r=!1){if(t){let t=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error(`Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer`);if(!(fm(this.baseOptions,kv,1)?.h()||fm(this.baseOptions,kv,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error(`Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set`);(function(e,t,n=!1){var r=fm(e.baseOptions,Dv,3);if(!r){var i=r=new Dv,a=new I_;gm(i,4,Ov,a)}`delegate`in t&&(t.delegate===`GPU`?(t=r,i=new k_,gm(t,2,Ov,i)):(t=r,i=new I_,gm(t,4,Ov,i))),n&&(n=r.l(),t=r.h()||!0===n?.h(),n=new N_,t?q(n,0,9,t=new M_):q(n,0,8,t=new j_),gm(r,6,Ov,n)),q(e.baseOptions,0,3,r)})(this,t,r);let i=n?`model.litertlm`:`model.dat`;if(t.modelAssetPath)return fetch(t.modelAssetPath.toString()).then(e=>{if(e.ok)return e.arrayBuffer();throw Error(`Failed to fetch model: ${t.modelAssetPath} (${e.status})`)}).then(e=>{Nb(this,new Uint8Array(e),i),this.u(),this.M()});if(t.modelAssetBuffer instanceof Uint8Array)n?Nb(this,t.modelAssetBuffer,i):Pb(this,t.modelAssetBuffer);else if(t.modelAssetBuffer)return async function(e){for(var t=[],n=0;;){let{done:r,value:i}=await e.read();if(r)break;t.push(i),n+=i.length}if(t.length===0)return new Uint8Array;if(t.length===1)return t[0];e=new Uint8Array(n),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}(t.modelAssetBuffer).then(e=>{n?Nb(this,e,i):Pb(this,e),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var e;if(this.h.ka(t=>{e=ev(t)}),!e)throw Error(`Failed to retrieve CalculatorGraphConfig`);return e}setGraph(e,t){this.h.attachErrorListener((e,t)=>{this.L.push(Error(t))}),this.h.ab(),this.h.setGraph(e,t),this.o?.za(),this.F=void 0,Fb(this)}finishProcessing(e){this.h.finishProcessing(),Fb(this),this.o&&e!==void 0&&this.o.Aa(e)}close(){this.F=void 0,this.o?.ya(),this.o?.close(),this.h.closeGraph()}};function Bb(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}zb.prototype.close=zb.prototype.close;var Vb=class{constructor(e,t,n,r){this.h=e,this.i=t,this.o=n,this.l=r}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};function Hb(e,t,n){var r=e.h;if(n=Bb(r.createShader(n),`Failed to create WebGL shader`),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${r.getShaderInfoLog(n)}`);return r.attachShader(e.i,n),n}function Ub(e,t){var n=e.h,r=Bb(n.createVertexArray(),`Failed to create vertex array`);n.bindVertexArray(r);var i=Bb(n.createBuffer(),`Failed to create buffer`);n.bindBuffer(n.ARRAY_BUFFER,i),n.enableVertexAttribArray(e.G),n.vertexAttribPointer(e.G,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var a=Bb(n.createBuffer(),`Failed to create buffer`);return n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Vb(n,r,i,a)}function Wb(e,t){if(e.h){if(t!==e.h)throw Error(`Cannot change GL context once initialized`)}else e.h=t}function Gb(e,t,n,r){return Wb(e,t),e.i||(e.o(),e.J()),n?(e.m||(e.m=Ub(e,!0)),n=e.m):(e.F||(e.F=Ub(e,!1)),n=e.F),t.useProgram(e.i),n.bind(),e.l(),e=r(),n.h.bindVertexArray(null),e}function Kb(e,t,n){return Wb(e,t),e=Bb(t.createTexture(),`Failed to create texture`),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function qb(e,t,n){Wb(e,t),e.D||=Bb(t.createFramebuffer(),`Failed to create framebuffe.`),t.bindFramebuffer(t.FRAMEBUFFER,e.D),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function Jb(e){e.h?.bindFramebuffer(e.h.FRAMEBUFFER,null)}var Yb=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var e=this.h;if(this.i=Bb(e.createProgram(),`Failed to create WebGL program`),this.ea=Hb(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.aa=Hb(this,this.C(),e.FRAGMENT_SHADER),e.linkProgram(this.i),!e.getProgramParameter(this.i,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.i)}`);this.G=e.getAttribLocation(this.i,`aVertex`),this.L=e.getAttribLocation(this.i,`aTex`)}J(){}l(){}close(){if(this.i){let e=this.h;e.deleteProgram(this.i),e.deleteShader(this.ea),e.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},Xb=class extends Yb{C(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}J(){var e=this.h;e.activeTexture(e.TEXTURE1),this.v=Kb(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.u=Kb(this,e,e.NEAREST)}o(){super.o();var e=this.h;this.P=Bb(e.getUniformLocation(this.i,`backgroundTexture`),`Uniform location`),this.Z=Bb(e.getUniformLocation(this.i,`colorMappingTexture`),`Uniform location`),this.M=Bb(e.getUniformLocation(this.i,`maskTexture`),`Uniform location`)}l(){super.l();var e=this.h;e.uniform1i(this.M,0),e.uniform1i(this.P,1),e.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},Zb=class extends Yb{C(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}J(){var e=this.h;e.activeTexture(e.TEXTURE1),this.u=Kb(this,e),e.activeTexture(e.TEXTURE2),this.v=Kb(this,e)}o(){super.o();var e=this.h;this.M=Bb(e.getUniformLocation(this.i,`defaultTexture`),`Uniform location`),this.P=Bb(e.getUniformLocation(this.i,`overlayTexture`),`Uniform location`),this.K=Bb(e.getUniformLocation(this.i,`maskTexture`),`Uniform location`)}l(){super.l();var e=this.h;e.uniform1i(this.K,0),e.uniform1i(this.M,1),e.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};function Qb(e,t){switch(t){case 0:return e.h.find(e=>e instanceof Uint8Array);case 1:return e.h.find(e=>e instanceof Float32Array);case 2:return e.h.find(e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function $b(e){var t=Qb(e,1);if(!t){if(t=Qb(e,0))t=new Float32Array(t).map(e=>e/255);else{t=new Float32Array(e.width*e.height);let r=tx(e);var n=rx(e);if(qb(n,r,ex(e)),`iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod`.split(`;`).includes(navigator.platform)||navigator.userAgent.includes(`Mac`)&&`document`in self&&`ontouchend`in self.document){n=new Float32Array(e.width*e.height*4),r.readPixels(0,0,e.width,e.height,r.RGBA,r.FLOAT,n);for(let e=0,r=0;e<t.length;++e,r+=4)t[e]=n[r]}else r.readPixels(0,0,e.width,e.height,r.RED,r.FLOAT,t)}e.h.push(t)}return t}function ex(e){var t=Qb(e,2);if(!t){let n=tx(e);t=ix(e);let r=$b(e),i=nx(e);n.texImage2D(n.TEXTURE_2D,0,i,e.width,e.height,0,n.RED,n.FLOAT,r),ax(e)}return t}function tx(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.i||=Bb(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.i}function nx(e){if(e=tx(e),!ox){if(e.getExtension(`EXT_color_buffer_float`)&&e.getExtension(`OES_texture_float_linear`)&&e.getExtension(`EXT_float_blend`))ox=e.R32F;else{if(!e.getExtension(`EXT_color_buffer_half_float`))throw Error(`GPU does not fully support 4-channel float32 or float16 formats`);ox=e.R16F}}return ox}function rx(e){return e.l||=new Yb,e.l}function ix(e){var t=tx(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var n=Qb(e,2);return n||(n=Kb(rx(e),t,e.o?t.LINEAR:t.NEAREST),e.h.push(n),e.u=!0),t.bindTexture(t.TEXTURE_2D,n),n}function ax(e){e.i.bindTexture(e.i.TEXTURE_2D,null)}var ox,sx=class{constructor(e,t,n,r,i,a,o){this.h=e,this.o=t,this.u=n,this.canvas=r,this.l=i,this.width=a,this.height=o,this.u&&--cx===0&&console.error(`You seem to be creating MPMask instances without invoking .close(). This leaks resources.`)}Va(){return!!Qb(this,0)}va(){return!!Qb(this,1)}X(){return!!Qb(this,2)}ua(){return(t=Qb(e=this,0))||(t=$b(e),t=new Uint8Array(t.map(e=>Math.round(255*e))),e.h.push(t)),t;var e,t}ta(){return $b(this)}T(){return ex(this)}clone(){var e=[];for(let t of this.h){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{let e=tx(this),t=rx(this);e.activeTexture(e.TEXTURE1),n=Kb(t,e,this.o?e.LINEAR:e.NEAREST),e.bindTexture(e.TEXTURE_2D,n);let r=nx(this);e.texImage2D(e.TEXTURE_2D,0,r,this.width,this.height,0,e.RED,e.FLOAT,null),e.bindTexture(e.TEXTURE_2D,null),qb(t,e,n),Gb(t,e,!1,()=>{ix(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),ax(this)}),Jb(t),ax(this)}}e.push(n)}return new sx(e,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&tx(this).deleteTexture(Qb(this,2)),cx=-1}};sx.prototype.close=sx.prototype.close,sx.prototype.clone=sx.prototype.clone,sx.prototype.getAsWebGLTexture=sx.prototype.T,sx.prototype.getAsFloat32Array=sx.prototype.ta,sx.prototype.getAsUint8Array=sx.prototype.ua,sx.prototype.hasWebGLTexture=sx.prototype.X,sx.prototype.hasFloat32Array=sx.prototype.va,sx.prototype.hasUint8Array=sx.prototype.Va;var cx=250,lx={color:`white`,lineWidth:4,radius:6};function ux(e){return{...lx,fillColor:(e||={}).color,...e}}function dx(e,t){return e instanceof Function?e(t):e}function fx(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function px(e){if(!e.l)throw Error(`CPU rendering requested but CanvasRenderingContext2D not provided.`);return e.l}function mx(e){if(!e.u)throw Error(`GPU rendering requested but WebGL2RenderingContext not provided.`);return e.u}function hx(e,t,n){if(t.X())n(t.T());else{let r=t.va()?t.ta():t.ua();e.o=e.o??new Yb;let i=mx(e);n((e=new sx([r],t.o,!1,i.canvas,e.o,t.width,t.height)).T()),e.close()}}function gx(e,t,n,r){var i=function(e){return e.h||=new Xb,e.h}(e),a=mx(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;Gb(i,a,!0,()=>{(function(e,t,n,r){var i=e.h;if(i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,e.v),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,n),e.K&&function(e,t){if(e!==t)return!1;e=e.entries(),t=t.entries();for(let[n,r]of e){e=n;let i=r,a=t.next();if(a.done)return!1;let[o,s]=a.value;if(e!==o||i[0]!==s[0]||i[1]!==s[1]||i[2]!==s[2]||i[3]!==s[3])return!1}return!!t.next().done}(e.K,r))i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.u);else{e.K=r;let t=Array(1024).fill(0);r.forEach((e,n)=>{if(e.length!==4)throw Error(`Color at index ${n} is not a four-channel value.`);t[4*n]=e[0],t[4*n+1]=e[1],t[4*n+2]=e[2],t[4*n+3]=e[3]}),i.activeTexture(i.TEXTURE2),i.bindTexture(i.TEXTURE_2D,e.u),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,256,1,0,i.RGBA,i.UNSIGNED_BYTE,new Uint8Array(t))}})(i,t,o,r),a.clearColor(0,0,0,0),a.clear(a.COLOR_BUFFER_BIT),a.drawArrays(a.TRIANGLE_FAN,0,4);var e=i.h;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)})}function _x(e,t,n,r){var i=mx(e),a=function(e){return e.i||=new Zb,e.i}(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,s=Array.isArray(r)?new ImageData(new Uint8ClampedArray(r),1,1):r;Gb(a,i,!0,()=>{var e=a.h;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,t),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,a.u),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,o),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,a.v),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,s),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),i.bindTexture(i.TEXTURE_2D,null),(e=a.h).activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,null),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,null)})}var vx=class{constructor(e,t){typeof CanvasRenderingContext2D<`u`&&e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.u=t):this.u=e}Na(e,t){if(e){var n=px(this);t=ux(t),n.save();var r=n.canvas,i=0;for(let a of e)n.fillStyle=dx(t.fillColor,{index:i,from:a}),n.strokeStyle=dx(t.color,{index:i,from:a}),n.lineWidth=dx(t.lineWidth,{index:i,from:a}),(e=new Path2D).arc(a.x*r.width,a.y*r.height,dx(t.radius,{index:i,from:a}),0,2*Math.PI),n.fill(e),n.stroke(e),++i;n.restore()}}Ma(e,t,n){if(e&&t){var r=px(this);n=ux(n),r.save();var i=r.canvas,a=0;for(let o of t){r.beginPath(),t=e[o.start];let s=e[o.end];t&&s&&(r.strokeStyle=dx(n.color,{index:a,from:t,to:s}),r.lineWidth=dx(n.lineWidth,{index:a,from:t,to:s}),r.moveTo(t.x*i.width,t.y*i.height),r.lineTo(s.x*i.width,s.y*i.height)),++a,r.stroke()}r.restore()}}Ja(e,t){var n=px(this);t=ux(t),n.save(),n.beginPath(),n.lineWidth=dx(t.lineWidth,{}),n.strokeStyle=dx(t.color,{}),n.fillStyle=dx(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}Ka(e,t,n=[0,0,0,255]){this.l?function(e,t,n,r){var i=mx(e);hx(e,t,t=>{gx(e,t,n,r),(t=px(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)})}(this,e,n,t):gx(this,e.T(),n,t)}La(e,t,n){this.l?function(e,t,n,r){var i=mx(e);hx(e,t,t=>{_x(e,t,n,r),(t=px(e)).drawImage(i.canvas,0,0,t.canvas.width,t.canvas.height)})}(this,e,t,n):_x(this,e.T(),t,n)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};function yx(e,t){switch(t){case 0:return e.h.find(e=>e instanceof ImageData);case 1:return e.h.find(e=>typeof ImageBitmap<`u`&&e instanceof ImageBitmap);case 2:return e.h.find(e=>typeof WebGLTexture<`u`&&e instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function bx(e){var t=yx(e,0);if(!t){t=Sx(e);let n=Cx(e),r=new Uint8Array(e.width*e.height*4);qb(n,t,xx(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,r),Jb(n),t=new ImageData(new Uint8ClampedArray(r.buffer),e.width,e.height),e.h.push(t)}return t}function xx(e){var t=yx(e,2);if(!t){let n=Sx(e);t=wx(e);let r=yx(e,1)||bx(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r),Tx(e)}return t}function Sx(e){if(!e.canvas)throw Error(`Conversion to different image formats require that a canvas is passed when initializing the image.`);return e.i||=Bb(e.canvas.getContext(`webgl2`),`You cannot use a canvas that is already bound to a different type of rendering context.`),e.i}function Cx(e){return e.l||=new Yb,e.l}function wx(e){var t=Sx(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);var n=yx(e,2);return n||(n=Kb(Cx(e),t),e.h.push(n),e.o=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Tx(e){e.i.bindTexture(e.i.TEXTURE_2D,null)}function Ex(e){var t=Sx(e);return Gb(Cx(e),t,!0,()=>function(e,t){var n=e.canvas;if(n.width===e.width&&n.height===e.height)return t();var r=n.width,i=n.height;return n.width=e.width,n.height=e.height,e=t(),n.width=r,n.height=i,e}(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error(`Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas`);return e.canvas.transferToImageBitmap()}))}vx.prototype.close=vx.prototype.close,vx.prototype.drawConfidenceMask=vx.prototype.La,vx.prototype.drawCategoryMask=vx.prototype.Ka,vx.prototype.drawBoundingBox=vx.prototype.Ja,vx.prototype.drawConnectors=vx.prototype.Ma,vx.prototype.drawLandmarks=vx.prototype.Na,vx.lerp=function(e,t,n,r,i){return fx(r*(1-(e-t)/(n-t))+i*(1-(n-e)/(n-t)),r,i)},vx.clamp=fx;var Dx=class{constructor(e,t,n,r,i,a,o){this.h=e,this.u=t,this.o=n,this.canvas=r,this.l=i,this.width=a,this.height=o,(this.u||this.o)&&--Ox===0&&console.error(`You seem to be creating MPImage instances without invoking .close(). This leaks resources.`)}Ua(){return!!yx(this,0)}wa(){return!!yx(this,1)}X(){return!!yx(this,2)}Ra(){return bx(this)}Qa(){var e=yx(this,1);return e||(xx(this),wx(this),e=Ex(this),Tx(this),this.h.push(e),this.u=!0),e}T(){return xx(this)}clone(){var e=[];for(let t of this.h){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){let e=Sx(this),t=Cx(this);e.activeTexture(e.TEXTURE1),n=Kb(t,e),e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.width,this.height,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindTexture(e.TEXTURE_2D,null),qb(t,e,n),Gb(t,e,!1,()=>{wx(this),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),Tx(this)}),Jb(t),Tx(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);xx(this),wx(this),n=Ex(this),Tx(this)}e.push(n)}return new Dx(e,this.wa(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&yx(this,1).close(),this.o&&Sx(this).deleteTexture(yx(this,2)),Ox=-1}};Dx.prototype.close=Dx.prototype.close,Dx.prototype.clone=Dx.prototype.clone,Dx.prototype.getAsWebGLTexture=Dx.prototype.T,Dx.prototype.getAsImageBitmap=Dx.prototype.Qa,Dx.prototype.getAsImageData=Dx.prototype.Ra,Dx.prototype.hasWebGLTexture=Dx.prototype.X,Dx.prototype.hasImageBitmap=Dx.prototype.wa,Dx.prototype.hasImageData=Dx.prototype.Ua;var Ox=250;function kx(...e){return e.map(([e,t])=>({start:e,end:t}))}var Ax,jx=Ob((Ax=Db(Eb),class extends Ax{get pa(){return this.j}Ea(e,t,n){Q(this,t,t=>{var[r,i]=Sb(this,e,t);this.pa._addBoundTextureAsImageToStream(t,r,i,n)})}ha(e,t){wb(this,e,t),Q(this,e,e=>{this.pa._attachImageListener(e)})}ia(e,t){Tb(this,e,t),Q(this,e,e=>{this.pa._attachImageVectorListener(e)})}})),Mx=class extends jx{};async function Nx(e,t,n){return Mb(e,n.canvas??(yb()?void 0:document.createElement(`canvas`)),t,n)}function Px(e,t,n,r){if(e.o&&r!==void 0){var i=fm(e.baseOptions,Dv,3);i?.h()||i?.l()?.h()?(++(i=e.o).h.U,i.i.set(r,performance.now())):(++(i=e.o).h.R,i.i.set(r,performance.now()))}if(e.ra){if(i=new hv,n?.regionOfInterest){if(!e.Da)throw Error(`This task doesn't support region-of-interest.`);var a=n.regionOfInterest;if(a.left>=a.right||a.top>=a.bottom)throw Error(`Expected RectF with left < right and top < bottom.`);if(a.left<0||a.top<0||a.right>1||a.bottom>1)throw Error(`Expected RectF values to be in [0,1].`);J(i,1,(a.left+a.right)/2),J(i,2,(a.top+a.bottom)/2),J(i,4,a.right-a.left),J(i,3,a.bottom-a.top)}else J(i,1,.5),J(i,2,.5),J(i,4,1),J(i,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error(`Expected rotation to be a multiple of 90°.`);if(J(i,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[e,r]=xb(t);n=xm(i,3)*r/e,a=xm(i,4)*e/r,J(i,4,n),J(i,3,a)}}e.h.addProtoToStream(i.h(),`mediapipe.NormalizedRect`,e.ra,r)}e.h.Ea(t,e.Ca,r??performance.now()),e.finishProcessing(r)}function Fx(e,t,n){if(e.K)throw Error(`Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.`);Px(e,t,n,e.J+1)}function Ix(e,t,n,r){if(!e.K)throw Error(`Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.`);Px(e,t,n,r)}function Lx(e,t,n,r){var i=t.data,a=t.width,o=a*(t=t.height);if((i instanceof Uint8Array||i instanceof Float32Array)&&i.length!==o)throw Error(`Unsupported channel count: `+i.length/o);return e=new sx([i],n,!1,e.h.j.canvas,e.ea,a,t),r?e.clone():e}var Rx=class extends zb{constructor(e,t,n,r){super(e),this.h=e,this.Ca=t,this.ra=n,this.Da=r,this.ea=new Yb,this.K=!1}l(e,t=!0,n=!1,r=!1){if(`runningMode`in e){var i=this.K=!!e.runningMode&&e.runningMode!==`IMAGE`;Jp(this.baseOptions,2,i==null?i:Vf(i))}if(e.canvas!==void 0&&this.h.j.canvas!==e.canvas)throw Error(`You must create a new task to reset the canvas.`);return super.l(e,t,n,r)}close(){this.ea.close(),super.close()}};Rx.prototype.close=Rx.prototype.close;var zx=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect_in`,!1),this.m={detections:[]},q(e=this.i=new Pv,0,1,t=new Av),J(this.i,2,.5),J(this.i,3,.3)}D(){return`FaceDetector`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return`minDetectionConfidence`in e&&J(this.i,2,e.minDetectionConfidence??.5),`minSuppressionThreshold`in e&&J(this.i,3,e.minSuppressionThreshold??.3),this.l(e)}H(e,t){return this.m={detections:[]},Fx(this,e,t),this.m}I(e,t,n){return this.m={detections:[]},Ix(this,e,n,t),this.m}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect_in`),Z_(e,`detections`);var t=new B_;Jh(t,Iv,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.face_detector.FaceDetectorGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect_in`),W_(n,`DETECTIONS:detections`),n.A(t),Y_(e,n),this.h.attachProtoVectorListener(`detections`,(e,t)=>{for(let t of e)e=cv(t),this.m.detections.push(Py(e));$(this,t)}),this.h.attachEmptyPacketListener(`detections`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};zx.prototype.detectForVideo=zx.prototype.I,zx.prototype.detect=zx.prototype.H,zx.prototype.setOptions=zx.prototype.A,zx.createFromModelPath=async function(e,t){return Nx(zx,e,{baseOptions:{modelAssetPath:t}})},zx.createFromModelBuffer=function(e,t){return Nx(zx,e,{baseOptions:{modelAssetBuffer:t}})},zx.createFromOptions=function(e,t){return Nx(zx,e,t)};var Bx=kx([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Vx=kx([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Hx=kx([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Ux=kx([474,475],[475,476],[476,477],[477,474]),Wx=kx([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Gx=kx([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Kx=kx([469,470],[470,471],[471,472],[472,469]),qx=kx([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Jx=[...Bx,...Vx,...Hx,...Wx,...Gx,...qx],Yx=kx([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Xx(e){e.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Zx=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,q(e=this.i=new zv,0,1,t=new Av),this.C=new Rv,q(this.i,0,3,this.C),this.v=new Pv,q(this.i,0,2,this.v),wm(this.v,4,1),J(this.v,2,.5),J(this.C,2,.5),J(this.i,4,.5)}D(){return`FaceLandmarker`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return`numFaces`in e&&wm(this.v,4,e.numFaces??1),`minFaceDetectionConfidence`in e&&J(this.v,2,e.minFaceDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.i,4,e.minTrackingConfidence??.5),`minFacePresenceConfidence`in e&&J(this.C,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`outputFacialTransformationMatrixes`in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}H(e,t){return Xx(this),Fx(this,e,t),this.m}I(e,t,n){return Xx(this),Ix(this,e,n,t),this.m}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`),Z_(e,`face_landmarks`);var t=new B_;Jh(t,Vv,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),W_(n,`NORM_LANDMARKS:face_landmarks`),n.A(t),Y_(e,n),this.h.attachProtoVectorListener(`face_landmarks`,(e,t)=>{for(let t of e)e=fv(t),this.m.faceLandmarks.push(Fy(e));$(this,t)}),this.h.attachEmptyPacketListener(`face_landmarks`,e=>{$(this,e)}),this.outputFaceBlendshapes&&(Z_(e,`blendshapes`),W_(n,`BLENDSHAPES:blendshapes`),this.h.attachProtoVectorListener(`blendshapes`,(e,t)=>{if(this.outputFaceBlendshapes)for(let t of e)e=iv(t),this.m.faceBlendshapes.push(My(e.h()??[]));$(this,t)}),this.h.attachEmptyPacketListener(`blendshapes`,e=>{$(this,e)})),this.outputFacialTransformationMatrixes&&(Z_(e,`face_geometry`),W_(n,`FACE_GEOMETRY:face_geometry`),this.h.attachProtoVectorListener(`face_geometry`,(e,t)=>{if(this.outputFacialTransformationMatrixes)for(let t of e)(e=fm(e=Lv(t),pv,2))&&this.m.facialTransformationMatrixes.push({rows:bm(e,1)??0??0,columns:bm(e,2)??0??0,data:Qp(e,3,Bf).slice()??[]});$(this,t)}),this.h.attachEmptyPacketListener(`face_geometry`,e=>{$(this,e)})),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};Zx.prototype.detectForVideo=Zx.prototype.I,Zx.prototype.detect=Zx.prototype.H,Zx.prototype.setOptions=Zx.prototype.A,Zx.createFromModelPath=function(e,t){return Nx(Zx,e,{baseOptions:{modelAssetPath:t}})},Zx.createFromModelBuffer=function(e,t){return Nx(Zx,e,{baseOptions:{modelAssetBuffer:t}})},Zx.createFromOptions=function(e,t){return Nx(Zx,e,t)},Zx.FACE_LANDMARKS_LIPS=Bx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS`,Zx.FACE_LANDMARKS_LIPS),Zx.FACE_LANDMARKS_LEFT_EYE=Vx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE`,Zx.FACE_LANDMARKS_LEFT_EYE),Zx.FACE_LANDMARKS_LEFT_EYEBROW=Hx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW`,Zx.FACE_LANDMARKS_LEFT_EYEBROW),Zx.FACE_LANDMARKS_LEFT_IRIS=Ux,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS`,Zx.FACE_LANDMARKS_LEFT_IRIS),Zx.FACE_LANDMARKS_RIGHT_EYE=Wx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE`,Zx.FACE_LANDMARKS_RIGHT_EYE),Zx.FACE_LANDMARKS_RIGHT_EYEBROW=Gx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW`,Zx.FACE_LANDMARKS_RIGHT_EYEBROW),Zx.FACE_LANDMARKS_RIGHT_IRIS=Kx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS`,Zx.FACE_LANDMARKS_RIGHT_IRIS),Zx.FACE_LANDMARKS_FACE_OVAL=qx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL`,Zx.FACE_LANDMARKS_FACE_OVAL),Zx.FACE_LANDMARKS_CONTOURS=Jx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS`,Zx.FACE_LANDMARKS_CONTOURS),Zx.FACE_LANDMARKS_TESSELATION=Yx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION`,Zx.FACE_LANDMARKS_TESSELATION);var Qx=kx([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function $x(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function eS(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function tS(e,t=!0){var n=[];for(let i of e){var r=iv(i);e=[];for(let n of r.h())r=t&&bm(n,1)!=null?bm(n,1)??0:-1,e.push({score:xm(n,2)??0,index:r,categoryName:op(Kp(n,3))??``??``,displayName:op(Kp(n,4))??``??``});n.push(e)}return n}var nS=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],q(e=this.m=new Jv,0,1,t=new Av),this.v=new qv,q(this.m,0,2,this.v),this.G=new Kv,q(this.v,0,3,this.G),this.C=new Gv,q(this.v,0,2,this.C),this.i=new Wv,q(this.m,0,3,this.i),J(this.C,2,.5),J(this.v,4,.5),J(this.G,2,.5)}D(){return`GestureRecognizer`}get baseOptions(){return fm(this.m,Av,1)}set baseOptions(e){q(this.m,0,1,e)}A(e){if(wm(this.C,3,e.numHands??1),`minHandDetectionConfidence`in e&&J(this.C,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.v,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&J(this.G,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Hv,n=t,r=Ay(e.cannedGesturesClassifierOptions,fm(this.i,Hv,3)?.l());q(n,0,2,r),q(this.i,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&fm(this.i,Hv,3)?.h();return e.customGesturesClassifierOptions?(q(n=t=new Hv,0,2,r=Ay(e.customGesturesClassifierOptions,fm(this.i,Hv,4)?.l())),q(this.i,0,4,t)):e.customGesturesClassifierOptions===void 0&&fm(this.i,Hv,4)?.h(),this.l(e)}Ya(e,t){return $x(this),Fx(this,e,t),eS(this)}Za(e,t,n){return $x(this),Ix(this,e,n,t),eS(this)}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`),Z_(e,`hand_gestures`),Z_(e,`hand_landmarks`),Z_(e,`world_hand_landmarks`),Z_(e,`handedness`);var t=new B_;Jh(t,$v,this.m);var n=new G_;Om(n,2,`mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),W_(n,`HAND_GESTURES:hand_gestures`),W_(n,`LANDMARKS:hand_landmarks`),W_(n,`WORLD_LANDMARKS:world_hand_landmarks`),W_(n,`HANDEDNESS:handedness`),n.A(t),Y_(e,n),this.h.attachProtoVectorListener(`hand_landmarks`,(e,t)=>{for(let t of e)e=fv(t),this.landmarks.push(Fy(e));$(this,t)}),this.h.attachEmptyPacketListener(`hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoVectorListener(`world_hand_landmarks`,(e,t)=>{for(let t of e)e=uv(t),this.worldLandmarks.push(Iy(e));$(this,t)}),this.h.attachEmptyPacketListener(`world_hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoVectorListener(`hand_gestures`,(e,t)=>{this.gestures.push(...tS(e,!1)),$(this,t)}),this.h.attachEmptyPacketListener(`hand_gestures`,e=>{$(this,e)}),this.h.attachProtoVectorListener(`handedness`,(e,t)=>{this.handedness.push(...tS(e)),$(this,t)}),this.h.attachEmptyPacketListener(`handedness`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};function rS(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}nS.prototype.recognizeForVideo=nS.prototype.Za,nS.prototype.recognize=nS.prototype.Ya,nS.prototype.setOptions=nS.prototype.A,nS.createFromModelPath=function(e,t){return Nx(nS,e,{baseOptions:{modelAssetPath:t}})},nS.createFromModelBuffer=function(e,t){return Nx(nS,e,{baseOptions:{modelAssetBuffer:t}})},nS.createFromOptions=function(e,t){return Nx(nS,e,t)},nS.HAND_CONNECTIONS=Qx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS`,nS.HAND_CONNECTIONS);var iS=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],q(e=this.i=new qv,0,1,t=new Av),this.v=new Kv,q(this.i,0,3,this.v),this.m=new Gv,q(this.i,0,2,this.m),wm(this.m,3,1),J(this.m,2,.5),J(this.v,2,.5),J(this.i,4,.5)}D(){return`HandLandmarker`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return`numHands`in e&&wm(this.m,3,e.numHands??1),`minHandDetectionConfidence`in e&&J(this.m,2,e.minHandDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.i,4,e.minTrackingConfidence??.5),`minHandPresenceConfidence`in e&&J(this.v,2,e.minHandPresenceConfidence??.5),this.l(e)}H(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Fx(this,e,t),rS(this)}I(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ix(this,e,n,t),rS(this)}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`),Z_(e,`hand_landmarks`),Z_(e,`world_hand_landmarks`),Z_(e,`handedness`);var t=new B_;Jh(t,ey,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),W_(n,`LANDMARKS:hand_landmarks`),W_(n,`WORLD_LANDMARKS:world_hand_landmarks`),W_(n,`HANDEDNESS:handedness`),n.A(t),Y_(e,n),this.h.attachProtoVectorListener(`hand_landmarks`,(e,t)=>{for(let t of e)e=fv(t),this.landmarks.push(Fy(e));$(this,t)}),this.h.attachEmptyPacketListener(`hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoVectorListener(`world_hand_landmarks`,(e,t)=>{for(let t of e)e=uv(t),this.worldLandmarks.push(Iy(e));$(this,t)}),this.h.attachEmptyPacketListener(`world_hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoVectorListener(`handedness`,(e,t)=>{var n=this.handedness,r=n.push,i=[];for(let t of e){e=iv(t);let n=[];for(let t of e.h())n.push({score:xm(t,2)??0,index:bm(t,1)??0??-1,categoryName:op(Kp(t,3))??``??``,displayName:op(Kp(t,4))??``??``});i.push(n)}r.call(n,...i),$(this,t)}),this.h.attachEmptyPacketListener(`handedness`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};iS.prototype.detectForVideo=iS.prototype.I,iS.prototype.detect=iS.prototype.H,iS.prototype.setOptions=iS.prototype.A,iS.createFromModelPath=function(e,t){return Nx(iS,e,{baseOptions:{modelAssetPath:t}})},iS.createFromModelBuffer=function(e,t){return Nx(iS,e,{baseOptions:{modelAssetBuffer:t}})},iS.createFromOptions=function(e,t){return Nx(iS,e,t)},iS.HAND_CONNECTIONS=Qx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS`,iS.HAND_CONNECTIONS);var aS=kx([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function oS(e){e.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function sS(e){try{if(!e.G)return e.i;e.G(e.i)}finally{Rb(e)}}function cS(e,t){e=fv(e),t.push(Fy(e))}var lS=class extends Rx{constructor(e,t){super(new Mx(e,t),`input_frames_image`,null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,q(e=this.m=new iy,0,1,t=new Av),this.Z=new Kv,q(this.m,0,2,this.Z),this.Ba=new ty,q(this.m,0,3,this.Ba),this.v=new Pv,q(this.m,0,4,this.v),this.P=new Rv,q(this.m,0,5,this.P),this.C=new ny,q(this.m,0,6,this.C),this.aa=new ry,q(this.m,0,7,this.aa),J(this.v,2,.5),J(this.v,3,.3),J(this.P,2,.5),J(this.C,2,.5),J(this.C,3,.3),J(this.aa,2,.5),J(this.Z,2,.5)}D(){return`HolisticLandmarker`}get baseOptions(){return fm(this.m,Av,1)}set baseOptions(e){q(this.m,0,1,e)}A(e){return`minFaceDetectionConfidence`in e&&J(this.v,2,e.minFaceDetectionConfidence??.5),`minFaceSuppressionThreshold`in e&&J(this.v,3,e.minFaceSuppressionThreshold??.3),`minFacePresenceConfidence`in e&&J(this.P,2,e.minFacePresenceConfidence??.5),`outputFaceBlendshapes`in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),`minPoseDetectionConfidence`in e&&J(this.C,2,e.minPoseDetectionConfidence??.5),`minPoseSuppressionThreshold`in e&&J(this.C,3,e.minPoseSuppressionThreshold??.3),`minPosePresenceConfidence`in e&&J(this.aa,2,e.minPosePresenceConfidence??.5),`outputPoseSegmentationMasks`in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),`minHandLandmarksConfidence`in e&&J(this.Z,2,e.minHandLandmarksConfidence??.5),this.l(e)}H(e,t,n){var r=typeof t==`function`?{}:t;return this.G=typeof t==`function`?t:n,oS(this),Fx(this,e,r),sS(this)}I(e,t,n,r){var i=typeof n==`function`?{}:n;return this.G=typeof n==`function`?n:r,oS(this),Ix(this,e,i,t),sS(this)}u(){var e=new Q_;X_(e,`input_frames_image`),Z_(e,`pose_landmarks`),Z_(e,`pose_world_landmarks`),Z_(e,`face_landmarks`),Z_(e,`left_hand_landmarks`),Z_(e,`left_hand_world_landmarks`),Z_(e,`right_hand_landmarks`),Z_(e,`right_hand_world_landmarks`);var t=new B_,n=new b_;Om(n,1,`type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions`),function(e,t){if(t!=null){if(Array.isArray(t))Jp(e,2,Op(t,0,Ap));else{if(!(typeof t==`string`||t instanceof Sd||_d(t)))throw Error(`invalid value in Any.value field: `+t+` expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array`);am(e,2,$d(t,!1),yd())}}}(n,this.m.h());var r=new G_;Om(r,2,`mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph`),ym(r,8,b_,n),U_(r,`IMAGE:input_frames_image`),W_(r,`POSE_LANDMARKS:pose_landmarks`),W_(r,`POSE_WORLD_LANDMARKS:pose_world_landmarks`),W_(r,`FACE_LANDMARKS:face_landmarks`),W_(r,`LEFT_HAND_LANDMARKS:left_hand_landmarks`),W_(r,`LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks`),W_(r,`RIGHT_HAND_LANDMARKS:right_hand_landmarks`),W_(r,`RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks`),r.A(t),Y_(e,r),Ib(this,e),this.h.attachProtoListener(`pose_landmarks`,(e,t)=>{cS(e,this.i.poseLandmarks),$(this,t)}),this.h.attachEmptyPacketListener(`pose_landmarks`,e=>{$(this,e)}),this.h.attachProtoListener(`pose_world_landmarks`,(e,t)=>{var n=this.i.poseWorldLandmarks;e=uv(e),n.push(Iy(e)),$(this,t)}),this.h.attachEmptyPacketListener(`pose_world_landmarks`,e=>{$(this,e)}),this.outputPoseSegmentationMasks&&(W_(r,`POSE_SEGMENTATION_MASK:pose_segmentation_mask`),Lb(this,`pose_segmentation_mask`),this.h.ha(`pose_segmentation_mask`,(e,t)=>{this.i.poseSegmentationMasks=[Lx(this,e,!0,!this.G)],$(this,t)}),this.h.attachEmptyPacketListener(`pose_segmentation_mask`,e=>{this.i.poseSegmentationMasks=[],$(this,e)})),this.h.attachProtoListener(`face_landmarks`,(e,t)=>{cS(e,this.i.faceLandmarks),$(this,t)}),this.h.attachEmptyPacketListener(`face_landmarks`,e=>{$(this,e)}),this.outputFaceBlendshapes&&(Z_(e,`extra_blendshapes`),W_(r,`FACE_BLENDSHAPES:extra_blendshapes`),this.h.attachProtoListener(`extra_blendshapes`,(e,t)=>{var n=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(e=iv(e),n.push(My(e.h()??[]))),$(this,t)}),this.h.attachEmptyPacketListener(`extra_blendshapes`,e=>{$(this,e)})),this.h.attachProtoListener(`left_hand_landmarks`,(e,t)=>{cS(e,this.i.leftHandLandmarks),$(this,t)}),this.h.attachEmptyPacketListener(`left_hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoListener(`left_hand_world_landmarks`,(e,t)=>{var n=this.i.leftHandWorldLandmarks;e=uv(e),n.push(Iy(e)),$(this,t)}),this.h.attachEmptyPacketListener(`left_hand_world_landmarks`,e=>{$(this,e)}),this.h.attachProtoListener(`right_hand_landmarks`,(e,t)=>{cS(e,this.i.rightHandLandmarks),$(this,t)}),this.h.attachEmptyPacketListener(`right_hand_landmarks`,e=>{$(this,e)}),this.h.attachProtoListener(`right_hand_world_landmarks`,(e,t)=>{var n=this.i.rightHandWorldLandmarks;e=uv(e),n.push(Iy(e)),$(this,t)}),this.h.attachEmptyPacketListener(`right_hand_world_landmarks`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};lS.prototype.detectForVideo=lS.prototype.I,lS.prototype.detect=lS.prototype.H,lS.prototype.setOptions=lS.prototype.A,lS.createFromModelPath=function(e,t){return Nx(lS,e,{baseOptions:{modelAssetPath:t}})},lS.createFromModelBuffer=function(e,t){return Nx(lS,e,{baseOptions:{modelAssetBuffer:t}})},lS.createFromOptions=function(e,t){return Nx(lS,e,t)},lS.HAND_CONNECTIONS=Qx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS`,lS.HAND_CONNECTIONS),lS.POSE_CONNECTIONS=aS,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS`,lS.POSE_CONNECTIONS),lS.FACE_LANDMARKS_LIPS=Bx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS`,lS.FACE_LANDMARKS_LIPS),lS.FACE_LANDMARKS_LEFT_EYE=Vx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE`,lS.FACE_LANDMARKS_LEFT_EYE),lS.FACE_LANDMARKS_LEFT_EYEBROW=Hx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW`,lS.FACE_LANDMARKS_LEFT_EYEBROW),lS.FACE_LANDMARKS_LEFT_IRIS=Ux,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS`,lS.FACE_LANDMARKS_LEFT_IRIS),lS.FACE_LANDMARKS_RIGHT_EYE=Wx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE`,lS.FACE_LANDMARKS_RIGHT_EYE),lS.FACE_LANDMARKS_RIGHT_EYEBROW=Gx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW`,lS.FACE_LANDMARKS_RIGHT_EYEBROW),lS.FACE_LANDMARKS_RIGHT_IRIS=Kx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS`,lS.FACE_LANDMARKS_RIGHT_IRIS),lS.FACE_LANDMARKS_FACE_OVAL=qx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL`,lS.FACE_LANDMARKS_FACE_OVAL),lS.FACE_LANDMARKS_CONTOURS=Jx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS`,lS.FACE_LANDMARKS_CONTOURS),lS.FACE_LANDMARKS_TESSELATION=Yx,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION`,lS.FACE_LANDMARKS_TESSELATION);var uS=class extends Rx{constructor(e,t){super(new Mx(e,t),`input_image`,`norm_rect`,!0),this.m={classifications:[]},q(e=this.i=new sy,0,1,t=new Av)}D(){return`ImageClassifier`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return q(this.i,0,2,Ay(e,fm(this.i,Cv,2))),this.l(e)}Ha(e,t){return this.m={classifications:[]},Fx(this,e,t),this.m}Ia(e,t,n){return this.m={classifications:[]},Ix(this,e,n,t),this.m}u(){var e=new Q_;X_(e,`input_image`),X_(e,`norm_rect`),Z_(e,`classifications`);var t=new B_;Jh(t,cy,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.image_classifier.ImageClassifierGraph`),U_(n,`IMAGE:input_image`),U_(n,`NORM_RECT:norm_rect`),W_(n,`CLASSIFICATIONS:classifications`),n.A(t),Y_(e,n),this.h.attachProtoListener(`classifications`,(e,t)=>{this.m=Ny(_v(e)),$(this,t)}),this.h.attachEmptyPacketListener(`classifications`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};uS.prototype.classifyForVideo=uS.prototype.Ia,uS.prototype.classify=uS.prototype.Ha,uS.prototype.setOptions=uS.prototype.A,uS.createFromModelPath=function(e,t){return Nx(uS,e,{baseOptions:{modelAssetPath:t}})},uS.createFromModelBuffer=function(e,t){return Nx(uS,e,{baseOptions:{modelAssetBuffer:t}})},uS.createFromOptions=function(e,t){return Nx(uS,e,t)};var dS=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!0),this.i=new ly,this.embeddings={embeddings:[]},q(e=this.i,0,1,t=new Av)}D(){return`ImageEmbedder`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){var t=this.i,n=fm(this.i,Tv,2);if(n=n?n.clone():new Tv,e.l2Normalize!==void 0){var r=e.l2Normalize;Jp(n,1,r==null?r:Vf(r))}else`l2Normalize`in e&&Jp(n,1);return e.quantize===void 0?`quantize`in e&&Jp(n,2):Jp(n,2,(r=e.quantize)==null?r:Vf(r)),q(t,0,2,n),this.l(e)}Oa(e,t){return Fx(this,e,t),this.embeddings}Pa(e,t,n){return Ix(this,e,n,t),this.embeddings}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`),Z_(e,`embeddings_out`);var t=new B_;Jh(t,uy,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),W_(n,`EMBEDDINGS:embeddings_out`),n.A(t),Y_(e,n),this.h.attachProtoListener(`embeddings_out`,(e,t)=>{e=Sv(e),this.embeddings=function(e){return{embeddings:mm(e,bv,1).map(e=>{var t={headIndex:bm(e,3)??0??-1,headName:op(Kp(e,4))??``??``};if(Zp(e,1,xv))e=Qp(e=Sm(e,vv,1,xv),1,Bf),t.floatEmbedding=e.slice();else{let n=new Uint8Array;t.quantizedEmbedding=Sm(e,yv,2,xv)?.h()?.i()??n}return t}),timestampMs:jy(Kp(e,2,void 0,ep)??Wp)}}(e),$(this,t)}),this.h.attachEmptyPacketListener(`embeddings_out`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};dS.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Ry(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error(`Cannot compute cosine similarity between quantized and float embeddings.`);e=Ry(Ly(e.quantizedEmbedding),Ly(t.quantizedEmbedding))}return e},dS.prototype.embedForVideo=dS.prototype.Pa,dS.prototype.embed=dS.prototype.Oa,dS.prototype.setOptions=dS.prototype.A,dS.createFromModelPath=function(e,t){return Nx(dS,e,{baseOptions:{modelAssetPath:t}})},dS.createFromModelBuffer=function(e,t){return Nx(dS,e,{baseOptions:{modelAssetBuffer:t}})},dS.createFromOptions=function(e,t){return Nx(dS,e,t)};var fS=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};function pS(e){var t=function(e){return mm(e,G_,1)}(e.ka()).filter(e=>(op(Kp(e,1))??``).includes(`mediapipe.tasks.TensorsToSegmentationCalculator`));if(e.v=[],t.length>1)throw Error(`The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.`);t.length===1&&(fm(t[0],B_,7)?.u()?.h()??new Map).forEach((t,n)=>{e.v[Number(n)]=op(Kp(t,1))??``})}function mS(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function hS(e){try{let t=new fS(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.m)return t;e.m(t)}finally{Rb(e)}}fS.prototype.close=fS.prototype.close;var gS=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new hy,this.C=new dy,q(this.i,0,3,this.C),q(e=this.i,0,1,t=new Av)}D(){return`ImageSegmenter`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Jp(this.i,2):Jp(this.i,2,ap(e.displayNamesLocale)),`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}M(){pS(this)}segment(e,t,n){var r=typeof t==`function`?{}:t;return this.m=typeof t==`function`?t:n,mS(this),Fx(this,e,r),hS(this)}fb(e,t,n,r){var i=typeof n==`function`?{}:n;return this.m=typeof n==`function`?n:r,mS(this),Ix(this,e,i,t),hS(this)}Sa(){return this.v}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`);var t=new B_;Jh(t,gy,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),n.A(t),Y_(e,n),Ib(this,e),this.outputConfidenceMasks&&(Z_(e,`confidence_masks`),W_(n,`CONFIDENCE_MASKS:confidence_masks`),Lb(this,`confidence_masks`),this.h.ia(`confidence_masks`,(e,t)=>{this.confidenceMasks=e.map(e=>Lx(this,e,!0,!this.m)),$(this,t)}),this.h.attachEmptyPacketListener(`confidence_masks`,e=>{this.confidenceMasks=[],$(this,e)})),this.outputCategoryMask&&(Z_(e,`category_mask`),W_(n,`CATEGORY_MASK:category_mask`),Lb(this,`category_mask`),this.h.ha(`category_mask`,(e,t)=>{this.categoryMask=Lx(this,e,!1,!this.m),$(this,t)}),this.h.attachEmptyPacketListener(`category_mask`,e=>{this.categoryMask=void 0,$(this,e)})),Z_(e,`quality_scores`),W_(n,`QUALITY_SCORES:quality_scores`),this.h.attachFloatVectorListener(`quality_scores`,(e,t)=>{this.qualityScores=e,$(this,t)}),this.h.attachEmptyPacketListener(`quality_scores`,e=>{this.categoryMask=void 0,$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};gS.prototype.getLabels=gS.prototype.Sa,gS.prototype.segmentForVideo=gS.prototype.fb,gS.prototype.segment=gS.prototype.segment,gS.prototype.setOptions=gS.prototype.A,gS.createFromModelPath=function(e,t){return Nx(gS,e,{baseOptions:{modelAssetPath:t}})},gS.createFromModelBuffer=function(e,t){return Nx(gS,e,{baseOptions:{modelAssetBuffer:t}})},gS.createFromOptions=function(e,t){return Nx(gS,e,t)};var _S={0:0,1:1,2:2,3:3};function vS(){return yb()?void 0:document.createElement(`canvas`)}var yS=class extends zb{constructor(e,t){super(new Ab(e,t)),this.v=new Yb,this.delegate=`CPU`,this.i=0,this.baseOptions=new Av,this.C=this.m=0}D(){return`InteractiveSegmenter`}get j(){return this.h.j}A(e){return this.delegate=e.baseOptions?.delegate??`CPU`,super.l(e)}gb(e){if(this.i===0)throw Error(`Segmenter is not initialized.`);var t;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(t=typeof ImageData<`u`&&e instanceof ImageData)){if(typeof e!=`object`||!e)t=!1;else{t=e.data;var n=e.width,r=e.height;t=Number.isInteger(n)&&n>0&&Number.isInteger(r)&&r>0&&(t instanceof Uint8ClampedArray||t instanceof Uint8Array)}}if(t)t=e.width,n=e.height,e=e.data;else{if([t,n]=xb(e),typeof OffscreenCanvas<`u`)r=new OffscreenCanvas(t,n);else{if(typeof document>`u`)throw Error(`Canvas is not supported in this environment.`);r=document.createElement(`canvas`)}if(r.width=t,r.height=n,!(r=r.getContext(`2d`)))throw Error(`Canvas 2D context is not supported in this environment.`);r.drawImage(e,0,0),e=r.getImageData(0,0,t,n).data}if(!e)throw Error(`Unsupported image source or failed to extract image pixels.`);r=function({Xa:e,width:t,height:n}){if(t<=0||n<=0)throw Error(`Invalid image dimensions: ${t}x${n}. Dimensions must be positive.`);if(e%(t*n)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${e} is not a multiple of the number of pixels (${t*n}).`);if((e/=t*n)!==4&&e!==3&&e!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${e}. Expected 1, 3, or 4.`);return e}({Xa:e.length,width:t,height:n});var i=this.j._malloc(e.length);if(this.j.HEAPU8.set(e,i),this.m=i,!this.j._interactive_segmenter_set_image(this.i,i,t,n,r))throw Error(`Failed to set image on native engine.`)}segment(e){if(this.i===0)throw Error(`Segmenter is not initialized.`);var t=function(e){e=e.map(({isCompleted:e,brushMode:t,point:n})=>{t=_S[t]??0,n=n.map(({x:e,y:t})=>{var n=new _y;return Dm(n,1,e),Dm(n,2,t),n});var r=new vy;return Cm(r,e),am(r,1,Wf(t),0),_m(r,2,n),r});var t=new yy;return _m(t,1,e),by(t)}(e);e=this.j._malloc(t.length),this.j.HEAPU8.set(t,e);var n=this.j._malloc(12),r=n+4,i=n+8,a=0,o=this.C++;try{if(this.o){if(this.delegate===`GPU`){var s=this.o;++s.h.U,s.i.set(o,performance.now())}else{var c=this.o;++c.h.R,c.i.set(o,performance.now())}}if((a=this.j._interactive_segmenter_segment(this.i,e,t.length,n,r,i))===0)throw Error(`Segmentation failed.`);this.o?.Aa(o);let u=this.j.HEAPU32[n/4],d=this.j.HEAPU32[r/4],f=new Float32Array(this.j.HEAPU8.buffer,a,this.j.HEAPU32[i/4]/4);var l=new Float32Array(f);if(s=u*d,(l instanceof Uint8Array||l instanceof Float32Array)&&l.length!==s)throw Error(`Unsupported channel count: `+l.length/s);return new sx([l],!0,!1,this.h.j.canvas??void 0,this.v,u,d)}finally{e!==0&&this.j._free(e),n!==0&&this.j._free(n),a!==0&&this.j._free(a)}}u(){this.i!==0&&(this.o?.ya(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var e=new Dv;if(this.delegate===`GPU`){var t=new k_;gm(e,2,Ov,t)}else wm(t=new R_,1,4),gm(e,1,Ov,t);if(q(this.baseOptions,0,3,e),e=Nv(this.baseOptions),t=this.j._malloc(e.length),this.j.HEAPU8.set(e,t),this.i=this.j._interactive_segmenter_create(t,e.length),this.j._free(t),this.i===0)throw Error(`Failed to create native InteractiveSegmenter engine.`);this.o?.za()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};yS.prototype.close=yS.prototype.close,yS.prototype.segment=yS.prototype.segment,yS.prototype.setImage=yS.prototype.gb,yS.prototype.setOptions=yS.prototype.A,yS.createFromModelPath=function(e,t){return Mb(yS,vS(),e,{baseOptions:{modelAssetPath:t}})},yS.createFromModelBuffer=function(e,t){return Mb(yS,vS(),e,{baseOptions:{modelAssetBuffer:t}})},yS.createFromOptions=function(e,t){return Mb(yS,t.canvas??vS(),e,t)};var bS=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};bS.prototype.close=bS.prototype.close;var xS=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect_in`,!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new hy,this.v=new dy,q(this.i,0,3,this.v),q(e=this.i,0,1,t=new Av)}D(){return`InteractiveSegmenterLegacy`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return`outputCategoryMask`in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),`outputConfidenceMasks`in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,r){var i=typeof n==`function`?{}:n;if(this.m=typeof n==`function`?n:r,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,r=new wy,t.keypoint&&t.scribble)throw Error(`Cannot provide both keypoint and scribble.`);if(t.keypoint){var a=new xy;Cm(a,!0),Dm(a,1,t.keypoint.x),Dm(a,2,t.keypoint.y),gm(r,1,Ty,a)}else{if(!t.scribble)throw Error(`Must provide either a keypoint or a scribble.`);{let e=new Cy;for(a of t.scribble)Cm(t=new xy,!0),Dm(t,1,a.x),Dm(t,2,a.y),ym(e,1,xy,t);gm(r,2,Ty,e)}}this.h.addProtoToStream(r.h(),`mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest`,`roi_in`,n),Fx(this,e,i);t:{try{let e=new bS(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var o=e;break t}this.m(e)}finally{Rb(this)}o=void 0}return o}u(){var e=new Q_;X_(e,`image_in`),X_(e,`roi_in`),X_(e,`norm_rect_in`);var t=new B_;Jh(t,gy,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph`),U_(n,`IMAGE:image_in`),U_(n,`ROI:roi_in`),U_(n,`NORM_RECT:norm_rect_in`),n.A(t),Y_(e,n),Ib(this,e),this.outputConfidenceMasks&&(Z_(e,`confidence_masks`),W_(n,`CONFIDENCE_MASKS:confidence_masks`),Lb(this,`confidence_masks`),this.h.ia(`confidence_masks`,(e,t)=>{this.confidenceMasks=e.map(e=>Lx(this,e,!0,!this.m)),$(this,t)}),this.h.attachEmptyPacketListener(`confidence_masks`,e=>{this.confidenceMasks=[],$(this,e)})),this.outputCategoryMask&&(Z_(e,`category_mask`),W_(n,`CATEGORY_MASK:category_mask`),Lb(this,`category_mask`),this.h.ha(`category_mask`,(e,t)=>{this.categoryMask=Lx(this,e,!1,!this.m),$(this,t)}),this.h.attachEmptyPacketListener(`category_mask`,e=>{this.categoryMask=void 0,$(this,e)})),Z_(e,`quality_scores`),W_(n,`QUALITY_SCORES:quality_scores`),this.h.attachFloatVectorListener(`quality_scores`,(e,t)=>{this.qualityScores=e,$(this,t)}),this.h.attachEmptyPacketListener(`quality_scores`,e=>{this.categoryMask=void 0,$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};xS.prototype.segment=xS.prototype.segment,xS.prototype.setOptions=xS.prototype.A,xS.createFromModelPath=function(e,t){return Nx(xS,e,{baseOptions:{modelAssetPath:t}})},xS.createFromModelBuffer=function(e,t){return Nx(xS,e,{baseOptions:{modelAssetBuffer:t}})},xS.createFromOptions=function(e,t){return Nx(xS,e,t)};var SS=class extends Rx{constructor(e,t){super(new Mx(e,t),`input_frame_gpu`,`norm_rect`,!1),this.m={detections:[]},q(e=this.i=new Ey,0,1,t=new Av)}D(){return`ObjectDetector`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return e.displayNamesLocale===void 0?`displayNamesLocale`in e&&Jp(this.i,2):Jp(this.i,2,ap(e.displayNamesLocale)),e.maxResults===void 0?`maxResults`in e&&Jp(this.i,3):wm(this.i,3,e.maxResults),e.scoreThreshold===void 0?`scoreThreshold`in e&&Jp(this.i,4):J(this.i,4,e.scoreThreshold),e.categoryAllowlist===void 0?`categoryAllowlist`in e&&Jp(this.i,5):km(this.i,5,e.categoryAllowlist),e.categoryDenylist===void 0?`categoryDenylist`in e&&Jp(this.i,6):km(this.i,6,e.categoryDenylist),this.l(e)}H(e,t){return this.m={detections:[]},Fx(this,e,t),this.m}I(e,t,n){return this.m={detections:[]},Ix(this,e,n,t),this.m}u(){var e=new Q_;X_(e,`input_frame_gpu`),X_(e,`norm_rect`),Z_(e,`detections`);var t=new B_;Jh(t,Dy,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.ObjectDetectorGraph`),U_(n,`IMAGE:input_frame_gpu`),U_(n,`NORM_RECT:norm_rect`),W_(n,`DETECTIONS:detections`),n.A(t),Y_(e,n),this.h.attachProtoVectorListener(`detections`,(e,t)=>{for(let t of e)e=cv(t),this.m.detections.push(Py(e));$(this,t)}),this.h.attachEmptyPacketListener(`detections`,e=>{$(this,e)}),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};SS.prototype.detectForVideo=SS.prototype.I,SS.prototype.detect=SS.prototype.H,SS.prototype.setOptions=SS.prototype.A,SS.createFromModelPath=async function(e,t){return Nx(SS,e,{baseOptions:{modelAssetPath:t}})},SS.createFromModelBuffer=function(e,t){return Nx(SS,e,{baseOptions:{modelAssetBuffer:t}})},SS.createFromOptions=function(e,t){return Nx(SS,e,t)};var CS=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(e=>{e.close()})}};function wS(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function TS(e){try{let t=new CS(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.v)return t;e.v(t)}finally{Rb(e)}}CS.prototype.close=CS.prototype.close;var ES=class extends Rx{constructor(e,t){super(new Mx(e,t),`image_in`,`norm_rect`,!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,q(e=this.i=new Oy,0,1,t=new Av),this.C=new ry,q(this.i,0,3,this.C),this.m=new ny,q(this.i,0,2,this.m),wm(this.m,4,1),J(this.m,2,.5),J(this.C,2,.5),J(this.i,4,.5)}D(){return`PoseLandmarker`}get baseOptions(){return fm(this.i,Av,1)}set baseOptions(e){q(this.i,0,1,e)}A(e){return`numPoses`in e&&wm(this.m,4,e.numPoses??1),`minPoseDetectionConfidence`in e&&J(this.m,2,e.minPoseDetectionConfidence??.5),`minTrackingConfidence`in e&&J(this.i,4,e.minTrackingConfidence??.5),`minPosePresenceConfidence`in e&&J(this.C,2,e.minPosePresenceConfidence??.5),`outputSegmentationMasks`in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}H(e,t,n){var r=typeof t==`function`?{}:t;return this.v=typeof t==`function`?t:n,wS(this),Fx(this,e,r),TS(this)}I(e,t,n,r){var i=typeof n==`function`?{}:n;return this.v=typeof n==`function`?n:r,wS(this),Ix(this,e,i,t),TS(this)}u(){var e=new Q_;X_(e,`image_in`),X_(e,`norm_rect`),Z_(e,`normalized_landmarks`),Z_(e,`world_landmarks`),Z_(e,`segmentation_masks`);var t=new B_;Jh(t,ky,this.i);var n=new G_;Om(n,2,`mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph`),U_(n,`IMAGE:image_in`),U_(n,`NORM_RECT:norm_rect`),W_(n,`NORM_LANDMARKS:normalized_landmarks`),W_(n,`WORLD_LANDMARKS:world_landmarks`),n.A(t),Y_(e,n),Ib(this,e),this.h.attachProtoVectorListener(`normalized_landmarks`,(e,t)=>{this.landmarks=[];for(let t of e)e=fv(t),this.landmarks.push(Fy(e));$(this,t)}),this.h.attachEmptyPacketListener(`normalized_landmarks`,e=>{this.landmarks=[],$(this,e)}),this.h.attachProtoVectorListener(`world_landmarks`,(e,t)=>{this.worldLandmarks=[];for(let t of e)e=uv(t),this.worldLandmarks.push(Iy(e));$(this,t)}),this.h.attachEmptyPacketListener(`world_landmarks`,e=>{this.worldLandmarks=[],$(this,e)}),this.outputSegmentationMasks&&(W_(n,`SEGMENTATION_MASK:segmentation_masks`),Lb(this,`segmentation_masks`),this.h.ia(`segmentation_masks`,(e,t)=>{this.segmentationMasks=e.map(e=>Lx(this,e,!0,!this.v)),$(this,t)}),this.h.attachEmptyPacketListener(`segmentation_masks`,e=>{this.segmentationMasks=[],$(this,e)})),e=e.h(),this.setGraph(new Uint8Array(e),!0)}};ES.prototype.detectForVideo=ES.prototype.I,ES.prototype.detect=ES.prototype.H,ES.prototype.setOptions=ES.prototype.A,ES.createFromModelPath=function(e,t){return Nx(ES,e,{baseOptions:{modelAssetPath:t}})},ES.createFromModelBuffer=function(e,t){return Nx(ES,e,{baseOptions:{modelAssetBuffer:t}})},ES.createFromOptions=function(e,t){return Nx(ES,e,t)},ES.POSE_CONNECTIONS=aS,Gu(`module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS`,ES.POSE_CONNECTIONS);var DS=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]],OS=class{constructor(e,t){this.video=e,this.canvas=t,this.ctx=t?t.getContext(`2d`):null,this.landmarker=null,this.isRunning=!1,this.stream=null,this.isProcessingFrame=!1,this.lastProcessedTimestamp=0,this.targetSteer=0,this.targetThrottle=0,this.targetBrake=!1,this.targetEBrake=!1,this.detectedHandsCount=0,this.handsVisible=!1,this.DEADZONE=.08,this.MAX_TILT=.85,this.isGearLocked=!0,this.oneHandFrameCount=0,this.rawAngle=0,this.steeringDegrees=0,this.rightHandHistory=[],this.lastSwipeTime=0,this.onGearSwipe=null,this.onGearSelect=null,this.activeGear=`P`,this.hoveredGearSlot=null,this.hoverStartTime=0,this.lastShiftNotification=null,this.shiftNotificationTime=0,this.wasPinched=!1,this.leftHandData=null,this.rightHandData=null,this.onStatusChange=null,this.status=`uninitialized`}async init(){this.setStatus(`loading`,`Loading MediaPipe Hand Vision Engine...`);try{let e;try{e=await Uy.forVisionTasks(`/mediapipe/wasm`)}catch(t){console.warn(`Local wasm fallback to CDN:`,t),e=await Uy.forVisionTasks(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm`)}let t=`/mediapipe/hand_landmarker.task`;try{this.landmarker=await iS.createFromOptions(e,{baseOptions:{modelAssetPath:t,delegate:`GPU`},runningMode:`VIDEO`,numHands:2,minHandDetectionConfidence:.45,minHandPresenceConfidence:.45,minTrackingConfidence:.45})}catch(n){console.warn(`Local model fallback to CDN storage:`,n),t=`https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,this.landmarker=await iS.createFromOptions(e,{baseOptions:{modelAssetPath:t,delegate:`GPU`},runningMode:`VIDEO`,numHands:2,minHandDetectionConfidence:.45,minHandPresenceConfidence:.45,minTrackingConfidence:.45})}this.setStatus(`ready`,`Vision engine initialized. Requesting webcam...`),await this.startCamera()}catch(e){throw console.error(`HandLandmarker initialization failed:`,e),this.setStatus(`error`,`Camera unavailable. Using Keyboard mode.`),e}}async startCamera(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)this.setStatus(`denied`,`Camera API unavailable. Use Keyboard (WASD).`);else try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},frameRate:{ideal:30,max:30},facingMode:`user`},audio:!1}),this.video.srcObject=this.stream,await new Promise(e=>{this.video.onloadedmetadata=()=>{this.video.play().then(e)}}),this.canvas&&(this.canvas.width=this.video.videoWidth||640,this.canvas.height=this.video.videoHeight||480),this.isRunning=!0,this.setStatus(`active`,`Tracking active. Hold up 2 hands to steer, 1 hand to shift!`),this.scheduleVisionTick()}catch(e){console.warn(`Webcam permission denied:`,e),this.setStatus(`denied`,`Webcam access denied. Using Keyboard (WASD).`)}}stopCamera(){this.isRunning=!1,this.stream&&=(this.stream.getTracks().forEach(e=>e.stop()),null)}setStatus(e,t){this.status=e,this.onStatusChange&&this.onStatusChange(e,t)}notifyGearShift(e){this.lastShiftNotification=e,this.shiftNotificationTime=performance.now()}scheduleVisionTick(){this.isRunning&&(`requestVideoFrameCallback`in this.video?this.video.requestVideoFrameCallback(()=>{this.processVisionTick(),this.scheduleVisionTick()}):setTimeout(()=>{this.processVisionTick(),this.scheduleVisionTick()},33))}processVisionTick(){if(!this.isRunning||!this.video||!this.landmarker||this.isProcessingFrame||this.video.readyState<HTMLMediaElement.HAVE_CURRENT_DATA)return;let e=performance.now();if(!(e-this.lastProcessedTimestamp<22)){this.lastProcessedTimestamp=e,this.isProcessingFrame=!0;try{let t=this.landmarker.detectForVideo(this.video,e);this.solveGestures(t),this.renderHUD(t)}catch(e){console.warn(`Vision detection tick notice:`,e)}finally{this.isProcessingFrame=!1}}}solveGestures(e){let t=e?e.landmarks:null;if(!t||t.length===0){this.detectedHandsCount=0,this.handsVisible=!1,this.targetSteer=0,this.targetThrottle=0,this.targetBrake=!1,this.targetEBrake=!1,this.leftHandData=null,this.rightHandData=null,this.hoveredGearSlot=null,this.isGearLocked=!0,this.oneHandFrameCount=0;return}this.detectedHandsCount=t.length,this.handsVisible=!0;let n=performance.now();if(t.length>=2){this.isGearLocked=!0,this.oneHandFrameCount=0,this.hoveredGearSlot=null,this.rightHandHistory=[],this.wasPinched=!1;let e=t[0],n=t[1],r=1-e[9].x,i=1-n[9].x,a,o;r<i?(a=e,o=n):(a=n,o=e),this.leftHandData=a,this.rightHandData=o;let s=1-a[9].x,c=a[9].y,l=1-o[9].x,u=o[9].y,d=l-s,f=u-c,p=Math.atan2(f,Math.max(.12,Math.abs(d)));this.rawAngle=p;let m=Math.abs(p);if(m<this.DEADZONE)this.targetSteer=0;else{let e=Math.min(1,(m-this.DEADZONE)/(this.MAX_TILT-this.DEADZONE));this.targetSteer=Math.sign(p)*e}this.steeringDegrees=this.targetSteer*450;let h=this.isClenchedFist(a),g=this.isClenchedFist(o);if(h&&g)this.targetEBrake=!0,this.targetBrake=!0,this.targetThrottle=0;else if(h||g)this.targetBrake=!0,this.targetEBrake=!1,this.targetThrottle=0;else{this.targetBrake=!1,this.targetEBrake=!1;let e=o[0].y;this.targetThrottle=Math.max(0,Math.min(1,(e-.35)/.35))}return}this.oneHandFrameCount++,this.targetSteer=0,this.steeringDegrees=0;let r=t[0],i=1-r[9].x,a=r[9].y;if(i<.5?(this.leftHandData=r,this.rightHandData=null):(this.rightHandData=r,this.leftHandData=null),this.isClenchedFist(r)?(this.targetBrake=!0,this.targetEBrake=!1,this.targetThrottle=0):(this.targetBrake=!1,this.targetEBrake=!1,this.targetThrottle=0),this.oneHandFrameCount>=2){this.isGearLocked=!1;let e=this.calcDistance(r[4],r[8])/Math.max(.01,this.calcDistance(r[0],r[9]))<.28;if(e&&!this.wasPinched&&n-this.lastSwipeTime>320){let e=`D`;e=this.activeGear===`P`?`D`:this.activeGear===`D`?`R`:(this.activeGear,`D`),this.onGearSelect&&this.onGearSelect(e),this.lastSwipeTime=n,this.notifyGearShift(`⚡ PINCH: [ ${e} ]`)}for(this.wasPinched=e,this.rightHandHistory.push({x:i,y:a,time:n});this.rightHandHistory.length>0&&n-this.rightHandHistory[0].time>300;)this.rightHandHistory.shift();if(this.rightHandHistory.length>=2&&n-this.lastSwipeTime>320){let e=this.rightHandHistory[0],t=n-e.time;if(t>=70&&t<=300){let r=a-e.y,o=i-e.x,s=Math.abs(r),c=Math.abs(o),l=s/(t/1e3);if(s>=.045&&l>=.14&&s>.6*c){let e=r<0?-1:1;this.onGearSwipe&&this.onGearSwipe(e),this.lastSwipeTime=n,this.rightHandHistory=[],this.notifyGearShift(e<0?`▲ SHIFT UP`:`▼ SHIFT DOWN`)}}}if(i>.45){let e=null;e=a<.28?`P`:a<.48?`R`:a<.68?`N`:`D`,this.hoveredGearSlot===e?n-this.hoverStartTime>=60&&n-this.lastSwipeTime>320&&this.activeGear!==e&&(this.onGearSelect&&this.onGearSelect(e),this.lastSwipeTime=n,this.notifyGearShift(`⚡ ENGAGED: [ ${e} ]`)):(this.hoveredGearSlot=e,this.hoverStartTime=n)}else this.hoveredGearSlot=null}}isClenchedFist(e){let t=e[0],n=this.calcDistance(t,e[9]);if(n<.02)return!1;let r=[4,8,12,16,20],i=0;for(let a of r)this.calcDistance(t,e[a])<n*1.25&&i++;return i>=4}calcDistance(e,t){let n=e.x-t.x,r=e.y-t.y,i=(e.z||0)-(t.z||0);return Math.sqrt(n*n+r*r+i*i)}renderHUD(e){if(!this.ctx||!this.canvas)return;let t=this.ctx,n=this.canvas.width,r=this.canvas.height,i=performance.now();if(t.clearRect(0,0,n,r),!e||!e.landmarks||e.landmarks.length===0){t.fillStyle=`rgba(10, 20, 30, 0.45)`,t.fillRect(0,0,n,r),t.fillStyle=`#00e5ff`,t.font=`bold 13px "Segoe UI", sans-serif`,t.textAlign=`center`,t.fillText(`RAISE 2 HANDS TO STEER | 1 HAND TO SHIFT`,n/2,r/2);return}if(t.save(),t.translate(n,0),t.scale(-1,1),e.landmarks.forEach(e=>{let i=e===this.leftHandData,a=this.isGearLocked?i?`#00e5ff`:`#ff9100`:`#00ff88`,o=i?`#ffffff`:`#ffe082`;t.lineWidth=3,t.strokeStyle=a,t.lineCap=`round`,t.lineJoin=`round`;for(let[i,a]of DS){let o=e[i],s=e[a];t.beginPath(),t.moveTo(o.x*n,o.y*r),t.lineTo(s.x*n,s.y*r),t.stroke()}e.forEach((e,i)=>{let a=i===9||i===4||i===8?5.5:3;t.beginPath(),t.arc(e.x*n,e.y*r,a,0,2*Math.PI),t.fillStyle=i===9?`#ff1744`:o,t.fill(),t.strokeStyle=`#000000`,t.lineWidth=1,t.stroke()});let s=e[9];t.beginPath(),t.arc(s.x*n,s.y*r,9,0,2*Math.PI),t.strokeStyle=a,t.lineWidth=2,t.stroke()}),this.leftHandData&&this.rightHandData&&this.detectedHandsCount>=2){let e=this.leftHandData[9],i=this.rightHandData[9];t.beginPath(),t.moveTo(e.x*n,e.y*r),t.lineTo(i.x*n,i.y*r),t.strokeStyle=`rgba(255, 235, 59, 0.85)`,t.lineWidth=4,t.setLineDash([5,5]),t.stroke(),t.setLineDash([])}if(t.restore(),t.save(),t.fillStyle=`rgba(0, 0, 0, 0.80)`,t.fillRect(8,8,n-16,26),t.font=`bold 11px monospace`,t.textAlign=`left`,this.detectedHandsCount>=2){t.fillStyle=`#00e5ff`,t.fillText(`2 HANDS: STEERING ACTIVE`,14,25),t.fillStyle=`#ffeb3b`;let e=Math.round(this.steeringDegrees);t.fillText(`STEER: ${e>0?`+`:``}${e}°`,180,25),t.fillStyle=this.targetEBrake?`#ff1744`:this.targetBrake?`#ff9100`:`#76ff03`;let r=this.targetEBrake?`E-BRAKE`:this.targetBrake?`BRAKE`:`GAS: ${Math.round(this.targetThrottle*100)}%`;t.fillText(r,275,25),t.fillStyle=`#94a3b8`,t.fillText(`🔒 GEARS LOCKED`,n-120,25)}else t.fillStyle=`#00ff88`,t.fillText(`1 HAND: GEAR SHIFT MODE`,14,25),t.fillStyle=`#94a3b8`,t.fillText(`STEER: LOCKED`,180,25),t.fillStyle=`#00e5ff`,t.fillText(`🔓 GEARS UNLOCKED`,n-130,25);t.restore(),t.save();let a=n-72-10,o=r-68;t.fillStyle=`rgba(10, 16, 26, 0.85)`,t.beginPath(),t.roundRect?t.roundRect(a,40,72,o,8):t.rect(a,40,72,o),t.fill(),t.strokeStyle=this.isGearLocked?`rgba(148, 163, 184, 0.35)`:`rgba(0, 255, 136, 0.85)`,t.lineWidth=this.isGearLocked?1.5:2.5,t.stroke(),t.fillStyle=this.isGearLocked?`#94a3b8`:`#00ff88`,t.font=`bold 9px "Segoe UI", sans-serif`,t.textAlign=`center`,t.fillText(this.isGearLocked?`🔒 LOCKED`:`⚡ UNLOCKED`,a+36,53);let s=[{id:`P`,label:`P`,name:`PARK`,color:`#00e5ff`},{id:`R`,label:`R`,name:`REV`,color:`#ff9100`},{id:`N`,label:`N`,name:`NEUT`,color:`#94a3b8`},{id:`D`,label:`D`,name:`DRIVE`,color:`#00ff88`}],c=(o-22)/4,l=Math.min(32,c-6);if(s.forEach((e,n)=>{let r=58+n*c,i=e.id===this.activeGear,o=!this.isGearLocked&&e.id===this.hoveredGearSlot;t.beginPath();let s=a+6;t.roundRect?t.roundRect(s,r,60,l,6):t.rect(s,r,60,l),i?(t.fillStyle=e.color,t.fill(),t.strokeStyle=`#ffffff`,t.lineWidth=2.5,t.stroke()):o?(t.fillStyle=`rgba(255, 235, 59, 0.35)`,t.fill(),t.strokeStyle=`#ffeb3b`,t.lineWidth=2,t.stroke()):(t.fillStyle=`rgba(255, 255, 255, 0.08)`,t.fill(),t.strokeStyle=`rgba(255, 255, 255, 0.15)`,t.lineWidth=1,t.stroke()),t.font=`900 13px "Segoe UI", sans-serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillStyle=i?`#000000`:o?`#ffeb3b`:`#e2e8f0`,t.fillText(e.label,s+16,r+l/2),t.font=`bold 8px "Segoe UI", sans-serif`,t.fillText(e.name,s+60-18,r+l/2)}),!this.isGearLocked&&this.detectedHandsCount===1){let e=this.rightHandData||this.leftHandData;if(e){let i=1-e[9].x,o=e[9].y,s=i*n,c=o*r;t.beginPath(),t.arc(s,c,13,0,Math.PI*2),t.strokeStyle=i>.45?`#00ff88`:`rgba(0, 229, 255, 0.8)`,t.lineWidth=2,t.stroke(),t.beginPath(),t.arc(s,c,3.5,0,Math.PI*2),t.fillStyle=`#ffffff`,t.fill(),i>.4&&(t.beginPath(),t.moveTo(s,c),t.lineTo(a,c),t.strokeStyle=`rgba(0, 255, 136, 0.4)`,t.setLineDash([3,3]),t.stroke(),t.setLineDash([]))}}if(this.lastShiftNotification&&i-this.shiftNotificationTime<950){let e=(i-this.shiftNotificationTime)/950,r=Math.max(0,1-e);t.save(),t.fillStyle=`rgba(0, 0, 0, ${r*.88})`;let a=(n-190)/2;t.beginPath(),t.roundRect?t.roundRect(a,44,190,30,6):t.rect(a,44,190,30),t.fill(),t.strokeStyle=`rgba(0, 255, 136, ${r})`,t.lineWidth=2,t.stroke(),t.font=`bold 12px "Segoe UI", sans-serif`,t.fillStyle=`rgba(0, 255, 136, ${r})`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(this.lastShiftNotification,n/2,59),t.restore()}t.fillStyle=`rgba(0, 0, 0, 0.75)`,t.fillRect(8,r-22,n-16,18),t.font=`bold 10px "Segoe UI", monospace`,t.textAlign=`center`,this.detectedHandsCount>=2?(t.fillStyle=`#00e5ff`,t.fillText(`🏎️ 2 HANDS = STEERING CONTROL (GEARS LOCKED) | DROP 1 HAND TO SHIFT`,n/2,r-9)):(t.fillStyle=`#00ff88`,t.fillText(`⚡ 1 HAND = SHIFT GEARS (PINCH, FLICK ▲▼, TAP GATE) | RAISE 2 HANDS TO STEER`,n/2,r-9)),t.restore()}setKeyboardInputs(e,t,n,r){this.targetSteer=e,this.targetThrottle=t,this.targetBrake=n,this.targetEBrake=r,this.handsVisible=!0,this.steeringDegrees=e*450}},kS=class e{constructor(){this.x=0,this.y=0,this.z=0,this.heading=0,this.speed=0,this.speedKmh=0,this.steerAngle=0,this.wheelbase=2.6,this.width=1.85,this.length=4.2,this.maxSpeed=23.61,this.maxSpeedKmh=85,this.gear=`P`,this.autoGear=1,this.rpm=800,this.idleRpm=800,this.maxRpm=7e3,this.gearRatios=[3.6,2.1,1.35,.95],this.reverseRatio=-3.2,this.engineAccel=11.8,this.footBrakeDecel=18.5,this.handBrakeDecel=28,this.rollingResistance=1.4,this.isEBrakeActive=!1,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.vibrationOffset=0,this.screechIntensity=0,this.fuel=100,this.isOutOfFuel=!1,this.turnSignal=`none`,this.obbCorners=[],this.updateOBB()}setGear(e){[`P`,`R`,`N`,`D`].includes(e)&&(this.gear=e)}cycleGear(e){let t=[`P`,`R`,`N`,`D`],n=t.indexOf(this.gear)+e;return n<0&&(n=0),n>=t.length&&(n=t.length-1),this.setGear(t[n]),this.gear}reset(e=0,t=0,n=0){this.x=e,this.y=0,this.z=t,this.heading=n,this.speed=0,this.speedKmh=0,this.steerAngle=0,this.gear=`P`,this.autoGear=1,this.rpm=800,this.pitch=0,this.roll=0,this.pitchVel=0,this.rollVel=0,this.screechIntensity=0,this.fuel=100,this.isOutOfFuel=!1,this.turnSignal=`none`,this.updateOBB()}update(e,t,n,r,i){let a=Math.min(.05,Math.max(.001,e));this.fuel<=.05&&(this.isOutOfFuel=!0,this.fuel=0,n=0),this.isEBrakeActive=i;let o=Math.min(1,Math.abs(this.speed)/this.maxSpeed),s=-t*.6*kt.lerp(1,.55,o);this.steerAngle=s;let c=0;Math.abs(this.speed)>.05&&(c=this.speed/this.wheelbase*Math.tan(this.steerAngle),this.heading+=c*a);let l=0,u=Math.abs(this.speed*3.6);if(this.gear===`D`&&(this.autoGear=u<24?1:u<46?2:u<68?3:4),this.gear===`D`){let e=Math.min(1,this.speed/this.maxSpeed);l+=this.engineAccel*n*(1-e**2.5)}else this.gear===`R`&&this.speed>-8&&(l-=this.engineAccel*.7*n);if(i){let e=Math.sign(this.speed);l-=e*this.handBrakeDecel}else if(r){let e=Math.sign(this.speed);l-=e*this.footBrakeDecel}else if(this.gear===`P`){let e=Math.sign(this.speed);l-=e*this.handBrakeDecel}else{let e=Math.sign(this.speed);l-=e*(this.rollingResistance+.012*this.speed*this.speed)}let d=this.speed;this.speed+=l*a,Math.abs(d)<.25&&n<.05&&(r||i||this.gear===`P`)&&(this.speed=0,l=0),this.gear===`P`&&(this.speed=0),this.gear===`D`&&d>=0&&this.speed<0&&(this.speed=0),this.gear===`R`&&d<=0&&this.speed>0&&(this.speed=0),this.speed=Math.max(-8,Math.min(this.maxSpeed,this.speed)),this.speedKmh=this.speed*3.6;let f=-Math.sin(this.heading),p=-Math.cos(this.heading);if(this.x+=f*this.speed*a,this.z+=p*this.speed*a,this.gear===`P`||this.gear===`N`){let e=this.idleRpm+n*4500;this.rpm+=(e-this.rpm)*Math.min(1,a*10)}else{let e=this.gear===`R`?Math.abs(this.reverseRatio):this.gearRatios[this.autoGear-1],t=Math.abs(this.speed)/.32*e*3.8*60/(2*Math.PI),r=Math.max(this.idleRpm,t+n*1100);this.rpm+=(r-this.rpm)*Math.min(1,a*8)}this.rpm=Math.min(this.maxRpm,Math.max(this.idleRpm,this.rpm));let m=Math.max(-.16,Math.min(.14,l/9.81*.16)),h=this.speed*c,g=Math.max(-.18,Math.min(.18,-h/9.81*.2)),_=(m-this.pitch)*24-this.pitchVel*7;this.pitchVel+=_*a,this.pitch+=this.pitchVel*a;let v=(g-this.roll)*24-this.rollVel*7;this.rollVel+=v*a,this.roll+=this.rollVel*a,this.vibrationOffset=Math.abs(this.speed)>4?Math.sin(performance.now()*.045)*(Math.abs(this.speed)/35)*.0028:0;let y=Math.abs(h)/9.81,b=y>.45?(y-.45)*1.5:0;if(i&&Math.abs(this.speed)>3&&(b=.95),this.screechIntensity+=(Math.min(1,b)-this.screechIntensity)*Math.min(1,a*10),this.fuel>0){let e=1+(this.rpm/4e3)**2*n*3;this.fuel=Math.max(0,this.fuel-.008*e*a)}this.updateOBB()}updateOBB(){let e=this.width*.5,t=this.length*.5,n=Math.cos(this.heading),r=Math.sin(this.heading),i=[{x:-e,z:-t},{x:e,z:-t},{x:e,z:t},{x:-e,z:t}];this.obbCorners=i.map(e=>({x:this.x+(e.x*n-e.z*r),z:this.z+(e.x*r+e.z*n)}))}checkCollisionWithBox(t){return e.satCollision(this.obbCorners,t)}checkCollisionWithAABB(t,n,r,i){let a=[{x:t,z:n},{x:r,z:n},{x:r,z:i},{x:t,z:i}];return e.satCollision(this.obbCorners,a)}static satCollision(e,t){let n=[e,t];for(let r=0;r<n.length;r++){let i=n[r];for(let n=0;n<i.length;n++){let r=(n+1)%i.length,a=i[n],o=i[r],s={x:-(o.z-a.z),z:o.x-a.x},c=Math.hypot(s.x,s.z);if(c<1e-4)continue;s.x/=c,s.z/=c;let l=1/0,u=-1/0;for(let t of e){let e=t.x*s.x+t.z*s.z;e<l&&(l=e),e>u&&(u=e)}let d=1/0,f=-1/0;for(let e of t){let t=e.x*s.x+e.z*s.z;t<d&&(d=t),t>f&&(f=t)}if(u<d||f<l)return!1}}return!0}},AS=class{constructor(e){this.scene=e,this.root=new kn,this.scene.add(this.root),this.colliders=[],this.trafficLights=[],this.guideArrows=[],this.beaconLights=[],this.parkingBay=null,this.finishLineMesh=null,this.checkpointMesh1=null,this.initMaterials(),this.buildWorld()}initMaterials(){this.glassTowerTex=this.createWindowGridTexture(`glass`),this.officeWindowTex=this.createWindowGridTexture(`office`),this.storefrontTex=this.createWindowGridTexture(`storefront`),this.asphaltMat=new W({color:2237738,roughness:.88,metalness:.12}),this.curbMat=new W({color:13423068,roughness:.75,metalness:.15}),this.sidewalkMat=new W({color:8160660,roughness:.92,metalness:.08}),this.whiteLineMat=new Gr({color:16777215}),this.yellowLineMat=new Gr({color:16763904}),this.grassMat=new W({color:3040808,roughness:.95}),this.arrowMat=new Gr({color:65416,transparent:!0,opacity:.85}),this.glassBuildingMat=new W({map:this.glassTowerTex,roughness:.25,metalness:.75}),this.officeBuildingMat=new W({map:this.officeWindowTex,roughness:.65,metalness:.3}),this.storefrontBuildingMat=new W({map:this.storefrontTex,roughness:.7,metalness:.2}),this.treeBarkMat=new W({color:4007709,roughness:.9}),this.treeLeafMat=new W({color:2984500,roughness:.75,flatShading:!0})}createWindowGridTexture(t){let n=document.createElement(`canvas`);n.width=256,n.height=256;let r=n.getContext(`2d`);if(t===`glass`){r.fillStyle=`#0f2438`,r.fillRect(0,0,256,256);for(let e=0;e<16;e++)for(let t=0;t<8;t++)r.fillStyle=Math.sin(e*13+t*7)>.15?Math.random()>.3?`#fef08a`:`#38bdf8`:`#1e3a5f`,r.fillRect(t*32+3,e*16+3,26,10);r.strokeStyle=`#091522`,r.lineWidth=2;for(let e=0;e<=8;e++)r.beginPath(),r.moveTo(e*32,0),r.lineTo(e*32,256),r.stroke()}else if(t===`office`){r.fillStyle=`#262f3d`,r.fillRect(0,0,256,256);for(let e=0;e<12;e++)for(let t=0;t<6;t++)r.fillStyle=Math.sin(e*9+t*17)>.05?`#fffae0`:`#141a24`,r.fillRect(t*42.666666666666664+5,e*21.333333333333332+4,32.666666666666664,13.333333333333332)}else{r.fillStyle=`#3a2e2b`,r.fillRect(0,0,256,256);for(let e=0;e<6;e++)for(let t=0;t<4;t++)r.fillStyle=(t+e)%2==0?`#fef9c3`:`#1a1818`,r.fillRect(t*64+8,e*32+6,48,20);r.fillStyle=`#e11d48`,r.fillRect(0,192,128,20),r.fillStyle=`#0284c7`,r.fillRect(128,192,128,20),r.fillStyle=`#bae6fd`,r.fillRect(8,214,112,38),r.fillRect(136,214,112,38)}let i=new Fi(n);return i.wrapS=e,i.wrapT=e,i.repeat.set(2,4),i}buildWorld(){let e=new lo(1200,1400);e.rotateX(-Math.PI/2);let t=new H(e,this.grassMat);t.position.set(0,-.06,-340),t.receiveShadow=!0,this.root.add(t),this.buildTurnableRoadNetwork(),this.buildInstancedLaneDashes(),this.buildTurningLaneArrows(),this.buildParkingLot(),this.buildDiverseSkyline(),this.buildStreetFoliage(),this.buildHighwayGantries(),this.buildInstancedStreetLamps(),this.buildStreetProps(),this.buildNavigationArrows(),this.buildFinishLine()}buildTurnableRoadNetwork(){let e=1150,t=new lo(20,e);t.rotateX(-Math.PI/2);let n=new H(t,this.asphaltMat);n.position.set(0,0,-500),n.receiveShadow=!0,this.root.add(n);let r=new lo(.18,e);r.rotateX(-Math.PI/2);let i=new H(r,this.yellowLineMat);i.position.set(-.16,.015,-500),this.root.add(i);let a=new H(r,this.yellowLineMat);a.position.set(.16,.015,-500),this.root.add(a),this.crossroadZs=[-80,-280,-530,-750,-980],this.crossroadZs.forEach(e=>{let t=new lo(260,18);t.rotateX(-Math.PI/2);let n=new H(t,this.asphaltMat);n.position.set(0,.003,e),n.receiveShadow=!0,this.root.add(n);let r=new H(new lo(260,.18),this.yellowLineMat);r.rotateX(-Math.PI/2),r.position.set(0,.016,e),this.root.add(r);let i=new lo(9.5,.45);i.rotateX(-Math.PI/2);let a=new H(i,this.whiteLineMat);a.position.set(-5,.018,e+12),this.root.add(a);let o=this.createTrafficLight(-10.8,e+12.5,e);this.trafficLights.push(o),this.buildZebraCrosswalk(e),this.buildCornerFillets(e)}),[-85,85].forEach(t=>{let n=new lo(16,e);n.rotateX(-Math.PI/2);let r=new H(n,this.asphaltMat);r.position.set(t,.002,-500),r.receiveShadow=!0,this.root.add(r);let i=new H(new lo(.18,e),this.yellowLineMat);i.rotateX(-Math.PI/2),i.position.set(t,.015,-500),this.root.add(i)}),this.buildOpenCurbsAndSidewalks()}buildOpenCurbsAndSidewalks(){[{startZ:60,endZ:-69},{startZ:-91,endZ:-269},{startZ:-291,endZ:-519},{startZ:-541,endZ:-739},{startZ:-761,endZ:-969},{startZ:-991,endZ:-1060}].forEach((e,t)=>{let n=e.startZ-e.endZ,r=(e.startZ+e.endZ)*.5,i=new H(new U(3.2,.22,n),this.sidewalkMat);i.position.set(-11.6,.1,r),this.root.add(i);let a=new H(new U(.3,.25,n),this.curbMat);if(a.position.set(-10.15,.12,r),this.root.add(a),this.colliders.push({type:`curb`,name:`Left Curb Block ${t}`,box:{minX:-13.2,minZ:e.endZ,maxX:-10,maxZ:e.startZ}}),t===0){let e=new H(new U(3.2,.22,105),this.sidewalkMat);e.position.set(11.6,.1,7.5),this.root.add(e);let t=new H(new U(.3,.25,105),this.curbMat);t.position.set(10.15,.12,7.5),this.root.add(t),this.colliders.push({type:`curb`,name:`Right Curb South`,box:{minX:10,minZ:-45,maxX:13.2,maxZ:60}})}else{let i=new H(new U(3.2,.22,n),this.sidewalkMat);i.position.set(11.6,.1,r),this.root.add(i);let a=new H(new U(.3,.25,n),this.curbMat);a.position.set(10.15,.12,r),this.root.add(a),this.colliders.push({type:`curb`,name:`Right Curb Block ${t}`,box:{minX:10,minZ:e.endZ,maxX:13.2,maxZ:e.startZ}})}});let e=new lo(16,46);e.rotateX(-Math.PI/2);let t=new H(e,this.asphaltMat);t.position.set(18,.003,-68),this.root.add(t)}buildCornerFillets(e){[{x:-10,z:e-9,rot:0},{x:-10,z:e+9,rot:Math.PI/2},{x:10,z:e+9,rot:Math.PI},{x:10,z:e-9,rot:-Math.PI/2}].forEach(e=>{let t=new zi(3.5,12,0,Math.PI/2);t.rotateX(-Math.PI/2);let n=new H(t,this.asphaltMat);n.position.set(e.x,.004,e.z),n.rotation.y=e.rot,this.root.add(n);let r=new uo(3.3,3.6,12,1,0,Math.PI/2);r.rotateX(-Math.PI/2);let i=new H(r,this.curbMat);i.position.set(e.x,.018,e.z),i.rotation.y=e.rot,this.root.add(i)})}buildInstancedLaneDashes(){let e=4.2,t=[-5,5],n=107*t.length,r=new lo(.18,e);r.rotateX(-Math.PI/2);let i=new mi(r,this.whiteLineMat,n),a=new On,o=0;t.forEach(t=>{let n=50;for(let r=0;r<107;r++)this.crossroadZs.some(e=>Math.abs(n-e)<11)?a.scale.set(0,0,0):(a.position.set(t,.015,n-e*.5),a.scale.set(1,1,1)),a.updateMatrix(),i.setMatrixAt(o++,a.matrix),n-=10.2}),i.instanceMatrix.needsUpdate=!0,this.root.add(i)}buildTurningLaneArrows(){this.crossroadZs.forEach(e=>{let t=e+20;this.createPavementArrow(-2.5,t,`left`),this.createPavementArrow(-5,t-12,`straight`),this.createPavementArrow(-7.5,t,`right`)})}createPavementArrow(e,t,n){let r=new Ta;n===`left`?(r.moveTo(0,0),r.lineTo(-1.2,.6),r.lineTo(-1.2,.2),r.lineTo(-.2,.2),r.lineTo(-.2,-1.2),r.lineTo(.2,-1.2),r.lineTo(.2,.5),r.lineTo(-.8,.5),r.closePath()):n===`right`?(r.moveTo(0,0),r.lineTo(1.2,.6),r.lineTo(1.2,.2),r.lineTo(.2,.2),r.lineTo(.2,-1.2),r.lineTo(-.2,-1.2),r.lineTo(-.2,.5),r.lineTo(.8,.5),r.closePath()):(r.moveTo(0,1.4),r.lineTo(.7,.3),r.lineTo(.25,.3),r.lineTo(.25,-1.2),r.lineTo(-.25,-1.2),r.lineTo(-.25,.3),r.lineTo(-.7,.3),r.closePath());let i=new fo(r);i.rotateX(-Math.PI/2);let a=new H(i,this.whiteLineMat);a.position.set(e,.016,t),this.root.add(a)}buildZebraCrosswalk(e){let t=new lo(.9,3.8);t.rotateX(-Math.PI/2);let n=new mi(t,this.whiteLineMat,24),r=new On,i=0;[-10.2,10.2].forEach(t=>{for(let a=-8.5;a<=8.5;a+=1.6)r.position.set(a,.017,e+t),r.updateMatrix(),n.setMatrixAt(i++,r.matrix)}),n.instanceMatrix.needsUpdate=!0,this.root.add(n)}createTrafficLight(e,t,n){let r=new kn;r.position.set(e,0,t);let i=new Bi(.12,.12,5.5,8),a=new W({color:3355443,metalness:.7}),o=new H(i,a);o.position.y=2.75,r.add(o);let s=new H(new U(4.5,.12,.12),a);s.position.set(2.2,5.2,0),r.add(s);let c=new H(new U(.35,1.1,.35),new W({color:1710618}));c.position.set(3.8,4.6,0),r.add(c);let l=new Gr({color:4456448}),u=new H(new zi(.12,12),l);u.position.set(3.8,4.95,.18),r.add(u);let d=new Gr({color:4469504}),f=new H(new zi(.12,12),d);f.position.set(3.8,4.6,.18),r.add(f);let p=new Gr({color:17408}),m=new H(new zi(.12,12),p);return m.position.set(3.8,4.25,.18),r.add(m),this.root.add(r),this.colliders.push({type:`pole`,name:`Traffic Light Pole`,box:{minX:e-.4,minZ:t-.4,maxX:e+.4,maxZ:t+.4}}),{group:r,redLamp:u,yelLamp:f,grnLamp:m,redMat:l,yelMat:d,grnMat:p,stopLineZ:n+12,state:`green`,timer:0}}buildDiverseSkyline(){let e=[];for(let t=40;t>-1050;t-=36){if(this.crossroadZs.some(e=>Math.abs(t-e)<18))continue;let n=30+Math.abs(t)*13%52,r=22+Math.abs(t)*3%8,i=26+Math.abs(t)*5%6,a=t%72==0;e.push({x:-42,y:n*.5,z:t,sx:r,sy:n,sz:i,mat:a?this.glassBuildingMat:this.officeBuildingMat,hasRooftopAntenna:n>60})}for(let t=40;t>-1050;t-=38){if(t>-105&&t<-35||t>-1005&&t<-945||this.crossroadZs.some(e=>Math.abs(t-e)<18))continue;let n=28+Math.abs(t)*11%48,r=24+Math.abs(t)*5%8,i=28+Math.abs(t)*7%6,a=n<42;e.push({x:44,y:n*.5,z:t,sx:r,sy:n,sz:i,mat:a?this.storefrontBuildingMat:this.officeBuildingMat,hasRooftopAntenna:n>55})}[-115,115].forEach(t=>{for(let n=30;n>-1050;n-=48){let r=45+Math.abs(n)*17%45;e.push({x:t,y:r*.5,z:n,sx:32,sy:r,sz:36,mat:this.glassBuildingMat,hasRooftopAntenna:!0})}}),e.forEach(e=>{let t=new H(new U(e.sx,e.sy,e.sz),e.mat);t.position.set(e.x,e.y,e.z),t.receiveShadow=!0,t.castShadow=!0,this.root.add(t);let n=e.sy,r=new H(new U(3.5,1.8,3.5),new W({color:4674921,metalness:.6}));if(r.position.set(e.x-3,n+.9,e.z-2),this.root.add(r),e.hasRooftopAntenna){let t=new H(new Bi(.08,.22,12,6),new W({color:13751771,metalness:.9}));t.position.set(e.x+4,n+6,e.z+3),this.root.add(t);let r=new Gr({color:16711680}),i=new H(new mo(.35,6,6),r);i.position.set(e.x+4,n+12.2,e.z+3),this.root.add(i),this.beaconLights.push(r)}})}buildStreetFoliage(){let e=[];for(let t=45;t>-1050;t-=24)this.crossroadZs.some(e=>Math.abs(t-e)<14)||(e.push({x:-12.4,z:t}),(t>-40||t<-100)&&e.push({x:12.4,z:t}));let t=new Bi(.18,.24,2.6,6);t.translate(0,1.3,0);let n=new Ui(1.65,1);n.translate(0,3.4,0);let r=new mi(t,this.treeBarkMat,e.length),i=new mi(n,this.treeLeafMat,e.length);r.castShadow=!0,i.castShadow=!0;let a=new On;e.forEach((e,t)=>{a.position.set(e.x,0,e.z);let n=.85+t*7%5*.08;a.scale.set(n,n,n),a.rotation.y=t*1.3,a.updateMatrix(),r.setMatrixAt(t,a.matrix),i.setMatrixAt(t,a.matrix),this.colliders.push({type:`tree`,name:`Sidewalk Tree`,box:{minX:e.x-.4,minZ:e.z-.4,maxX:e.x+.4,maxZ:e.z+.4}})}),r.instanceMatrix.needsUpdate=!0,i.instanceMatrix.needsUpdate=!0,this.root.add(r),this.root.add(i)}buildHighwayGantries(){let e=[-60,-200,-360,-520],t=[`⬆ MAIN BOULEVARD | ⬅ DOWNTOWN | METRO PARK ➡`,`⬆ CIVIC CENTER | ⬅ CIVIC PLAZA | AIRPORT EXPWY ➡`,`⬆ UPTOWN DISTRICT | ⬅ SHOPPING MALL | TECH HUB ➡`,`⬆ GRAND TERMINAL | ⬅ WEST BAY | HARBOR ➡`];e.forEach((e,n)=>{let r=new kn;r.position.set(0,0,e);let i=new W({color:3359061,metalness:.8}),a=new H(new U(.4,7.5,.4),i);a.position.set(-10.5,3.75,0),r.add(a);let o=new H(new U(.4,7.5,.4),i);o.position.set(10.5,3.75,0),r.add(o);let s=new H(new U(21.4,.5,.5),i);s.position.set(0,7.2,0),r.add(s);let c=new Gr({map:this.createHighwaySignCanvas(t[n%t.length])}),l=new H(new lo(16,2.2),c);l.position.set(0,6.2,.28),r.add(l),this.root.add(r)})}createHighwaySignCanvas(e){let t=document.createElement(`canvas`);t.width=512,t.height=70;let n=t.getContext(`2d`);n.fillStyle=`#047857`,n.fillRect(0,0,512,70),n.strokeStyle=`#ffffff`,n.lineWidth=4,n.strokeRect(4,4,504,62),n.fillStyle=`#ffffff`,n.font=`bold 20px "Segoe UI", sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(e,256,36);let r=new Fi(t);return r.needsUpdate=!0,r}buildInstancedStreetLamps(){let e=[];for(let t=40;t>-1050;t-=32)this.crossroadZs.some(e=>Math.abs(t-e)<14)||(e.push({x:-10.8,z:t,dir:1}),(t>-40||t<-100)&&e.push({x:10.8,z:t,dir:-1}));let t=e.length,n=new W({color:1976635,metalness:.85}),r=new Gr({color:16774102}),i=new Bi(.08,.12,6.4,8),a=new U(1.6,.08,.08),o=new mo(.2,8,8),s=new mi(i,n,t),c=new mi(a,n,t),l=new mi(o,r,t),u=new On;e.forEach((e,t)=>{u.position.set(e.x,3.2,e.z),u.scale.set(1,1,1),u.rotation.set(0,0,0),u.updateMatrix(),s.setMatrixAt(t,u.matrix),u.position.set(e.x+e.dir*.8,6.3,e.z),u.updateMatrix(),c.setMatrixAt(t,u.matrix),u.position.set(e.x+e.dir*1.5,6.2,e.z),u.updateMatrix(),l.setMatrixAt(t,u.matrix),this.colliders.push({type:`pole`,name:`Street Lamp Pole`,box:{minX:e.x-.25,minZ:e.z-.25,maxX:e.x+.25,maxZ:e.z+.25}})}),s.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,this.root.add(s),this.root.add(c),this.root.add(l)}buildStreetProps(){let e=new Bi(.12,.14,.65,8),t=new W({color:14753096,metalness:.3});[-11.2,11.2].forEach(n=>{for(let r=20;r>-600;r-=80){let i=new H(e,t);i.position.set(n,.45,r),this.root.add(i)}});let n=new zi(.48,16);n.rotateX(-Math.PI/2);let r=new W({color:1118999,roughness:.6,metalness:.7});for(let e=10;e>-700;e-=45){let t=new H(n,r);t.position.set(-6.2,.012,e),this.root.add(t)}}buildParkingLot(){let e=new lo(34,60);e.rotateX(-Math.PI/2);let t=new H(e,this.asphaltMat);t.position.set(36,.003,-70),t.receiveShadow=!0,this.root.add(t),this.parkingBay={minX:32.6,maxX:35.4,minZ:-70.5,maxZ:-65.5,targetHeading:-Math.PI/2,centerX:34,centerZ:-68},this.createParkingSlotOutline(34,-68,3,5.4,!0),this.createPulsingTargetIndicator(34,-68,3,5.4),this.createParkedCar(34,-58,-Math.PI/2,1981066),this.createParkedCar(34,-78,-Math.PI/2,4674921),this.createParkedCar(24,-58,Math.PI/2,12131356),this.createParkedCar(24,-68,Math.PI/2,1409085),this.createCone(20,-88),this.createCone(20,-52),this.createCone(34,-86)}createParkingSlotOutline(e,t,n,r,i){let a=i?new Gr({color:65382}):this.yellowLineMat,o=.15,s=new H(new lo(n,o),a);s.rotation.x=-Math.PI/2,s.position.set(e,.015,t-r/2),this.root.add(s);let c=new H(new lo(n,o),a);c.rotation.x=-Math.PI/2,c.position.set(e,.015,t+r/2),this.root.add(c);let l=new H(new lo(o,r),a);l.rotation.x=-Math.PI/2,l.position.set(e+n/2,.015,t),this.root.add(l)}createPulsingTargetIndicator(e,t,n,r){let i=new lo(n-.2,r-.2);i.rotateX(-Math.PI/2);let a=new Gr({color:65416,transparent:!0,opacity:.35,side:2});this.targetMesh=new H(i,a),this.targetMesh.position.set(e,.02,t),this.root.add(this.targetMesh);let o=new Ni(new Ji(i),new xi({color:65535,linewidth:2}));o.position.set(e,.025,t),this.root.add(o)}createParkedCar(e,t,n,r){let i=new kn;i.position.set(e,0,t),i.rotation.y=n;let a=new W({color:r,roughness:.4}),o=new H(new U(1.85,.7,4.1),a);o.position.y=.55,i.add(o);let s=new W({color:2236962}),c=new H(new U(1.65,.6,2.2),s);c.position.set(0,1.15,.1),i.add(c),this.root.add(i);let l=4.3,u=Math.abs(n)>.5,d=u?l:2,f=u?2:l;this.colliders.push({type:`parked_car`,name:`Parked Vehicle`,box:{minX:e-d/2,minZ:t-f/2,maxX:e+d/2,maxZ:t+f/2}})}createCone(e,t){let n=new kn;n.position.set(e,0,t);let r=new H(new U(.4,.05,.4),new W({color:1118481}));r.position.y=.025,n.add(r);let i=new H(new Vi(.18,.65,8),new W({color:16733986,roughness:.6}));i.position.y=.35,n.add(i),this.root.add(n),this.colliders.push({type:`cone`,name:`Traffic Cone`,box:{minX:e-.3,minZ:t-.3,maxX:e+.3,maxZ:t+.3}})}buildNavigationArrows(){let e=new Ta;e.moveTo(0,1.2),e.lineTo(.8,0),e.lineTo(.35,0),e.lineTo(.35,-1),e.lineTo(-.35,-1),e.lineTo(-.35,0),e.lineTo(-.8,0),e.closePath();let t=new fo(e);t.rotateX(-Math.PI/2),[{x:-5,z:-30,rotY:0},{x:-5,z:-60,rotY:0},{x:-2.5,z:-72,rotY:Math.PI/2},{x:-7.5,z:-72,rotY:-Math.PI/2},{x:-5,z:-140,rotY:0},{x:-5,z:-180,rotY:0},{x:-2.5,z:-212,rotY:Math.PI/2},{x:-7.5,z:-212,rotY:-Math.PI/2},{x:-5,z:-260,rotY:0},{x:-5,z:-300,rotY:0},{x:3,z:-55,rotY:-Math.PI/2},{x:18,z:-65,rotY:-Math.PI/2},{x:34,z:-68,rotY:-Math.PI/2}].forEach(e=>{let n=new H(t,this.arrowMat);n.position.set(e.x,.45,e.z),n.rotation.y=e.rotY,this.root.add(n),this.guideArrows.push(n)})}buildFinishLine(){this.checkpointMesh1=this.createGantry(-480,58879,`500M SPRINT CHECKPOINT`),this.checkpointMesh2=this.createGantry(-730,16755200,`750M U-TURN FINISH`),this.finishLineMesh=this.createGantry(-980,65416,`1KM GRAND TERMINAL`)}createGantry(e,t,n){let r=new kn;r.position.set(0,0,e);let i=new W({color:3355443,metalness:.8}),a=new H(new U(.8,7.5,.8),i);a.position.set(-10.5,3.75,0),r.add(a);let o=new H(new U(.8,7.5,.8),i);o.position.set(10.5,3.75,0),r.add(o);let s=new H(new U(22,1.2,.8),i);s.position.set(0,7,0),r.add(s);let c=new Gr({color:t}),l=new H(new lo(16,1.8),c);l.position.set(0,6.2,.45),r.add(l);let u=new Gr({color:16777215}),d=new H(new lo(20,1.5),u);return d.rotation.x=-Math.PI/2,d.position.set(0,.02,0),r.add(d),this.root.add(r),r}update(e){let t=performance.now()*.001;this.trafficLights.forEach((t,n)=>{t.timer+=e;let r=(t.timer+n*7)%24.5;r<12?(t.state=`green`,t.grnMat.color.setHex(65280),t.yelMat.color.setHex(4469504),t.redMat.color.setHex(4456448)):r<15.5?(t.state=`yellow`,t.grnMat.color.setHex(17408),t.yelMat.color.setHex(16776960),t.redMat.color.setHex(4456448)):(t.state=`red`,t.grnMat.color.setHex(17408),t.yelMat.color.setHex(4469504),t.redMat.color.setHex(16711680))});let n=Math.floor(t*2)%2==0;this.beaconLights.forEach(e=>{e.color.setHex(n?16711680:3342336)}),this.arrowMat.opacity=.5+Math.sin(t*4)*.35,this.targetMesh&&(this.targetMesh.material.opacity=.3+Math.sin(t*5)*.25)}checkRedLightViolation(e){for(let t of this.trafficLights)if(t.state===`red`){let n=e.z-t.stopLineZ;if(n<.5&&n>-7&&Math.abs(e.x- -5)<4.5&&e.speed>.8)return!0}return!1}},jS=class{constructor(e){this.scene=e,this.vehicles=[],this.carColors=[{name:`Taxi`,color:16766464,roofColor:2171169,isTaxi:!0},{name:`Sedan Blue`,color:1668818,roofColor:870305},{name:`Sedan Silver`,color:11583173,roofColor:3622735},{name:`SUV Black`,color:2171169,roofColor:1118481},{name:`Delivery Van`,color:16740096,roofColor:16777215,isVan:!0},{name:`Sports Coupe Red`,color:13840175,roofColor:1973790},{name:`Police Cruiser`,color:16317180,roofColor:988970,isPolice:!0},{name:`City Compact Green`,color:1096065,roofColor:413243},{name:`White SUV`,color:15857145,roofColor:3359061},{name:`Orange Hatchback`,color:16347926,roofColor:1976635}],this.spawnTrafficFleet()}spawnTrafficFleet(){[{laneX:-7.5,z:-35,speed:10.8,dir:-1},{laneX:-2.5,z:-75,speed:11.5,dir:-1},{laneX:-7.5,z:-115,speed:12.2,dir:-1},{laneX:-2.5,z:-155,speed:11,dir:-1},{laneX:-7.5,z:-195,speed:12.8,dir:-1},{laneX:-2.5,z:-240,speed:10.5,dir:-1},{laneX:-7.5,z:-285,speed:13,dir:-1},{laneX:-2.5,z:-330,speed:11.2,dir:-1},{laneX:-7.5,z:-375,speed:12.5,dir:-1},{laneX:-2.5,z:-420,speed:10.8,dir:-1},{laneX:-7.5,z:-465,speed:13.2,dir:-1},{laneX:-2.5,z:-510,speed:11.6,dir:-1},{laneX:-7.5,z:-555,speed:12.4,dir:-1},{laneX:-2.5,z:-600,speed:11,dir:-1},{laneX:-7.5,z:-645,speed:13.5,dir:-1},{laneX:-2.5,z:-690,speed:11.8,dir:-1},{laneX:-7.5,z:-735,speed:12.6,dir:-1},{laneX:-2.5,z:-780,speed:11.4,dir:-1},{laneX:2.5,z:-20,speed:12,dir:1},{laneX:7.5,z:-60,speed:13.2,dir:1},{laneX:2.5,z:-100,speed:11.4,dir:1},{laneX:7.5,z:-140,speed:13.8,dir:1},{laneX:2.5,z:-180,speed:12.2,dir:1},{laneX:7.5,z:-225,speed:14,dir:1},{laneX:2.5,z:-270,speed:11.8,dir:1},{laneX:7.5,z:-315,speed:13.5,dir:1},{laneX:2.5,z:-360,speed:12.4,dir:1},{laneX:7.5,z:-405,speed:14.2,dir:1},{laneX:2.5,z:-450,speed:11.6,dir:1},{laneX:7.5,z:-495,speed:13.6,dir:1},{laneX:2.5,z:-540,speed:12,dir:1},{laneX:7.5,z:-585,speed:14.5,dir:1},{laneX:2.5,z:-630,speed:12.2,dir:1},{laneX:7.5,z:-675,speed:13.8,dir:1},{laneX:2.5,z:-720,speed:11.5,dir:1},{laneX:7.5,z:-765,speed:13.4,dir:1}].forEach((e,t)=>{let n=this.carColors[t%this.carColors.length],r=this.createVehicleMesh(n);r.position.set(e.laneX,0,e.z),r.rotation.y=e.dir===-1?0:Math.PI,this.scene.add(r),this.vehicles.push({mesh:r,x:e.laneX,z:e.z,dir:e.dir,laneX:e.laneX,baseSpeed:e.speed,targetSpeed:e.speed,currentSpeed:e.speed,width:1.85,length:4.2,obbCorners:[],isActive:!0})}),this.setLevelDifficulty(1)}setLevelDifficulty(e){this.currentLevel=e;let t=36;t=e===1?16:e===2?24:e===3?28:e===4?22:36,this.vehicles.forEach((n,r)=>{let i=r<t;n.isActive=i,n.mesh.visible=i,n.targetSpeed=e===1?Math.min(10.5,n.baseSpeed):n.baseSpeed||12.5})}createVehicleMesh(e){let t=new kn,n=new W({color:e.color,roughness:.35,metalness:.5}),r=!!e.isVan,i=r?1.1:.65,a=new H(new U(1.85,i,4.2),n);if(a.position.y=i*.5+.25,a.castShadow=!0,a.receiveShadow=!0,t.add(a),!r){let n=new W({color:e.roofColor,roughness:.3}),r=new H(new U(1.65,.62,2.2),n);r.position.set(0,1.18,.1),t.add(r);let i=new Gr({color:1118481}),a=new H(new lo(1.5,.45),i);a.position.set(0,1.15,-1.02),t.add(a)}if(e.isTaxi){let e=new Gr({color:16777215}),n=new H(new U(.5,.15,.2),e);n.position.set(0,1.58,.1),t.add(n)}if(e.isPolice){let e=new kn,n=new H(new U(.5,.08,.15),new W({color:1118481}));e.add(n);let r=new H(new U(.2,.08,.14),new Gr({color:16711680}));r.position.x=-.12,e.add(r);let i=new H(new U(.2,.08,.14),new Gr({color:26367}));i.position.x=.12,e.add(i),e.position.set(0,1.54,.1),t.add(e)}let o=new W({color:1710618,roughness:.9}),s=new Bi(.32,.32,.22,12);s.rotateZ(Math.PI/2);let c=new H(s,o);c.position.set(-.85,.32,-1.3),t.add(c);let l=new H(s,o);l.position.set(.85,.32,-1.3),t.add(l);let u=new H(s,o);u.position.set(-.85,.32,1.3),t.add(u);let d=new H(s,o);d.position.set(.85,.32,1.3),t.add(d);let f=new Gr({color:16777215}),p=new H(new U(.3,.15,.05),f);p.position.set(-.65,.6,-2.12),t.add(p);let m=new H(new U(.3,.15,.05),f);m.position.set(.65,.6,-2.12),t.add(m);let h=new Gr({color:13369344}),g=new H(new U(.3,.15,.05),h);g.position.set(-.65,.6,2.12),t.add(g);let _=new H(new U(.3,.15,.05),h);return _.position.set(.65,.6,2.12),t.add(_),t}setLevelDifficulty(e){this.currentLevel=e;let t=0,n=0;e===1?(t=0,n=0):e===2?(t=4,n=4):e===3?(t=7,n=7):e===4?(t=16,n=16):(t=18,n=18);let r=0,i=0;this.vehicles.forEach(e=>{e.dir===-1?(e.isActive=r<t,r++):(e.isActive=i<n,i++),e.mesh.visible=e.isActive})}update(e,t){let n=-1050;for(let r=0;r<this.vehicles.length;r++){let i=this.vehicles[r];if(i.isActive===!1)continue;let a=!1,o=t.x-i.x,s=t.z-i.z;Math.abs(o)<2.2&&(i.dir===-1&&s<0&&s>-18&&(a=!0),i.dir===1&&s>0&&s<18&&(a=!0));for(let e=0;e<this.vehicles.length;e++){if(r===e)continue;let t=this.vehicles[e];if(t.isActive&&t.dir===i.dir&&Math.abs(t.x-i.x)<1.8){let e=t.z-i.z;if(i.dir===-1&&e<0&&e>-14||i.dir===1&&e>0&&e<14){a=!0;break}}}a?i.currentSpeed+=(0-i.currentSpeed)*Math.min(1,e*5):i.currentSpeed+=(i.targetSpeed-i.currentSpeed)*Math.min(1,e*2),i.z+=i.dir*i.currentSpeed*e,i.dir===-1&&i.z<n?i.z=60+Math.random()*20:i.dir===1&&i.z>60&&(i.z=n-Math.random()*20),i.mesh.position.set(i.x,0,i.z);let c=i.width*.5,l=i.length*.5;i.obbCorners=[{x:i.x-c,z:i.z-l},{x:i.x+c,z:i.z-l},{x:i.x+c,z:i.z+l},{x:i.x-c,z:i.z+l}]}}checkCollisionWithPlayer(e){for(let t of this.vehicles)if(t.isActive!==!1&&e.checkCollisionWithBox(t.obbCorners))return t;return null}},MS={P:{z:.05,tilt:-.22},R:{z:.11,tilt:-.08},N:{z:.17,tilt:.05},D:{z:.23,tilt:.2}},NS=class{constructor(e,t){this.scene=e,this.renderer=t,this.group=new kn,this.scene.add(this.group),this.chassisGroup=new kn,this.group.add(this.chassisGroup),this.wheelFL=null,this.wheelFR=null,this.wheelRL=null,this.wheelRR=null,this.cabinGroup=new kn,this.chassisGroup.add(this.cabinGroup),this.steeringWheelMesh=null,this.speedNeedle=null,this.rpmNeedle=null,this.rearCamera=null,this.mirrorRenderTarget=null,this.mirrorMaterial=null,this.mirrorFrameCounter=0,this.brakeLights=[],this.reverseLights=[],this.leftIndicators=[],this.rightIndicators=[],this.cockpitCamera=null,this.thirdPersonCamera=null,this.activeCameraMode=`cockpit`,this.shifterGroup=null,this.shifterKnobMesh=null,this.gearBadges={},this.gearBadgeTextures={},this.currentShifterZ=MS.P.z,this.currentShifterTilt=MS.P.tilt,this.leftHandMesh=null,this.leftForearm=null,this.rightHandGroup=null,this.rightForearm=null,this.leftShoulderPos=new V(-.56,.98,.36),this.rightShoulderPos=new V(-.2,.98,.36),this.isShifting=!1,this.shiftProgress=0,this.shiftDuration=.35,this.shiftFromGear=`P`,this.shiftTargetGear=`P`,this.currentDisplayGear=`P`,this.shiftStartPos=new V,this.shiftStartQuat=new At,this.setupRearviewMirror(),this.buildExterior(),this.buildCockpit(),this.buildCenterConsoleAndShifter(),this.buildDriverHandsAndArms(),this.setupCameras()}setupRearviewMirror(){this.mirrorRenderTarget=new Zt(512,128,{generateMipmaps:!1,minFilter:o,magFilter:o}),this.rearCamera=new cs(55,4,.3,180),this.rearCamera.rotation.y=Math.PI,this.chassisGroup.add(this.rearCamera),this.rearCamera.position.set(0,1.35,-.2),this.mirrorMaterial=new Gr({map:this.mirrorRenderTarget.texture})}buildExterior(){let e=new W({color:15022389,roughness:.25,metalness:.6}),t=new W({color:2171169,roughness:.3,metalness:.5}),n=new Eo({color:10536191,transparent:!0,opacity:.35,roughness:.1,metalness:.1,transmission:.85}),r=new H(new U(1.85,.6,4.2),e);r.position.set(0,.55,0),r.castShadow=!0,r.receiveShadow=!0,this.chassisGroup.add(r);let i=new H(new U(1.8,.22,1.3),e);i.position.set(0,.72,-1.35),i.rotation.x=.08,this.chassisGroup.add(i);let a=new H(new U(1.68,.06,1.7),t);a.position.set(0,1.48,.35),a.castShadow=!0,this.chassisGroup.add(a);let o=new H(new U(1.68,.6,.08),e);o.position.set(0,1.15,1.2),o.castShadow=!0,this.chassisGroup.add(o);let s=new H(new lo(1.65,.85),n);s.position.set(0,1.15,-.85),s.rotation.x=-.58,this.chassisGroup.add(s);let c=new W({color:16777215,emissive:16777198,emissiveIntensity:.85}),l=new H(new U(.35,.18,.1),c);l.position.set(-.7,.65,-2.12),this.chassisGroup.add(l);let u=new H(new U(.35,.18,.1),c);u.position.set(.7,.65,-2.12),this.chassisGroup.add(u);let d=new H(new U(.8,.22,.05),new W({color:1118481}));d.position.set(0,.55,-2.12),this.chassisGroup.add(d);let f=new W({color:8912896,emissive:4456448,emissiveIntensity:.3}),p=new H(new U(.35,.16,.08),f);p.position.set(-.7,.68,2.12),this.chassisGroup.add(p),this.brakeLights.push(p);let m=new H(new U(.35,.16,.08),f.clone());m.position.set(.7,.68,2.12),this.chassisGroup.add(m),this.brakeLights.push(m);let h=new W({color:14540253,emissive:0}),g=new H(new U(.18,.12,.08),h);g.position.set(-.35,.68,2.12),this.chassisGroup.add(g),this.reverseLights.push(g);let _=new H(new U(.18,.12,.08),h.clone());_.position.set(.35,.68,2.12),this.chassisGroup.add(_),this.reverseLights.push(_);let v=new W({color:16750848,emissive:0}),y=new U(.12,.12,.06),b=new H(y,v);b.position.set(-.9,.65,-2.05),this.chassisGroup.add(b),this.leftIndicators.push(b);let x=new H(y,v.clone());x.position.set(-.9,.68,2.05),this.chassisGroup.add(x),this.leftIndicators.push(x);let S=new H(y,v.clone());S.position.set(.9,.65,-2.05),this.chassisGroup.add(S),this.rightIndicators.push(S);let C=new H(y,v.clone());C.position.set(.9,.68,2.05),this.chassisGroup.add(C),this.rightIndicators.push(C),this.wheelFL=this.createWheel(),this.wheelFR=this.createWheel(),this.wheelRL=this.createWheel(),this.wheelRR=this.createWheel(),this.wheelFL.position.set(-.85,.32,-1.3),this.wheelFR.position.set(.85,.32,-1.3),this.wheelRL.position.set(-.85,.32,1.3),this.wheelRR.position.set(.85,.32,1.3),this.group.add(this.wheelFL),this.group.add(this.wheelFR),this.group.add(this.wheelRL),this.group.add(this.wheelRR)}createWheel(){let e=new kn,t=new W({color:1710618,roughness:.9}),n=new Bi(.32,.32,.22,16);n.rotateZ(Math.PI/2);let r=new H(n,t);r.castShadow=!0,e.add(r);let i=new W({color:13421772,metalness:.85,roughness:.2}),a=new Bi(.2,.2,.23,12);a.rotateZ(Math.PI/2);let o=new H(a,i);e.add(o);let s=new Bi(.06,.06,.24,8);s.rotateZ(Math.PI/2);let c=new H(s,new Gr({color:15022389}));return e.add(c),e}buildCockpit(){let e=new W({color:2171169,roughness:.85}),t=new H(new U(1.62,.42,.85),e);t.position.set(0,.86,-.45),this.cabinGroup.add(t);let n=new W({color:1118481,metalness:.3}),r=new H(new U(.18,.08,.02),n);r.position.set(-.35,.95,-.02),this.cabinGroup.add(r);let i=new H(new U(.18,.08,.02),n);i.position.set(.35,.95,-.02),this.cabinGroup.add(i);let a=new H(new U(.06,.06,.02),new Gr({color:16717636}));a.position.set(0,.95,-.02),this.cabinGroup.add(a);let o=new H(new U(.55,.22,.02),new Gr({color:328965}));o.position.set(-.38,.98,-.03),o.rotation.x=-.22,this.cabinGroup.add(o);let s=new Gr({color:1383202}),c=new H(new zi(.085,24),s);c.position.set(-.46,.98,-.015),c.rotation.x=-.22,this.cabinGroup.add(c);let l=new H(new zi(.085,24),s);l.position.set(-.3,.98,-.015),l.rotation.x=-.22,this.cabinGroup.add(l);let u=new Gr({color:16722474}),d=new U(.008,.07,.005);d.translate(0,.035,0),this.speedNeedle=new H(d,u),this.speedNeedle.position.set(-.46,.98,-.01),this.speedNeedle.rotation.x=-.22,this.cabinGroup.add(this.speedNeedle);let f=new U(.008,.07,.005);f.translate(0,.035,0),this.rpmNeedle=new H(f,u),this.rpmNeedle.position.set(-.3,.98,-.01),this.rpmNeedle.rotation.x=-.22,this.cabinGroup.add(this.rpmNeedle);let p=new kn;p.position.set(-.38,.92,.12),p.rotation.x=-.38;let m=new W({color:2039583,roughness:.65,metalness:.2}),h=new H(new ho(.22,.024,14,32),m);p.add(h);let g=new Bi(.065,.065,.035,20);g.rotateX(Math.PI/2);let _=new H(g,new W({color:1118481}));p.add(_);let v=new H(new zi(.045,16),new Gr({color:16766720}));v.position.z=.02,p.add(v);let y=new W({color:3355443,metalness:.6}),b=new H(new U(.4,.035,.018),y);p.add(b);let x=new H(new U(.035,.2,.018),y);x.position.y=-.1,p.add(x),this.steeringWheelMesh=p,this.cabinGroup.add(p);let S=new H(new U(.36,.11,.04),new W({color:1710618}));S.position.set(0,1.34,-.18),S.rotation.x=.08,this.cabinGroup.add(S);let C=new H(new lo(.34,.095),this.mirrorMaterial);C.position.set(0,1.34,-.158),C.rotation.x=.08,this.cabinGroup.add(C);let w=new H(new U(.18,.1,.08),e);w.position.set(-1.02,.95,-.6),this.chassisGroup.add(w);let T=new H(new U(.18,.1,.08),e);T.position.set(1.02,.95,-.6),this.chassisGroup.add(T);let E=new W({color:1973790}),D=new H(new U(.07,.9,.08),E);D.position.set(-.84,1.18,-.42),D.rotation.x=-.58,D.rotation.z=-.22,this.cabinGroup.add(D);let O=new H(new U(.07,.9,.08),E);O.position.set(.84,1.18,-.42),O.rotation.x=-.58,O.rotation.z=.22,this.cabinGroup.add(O)}buildCenterConsoleAndShifter(){let e=new kn,t=new W({color:1842722,roughness:.75,metalness:.15}),n=new H(new U(.26,.32,.82),t);n.position.set(-.05,.54,.16),e.add(n);let r=new W({color:13686237,metalness:.85,roughness:.2}),i=new H(new U(.015,.02,.8),r);i.position.set(-.175,.7,.16),e.add(i);let a=new H(new U(.015,.02,.8),r);a.position.set(.075,.7,.16),e.add(a);let o=new W({color:987413,metalness:.5,roughness:.4}),s=new H(new U(.15,.02,.28),o);s.position.set(-.05,.71,.14),e.add(s);let c=new H(new U(.16,.008,.29),r);c.position.set(-.05,.718,.14),e.add(c);let l=new H(new U(.026,.015,.22),new Gr({color:329482}));l.position.set(-.05,.722,.14),e.add(l),[`P`,`R`,`N`,`D`].forEach(t=>{let n=this.createGearBadgeTexture(t,!0),r=this.createGearBadgeTexture(t,!1);this.gearBadgeTextures[t]={active:n,inactive:r};let i=new W({map:t===`P`?n:r,roughness:.3,emissive:t===`P`?new In(62463):new In(1118481),emissiveIntensity:t===`P`?.9:.15}),a=new H(new lo(.034,.034),i);a.position.set(-.095,.725,MS[t].z),a.rotation.x=-Math.PI/2,e.add(a),this.gearBadges[t]=a}),this.shifterGroup=new kn,this.shifterGroup.position.set(-.05,.71,MS.P.z),this.shifterGroup.rotation.x=MS.P.tilt;let u=new H(new Vi(.036,.035,8),new W({color:1382170,roughness:.9}));u.position.y=.018,this.shifterGroup.add(u);let d=new H(new Bi(.009,.009,.11,12),new W({color:15658734,metalness:.95,roughness:.1}));d.position.y=.065,this.shifterGroup.add(d);let f=new kn;f.position.set(0,.115,0);let p=new H(new U(.036,.052,.046),new W({color:1579549,roughness:.55,metalness:.2}));f.add(p);let m=new Bi(.008,.008,.008,12);m.rotateZ(Math.PI/2);let h=new H(m,r);h.position.set(-.02,.005,0),f.add(h);let g=new H(new U(.038,.006,.016),new Gr({color:15022389}));g.position.set(0,.027,0),f.add(g),this.shifterKnobMesh=f,this.shifterGroup.add(f),e.add(this.shifterGroup),this.cabinGroup.add(e)}createGearBadgeTexture(e,t){let n=document.createElement(`canvas`);n.width=64,n.height=64;let r=n.getContext(`2d`);r.fillStyle=t?`#00e5ff`:`#141820`,r.beginPath(),r.roundRect?r.roundRect(4,4,56,56,12):r.rect(4,4,56,56),r.fill(),r.strokeStyle=t?`#ffffff`:`#2a3342`,r.lineWidth=4,r.stroke(),r.fillStyle=t?`#000000`:`#cbd5e1`,r.font=`bold 36px "Segoe UI", sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(e,32,34);let i=new Fi(n);return i.needsUpdate=!0,i}buildDriverHandsAndArms(){let e=this.createHandMesh(!1);e.position.set(-.22,0,0),e.rotation.set(.15,-.25,.45),this.steeringWheelMesh.add(e),this.leftHandMesh=e,this.leftForearm=this.createForearmMesh(!1),this.cabinGroup.add(this.leftForearm),this.rightHandGroup=new kn;let t=this.createHandMesh(!0);this.rightHandGroup.add(t),this.cabinGroup.add(this.rightHandGroup),this.rightForearm=this.createForearmMesh(!0),this.cabinGroup.add(this.rightForearm),this.updateRightHandOnWheel(0)}createHandMesh(e){let t=new kn,n=new W({color:2040360,roughness:.65,metalness:.15}),r=new W({color:15022389,roughness:.45,metalness:.2}),i=new W({color:1118999,roughness:.35,metalness:.4}),a=new W({color:3290946,roughness:.8}),o=new H(new U(.062,.034,.072),n);o.castShadow=!0,t.add(o);let s=new H(new U(.058,.012,.034),i);s.position.set(0,.018,.005),t.add(s);let c=new H(new U(.064,.006,.012),r);c.position.set(0,.019,-.018),t.add(c),[-.022,-.007,.007,.022].forEach((e,r)=>{let i=new kn;i.position.set(e,.004,-.036);let o=new Bi(.0065,.0065,.026,8);o.rotateX(Math.PI/4);let s=new H(o,n);s.position.set(0,-.008,-.01),i.add(s);let c=new Bi(.0055,.0055,.022,8);c.rotateX(Math.PI/1.8);let l=new H(c,a);l.position.set(0,-.022,-.016),i.add(l),t.add(i)});let l=new kn,u=e?-.034:.034;l.position.set(u,-.004,-.008),l.rotation.set(.3,e?.6:-.6,e?-.5:.5);let d=new Bi(.007,.007,.032,8);d.rotateX(Math.PI/3);let f=new H(d,n);l.add(f),t.add(l);let p=new Bi(.034,.036,.022,12);p.rotateX(Math.PI/2);let m=new H(p,new W({color:1447964,roughness:.7}));m.position.set(0,0,.042),t.add(m);let h=new H(new ho(.035,.003,8,16),r);return h.position.set(0,0,.052),t.add(h),t}createForearmMesh(e){let t=new kn,n=new W({color:1316378,roughness:.85}),r=new W({color:15022389,roughness:.4}),i=new Bi(.031,.038,.24,12);i.rotateX(Math.PI/2);let a=new H(i,n);t.add(a);let o=new H(new U(.008,.008,.23),r);return o.position.set(e?.034:-.034,.015,0),t.add(o),t}triggerHandShift(e){[`P`,`R`,`N`,`D`].includes(e)&&(this.currentDisplayGear!==e||this.isShifting)&&(this.shiftTargetGear=e,this.shiftFromGear=this.currentDisplayGear,this.isShifting=!0,this.shiftProgress=0,this.rightHandGroup&&(this.shiftStartPos.copy(this.rightHandGroup.position),this.shiftStartQuat.copy(this.rightHandGroup.quaternion)))}getWheelGripPose(){let e=new V(.22,0,0);e.applyQuaternion(this.steeringWheelMesh.quaternion),e.add(this.steeringWheelMesh.position);let t=new At().copy(this.steeringWheelMesh.quaternion),n=new At().setFromEuler(new dn(-.15,.25,-.45));return t.multiply(n),{position:e,quaternion:t}}getKnobGripPose(e){return{position:new V(-.05,.825,MS[e]?MS[e].z:MS.P.z),quaternion:new At().setFromEuler(new dn(.42,-.22,-.25,`YXZ`))}}smoothstep(e){let t=Math.max(0,Math.min(1,e));return t*t*(3-2*t)}updateRightHand(e){if(!this.rightHandGroup||!this.steeringWheelMesh)return;let t=this.getWheelGripPose();if(!this.isShifting){this.rightHandGroup.position.copy(t.position),this.rightHandGroup.quaternion.copy(t.quaternion);let n=MS[this.currentDisplayGear].z,r=MS[this.currentDisplayGear].tilt;this.currentShifterZ=kt.damp(this.currentShifterZ,n,16,e),this.currentShifterTilt=kt.damp(this.currentShifterTilt,r,16,e),this.shifterGroup&&(this.shifterGroup.position.z=this.currentShifterZ,this.shifterGroup.rotation.x=this.currentShifterTilt);return}this.shiftProgress+=e/this.shiftDuration;let n=Math.min(1,this.shiftProgress),r=this.getKnobGripPose(this.shiftFromGear),i=this.getKnobGripPose(this.shiftTargetGear);if(n<.32){let e=this.smoothstep(n/.32);this.rightHandGroup.position.lerpVectors(this.shiftStartPos,r.position,e),this.rightHandGroup.position.y+=Math.sin(e*Math.PI)*.085,this.rightHandGroup.quaternion.slerpQuaternions(this.shiftStartQuat,r.quaternion,e)}else if(n<.68){let e=this.smoothstep((n-.32)/.36);this.rightHandGroup.position.lerpVectors(r.position,i.position,e),this.rightHandGroup.quaternion.slerpQuaternions(r.quaternion,i.quaternion,e),this.currentShifterZ=kt.lerp(MS[this.shiftFromGear].z,MS[this.shiftTargetGear].z,e),this.currentShifterTilt=kt.lerp(MS[this.shiftFromGear].tilt,MS[this.shiftTargetGear].tilt,e),this.shifterGroup&&(this.shifterGroup.position.z=this.currentShifterZ,this.shifterGroup.rotation.x=this.currentShifterTilt),e>=.5&&this.currentDisplayGear!==this.shiftTargetGear&&(this.currentDisplayGear=this.shiftTargetGear,this.updateGearBadges(this.shiftTargetGear))}else if(n<.78)this.rightHandGroup.position.copy(i.position),this.rightHandGroup.quaternion.copy(i.quaternion),this.currentShifterZ=MS[this.shiftTargetGear].z,this.currentShifterTilt=MS[this.shiftTargetGear].tilt,this.shifterGroup&&(this.shifterGroup.position.z=this.currentShifterZ,this.shifterGroup.rotation.x=this.currentShifterTilt);else{let e=this.smoothstep((n-.78)/.22);this.rightHandGroup.position.lerpVectors(i.position,t.position,e),this.rightHandGroup.position.y+=Math.sin(e*Math.PI)*.075,this.rightHandGroup.quaternion.slerpQuaternions(i.quaternion,t.quaternion,e),n>=1&&(this.isShifting=!1,this.currentDisplayGear=this.shiftTargetGear,this.updateGearBadges(this.shiftTargetGear))}}updateRightHandOnWheel(e){if(!this.rightHandGroup||!this.steeringWheelMesh)return;let t=this.getWheelGripPose();this.rightHandGroup.position.copy(t.position),this.rightHandGroup.quaternion.copy(t.quaternion)}updateForearm(e,t,n,r){if(!e)return;let i=new V().subVectors(n,t).length(),a=new V().addVectors(t,n).multiplyScalar(.5);a.x+=r?.038:-.038,a.y-=.028,e.position.copy(a),e.lookAt(n),e.scale.set(1,1,Math.max(.65,i/.24))}updateGearBadges(e){[`P`,`R`,`N`,`D`].forEach(t=>{let n=this.gearBadges[t],r=this.gearBadgeTextures[t];if(n&&r){let i=t===e;n.material.map=i?r.active:r.inactive,n.material.emissive.setHex(i?62463:1118481),n.material.emissiveIntensity=i?.95:.15,n.material.needsUpdate=!0}})}setupCameras(){this.cockpitCamera=new cs(65,window.innerWidth/window.innerHeight,.1,300),this.cockpitCamera.position.set(-.38,1.25,.32),this.chassisGroup.add(this.cockpitCamera),this.thirdPersonCamera=new cs(60,window.innerWidth/window.innerHeight,.2,500),this.thirdPersonCamera.position.set(0,2.8,6.8),this.scene.add(this.thirdPersonCamera)}toggleCameraMode(){return this.activeCameraMode=this.activeCameraMode===`cockpit`?`chase`:`cockpit`,this.activeCameraMode}getActiveCamera(){return this.activeCameraMode===`cockpit`?this.cockpitCamera:this.thirdPersonCamera}update(e,t,n){this.group.position.set(e.x,e.y,e.z),this.group.rotation.y=e.heading,e.gear&&e.gear!==this.currentDisplayGear&&!this.isShifting&&this.triggerHandShift(e.gear),this.chassisGroup.rotation.x=e.pitch,this.chassisGroup.rotation.z=e.roll,this.chassisGroup.position.y=e.vibrationOffset;let r=2*Math.PI*.32,i=e.speed*n/r*2*Math.PI;if(this.wheelFL.rotation.y=e.steerAngle,this.wheelFR.rotation.y=e.steerAngle,this.wheelFL.children[0].rotation.x+=i,this.wheelFR.children[0].rotation.x+=i,this.wheelRL.children[0].rotation.x+=i,this.wheelRR.children[0].rotation.x+=i,this.steeringWheelMesh&&(this.steeringWheelMesh.rotation.z=-t*7.85),this.steeringWheelMesh&&this.leftForearm){let e=new V(-.22,0,0);e.applyQuaternion(this.steeringWheelMesh.quaternion),e.add(this.steeringWheelMesh.position),this.updateForearm(this.leftForearm,this.leftShoulderPos,e,!1)}if(this.updateRightHand(n),this.rightHandGroup&&this.rightForearm&&this.updateForearm(this.rightForearm,this.rightShoulderPos,this.rightHandGroup.position,!0),this.speedNeedle){let t=Math.min(1,Math.max(0,Math.abs(e.speedKmh)/100));this.speedNeedle.rotation.z=2-t*4}if(this.activeCameraMode===`cockpit`&&this.cockpitCamera){let t=65+Math.min(1,Math.abs(e.speedKmh)/85)*8;this.cockpitCamera.fov=kt.lerp(this.cockpitCamera.fov,t,Math.min(1,n*5)),this.cockpitCamera.updateProjectionMatrix()}if(this.rpmNeedle){let t=Math.min(1,Math.max(0,e.rpm/8e3));this.rpmNeedle.rotation.z=2-t*4}this.brakeLights.forEach(t=>{t.material.emissiveIntensity=Math.abs(e.speedKmh)>.1&&e.speed<0||e.gear===`P`?1:.25,t.material.emissive.setHex(16711680)});let a=e.gear===`R`;this.reverseLights.forEach(e=>{e.material.emissive.setHex(a?16777215:0)});let o=Math.floor(performance.now()/360)%2==0,s=e.turnSignal===`left`||e.turnSignal===`hazard`,c=e.turnSignal===`right`||e.turnSignal===`hazard`;if(this.leftIndicators.forEach(e=>{e.material.emissive.setHex(s&&o?16750848:0)}),this.rightIndicators.forEach(e=>{e.material.emissive.setHex(c&&o?16750848:0)}),this.activeCameraMode===`chase`&&this.thirdPersonCamera){let t=6.8,r=e.x+Math.sin(e.heading)*t,i=e.z+Math.cos(e.heading)*t,a=new V(r,e.y+2.8,i);this.thirdPersonCamera.position.lerp(a,Math.min(1,n*8)),this.thirdPersonCamera.lookAt(e.x,e.y+1.2,e.z)}}renderMirror(e){if(this.activeCameraMode!==`cockpit`||!this.rearCamera||!this.mirrorRenderTarget||!this.renderer||(this.mirrorFrameCounter=(this.mirrorFrameCounter||0)+1,this.mirrorFrameCounter%2!=0))return;let t=this.renderer.getRenderTarget();this.chassisGroup.visible=!1,this.renderer.setRenderTarget(this.mirrorRenderTarget),this.renderer.render(e,this.rearCamera),this.renderer.setRenderTarget(t),this.chassisGroup.visible=!0}},PS=class{constructor(){this.ctx=null,this.masterGain=null,this.isMuted=!1,this.initialized=!1,this.engineRunning=!1,this.engineOsc1=null,this.engineOsc2=null,this.engineFilter=null,this.engineGain=null,this.screechNoise=null,this.screechFilter=null,this.screechGain=null,this.hornOsc1=null,this.hornOsc2=null,this.hornGain=null}init(){if(!this.initialized)try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(.7,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupEngineSound(),this.setupScreechSound(),this.initialized=!0}catch(e){console.warn(`Web Audio init notice:`,e)}}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume(),this.initialized||this.init()}toggleMute(){return this.isMuted=!this.isMuted,this.masterGain&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.7,this.ctx.currentTime),this.isMuted}setupEngineSound(){this.ctx&&(this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type=`sawtooth`,this.engineOsc1.frequency.setValueAtTime(45,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type=`triangle`,this.engineOsc2.frequency.setValueAtTime(22.5,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type=`lowpass`,this.engineFilter.frequency.setValueAtTime(240,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(2.8,this.ctx.currentTime),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.18,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineRunning=!0)}setupScreechSound(){if(!this.ctx)return;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=Math.random()*2-1;this.screechNoise=this.ctx.createBufferSource(),this.screechNoise.buffer=t,this.screechNoise.loop=!0,this.screechFilter=this.ctx.createBiquadFilter(),this.screechFilter.type=`bandpass`,this.screechFilter.frequency.setValueAtTime(1150,this.ctx.currentTime),this.screechFilter.Q.setValueAtTime(4.2,this.ctx.currentTime),this.screechGain=this.ctx.createGain(),this.screechGain.gain.setValueAtTime(0,this.ctx.currentTime),this.screechNoise.connect(this.screechFilter),this.screechFilter.connect(this.screechGain),this.screechGain.connect(this.masterGain),this.screechNoise.start()}updateEngine(e,t,n=`D`){if(!this.initialized||!this.engineRunning||this.isMuted)return;let r=this.ctx.currentTime,i=Math.max(800,Math.min(8e3,e)),a=28+i/8e3*165;this.engineOsc1.frequency.setTargetAtTime(a,r,.04),this.engineOsc2.frequency.setTargetAtTime(a*.5,r,.04);let o=220+i/8e3*850+t*900;this.engineFilter.frequency.setTargetAtTime(o,r,.035);let s=.12+i/8e3*.16+t*.08;(n===`N`||n===`P`)&&(s*=.75),this.engineGain.gain.setTargetAtTime(s,r,.04)}updateTireScreech(e){if(!this.initialized||!this.screechGain||this.isMuted)return;let t=this.ctx.currentTime,n=Math.max(0,Math.min(1,e)),r=n>.15?(n-.15)*.45:0;if(this.screechGain.gain.setTargetAtTime(r,t,.035),this.screechFilter){let e=1e3+n*450;this.screechFilter.frequency.setTargetAtTime(e,t,.04)}}playCrash(){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime,t=.45,n=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),r=n.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=(Math.random()*2-1)*Math.exp(-e/(this.ctx.sampleRate*.1));let i=this.ctx.createBufferSource();i.buffer=n;let a=this.ctx.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(2200,e),a.frequency.exponentialRampToValueAtTime(150,e+t);let o=this.ctx.createGain();o.gain.setValueAtTime(.85,e),o.gain.exponentialRampToValueAtTime(.01,e+t),i.connect(a),a.connect(o),o.connect(this.masterGain),i.start(e);let s=this.ctx.createOscillator();s.type=`sine`,s.frequency.setValueAtTime(130,e),s.frequency.exponentialRampToValueAtTime(30,e+.35);let c=this.ctx.createGain();c.gain.setValueAtTime(.7,e),c.gain.exponentialRampToValueAtTime(.01,e+.35),s.connect(c),c.connect(this.masterGain),s.start(e),s.stop(e+.4)}playGearShift(){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type=`triangle`,t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(180,e+.05);let n=this.ctx.createGain();n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.01,e+.06),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.07)}playTurnSignal(e=!0){if(!this.initialized||this.isMuted)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type=`sine`,n.frequency.setValueAtTime(e?1850:1350,t),n.frequency.exponentialRampToValueAtTime(800,t+.025);let r=this.ctx.createGain();r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.005,t+.03),n.connect(r),r.connect(this.masterGain),n.start(t),n.stop(t+.035)}playHorn(e=!0){if(this.initialized&&!this.isMuted){if(e){if(this.hornOsc1)return;let e=this.ctx.currentTime;this.hornOsc1=this.ctx.createOscillator(),this.hornOsc1.type=`sawtooth`,this.hornOsc1.frequency.setValueAtTime(349.23,e),this.hornOsc2=this.ctx.createOscillator(),this.hornOsc2.type=`sawtooth`,this.hornOsc2.frequency.setValueAtTime(440,e);let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.setValueAtTime(1400,e),this.hornGain=this.ctx.createGain(),this.hornGain.gain.setValueAtTime(.25,e),this.hornOsc1.connect(t),this.hornOsc2.connect(t),t.connect(this.hornGain),this.hornGain.connect(this.masterGain),this.hornOsc1.start(e),this.hornOsc2.start(e)}else if(this.hornOsc1){let e=this.ctx.currentTime;this.hornGain.gain.setTargetAtTime(0,e,.03),setTimeout(()=>{try{this.hornOsc1&&(this.hornOsc1.stop(),this.hornOsc2.stop(),this.hornOsc1.disconnect(),this.hornOsc2.disconnect(),this.hornOsc1=null,this.hornOsc2=null)}catch{}},50)}}}playVictory(){if(!this.initialized||this.isMuted)return;let e=[261.63,329.63,392,523.25,659.25,783.99],t=this.ctx.currentTime;e.forEach((n,r)=>{let i=t+r*.09,a=this.ctx.createOscillator();a.type=`triangle`,a.frequency.setValueAtTime(n,i);let o=this.ctx.createGain();o.gain.setValueAtTime(0,i),o.gain.linearRampToValueAtTime(.28,i+.02),o.gain.exponentialRampToValueAtTime(.005,i+(r===e.length-1?.7:.22)),a.connect(o),o.connect(this.masterGain),a.start(i),a.stop(i+(r===e.length-1?.75:.25))})}playFail(){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator();t.type=`sawtooth`,n.type=`sawtooth`,t.frequency.setValueAtTime(146.83,e),n.frequency.setValueAtTime(155.56,e),t.frequency.linearRampToValueAtTime(98,e+.55),n.frequency.linearRampToValueAtTime(103.8,e+.55);let r=this.ctx.createBiquadFilter();r.type=`lowpass`,r.frequency.setValueAtTime(800,e);let i=this.ctx.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.6),t.connect(r),n.connect(r),r.connect(i),i.connect(this.masterGain),t.start(e),n.start(e),t.stop(e+.65),n.stop(e+.65)}playStar(e=0){if(!this.initialized||this.isMuted)return;let t=this.ctx.currentTime,n=[523.25,659.25,783.99],r=n[Math.min(e,n.length-1)],i=this.ctx.createOscillator();i.type=`triangle`,i.frequency.setValueAtTime(r,t),i.frequency.exponentialRampToValueAtTime(r*1.5,t+.25);let a=this.ctx.createGain();a.gain.setValueAtTime(.01,t),a.gain.linearRampToValueAtTime(.35,t+.03),a.gain.exponentialRampToValueAtTime(.001,t+.4),i.connect(a),a.connect(this.masterGain),i.start(t),i.stop(t+.42)}playCheckpoint(){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime;[440,554.37,659.25,880].forEach((t,n)=>{let r=e+n*.06,i=this.ctx.createOscillator();i.type=`sine`,i.frequency.setValueAtTime(t,r);let a=this.ctx.createGain();a.gain.setValueAtTime(.01,r),a.gain.linearRampToValueAtTime(.25,r+.02),a.gain.exponentialRampToValueAtTime(.001,r+.22),i.connect(a),a.connect(this.masterGain),i.start(r),i.stop(r+.25)})}playAlert(){if(!this.initialized||this.isMuted)return;let e=this.ctx.currentTime;[0,.12].forEach(t=>{let n=this.ctx.createOscillator();n.type=`square`,n.frequency.setValueAtTime(740,e+t);let r=this.ctx.createBiquadFilter();r.type=`lowpass`,r.frequency.setValueAtTime(1600,e+t);let i=this.ctx.createGain();i.gain.setValueAtTime(.12,e+t),i.gain.exponentialRampToValueAtTime(.001,e+t+.08),n.connect(r),r.connect(i),i.connect(this.masterGain),n.start(e+t),n.stop(e+t+.09)})}},FS=class{constructor(){this.currentLevel=1,this.levelState=`menu`,this.failReason=``,this.failTip=``,this.elapsedTime=0,this.timeLimit=45,this.progressPercent=0,this.progressText=``,this.warningBanner=null,this.warningTimer=0,this.briefingTimer=0,this.liveScore=0,this.smoothPoints=0,this.cleanDrive=!0,this.infractionsCount=0,this.techniquePoints=0,this.parkHoldTimer=0,this.mission2Phase=0,this.mission5Phase=0,this.coins=500,this.unlockedLevels=1,this.levelStats={},this.loadProgress(),this.missions=[{id:1,title:`The Basics (Straight Sprint)`,subtitle:`500M SPRINT & LANE STABILITY`,difficulty:`BEGINNER`,difficultyColor:`#00ff88`,description:`Sprint 500m along the wide boulevard. Reach the 500m checkpoint marker within 45s while keeping the vehicle stable at 80-90 km/h.`,tip:`Shift into D (Key 4 or tap D), accelerate to 80-90 km/h, and keep your steering steady in the marked lane.`,reward:350,timeLimit:45,distance:500,startX:-5,startZ:20,startHeading:0,targetZ:-480},{id:2,title:`City Navigation (Turns & Handling)`,subtitle:`300M RUN • 90° LEFT TURN • U-TURN`,difficulty:`MODERATE`,difficultyColor:`#00e5ff`,description:`Drive 300m straight, make a 90° Left Turn at the signalized intersection, navigate 250m, complete the U-turn without reversing, and sprint to the finish.`,tip:`Brake before the intersection mouth, execute a clean 90° left turn, and steer smoothly around the U-turn divider.`,reward:550,timeLimit:70,distance:750,startX:-5,startZ:20,startHeading:0,targetZ:-730},{id:3,title:`Precision Arrival (Drive & Park)`,subtitle:`1KM CRUISE • PRECISION BAY PARKING`,difficulty:`INTERMEDIATE`,difficultyColor:`#ffaa00`,description:`Drive the 1km course following navigation waypoints. Pull into the designated parking bay, center vehicle within ±5°, shift into P, and engage handbrake for 2 seconds.`,tip:`Follow waypoints to the parking bay. Align straight between lines, come to a dead stop, shift to P and hold handbrake (Space) for 2s.`,reward:800,timeLimit:85,distance:1e3,startX:-5,startZ:20,startHeading:0,targetZ:-980},{id:4,title:`Rush Hour (High-Density Traffic)`,subtitle:`1KM HIGHWAY WEAVE • ZERO CRASHES`,difficulty:`ADVANCED`,difficultyColor:`#c084fc`,description:`Navigate 1km of heavy arterial traffic with variable speeds, sudden braking, and lane-cutters. Cross the 1km finish line with safe following distances and zero red lights.`,tip:`Watch brake lights ahead! Maintain safe stopping distance, overtake on open lanes, and obey red traffic signals.`,reward:1100,timeLimit:90,distance:1e3,startX:-5,startZ:20,startHeading:0,targetZ:-980},{id:5,title:`The Ultimate Test (Complex Route)`,subtitle:`HEAVY TRAFFIC • BLIND TURNS • PRECISION PARK`,difficulty:`EXPERT`,difficultyColor:`#ff3366`,description:`The master exam: heavy traffic sprint -> 90° Left Turn -> immediate blind Right Turn -> 150m straight -> sharp Right into alley -> tight U-turn loop -> precision park in crowded garage bay (P + 2s handbrake).`,tip:`Follow turn prompts in exact sequence without missing waypoints. Park centered within ±5° in P with handbrake for 2s.`,reward:1600,timeLimit:110,distance:1150,startX:-5,startZ:20,startHeading:0,targetZ:-980}]}resetToFirstLevel(){this.currentLevel=1,this.unlockedLevels=1,this.levelStats={};try{localStorage.removeItem(`dr_driving_unlocked`),localStorage.removeItem(`dr_driving_v2_stats`),sessionStorage.removeItem(`dr_driving_unlocked`),sessionStorage.removeItem(`dr_driving_v2_stats`)}catch(e){console.warn(`Could not reset level progress:`,e)}}loadProgress(){try{let e=localStorage.getItem(`dr_driving_coins`);e!==null&&(this.coins=parseInt(e,10)),this.resetToFirstLevel()}catch(e){console.warn(`Could not load progress:`,e)}}saveProgress(){try{localStorage.setItem(`dr_driving_coins`,this.coins.toString()),sessionStorage.setItem(`dr_driving_unlocked`,this.unlockedLevels.toString()),sessionStorage.setItem(`dr_driving_v2_stats`,JSON.stringify(this.levelStats))}catch(e){console.warn(`Could not save progress:`,e)}}getLevelStats(e){return this.levelStats[e]||{stars:0,highScore:0,completions:0}}startMission(e,t){this.currentLevel=Math.max(1,Math.min(this.missions.length,e)),this.levelState=`briefing`,this.briefingTimer=3.5,this.failReason=``,this.failTip=``;let n=this.getCurrentMission();t.reset(n.startX,n.startZ,n.startHeading),this.elapsedTime=0,this.timeLimit=n.timeLimit||45,this.progressPercent=0,this.progressText=`Starting...`,this.warningBanner=null,this.warningTimer=0,this.liveScore=0,this.smoothPoints=0,this.cleanDrive=!0,this.infractionsCount=0,this.techniquePoints=0,this.parkHoldTimer=0,this.mission2Phase=0,this.mission5Phase=0,t.fuel=100}update(e,t,n){if(this.levelState===`briefing`&&(this.briefingTimer-=e,(this.briefingTimer<=0||Math.abs(t.speed)>.5)&&(this.levelState=`playing`)),this.levelState===`playing`){if(this.elapsedTime+=e,Math.max(0,this.timeLimit-this.elapsedTime)<=0)this.failMission(`TIME EXPIRED! The clock ran out before completing the objective.`,`Coach Tip: Maintain a swift cruising speed between 80-90 km/h and minimize unnecessary stops.`);else{if(Math.abs(t.speedKmh)>15){let n=1-Math.min(1,Math.abs(t.steerAngle)*1.5);this.smoothPoints+=e*15*n}if(this.warningBanner=null,this.currentLevel===1){let n=this.missions[0].startZ,r=this.missions[0].targetZ,i=Math.max(0,Math.min(500,n-t.z));this.progressPercent=Math.min(100,Math.round(i/500*100)),this.progressText=`${Math.round(i)}m / 500m (${this.progressPercent}%)`;let a=Math.abs(t.speedKmh);if(a>=75&&a<=90&&(this.techniquePoints+=e*25),this.liveScore=Math.round(i*4+this.smoothPoints+this.techniquePoints),t.z<=r){this.completeMission();return}t.gear===`P`||t.gear===`N`?this.warningBanner=`💡 SHIFT TO "D" (Key 4 or tap D) TO ACCELERATE`:a<10&&this.elapsedTime>2.5?this.warningBanner=`💡 ACCELERATE FORWARD! REACH 80-90 KM/H`:a>=78&&a<=90&&(this.warningBanner=`⚡ OPTIMAL SPEED: 80-90 KM/H! HOLD LANE STEADY`)}else if(this.currentLevel===2){let e=Math.max(0,Math.min(750,20-t.z));if(this.progressPercent=Math.min(100,Math.round(e/750*100)),this.mission2Phase===0){let e=Math.max(0,Math.round(t.z- -280));this.progressText=`APPROACHING TURN: ${e}m`,e<60&&(this.warningBanner=`⬅️ PREPARE TO BRAKE: 90° LEFT TURN IN 50M!`),t.z<=-270&&(this.mission2Phase=1,this.techniquePoints+=150)}else if(this.mission2Phase===1)this.warningBanner=`⬅️ TURN LEFT SMOOTHLY INTO CROSSROAD AVENUE`,this.progressText=`EXECUTING 90° LEFT TURN`,(t.x<=-16||Math.abs(t.heading)>1.1)&&(this.mission2Phase=2,this.techniquePoints+=250);else if(this.mission2Phase===2)this.warningBanner=`⬆️ 250M STRAIGHT STRETCH: ACCELERATE TOWARDS U-TURN`,this.progressText=`NAVIGATING 250M STRETCH`,t.z<=-700&&(this.mission2Phase=3,this.techniquePoints+=200);else if(this.mission2Phase===3)this.warningBanner=`🔄 ENTER U-TURN POCKET: EXECUTE 180° TURN WITHOUT REVERSING`,this.progressText=`EXECUTING U-TURN`,t.z<=-720&&(this.mission2Phase=4,this.techniquePoints+=300);else if(this.warningBanner=`🏁 FINAL SPRINT! ACCELERATE TO THE 750M FINISH LINE`,this.progressText=`SPRINTING TO 750M FINISH`,t.z<=-730){this.completeMission();return}this.liveScore=Math.round(e*3+this.smoothPoints+this.techniquePoints)}else if(this.currentLevel===3){let r=n.terminalParkingBay||n.parkingBay,i=1e3,a=Math.max(0,Math.min(i,20-t.z)),o=r?Math.hypot(t.x-r.centerX,t.z-r.centerZ):999;if(this.liveScore=Math.round(a*3+this.smoothPoints+this.techniquePoints),o>35)this.progressPercent=Math.min(85,Math.round(a/i*85)),this.progressText=`WAYPOINT: ${Math.round(o)}m TO PARKING BAY`;else{let n=Math.abs(t.x-r.centerX),i=Math.abs(t.z-r.centerZ),a=n<r.width*.6&&i<r.length*.55,s=Math.abs(t.heading-r.targetHeading)%(Math.PI*2);s>Math.PI&&(s=Math.PI*2-s);let c=(s*180/Math.PI).toFixed(1),l=s<=7*Math.PI/180,u=Math.abs(t.speed)<.1,d=t.gear===`P`,f=t.isEBrakeActive||d;if(a){if(!l)this.parkHoldTimer=0,this.warningBanner=`🅿️ STRAIGHTEN CAR! CURRENT ANGLE: ${c}° (NEED ±5°)`,this.progressText=`ALIGNMENT: ${c}° / ±5°`;else if(!u)this.parkHoldTimer=0,this.warningBanner=`🅿️ ALIGNED! COME TO A COMPLETE STOP`,this.progressText=`STOP VEHICLE`;else if(!d)this.parkHoldTimer=0,this.warningBanner=`✅ STOPPED! SHIFT INTO "P" (Key 1 or tap P)`,this.progressText=`SHIFT TO P`;else if(!f)this.parkHoldTimer=0,this.warningBanner=`🅿️ ENGAGE HANDBRAKE (Spacebar)`,this.progressText=`ENGAGE HANDBRAKE`;else{this.parkHoldTimer+=e;let t=Math.min(2,this.parkHoldTimer);if(this.warningBanner=`🅿️ HOLDING IN P & HANDBRAKE: ${t.toFixed(1)}s / 2.0s`,this.progressText=`LATCHING: ${(t/2*100).toFixed(0)}%`,this.progressPercent=90+Math.round(t/2*10),this.parkHoldTimer>=2){this.techniquePoints+=500,this.completeMission();return}}}else this.parkHoldTimer=0,this.warningBanner=`🅿️ PULL INTO MARKED GREEN PARKING BAY`,this.progressText=`DISTANCE TO BAY: ${o.toFixed(1)}m`,this.progressPercent=80}}else if(this.currentLevel===4){if(n.checkRedLightViolation(t)){this.failMission(`RED LIGHT VIOLATION! You ran through an active red traffic light during rush hour.`,`Coach Tip: Watch the overhead signals. When light turns yellow, brake early before the crosswalk.`);return}let r=-980,i=1e3,a=Math.max(0,Math.min(i,20-t.z)),o=Math.max(0,Math.round(t.z-r));if(this.progressPercent=Math.min(100,Math.round(a/i*100)),this.progressText=`FINISH: ${o}m | TRAFFIC: HEAVY`,Math.abs(t.speedKmh)>40&&(this.techniquePoints+=e*25),this.liveScore=Math.round(a*3+this.smoothPoints+this.techniquePoints),t.z<=r){this.completeMission();return}}else if(this.currentLevel===5){let r=n.terminalParkingBay||n.parkingBay;if(Math.abs(t.speedKmh),this.mission5Phase===0)this.warningBanner=`🚦 RUSH HOUR START: SPRINT FORWARD (LEFT TURN IN 70M)`,this.progressText=`STEP 1/6: RUSH HOUR SPRINT`,t.z<=-60&&(this.mission5Phase=1,this.techniquePoints+=150);else if(this.mission5Phase===1)this.warningBanner=`⬅️ MANDATORY LEFT TURN: TURN INTO TWO-WAY STREET`,this.progressText=`STEP 2/6: 90° LEFT TURN`,t.x<=-18&&(this.mission5Phase=2,this.techniquePoints+=200);else if(this.mission5Phase===2)this.warningBanner=`➡️ BLIND JUNCTION: IMMEDIATE RIGHT TURN!`,this.progressText=`STEP 3/6: BLIND RIGHT TURN`,(t.z<=-160||t.x>-14)&&(this.mission5Phase=3,this.techniquePoints+=250);else if(this.mission5Phase===3)this.warningBanner=`⬆️ FOLLOW SERVICE ROAD 150M TOWARDS ALLEYWAY`,this.progressText=`STEP 4/6: 150M SERVICE ROAD`,t.z<=-340&&(this.mission5Phase=4,this.techniquePoints+=250);else if(this.mission5Phase===4)this.warningBanner=`🔄 ENTER NARROW ALLEY & EXECUTE TIGHT U-TURN LOOP`,this.progressText=`STEP 5/6: U-TURN LOOP`,t.z<=-600&&(this.mission5Phase=5,this.techniquePoints+=300);else if(this.progressText=`STEP 6/6: PRECISION PARKING`,(r?Math.hypot(t.x-r.centerX,t.z-r.centerZ):999)>30)this.warningBanner=`🅿️ ENTER COMMERCIAL PARKING LOT`;else{let n=Math.abs(t.x-r.centerX),i=Math.abs(t.z-r.centerZ),a=n<r.width*.6&&i<r.length*.55,o=Math.abs(t.heading-r.targetHeading)%(Math.PI*2);o>Math.PI&&(o=Math.PI*2-o);let s=o<=7*Math.PI/180,c=Math.abs(t.speed)<.1,l=t.gear===`P`,u=t.isEBrakeActive||l;if(a){if(!s)this.parkHoldTimer=0,this.warningBanner=`🅿️ STRAIGHTEN CAR WITHIN ±5° OF BAY LINES`;else if(!c)this.parkHoldTimer=0,this.warningBanner=`🅿️ ALIGNED! COME TO A FULL STOP`;else if(!l)this.parkHoldTimer=0,this.warningBanner=`✅ SHIFT INTO "P" (Key 1 or tap P)`;else if(!u)this.parkHoldTimer=0,this.warningBanner=`🅿️ ENGAGE HANDBRAKE (Spacebar)`;else{this.parkHoldTimer+=e;let t=Math.min(2,this.parkHoldTimer);if(this.warningBanner=`🅿️ HOLDING IN P & HANDBRAKE: ${t.toFixed(1)}s / 2.0s`,this.parkHoldTimer>=2){this.techniquePoints+=800,this.completeMission();return}}}else this.parkHoldTimer=0,this.warningBanner=`🅿️ PULL INTO THE MARKED PARKING BAY`}this.progressPercent=Math.min(100,Math.round(this.mission5Phase/5*100)),this.liveScore=Math.round(this.mission5Phase*300+this.smoothPoints+this.techniquePoints)}}}}completeMission(){this.levelState=`passed`;let e=this.getCurrentMission(),t=1e3,n=Math.max(0,this.timeLimit-this.elapsedTime),r=Math.round(n*25),i=this.cleanDrive?600:0,a=Math.round(this.smoothPoints),o=Math.round(this.techniquePoints),s=t+r+i+a+o,c=1;s>=2400?c=3:s>=1600&&(c=2);let l=1+(c-1)*.35,u=Math.round(e.reward*l);this.coins+=u;let d=this.getLevelStats(this.currentLevel),f=s>(d.highScore||0),p=Math.max(d.stars||0,c);return this.levelStats[this.currentLevel]={stars:p,highScore:Math.max(d.highScore||0,s),completions:(d.completions||0)+1},this.currentLevel<this.missions.length&&this.unlockedLevels<=this.currentLevel&&(this.unlockedLevels=this.currentLevel+1),this.saveProgress(),this.lastResult={baseScore:t,timeBonus:r,cleanBonus:i,smoothBonus:a,techBonus:o,totalScore:s,stars:c,coinsEarned:u,isNewHighScore:f,timeRemaining:n},this.lastResult}failMission(e,t){this.levelState=`failed`,this.failReason=e||`COLLISION! Vehicle damaged.`,this.failTip=t||`Keep your steering smooth and maintain safe stopping distances.`,this.cleanDrive=!1,this.infractionsCount++}getCurrentMission(){return this.missions[this.currentLevel-1]||this.missions[0]}},IS=class{constructor(){this.elements={},this.radarCanvas=null,this.radarCtx=null,this.shakeIntensity=0,this.shakeDecay=4.5,this.onSelectLevel=null,this.onRetryLevel=null,this.onNextLevel=null,this.onToggleCamera=null,this.onToggleMute=null,this.onShiftGear=null,this.onToggleHandTracking=null,this.cachedMissions=null,this.cachedUnlockedCount=1,this.cachedCoins=500,this.cachedLevelStats={},this.starAnimationTimeouts=[]}init(){this.cacheDOMElements(),this.setupEventListeners()}cacheDOMElements(){this.elements={levelTitle:document.getElementById(`hud-level-title`),levelDiffTag:document.getElementById(`hud-level-diff`),progressBar:document.getElementById(`hud-progress-bar`),levelMetric:document.getElementById(`hud-level-metric`),liveScoreVal:document.getElementById(`hud-live-score`),coinCounter:document.getElementById(`hud-coin-count`),camToggleBtn:document.getElementById(`btn-toggle-cam`),muteToggleBtn:document.getElementById(`btn-toggle-mute`),controlModeBtn:document.getElementById(`btn-toggle-controls`),warningBanner:document.getElementById(`hud-warning-banner`),briefingCard:document.getElementById(`mission-briefing-card`),briefingBadge:document.getElementById(`briefing-badge`),briefingTitle:document.getElementById(`briefing-title`),briefingDesc:document.getElementById(`briefing-desc`),briefingTip:document.getElementById(`briefing-tip`),speedValue:document.getElementById(`gauge-speed-val`),speedNeedle:document.getElementById(`gauge-speed-needle`),rpmValue:document.getElementById(`gauge-rpm-val`),rpmNeedle:document.getElementById(`gauge-rpm-needle`),gearIndicator:document.getElementById(`gauge-gear-disp`),ecoIndicator:document.getElementById(`gauge-eco-disp`),fuelBarFill:document.getElementById(`gauge-fuel-fill`),signalLeft:document.getElementById(`sig-left`),signalRight:document.getElementById(`sig-right`),gearP:document.getElementById(`gear-btn-p`),gearR:document.getElementById(`gear-btn-r`),gearN:document.getElementById(`gear-btn-n`),gearD:document.getElementById(`gear-btn-d`),radarCanvas:document.getElementById(`radar-canvas`),damageFlash:document.getElementById(`damage-flash-overlay`),levelSelectModal:document.getElementById(`modal-level-select`),successModal:document.getElementById(`modal-stage-clear`),failModal:document.getElementById(`modal-stage-failed`),btnOpenMissions:document.getElementById(`btn-open-missions`),btnCloseLevelSelect:document.getElementById(`btn-close-level-select`),stars:[document.getElementById(`star-1`),document.getElementById(`star-2`),document.getElementById(`star-3`)],scoreBase:document.getElementById(`score-val-base`),scoreTime:document.getElementById(`score-val-time`),scoreClean:document.getElementById(`score-val-clean`),scoreTech:document.getElementById(`score-val-tech`),scoreTotal:document.getElementById(`score-val-total`),badgeRecord:document.getElementById(`badge-new-record`),winRewardText:document.getElementById(`win-reward-text`),btnNextLevel:document.getElementById(`btn-next-level`),btnRetryWin:document.getElementById(`btn-retry-win`),btnSelectFromWin:document.getElementById(`btn-menu-from-win`),failReasonText:document.getElementById(`fail-reason-text`),failCoachTip:document.getElementById(`fail-coach-tip`),btnRetryFail:document.getElementById(`btn-retry-fail`),btnSelectFromFail:document.getElementById(`btn-menu-from-fail`),levelGrid:document.getElementById(`level-selection-grid`),handHudContainer:document.getElementById(`webcam-hud-container`),handStatusTag:document.getElementById(`hand-status-tag`)},this.elements.radarCanvas&&(this.radarCanvas=this.elements.radarCanvas,this.radarCtx=this.radarCanvas.getContext(`2d`))}setupEventListeners(){this.elements.camToggleBtn&&this.elements.camToggleBtn.addEventListener(`click`,()=>{this.onToggleCamera&&this.onToggleCamera()}),this.elements.muteToggleBtn&&this.elements.muteToggleBtn.addEventListener(`click`,()=>{this.onToggleMute&&this.onToggleMute()}),this.elements.controlModeBtn&&this.elements.controlModeBtn.addEventListener(`click`,()=>{this.onToggleHandTracking&&this.onToggleHandTracking()}),[{el:this.elements.gearP,gear:`P`},{el:this.elements.gearR,gear:`R`},{el:this.elements.gearN,gear:`N`},{el:this.elements.gearD,gear:`D`}].forEach(({el:e,gear:t})=>{e&&e.addEventListener(`click`,()=>{this.onShiftGear&&this.onShiftGear(t)})}),this.elements.btnRetryFail&&this.elements.btnRetryFail.addEventListener(`click`,()=>{this.hideModals(),this.onRetryLevel&&this.onRetryLevel()}),this.elements.btnRetryWin&&this.elements.btnRetryWin.addEventListener(`click`,()=>{this.hideModals(),this.onRetryLevel&&this.onRetryLevel()}),this.elements.btnNextLevel&&this.elements.btnNextLevel.addEventListener(`click`,()=>{this.hideModals(),this.onNextLevel&&this.onNextLevel()}),this.elements.btnSelectFromFail&&this.elements.btnSelectFromFail.addEventListener(`click`,()=>{this.showLevelSelect()}),this.elements.btnSelectFromWin&&this.elements.btnSelectFromWin.addEventListener(`click`,()=>{this.showLevelSelect()}),this.elements.btnOpenMissions&&this.elements.btnOpenMissions.addEventListener(`click`,()=>{this.onOpenMissions?this.onOpenMissions():this.showLevelSelect()}),this.elements.btnCloseLevelSelect&&this.elements.btnCloseLevelSelect.addEventListener(`click`,()=>{this.hideModals()})}showLevelSelect(e,t,n,r){if(!this.elements.levelSelectModal)return;e&&(this.cachedMissions=e),t!==void 0&&(this.cachedUnlockedCount=t),n!==void 0&&(this.cachedCoins=n),r&&(this.cachedLevelStats=r);let i=e||this.cachedMissions,a=t===void 0?this.cachedUnlockedCount||1:t,o=r||this.cachedLevelStats||{};this.elements.levelSelectModal.classList.remove(`hidden`),this.elements.successModal&&this.elements.successModal.classList.add(`hidden`),this.elements.failModal&&this.elements.failModal.classList.add(`hidden`),this.elements.briefingCard&&this.elements.briefingCard.classList.add(`hidden`),this.elements.warningBanner&&this.elements.warningBanner.classList.add(`hidden`);let s=this.elements.levelGrid;s&&i&&(s.innerHTML=``,i.forEach(e=>{let t=e.id<=a,n=o[e.id]||{stars:0,highScore:0},r=document.createElement(`div`);r.className=`level-card ${t?`unlocked`:`locked`}`;let i=`☆☆☆`;n.stars===3?i=`⭐⭐⭐`:n.stars===2?i=`⭐⭐☆`:n.stars===1&&(i=`⭐☆☆`);let c=n.highScore>0?`🏆 Best: ${n.highScore.toLocaleString()}`:`Not completed`;r.innerHTML=`
          <div class="level-header">
            <span class="level-badge" style="background: ${e.difficultyColor||`#38bdf8`}; color: #000;">LVL ${e.id} • ${e.difficulty}</span>
            <span class="reward-tag">+${e.reward} 🪙</span>
          </div>
          <h3 class="level-card-title">${e.title}</h3>
          <p class="level-card-sub">${e.subtitle}</p>
          <p class="level-card-desc">${e.description}</p>
          <div class="level-footer-row">
            <span class="level-stars-display">${i}</span>
            <span class="level-best-tag">${c}</span>
          </div>
          <button class="level-play-btn" ${t?``:`disabled`}>
            ${t?`START MISSION`:`🔒 LOCKED`}
          </button>
        `,t&&r.addEventListener(`click`,()=>{this.hideModals(),this.onSelectLevel&&this.onSelectLevel(e.id)}),s.appendChild(r)}))}showBriefing(e){this.elements.briefingCard&&(this.elements.briefingBadge.textContent=`LVL ${e.id} • ${e.difficulty}`,this.elements.briefingBadge.style.background=e.difficultyColor||`#00e5ff`,this.elements.briefingTitle.textContent=e.title,this.elements.briefingDesc.textContent=e.description,this.elements.briefingTip.textContent=`💡 ${e.tip}`,this.elements.briefingCard.classList.remove(`hidden`),this.elements.briefingCard.style.opacity=`1`)}hideBriefing(){this.elements.briefingCard&&(this.elements.briefingCard.style.opacity=`0`,setTimeout(()=>{this.elements.briefingCard&&this.elements.briefingCard.classList.add(`hidden`)},300))}showSuccess(e,t,n,r){if(this.hideModals(),this.clearStarTimeouts(),this.elements.successModal){this.elements.successModal.classList.remove(`hidden`),this.elements.scoreBase&&(this.elements.scoreBase.textContent=`+${e.baseScore.toLocaleString()}`),this.elements.scoreTime&&(this.elements.scoreTime.textContent=`+${e.timeBonus.toLocaleString()}`),this.elements.scoreClean&&(this.elements.scoreClean.textContent=`+${e.cleanBonus.toLocaleString()}`),this.elements.scoreTech&&(this.elements.scoreTech.textContent=`+${(e.smoothBonus+e.techBonus).toLocaleString()}`),this.elements.scoreTotal&&(this.elements.scoreTotal.textContent=`${e.totalScore.toLocaleString()} PTS`),this.elements.badgeRecord&&this.elements.badgeRecord.classList.toggle(`hidden`,!e.isNewHighScore),this.elements.winRewardText&&(this.elements.winRewardText.textContent=`+${e.coinsEarned} COINS EARNED!`),this.elements.btnNextLevel&&(this.elements.btnNextLevel.style.display=n?`inline-block`:`none`);let t=this.elements.stars;t.forEach(e=>{e&&e.classList.remove(`active`)});for(let n=0;n<e.stars;n++){let e=setTimeout(()=>{t[n]&&(t[n].classList.add(`active`),r&&r.playStar(n))},350+n*380);this.starAnimationTimeouts.push(e)}}}clearStarTimeouts(){this.starAnimationTimeouts.forEach(e=>clearTimeout(e)),this.starAnimationTimeouts=[]}showFail(e,t){this.hideModals(),this.elements.failModal&&(this.elements.failModal.classList.remove(`hidden`),this.elements.failReasonText&&(this.elements.failReasonText.textContent=e),this.elements.failCoachTip&&(this.elements.failCoachTip.textContent=t||`Keep your steering smooth and maintain safe stopping distances.`))}hideModals(){this.clearStarTimeouts(),this.elements.levelSelectModal&&this.elements.levelSelectModal.classList.add(`hidden`),this.elements.successModal&&this.elements.successModal.classList.add(`hidden`),this.elements.failModal&&this.elements.failModal.classList.add(`hidden`)}triggerDamageFlash(){this.elements.damageFlash&&(this.elements.damageFlash.style.opacity=`0.9`,setTimeout(()=>{this.elements.damageFlash&&(this.elements.damageFlash.style.opacity=`0`)},350)),this.shakeIntensity=1}updateHUD(e,t,n){let r=Math.round(Math.abs(e.speedKmh));if(this.elements.speedValue&&(this.elements.speedValue.textContent=`${r}`),this.elements.rpmValue&&(this.elements.rpmValue.textContent=`${Math.round(e.rpm)}`),this.elements.speedNeedle){let e=-125+Math.min(1,r/100)*250;this.elements.speedNeedle.style.transform=`rotate(${e}deg)`}if(this.elements.rpmNeedle){let t=-125+Math.min(1,e.rpm/8e3)*250;this.elements.rpmNeedle.style.transform=`rotate(${t}deg)`}let i=e.gear;this.elements.gearIndicator&&(this.elements.gearIndicator.textContent=i===`D`?`D${e.autoGear}`:i),[`P`,`R`,`N`,`D`].forEach(e=>{let t=this.elements[`gear${e}`];t&&t.classList.toggle(`active`,i===e)}),this.elements.fuelBarFill&&(this.elements.fuelBarFill.style.width=`${Math.max(0,Math.min(100,e.fuel))}%`),this.elements.ecoIndicator&&(e.rpm<3200?(this.elements.ecoIndicator.className=`eco-badge eco-optimal`,this.elements.ecoIndicator.textContent=`ECO OPTIMAL`):e.rpm<5200?(this.elements.ecoIndicator.className=`eco-badge eco-warning`,this.elements.ecoIndicator.textContent=`ECO MODERATE`):(this.elements.ecoIndicator.className=`eco-badge eco-alert`,this.elements.ecoIndicator.textContent=`HIGH RPM DRAIN!`));let a=Math.floor(performance.now()/350)%2==0,o=e.turnSignal===`left`||e.turnSignal===`hazard`,s=e.turnSignal===`right`||e.turnSignal===`hazard`;this.elements.signalLeft&&this.elements.signalLeft.classList.toggle(`active`,o&&a),this.elements.signalRight&&this.elements.signalRight.classList.toggle(`active`,s&&a),this.elements.coinCounter&&(this.elements.coinCounter.textContent=t.coins);let c=t.getCurrentMission();this.elements.levelTitle&&(this.elements.levelTitle.textContent=`LVL ${t.currentLevel}: ${c.title}`),this.elements.levelDiffTag&&(this.elements.levelDiffTag.textContent=c.difficulty,this.elements.levelDiffTag.style.background=c.difficultyColor||`#00ff88`),this.elements.progressBar&&(this.elements.progressBar.style.width=`${Math.max(0,Math.min(100,t.progressPercent))}%`),this.elements.levelMetric&&(this.elements.levelMetric.textContent=t.progressText),this.elements.liveScoreVal&&(this.elements.liveScoreVal.textContent=`⭐ ${t.liveScore.toLocaleString()} PTS`),this.elements.warningBanner&&(t.warningBanner&&t.levelState===`playing`?(this.elements.warningBanner.textContent=t.warningBanner,this.elements.warningBanner.classList.remove(`hidden`),this.elements.warningBanner.classList.toggle(`info-style`,t.warningBanner.startsWith(`💡`))):this.elements.warningBanner.classList.add(`hidden`)),t.levelState===`playing`&&Math.abs(e.speed)>.4&&this.hideBriefing()}renderRadar(e,t,n){if(!this.radarCtx||!this.radarCanvas)return;let r=this.radarCtx,i=this.radarCanvas.width,a=this.radarCanvas.height,o=i/2,s=a/2;r.clearRect(0,0,i,a),r.fillStyle=`rgba(15, 23, 42, 0.9)`,r.beginPath(),r.arc(o,s,o-2,0,Math.PI*2),r.fill(),r.lineWidth=2,r.strokeStyle=`#38bdf8`,r.stroke(),r.strokeStyle=`rgba(56, 189, 248, 0.2)`,r.lineWidth=1,r.beginPath(),r.arc(o,s,o*.45,0,Math.PI*2),r.arc(o,s,o*.8,0,Math.PI*2),r.stroke(),r.save(),r.beginPath(),r.arc(o,s,o-3,0,Math.PI*2),r.clip(),r.translate(o,s),r.rotate(e.heading);let c=1.15,l=t=>(t-e.x)*c,u=t=>(t-e.z)*c,d=n&&n.crossroadZs?n.crossroadZs:[-80,-280,-530,-750,-980];r.fillStyle=`rgba(30, 41, 59, 0.75)`,r.fillRect(l(-10),u(-1060),20*c,1120*c),r.fillRect(l(-93),u(-1060),16*c,1120*c),r.fillRect(l(77),u(-1060),16*c,1120*c),d.forEach(e=>{r.fillRect(l(-130),u(e-9),260*c,18*c)}),r.strokeStyle=`rgba(255, 204, 0, 0.55)`,r.lineWidth=1,r.setLineDash([4,4]),r.beginPath(),r.moveTo(l(0),u(-1060)),r.lineTo(l(0),u(60)),r.moveTo(l(-85),u(-1060)),r.lineTo(l(-85),u(60)),r.moveTo(l(85),u(-1060)),r.lineTo(l(85),u(60)),d.forEach(e=>{r.moveTo(l(-130),u(e)),r.lineTo(l(130),u(e))}),r.stroke(),r.setLineDash([]),r.strokeStyle=`rgba(255, 255, 255, 0.4)`,r.lineWidth=1.5,r.beginPath(),[{startZ:60,endZ:-69},{startZ:-91,endZ:-269},{startZ:-291,endZ:-519},{startZ:-541,endZ:-739},{startZ:-761,endZ:-969},{startZ:-991,endZ:-1060}].forEach(e=>{r.moveTo(l(-10),u(e.startZ)),r.lineTo(l(-10),u(e.endZ)),r.moveTo(l(10),u(e.startZ)),r.lineTo(l(10),u(e.endZ))}),d.forEach(e=>{let t=e-9,n=e+9;r.moveTo(l(-130),u(t)),r.lineTo(l(-10),u(t)),r.moveTo(l(-130),u(n)),r.lineTo(l(-10),u(n)),r.moveTo(l(10),u(t)),r.lineTo(l(130),u(t)),r.moveTo(l(10),u(n)),r.lineTo(l(130),u(n))}),r.stroke(),r.strokeStyle=`#00e5ff`,r.lineWidth=2,r.beginPath(),r.moveTo(l(-10),u(-480)),r.lineTo(l(10),u(-480)),r.stroke(),r.strokeStyle=`#ffaa00`,r.lineWidth=2,r.beginPath(),r.moveTo(l(-10),u(-730)),r.lineTo(l(10),u(-730)),r.stroke(),r.strokeStyle=`#00ff88`,r.lineWidth=3,r.beginPath(),r.moveTo(l(-10),u(-980)),r.lineTo(l(10),u(-980)),r.stroke();let f=[];n&&n.parkingBay&&f.push(n.parkingBay),n&&n.terminalParkingBay&&f.push(n.terminalParkingBay),f.forEach(e=>{let t=l(e.centerX),n=u(e.centerZ);r.fillStyle=`rgba(0, 255, 136, 0.45)`,r.strokeStyle=`#00ff88`,r.lineWidth=2,r.strokeRect(t-12,n-16,24,32),r.fillRect(t-12,n-16,24,32)}),t&&t.vehicles&&t.vehicles.forEach(e=>{if(e.isActive===!1)return;let t=l(e.x),n=u(e.z);if(Math.hypot(t,n)<o-6){r.fillStyle=`#ef4444`,r.beginPath(),r.arc(t,n,3.5,0,Math.PI*2),r.fill();let i=t+Math.sin(e.heading||0)*5,a=n-Math.cos(e.heading||0)*5;r.strokeStyle=`#fca5a5`,r.lineWidth=1.2,r.beginPath(),r.moveTo(t,n),r.lineTo(i,a),r.stroke()}}),r.restore();let p=o-9,m=o+Math.sin(-e.heading)*p,h=s-Math.cos(-e.heading)*p;r.fillStyle=`#94a3b8`,r.font=`bold 9px Inter, sans-serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.fillText(`N`,m,h),r.save(),r.translate(o,s),r.fillStyle=`#38bdf8`,r.beginPath(),r.moveTo(0,-9),r.lineTo(6,7),r.lineTo(0,4),r.lineTo(-6,7),r.closePath(),r.fill(),r.strokeStyle=`#ffffff`,r.lineWidth=1.5,r.stroke(),r.restore()}getShakeOffset(e){if(this.shakeIntensity>.01){let t=(Math.random()-.5)*this.shakeIntensity*.15,n=(Math.random()-.5)*this.shakeIntensity*.15;return this.shakeIntensity=Math.max(0,this.shakeIntensity-this.shakeDecay*e),{x:t,y:n}}return{x:0,y:0}}},LS=class{constructor(){this.container=document.getElementById(`game-container`),this.videoEl=document.getElementById(`webcam-video`),this.handCanvas=document.getElementById(`hand-skeleton-canvas`),this.soundSynth=new PS,this.physics=new kS,this.missions=new FS,this.ui=new IS,this.handTracker=null,this.scene=null,this.renderer=null,this.cityBuilder=null,this.trafficAI=null,this.cockpit=null,this.clock=new Os,this.stats=null,this.currentSteer=0,this.currentThrottle=0,this.currentBrake=!1,this.currentEBrake=!1,this.controlMode=`hands`,this.keyboardState={up:!1,down:!1,left:!1,right:!1,space:!1},this.running=!1,this.init()}async init(){this.setupStats(),this.ui.init(),this.bindUIEvents(),this.setupThreeScene(),this.cityBuilder=new AS(this.scene),this.trafficAI=new jS(this.scene),this.cockpit=new NS(this.scene,this.renderer),this.setupKeyboardListeners(),await this.setupVisionTracker(),window.addEventListener(`resize`,()=>this.onWindowResize()),this.missions.resetToFirstLevel(),this.ui.hideModals(),this.trafficAI.setLevelDifficulty(1),this.missions.startMission(1,this.physics),this.ui.showBriefing(this.missions.getCurrentMission()),this.running=!0,this.clock.start(),requestAnimationFrame(e=>this.gameLoop(e))}setupStats(){this.stats=new Hu,this.stats.showPanel(0),this.stats.dom.style.position=`absolute`,this.stats.dom.style.top=`10px`,this.stats.dom.style.left=`10px`,this.stats.dom.style.zIndex=`150`,document.body.appendChild(this.stats.dom)}setupThreeScene(){this.scene=new zn,this.scene.background=new In(8900331),this.scene.fog=new Rn(11584734,.0035),this.renderer=new Vu({antialias:!0,powerPreference:`high-performance`}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2,this.container.appendChild(this.renderer.domElement);let e=new Xo(16777215,4473941,.85);e.position.set(0,50,0),this.scene.add(e);let t=new ds(16774630,1.4);t.position.set(35,60,-25),t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.near=1,t.shadow.camera.far=160,t.shadow.camera.left=-30,t.shadow.camera.right=30,t.shadow.camera.top=30,t.shadow.camera.bottom=-30,t.shadow.bias=-5e-4,this.scene.add(t)}async setupVisionTracker(){this.handTracker=new OS(this.videoEl,this.handCanvas),this.handTracker.onStatusChange=(e,t)=>{this.ui.elements.handStatusTag&&(this.ui.elements.handStatusTag.textContent=t,e===`active`?this.ui.elements.handStatusTag.style.color=`#00ff88`:(e===`denied`||e===`error`)&&(this.ui.elements.handStatusTag.style.color=`#ff9900`,this.controlMode=`keyboard`,this.ui.elements.controlModeBtn&&(this.ui.elements.controlModeBtn.textContent=`KEYBOARD MODE`)))},this.handTracker.onGearSwipe=e=>{this.shiftGear(this.physics.cycleGear(e))},this.handTracker.onGearSelect=e=>{this.shiftGear(e)};try{await this.handTracker.init()}catch(e){console.warn(`Vision tracker initial setup notice:`,e),this.controlMode=`keyboard`}}setupKeyboardListeners(){window.addEventListener(`keydown`,e=>{switch(this.soundSynth.resume(),e.code){case`KeyW`:case`ArrowUp`:this.keyboardState.up=!0;break;case`KeyS`:case`ArrowDown`:this.keyboardState.down=!0;break;case`KeyA`:case`ArrowLeft`:this.keyboardState.left=!0;break;case`KeyD`:case`ArrowRight`:this.keyboardState.right=!0;break;case`Space`:this.keyboardState.space=!0,e.preventDefault();break;case`Digit1`:this.shiftGear(`P`);break;case`Digit2`:this.shiftGear(`R`);break;case`Digit3`:this.shiftGear(`N`);break;case`Digit4`:this.shiftGear(`D`);break;case`KeyQ`:this.physics.turnSignal=this.physics.turnSignal===`left`?`none`:`left`,this.soundSynth.playTurnSignal(!0);break;case`KeyE`:this.physics.turnSignal=this.physics.turnSignal===`right`?`none`:`right`,this.soundSynth.playTurnSignal(!0);break;case`KeyC`:this.toggleCamera();break;case`KeyH`:this.soundSynth.playHorn(!0)}}),window.addEventListener(`keyup`,e=>{switch(e.code){case`KeyW`:case`ArrowUp`:this.keyboardState.up=!1;break;case`KeyS`:case`ArrowDown`:this.keyboardState.down=!1;break;case`KeyA`:case`ArrowLeft`:this.keyboardState.left=!1;break;case`KeyD`:case`ArrowRight`:this.keyboardState.right=!1;break;case`Space`:this.keyboardState.space=!1;break;case`KeyH`:this.soundSynth.playHorn(!1)}})}bindUIEvents(){this.ui.onSelectLevel=e=>{this.soundSynth.resume(),this.trafficAI.setLevelDifficulty(e),this.missions.startMission(e,this.physics),this.ui.showBriefing(this.missions.getCurrentMission())},this.ui.onRetryLevel=()=>{this.soundSynth.resume(),this.trafficAI.setLevelDifficulty(this.missions.currentLevel),this.missions.startMission(this.missions.currentLevel,this.physics),this.ui.showBriefing(this.missions.getCurrentMission())},this.ui.onNextLevel=()=>{this.soundSynth.resume();let e=Math.min(this.missions.missions.length,this.missions.currentLevel+1);this.trafficAI.setLevelDifficulty(e),this.missions.startMission(e,this.physics),this.ui.showBriefing(this.missions.getCurrentMission())},this.ui.onOpenMissions=()=>{this.ui.showLevelSelect(this.missions.missions,this.missions.unlockedLevels,this.missions.coins,this.missions.levelStats)},this.ui.onToggleCamera=()=>this.toggleCamera(),this.ui.onToggleMute=()=>{let e=this.soundSynth.toggleMute();this.ui.elements.muteToggleBtn&&(this.ui.elements.muteToggleBtn.textContent=e?`🔇 MUTED`:`🔊 SOUND ON`)},this.ui.onToggleHandTracking=()=>{this.controlMode=this.controlMode===`hands`?`keyboard`:`hands`,this.ui.elements.controlModeBtn&&(this.ui.elements.controlModeBtn.textContent=this.controlMode===`hands`?`GESTURE MODE`:`KEYBOARD MODE`)},this.ui.onShiftGear=e=>this.shiftGear(e)}shiftGear(e){this.physics.gear!==e&&(this.physics.setGear(e),this.soundSynth.playGearShift(),this.cockpit&&this.cockpit.triggerHandShift(e),this.handTracker&&(this.handTracker.activeGear=e))}toggleCamera(){let e=this.cockpit.toggleCameraMode();this.ui.elements.camToggleBtn&&(this.ui.elements.camToggleBtn.textContent=e===`cockpit`?`🎥 COCKPIT`:`🚗 CHASE CAM`)}onWindowResize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.cockpit.cockpitCamera&&(this.cockpit.cockpitCamera.aspect=e/t,this.cockpit.cockpitCamera.updateProjectionMatrix()),this.cockpit.thirdPersonCamera&&(this.cockpit.thirdPersonCamera.aspect=e/t,this.cockpit.thirdPersonCamera.updateProjectionMatrix())}gameLoop(){if(!this.running)return;requestAnimationFrame(()=>this.gameLoop()),this.stats.begin();let e=Math.min(this.clock.getDelta(),.0333);if(this.keyboardState.up||this.keyboardState.down||this.keyboardState.left||this.keyboardState.right||this.keyboardState.space){let t=0;this.keyboardState.left&&(t=-.85),this.keyboardState.right&&(t=.85),this.currentSteer=kt.damp(this.currentSteer,t,24,e),this.currentThrottle=kt.damp(this.currentThrottle,+!!this.keyboardState.up,20,e),this.currentBrake=this.keyboardState.down,this.currentEBrake=this.keyboardState.space}else this.controlMode===`hands`&&this.handTracker&&this.handTracker.handsVisible?(this.currentSteer=kt.damp(this.currentSteer,this.handTracker.targetSteer,24,e),this.currentThrottle=kt.damp(this.currentThrottle,this.handTracker.targetThrottle,20,e),this.currentBrake=this.handTracker.targetBrake,this.currentEBrake=this.handTracker.targetEBrake):(this.currentSteer=kt.damp(this.currentSteer,0,16,e),this.currentThrottle=kt.damp(this.currentThrottle,0,16,e),this.currentBrake=!1,this.currentEBrake=!1);let t=this.missions.levelState===`playing`||this.missions.levelState===`briefing`;if(t?this.physics.update(e,this.currentSteer,this.currentThrottle,this.currentBrake,this.currentEBrake):this.physics.update(e,0,0,!0,!1),this.soundSynth.updateEngine(this.physics.rpm,this.currentThrottle,this.physics.gear),this.soundSynth.updateTireScreech(this.physics.screechIntensity),this.cityBuilder.update(e),this.trafficAI.update(e,this.physics),t&&this.checkCollisions(),t){if(this.missions.update(e,this.physics,this.cityBuilder),this.missions.levelState===`passed`){this.soundSynth.playVictory(),this.ui.cachedUnlockedCount=this.missions.unlockedLevels,this.ui.cachedCoins=this.missions.coins,this.ui.cachedLevelStats=this.missions.levelStats;let e=this.missions.currentLevel<this.missions.missions.length;this.ui.showSuccess(this.missions.lastResult,this.missions.getCurrentMission(),e,this.soundSynth)}else this.missions.levelState===`failed`&&(this.soundSynth.playFail(),this.ui.showFail(this.missions.failReason,this.missions.failTip))}this.handTracker&&(this.handTracker.activeGear=this.physics.gear),this.cockpit.update(this.physics,this.currentSteer,e);let n=this.cockpit.getActiveCamera(),r=this.ui.getShakeOffset(e);n.position.x+=r.x,n.position.y+=r.y,this.cockpit.renderMirror(this.scene),this.renderer.render(this.scene,n),this.ui.updateHUD(this.physics,this.missions,e),this.ui.renderRadar(this.physics,this.trafficAI,this.cityBuilder),this.stats.end()}checkCollisions(){for(let e of this.cityBuilder.colliders)if(this.physics.checkCollisionWithAABB(e.box.minX,e.box.minZ,e.box.maxX,e.box.maxZ)){this.handleCrash(`COLLISION with ${e.name||`Obstacle`}!`,`Coach Tip: Keep your vehicle centered in the marked lane and avoid sharp turning near the sidewalks.`);return}this.trafficAI.checkCollisionWithPlayer(this.physics)&&this.handleCrash(`TRAFFIC CRASH! Collided with moving vehicle.`,`Coach Tip: Watch for brake lights ahead, maintain safe following distance, and pass on open lanes.`)}handleCrash(e,t){this.soundSynth.playCrash(),this.ui.triggerDamageFlash(),this.missions.failMission(e,t),this.ui.showFail(e,t)}};window.addEventListener(`DOMContentLoaded`,()=>{new LS});
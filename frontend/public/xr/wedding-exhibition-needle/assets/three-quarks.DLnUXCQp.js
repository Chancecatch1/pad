import{$ as e,$n as t,Ar as n,At as r,Qt as i,S as a,Zt as o,_t as s,fn as c,in as l,rn as u,tr as d,vn as f,vt as p,x as m,xr as h,yr as g}from"./three@0.169.19.js";var _=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),v=1234567,y=Math.PI/180,b=180/Math.PI;function x(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_[e&255]+_[e>>8&255]+_[e>>16&255]+_[e>>24&255]+`-`+_[t&255]+_[t>>8&255]+`-`+_[t>>16&15|64]+_[t>>24&255]+`-`+_[n&63|128]+_[n>>8&255]+`-`+_[n>>16&255]+_[n>>24&255]+_[r&255]+_[r>>8&255]+_[r>>16&255]+_[r>>24&255]).toLowerCase()}function S(e,t,n){return Math.max(t,Math.min(n,e))}function C(e,t){return(e%t+t)%t}function w(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function T(e,t,n){return e===t?0:(n-e)/(t-e)}function E(e,t,n){return(1-n)*e+n*t}function D(e,t,n,r){return E(e,t,1-Math.exp(-n*r))}function O(e,t=1){return t-Math.abs(C(e,t*2)-t)}function ee(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function k(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function A(e,t){return e+Math.floor(Math.random()*(t-e+1))}function j(e,t){return e+Math.random()*(t-e)}function M(e){return e*(.5-Math.random())}function N(e){e!==void 0&&(v=e);let t=v+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P(e){return e*y}function F(e){return e*b}function te(e){return(e&e-1)==0&&e!==0}function ne(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function re(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ie(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`../math.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ae(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function oe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var se={DEG2RAD:y,RAD2DEG:b,generateUUID:x,clamp:S,euclideanModulo:C,mapLinear:w,inverseLerp:T,lerp:E,damp:D,pingpong:O,smoothstep:ee,smootherstep:k,randInt:A,randFloat:j,randFloatSpread:M,seededRandom:N,degToRad:P,radToDeg:F,isPowerOfTwo:te,ceilPowerOfTwo:ne,floorPowerOfTwo:re,setQuaternionFromProperEuler:ie,normalize:oe,denormalize:ae},I=class e{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new e(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`../math.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(S(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class e{constructor(t=0,n=0,r=0){this.isVector3=!0,e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new e(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(le.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(le.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ce.copy(this).projectOnVector(e),this.sub(ce)}reflect(e){return this.sub(ce.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(S(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this.z=Math.abs(this.z),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ce=new L,le=new I,ue=2e3,R=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.isMatrix4=!0,e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}extractPosition(e){return console.warn(`THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().`),this.copyPosition(e)}multiplyToArray(e,t,n){return console.error(`THREE.Matrix4: .multiplyToArray() has been removed.`),this}setRotationFromQuaternion(e){return this.makeRotationFromQuaternion(e)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/de.setFromMatrixColumn(e,0).length(),i=1/de.setFromMatrixColumn(e,1).length(),a=1/de.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fe,e,pe)}lookAt(e,t,n){let r=this.elements;return V.subVectors(e,t),V.lengthSq()===0&&(V.z=1),V.normalize(),B.crossVectors(n,V),B.lengthSq()===0&&(Math.abs(n.z)===1?V.x+=1e-4:V.z+=1e-4,V.normalize(),B.crossVectors(n,V)),B.normalize(),me.crossVectors(V,B),r[0]=B.x,r[4]=me.x,r[8]=V.x,r[1]=B.y,r[5]=me.y,r[9]=V.y,r[2]=B.z,r[6]=me.z,r[10]=V.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],A=r[10],j=r[14],M=r[3],N=r[7],P=r[11],F=r[15];return i[0]=a*x+o*T+s*ee+c*M,i[4]=a*S+o*E+s*k+c*N,i[8]=a*C+o*D+s*A+c*P,i[12]=a*w+o*O+s*j+c*F,i[1]=l*x+u*T+d*ee+f*M,i[5]=l*S+u*E+d*k+f*N,i[9]=l*C+u*D+d*A+f*P,i[13]=l*w+u*O+d*j+f*F,i[2]=p*x+m*T+h*ee+g*M,i[6]=p*S+m*E+h*k+g*N,i[10]=p*C+m*D+h*A+g*P,i[14]=p*w+m*O+h*j+g*F,i[3]=_*x+v*T+y*ee+b*M,i[7]=_*S+v*E+y*k+b*N,i[11]=_*C+v*D+y*A+b*P,i[15]=_*w+v*O+y*j+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=de.set(r[0],r[1],r[2]).length(),a=de.set(r[4],r[5],r[6]).length(),o=de.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],z.copy(this);let s=1/i,c=1/a,l=1/o;return z.elements[0]*=s,z.elements[1]*=s,z.elements[2]*=s,z.elements[4]*=c,z.elements[5]*=c,z.elements[6]*=c,z.elements[8]*=l,z.elements[9]*=l,z.elements[10]*=l,t.setFromRotationMatrix(z),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=ue){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ue){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`../math.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},de=new L,z=new R,fe=new L(0,0,0),pe=new L(1,1,1),B=new L,me=new L,V=new L,he=new R,ge=new I,_e=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new e(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(S(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-S(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(S(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-S(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(S(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-S(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`../math.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return he.makeRotationFromQuaternion(e),this.setFromRotationMatrix(he,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ge.setFromEuler(this),this.setFromQuaternion(ge,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(e){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_e.DEFAULT_ORDER=`XYZ`;var H=class e{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new e(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(S(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};H.isVector2=!0;var U=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new e(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},W=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ve.makeScale(e,t)),this}rotate(e){return this.premultiply(ve.makeRotation(-e)),this}translate(e,t){return this.premultiply(ve.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new e().fromArray(this.elements)}},ve=new W,G;(function(e){e[e.Random=0]=`Random`,e[e.Loop=1]=`Loop`,e[e.PingPong=2]=`PingPong`,e[e.Burst=3]=`Burst`})(G||={});function ye(e,t,n,r){let i;switch(G.Random===e?t=Math.random():G.Burst===e&&r.isBursting&&(t=r.burstParticleIndex/r.burstParticleCount),i=n>0?Math.floor(t/n)*n:t,e){case G.Loop:i%=1;break;case G.PingPong:i=Math.abs(i%2-1);break}return i}var be=class e{constructor(e,t,n,r){this.p=[e,t,n,r]}genValue(e){let t=e*e,n=e*e*e,r=1-e,i=r*r,a=i*r;return this.p[0]*a+this.p[1]*i*e*3+this.p[2]*r*t*3+this.p[3]*n}derivativeCoefficients(e){let t=[];for(let n=e,r=n.length-1;r>0;r--){let e=[];for(let t=0;t<r;t++){let i=r*(n[t+1]-n[t]);e.push(i)}t.push(e),n=e}return t}getSlope(e){let t=this.derivativeCoefficients(this.p)[0],n=1-e,r=n*n,i=n*e*2,a=e*e;return r*t[0]+i*t[1]+a*t[2]}controlCurve(e,t){this.p[1]=e/3+this.p[0],this.p[2]=this.p[3]-t/3}hull(e){let t=this.p,n=[],r,i=0,a=0,o=0,s=[];for(s[i++]=t[0],s[i++]=t[1],s[i++]=t[2],s[i++]=t[3];t.length>1;){for(n=[],a=0,o=t.length-1;a<o;a++)r=e*t[a]+(1-e)*t[a+1],s[i++]=r,n.push(r);t=n}return s}split(t){let n=this.hull(t);return{left:new e(n[0],n[4],n[7],n[9]),right:new e(n[9],n[8],n[6],n[3]),span:n}}clone(){return new e(this.p[0],this.p[1],this.p[2],this.p[3])}toJSON(){return{p0:this.p[0],p1:this.p[1],p2:this.p[2],p3:this.p[3]}}static fromJSON(t){return new e(t.p0,t.p1,t.p2,t.p3)}},xe=e=>({r:e.x,g:e.y,b:e.z,a:e.w}),Se=e=>new U(e.r,e.g,e.b,e.a),Ce=(e,t)=>{switch(t){case`Vector3`:return new L(e.x,e.y,e.z);case`Vector4`:return new U(e.x,e.y,e.z,e.w);case`Color`:return new L(e.r,e.g,e.b);case`Number`:return e;default:return e}},we=(e,t)=>{switch(t){case`Vector3`:return{x:e.x,y:e.y,z:e.z};case`Vector4`:return{x:e.x,y:e.y,z:e.z,w:e.w};case`Color`:return{r:e.x,g:e.y,b:e.z};case`Number`:return e;default:return e}},Te=class e{constructor(e,t){this.a=e,this.b=t,this.type=`value`}startGen(e){}genColor(e,t){let n=Math.random();return t.copy(this.a).lerp(this.b,n)}toJSON(){return{type:`RandomColor`,a:xe(this.a),b:xe(this.b)}}static fromJSON(t){return new e(Se(t.a),Se(t.b))}clone(){return new e(this.a.clone(),this.b.clone())}},Ee=class e{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type=`value`}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t){return this.indexCount===-1&&this.startGen(e),t.copy(this.a).lerp(this.b,e[this.indexCount])}toJSON(){return{type:`ColorRange`,a:xe(this.a),b:xe(this.b)}}static fromJSON(t){return new e(Se(t.a),Se(t.b))}clone(){return new e(this.a.clone(),this.b.clone())}},De=class e{constructor(e,t){this.subType=t,this.type=`function`,this.keys=e}findKey(e){let t=0,n=0,r=this.keys.length-1;for(;n+1<r;)if(t=Math.floor((n+r)/2),e<this.getStartX(t))r=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let t=n;t<=r;t++)if(e>=this.getStartX(t)&&e<=this.getEndX(t))return t;return-1}getStartX(e){return this.keys[e][1]}getEndX(e){return e+1<this.keys.length?this.keys[e+1][1]:1}genValue(e,t){let n=this.findKey(t);return this.subType===`Number`?n===-1?this.keys[0][0]:n+1>=this.keys.length?this.keys[this.keys.length-1][0]:(this.keys[n+1][0]-this.keys[n][0])*((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))+this.keys[n][0]:n===-1?e.copy(this.keys[0][0]):n+1>=this.keys.length?e.copy(this.keys[this.keys.length-1][0]):e.copy(this.keys[n][0]).lerp(this.keys[n+1][0],(t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toJSON(){return this.keys[0][0].constructor.name,{type:`CLinearFunction`,subType:this.subType,keys:this.keys.map(([e,t])=>({value:we(e,this.subType),pos:t}))}}static fromJSON(t){return new e(t.keys.map(e=>[Ce(e.value,t.subType),e.pos]),t.subType)}clone(){return this.subType===`Number`?new e(this.keys.map(([e,t])=>[e,t]),this.subType):new e(this.keys.map(([e,t])=>[e.clone(),t]),this.subType)}},Oe=new L,ke=class e{constructor(e=[[new L(0,0,0),0],[new L(1,1,1),0]],t=[[1,0],[1,1]]){this.type=`function`,this.color=new De(e,`Color`),this.alpha=new De(t,`Number`)}genColor(e,t,n){return this.color.genValue(Oe,n),t.set(Oe.x,Oe.y,Oe.z,this.alpha.genValue(1,n))}toJSON(){return{type:`Gradient`,color:this.color.toJSON(),alpha:this.alpha.toJSON()}}static fromJSON(t){if(t.functions){let n=t.functions.map(e=>[Ee.fromJSON(e.function).a,e.start]);return t.functions.length>0&&n.push([Ee.fromJSON(t.functions[t.functions.length-1].function).b,1]),new e(n.map(e=>[new L(e[0].x,e[0].y,e[0].z),e[1]]),n.map(e=>[e[0].w,e[1]]))}else{let n=new e;return n.alpha=De.fromJSON(t.alpha),n.color=De.fromJSON(t.color),n}}clone(){let t=new e;return t.alpha=this.alpha.clone(),t.color=this.color.clone(),t}startGen(e){}},Ae=new U,je=class e{constructor(e,t){this.indexCount=0,this.type=`function`,this.gradient1=e,this.gradient2=t}startGen(e){this.indexCount=e.length,e.push(Math.random())}genColor(e,t,n){return this.gradient1.genColor(e,t,n),this.gradient2.genColor(e,Ae,n),e&&e[this.indexCount]!==void 0?t.lerp(Ae,e[this.indexCount]):t.lerp(Ae,Math.random()),t}toJSON(){return{type:`RandomColorBetweenGradient`,gradient1:this.gradient1.toJSON(),gradient2:this.gradient2.toJSON()}}static fromJSON(t){return new e(ke.fromJSON(t.gradient1),ke.fromJSON(t.gradient2))}clone(){return new e(this.gradient1.clone(),this.gradient2.clone())}},Me=class e{constructor(e){this.color=e,this.type=`value`}startGen(e){}genColor(e,t){return t.copy(this.color)}toJSON(){return{type:`ConstantColor`,color:xe(this.color)}}static fromJSON(t){return new e(Se(t.color))}clone(){return new e(this.color.clone())}};function Ne(e){switch(e.type){case`ConstantColor`:return Me.fromJSON(e);case`ColorRange`:return Ee.fromJSON(e);case`RandomColor`:return Te.fromJSON(e);case`Gradient`:return ke.fromJSON(e);case`RandomColorBetweenGradient`:return je.fromJSON(e);default:return new Me(new U(1,1,1,1))}}var K=class e{constructor(e){this.value=e,this.type=`value`}startGen(e){}genValue(e){return this.value}toJSON(){return{type:`ConstantValue`,value:this.value}}static fromJSON(t){return new e(t.value)}clone(){return new e(this.value)}},Pe=class e{constructor(e,t){this.a=e,this.b=t,this.indexCount=-1,this.type=`value`}startGen(e){this.indexCount=e.length,e.push(Math.random())}genValue(e){return this.indexCount===-1&&this.startGen(e),se.lerp(this.a,this.b,e[this.indexCount])}toJSON(){return{type:`IntervalValue`,a:this.a,b:this.b}}static fromJSON(t){return new e(t.a,t.b)}clone(){return new e(this.a,this.b)}},Fe=class{constructor(){this.functions=[]}findFunction(e){let t=0,n=0,r=this.functions.length-1;for(;n+1<r;)if(t=Math.floor((n+r)/2),e<this.getStartX(t))r=t-1;else if(e>this.getEndX(t))n=t+1;else return t;for(let t=n;t<=r;t++)if(e>=this.functions[t][1]&&e<=this.getEndX(t))return t;return-1}getStartX(e){return this.functions[e][1]}setStartX(e,t){e>0&&(this.functions[e][1]=t)}getEndX(e){return e+1<this.functions.length?this.functions[e+1][1]:1}setEndX(e,t){e+1<this.functions.length&&(this.functions[e+1][1]=t)}insertFunction(e,t){let n=this.findFunction(e);this.functions.splice(n+1,0,[t,e])}removeFunction(e){return this.functions.splice(e,1)[0][0]}getFunction(e){return this.functions[e][0]}setFunction(e,t){this.functions[e][0]=t}get numOfFunctions(){return this.functions.length}},Ie=class e extends Fe{constructor(e=[[new be(0,1/3,1/3*2,1),0]]){super(),this.type=`function`,this.functions=e}genValue(e,t=0){let n=this.findFunction(t);return n===-1?0:this.functions[n][0].genValue((t-this.getStartX(n))/(this.getEndX(n)-this.getStartX(n)))}toSVG(e,t){if(t<1)return``;let n=[`M`,0,this.functions[0][0].p[0]].join(` `);for(let r=1/t;r<=1;r+=1/t)n=[n,`L`,r*e,this.genValue(void 0,r)].join(` `);return n}toJSON(){return{type:`PiecewiseBezier`,functions:this.functions.map(([e,t])=>({function:e.toJSON(),start:t}))}}static fromJSON(t){return new e(t.functions.map(e=>[be.fromJSON(e.function),e.start]))}clone(){return new e(this.functions.map(([e,t])=>[e.clone(),t]))}startGen(e){}};function q(e){switch(e.type){case`ConstantValue`:return K.fromJSON(e);case`IntervalValue`:return Pe.fromJSON(e);case`PiecewiseBezier`:return Ie.fromJSON(e);default:return new K(0)}}var Le=class e{constructor(){this.indexCount=0,this.type=`rotation`}startGen(e){this.indexCount=e.length,e.push(new I);let t,n,r,i,a,o;do t=Math.random()*2-1,n=Math.random()*2-1,r=t*t+n*n;while(r>1);do i=Math.random()*2-1,a=Math.random()*2-1,o=i*i+a*a;while(o>1);let s=Math.sqrt((1-r)/o);e[this.indexCount].set(t,n,s*i,s*a)}genValue(e,t,n,r){return this.indexCount===-1&&this.startGen(e),t.copy(e[this.indexCount]),t}toJSON(){return{type:`RandomQuat`}}static fromJSON(t){return new e}clone(){return new e}},Re=class e{constructor(e,t){this.axis=e,this.angle=t,this.type=`rotation`}startGen(e){this.angle.startGen(e)}genValue(e,t,n,r){return t.setFromAxisAngle(this.axis,this.angle.genValue(e,r)*n)}toJSON(){return{type:`AxisAngle`,axis:{x:this.axis.x,y:this.axis.y,z:this.axis.z},angle:this.angle.toJSON()}}static fromJSON(t){return new e(new L(t.axis.x,t.axis.y,t.axis.z),q(t.angle))}clone(){return new e(this.axis.clone(),this.angle.clone())}},ze=class e{constructor(e,t,n,r){this.angleX=e,this.angleY=t,this.angleZ=n,this.type=`rotation`,this.eular=new _e(0,0,0,r)}startGen(e){this.angleX.startGen(e),this.angleY.startGen(e),this.angleZ.startGen(e)}genValue(e,t,n,r){return this.eular.set(this.angleX.genValue(e,r)*n,this.angleY.genValue(e,r)*n,this.angleZ.genValue(e,r)*n),t.setFromEuler(this.eular)}toJSON(){return{type:`Euler`,angleX:this.angleX.toJSON(),angleY:this.angleY.toJSON(),angleZ:this.angleZ.toJSON(),eulerOrder:this.eular.order}}static fromJSON(t){return new e(q(t.angleX),q(t.angleY),q(t.angleZ),t.eulerOrder)}clone(){return new e(this.angleX,this.angleY,this.angleZ,this.eular.order)}};function Be(e){switch(e.type){case`AxisAngle`:return Re.fromJSON(e);case`Euler`:return ze.fromJSON(e);case`RandomQuat`:return Le.fromJSON(e);default:return new Le}}var Ve=class e{constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type=`vec3function`}startGen(e){this.x.startGen(e),this.y.startGen(e),this.z.startGen(e)}genValue(e,t,n){return t.set(this.x.genValue(e,n),this.y.genValue(e,n),this.z.genValue(e,n))}toJSON(){return{type:`Vector3Function`,x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(t){return new e(q(t.x),q(t.y),q(t.z))}clone(){return new e(this.x,this.y,this.z)}};function He(e){switch(e.type){case`Vector3Function`:return Ve.fromJSON(e);default:return new Ve(new K(0),new K(0),new K(0))}}function Ue(e){switch(e.type){case`ConstantValue`:case`IntervalValue`:case`PiecewiseBezier`:return q(e);case`AxisAngle`:case`RandomQuat`:case`Euler`:return Be(e);case`Vector3Function`:return He(e);default:return new K(0)}}var We=class e{constructor(e={}){this.type=`cone`,this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.angle=e.angle??Math.PI/6,this.mode=e.mode??G.Random,this.spread=e.spread??0,this.speed=e.speed??new K(1),this.memory=[]}update(e,t){G.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){let n=ye(this.mode,this.currentValue,this.spread,t),r=se.lerp(1-this.thickness,1,Math.random()),i=n*this.arc,a=Math.sqrt(r),o=Math.sin(i),s=Math.cos(i);e.position.x=a*s,e.position.y=a*o,e.position.z=0;let c=this.angle*a;e.velocity.set(0,0,Math.cos(c)).addScaledVector(e.position,Math.sin(c)).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius)}toJSON(){return{type:`cone`,radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(t){return new e({radius:t.radius,arc:t.arc,thickness:t.thickness,angle:t.angle,mode:t.mode,speed:t.speed?q(t.speed):void 0,spread:t.spread})}clone(){return new e({radius:this.radius,arc:this.arc,thickness:this.thickness,angle:this.angle,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}},Ge=class e{constructor(e={}){this.type=`circle`,this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??G.Random,this.spread=e.spread??0,this.speed=e.speed??new K(1),this.memory=[]}update(e,t){this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t}initialize(e,t){let n=ye(this.mode,this.currentValue,this.spread,t),r=se.lerp(1-this.thickness,1,Math.random()),i=n*this.arc;e.position.x=Math.cos(i),e.position.y=Math.sin(i),e.position.z=0,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*r)}toJSON(){return{type:`circle`,radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(t){return new e({radius:t.radius,arc:t.arc,thickness:t.thickness,mode:t.mode,speed:t.speed?q(t.speed):void 0,spread:t.spread})}clone(){return new e({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}};function Ke(e,t){return Math.floor(Math.random()*(t-e))+e}var qe=new L(0,1,0),Je=new L(0,0,0),Ye=new L(1,1,1),Xe=new L(0,0,1),Ze=class e{constructor(e={}){this.type=`donut`,this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.donutRadius=e.donutRadius??this.radius*.2,this.mode=e.mode??G.Random,this.spread=e.spread??0,this.speed=e.speed??new K(1),this.memory=[],this._m1=new R}update(e,t){G.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){let n=ye(this.mode,this.currentValue,this.spread,t),r=Math.random(),i=se.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=r*Math.PI*2,s=Math.sin(a),c=Math.cos(a);e.position.x=this.radius*c,e.position.y=this.radius*s,e.position.z=0,e.velocity.z=this.donutRadius*i*Math.sin(o),e.velocity.x=this.donutRadius*i*Math.cos(o)*c,e.velocity.y=this.donutRadius*i*Math.cos(o)*s,e.position.add(e.velocity),e.velocity.normalize().multiplyScalar(e.startSpeed),e.rotation instanceof I&&(this._m1.lookAt(Je,e.velocity,qe),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:`donut`,radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(t){return new e({radius:t.radius,arc:t.arc,thickness:t.thickness,donutRadius:t.donutRadius,mode:t.mode,speed:t.speed?q(t.speed):void 0,spread:t.spread})}clone(){return new e({radius:this.radius,arc:this.arc,thickness:this.thickness,donutRadius:this.donutRadius,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}},Qe=class e{constructor(){this.type=`point`,this._m1=new R}update(e,t){}initialize(e){let t=Math.random(),n=Math.random(),r=t*Math.PI*2,i=Math.acos(2*n-1),a=Math.cbrt(Math.random()),o=Math.sin(r),s=Math.cos(r),c=Math.sin(i),l=Math.cos(i);e.velocity.x=a*c*s,e.velocity.y=a*c*o,e.velocity.z=a*l,e.velocity.multiplyScalar(e.startSpeed),e.position.setScalar(0),e.rotation instanceof I&&(this._m1.lookAt(Je,e.position,qe),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:`point`}}static fromJSON(t){return new e}clone(){return new e}},$e=class e{constructor(e={}){this.type=`sphere`,this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??G.Random,this.spread=e.spread??0,this.speed=e.speed??new K(1),this.memory=[],this._m1=new R}update(e,t){G.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){let n=ye(this.mode,this.currentValue,this.spread,t),r=Math.random(),i=se.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(2*r-1),s=Math.sin(a),c=Math.cos(a),l=Math.sin(o),u=Math.cos(o);e.position.x=l*c,e.position.y=l*s,e.position.z=u,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*i),e.rotation instanceof I&&(this._m1.lookAt(Je,e.position,qe),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:`sphere`,radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(t){return new e({radius:t.radius,arc:t.arc,thickness:t.thickness,mode:t.mode,speed:t.speed?q(t.speed):void 0,spread:t.spread})}clone(){return new e({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}},et=class e{constructor(e={}){this.type=`sphere`,this.currentValue=0,this.radius=e.radius??10,this.arc=e.arc??2*Math.PI,this.thickness=e.thickness??1,this.mode=e.mode??G.Random,this.spread=e.spread??0,this.speed=e.speed??new K(1),this.memory=[],this._m1=new R}update(e,t){G.Random!=this.mode&&(this.currentValue+=this.speed.genValue(this.memory,e.emissionState.time/e.duration)*t)}initialize(e,t){let n=ye(this.mode,this.currentValue,this.spread,t),r=Math.random(),i=se.lerp(1-this.thickness,1,Math.random()),a=n*this.arc,o=Math.acos(r),s=Math.sin(a),c=Math.cos(a),l=Math.sin(o),u=Math.cos(o);e.position.x=l*c,e.position.y=l*s,e.position.z=u,e.velocity.copy(e.position).multiplyScalar(e.startSpeed),e.position.multiplyScalar(this.radius*i),e.rotation instanceof I&&(this._m1.lookAt(Je,e.position,qe),e.rotation.setFromRotationMatrix(this._m1))}toJSON(){return{type:`hemisphere`,radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,spread:this.spread,speed:this.speed.toJSON()}}static fromJSON(t){return new e({radius:t.radius,arc:t.arc,thickness:t.thickness,mode:t.mode,speed:t.speed?q(t.speed):void 0,spread:t.spread})}clone(){return new e({radius:this.radius,arc:this.arc,thickness:this.thickness,mode:this.mode,speed:this.speed.clone(),spread:this.spread})}},tt=class e{constructor(e={}){this.type=`grid`,this.width=e.width??1,this.height=e.height??1,this.column=e.column??10,this.row=e.row??10}initialize(e){let t=Math.floor(Math.random()*this.row),n=Math.floor(Math.random()*this.column);e.position.x=n*this.width/this.column-this.width/2,e.position.y=t*this.height/this.row-this.height/2,e.position.z=0,e.velocity.set(0,0,e.startSpeed)}toJSON(){return{type:`grid`,width:this.width,height:this.height,column:this.column,row:this.row}}static fromJSON(t){return new e(t)}clone(){return new e({width:this.width,height:this.height,column:this.column,row:this.row})}update(e,t){}},nt={circle:{type:`circle`,params:[[`radius`,[`number`]],[`arc`,[`radian`]],[`thickness`,[`number`]],[`mode`,[`emitterMode`]],[`spread`,[`number`]],[`speed`,[`valueFunc`]]],constructor:Ge,loadJSON:Ge.fromJSON},cone:{type:`cone`,params:[[`radius`,[`number`]],[`arc`,[`radian`]],[`thickness`,[`number`]],[`angle`,[`radian`]],[`mode`,[`emitterMode`]],[`spread`,[`number`]],[`speed`,[`valueFunc`]]],constructor:We,loadJSON:We.fromJSON},donut:{type:`donut`,params:[[`radius`,[`number`]],[`arc`,[`radian`]],[`thickness`,[`number`]],[`donutRadius`,[`number`]],[`mode`,[`emitterMode`]],[`spread`,[`number`]],[`speed`,[`valueFunc`]]],constructor:Ze,loadJSON:Ze.fromJSON},point:{type:`point`,params:[],constructor:Qe,loadJSON:Qe.fromJSON},sphere:{type:`sphere`,params:[[`radius`,[`number`]],[`arc`,[`radian`]],[`thickness`,[`number`]],[`angle`,[`radian`]],[`mode`,[`emitterMode`]],[`spread`,[`number`]],[`speed`,[`valueFunc`]]],constructor:$e,loadJSON:$e.fromJSON},hemisphere:{type:`hemisphere`,params:[[`radius`,[`number`]],[`arc`,[`radian`]],[`thickness`,[`number`]],[`angle`,[`radian`]],[`mode`,[`emitterMode`]],[`spread`,[`number`]],[`speed`,[`valueFunc`]]],constructor:et,loadJSON:et.fromJSON},grid:{type:`grid`,params:[[`width`,[`number`]],[`height`,[`number`]],[`rows`,[`number`]],[`column`,[`number`]]],constructor:tt,loadJSON:tt.fromJSON}};function rt(e,t){return nt[e.type].loadJSON(e,t)}var it=class e{constructor(e){this.color=e,this.type=`ColorOverLife`}initialize(e){this.color.startGen(e.memory)}update(e,t){this.color.genColor(e.memory,e.color,e.age/e.life),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON()}}static fromJSON(t){return new e(Ne(t.color))}clone(){return new e(this.color.clone())}reset(){}},at=class e{constructor(e){this.angularVelocity=e,this.type=`RotationOverLife`}initialize(e){typeof e.rotation==`number`&&this.angularVelocity.startGen(e.memory)}update(e,t){typeof e.rotation==`number`&&(e.rotation+=t*this.angularVelocity.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(t){return new e(q(t.angularVelocity))}frameUpdate(e){}clone(){return new e(this.angularVelocity.clone())}reset(){}},ot=class e{constructor(e){this.angularVelocity=e,this.type=`Rotation3DOverLife`,this.tempQuat=new I,this.tempQuat2=new I}initialize(e){e.rotation instanceof I&&(e.angularVelocity=new I,this.angularVelocity.startGen(e.memory))}update(e,t){e.rotation instanceof I&&(this.angularVelocity.genValue(e.memory,this.tempQuat,t,e.age/e.life),e.rotation.multiply(this.tempQuat))}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON()}}static fromJSON(t){return new e(Be(t.angularVelocity))}frameUpdate(e){}clone(){return new e(this.angularVelocity.clone())}reset(){}},st=class e{initialize(e,t){this.ps=t,this.x.startGen(e.memory),this.y.startGen(e.memory),this.z.startGen(e.memory)}constructor(e,t,n){this.x=e,this.y=t,this.z=n,this.type=`ForceOverLife`,this._temp=new L,this._tempScale=new L,this._tempQ=new I}update(e,t){this._temp.set(this.x.genValue(e.memory,e.age/e.life),this.y.genValue(e.memory,e.age/e.life),this.z.genValue(e.memory,e.age/e.life)),this.ps.worldSpace||this._temp.multiply(this._tempScale).applyQuaternion(this._tempQ),e.velocity.addScaledVector(this._temp,t)}toJSON(){return{type:this.type,x:this.x.toJSON(),y:this.y.toJSON(),z:this.z.toJSON()}}static fromJSON(t){return new e(q(t.x),q(t.y),q(t.z))}frameUpdate(e){if(this.ps&&!this.ps.worldSpace){let e=this._temp,t=this._tempQ,n=this._tempScale;this.ps.emitter.matrixWorld.decompose(e,t,n),t.invert(),n.set(1/n.x,1/n.y,1/n.z)}}clone(){return new e(this.x.clone(),this.y.clone(),this.z.clone())}reset(){}},ct=class e{initialize(e){this.size.startGen(e.memory)}constructor(e){this.size=e,this.type=`SizeOverLife`}update(e){this.size instanceof Ve?this.size.genValue(e.memory,e.size,e.age/e.life).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,e.age/e.life))}toJSON(){return{type:this.type,size:this.size.toJSON()}}static fromJSON(t){return new e(Ue(t.size))}frameUpdate(e){}clone(){return new e(this.size.clone())}reset(){}},lt=class e{initialize(e){this.speed.startGen(e.memory)}constructor(e){this.speed=e,this.type=`SpeedOverLife`}update(e){e.speedModifier=this.speed.genValue(e.memory,e.age/e.life)}toJSON(){return{type:this.type,speed:this.speed.toJSON()}}static fromJSON(t){return new e(q(t.speed))}frameUpdate(e){}clone(){return new e(this.speed.clone())}reset(){}},ut=class e{constructor(e){this.frame=e,this.type=`FrameOverLife`}initialize(e){this.frame.startGen(e.memory)}update(e,t){this.frame instanceof Ie&&(e.uvTile=this.frame.genValue(e.memory,e.age/e.life))}frameUpdate(e){}toJSON(){return{type:this.type,frame:this.frame.toJSON()}}static fromJSON(t){return new e(q(t.frame))}clone(){return new e(this.frame.clone())}reset(){}},dt=class e{constructor(e,t=new L(0,1,0)){this.orbitSpeed=e,this.axis=t,this.type=`OrbitOverLife`,this.temp=new L,this.rotation=new I}initialize(e){this.orbitSpeed.startGen(e.memory)}update(e,t){this.temp.copy(e.position).projectOnVector(this.axis),this.rotation.setFromAxisAngle(this.axis,this.orbitSpeed.genValue(e.memory,e.age/e.life)*t),e.position.sub(this.temp),e.position.applyQuaternion(this.rotation),e.position.add(this.temp)}frameUpdate(e){}toJSON(){return{type:this.type,orbitSpeed:this.orbitSpeed.toJSON(),axis:[this.axis.x,this.axis.y,this.axis.z]}}static fromJSON(t){return new e(q(t.orbitSpeed),t.axis?new L(t.axis[0],t.axis[1],t.axis[2]):void 0)}clone(){return new e(this.orbitSpeed.clone())}reset(){}},ft=class{constructor(e){this.data=e,this.next=null,this.prev=null}hasPrev(){return this.prev!==null}hasNext(){return this.next!==null}},pt=class{constructor(){this.length=0,this.head=this.tail=null}isEmpty(){return this.head===null}clear(){this.length=0,this.head=this.tail=null}front(){return this.head===null?null:this.head.data}back(){return this.tail===null?null:this.tail.data}dequeue(){if(this.head){let e=this.head.data;return this.head=this.head.next,this.head?this.head.prev=null:this.tail=null,this.length--,e}}pop(){if(this.tail){let e=this.tail.data;return this.tail=this.tail.prev,this.tail?this.tail.next=null:this.head=null,this.length--,e}}queue(e){let t=new ft(e);this.tail||=t,this.head&&(this.head.prev=t,t.next=this.head),this.head=t,this.length++}push(e){let t=new ft(e);this.head||=t,this.tail&&(this.tail.next=t,t.prev=this.tail),this.tail=t,this.length++}insertBefore(e,t){let n=new ft(t);n.next=e,n.prev=e.prev,n.prev!==null&&(n.prev.next=n),n.next.prev=n,e==this.head&&(this.head=n),this.length++}remove(e){if(this.head===null||this.tail===null)return;let t=this.head;for(e===this.head.data&&(this.head=this.head.next),e===this.tail.data&&(this.tail=this.tail.prev);t.next!==null&&t.data!==e;)t=t.next;t.data===e&&(t.prev!==null&&(t.prev.next=t.next),t.next!==null&&(t.next.prev=t.prev),this.length--)}*values(){let e=this.head;for(;e!==null;)yield e.data,e=e.next}},mt=class{constructor(){this.startSpeed=0,this.startColor=new U,this.startSize=new L(1,1,1),this.position=new L,this.velocity=new L,this.age=0,this.life=1,this.size=new L(1,1,1),this.speedModifier=1,this.rotation=0,this.color=new U,this.uvTile=0,this.memory=[]}get died(){return this.age>=this.life}reset(){this.memory.length=0}},ht=class{constructor(e,t,n){this.position=e,this.size=t,this.color=n}},gt=class{constructor(){this.startSpeed=0,this.startColor=new U,this.startSize=new L(1,1,1),this.position=new L,this.velocity=new L,this.age=0,this.life=1,this.size=new L(1,1,1),this.length=100,this.speedModifier=1,this.color=new U,this.previous=new pt,this.uvTile=0,this.memory=[]}update(){for(this.age<=this.life?this.previous.push(new ht(this.position.clone(),this.size.x,this.color.clone())):this.previous.length>0&&this.previous.dequeue();this.previous.length>this.length;)this.previous.dequeue()}get died(){return this.age>=this.life}reset(){this.memory.length=0,this.previous.clear()}},_t=class e{initialize(e){this.width.startGen(e.memory)}constructor(e){this.width=e,this.type=`WidthOverLength`}update(e){if(e instanceof gt){let t=e.previous.values();for(let n=0;n<e.previous.length;n++){let r=t.next();r.value.size=this.width.genValue(e.memory,(e.previous.length-n)/e.length)}}}frameUpdate(e){}toJSON(){return{type:this.type,width:this.width.toJSON()}}static fromJSON(t){return new e(q(t.width))}clone(){return new e(this.width.clone())}reset(){}},vt=class e{constructor(e,t){this.direction=e,this.magnitude=t,this.type=`ApplyForce`,this.memory={data:[],dataCount:0},this.magnitudeValue=this.magnitude.genValue(this.memory)}initialize(e){}update(e,t){e.velocity.addScaledVector(this.direction,this.magnitudeValue*t)}frameUpdate(e){this.magnitudeValue=this.magnitude.genValue(this.memory)}toJSON(){return{type:this.type,direction:[this.direction.x,this.direction.y,this.direction.z],magnitude:this.magnitude.toJSON()}}static fromJSON(t){return new e(new L(t.direction[0],t.direction[1],t.direction[2]),q(t.magnitude??t.force))}clone(){return new e(this.direction.clone(),this.magnitude.clone())}reset(){}},yt=class e{constructor(e,t){this.center=e,this.magnitude=t,this.type=`GravityForce`,this.temp=new L}initialize(e){}update(e,t){this.temp.copy(this.center).sub(e.position).normalize(),e.velocity.addScaledVector(this.temp,this.magnitude/e.position.distanceToSquared(this.center)*t)}frameUpdate(e){}toJSON(){return{type:this.type,center:[this.center.x,this.center.y,this.center.z],magnitude:this.magnitude}}static fromJSON(t){return new e(new L(t.center[0],t.center[1],t.center[2]),t.magnitude)}clone(){return new e(this.center.clone(),this.magnitude)}reset(){}},bt=class e{constructor(e){this.angle=e,this.type=`ChangeEmitDirection`,this._temp=new L,this._q=new I,this.memory={data:[],dataCount:0}}initialize(e){let t=e.velocity.length();t!=0&&(e.velocity.normalize(),e.velocity.x===0&&e.velocity.y===0?this._temp.set(0,e.velocity.z,0):this._temp.set(-e.velocity.y,e.velocity.x,0),this.angle.startGen(this.memory),this._q.setFromAxisAngle(this._temp.normalize(),this.angle.genValue(this.memory)),this._temp.copy(e.velocity),e.velocity.applyQuaternion(this._q),this._q.setFromAxisAngle(this._temp,Math.random()*Math.PI*2),e.velocity.applyQuaternion(this._q),e.velocity.setLength(t))}update(e,t){}frameUpdate(e){}toJSON(){return{type:this.type,angle:this.angle.toJSON()}}static fromJSON(t){return new e(q(t.angle))}clone(){return new e(this.angle)}reset(){}},xt;(function(e){e[e.Death=0]=`Death`,e[e.Birth=1]=`Birth`,e[e.Frame=2]=`Frame`})(xt||={});var St=class e{constructor(e,t,n,r=xt.Frame,i=1){this.particleSystem=e,this.useVelocityAsBasis=t,this.subParticleSystem=n,this.mode=r,this.emitProbability=i,this.type=`EmitSubParticleSystem`,this.q_=new I,this.v_=new L,this.v2_=new L,this.subEmissions=[],this.subParticleSystem&&this.subParticleSystem.system&&(this.subParticleSystem.system.onlyUsedByOther=!0)}initialize(e){}update(e,t){(this.mode===xt.Frame||this.mode===xt.Birth&&e.age===0||this.mode===xt.Death&&e.age+t>=e.life)&&this.emit(e,t)}emit(e,t){if(!this.subParticleSystem||Math.random()>this.emitProbability)return;let n=new R;this.setMatrixFromParticle(n,e),this.subEmissions.push({burstParticleCount:0,burstParticleIndex:0,isBursting:!1,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,matrix:n,travelDistance:0,particle:e})}frameUpdate(e){if(this.subParticleSystem)for(let t=0;t<this.subEmissions.length;t++)if(this.subEmissions[t].time>=this.subParticleSystem.system.duration)this.subEmissions[t]=this.subEmissions[this.subEmissions.length-1],this.subEmissions.length=this.subEmissions.length-1,t--;else{let n=this.subEmissions[t];n.particle&&n.particle.age<n.particle.life?this.setMatrixFromParticle(n.matrix,n.particle):n.particle=void 0,this.subParticleSystem.system.emit(e,n,n.matrix)}}toJSON(){return{type:this.type,subParticleSystem:this.subParticleSystem?this.subParticleSystem.uuid:``,useVelocityAsBasis:this.useVelocityAsBasis,mode:this.mode,emitProbability:this.emitProbability}}static fromJSON(t,n){return new e(n,t.useVelocityAsBasis,t.subParticleSystem,t.mode,t.emitProbability)}clone(){return new e(this.particleSystem,this.useVelocityAsBasis,this.subParticleSystem,this.mode,this.emitProbability)}reset(){}setMatrixFromParticle(e,t){let n;if(t.rotation===void 0||this.useVelocityAsBasis)if(t.velocity.x===0&&t.velocity.y===0&&(t.velocity.z===1||t.velocity.z===0))e.set(1,0,0,t.position.x,0,1,0,t.position.y,0,0,1,t.position.z,0,0,0,1);else{this.v_.copy(Xe).cross(t.velocity),this.v2_.copy(t.velocity).cross(this.v_);let n=this.v_.length(),r=this.v2_.length();e.set(this.v_.x/n,this.v2_.x/r,t.velocity.x,t.position.x,this.v_.y/n,this.v2_.y/r,t.velocity.y,t.position.y,this.v_.z/n,this.v2_.z/r,t.velocity.z,t.position.z,0,0,0,1)}else t.rotation instanceof I?n=t.rotation:(this.q_.setFromAxisAngle(Xe,t.rotation),n=this.q_),e.compose(t.position,n,Ye);this.particleSystem.worldSpace||e.multiplyMatrices(this.particleSystem.emitter.matrixWorld,e)}},Ct=.5*(Math.sqrt(3)-1),wt=(3-Math.sqrt(3))/6,Tt=1/3,J=1/6,Et=(Math.sqrt(5)-1)/4,Y=(5-Math.sqrt(5))/20,X=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Z=new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),Dt=class{constructor(e=Math.random){let t=typeof e==`function`?e:kt(e);this.p=Ot(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(let e=0;e<512;e++)this.perm[e]=this.p[e&255],this.permMod12[e]=this.perm[e]%12}noise2D(e,t){let n=this.permMod12,r=this.perm,i=0,a=0,o=0,s=(e+t)*Ct,c=Math.floor(e+s),l=Math.floor(t+s),u=(c+l)*wt,d=c-u,f=l-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+wt,v=m-g+wt,y=p-1+2*wt,b=m-1+2*wt,x=c&255,S=l&255,C=.5-p*p-m*m;if(C>=0){let e=n[x+r[S]]*3;C*=C,i=C*C*(X[e]*p+X[e+1]*m)}let w=.5-_*_-v*v;if(w>=0){let e=n[x+h+r[S+g]]*3;w*=w,a=w*w*(X[e]*_+X[e+1]*v)}let T=.5-y*y-b*b;if(T>=0){let e=n[x+1+r[S+1]]*3;T*=T,o=T*T*(X[e]*y+X[e+1]*b)}return 70*(i+a+o)}noise3D(e,t,n){let r=this.permMod12,i=this.perm,a,o,s,c,l=(e+t+n)*Tt,u=Math.floor(e+l),d=Math.floor(t+l),f=Math.floor(n+l),p=(u+d+f)*J,m=u-p,h=d-p,g=f-p,_=e-m,v=t-h,y=n-g,b,x,S,C,w,T;_>=v?v>=y?(b=1,x=0,S=0,C=1,w=1,T=0):_>=y?(b=1,x=0,S=0,C=1,w=0,T=1):(b=0,x=0,S=1,C=1,w=0,T=1):v<y?(b=0,x=0,S=1,C=0,w=1,T=1):_<y?(b=0,x=1,S=0,C=0,w=1,T=1):(b=0,x=1,S=0,C=1,w=1,T=0);let E=_-b+J,D=v-x+J,O=y-S+J,ee=_-C+2*J,k=v-w+2*J,A=y-T+2*J,j=_-1+3*J,M=v-1+3*J,N=y-1+3*J,P=u&255,F=d&255,te=f&255,ne=.6-_*_-v*v-y*y;if(ne<0)a=0;else{let e=r[P+i[F+i[te]]]*3;ne*=ne,a=ne*ne*(X[e]*_+X[e+1]*v+X[e+2]*y)}let re=.6-E*E-D*D-O*O;if(re<0)o=0;else{let e=r[P+b+i[F+x+i[te+S]]]*3;re*=re,o=re*re*(X[e]*E+X[e+1]*D+X[e+2]*O)}let ie=.6-ee*ee-k*k-A*A;if(ie<0)s=0;else{let e=r[P+C+i[F+w+i[te+T]]]*3;ie*=ie,s=ie*ie*(X[e]*ee+X[e+1]*k+X[e+2]*A)}let ae=.6-j*j-M*M-N*N;if(ae<0)c=0;else{let e=r[P+1+i[F+1+i[te+1]]]*3;ae*=ae,c=ae*ae*(X[e]*j+X[e+1]*M+X[e+2]*N)}return 32*(a+o+s+c)}noise4D(e,t,n,r){let i=this.perm,a,o,s,c,l,u=(e+t+n+r)*Et,d=Math.floor(e+u),f=Math.floor(t+u),p=Math.floor(n+u),m=Math.floor(r+u),h=(d+f+p+m)*Y,g=d-h,_=f-h,v=p-h,y=m-h,b=e-g,x=t-_,S=n-v,C=r-y,w=0,T=0,E=0,D=0;b>x?w++:T++,b>S?w++:E++,b>C?w++:D++,x>S?T++:E++,x>C?T++:D++,S>C?E++:D++;let O=+(w>=3),ee=+(T>=3),k=+(E>=3),A=+(D>=3),j=+(w>=2),M=+(T>=2),N=+(E>=2),P=+(D>=2),F=+(w>=1),te=+(T>=1),ne=+(E>=1),re=+(D>=1),ie=b-O+Y,ae=x-ee+Y,oe=S-k+Y,se=C-A+Y,I=b-j+2*Y,L=x-M+2*Y,ce=S-N+2*Y,le=C-P+2*Y,ue=b-F+3*Y,R=x-te+3*Y,de=S-ne+3*Y,z=C-re+3*Y,fe=b-1+4*Y,pe=x-1+4*Y,B=S-1+4*Y,me=C-1+4*Y,V=d&255,he=f&255,ge=p&255,_e=m&255,H=.6-b*b-x*x-S*S-C*C;if(H<0)a=0;else{let e=i[V+i[he+i[ge+i[_e]]]]%32*4;H*=H,a=H*H*(Z[e]*b+Z[e+1]*x+Z[e+2]*S+Z[e+3]*C)}let U=.6-ie*ie-ae*ae-oe*oe-se*se;if(U<0)o=0;else{let e=i[V+O+i[he+ee+i[ge+k+i[_e+A]]]]%32*4;U*=U,o=U*U*(Z[e]*ie+Z[e+1]*ae+Z[e+2]*oe+Z[e+3]*se)}let W=.6-I*I-L*L-ce*ce-le*le;if(W<0)s=0;else{let e=i[V+j+i[he+M+i[ge+N+i[_e+P]]]]%32*4;W*=W,s=W*W*(Z[e]*I+Z[e+1]*L+Z[e+2]*ce+Z[e+3]*le)}let ve=.6-ue*ue-R*R-de*de-z*z;if(ve<0)c=0;else{let e=i[V+F+i[he+te+i[ge+ne+i[_e+re]]]]%32*4;ve*=ve,c=ve*ve*(Z[e]*ue+Z[e+1]*R+Z[e+2]*de+Z[e+3]*z)}let G=.6-fe*fe-pe*pe-B*B-me*me;if(G<0)l=0;else{let e=i[V+1+i[he+1+i[ge+1+i[_e+1]]]]%32*4;G*=G,l=G*G*(Z[e]*fe+Z[e+1]*pe+Z[e+2]*B+Z[e+3]*me)}return 27*(a+o+s+c+l)}};function Ot(e){let t=new Uint8Array(256);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}return t}function kt(e){let t=0,n=0,r=0,i=1,a=At();return t=a(` `),n=a(` `),r=a(` `),t-=a(e),t<0&&(t+=1),n-=a(e),n<0&&(n+=1),r-=a(e),r<0&&(r+=1),function(){let e=2091639*t+i*23283064365386963e-26;return t=n,n=r,r=e-(i=e|0)}}function At(){let e=4022871197;return function(t){t=t.toString();for(let n=0;n<t.length;n++){e+=t.charCodeAt(n);let r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}var jt=class e{constructor(e,t,n,r){this.scale=e,this.octaves=t,this.velocityMultiplier=n,this.timeScale=r,this.type=`TurbulenceField`,this.generator=new Dt,this.timeOffset=new L,this.temp=new L,this.temp2=new L,this.timeOffset.x=Math.random()/this.scale.x*this.timeScale.x,this.timeOffset.y=Math.random()/this.scale.y*this.timeScale.y,this.timeOffset.z=Math.random()/this.scale.z*this.timeScale.z}initialize(e){}update(e,t){let n=e.position.x/this.scale.x,r=e.position.y/this.scale.y,i=e.position.z/this.scale.z;this.temp.set(0,0,0);let a=1;for(let e=0;e<this.octaves;e++)this.temp2.set(this.generator.noise4D(n*a,r*a,i*a,this.timeOffset.x*a)/a,this.generator.noise4D(n*a,r*a,i*a,this.timeOffset.y*a)/a,this.generator.noise4D(n*a,r*a,i*a,this.timeOffset.z*a)/a),this.temp.add(this.temp2),a*=2;this.temp.multiply(this.velocityMultiplier),e.velocity.addScaledVector(this.temp,t)}toJSON(){return{type:this.type,scale:[this.scale.x,this.scale.y,this.scale.z],octaves:this.octaves,velocityMultiplier:[this.velocityMultiplier.x,this.velocityMultiplier.y,this.velocityMultiplier.z],timeScale:[this.timeScale.x,this.timeScale.y,this.timeScale.z]}}frameUpdate(e){this.timeOffset.x+=e*this.timeScale.x,this.timeOffset.y+=e*this.timeScale.y,this.timeOffset.z+=e*this.timeScale.z}static fromJSON(t){return new e(new L(t.scale[0],t.scale[1],t.scale[2]),t.octaves,new L(t.velocityMultiplier[0],t.velocityMultiplier[1],t.velocityMultiplier[2]),new L(t.timeScale[0],t.timeScale[1],t.timeScale[2]))}clone(){return new e(this.scale.clone(),this.octaves,this.velocityMultiplier.clone(),this.timeScale.clone())}reset(){}},Q=[],Mt=new L,Nt=new I,Pt=class e{constructor(e,t,n=new K(1),r=new K(0)){if(this.frequency=e,this.power=t,this.positionAmount=n,this.rotationAmount=r,this.type=`Noise`,this.duration=0,Q.length===0)for(let e=0;e<100;e++)Q.push(new Dt)}initialize(e){e.lastPosNoise=new L,typeof e.rotation==`number`?e.lastRotNoise=0:e.lastRotNoise=new I,e.generatorIndex=[Ke(0,100),Ke(0,100),Ke(0,100),Ke(0,100)],this.positionAmount.startGen(e.memory),this.rotationAmount.startGen(e.memory),this.frequency.startGen(e.memory),this.power.startGen(e.memory)}update(e,t){let n=this.frequency.genValue(e.memory,e.age/e.life),r=this.power.genValue(e.memory,e.age/e.life),i=this.positionAmount.genValue(e.memory,e.age/e.life),a=this.rotationAmount.genValue(e.memory,e.age/e.life);i>0&&e.lastPosNoise!==void 0&&(e.position.sub(e.lastPosNoise),Mt.set(Q[e.generatorIndex[0]].noise2D(0,e.age*n)*r*i,Q[e.generatorIndex[1]].noise2D(0,e.age*n)*r*i,Q[e.generatorIndex[2]].noise2D(0,e.age*n)*r*i),e.position.add(Mt),e.lastPosNoise.copy(Mt)),a>0&&e.lastRotNoise!==void 0&&(typeof e.rotation==`number`?(e.rotation-=e.lastRotNoise,e.rotation+=Q[e.generatorIndex[3]].noise2D(0,e.age*n)*Math.PI*r*a):(e.lastRotNoise.invert(),e.rotation.multiply(e.lastRotNoise),Nt.set(Q[e.generatorIndex[0]].noise2D(0,e.age*n)*r*a,Q[e.generatorIndex[1]].noise2D(0,e.age*n)*r*a,Q[e.generatorIndex[2]].noise2D(0,e.age*n)*r*a,Q[e.generatorIndex[3]].noise2D(0,e.age*n)*r*a).normalize(),e.rotation.multiply(Nt),e.lastRotNoise.copy(Nt)))}toJSON(){return{type:this.type,frequency:this.frequency.toJSON(),power:this.power.toJSON(),positionAmount:this.positionAmount.toJSON(),rotationAmount:this.rotationAmount.toJSON()}}frameUpdate(e){this.duration+=e}static fromJSON(t){return new e(q(t.frequency),q(t.power),q(t.positionAmount),q(t.rotationAmount))}clone(){return new e(this.frequency.clone(),this.power.clone(),this.positionAmount.clone(),this.rotationAmount.clone())}reset(){}},Ft=class e{constructor(e=0,t=0,n=new L){this.scaleX=e,this.scaleY=t,this.position=n,this.locations=[]}transform(e,t){e.x=this.locations[t%this.locations.length].x*this.scaleX+this.position.x,e.y=this.locations[t%this.locations.length].y*this.scaleY+this.position.y,e.z=this.position.z}static fromJSON(t){let n=new e(t.scaleX,t.scaleY,new L(t.position[0],t.position[1],t.position[2]));return n.locations=t.locations.map(e=>new H(e.x,e.y)),n}clone(){let t=new e(this.scaleX,this.scaleY,this.position.clone());return t.locations=this.locations.map(e=>e.clone()),t}toJSON(){return{scaleX:this.scaleX,scaleY:this.scaleY,position:this.position,locations:this.locations.map(e=>({x:e.x,y:e.y}))}}fromImage(e,t){let n=document.createElement(`canvas`);n.width=e.width,n.height=e.height;let r=n.getContext(`2d`);if(!r)return;r.drawImage(e,0,0);let i=r.getImageData(0,0,n.width,n.height,{colorSpace:`srgb`});n.remove(),this.locations.length=0;for(let e=0;e<i.height;e++)for(let n=0;n<i.width;n++)i.data[(e*i.width+n)*4+3]>t&&this.locations.push(new H(n,i.height-e))}};function It(e){switch(e.type){case`TextureSequencer`:return Ft.fromJSON(e);default:return new Ft}}var Lt=class e{constructor(e){this.type=`ApplySequences`,this.sequencers=[],this.time=0,this.index=0,this.pCount=0,this.tempV=new L,this.delay=e}initialize(e){e.id=this.pCount,e.dst=new L,e.begin=new L,e.inMotion=!1,this.pCount++}reset(){this.time=0,this.index=0,this.pCount=0}update(t,n){let r=this.sequencers[this.index],i=t.id*this.delay;this.time>=r[0].a+i&&this.time<=r[0].b+i?(t.inMotion||(t.inMotion=!0,t.begin.copy(t.position),r[1].transform(t.dst,t.id)),t.position.lerpVectors(t.begin,t.dst,e.BEZIER.genValue((this.time-r[0].a-i)/(r[0].b-r[0].a)))):this.time>r[0].b+i&&(t.inMotion=!1)}frameUpdate(e){for(;this.index+1<this.sequencers.length&&this.time>=this.sequencers[this.index+1][0].a;)this.index++;this.time+=e}appendSequencer(e,t){this.sequencers.push([e,t])}toJSON(){return{type:this.type,delay:this.delay,sequencers:this.sequencers.map(([e,t])=>({range:e.toJSON(),sequencer:t.toJSON()}))}}static fromJSON(t){let n=new e(t.delay);return t.sequencers.forEach(e=>{n.sequencers.push([q(e.range),It(e.sequencer)])}),n}clone(){let t=new e(this.delay);return t.sequencers=this.sequencers.map(e=>[e[0].clone(),e[1].clone()]),t}};Lt.BEZIER=new be(0,0,1,1);var Rt=class e{constructor(e,t){this.color=e,this.speedRange=t,this.type=`ColorBySpeed`}initialize(e){this.color.startGen(e.memory)}update(e,t){let n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.color.genColor(e.memory,e.color,n),e.color.x*=e.startColor.x,e.color.y*=e.startColor.y,e.color.z*=e.startColor.z,e.color.w*=e.startColor.w}frameUpdate(e){}toJSON(){return{type:this.type,color:this.color.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(t){return new e(Ne(t.color),Pe.fromJSON(t.speedRange))}clone(){return new e(this.color.clone(),this.speedRange.clone())}reset(){}},zt=class e{initialize(e){this.size.startGen(e.memory)}constructor(e,t){this.size=e,this.speedRange=t,this.type=`SizeBySpeed`}update(e){let t=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);this.size instanceof Ve?this.size.genValue(e.memory,e.size,t).multiply(e.startSize):e.size.copy(e.startSize).multiplyScalar(this.size.genValue(e.memory,t))}toJSON(){return{type:this.type,size:this.size.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(t){return new e(Ue(t.size),Pe.fromJSON(t.speedRange))}frameUpdate(e){}clone(){return new e(this.size.clone(),this.speedRange.clone())}reset(){}},Bt=class e{constructor(e,t){this.angularVelocity=e,this.speedRange=t,this.type=`RotationBySpeed`,this.tempQuat=new I}initialize(e){typeof e.rotation==`number`&&this.angularVelocity.startGen(e.memory)}update(e,t){if(typeof e.rotation==`number`){let n=(e.startSpeed-this.speedRange.a)/(this.speedRange.b-this.speedRange.a);e.rotation+=t*this.angularVelocity.genValue(e.memory,n)}}toJSON(){return{type:this.type,angularVelocity:this.angularVelocity.toJSON(),speedRange:this.speedRange.toJSON()}}static fromJSON(t){return new e(q(t.angularVelocity),Pe.fromJSON(t.speedRange))}frameUpdate(e){}clone(){return new e(this.angularVelocity.clone(),this.speedRange.clone())}reset(){}},Vt=class e{initialize(e){this.speed.startGen(e.memory)}constructor(e,t){this.speed=e,this.dampen=t,this.type=`LimitSpeedOverLife`}update(e,t){let n=e.velocity.length(),r=this.speed.genValue(e.memory,e.age/e.life);if(n>r){let i=(n-r)/n;e.velocity.multiplyScalar(1-i*this.dampen*t*20)}}toJSON(){return{type:this.type,speed:this.speed.toJSON(),dampen:this.dampen}}static fromJSON(t){return new e(q(t.speed),t.dampen)}frameUpdate(e){}clone(){return new e(this.speed.clone(),this.dampen)}reset(){}},Ht={ApplyForce:{type:`ApplyForce`,constructor:vt,params:[[`direction`,[`vec3`]],[`magnitude`,[`value`]]],loadJSON:vt.fromJSON},Noise:{type:`Noise`,constructor:Pt,params:[[`frequency`,[`value`]],[`power`,[`value`]],[`positionAmount`,[`value`]],[`rotationAmount`,[`value`]]],loadJSON:Pt.fromJSON},TurbulenceField:{type:`TurbulenceField`,constructor:jt,params:[[`scale`,[`vec3`]],[`octaves`,[`number`]],[`velocityMultiplier`,[`vec3`]],[`timeScale`,[`vec3`]]],loadJSON:jt.fromJSON},GravityForce:{type:`GravityForce`,constructor:yt,params:[[`center`,[`vec3`]],[`magnitude`,[`number`]]],loadJSON:yt.fromJSON},ColorOverLife:{type:`ColorOverLife`,constructor:it,params:[[`color`,[`colorFunc`]]],loadJSON:it.fromJSON},RotationOverLife:{type:`RotationOverLife`,constructor:at,params:[[`angularVelocity`,[`value`,`valueFunc`]]],loadJSON:at.fromJSON},Rotation3DOverLife:{type:`Rotation3DOverLife`,constructor:ot,params:[[`angularVelocity`,[`rotationFunc`]]],loadJSON:ot.fromJSON},SizeOverLife:{type:`SizeOverLife`,constructor:ct,params:[[`size`,[`value`,`valueFunc`,`vec3Func`]]],loadJSON:ct.fromJSON},ColorBySpeed:{type:`ColorBySpeed`,constructor:Rt,params:[[`color`,[`colorFunc`]],[`speedRange`,[`range`]]],loadJSON:Rt.fromJSON},RotationBySpeed:{type:`RotationBySpeed`,constructor:Bt,params:[[`angularVelocity`,[`value`,`valueFunc`]],[`speedRange`,[`range`]]],loadJSON:Bt.fromJSON},SizeBySpeed:{type:`SizeBySpeed`,constructor:zt,params:[[`size`,[`value`,`valueFunc`,`vec3Func`]],[`speedRange`,[`range`]]],loadJSON:zt.fromJSON},SpeedOverLife:{type:`SpeedOverLife`,constructor:lt,params:[[`speed`,[`value`,`valueFunc`]]],loadJSON:lt.fromJSON},FrameOverLife:{type:`FrameOverLife`,constructor:ut,params:[[`frame`,[`value`,`valueFunc`]]],loadJSON:ut.fromJSON},ForceOverLife:{type:`ForceOverLife`,constructor:st,params:[[`x`,[`value`,`valueFunc`]],[`y`,[`value`,`valueFunc`]],[`z`,[`value`,`valueFunc`]]],loadJSON:st.fromJSON},OrbitOverLife:{type:`OrbitOverLife`,constructor:dt,params:[[`orbitSpeed`,[`value`,`valueFunc`]],[`axis`,[`vec3`]]],loadJSON:dt.fromJSON},WidthOverLength:{type:`WidthOverLength`,constructor:_t,params:[[`width`,[`value`,`valueFunc`]]],loadJSON:_t.fromJSON},ChangeEmitDirection:{type:`ChangeEmitDirection`,constructor:bt,params:[[`angle`,[`value`]]],loadJSON:bt.fromJSON},EmitSubParticleSystem:{type:`EmitSubParticleSystem`,constructor:St,params:[[`particleSystem`,[`self`]],[`useVelocityAsBasis`,[`boolean`]],[`subParticleSystem`,[`particleSystem`]],[`mode`,[`number`]],[`emitProbability`,[`number`]]],loadJSON:St.fromJSON},LimitSpeedOverLife:{type:`LimitSpeedOverLife`,constructor:Vt,params:[[`speed`,[`value`,`valueFunc`]],[`dampen`,[`number`]]],loadJSON:Vt.fromJSON}};function Ut(e,t){return Ht[e.type]?Ht[e.type].loadJSON(e,t):null}var Wt=[];function Gt(e){if(!Wt.find(t=>t.id===e.id)){e.initialize();for(let t of e.emitterShapes)nt[t.type]||(nt[t.type]=t);for(let t of e.behaviors)Ht[t.type]||(Ht[t.type]=t)}}var Kt=`
#ifdef SOFT_PARTICLES

    /* #ifdef LOGDEPTH
    float distSample = linearize_depth_log(sampleDepth, near, far);
    #else
    float distSample = ortho ? linearize_depth_ortho(sampleDepth, near, far) : linearize_depth(sampleDepth, near, far);
    #endif */

    vec2 p2 = projPosition.xy / projPosition.w;
    
    p2 = 0.5 * p2 + 0.5;

    float readDepth = texture2D(depthTexture, p2.xy).r;
    float viewDepth = linearize_depth(readDepth);

    float softParticlesFade = saturate(SOFT_INV_FADE_DISTANCE * ((viewDepth - SOFT_NEAR_FADE) - linearDepth));
    
    gl_FragColor *= softParticlesFade;

    //gl_FragColor = vec4(softParticlesFade , 0, 0, 1);
#endif
`,qt=`
#ifdef SOFT_PARTICLES

    uniform sampler2D depthTexture;
    uniform vec4 projParams;
    uniform vec2 softParams;

    varying vec4 projPosition;
    varying float linearDepth;

    #define SOFT_NEAR_FADE softParams.x
    #define SOFT_INV_FADE_DISTANCE softParams.y

    #define zNear projParams.x
    #define zFar projParams.y

    float linearize_depth(float d)
    {
        return (zFar * zNear) / (zFar - d * (zFar - zNear));
    }

#endif
`,Jt=`
#ifdef SOFT_PARTICLES
    varying vec4 projPosition;
    varying float linearDepth;
#endif
`,Yt=`
#ifdef SOFT_PARTICLES
    projPosition = gl_Position;
    linearDepth = -mvPosition.z;
#endif
`,Xt=`
#ifdef USE_MAP
    vec4 texelColor = texture2D( map, vUv);
    #ifdef TILE_BLEND
        texelColor = mix( texelColor, texture2D( map, vUvNext ), vUvBlend );
    #endif
    diffuseColor *= texelColor;
#endif
`,Zt=`
#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

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

#endif
`,Qt=`
#ifdef UV_TILE
    attribute float uvTile;
    uniform vec2 tileCount;
    
    mat3 makeTileTransform(float uvTile) {
        float col = mod(uvTile, tileCount.x);
        float row = (tileCount.y - floor(uvTile / tileCount.x) - 1.0);
        
        return mat3(
          1.0 / tileCount.x, 0.0, 0.0,
          0.0, 1.0 / tileCount.y, 0.0, 
          col / tileCount.x, row / tileCount.y, 1.0);
    }
#else
    mat3 makeTileTransform(float uvTile) {
        return mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0);
    }
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

	varying vec2 vUv;
#ifdef TILE_BLEND
    varying vec2 vUvNext;
    varying float vUvBlend;
#endif

#endif
#ifdef USE_MAP

	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#ifdef TILE_BLEND
    varying vec2 vMapUvNext;
#endif

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

#endif
`,$t=`
#ifdef UV_TILE
    mat3 tileTransform = makeTileTransform(floor(uvTile));
    #ifdef TILE_BLEND
        mat3 nextTileTransform = makeTileTransform(ceil(uvTile));
        vUvBlend = fract(uvTile);
    #endif
#else
    mat3 tileTransform = makeTileTransform(0.0);
#endif

#if defined( USE_UV ) || defined( USE_ANISOTROPY )

vUv = (tileTransform *vec3( uv, 1 )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vUvNext = (nextTileTransform *vec3( uv, 1 )).xy;
#endif

#endif
#ifdef USE_MAP

vMapUv = ( tileTransform * (mapTransform * vec3( MAP_UV, 1 ) )).xy;
#if defined( TILE_BLEND ) && defined( UV_TILE )
    vMapUvNext = (nextTileTransform * (mapTransform * vec3( MAP_UV, 1 ))).xy;
#endif

#endif
#ifdef USE_ALPHAMAP

vAlphaMapUv = ( tileTransform * (alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) )).xy;
    
#endif
#ifdef USE_LIGHTMAP

vLightMapUv = ( tileTransform * (lightMapTransform * vec3( LIGHTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_AOMAP

vAoMapUv = ( tileTransform * (aoMapTransform * vec3( AOMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_BUMPMAP

vBumpMapUv = ( tileTransform * (bumpMapTransform * vec3( BUMPMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_NORMALMAP

vNormalMapUv = ( tileTransform * (normalMapTransform * vec3( NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_DISPLACEMENTMAP

vDisplacementMapUv = ( tileTransform * (displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_EMISSIVEMAP

vEmissiveMapUv = ( tileTransform * (emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_METALNESSMAP

vMetalnessMapUv = ( tileTransform * (metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ROUGHNESSMAP

vRoughnessMapUv = ( tileTransform * (roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_ANISOTROPYMAP

vAnisotropyMapUv = ( tileTransform * (anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOATMAP

vClearcoatMapUv = ( tileTransform * (clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_NORMALMAP

vClearcoatNormalMapUv = ( tileTransform * (clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP

vClearcoatRoughnessMapUv = ( tileTransform * (clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCEMAP

vIridescenceMapUv = ( tileTransform * (iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP

vIridescenceThicknessMapUv = ( tileTransform * (iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_COLORMAP

vSheenColorMapUv = ( tileTransform * (sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SHEEN_ROUGHNESSMAP

vSheenRoughnessMapUv = ( tileTransform * (sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULARMAP

vSpecularMapUv = ( tileTransform * (specularMapTransform * vec3( SPECULARMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_COLORMAP

vSpecularColorMapUv = ( tileTransform * (specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_SPECULAR_INTENSITYMAP

vSpecularIntensityMapUv = ( tileTransform * (specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_TRANSMISSIONMAP

vTransmissionMapUv = ( tileTransform * transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) )).xy;

#endif
#ifdef USE_THICKNESSMAP

vThicknessMapUv = ( tileTransform * thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) )).xy;

#endif

`,en=t;function tn(){en.tile_pars_vertex=Qt,en.tile_vertex=$t,en.tile_pars_fragment=Zt,en.tile_fragment=Xt,en.soft_pars_vertex=Jt,en.soft_vertex=Yt,en.soft_pars_fragment=qt,en.soft_fragment=Kt}var nn=class extends c{constructor(e){super(),this.type=`ParticleEmitter`,this.system=e}clone(){let e=this.system.clone();return e.emitter.copy(this,!0),e.emitter}dispose(){}extractFromCache(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}toJSON(e,t={}){let n=this.children;this.children=this.children.filter(e=>e.type!==`ParticleSystemPreview`);let r=super.toJSON(e);return this.children=n,this.system!==null&&(r.object.ps=this.system.toJSON(e,t)),r}},$;(function(e){e[e.BillBoard=0]=`BillBoard`,e[e.StretchedBillBoard=1]=`StretchedBillBoard`,e[e.Mesh=2]=`Mesh`,e[e.Trail=3]=`Trail`,e[e.HorizontalBillBoard=4]=`HorizontalBillBoard`,e[e.VerticalBillBoard=5]=`VerticalBillBoard`})($||={});var rn=class extends o{constructor(e){super(),this.type=`VFXBatch`,this.maxParticles=1e3,this.systems=new Set;let t=new r;t.mask=e.layers.mask;let n=e.material.clone();n.defines={},Object.assign(n.defines,e.material.defines),this.settings={instancingGeometry:e.instancingGeometry,renderMode:e.renderMode,renderOrder:e.renderOrder,material:n,uTileCount:e.uTileCount,vTileCount:e.vTileCount,blendTiles:e.blendTiles,softParticles:e.softParticles,softNearFade:e.softNearFade,softFarFade:e.softFarFade,layers:t},this.frustumCulled=!1,this.renderOrder=this.settings.renderOrder}addSystem(e){this.systems.add(e)}removeSystem(e){this.systems.delete(e)}applyDepthTexture(e){let t=this.material.uniforms.depthTexture;t&&t.value!==e&&(t.value=e,this.material.needsUpdate=!0)}},an=new L(0,0,1),on=new I,sn=new L,cn=new L;new L;var ln=60,un=new f(1,1,1,1),dn=class e{set time(e){this.emissionState.time=e}get time(){return this.emissionState.time}get layers(){return this.rendererSettings.layers}get texture(){return this.rendererSettings.material.map}set texture(e){this.rendererSettings.material.map=e,this.neededToUpdateRender=!0}get material(){return this.rendererSettings.material}set material(e){this.rendererSettings.material=e,this.neededToUpdateRender=!0}get uTileCount(){return this.rendererSettings.uTileCount}set uTileCount(e){this.rendererSettings.uTileCount=e,this.neededToUpdateRender=!0}get vTileCount(){return this.rendererSettings.vTileCount}set vTileCount(e){this.rendererSettings.vTileCount=e,this.neededToUpdateRender=!0}get blendTiles(){return this.rendererSettings.blendTiles}set blendTiles(e){this.rendererSettings.blendTiles=e,this.neededToUpdateRender=!0}get softParticles(){return this.rendererSettings.softParticles}set softParticles(e){this.rendererSettings.softParticles=e,this.neededToUpdateRender=!0}get softNearFade(){return this.rendererSettings.softNearFade}set softNearFade(e){this.rendererSettings.softNearFade=e,this.neededToUpdateRender=!0}get softFarFade(){return this.rendererSettings.softFarFade}set softFarFade(e){this.rendererSettings.softFarFade=e,this.neededToUpdateRender=!0}get instancingGeometry(){return this.rendererSettings.instancingGeometry}set instancingGeometry(e){this.restart(),this.particles.length=0,this.rendererSettings.instancingGeometry=e,this.neededToUpdateRender=!0}get renderMode(){return this.rendererSettings.renderMode}set renderMode(e){if((this.rendererSettings.renderMode!=$.Trail&&e===$.Trail||this.rendererSettings.renderMode==$.Trail&&e!==$.Trail)&&(this.restart(),this.particles.length=0),this.rendererSettings.renderMode!==e)switch(e){case $.Trail:this.rendererEmitterSettings={startLength:new K(30),followLocalOrigin:!1};break;case $.Mesh:this.rendererEmitterSettings={geometry:new f(1,1)},this.startRotation=new Re(new L(0,1,0),new K(0));break;case $.StretchedBillBoard:this.rendererEmitterSettings={speedFactor:0,lengthFactor:2},this.rendererSettings.renderMode===$.Mesh&&(this.startRotation=new K(0));break;case $.BillBoard:case $.VerticalBillBoard:case $.HorizontalBillBoard:this.rendererEmitterSettings={},this.rendererSettings.renderMode===$.Mesh&&(this.startRotation=new K(0));break}this.rendererSettings.renderMode=e,this.neededToUpdateRender=!0}get renderOrder(){return this.rendererSettings.renderOrder}set renderOrder(e){this.rendererSettings.renderOrder=e,this.neededToUpdateRender=!0}get blending(){return this.rendererSettings.material.blending}set blending(e){this.rendererSettings.material.blending=e,this.neededToUpdateRender=!0}constructor(e){if(this.temp=new L,this.travelDistance=0,this.normalMatrix=new W,this.memory=[],this.listeners={},this.firstTimeUpdate=!0,this.autoDestroy=e.autoDestroy===void 0?!1:e.autoDestroy,this.duration=e.duration??1,this.looping=e.looping===void 0?!0:e.looping,this.prewarm=e.prewarm===void 0?!1:e.prewarm,this.startLife=e.startLife??new K(5),this.startSpeed=e.startSpeed??new K(0),this.startRotation=e.startRotation??new K(0),this.startSize=e.startSize??new K(1),this.startColor=e.startColor??new Me(new U(1,1,1,1)),this.emissionOverTime=e.emissionOverTime??new K(10),this.emissionOverDistance=e.emissionOverDistance??new K(0),this.emissionBursts=e.emissionBursts??[],this.onlyUsedByOther=e.onlyUsedByOther??!1,this.emitterShape=e.shape??new $e,this.behaviors=e.behaviors??[],this.worldSpace=e.worldSpace??!1,this.rendererEmitterSettings=e.rendererEmitterSettings??{},e.renderMode===$.StretchedBillBoard){let t=this.rendererEmitterSettings;e.speedFactor!==void 0&&(t.speedFactor=e.speedFactor),t.speedFactor=t.speedFactor??0,t.lengthFactor=t.lengthFactor??0}this.rendererSettings={instancingGeometry:e.instancingGeometry??un,renderMode:e.renderMode??$.BillBoard,renderOrder:e.renderOrder??0,material:e.material,uTileCount:e.uTileCount??1,vTileCount:e.vTileCount??1,blendTiles:e.blendTiles??!1,softParticles:e.softParticles??!1,softNearFade:e.softNearFade??0,softFarFade:e.softFarFade??0,layers:e.layers??new r},this.neededToUpdateRender=!0,this.particles=[],this.startTileIndex=e.startTileIndex||new K(0),this.emitter=new nn(this),this.paused=!1,this.particleNum=0,this.emissionState={isBursting:!1,burstParticleIndex:0,burstParticleCount:0,burstIndex:0,burstWaveIndex:0,time:0,waitEmiting:0,travelDistance:0},this.emissionBursts.forEach(e=>e.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1}pause(){this.paused=!0}play(){this.paused=!1}stop(){this.restart(),this.pause()}spawn(e,t,n){on.setFromRotationMatrix(n);let r=sn,i=on,a=cn;n.decompose(r,i,a);for(let r=0;r<e;r++){for(t.burstParticleIndex=r,this.particleNum++;this.particles.length<this.particleNum;)this.rendererSettings.renderMode===$.Trail?this.particles.push(new gt):this.particles.push(new mt);let e=this.particles[this.particleNum-1];if(e.reset(),e.speedModifier=1,this.startColor.startGen(e.memory),this.startColor.genColor(e.memory,e.startColor,this.emissionState.time),e.color.copy(e.startColor),this.startSpeed.startGen(e.memory),e.startSpeed=this.startSpeed.genValue(e.memory,t.time/this.duration),this.startLife.startGen(e.memory),e.life=this.startLife.genValue(e.memory,t.time/this.duration),e.age=0,this.startSize.startGen(e.memory),this.startSize.type===`vec3function`)this.startSize.genValue(e.memory,e.startSize,t.time/this.duration);else{let n=this.startSize.genValue(e.memory,t.time/this.duration);e.startSize.set(n,n,n)}if(this.startTileIndex.startGen(e.memory),e.uvTile=this.startTileIndex.genValue(e.memory),e.size.copy(e.startSize),this.rendererSettings.renderMode===$.Mesh||this.rendererSettings.renderMode===$.BillBoard||this.rendererSettings.renderMode===$.VerticalBillBoard||this.rendererSettings.renderMode===$.HorizontalBillBoard||this.rendererSettings.renderMode===$.StretchedBillBoard){let n=e;this.startRotation.startGen(e.memory),this.rendererSettings.renderMode===$.Mesh?(n.rotation instanceof I||(n.rotation=new I),this.startRotation.type===`rotation`?this.startRotation.genValue(e.memory,n.rotation,1,t.time/this.duration):n.rotation.setFromAxisAngle(an,this.startRotation.genValue(n.memory,t.time/this.duration))):this.startRotation.type===`rotation`?n.rotation=0:n.rotation=this.startRotation.genValue(n.memory,t.time/this.duration)}else if(this.rendererSettings.renderMode===$.Trail){let n=e;this.rendererEmitterSettings.startLength.startGen(n.memory),n.length=this.rendererEmitterSettings.startLength.genValue(n.memory,t.time/this.duration)}if(this.emitterShape.initialize(e,t),this.rendererSettings.renderMode===$.Trail&&this.rendererEmitterSettings.followLocalOrigin){let t=e;t.localPosition=new L().copy(t.position)}this.worldSpace?(e.position.applyMatrix4(n),e.startSize.multiply(a).abs(),e.size.copy(e.startSize),e.velocity.multiply(a).applyMatrix3(this.normalMatrix),e.rotation&&e.rotation instanceof I&&e.rotation.multiplyQuaternions(on,e.rotation)):this.onlyUsedByOther&&(e.parentMatrix=n);for(let t=0;t<this.behaviors.length;t++)this.behaviors[t].initialize(e,this)}}endEmit(){this.emitEnded=!0,this.autoDestroy&&(this.markForDestroy=!0),this.fire({type:`emitEnd`,particleSystem:this})}dispose(){this._renderer&&this._renderer.deleteSystem(this),this.emitter.dispose(),this.emitter.parent&&this.emitter.parent.remove(this.emitter),this.fire({type:`destroy`,particleSystem:this})}restart(){this.memory.length=0,this.paused=!1,this.particleNum=0,this.emissionState.isBursting=!1,this.emissionState.burstIndex=0,this.emissionState.burstWaveIndex=0,this.emissionState.time=0,this.emissionState.waitEmiting=0,this.behaviors.forEach(e=>{e.reset()}),this.emitEnded=!1,this.markForDestroy=!1,this.prewarmed=!1,this.emissionBursts.forEach(e=>e.count.startGen(this.memory)),this.emissionOverDistance.startGen(this.memory)}update(e){if(this.paused)return;let t=this.emitter;for(;t.parent;)t=t.parent;if(t.type!==`Scene`){this.dispose();return}if(this.firstTimeUpdate&&(this.firstTimeUpdate=!1,this.emitter.updateWorldMatrix(!0,!1)),this.emitEnded&&this.particleNum===0){this.markForDestroy&&this.emitter.parent&&this.dispose();return}if(this.looping&&this.prewarm&&!this.prewarmed){this.prewarmed=!0;for(let e=0;e<this.duration*ln;e++)this.update(1/ln)}e>.1&&(e=.1),this.neededToUpdateRender&&=(this._renderer&&this._renderer.updateSystem(this),!1),this.onlyUsedByOther||this.emit(e,this.emissionState,this.emitter.matrixWorld),this.emitterShape.update(this,e);for(let t=0;t<this.behaviors.length;t++){this.behaviors[t].frameUpdate(e);for(let n=0;n<this.particleNum;n++)this.particles[n].died||this.behaviors[t].update(this.particles[n],e)}for(let t=0;t<this.particleNum;t++)this.rendererEmitterSettings.followLocalOrigin&&this.particles[t].localPosition?(this.particles[t].position.copy(this.particles[t].localPosition),this.particles[t].parentMatrix?this.particles[t].position.applyMatrix4(this.particles[t].parentMatrix):this.particles[t].position.applyMatrix4(this.emitter.matrixWorld)):this.particles[t].position.addScaledVector(this.particles[t].velocity,e*this.particles[t].speedModifier),this.particles[t].age+=e;if(this.rendererSettings.renderMode===$.Trail)for(let e=0;e<this.particleNum;e++)this.particles[e].update();for(let e=0;e<this.particleNum;e++){let t=this.particles[e];t.died&&(!(t instanceof gt)||t.previous.length===0)&&(this.particles[e]=this.particles[this.particleNum-1],this.particles[this.particleNum-1]=t,this.particleNum--,e--,this.fire({type:`particleDied`,particleSystem:this,particle:t}))}}emit(e,t,n){t.time>this.duration&&(this.looping?(t.time-=this.duration,t.burstIndex=0,this.behaviors.forEach(e=>{e.reset()})):!this.emitEnded&&!this.onlyUsedByOther&&this.endEmit()),this.normalMatrix.getNormalMatrix(n);let r=Math.ceil(t.waitEmiting);for(this.spawn(r,t,n),t.waitEmiting-=r;t.burstIndex<this.emissionBursts.length&&this.emissionBursts[t.burstIndex].time<=t.time;){if(Math.random()<this.emissionBursts[t.burstIndex].probability){let e=this.emissionBursts[t.burstIndex].count.genValue(this.memory,this.time);t.isBursting=!0,t.burstParticleCount=e,this.spawn(e,t,n),t.isBursting=!1}t.burstIndex++}if(!this.emitEnded&&(t.waitEmiting+=e*this.emissionOverTime.genValue(this.memory,t.time/this.duration),t.previousWorldPos!=null)){this.temp.set(n.elements[12],n.elements[13],n.elements[14]),t.travelDistance+=t.previousWorldPos.distanceTo(this.temp);let e=this.emissionOverDistance.genValue(this.memory,t.time/this.duration);if(t.travelDistance*e>0){let n=Math.floor(t.travelDistance*e);t.travelDistance-=n/e,t.waitEmiting+=n}}t.previousWorldPos===void 0&&(t.previousWorldPos=new L),t.previousWorldPos.set(n.elements[12],n.elements[13],n.elements[14]),t.time+=e}toJSON(e,t={}){if((e===void 0||typeof e==`string`)&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}}),e.materials[this.rendererSettings.material.uuid]=this.rendererSettings.material.toJSON(e),t.useUrlForImage&&this.texture?.source!==void 0){let t=this.texture.source;e.images[t.uuid]={uuid:t.uuid,url:this.texture.image.url}}let n;n=this.renderMode===$.Trail?{startLength:this.rendererEmitterSettings.startLength.toJSON(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===$.Mesh?{}:this.renderMode===$.StretchedBillBoard?{speedFactor:this.rendererEmitterSettings.speedFactor,lengthFactor:this.rendererEmitterSettings.lengthFactor}:{};let r=this.rendererSettings.instancingGeometry;return e.geometries&&!e.geometries[r.uuid]&&(e.geometries[r.uuid]=r.toJSON()),{version:`3.0`,autoDestroy:this.autoDestroy,looping:this.looping,prewarm:this.prewarm,duration:this.duration,shape:this.emitterShape.toJSON(),startLife:this.startLife.toJSON(),startSpeed:this.startSpeed.toJSON(),startRotation:this.startRotation.toJSON(),startSize:this.startSize.toJSON(),startColor:this.startColor.toJSON(),emissionOverTime:this.emissionOverTime.toJSON(),emissionOverDistance:this.emissionOverDistance.toJSON(),emissionBursts:this.emissionBursts.map(e=>({time:e.time,count:e.count.toJSON(),probability:e.probability,interval:e.interval,cycle:e.cycle})),onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry.uuid,renderOrder:this.renderOrder,renderMode:this.renderMode,rendererEmitterSettings:n,material:this.rendererSettings.material.uuid,layers:this.layers.mask,startTileIndex:this.startTileIndex.toJSON(),uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.rendererSettings.softParticles,softFarFade:this.rendererSettings.softFarFade,softNearFade:this.rendererSettings.softNearFade,behaviors:this.behaviors.map(e=>e.toJSON()),worldSpace:this.worldSpace}}static fromJSON(t,n,a){let o=rt(t.shape,n),s;if(t.renderMode===$.Trail){let e=t.rendererEmitterSettings;s={startLength:e.startLength==null?new K(30):q(e.startLength),followLocalOrigin:e.followLocalOrigin}}else t.renderMode===$.Mesh?s={}:t.renderMode===$.StretchedBillBoard?(s=t.rendererEmitterSettings,t.speedFactor!=null&&(s.speedFactor=t.speedFactor)):s={};let c=new r;t.layers&&(c.mask=t.layers);let l=new e({autoDestroy:t.autoDestroy,looping:t.looping,prewarm:t.prewarm,duration:t.duration,shape:o,startLife:q(t.startLife),startSpeed:q(t.startSpeed),startRotation:Ue(t.startRotation),startSize:Ue(t.startSize),startColor:Ne(t.startColor),emissionOverTime:q(t.emissionOverTime),emissionOverDistance:q(t.emissionOverDistance),emissionBursts:t.emissionBursts?.map(e=>({time:e.time,count:typeof e.count==`number`?new K(e.count):q(e.count),probability:e.probability??1,interval:e.interval??.1,cycle:e.cycle??1})),onlyUsedByOther:t.onlyUsedByOther,instancingGeometry:n.geometries[t.instancingGeometry],renderMode:t.renderMode,rendererEmitterSettings:s,renderOrder:t.renderOrder,layers:c,material:t.material?n.materials[t.material]:t.texture?new i({map:n.textures[t.texture],transparent:t.transparent??!0,blending:t.blending,side:2}):new i({color:16777215,transparent:!0,blending:2,side:2}),startTileIndex:typeof t.startTileIndex==`number`?new K(t.startTileIndex):q(t.startTileIndex),uTileCount:t.uTileCount,vTileCount:t.vTileCount,blendTiles:t.blendTiles,softParticles:t.softParticles,softFarFade:t.softFarFade,softNearFade:t.softNearFade,behaviors:[],worldSpace:t.worldSpace});return l.behaviors=t.behaviors.map(e=>{let t=Ut(e,l);return t.type===`EmitSubParticleSystem`&&(a[e.subParticleSystem]=t),t}),l}addBehavior(e){this.behaviors.push(e)}getRendererSettings(){return this.rendererSettings}addEventListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}removeAllEventListeners(e){this.listeners[e]&&(this.listeners[e]=[])}removeEventListener(e,t){if(this.listeners[e]){let n=this.listeners[e].indexOf(t);n!==-1&&this.listeners[e].splice(n,1)}}fire(e){this.listeners[e.type]&&this.listeners[e.type].forEach(t=>t(e))}clone(){let t=[];for(let e of this.emissionBursts){let n={};Object.assign(n,e),t.push(n)}let n=[];for(let e of this.behaviors)n.push(e.clone());let i;i=this.renderMode===$.Trail?{startLength:this.rendererEmitterSettings.startLength.clone(),followLocalOrigin:this.rendererEmitterSettings.followLocalOrigin}:this.renderMode===$.StretchedBillBoard?{lengthFactor:this.rendererEmitterSettings.lengthFactor,speedFactor:this.rendererEmitterSettings.speedFactor}:{};let a=new r;return a.mask=this.layers.mask,new e({autoDestroy:this.autoDestroy,looping:this.looping,duration:this.duration,shape:this.emitterShape.clone(),startLife:this.startLife.clone(),startSpeed:this.startSpeed.clone(),startRotation:this.startRotation.clone(),startSize:this.startSize.clone(),startColor:this.startColor.clone(),emissionOverTime:this.emissionOverTime.clone(),emissionOverDistance:this.emissionOverDistance.clone(),emissionBursts:t,onlyUsedByOther:this.onlyUsedByOther,instancingGeometry:this.rendererSettings.instancingGeometry,renderMode:this.renderMode,renderOrder:this.renderOrder,rendererEmitterSettings:i,material:this.rendererSettings.material,startTileIndex:this.startTileIndex,uTileCount:this.uTileCount,vTileCount:this.vTileCount,blendTiles:this.blendTiles,softParticles:this.softParticles,softFarFade:this.softFarFade,softNearFade:this.softNearFade,behaviors:n,worldSpace:this.worldSpace,layers:a})}},fn=`

#include <common>
#include <color_pars_fragment>
#include <map_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <alphatest_pars_fragment>

#include <tile_pars_fragment>
#include <soft_pars_fragment>

void main() {

    #include <clipping_planes_fragment>
    
    vec3 outgoingLight = vec3( 0.0 );
    vec4 diffuseColor = vColor;
    
    #include <logdepthbuf_fragment>
    
    #include <tile_fragment>
    #include <alphatest_fragment>

    outgoingLight = diffuseColor.rgb;
    
    #ifdef USE_COLOR_AS_ALPHA
    gl_FragColor = vec4( outgoingLight, diffuseColor.r );
    #else
    gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    #endif
    
    #include <soft_fragment>
    #include <tonemapping_fragment>
}
`,pn=`
#define STANDARD

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

#ifdef USE_DISPERSION
uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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

// accumulation
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>

// modulation
#include <aomap_fragment>

vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

#include <transmission_fragment>

vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

#ifdef USE_SHEEN

// Sheen energy compensation approximation calculation can be found at the end of
// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;

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
}`,mn=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;

void main() {
	
    vec2 alignedPosition = position.xy * size.xy;
    
    vec2 rotatedPosition;
    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
#ifdef HORIZONTAL
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.x += rotatedPosition.x;
    mvPosition.z -= rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
#elif defined(VERTICAL)
    vec4 mvPosition = modelMatrix * vec4( offset, 1.0 );
    mvPosition.y += rotatedPosition.y;
    mvPosition = viewMatrix * mvPosition;
    mvPosition.x += rotatedPosition.x;
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    mvPosition.xy += rotatedPosition;
#endif

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>

	#include <clipping_planes_vertex>

	#include <tile_vertex>
	#include <soft_vertex>
}
`,hn=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
// attribute vec4 color;

void main() {

    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;
    
    mat4 matrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);
    
    vec4 mvPosition = modelViewMatrix * (matrix * vec4( position, 1.0 ));

	vColor = color;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
    #include <tile_vertex>
    #include <soft_vertex>
}
`,gn=`
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>

attribute vec3 offset;
attribute vec4 rotation;
attribute vec3 size;
#include <tile_pars_vertex>
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

    #include <tile_vertex>
    float x2 = rotation.x + rotation.x, y2 = rotation.y + rotation.y, z2 = rotation.z + rotation.z;
    float xx = rotation.x * x2, xy = rotation.x * y2, xz = rotation.x * z2;
    float yy = rotation.y * y2, yz = rotation.y * z2, zz = rotation.z * z2;
    float wx = rotation.w * x2, wy = rotation.w * y2, wz = rotation.w * z2;
    float sx = size.x, sy = size.y, sz = size.z;

    mat4 particleMatrix = mat4(( 1.0 - ( yy + zz ) ) * sx, ( xy + wz ) * sx, ( xz - wy ) * sx, 0.0,  // 1. column
                      ( xy - wz ) * sy, ( 1.0 - ( xx + zz ) ) * sy, ( yz + wx ) * sy, 0.0,  // 2. column
                      ( xz + wy ) * sz, ( yz - wx ) * sz, ( 1.0 - ( xx + yy ) ) * sz, 0.0,  // 3. column
                      offset.x, offset.y, offset.z, 1.0);

#include <color_vertex>
#include <morphinstance_vertex>
#include <morphcolor_vertex>
#include <batching_vertex>

#include <beginnormal_vertex>
#include <morphnormal_vertex>
#include <skinbase_vertex>
#include <skinnormal_vertex>

	// replace defaultnormal_vertex
	vec3 transformedNormal = objectNormal;
    mat3 m = mat3( particleMatrix );
    transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    transformedNormal = m * transformedNormal;
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
        transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
        vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
        #ifdef FLIP_SIDED
        transformedTangent = - transformedTangent;
        #endif
    #endif

	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>

	// replace include <project_vertex>
  vec4 mvPosition = vec4( transformed, 1.0 );
  mvPosition = modelViewMatrix * (particleMatrix * mvPosition);
	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
	vViewPosition = - mvPosition.xyz;
	
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
    vWorldPosition = worldPosition.xyz;
#endif
}
`,_n=`
#include <common>
#include <color_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#include <tile_pars_vertex>
#include <soft_pars_vertex>

attribute vec3 offset;
attribute float rotation;
attribute vec3 size;
attribute vec4 velocity;

uniform float speedFactor;

void main() {
    float lengthFactor = velocity.w;
    float avgSize = (size.x + size.y) * 0.5;
#ifdef USE_SKEW
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;

    vec3 scaledPos = vec3(position.xy * size.xy, position.z);
    float vlength = length(viewVelocity);
    vec3 projVelocity =  dot(scaledPos, viewVelocity) * viewVelocity / vlength;
    mvPosition.xyz += scaledPos + projVelocity * (speedFactor / avgSize + lengthFactor / vlength);
#else
    vec4 mvPosition = modelViewMatrix * vec4( offset, 1.0 );
    vec3 viewVelocity = normalMatrix * velocity.xyz;
    float vlength = length(viewVelocity); 
    mvPosition.xyz += position.y * normalize(cross(mvPosition.xyz, viewVelocity)) * avgSize; // switch the cross to  match unity implementation
    mvPosition.xyz -= (position.x + 0.5) * viewVelocity * (1.0 + lengthFactor / vlength) * avgSize; // minus position.x to match unity implementation
#endif
	vColor = color;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <tile_vertex>
	#include <soft_vertex>
}
`;function vn(e){return e===0?`uv`:`uv${e}`}var yn=class extends l{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=gn,e.fragmentShader=pn}},bn=class extends u{constructor(e){super(e)}onBeforeCompile(e,t){super.onBeforeCompile(e,t),e.vertexShader=gn,e.fragmentShader=pn}},xn=class extends rn{constructor(e){super(e),this.vector_=new L,this.vector2_=new L,this.vector3_=new L,this.quaternion_=new I,this.quaternion2_=new I,this.quaternion3_=new I,this.rotationMat_=new W,this.rotationMat2_=new W,this.maxParticles=1e3,this.setupBuffers(),this.rebuildMaterial()}buildExpandableBuffers(){this.offsetBuffer=new s(new Float32Array(this.maxParticles*3),3),this.offsetBuffer.setUsage(e),this.geometry.setAttribute(`offset`,this.offsetBuffer),this.colorBuffer=new s(new Float32Array(this.maxParticles*4),4),this.colorBuffer.setUsage(e),this.geometry.setAttribute(`color`,this.colorBuffer),this.settings.renderMode===$.Mesh?(this.rotationBuffer=new s(new Float32Array(this.maxParticles*4),4),this.rotationBuffer.setUsage(e),this.geometry.setAttribute(`rotation`,this.rotationBuffer)):(this.settings.renderMode===$.BillBoard||this.settings.renderMode===$.HorizontalBillBoard||this.settings.renderMode===$.VerticalBillBoard||this.settings.renderMode===$.StretchedBillBoard)&&(this.rotationBuffer=new s(new Float32Array(this.maxParticles),1),this.rotationBuffer.setUsage(e),this.geometry.setAttribute(`rotation`,this.rotationBuffer)),this.sizeBuffer=new s(new Float32Array(this.maxParticles*3),3),this.sizeBuffer.setUsage(e),this.geometry.setAttribute(`size`,this.sizeBuffer),this.uvTileBuffer=new s(new Float32Array(this.maxParticles),1),this.uvTileBuffer.setUsage(e),this.geometry.setAttribute(`uvTile`,this.uvTileBuffer),this.settings.renderMode===$.StretchedBillBoard&&(this.velocityBuffer=new s(new Float32Array(this.maxParticles*4),4),this.velocityBuffer.setUsage(e),this.geometry.setAttribute(`velocity`,this.velocityBuffer))}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new p,this.geometry.setIndex(this.settings.instancingGeometry.getIndex()),this.settings.instancingGeometry.hasAttribute(`normal`)&&this.geometry.setAttribute(`normal`,this.settings.instancingGeometry.getAttribute(`normal`)),this.geometry.setAttribute(`position`,this.settings.instancingGeometry.getAttribute(`position`)),this.geometry.setAttribute(`uv`,this.settings.instancingGeometry.getAttribute(`uv`)),this.buildExpandableBuffers()}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;let e={},t={};this.settings.material.type!==`MeshStandardMaterial`&&this.settings.material.type!==`MeshPhysicalMaterial`&&(e.map=new h(this.settings.material.map)),this.settings.material.alphaTest&&(t.USE_ALPHATEST=``,e.alphaTest=new h(this.settings.material.alphaTest)),t.USE_UV=``;let n=this.settings.uTileCount,r=this.settings.vTileCount;(n>1||r>1)&&(t.UV_TILE=``,e.tileCount=new h(new H(n,r))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=``),this.settings.material.normalMap&&(t.USE_NORMALMAP=``,t.NORMALMAP_UV=vn(this.settings.material.normalMap.channel),e.normalMapTransform=new h(new W().copy(this.settings.material.normalMap.matrix))),this.settings.material.map&&(t.USE_MAP=``,this.settings.blendTiles&&(t.TILE_BLEND=``),t.MAP_UV=vn(this.settings.material.map.channel),e.mapTransform=new h(new W().copy(this.settings.material.map.matrix))),t.USE_COLOR_ALPHA=``;let i;if(this.settings.softParticles){t.SOFT_PARTICLES=``;let n=this.settings.softNearFade;e.softParams=new h(new H(n,1/(this.settings.softFarFade-this.settings.softNearFade))),e.depthTexture=new h(null);let r=e.projParams=new h(new U);i=(e,t,n)=>{r.value.set(n.near,n.far,0,0)}}let a=!1;if(this.settings.renderMode===$.BillBoard||this.settings.renderMode===$.VerticalBillBoard||this.settings.renderMode===$.HorizontalBillBoard||this.settings.renderMode===$.Mesh){let n,r;this.settings.renderMode===$.Mesh?this.settings.material.type===`MeshStandardMaterial`||this.settings.material.type===`MeshPhysicalMaterial`?(t.USE_COLOR=``,n=gn,r=pn,a=!0):(n=hn,r=fn):(n=mn,r=fn),this.settings.renderMode===$.VerticalBillBoard?t.VERTICAL=``:this.settings.renderMode===$.HorizontalBillBoard&&(t.HORIZONTAL=``);let i=!1;this.settings.renderMode===$.Mesh&&(this.settings.material.type===`MeshStandardMaterial`?(this.material=new yn({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,i=!0):this.settings.material.type===`MeshPhysicalMaterial`&&(this.material=new bn({}),this.material.copy(this.settings.material),this.material.uniforms=e,this.material.defines=t,i=!0)),i||(this.material=new d({uniforms:e,defines:t,vertexShader:n,fragmentShader:r,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest,lights:a}))}else if(this.settings.renderMode===$.StretchedBillBoard)e.speedFactor=new h(1),this.material=new d({uniforms:e,defines:t,vertexShader:_n,fragmentShader:fn,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,blending:this.settings.material.blending,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha,side:this.settings.material.side,alphaTest:this.settings.material.alphaTest,depthTest:this.settings.material.depthTest});else throw Error(`render mode unavailable`);this.material&&i&&(this.material.onBeforeRender=i)}update(){let e=0,t=0;this.systems.forEach(e=>{t+=e.particleNum}),t>this.maxParticles&&this.expandBuffers(t),this.systems.forEach(t=>{t.emitter.updateMatrixWorld&&(t.emitter.updateWorldMatrix(!0,!1),t.emitter.updateMatrixWorld(!0));let n=t.particles,r=t.particleNum,i=this.quaternion2_,a=this.vector2_,o=this.vector3_;t.emitter.matrixWorld.decompose(a,i,o),this.rotationMat_.setFromMatrix4(t.emitter.matrixWorld);for(let a=0;a<r;a++,e++){let r=n[a];if(this.settings.renderMode===$.Mesh){let n;if(t.worldSpace)n=r.rotation;else{let e;e=r.parentMatrix?this.quaternion3_.setFromRotationMatrix(r.parentMatrix):i,n=this.quaternion_,n.copy(e).multiply(r.rotation)}this.rotationBuffer.setXYZW(e,n.x,n.y,n.z,n.w)}else (this.settings.renderMode===$.StretchedBillBoard||this.settings.renderMode===$.VerticalBillBoard||this.settings.renderMode===$.HorizontalBillBoard||this.settings.renderMode===$.BillBoard)&&this.rotationBuffer.setX(e,r.rotation);let s;if(t.worldSpace?s=r.position:(s=this.vector_,r.parentMatrix?s.copy(r.position).applyMatrix4(r.parentMatrix):s.copy(r.position).applyMatrix4(t.emitter.matrixWorld)),this.offsetBuffer.setXYZ(e,s.x,s.y,s.z),this.colorBuffer.setXYZW(e,r.color.x,r.color.y,r.color.z,r.color.w),t.worldSpace||r.parentMatrix?this.sizeBuffer.setXYZ(e,r.size.x,r.size.y,r.size.z):this.sizeBuffer.setXYZ(e,r.size.x*Math.abs(o.x),r.size.y*Math.abs(o.y),r.size.z*Math.abs(o.z)),this.uvTileBuffer.setX(e,r.uvTile),this.settings.renderMode===$.StretchedBillBoard&&this.velocityBuffer){let n=t.rendererEmitterSettings.speedFactor;n===0&&(n=.001);let i=t.rendererEmitterSettings.lengthFactor,a;t.worldSpace?a=r.velocity:(a=this.vector_,r.parentMatrix?(this.rotationMat2_.setFromMatrix4(r.parentMatrix),a.copy(r.velocity).applyMatrix3(this.rotationMat2_)):a.copy(r.velocity).applyMatrix3(this.rotationMat_)),this.velocityBuffer.setXYZW(e,a.x*n,a.y*n,a.z*n,i)}}}),this.geometry.instanceCount=e,e>0&&(this.offsetBuffer.clearUpdateRanges(),this.offsetBuffer.addUpdateRange(0,e*3),this.offsetBuffer.needsUpdate=!0,this.sizeBuffer.clearUpdateRanges(),this.sizeBuffer.addUpdateRange(0,e*3),this.sizeBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.uvTileBuffer.clearUpdateRanges(),this.uvTileBuffer.addUpdateRange(0,e),this.uvTileBuffer.needsUpdate=!0,this.settings.renderMode===$.StretchedBillBoard&&this.velocityBuffer&&(this.velocityBuffer.clearUpdateRanges(),this.velocityBuffer.addUpdateRange(0,e*4),this.velocityBuffer.needsUpdate=!0),this.settings.renderMode===$.Mesh?(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e*4),this.rotationBuffer.needsUpdate=!0):(this.settings.renderMode===$.StretchedBillBoard||this.settings.renderMode===$.HorizontalBillBoard||this.settings.renderMode===$.VerticalBillBoard||this.settings.renderMode===$.BillBoard)&&(this.rotationBuffer.clearUpdateRanges(),this.rotationBuffer.addUpdateRange(0,e),this.rotationBuffer.needsUpdate=!0))}dispose(){this.geometry.dispose()}},Sn=`

#include <common>
#include <tile_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

uniform sampler2D alphaMap;
uniform float useAlphaMap;
uniform float visibility;
uniform float alphaTest;

varying vec4 vColor;
    
void main() {
    #include <clipping_planes_fragment>
    #include <logdepthbuf_fragment>

    vec4 diffuseColor = vColor;
    
    #ifdef USE_MAP
    #include <tile_fragment>
    #ifndef USE_COLOR_AS_ALPHA
    #endif
    #endif
    if( useAlphaMap == 1. ) diffuseColor.a *= texture2D( alphaMap, vUv).a;
    if( diffuseColor.a < alphaTest ) discard;
    gl_FragColor = diffuseColor;

    #include <fog_fragment>
    #include <tonemapping_fragment>
}`,Cn=`
#include <common>
#include <tile_pars_vertex>
#include <color_pars_vertex>
#include <clipping_planes_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <fog_pars_vertex>

attribute vec3 previous;
attribute vec3 next;
attribute float side;
attribute float width;

uniform vec2 resolution;
uniform float lineWidth;
uniform float sizeAttenuation;
    
vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
}
    
void main() {

    #include <tile_vertex>
    
    float aspect = resolution.x / resolution.y;

    vColor = color;

    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4( position, 1.0 );
    vec4 prevPos = m * vec4( previous, 1.0 );
    vec4 nextPos = m * vec4( next, 1.0 );

    vec2 currentP = fix( finalPosition, aspect );
    vec2 prevP = fix( prevPos, aspect );
    vec2 nextP = fix( nextPos, aspect );

    float w = lineWidth * width;

    vec2 dir;
    if( nextP == currentP ) dir = normalize( currentP - prevP );
    else if( prevP == currentP ) dir = normalize( nextP - currentP );
    else {
        vec2 dir1 = normalize( currentP - prevP );
        vec2 dir2 = normalize( nextP - currentP );
        dir = normalize( dir1 + dir2 );

        vec2 perp = vec2( -dir1.y, dir1.x );
        vec2 miter = vec2( -dir.y, dir.x );
        //w = clamp( w / dot( miter, perp ), 0., 4., * lineWidth * width );

    }

    //vec2 normal = ( cross( vec3( dir, 0. ) vec3( 0., 0., 1. ) ) ).xy;
    vec4 normal = vec4( -dir.y, dir.x, 0., 1. );
    normal.xy *= .5 * w;
    normal *= projectionMatrix;
    if( sizeAttenuation == 0. ) {
        normal.xy *= finalPosition.w;
        normal.xy /= ( vec4( resolution, 0., 1. ) * projectionMatrix ).xy;
    }

    finalPosition.xy += normal.xy * side;

    gl_Position = finalPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    
	#include <fog_vertex>
}`,wn=class extends rn{constructor(e){super(e),this.vector_=new L,this.vector2_=new L,this.vector3_=new L,this.quaternion_=new I,this.maxParticles=1e4,this.setupBuffers(),this.rebuildMaterial()}setupBuffers(){this.geometry&&this.geometry.dispose(),this.geometry=new a,this.indexBuffer=new m(new Uint32Array(this.maxParticles*6),1),this.indexBuffer.setUsage(e),this.geometry.setIndex(this.indexBuffer),this.positionBuffer=new m(new Float32Array(this.maxParticles*6),3),this.positionBuffer.setUsage(e),this.geometry.setAttribute(`position`,this.positionBuffer),this.previousBuffer=new m(new Float32Array(this.maxParticles*6),3),this.previousBuffer.setUsage(e),this.geometry.setAttribute(`previous`,this.previousBuffer),this.nextBuffer=new m(new Float32Array(this.maxParticles*6),3),this.nextBuffer.setUsage(e),this.geometry.setAttribute(`next`,this.nextBuffer),this.widthBuffer=new m(new Float32Array(this.maxParticles*2),1),this.widthBuffer.setUsage(e),this.geometry.setAttribute(`width`,this.widthBuffer),this.sideBuffer=new m(new Float32Array(this.maxParticles*2),1),this.sideBuffer.setUsage(e),this.geometry.setAttribute(`side`,this.sideBuffer),this.uvBuffer=new m(new Float32Array(this.maxParticles*4),2),this.uvBuffer.setUsage(e),this.geometry.setAttribute(`uv`,this.uvBuffer),this.colorBuffer=new m(new Float32Array(this.maxParticles*8),4),this.colorBuffer.setUsage(e),this.geometry.setAttribute(`color`,this.colorBuffer)}expandBuffers(e){for(;e>=this.maxParticles;)this.maxParticles*=2;this.setupBuffers()}rebuildMaterial(){this.layers.mask=this.settings.layers.mask;let e={lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},resolution:{value:new H(1,1)},sizeAttenuation:{value:1},visibility:{value:1},alphaTest:{value:0}},t={};if(t.USE_UV=``,t.USE_COLOR_ALPHA=``,this.settings.material.map&&(t.USE_MAP=``,t.MAP_UV=vn(this.settings.material.map.channel),e.map=new h(this.settings.material.map),e.mapTransform=new h(new W().copy(this.settings.material.map.matrix))),this.settings.material.defines&&this.settings.material.defines.USE_COLOR_AS_ALPHA!==void 0&&(t.USE_COLOR_AS_ALPHA=``),this.settings.renderMode===$.Trail)this.material=new d({uniforms:e,defines:t,vertexShader:Cn,fragmentShader:Sn,transparent:this.settings.material.transparent,depthWrite:!this.settings.material.transparent,side:this.settings.material.side,blending:this.settings.material.blending||2,blendDst:this.settings.material.blendDst,blendSrc:this.settings.material.blendSrc,blendEquation:this.settings.material.blendEquation,premultipliedAlpha:this.settings.material.premultipliedAlpha});else throw Error(`render mode unavailable`)}update(){let e=0,t=0,n=0;this.systems.forEach(e=>{for(let t=0;t<e.particleNum;t++)n+=e.particles[t].previous.length*2}),n>this.maxParticles&&this.expandBuffers(n),this.systems.forEach(n=>{n.emitter.updateMatrixWorld&&(n.emitter.updateWorldMatrix(!0,!1),n.emitter.updateMatrixWorld(!0));let r=this.quaternion_,i=this.vector2_,a=this.vector3_;n.emitter.matrixWorld.decompose(i,r,a);let o=n.particles,s=n.particleNum,c=this.settings.uTileCount,l=this.settings.vTileCount,u=1/c,d=1/l;for(let r=0;r<s;r++){let i=o[r],s=i.uvTile%l,c=Math.floor(i.uvTile/l+.001),f=i.previous.values(),p=f.next(),m=p.value,h=m;p.done||(p=f.next());let g;g=p.value===void 0?h:p.value;for(let r=0;r<i.previous.length;r++,e+=2){if(this.positionBuffer.setXYZ(e,h.position.x,h.position.y,h.position.z),this.positionBuffer.setXYZ(e+1,h.position.x,h.position.y,h.position.z),n.worldSpace?(this.positionBuffer.setXYZ(e,h.position.x,h.position.y,h.position.z),this.positionBuffer.setXYZ(e+1,h.position.x,h.position.y,h.position.z)):(i.parentMatrix?this.vector_.copy(h.position).applyMatrix4(i.parentMatrix):this.vector_.copy(h.position).applyMatrix4(n.emitter.matrixWorld),this.positionBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.positionBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),n.worldSpace?(this.previousBuffer.setXYZ(e,m.position.x,m.position.y,m.position.z),this.previousBuffer.setXYZ(e+1,m.position.x,m.position.y,m.position.z)):(i.parentMatrix?this.vector_.copy(m.position).applyMatrix4(i.parentMatrix):this.vector_.copy(m.position).applyMatrix4(n.emitter.matrixWorld),this.previousBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.previousBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),n.worldSpace?(this.nextBuffer.setXYZ(e,g.position.x,g.position.y,g.position.z),this.nextBuffer.setXYZ(e+1,g.position.x,g.position.y,g.position.z)):(i.parentMatrix?this.vector_.copy(g.position).applyMatrix4(i.parentMatrix):this.vector_.copy(g.position).applyMatrix4(n.emitter.matrixWorld),this.nextBuffer.setXYZ(e,this.vector_.x,this.vector_.y,this.vector_.z),this.nextBuffer.setXYZ(e+1,this.vector_.x,this.vector_.y,this.vector_.z)),this.sideBuffer.setX(e,-1),this.sideBuffer.setX(e+1,1),n.worldSpace)this.widthBuffer.setX(e,h.size),this.widthBuffer.setX(e+1,h.size);else if(i.parentMatrix)this.widthBuffer.setX(e,h.size),this.widthBuffer.setX(e+1,h.size);else{let t=(Math.abs(a.x)+Math.abs(a.y)+Math.abs(a.z))/3;this.widthBuffer.setX(e,h.size*t),this.widthBuffer.setX(e+1,h.size*t)}this.uvBuffer.setXY(e,(r/i.previous.length+s)*u,(l-c-1)*d),this.uvBuffer.setXY(e+1,(r/i.previous.length+s)*u,(l-c)*d),this.colorBuffer.setXYZW(e,h.color.x,h.color.y,h.color.z,h.color.w),this.colorBuffer.setXYZW(e+1,h.color.x,h.color.y,h.color.z,h.color.w),r+1<i.previous.length&&(this.indexBuffer.setX(t*3,e),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+2),t++,this.indexBuffer.setX(t*3,e+2),this.indexBuffer.setX(t*3+1,e+1),this.indexBuffer.setX(t*3+2,e+3),t++),m=h,h=g,p.done||(p=f.next(),p.value!==void 0&&(g=p.value))}}}),this.positionBuffer.clearUpdateRanges(),this.positionBuffer.addUpdateRange(0,e*3),this.positionBuffer.needsUpdate=!0,this.previousBuffer.clearUpdateRanges(),this.previousBuffer.addUpdateRange(0,e*3),this.previousBuffer.needsUpdate=!0,this.nextBuffer.clearUpdateRanges(),this.nextBuffer.addUpdateRange(0,e*3),this.nextBuffer.needsUpdate=!0,this.sideBuffer.clearUpdateRanges(),this.sideBuffer.addUpdateRange(0,e),this.sideBuffer.needsUpdate=!0,this.widthBuffer.clearUpdateRanges(),this.widthBuffer.addUpdateRange(0,e),this.widthBuffer.needsUpdate=!0,this.uvBuffer.clearUpdateRanges(),this.uvBuffer.addUpdateRange(0,e*2),this.uvBuffer.needsUpdate=!0,this.colorBuffer.clearUpdateRanges(),this.colorBuffer.addUpdateRange(0,e*4),this.colorBuffer.needsUpdate=!0,this.indexBuffer.clearUpdateRanges(),this.indexBuffer.addUpdateRange(0,t*3),this.indexBuffer.needsUpdate=!0,this.geometry.setDrawRange(0,t*3)}dispose(){this.geometry.dispose()}},Tn=class e{get geometry(){return this._geometry}set geometry(e){if(this._geometry=e,e===void 0||typeof e==`string`)return;let t=new g;this._triangleIndexToArea.length=0;let n=0;if(!e.getIndex())return;let r=e.getIndex().array,i=r.length/3;this._triangleIndexToArea.push(0);for(let a=0;a<i;a++)t.setFromAttributeAndIndices(e.getAttribute(`position`),r[a*3],r[a*3+1],r[a*3+2]),n+=t.getArea(),this._triangleIndexToArea.push(n);e.userData.triangleIndexToArea=this._triangleIndexToArea}constructor(e){this.type=`mesh_surface`,this._triangleIndexToArea=[],this._tempA=new n,this._tempB=new n,this._tempC=new n,e&&(this.geometry=e)}initialize(e){let t=this._geometry;if(!t||t.getIndex()===null){e.position.set(0,0,0),e.velocity.set(0,0,1).multiplyScalar(e.startSpeed);return}let n=this._triangleIndexToArea.length-1,r=0,i=n,a=Math.random()*this._triangleIndexToArea[n];for(;r+1<i;){let e=Math.floor((r+i)/2);a<this._triangleIndexToArea[e]?i=e:r=e}let o=Math.random(),s=Math.random();o+s>1&&(o=1-o,s=1-s);let c=t.getIndex().array[r*3],l=t.getIndex().array[r*3+1],u=t.getIndex().array[r*3+2],d=t.getAttribute(`position`);this._tempA.fromBufferAttribute(d,c),this._tempB.fromBufferAttribute(d,l),this._tempC.fromBufferAttribute(d,u),this._tempB.sub(this._tempA),this._tempC.sub(this._tempA),this._tempA.addScaledVector(this._tempB,o).addScaledVector(this._tempC,s),e.position.copy(this._tempA),this._tempA.copy(this._tempB).cross(this._tempC).normalize(),e.velocity.copy(this._tempA).normalize().multiplyScalar(e.startSpeed)}toJSON(){return{type:`mesh_surface`,mesh:this._geometry?this._geometry.uuid:``}}static fromJSON(t,n){return new e(n.geometries[t.geometry])}clone(){return new e(this._geometry)}update(e,t){}};Gt({id:`three.quarks`,initialize:()=>{},emitterShapes:[{type:`mesh_surface`,params:[[`geometry`,[`geometry`]]],constructor:Tn,loadJSON:Tn.fromJSON}],behaviors:[]});var En=class e extends c{constructor(){super(),this.batches=[],this.systemToBatchIndex=new Map,this.type=`BatchedRenderer`,this.depthTexture=null}static equals(e,t){return e.material.side===t.material.side&&e.material.blending===t.material.blending&&e.material.blendSrc===t.material.blendSrc&&e.material.blendDst===t.material.blendDst&&e.material.blendEquation===t.material.blendEquation&&e.material.premultipliedAlpha===t.material.premultipliedAlpha&&e.material.transparent===t.material.transparent&&e.material.depthTest===t.material.depthTest&&e.material.type===t.material.type&&e.material.alphaTest===t.material.alphaTest&&e.material.map===t.material.map&&e.renderMode===t.renderMode&&e.blendTiles===t.blendTiles&&e.softParticles===t.softParticles&&e.softFarFade===t.softFarFade&&e.softNearFade===t.softNearFade&&e.uTileCount===t.uTileCount&&e.vTileCount===t.vTileCount&&e.instancingGeometry===t.instancingGeometry&&e.renderOrder===t.renderOrder&&e.layers.mask===t.layers.mask}addSystem(t){t._renderer=this;let n=t.getRendererSettings();for(let r=0;r<this.batches.length;r++)if(e.equals(this.batches[r].settings,n)){this.batches[r].addSystem(t),this.systemToBatchIndex.set(t,r);return}let r;switch(n.renderMode){case $.Trail:r=new wn(n);break;case $.Mesh:case $.BillBoard:case $.VerticalBillBoard:case $.HorizontalBillBoard:case $.StretchedBillBoard:r=new xn(n);break}this.depthTexture&&r.applyDepthTexture(this.depthTexture),r.addSystem(t),this.batches.push(r),this.systemToBatchIndex.set(t,this.batches.length-1),this.add(r)}deleteSystem(e){let t=this.systemToBatchIndex.get(e);t!=null&&(this.batches[t].removeSystem(e),this.systemToBatchIndex.delete(e))}setDepthTexture(e){this.depthTexture=e;for(let t of this.batches)t.applyDepthTexture(e)}updateSystem(e){this.deleteSystem(e),this.addSystem(e)}update(e){this.systemToBatchIndex.forEach((t,n)=>{n.update(e)});for(let e=0;e<this.batches.length;e++)this.batches[e].update()}};tn();export{K as a,U as c,Me as i,dn as n,R as o,$ as r,gt as s,En as t};
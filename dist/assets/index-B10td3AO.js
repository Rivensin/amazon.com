var St=Object.defineProperty;var ot=a=>{throw TypeError(a)};var wt=(a,e,t)=>e in a?St(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var b=(a,e,t)=>wt(a,typeof e!="symbol"?e+"":e,t),R=(a,e,t)=>e.has(a)||ot("Cannot "+t);var V=(a,e,t)=>(R(a,e,"read from private field"),t?t.call(a):e.get(a)),B=(a,e,t)=>e.has(a)?ot("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,t),ct=(a,e,t,c)=>(R(a,e,"write to private field"),c?c.call(a,t):e.set(a,t),t),ut=(a,e,t)=>(R(a,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function t(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerPolicy&&(d.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?d.credentials="include":s.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function c(s){if(s.ep)return;s.ep=!0;const d=t(s);fetch(s.href,d)}})();function E(a){return(Math.round(a)/100).toFixed(2)}class et{constructor(e){b(this,"id");b(this,"image");b(this,"name");b(this,"rating");b(this,"priceCents");b(this,"keywords");this.id=e.id,this.image=e.image,this.name=e.name,this.rating=e.rating,this.priceCents=e.priceCents,this.keywords=e.keywords}getStarUrl(){return`images/ratings/rating-${this.rating.stars*10}.png`}getPrice(){return`$${E(this.priceCents)}`}extraInfoHTML(){return""}}class Mt extends et{constructor(t){super(t);b(this,"sizeChartLink");this.sizeChartLink=t.sizeChartLink}extraInfoHTML(){return`<a href="${this.sizeChartLink}" target="_blank">Size Chart</a>`}}class kt extends et{constructor(t){super(t);b(this,"instructionLink");b(this,"warrantyLink");this.instructionLink=t.instructionLink,this.warrantyLink=t.warrantyLink}extraInfoHTML(){return`
      <a href="${this.instructionLink}" target="_blank">Instruction</a>
      <a href="${this.warrantyLink}" target="_blank">Warranty</a>
    `}}let Y=[];async function jt(){return Y=(await(await fetch("https://supersimplebackend.dev/products")).json()).map(t=>t.type==="clothing"?new Mt(t):t.type==="appliance"?new kt(t):new et(t)),Y}function mt(a){let e;return Y.forEach(t=>{t.id===a&&(e=t)}),e}function qt(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var U={exports:{}},Lt=U.exports,dt;function bt(){return dt||(dt=1,function(a,e){(function(t,c){a.exports=c()})(Lt,function(){var t=1e3,c=6e4,s=36e5,d="millisecond",p="second",y="minute",v="hour",k="day",F="week",L="month",nt="quarter",C="year",_="date",it="Invalid Date",pt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,vt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$t={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(u){var i=["th","st","nd","rd"],r=u%100;return"["+u+(i[(r-20)%10]||i[r]||i[0])+"]"}},Z=function(u,i,r){var o=String(u);return!o||o.length>=i?u:""+Array(i+1-o.length).join(r)+u},gt={s:Z,z:function(u){var i=-u.utcOffset(),r=Math.abs(i),o=Math.floor(r/60),n=r%60;return(i<=0?"+":"-")+Z(o,2,"0")+":"+Z(n,2,"0")},m:function u(i,r){if(i.date()<r.date())return-u(r,i);var o=12*(r.year()-i.year())+(r.month()-i.month()),n=i.clone().add(o,L),l=r-n<0,m=i.clone().add(o+(l?-1:1),L);return+(-(o+(r-n)/(l?n-m:m-n))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:L,y:C,w:F,d:k,D:_,h:v,m:y,s:p,ms:d,Q:nt}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},P="en",D={};D[P]=$t;var at="$isDayjsObject",K=function(u){return u instanceof Q||!(!u||!u[at])},W=function u(i,r,o){var n;if(!i)return P;if(typeof i=="string"){var l=i.toLowerCase();D[l]&&(n=l),r&&(D[l]=r,n=l);var m=i.split("-");if(!n&&m.length>1)return u(m[0])}else{var h=i.name;D[h]=i,n=h}return!o&&n&&(P=n),n||!o&&P},g=function(u,i){if(K(u))return u.clone();var r=typeof i=="object"?i:{};return r.date=u,r.args=arguments,new Q(r)},f=gt;f.l=W,f.i=K,f.w=function(u,i){return g(u,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var Q=function(){function u(r){this.$L=W(r.locale,null,!0),this.parse(r),this.$x=this.$x||r.x||{},this[at]=!0}var i=u.prototype;return i.parse=function(r){this.$d=function(o){var n=o.date,l=o.utc;if(n===null)return new Date(NaN);if(f.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var m=n.match(pt);if(m){var h=m[2]-1||0,$=(m[7]||"0").substring(0,3);return l?new Date(Date.UTC(m[1],h,m[3]||1,m[4]||0,m[5]||0,m[6]||0,$)):new Date(m[1],h,m[3]||1,m[4]||0,m[5]||0,m[6]||0,$)}}return new Date(n)}(r),this.init()},i.init=function(){var r=this.$d;this.$y=r.getFullYear(),this.$M=r.getMonth(),this.$D=r.getDate(),this.$W=r.getDay(),this.$H=r.getHours(),this.$m=r.getMinutes(),this.$s=r.getSeconds(),this.$ms=r.getMilliseconds()},i.$utils=function(){return f},i.isValid=function(){return this.$d.toString()!==it},i.isSame=function(r,o){var n=g(r);return this.startOf(o)<=n&&n<=this.endOf(o)},i.isAfter=function(r,o){return g(r)<this.startOf(o)},i.isBefore=function(r,o){return this.endOf(o)<g(r)},i.$g=function(r,o,n){return f.u(r)?this[o]:this.set(n,r)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(r,o){var n=this,l=!!f.u(o)||o,m=f.p(r),h=function(T,M){var O=f.w(n.$u?Date.UTC(n.$y,M,T):new Date(n.$y,M,T),n);return l?O:O.endOf(k)},$=function(T,M){return f.w(n.toDate()[T].apply(n.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(M)),n)},S=this.$W,w=this.$M,j=this.$D,x="set"+(this.$u?"UTC":"");switch(m){case C:return l?h(1,0):h(31,11);case L:return l?h(1,w):h(0,w+1);case F:var I=this.$locale().weekStart||0,A=(S<I?S+7:S)-I;return h(l?j-A:j+(6-A),w);case k:case _:return $(x+"Hours",0);case v:return $(x+"Minutes",1);case y:return $(x+"Seconds",2);case p:return $(x+"Milliseconds",3);default:return this.clone()}},i.endOf=function(r){return this.startOf(r,!1)},i.$set=function(r,o){var n,l=f.p(r),m="set"+(this.$u?"UTC":""),h=(n={},n[k]=m+"Date",n[_]=m+"Date",n[L]=m+"Month",n[C]=m+"FullYear",n[v]=m+"Hours",n[y]=m+"Minutes",n[p]=m+"Seconds",n[d]=m+"Milliseconds",n)[l],$=l===k?this.$D+(o-this.$W):o;if(l===L||l===C){var S=this.clone().set(_,1);S.$d[h]($),S.init(),this.$d=S.set(_,Math.min(this.$D,S.daysInMonth())).$d}else h&&this.$d[h]($);return this.init(),this},i.set=function(r,o){return this.clone().$set(r,o)},i.get=function(r){return this[f.p(r)]()},i.add=function(r,o){var n,l=this;r=Number(r);var m=f.p(o),h=function(w){var j=g(l);return f.w(j.date(j.date()+Math.round(w*r)),l)};if(m===L)return this.set(L,this.$M+r);if(m===C)return this.set(C,this.$y+r);if(m===k)return h(1);if(m===F)return h(7);var $=(n={},n[y]=c,n[v]=s,n[p]=t,n)[m]||1,S=this.$d.getTime()+r*$;return f.w(S,this)},i.subtract=function(r,o){return this.add(-1*r,o)},i.format=function(r){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||it;var l=r||"YYYY-MM-DDTHH:mm:ssZ",m=f.z(this),h=this.$H,$=this.$m,S=this.$M,w=n.weekdays,j=n.months,x=n.meridiem,I=function(M,O,N,z){return M&&(M[O]||M(o,l))||N[O].slice(0,z)},A=function(M){return f.s(h%12||12,M,"0")},T=x||function(M,O,N){var z=M<12?"AM":"PM";return N?z.toLowerCase():z};return l.replace(vt,function(M,O){return O||function(N){switch(N){case"YY":return String(o.$y).slice(-2);case"YYYY":return f.s(o.$y,4,"0");case"M":return S+1;case"MM":return f.s(S+1,2,"0");case"MMM":return I(n.monthsShort,S,j,3);case"MMMM":return I(j,S);case"D":return o.$D;case"DD":return f.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return I(n.weekdaysMin,o.$W,w,2);case"ddd":return I(n.weekdaysShort,o.$W,w,3);case"dddd":return w[o.$W];case"H":return String(h);case"HH":return f.s(h,2,"0");case"h":return A(1);case"hh":return A(2);case"a":return T(h,$,!0);case"A":return T(h,$,!1);case"m":return String($);case"mm":return f.s($,2,"0");case"s":return String(o.$s);case"ss":return f.s(o.$s,2,"0");case"SSS":return f.s(o.$ms,3,"0");case"Z":return m}return null}(M)||m.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(r,o,n){var l,m=this,h=f.p(o),$=g(r),S=($.utcOffset()-this.utcOffset())*c,w=this-$,j=function(){return f.m(m,$)};switch(h){case C:l=j()/12;break;case L:l=j();break;case nt:l=j()/3;break;case F:l=(w-S)/6048e5;break;case k:l=(w-S)/864e5;break;case v:l=w/s;break;case y:l=w/c;break;case p:l=w/t;break;default:l=w}return n?l:f.a(l)},i.daysInMonth=function(){return this.endOf(L).$D},i.$locale=function(){return D[this.$L]},i.locale=function(r,o){if(!r)return this.$L;var n=this.clone(),l=W(r,o,!0);return l&&(n.$L=l),n},i.clone=function(){return f.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},u}(),st=Q.prototype;return g.prototype=st,[["$ms",d],["$s",p],["$m",y],["$H",v],["$W",k],["$M",L],["$y",C],["$D",_]].forEach(function(u){st[u[1]]=function(i){return this.$g(i,u[0],u[1])}}),g.extend=function(u,i){return u.$i||(u(i,Q,g),u.$i=!0),g},g.locale=W,g.isDayjs=K,g.unix=function(u){return g(1e3*u)},g.en=D[P],g.Ls=D,g.p={},g})}(U)),U.exports}var Ct=bt();const Ot=qt(Ct),rt=[{id:"1",deliveryDays:7,priceCents:0},{id:"2",deliveryDays:3,priceCents:499},{id:"3",deliveryDays:1,priceCents:999}];function yt(a){let e;return rt.forEach(t=>{t.id===a&&(e=t)}),e||e[0]}function Dt(a){const e=a.format("dddd");return e==="Saturday"||e==="Sunday"}function lt(a){let{deliveryDays:e}=a,t=Ot();for(;e>0;)t=t.add(1,"day"),Dt(t)||e--;return t.format("dddd, MMMM D")}const ft=JSON.parse(localStorage.getItem("orders"))||[];function It(a){ft.unshift(a),Tt()}function Tt(){localStorage.setItem("orders",JSON.stringify(ft))}function G(){let a=0,e=0;q.cartItems.forEach(p=>{const y=mt(p.productId);a+=y.priceCents*p.quantity;const v=yt(p.deliveryOptionId);e+=v.priceCents});const t=a+e,c=t*.1,s=t+c,d=`
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (${q.calculateCartQuantity()}):</div>
      <div class="payment-summary-money">$${E(a)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money js-payment-summary-money">$${E(e)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${E(t)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${E(c)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money js-total-payment-summary-money">$${E(s)}</div>
    </div>

    <button class="place-order-button button-primary js-place-order">
      Place your order
    </button>
  `;document.querySelector(".js-payment-summary").innerHTML=d,document.querySelector(".js-place-order").addEventListener("click",async()=>{try{const y=await(await fetch("https://supersimplebackend.dev/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:q})})).json();It(y)}catch{console.log("Unexpected Error.Try Again Later")}q.resetCart(),window.location.href="orders.html"})}function X(){const a=q.calculateCartQuantity();return document.querySelector(".return-to-home-link").innerHTML=`${a} items`,a}function tt(){let a="";q.cartItems.forEach(t=>{const{productId:c}=t,s=mt(c),{deliveryOptionId:d}=t,p=yt(d),y=lt(p);a+=`
    <div class="cart-item-container js-cart-item-container-${s.id} js-cart-item-container">
      <div class="delivery-date">
        Delivery date: ${y}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${s.image}">

        <div class="cart-item-details">
          <div class="product-name js-product-name-${s.id}">
            ${s.name}
          </div>
          <div class="product-price">
            ${s.getPrice()}
          </div>
          <div class="product-quantity js-product-quantity-${s.id}">
            <span>
              Quantity:<span class="quantity-label js-quantity-label-${s.id}">${t.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${s.id}">
              Update
            </span>
            <input class="quantity-input js-quantity-input js-quantity-input-${s.id}" data-product-id="${s.id}">
            <span class="link-primary save-quantity-link js-save-link" data-product-id="${s.id}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${s.id}" data-product-id="${s.id}">
              Delete
            </span>
          </div>
        </div>
        
        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${e(s,t)}
        
          
        </div>
      </div>
    </div>
    `}),document.querySelector(".js-order-summary").innerHTML=a,document.querySelectorAll(".js-delete-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:c}=t.dataset;q.removeFromCart(c),X(),tt(),G()})}),document.querySelectorAll(".js-update-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:c}=t.dataset;document.querySelector(`.js-cart-item-container-${c}`).classList.add("is-editing-quantity")})}),document.querySelectorAll(".js-save-link").forEach(t=>{t.addEventListener("click",()=>{const{productId:c}=t.dataset,s=document.querySelector(`.js-quantity-input-${c}`),d=Number(s.value);q.updateQuantity(c,d),G(),X()})}),document.querySelectorAll(".js-quantity-input").forEach(t=>{t.addEventListener("keydown",c=>{if(c.key==="Enter"){const{productId:s}=t.dataset,d=document.querySelector(`.js-quantity-input-${s}`),p=Number(d.value);q.updateQuantity(s,p),X()}})});function e(t,c){let s="";return rt.forEach(d=>{const{id:p}=d,y=lt(d),v=d.priceCents===0?"FREE Shipping":`$${E(d.priceCents)}-`,k=d.id===c.deliveryOptionId;s+=`
        <div class="delivery-option js-delivery-option 
                    js-delivery-option-${t.id}-${p}" 
            data-product-id="${t.id}"
            data-delivery-option-id="${d.id}">
          <input type="radio"
            ${k?"checked":""}
            class="delivery-option-input js-delivery-option-input-${t.id}-${p}"
            name="delivery-option-${t.id}">
          <div>
            <div class="delivery-option-date">
              ${y}
            </div>
            <div class="delivery-option-price">
              ${v}
            </div>
          </div>
        </div>
      `}),s}document.querySelectorAll(".js-delivery-option").forEach(t=>{t.addEventListener("click",()=>{const{productId:c,deliveryOptionId:s}=t.dataset;q.updateDeliveryOption(c,s),tt(),G()})})}var H,J,ht;class Et{constructor(e){B(this,J);b(this,"cartItems");B(this,H);ct(this,H,e),ut(this,J,ht).call(this)}saveToStorage(){localStorage.setItem(V(this,H),JSON.stringify(this.cartItems))}addToCart(e){const t=document.querySelector(`.js-quantity-selector-${e}`)||"",c=Number(t.value)||1;let s;this.cartItems.forEach(d=>{e===d.productId&&(s=d)}),s?s.quantity+=c:this.cartItems.push({productId:e,quantity:c,deliveryOptionId:"1"}),this.saveToStorage()}removeFromCart(e){const t=[];this.cartItems.forEach(c=>{c.productId!==e&&t.push(c)}),this.cartItems=t,this.saveToStorage()}updateDeliveryOption(e,t){let c;this.cartItems.forEach(d=>{e===d.productId&&(c=d)});let s;rt.forEach(d=>{d.id===t&&(s=d)}),s&&c&&(c.deliveryOptionId=t,this.saveToStorage())}calculateCartQuantity(){let e=0;return this.cartItems.forEach(t=>{e+=t.quantity}),e}updateQuantity(e,t){this.cartItems.forEach(c=>{c.productId===e&&t>=0&&t<1e3&&(c.quantity=t,tt(),this.saveToStorage())}),document.querySelector(`.js-cart-item-container-${e}`).classList.remove("is-editing-quantity")}resetCart(){this.cartItems=[],this.saveToStorage()}}H=new WeakMap,J=new WeakSet,ht=function(){this.cartItems=JSON.parse(localStorage.getItem(V(this,H))),this.cartItems||(this.cartItems=[{productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",quantity:2,deliveryOptionId:"1"},{productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",quantity:1,deliveryOptionId:"2"}])};const q=new Et("cart-oop");new Promise(async()=>{await jt(),console.log("amazon.js is running!"),_t()});function _t(){let a="";const t=new URL(window.location.href).searchParams.get("search");let c=Y;t&&(c=Y.filter(y=>{let v=!1;return y.keywords.forEach(k=>{k.toLowerCase().includes(t.toLowerCase())&&(v=!0)}),v||y.name.toLowerCase().includes(t.toLowerCase())})),c.forEach(y=>{const v=`/amazon.com/${y.image}`;a+=` 
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${v}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${y.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${y.getStarUrl()}">
          <div class="product-rating-count link-primary">
            ${y.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${y.getPrice()}
        </div>

        <div class="product-quantity-container" >
          <select class="js-quantity-selector-${y.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
    
        ${y.extraInfoHTML()}

        <div class="product-spacer"></div>

        <div class="added-to-cart js-added-to-cart-${y.id}">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${y.id}">
          Add to Cart
        </button>
      </div>`}),document.querySelector(".js-product-grid").innerHTML=a,document.querySelectorAll(".js-add-to-cart").forEach(y=>{y.addEventListener("click",()=>{const{productId:v}=y.dataset;q.addToCart(v),s(),p(v)})}),document.querySelector(".js-search-button").addEventListener("click",()=>{const y=document.querySelector(".js-search-bar").value;window.location.href=`index.html?search=${y}`}),document.querySelector(".js-search-bar").addEventListener("keydown",y=>{if(y.key==="Enter"){const v=document.querySelector(".js-search-bar").value;window.location.href=`index.html?search=${v}`}});function s(){const y=q.calculateCartQuantity();document.querySelector(".js-cart-quantity").innerHTML=y}s();let d;function p(y){document.querySelector(`.js-added-to-cart-${y}`).classList.add("added-to-cart-visible"),clearTimeout(d),d=setTimeout(()=>{document.querySelector(`.js-added-to-cart-${y}`).classList.remove("added-to-cart-visible")},2e3)}}

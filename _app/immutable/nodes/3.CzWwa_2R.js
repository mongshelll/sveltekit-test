import{s as y,c as A,u as F,g as N,a as O,x as Y,y as H,z as j,A as Q,o as Z,n as ee}from"../chunks/scheduler.uGQJRBNU.js";import{S as M,i as T,e as p,s as C,c as m,k as g,g as x,a as z,f as u,b as v,d as D,m as h,t as E,h as I,z as B,A as K,v as q,w as P,x as L,y as S,j as R,l as W}from"../chunks/index.Dhsj7aeK.js";import{s as te}from"../chunks/stores.C-3Uk91v.js";function X(r,e){const t={},s={},l={$$scope:1};let o=r.length;for(;o--;){const n=r[o],a=e[o];if(a){for(const c in n)c in a||(s[c]=1);for(const c in a)l[c]||(t[c]=a[c],l[c]=1);r[o]=a}else for(const c in n)l[c]=1}for(const n in s)n in t||(t[n]=void 0);return t}function se(r){let e,t,s,l='<button type="button" class="layout-ebbtn layout-go-back">뒤로가기</button>',o,n,a,c,i,d,$='<button type="button" class="layout-ebbtn layout-alert">알림</button> <div class="header-fullmenu"><button type="button" class="layout-ebbtn layout-fullmenu">메뉴</button></div>',b,k;const U=r[2].default,_=A(U,r,r[1],null);return{c(){e=p("div"),t=p("div"),s=p("div"),s.innerHTML=l,o=C(),n=p("div"),a=p("h2"),_&&_.c(),i=C(),d=p("div"),d.innerHTML=$,this.h()},l(f){e=m(f,"DIV",{id:!0,class:!0});var w=g(e);t=m(w,"DIV",{class:!0});var V=g(t);s=m(V,"DIV",{class:!0,"data-svelte-h":!0}),x(s)!=="svelte-1prpq15"&&(s.innerHTML=l),o=z(V),n=m(V,"DIV",{class:!0});var G=g(n);a=m(G,"H2",{class:!0,"aria-hidden":!0});var J=g(a);_&&_.l(J),J.forEach(u),G.forEach(u),i=z(V),d=m(V,"DIV",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-18ro4ns"&&(d.innerHTML=$),V.forEach(u),w.forEach(u),this.h()},h(){v(s,"class","header-back"),v(a,"class","title svelte-8sdpj0"),v(a,"aria-hidden",c=r[0]?"false":"true"),v(n,"class","header-title"),v(d,"class","header-btn"),v(t,"class","header-area"),v(e,"id","header"),v(e,"class",b="header "+(r[0]?"onScroll":"")+" svelte-8sdpj0")},m(f,w){D(f,e,w),h(e,t),h(t,s),h(t,o),h(t,n),h(n,a),_&&_.m(a,null),h(t,i),h(t,d),k=!0},p(f,[w]){_&&_.p&&(!k||w&2)&&F(_,U,f,f[1],k?O(U,f[1],w,null):N(f[1]),null),(!k||w&1&&c!==(c=f[0]?"false":"true"))&&v(a,"aria-hidden",c),(!k||w&1&&b!==(b="header "+(f[0]?"onScroll":"")+" svelte-8sdpj0"))&&v(e,"class",b)},i(f){k||(E(_,f),k=!0)},o(f){I(_,f),k=!1},d(f){f&&u(e),_&&_.d(f)}}}function ae(r,e,t){let{$$slots:s={},$$scope:l}=e,o=!1;const n=te.subscribe(a=>{t(0,o=a.scrolled)});return Y(()=>{n()}),r.$$set=a=>{"$$scope"in a&&t(1,l=a.$$scope)},[o,l,s]}class le extends M{constructor(e){super(),T(this,e,ae,se,y,{})}}function ne(r){let e,t,s,l;const o=r[2].default,n=A(o,r,r[1],null);let a=[{id:"container"},r[0]],c={};for(let i=0;i<a.length;i+=1)c=H(c,a[i]);return{c(){e=p("div"),t=p("div"),s=p("div"),n&&n.c(),this.h()},l(i){e=m(i,"DIV",{id:!0});var d=g(e);t=m(d,"DIV",{class:!0});var $=g(t);s=m($,"DIV",{class:!0});var b=g(s);n&&n.l(b),b.forEach(u),$.forEach(u),d.forEach(u),this.h()},h(){v(s,"class","contents"),v(t,"class","contents-area"),B(e,c),K(e,"svelte-r3oqqk",!0)},m(i,d){D(i,e,d),h(e,t),h(t,s),n&&n.m(s,null),l=!0},p(i,[d]){n&&n.p&&(!l||d&2)&&F(n,o,i,i[1],l?O(o,i[1],d,null):N(i[1]),null),B(e,c=X(a,[{id:"container"},d&1&&i[0]])),K(e,"svelte-r3oqqk",!0)},i(i){l||(E(n,i),l=!0)},o(i){I(n,i),l=!1},d(i){i&&u(e),n&&n.d(i)}}}function oe(r,e,t){const s=[];let l=j(e,s),{$$slots:o={},$$scope:n}=e;return r.$$set=a=>{e=H(H({},e),Q(a)),t(0,l=j(e,s)),"$$scope"in a&&t(1,n=a.$$scope)},[l,n,o]}class ie extends M{constructor(e){super(),T(this,e,oe,ne,y,{})}}function re(r){let e,t,s,l;const o=r[2].default,n=A(o,r,r[1],null);let a=[{id:"footer"},{class:"footer"},r[0]],c={};for(let i=0;i<a.length;i+=1)c=H(c,a[i]);return{c(){e=p("div"),t=p("div"),s=p("div"),n&&n.c(),this.h()},l(i){e=m(i,"DIV",{id:!0,class:!0});var d=g(e);t=m(d,"DIV",{class:!0});var $=g(t);s=m($,"DIV",{class:!0});var b=g(s);n&&n.l(b),b.forEach(u),$.forEach(u),d.forEach(u),this.h()},h(){v(s,"class","btn-pack"),v(t,"class","footer-area"),B(e,c)},m(i,d){D(i,e,d),h(e,t),h(t,s),n&&n.m(s,null),l=!0},p(i,[d]){n&&n.p&&(!l||d&2)&&F(n,o,i,i[1],l?O(o,i[1],d,null):N(i[1]),null),B(e,c=X(a,[{id:"footer"},{class:"footer"},d&1&&i[0]]))},i(i){l||(E(n,i),l=!0)},o(i){I(n,i),l=!1},d(i){i&&u(e),n&&n.d(i)}}}function ce(r,e,t){const s=[];let l=j(e,s),{$$slots:o={},$$scope:n}=e;return r.$$set=a=>{e=H(H({},e),Q(a)),t(0,l=j(e,s)),"$$scope"in a&&t(1,n=a.$$scope)},[l,n,o]}class de extends M{constructor(e){super(),T(this,e,ce,re,y,{})}}function ue(r){let e,t;const s=r[1].default,l=A(s,r,r[0],null);return{c(){e=p("button"),l&&l.c(),this.h()},l(o){e=m(o,"BUTTON",{type:!0,class:!0});var n=g(e);l&&l.l(n),n.forEach(u),this.h()},h(){v(e,"type","button"),v(e,"class","ebbtn bg-mix size-xl-full")},m(o,n){D(o,e,n),l&&l.m(e,null),t=!0},p(o,[n]){l&&l.p&&(!t||n&1)&&F(l,s,o,o[0],t?O(s,o[0],n,null):N(o[0]),null)},i(o){t||(E(l,o),t=!0)},o(o){I(l,o),t=!1},d(o){o&&u(e),l&&l.d(o)}}}function fe(r,e,t){let{$$slots:s={},$$scope:l}=e;return r.$$set=o=>{"$$scope"in o&&t(0,l=o.$$scope)},[l,s]}class ve extends M{constructor(e){super(),T(this,e,fe,ue,y,{})}}function pe(r){let e;return{c(){e=R("디지털페퍼 새소식")},l(t){e=W(t,"디지털페퍼 새소식")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function me(r){let e,t=`<div class="news-cont-top"><div class="jumbotron-pack"><h2 class="ebh2 bold">내 계좌 기능이<br/>
					새롭게 달라졌어요!</h2> <div class="text">내 계좌를 한눈에 볼 수 있는 전체계좌조회 기능. 디자인 변경과<br/>
					정보 재배치로 새롭게 리뉴얼 했어요. 어떻게 달라졌는지<br/>
					자세히 알아볼까요?</div></div></div> <div class="news-cont"><div class="part"><div class="cont-wrap"><div class="text-box"><h3 class="title"><span class="color-01">화면 로딩 중,</span><br/>
							귀여운 거 보고 계세요</h3> <div class="desc">로딩 시간이 너무 길다구요? 귀여운거 보면서 조금만<br/>
							기다려주세요. 시간은 소중하니까요 ❤️</div></div> <div class="img-box"><img src="/image/main/img-renewal01.png" alt="전체계좌목록. 로딩화면. 계좌목록을 불러오고 있어요. 조금만 기다려주세요."/></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">간결</span>하지만, 있을 건 다 있다!</h2> <div class="desc">작은 화면 속 많은 정보를 보기쉽게 정리했어요.<br/>
							이제 계좌복사 버튼도 잘 눌리고, 계좌상세 화면<br/>
							이동도 쉬워졌을 거에요.</div></div> <div class="img-box"><img src="/image/main/img-renewal02.png" alt="전체계좌목록. 예적금. 입출금 페퍼스 파킹통장2 계좌번호 복사하기 버튼, 잔액, 이체버튼 예시"/></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">적금 만기 달성률</span>을<br/>
							확인해보세요</h2> <div class="desc">적금 만기일만 기다리신다구요? 만기까지<br/>
							얼마나 남았는지 알려주는 상태바가 추가되었어요.<br/>
							계좌상세 조회 없이, 계좌목록에서 확인해 보세요.</div></div> <div class="img-box"><img src="/image/main/img-renewal03.png" alt="전체계좌목록. 페퍼스 2030 적금. 계좌번호 복사하기 버튼, 잔액, 정기적금 입금버튼, 만기일 안내 상태바, 만기일 2024.08.12 예시"/></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">계좌복사 팝업,</span><br/>
							자동으로 사라져요</h2> <div class="desc">계좌복사했을 뿐인데, 경고창에 깜짝 놀라셨죠?<br/>
							빨간색 전면 팝업 대신, 스르륵 생겼다가 사라지는<br/>
							팝업으로 변경했어요. 이젠 놀라지 않기로 약속 🤙🏻</div></div> <div class="img-box"><img src="/image/main/img-renewal04.png" alt="페퍼스 파킹통장2 계좌번호가 복사 되었습니다."/></div></div></div></div> <div class="news-cont-bottom"><div class="part"><div class="round-bg-pack tac">새롭게 달라진 내 계좌 기능!<br/>
					아래 링크로 확인해보세요 👇🏻</div></div></div>`;return{c(){e=p("div"),e.innerHTML=t,this.h()},l(s){e=m(s,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1155le4"&&(e.innerHTML=t),this.h()},h(){v(e,"class","pepper-news")},m(s,l){D(s,e,l)},p:ee,d(s){s&&u(e)}}}function _e(r){let e;return{c(){e=R("새로운 내 계좌 기능 보러가기")},l(t){e=W(t,"새로운 내 계좌 기능 보러가기")},m(t,s){D(t,e,s)},d(t){t&&u(e)}}}function $e(r){let e,t;return e=new ve({props:{$$slots:{default:[_e]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment)},l(s){P(e.$$.fragment,s)},m(s,l){L(e,s,l),t=!0},p(s,l){const o={};l&2&&(o.$$scope={dirty:l,ctx:s}),e.$set(o)},i(s){t||(E(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function he(r){let e,t,s,l,o,n;return e=new le({props:{$$slots:{default:[pe]},$$scope:{ctx:r}}}),s=new ie({props:{class:"addBg",style:`padding-bottom: ${r[0]}px;`,$$slots:{default:[me]},$$scope:{ctx:r}}}),o=new de({props:{class:"footer",$$slots:{default:[$e]},$$scope:{ctx:r}}}),{c(){q(e.$$.fragment),t=C(),q(s.$$.fragment),l=C(),q(o.$$.fragment)},l(a){P(e.$$.fragment,a),t=z(a),P(s.$$.fragment,a),l=z(a),P(o.$$.fragment,a)},m(a,c){L(e,a,c),D(a,t,c),L(s,a,c),D(a,l,c),L(o,a,c),n=!0},p(a,[c]){const i={};c&2&&(i.$$scope={dirty:c,ctx:a}),e.$set(i);const d={};c&1&&(d.style=`padding-bottom: ${a[0]}px;`),c&2&&(d.$$scope={dirty:c,ctx:a}),s.$set(d);const $={};c&2&&($.$$scope={dirty:c,ctx:a}),o.$set($)},i(a){n||(E(e.$$.fragment,a),E(s.$$.fragment,a),E(o.$$.fragment,a),n=!0)},o(a){I(e.$$.fragment,a),I(s.$$.fragment,a),I(o.$$.fragment,a),n=!1},d(a){a&&(u(t),u(l)),S(e,a),S(s,a),S(o,a)}}}function ge(r,e,t){let s=0;return Z(()=>{const l=document.querySelector(".footer");l&&l.clientHeight>0?(t(0,s=l.clientHeight),console.log("PageFooter height on load:",s)):t(0,s=0)}),[s]}class ke extends M{constructor(e){super(),T(this,e,ge,he,y,{})}}export{ke as component};
import { c as create_ssr_component, o as onDestroy, e as escape, b as add_attribute, d as compute_rest_props, f as spread, h as escape_object, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
const scrollState = writable({
  scrolled: false
  // 스크롤 여부
});
const css$1 = {
  code: ".title.svelte-8sdpj0.svelte-8sdpj0{opacity:0;transition:opacity 0.3s}.header.onScroll.svelte-8sdpj0 .title.svelte-8sdpj0{opacity:1}",
  map: `{"version":3,"file":"PageHeader.svelte","sources":["PageHeader.svelte"],"sourcesContent":["<script>\\r\\n\\timport { scrollState } from '/src/stores.js';\\r\\n\\timport { onDestroy } from 'svelte';\\r\\n\\r\\n\\tlet scrolled = false;\\r\\n\\r\\n\\tconst unsubscribe = scrollState.subscribe(value => {\\r\\n\\t\\tscrolled = value.scrolled;\\r\\n\\t});\\r\\n\\r\\n\\t// Unsubscribe when component is destroyed\\r\\n\\tonDestroy(() => {\\r\\n\\t\\tunsubscribe();\\r\\n\\t});\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div id=\\"header\\" class=\\"header {scrolled ? 'onScroll' : ''}\\">\\r\\n\\t<div class=\\"header-area\\">\\r\\n\\t\\t<div class=\\"header-back\\">\\r\\n\\t\\t\\t<button type=\\"button\\" class=\\"layout-ebbtn layout-go-back\\">뒤로가기</button>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\"header-title\\">\\r\\n\\t\\t\\t<h2 class=\\"title\\" aria-hidden=\\"{scrolled ? false : true}\\">\\r\\n\\t\\t\\t\\t<slot />\\r\\n\\t\\t\\t</h2>\\r\\n\\t\\t</div>\\r\\n\\r\\n\\t\\t<div class=\\"header-btn\\">\\r\\n\\t\\t\\t<button type=\\"button\\" class=\\"layout-ebbtn layout-alert\\">알림</button>\\r\\n\\r\\n\\t\\t\\t<div class=\\"header-fullmenu\\">\\r\\n\\t\\t\\t\\t<button type=\\"button\\" class=\\"layout-ebbtn layout-fullmenu\\">메뉴</button>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n\\t.title { opacity: 0; transition: opacity 0.3s; }\\r\\n\\t.header.onScroll .title { opacity: 1; }\\r\\n</style>"],"names":[],"mappings":"AAyCC,kCAAO,CAAE,OAAO,CAAE,CAAC,CAAE,UAAU,CAAE,OAAO,CAAC,IAAM,CAC/C,OAAO,uBAAS,CAAC,oBAAO,CAAE,OAAO,CAAE,CAAG"}`
};
const PageHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let scrolled = false;
  const unsubscribe = scrollState.subscribe((value) => {
    scrolled = value.scrolled;
  });
  onDestroy(() => {
    unsubscribe();
  });
  $$result.css.add(css$1);
  return `<div id="header" class="${"header " + escape(scrolled ? "onScroll" : "", true) + " svelte-8sdpj0"}"><div class="header-area"><div class="header-back" data-svelte-h="svelte-1prpq15"><button type="button" class="layout-ebbtn layout-go-back">뒤로가기</button></div> <div class="header-title"><h2 class="title svelte-8sdpj0"${add_attribute("aria-hidden", scrolled ? false : true, 0)}>${slots.default ? slots.default({}) : ``}</h2></div> <div class="header-btn" data-svelte-h="svelte-18ro4ns"><button type="button" class="layout-ebbtn layout-alert">알림</button> <div class="header-fullmenu"><button type="button" class="layout-ebbtn layout-fullmenu">메뉴</button></div></div></div> </div>`;
});
const css = {
  code: ".addBg.svelte-r3oqqk{background-color:lightblue}",
  map: '{"version":3,"file":"PageContents.svelte","sources":["PageContents.svelte"],"sourcesContent":["<script>\\r\\n    // export let $$restProps; // 선언 불필요 $$는 예약\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div id=\\"container\\" {...$$restProps}>\\r\\n\\t<div class=\\"contents-area\\">\\r\\n\\t\\t<div class=\\"contents\\">\\r\\n\\r\\n\\t\\t\\t<!-- s: 메인 콘텐츠 -->\\r\\n\\t\\t\\t<slot />\\r\\n\\t\\t\\t<!-- e: 메인 콘텐츠 -->\\r\\n\\r\\n\\t\\t</div>\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style>\\r\\n    .addBg { background-color: lightblue; }\\r\\n</style>"],"names":[],"mappings":"AAmBI,oBAAO,CAAE,gBAAgB,CAAE,SAAW"}'
};
const PageContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css);
  return `<div${spread([{ id: "container" }, escape_object($$restProps)], { classes: "svelte-r3oqqk" })}><div class="contents-area"><div class="contents"> ${slots.default ? slots.default({}) : ``} </div></div> </div>`;
});
const PageFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<div${spread([{ id: "footer" }, { class: "footer" }, escape_object($$restProps)], {})}><div class="footer-area"><div class="btn-pack">${slots.default ? slots.default({}) : ``}</div></div> </div>`;
});
const MainBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button type="button" class="ebbtn bg-mix size-xl-full">${slots.default ? slots.default({}) : ``}</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let footerHeight = 0;
  return `${validate_component(PageHeader, "PageHeader").$$render($$result, {}, {}, {
    default: () => {
      return `디지털페퍼 새소식`;
    }
  })} ${validate_component(PageContents, "PageContents").$$render(
    $$result,
    {
      class: "addBg",
      style: `padding-bottom: ${footerHeight}px;`
    },
    {},
    {
      default: () => {
        return `<div class="pepper-news" data-svelte-h="svelte-1155le4"> <div class="news-cont-top"><div class="jumbotron-pack"><h2 class="ebh2 bold">내 계좌 기능이<br>
					새롭게 달라졌어요!</h2> <div class="text">내 계좌를 한눈에 볼 수 있는 전체계좌조회 기능. 디자인 변경과<br>
					정보 재배치로 새롭게 리뉴얼 했어요. 어떻게 달라졌는지<br>
					자세히 알아볼까요?</div></div></div>   <div class="news-cont"><div class="part"><div class="cont-wrap"><div class="text-box"><h3 class="title"><span class="color-01">화면 로딩 중,</span><br>
							귀여운 거 보고 계세요</h3> <div class="desc">로딩 시간이 너무 길다구요? 귀여운거 보면서 조금만<br>
							기다려주세요. 시간은 소중하니까요 ❤️</div></div> <div class="img-box"><img src="/image/main/img-renewal01.png" alt="전체계좌목록. 로딩화면. 계좌목록을 불러오고 있어요. 조금만 기다려주세요."></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">간결</span>하지만, 있을 건 다 있다!</h2> <div class="desc">작은 화면 속 많은 정보를 보기쉽게 정리했어요.<br>
							이제 계좌복사 버튼도 잘 눌리고, 계좌상세 화면<br>
							이동도 쉬워졌을 거에요.</div></div> <div class="img-box"><img src="/image/main/img-renewal02.png" alt="전체계좌목록. 예적금. 입출금 페퍼스 파킹통장2 계좌번호 복사하기 버튼, 잔액, 이체버튼 예시"></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">적금 만기 달성률</span>을<br>
							확인해보세요</h2> <div class="desc">적금 만기일만 기다리신다구요? 만기까지<br>
							얼마나 남았는지 알려주는 상태바가 추가되었어요.<br>
							계좌상세 조회 없이, 계좌목록에서 확인해 보세요.</div></div> <div class="img-box"><img src="/image/main/img-renewal03.png" alt="전체계좌목록. 페퍼스 2030 적금. 계좌번호 복사하기 버튼, 잔액, 정기적금 입금버튼, 만기일 안내 상태바, 만기일 2024.08.12 예시"></div></div></div> <div class="part"><div class="cont-wrap"><div class="text-box"><h2 class="title"><span class="color-01">계좌복사 팝업,</span><br>
							자동으로 사라져요</h2> <div class="desc">계좌복사했을 뿐인데, 경고창에 깜짝 놀라셨죠?<br>
							빨간색 전면 팝업 대신, 스르륵 생겼다가 사라지는<br>
							팝업으로 변경했어요. 이젠 놀라지 않기로 약속 🤙🏻</div></div> <div class="img-box"><img src="/image/main/img-renewal04.png" alt="페퍼스 파킹통장2 계좌번호가 복사 되었습니다."></div></div></div></div>   <div class="news-cont-bottom"><div class="part"><div class="round-bg-pack tac">새롭게 달라진 내 계좌 기능!<br>
					아래 링크로 확인해보세요 👇🏻</div></div></div> </div>`;
      }
    }
  )} ${validate_component(PageFooter, "PageFooter").$$render($$result, { class: "footer" }, {}, {
    default: () => {
      return `${validate_component(MainBtn, "MainBtn").$$render($$result, {}, {}, {
        default: () => {
          return `새로운 내 계좌 기능 보러가기`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};

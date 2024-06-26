<script>
	import { onMount } from 'svelte';

	import PageHeader from "$lib/component/layout/PageHeader.svelte";
	import PageContents from "$lib/component/layout/PageContents.svelte";
	import PageFooter from "$lib/component/layout/PageFooter.svelte";
	import MainBtn from "$lib/component/MainBtn.svelte";

	let footerHeight = 0;

	onMount(() => {
		const footerElement = document.querySelector('.footer');
		if (footerElement && footerElement.clientHeight > 0) {
			footerHeight = footerElement.clientHeight;
			console.log('PageFooter height on load:', footerHeight);
			// PageFooter의 높이를 확인한 후에 원하는 작업을 수행할 수 있습니다.
		} else {
			footerHeight = 0;
		}
	});
</script>

<PageHeader>디지털페퍼 새소식</PageHeader>

<PageContents class="addBg" style={`padding-bottom: ${footerHeight}px;`}>
	<div class="pepper-news">
		<!-- 컨텐트 상단 영역 -->
		<div class="news-cont-top">
			<div class="jumbotron-pack">
				<h2 class="ebh2 bold">
					내 계좌 기능이<br>
					새롭게 달라졌어요!
				</h2>
				<div class="text">
					내 계좌를 한눈에 볼 수 있는 전체계좌조회 기능. 디자인 변경과<br>
					정보 재배치로 새롭게 리뉴얼 했어요. 어떻게 달라졌는지<br>
					자세히 알아볼까요?
				</div>
			</div>
		</div>
		<!-- //컨텐트 상단 영역 -->

		<!-- 중앙 컨텐츠 영역 -->
		<div class="news-cont">
			<div class="part">
				<div class="cont-wrap">
					<div class="text-box">
						<h3 class="title">
							<span class="color-01">화면 로딩 중,</span><br>
							귀여운 거 보고 계세요
						</h3>
						<div class="desc">
							로딩 시간이 너무 길다구요? 귀여운거 보면서 조금만<br>
							기다려주세요. 시간은 소중하니까요 ❤️
						</div>
					</div>
					<div class="img-box">
						<img src="src/lib/image/main/img-renewal01.png" alt="전체계좌목록. 로딩화면. 계좌목록을 불러오고 있어요. 조금만 기다려주세요.">
					</div>
				</div>
			</div>

			<div class="part">
				<div class="cont-wrap">
					<div class="text-box">
						<h2 class="title">
							<span class="color-01">간결</span>하지만, 있을 건 다 있다!
						</h2>
						<div class="desc">
							작은 화면 속 많은 정보를 보기쉽게 정리했어요.<br>
							이제 계좌복사 버튼도 잘 눌리고, 계좌상세 화면<br>
							이동도 쉬워졌을 거에요.
						</div>
					</div>
					<div class="img-box">
						<img src="src/lib/image/main/img-renewal02.png" alt="전체계좌목록. 예적금. 입출금 페퍼스 파킹통장2 계좌번호 복사하기 버튼, 잔액, 이체버튼 예시">
					</div>
				</div>
			</div>

			<div class="part">
				<div class="cont-wrap">
					<div class="text-box">
						<h2 class="title">
							<span class="color-01">적금 만기 달성률</span>을<br>
							확인해보세요
						</h2>
						<div class="desc">
							적금 만기일만 기다리신다구요? 만기까지<br>
							얼마나 남았는지 알려주는 상태바가 추가되었어요.<br>
							계좌상세 조회 없이, 계좌목록에서 확인해 보세요.
						</div>
					</div>
					<div class="img-box">
						<img src="src/lib/image/main/img-renewal03.png" alt="전체계좌목록. 페퍼스 2030 적금. 계좌번호 복사하기 버튼, 잔액, 정기적금 입금버튼, 만기일 안내 상태바, 만기일 2024.08.12 예시">
					</div>
				</div>
			</div>

			<div class="part">
				<div class="cont-wrap">
					<div class="text-box">
						<h2 class="title">
							<span class="color-01">계좌복사 팝업,</span><br>
							자동으로 사라져요
						</h2>
						<div class="desc">
							계좌복사했을 뿐인데, 경고창에 깜짝 놀라셨죠?<br>
							빨간색 전면 팝업 대신, 스르륵 생겼다가 사라지는<br>
							팝업으로 변경했어요. 이젠 놀라지 않기로 약속 🤙🏻
						</div>
					</div>
					<div class="img-box">
						<img src="src/lib/image/main/img-renewal04.png" alt="페퍼스 파킹통장2 계좌번호가 복사 되었습니다.">
					</div>
				</div>
			</div>
		</div>
		<!-- //중앙 컨텐츠 영역 -->

		<!-- 하단 컨텐츠 영역 -->
		<div class="news-cont-bottom">
			<div class="part">
				<div class="round-bg-pack tac">
					새롭게 달라진 내 계좌 기능!<br>
					아래 링크로 확인해보세요 👇🏻
				</div>
			</div>
		</div>
		<!-- //하단 컨텐츠 영역 -->
	</div>
</PageContents>

<PageFooter class="footer">
	<MainBtn>새로운 내 계좌 기능 보러가기</MainBtn>
</PageFooter>

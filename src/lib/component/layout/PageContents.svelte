<script>
    // export let $$restProps; // 선언 불필요 $$는 예약
</script>


<div id="container" {...$$restProps}>
	<div class="contents-area">
		<div class="contents">

			<!-- s: 메인 콘텐츠 -->
			<slot />
			<!-- e: 메인 콘텐츠 -->

		</div>
	</div>
</div>


<style>
    .addBg { background-color: lightblue; }
</style>
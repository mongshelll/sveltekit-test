<script>
	import { scrollState } from '/src/stores.js';
	import { onDestroy } from 'svelte';

	let scrolled = false;

	const unsubscribe = scrollState.subscribe(value => {
		scrolled = value.scrolled;
	});

	// Unsubscribe when component is destroyed
	onDestroy(() => {
		unsubscribe();
	});
</script>


<div id="header" class="header {scrolled ? 'onScroll' : ''}">
	<div class="header-area">
		<div class="header-back">
			<button type="button" class="layout-ebbtn layout-go-back">뒤로가기</button>
		</div>

		<div class="header-title">
			<h2 class="title" aria-hidden="{scrolled ? 'false' : 'true'}">
				<slot />
			</h2>
		</div>

		<div class="header-btn">
			<button type="button" class="layout-ebbtn layout-alert">알림</button>

			<div class="header-fullmenu">
				<button type="button" class="layout-ebbtn layout-fullmenu">메뉴</button>
			</div>
		</div>
	</div>
</div>


<style>
	.title { opacity: 0; transition: opacity 0.3s; }
	.header.onScroll .title { opacity: 1; }
</style>
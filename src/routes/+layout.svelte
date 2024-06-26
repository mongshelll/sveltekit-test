<script>
	import { onMount, onDestroy } from 'svelte';
	import { scrollState } from '/src/stores.js';

	export const prerender = true;

	onMount(() => {
		const handleScroll = () => {
		const scrolled = window.scrollY > 0;
			scrollState.set({ scrolled });
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component is destroyed
		// onDestroy(() => {
		// 	window.removeEventListener('scroll', handleScroll);
		// });

		// Cleanup function (will be executed on component unmount)
		return () => {
			// Remove event listener on component unmount
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<slot />
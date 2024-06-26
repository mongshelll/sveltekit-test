import { writable } from 'svelte/store';

export const scrollState = writable({
  scrolled: false, // 스크롤 여부
});
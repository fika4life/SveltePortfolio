import { writable } from 'svelte/store';

export const posts = writable([]);

const fetchPosts = async () => {
	const url = `https://jsonplaceholder.typicode.com/posts`;
	const res = await fetch(url);
	const data = await res.json();
	posts.set(data);
};

fetchPosts();

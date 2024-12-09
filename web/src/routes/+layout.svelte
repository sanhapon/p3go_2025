<script>import "../app.css";
import '../index.css'
import Header from "$lib/components/Header.svelte";
import Footer from '$lib/components/Footer.svelte';

let { children } = $props()</script>

<header>
    <Header></Header>
</header>

<section>
    {@render children()}
</section>

<footer>
    <Footer></Footer>
</footer>

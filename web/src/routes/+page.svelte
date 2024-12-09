<script>
    import SearchBox from "$lib/components/SearchBox.svelte";
    import TopDestination from "$lib/components/TopDestination.svelte";
</script>

<svelte:head>
    <title>p3go.com | car rentals</title> 
</svelte:head>

<section class='hero'>
    <h1 class='title1'>The Cheapest Rates from the Biggest Car Rental Companies</h1>
    <h5 class='title2'>always a smooth rental experience</h5>
    <div class="searchbox">
        <SearchBox></SearchBox>
    </div>
</section>

<section class='top-destination'>
    <TopDestination></TopDestination>
</section>

<style>
    h1 {
        font-size: xx-large;
        padding-top: 50px;
    }

    .title1, .title2 {
        color: white;
        justify-self: center;
    }

    .hero {
        height: 500px;
        background-image: url('/images/city.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .searchbox {
        padding-top: 30px;
    }
 
    @media only screen and (max-width: 680px) {
        .title1, .title2, .top-destination {
            display: none;
        }

        .hero {
            height: 90vh;
        }

        .searchbox {
            margin: auto;
            padding: 48px 16px;
        }
    }
</style>

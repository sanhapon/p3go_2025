<script>
    import QeeqSearchBox from "$lib/components/QeeqSearchBox.svelte";
    import TopDestination from "$lib/components/TopDestination.svelte";
</script>

<section class='hero'>
    <h1 class='title1'>Car Rental – Search, Compare, and Save</h1>
    <h4 class='title2'>always a smooth rental experience</h4>
    <div class="searchbox">
        <QeeqSearchBox></QeeqSearchBox>
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
        padding-top: 50px;
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

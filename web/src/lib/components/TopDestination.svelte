<script>
    import ImageCard from "./ImageCard.svelte";


    const destinations = [
        {
            imageUrl: '/images/bangkok.png',
            description: 'Bangkok (BKK airport)', 
            link: 'https://tp.media/r?marker=540611&trs=315112&p=4845&u=https%3A%2F%2Fwww.qeeq.com%2Fcar%2Fsearch%3Fpickup_city%3D3069%26pickup_landmark%3D99156%26dropoff_city%3D3069%26dropoff_landmark%3D99156&campaign_id=172'
        },
        {
            imageUrl: '/images/samui.png',
            description: 'Koh Samui (USM airport)', 
            link: 'https://www.qeeq.com/car/search?pickup_city=3076&pickup_landmark=99091&dropoff_city=3076&dropoff_landmark=99091'
        },
        {
            imageUrl: '/images/chiangmai.png',
            description: 'Chiang Mai (CNX airport)', 
            link: 'https://tp.media/r?marker=540611&trs=315112&p=4845&u=https%3A%2F%2Fwww.qeeq.com%2Fcar%2Fsearch%3Fpickup_city%3D3070%26pickup_landmark%3D99185%26dropoff_city%3D3070%26dropoff_landmark%3D99185&campaign_id=172'
        },
        {
            imageUrl: '/images/phuket.png',
            description: 'Phuket (HKT airport)', 
            link: 'https://tp.media/r?marker=540611&trs=315112&p=4845&u=https%3A%2F%2Fwww.qeeq.com%2Fcar%2Fsearch%3Fpickup_city%3D3080%26pickup_landmark%3D99166%26dropoff_city%3D3080%26dropoff_landmark%3D99166&campaign_id=172'
        },
    ]
</script>

<div class='top-destination-container'>
    <h2>Top Thailand Destinations</h2>
    <div class='top-destination'>
        {#each destinations as item }
            <ImageCard {...item}></ImageCard>
        {/each}
    </div>
</div>

<style>
    h2 {
        text-align: center;
        padding-bottom: 10px;
    }

    .top-destination-container {
        padding: 70px 50px;
    }

    .top-destination {
        display: flex;
        justify-content: space-around;
    }
</style>

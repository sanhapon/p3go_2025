<script>
    let { imageUrl, description, link } = $props();
</script>

<figure class='card'>
    <a href="{link}">
        <img src={imageUrl} alt="{description}">
    </a>
    <figcaption>{description}</figcaption>
</figure>


<style>
    .card {
        text-align: center;
        font-size: small;
    }

    img {
        width: 300px;
        height: 250px;
        border-bottom: 1px solid lightgray;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
</style>
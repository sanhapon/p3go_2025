<script>
    import { Label, Input, Datepicker } from 'flowbite-svelte';

    let selectedDate = null;
</script>
<div class='sb-container'>
    <form class='form'>
        <div>
            <Input id="pickup-location" placeholder="Pick-up location" />
        </div>
        <div>
            <Datepicker inline bind:value={selectedDate} />
        </div>
    </form>
</div>
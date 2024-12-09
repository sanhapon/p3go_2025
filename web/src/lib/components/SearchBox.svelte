<script>
    import { Label, Input, Datepicker, Select, Button } from 'flowbite-svelte';
    import { getDate } from "$lib/utils/Date";
    import { on } from 'svelte/events';

    const timeList = [...Array(48).keys()].map(n => {
        const hour = Math.floor(n / 2);
        const minute = n % 2 === 0 ? '00' : '30';
        const time = `${hour.toString().padStart(2, '0')}:${minute}`;
        return { value: time, name: time };
     });


    let pickupDate = getDate(1);
    let pickupTime = '10:00';
    let dropOffDate = getDate(3);
    let dropOffTime = '10:00';

    
    const onClick = () => {
        alert('ok');
    }
    
</script>
    <div class='sb-container'>
        <div>
            <Input id="pickup-location" class='w-[400px] hover:cursor-pointer' placeholder="Pick-up location"></Input>
        </div>
        <div>
            <Datepicker bind:value={pickupDate} 
                minDate= {new Date("2024-12-10")},
                placeholder="Pick-up date" inputClass="w-[180px] h-[42px] bg-[#F9FAFB] border-[#cccccc] hover:cursor-pointer"/>
        </div>
        <div>
            <Select bind:value={pickupTime} items={timeList} class="w-[100px] hover:cursor-pointer"></Select>
        </div>
        <div>
            <Datepicker bind:value={dropOffDate} placeholder="Drop-off date" inputClass="w-[180px] h-[42px] bg-[#F9FAFB] border-[#cccccc] hover:cursor-pointer"/>
        </div>
        <div>
            <Select bind:value={dropOffTime} items={timeList} class="w-[100px] hover:cursor-pointer"/>
        </div>
        <div>
            <Button  class="bg-primary-700 text-xs text-primary-800 font-semibold px-[50px] h-[42px]
                 text-white text-lg hover:cursor-pointer"
                on:click={onClick}
                 >
                 Book
            </Button>
        </div>
    </div>

<style>
    .sb-container {
        display: flex;
        width: 1200px;
        margin: 0 auto;
        background-color: white;
        padding: 24px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .sb-container > div {
        margin: 0 4px;
    }
   
</style>
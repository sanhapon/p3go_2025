<script lang="ts">
    import { Label, Input, Datepicker, Select, Button } from 'flowbite-svelte';
    import { getDate } from "$lib/utils/Date";
    import { Qeeq } from "$lib/utils/Qeeq";
    import { goto } from '$app/navigation';
    
    let searchTerm = '';
    let showSuggestions = false;
    let suggestions: { id: number; landmarkId: number; locationText: string; type: string; }[][];

    let pickupDate = getDate(1);
    let pickupTime = '10:00';
    let dropOffDate = getDate(3);
    let dropOffTime = '10:00';
    let timeoutId = 0;
    let cityId = 0;
    let landmarkId = 0;

    const timeList = [...Array(48).keys()].map(n => {
        const hour = Math.floor(n / 2);
        const minute = n % 2 === 0 ? '00' : '30';
        const time = `${hour.toString().padStart(2, '0')}:${minute}`;
        return { value: time, name: time };
     });

     $: if (searchTerm.length >= 3) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(async () => {
            const resp = await fetch(`https://www.qeeq.com/api/book/search?action=search_pickup&keyword=${searchTerm}&timestamp=${new Date().valueOf()}`);
            // const resp = await fetch('http://localhost:5173/api/suggestion');
            const json = await resp.json();
            suggestions = Qeeq.getSuggestions(json);
        }, 300);
      
    }

    const handleTextChanged = (e: Event) => {
        searchTerm = (e.target as HTMLInputElement)?.value ?? '';
        showSuggestions = true;
    };

    const handleSuggestionClick = (selected: {id: number, landmarkId: number, locationText: string, type: string}) => {
        searchTerm = selected.locationText;
        cityId = selected.id;
        landmarkId = selected.landmarkId;
        showSuggestions = false;
    };

    const format = (date: Date) => {
        return new Intl.DateTimeFormat('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(date);
    }

    const onClick = () => {
        const d1 =  format(pickupDate);
        const d2 =format(dropOffDate);
        const url = `https://www.qeeq.com/carsearch?pickup_city=${cityId}&pickup_landmark=${landmarkId}&from_date_0=${d1}&from_date_1=${pickupTime}&to_date_0=${d2}&to_date_1=${dropOffTime}&dropoff_city=${cityId}&dropoff_landmark=${landmarkId}&force_refresh=1&utm_source=travelpayouts&utm_medium=www.p3go.com&sub_id=12ace3f4f4a249228a0ede591-540611`;
        window.open(url);
    }

</script>

<div class='sb-container'>
    <div>
        <Input
            class='w-[400px]' placeholder="Pick-up location"
            bind:value={searchTerm}
            on:input={handleTextChanged}
            on:focus={() => showSuggestions = true}
            on:blur={() => setTimeout(() => {showSuggestions = false}, 500)}
        ></Input>

        <ui class={`suggestions ${showSuggestions && suggestions ? '' : 'hidden'}`}>
            {#each suggestions as locations}
                {#each locations as location, index}
                    {#if index === 0}
                        <li class="li-subject">{location.type}</li>
                    {/if}
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <div id={`${location.type}-${index}`}
                        class="li-selectable"
                        on:click={(e) => {handleSuggestionClick(location)}}>
                        {location.locationText}
                    </div>
                {/each}
                {#if locations && locations.length > 0}
                    <div class="divider"></div>
                {/if}
            {/each}
        </ui>
        
    </div>
    <div>
        <Datepicker bind:value={pickupDate} placeholder="Pick-up date" inputClass="w-[180px] h-[42px] bg-[#F9FAFB] border-[#cccccc]"/>
    </div>
    <div>
        <Select bind:value={pickupTime} items={timeList} class="w-[100px]"></Select>
    </div>
    <div>
        <Datepicker bind:value={dropOffDate} placeholder="Drop-off date" inputClass="w-[180px] h-[42px] bg-[#F9FAFB] border-[#cccccc]"/>
    </div>
    <div>
        <Select bind:value={dropOffTime} items={timeList} class="w-[100px]"/>
    </div>
    <div>
        <Button  class="bg-primary-700 text-xs text-primary-800 font-semibold px-[50px] h-[42px] text-white text-lg hover:cursor-pointer"
            on:click={onClick}
             >
             Book
        </Button>
    </div>
</div>

<style>
    .divider {
        border: 0.01rem solid #f1f1f1;
        margin: 4px 0px;
    }

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
   
    .suggestions {
        position: absolute;
        margin: 1px 20px;
        padding: 16px 0px 16px 16px;
        z-index: 100;
        width: 480px;
        background: white;
        border-radius: 4px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
    }
    .li-subject {
        font-weight: 600;
        font-size: 12px;
    }

    .li-selectable {
        font-size: 12px;
        width: 100%;
        display: block;
        padding: 6px 12px;
    }

    .li-selectable:hover {
        cursor: pointer;
        background-color: #eaebed;
    }
</style>
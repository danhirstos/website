<script>
    export let link;
    export let title;
    export let desc;
    export let tags;
    export let active_tag;
    export let active_grid;
    export let index;


    $: tags_joined = tags.join(" • ")

    let dropdown_visible = false;

    // $: console.log(active_tag)

    // sets active to true if the active_tag is in the tags array
    // $: active = active_tag == "" || tags.includes(active_tag)
    // console
    function set_active(x) {
        if (x == "" || x == undefined) {
            return ""
        } else if (tags.includes(x)) {
            return "is-active"
        } else {
            return "is-inactive"
        }
    }

    $: active = set_active(active_tag)

    $: disabled = active == "is-inactive" ? "disabled" : ""


    function toggleDropdown() {
        if (active_grid == index) {
            active_grid = -1;
        } else {
            active_grid = index;
        }
    }


</script>

<div class="flex mx-auto my-2 {active} group  w-full">
    <button class="{disabled} w-full mx-auto max-w-md" on:click={toggleDropdown}>
        <div class="shadow-lg flex flex-1 flex-col min-h-full h-full w-full p-4 group group-[.is-inactive]:blur-sm group-[.is-active]:shadow-2xl group-[.is-active]:dark:border-4 focus-within:blur-none hover:shadow-md hover:border-primary-400 dark:hover:border-primary-100 ease-in duration-100  text-left border-solid border-2 rounded-md border-primary-200 dark:border-primary-300">
            <h3 class="text-primary-600 dark:text-primary-200  underline group-hover:underline-offset-4 ease-in-out duration-300 forced-colors:block transition appearance-none">{title}</h3>
            <p class="text-primary-500 dark:text-white mb-3">{desc}</p>
            <div class="flex flex-col flex-1  mt-auto mb-0 min-h-fit my-auto relative w-full">
                <p class="text-primary-400 mt-auto mb-0 dark:text-primary-100 transparency:text-sm ">{tags_joined}</p>
            </div>
        </div>

    </button>

</div>


<style>
    a.disabled {
        pointer-events: none;
        cursor: default;
    }

</style>
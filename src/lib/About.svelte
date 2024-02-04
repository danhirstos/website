<script>
    import {Github, GraduationCap, Linkedin, Microscope} from "lucide-svelte";
    import "./js/link-xor";
    import Lazy from 'svelte-lazy';
</script>
<div class="my-10 mx-auto">
    <div class="">
        <Lazy height={208}>
            <img alt="Rachel Morse headshot" class="rounded-full mx-auto h-52" src="headshot.jpg">
        </Lazy>

        <h1 class="">Rachel Morse</h1>
        <h2>Predoctoral Research Fellow</h2>
        <div class="grid grid-cols-4 max-w-xs mx-auto grid-rows-1 grid-flow-row gap-4 text-center m-5">

            <a class="shadow-lg forced-colors:block hover:forced-colors:block p-2 dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400   text-primary-500 hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"
               href="https://github.com/rachmorse">
                <Github/>
            </a>
            <a class=" shadow-lg dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 forced-colors:block text-primary-500  p-2  hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"
               href="https://www.linkedin.com/in/rachel-morse-a803a718b/">
                <Linkedin/>
            </a>

            <a class="shadow-lg forced-colors:block hover:forced-colors:block p-2 dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400   text-primary-500 hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"
               href="https://www.researchgate.net/profile/Rachel-Morse-3">
                <Microscope/>
            </a>

            <a class=" shadow-lg dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 forced-colors:block text-primary-500  p-2  hover:bg-primary-500 hover:text-white mx-auto hover:shadow-md ease-in duration-100 text-left border-solid border-2 rounded-md border-primary-500"
               href="https://scholar.google.co.uk/citations?user=4y0-vQgAAAAJ&hl=en">
                <GraduationCap/>
            </a>
        </div>
    </div>
    <div class="mt-10">
        <h2 class="text-3xl text-center">About</h2>
        <p class="text-left p-4">I am a ‘La Caixa’ Fellow pursuing a PhD in neuroscience at the University of Barcelona,
            where I investigate reserve and resilience in aging. I have a background in psychology and global health
            that has given me the opportunity to work in child TB in South Africa, cervical cancer in Peru, and dementia
            prevention in the UK. In my free time, I enjoy being outdoors and hiking in the mountains around
            Barcelona. </p>
        <div class="mx-auto h-auto min-h-full m-4">
            <a class="email w-32 text-primary-500 dark:text-primary-400 dark:hover:bg-primary-400 dark:border-primary-400 forced-colors:block p-2 m-2 rounded-md shadow-lg appearance-none ease-in duration-100 hover:bg-primary-500  hover:text-white border-solid border-2 border-primary-500"
               href="79757d78607b2e66797b6667715461763a717061" rel="nofollow, noindex">
                Get in touch
            </a>
        </div>
    </div>

</div>
<script>
  import PortfolioSection from "./PortfolioSection.svelte";
  import {clickOutside} from './js/clickOutside.js';


  const code = [{
            title: "osdatahub Python",
            desc: "Open source Python package for the OS Data Hub API.",
            link: "https://github.com/OrdnanceSurvey/osdatahub",
            tags: ["python", "geospatial", "package", "work"]
        },
        {
            title: "osdatahub JavaScript",
            desc: "Open source Node package for the OS Data Hub API.",
            link: "https://github.com/OrdnanceSurvey/osdatahub-js",
            tags: ["javascript", "geospatial", "package", "work"]
        },
        {
            title: "Pret Crawl",
            desc: "Website that plans a pub crawl between Prets in London. Made to learn Svelte.",
            link: "https://pretcrawl.danhirst.me",
            tags: ["svelte", "geospatial", "website", "personal"]
        },
        {
            title: "Country-A-Like",
            desc: "Fun website that determines which country looks like a given image ",
            link: "https://dchirst-what-country-am-i-main-nkgm6x.streamlitapp.com/",
            tags: ["python", "geospatial", "website", "personal"]
        },
        {
            title: "Space Company Name Generator",
            desc: "Make your own space company in 1 easy step. First website I ever made.",
            link: "https://danhirst98.github.io/space_company_generator/",
            tags: ["javascript", "space", "website", "personal"]
        },
        {
            title: "SAR Activity Monitor",
            desc: "Using SAR satellite imagery to monitor the activity of smelters.",
            link: "https://danielhirst1998.users.earthengine.app/view/guixi-poc",
            tags: ["javascript", "geospatial", "eo", "gee", "work"]
        },
        {
            title: "Alternative Zone Designer",
            desc: "Designs local zones using the importance of each road. Experiment for alternative census zones.",
            link: "https://lemon-bay-0090d5003.1.azurestaticapps.net/",
            tags: ["svelte", "geospatial", "website", "work"]
        },
        {
            title: "Green Energy",
            desc: "Shows suitability of green energy infrastructure at a location. ",
            link: "https://lemon-bush-00c674003.1.azurestaticapps.net/",
            tags: ["svelte", "geospatial", "website", "work"]
        },
        {
          title: "Pret Share",
          desc: "Small web app that helps you share a Pret Subscription. Made to learn Firebase.",
          link: "https://pret-share.web.app/",
          tags: ["svelte", "firebase", "website", "personal"]
        }

    ]

    const blogs = [
        {
            title: "Monitoring Sewage from Space",
            desc: "ArcGIS StoryMap about using EO to detect sewage overspill, presented at COP27.",
            link: "https://storymaps.arcgis.com/stories/2386c7178666421a8ee69a94c6bfb1a6",
            tags: ["geospatial", "eo", "work"]
        },
        {
            title: "Get Pret Go",
            desc: "Blog post about the Pret Crawl algorithm, used in the Pret Crawl website (above).",
            link: "https://python.plainenglish.io/get-pret-go-a-geospatial-project-966ad04f5fb9",
            tags: ["python", "geospatial", "work"]
        },
        {
            title: "OS Data Hub OAuth API",
            desc: "How to securely use the OS Data Hub with OAuth.",
            link: "https://github.com/dchirst/osdatahub-oauth-blogpost",
            tags: ["work"]
        },
        {
            title: "Peat Health Index",
            desc: "ArcGIS StoryMap about using EO to monitor peatlands, presented at COP26.",
            link: "https://storymaps.arcgis.com/stories/68ac541504fc4714b371b1a33e540c95",
            tags: ["geospatial", "eo", "work"]
          },
        {
            title: "London's Blue Plaques",
            desc: "Spatial analysis of London's Blue Plaques.",
            link: "https://python.plainenglish.io/finding-the-densest-area-of-londons-blue-plaques-with-geospatial-data-f5559ebfef21",
            tags: ["python", "geospatial", "work"]
        },
        {
            title: "Vector Data in Python",
            desc: "Blog post about easily showing points, lines, and polygons on maps.",
            link: "https://python.plainenglish.io/how-to-easily-display-vector-geospatial-data-in-python-c739482c395",
            tags: ["python", "geospatial", "work"]
        },
        {
            title: "Open Source Coding",
            desc: "Blog detailing our first expedition into open-source software development.",
            link: "https://python.plainenglish.io/our-first-expedition-into-open-source-coding-d62810453d3c",
            tags: ["work"]
        }
    ]

    const other = [
        {
            title: "Chapel Thrill Escapes",
            desc: "Non-profit escape room company.",
            link: "https://www.chapelthrillescapes.com/",
            tags: ["personal"]

        },
        {
            title: "Prospero Space Fellowship",
            desc: "Internships, mentorships, and retreats for students.",
            link: "https://prosperofellowship.org/",
            tags: ["space", "personal"]

        }
    ]
      
    let tags = [...code, ...blogs, ...other] 
          .map(x => x.tags)
          .flat();
      let unique_tags = [...new Set(tags)];

      let active_tag = "";
  
      function set_active_tag(event) {
        let tag_id = event.target.id;
        if (active_tag == tag_id) {
          active_tag = "";
        } else {
          active_tag = tag_id;
        }
      }

</script>

<div use:clickOutside on:click_outside={() => { active_tag = ""}} class="mb-5">
  {#each unique_tags as tag}
  <button on:click={set_active_tag} id="{tag}" class="inline-block m-1">{tag}</button>
  {/each}
</div>


<PortfolioSection title="Code" content="{code}" active_tag="{active_tag}"></PortfolioSection>
<PortfolioSection title="Blogs" content="{blogs}" active_tag="{active_tag}"></PortfolioSection>
<PortfolioSection title="Other" content="{other}" active_tag="{active_tag}"></PortfolioSection>
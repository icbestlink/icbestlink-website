<script>
  import { fade } from "svelte/transition";
  import Button from "./Button.svelte";
  import Header from "./Header.svelte";

  let { route } = $props();

  function getHeroContent(route) {
    switch (route) {
      case "/services":
        return {
          title: "Services",
          description: `From reliable network solutions to scalable ICT support, our expert
      services are designed to help businesses stay connected, competitive, and
      future-ready. Whether you're upgrading infrastructure or streamlining
      communication, we deliver the service you can trust.`,
        };
      case "/product":
        return {
          title: "Products We offer",
          description: `Discover our selection of ICT and telecom products that make life easier, faster, and more connected — whether you're building a smarter office, boosting your network, or staying in touch
with the world.`,
        };
      case "/about":
        return {
          title: "About Us",
          description:
            "Learn more about our mission to transform communications.",
        };
      case "/contact-us":
        return {
          title: "Contact Us",
          description: "Get in touch with us to discuss your technology needs.",
        };
      default:
        return {
          title: "Your BEST link to the Future of Communications!",
          description: `Delivering innovative, cutting-edge information
technology and unified communication solutions
that empower a more connected and better life—
driving technology forward with purpose.`,
        };
    }
  }

  let heroContent = $derived(getHeroContent(route));
</script>

<section
  class="relative bg-[#0a0e30] transition-all duration-1000 ease-in-out {route !==
  '/'
    ? ' mt-4 lg:mt-8 mx-4  xl:mx-16 mb-8 md:mb-10 rounded-3xl shadow-lg overflow-hidden'
    : ''}"
>
  <!-- Hero -->
  <div
    class="relative {route !== '/'
      ? 'h-150'
      : ' h-175 md:h-screen'}  overflow-hidden"
  >
    {#key route}
      <header
        class="absolute bottom-0 left-0 md:w-[650px] z-99 px-6 md:px-16 py-10 md:py-16"
        in:fade={{ duration: 750 }}
      >
        <h1
          class="text-white text-4xl font-bold {route !== '/'
            ? 'lg:text-7xl'
            : 'lg:text-7xl'}"
        >
          {heroContent.title}
        </h1>

        <p class="text-white text-sm md:text-lg my-4">
          {heroContent.description}
        </p>
        <Button text="Contact Us" />
      </header>
    {/key}
    <spline-viewer
      url="https://prod.spline.design/0TcuxsszFRJmc6N0/scene.splinecode"
    ></spline-viewer>
    <div class="bg-gradient" class:bg-route={route !== "/"}></div>
  </div>
</section>
<svelte:head>
  <script
    type="module"
    src="https://unpkg.com/@splinetool/viewer@1.10.35/build/spline-viewer.js"
  ></script>
</svelte:head>

<style>
  .bg-gradient {
    bottom: 0;
    position: absolute;
    height: 30%;
    width: 100%;
    pointer-events: none;
    z-index: 9;
    background: linear-gradient(
      180deg,
      rgba(255, 254, 254, 0) 0%,
      rgb(10, 14, 48) 80%,
      rgb(10, 14, 48) 100%
    );
  }

  .bg-route {
    height: 37%;
  }
</style>

<script>
  import { onMount, onDestroy } from "svelte";

  let professionalServices = [
    "In-house Voice and Data Wiring",
    "Structured Cabling",
    "System Installation and Commissioning",
    "CCTV Installation",
    "System Relocation",
    "Repair and Maintenance for Voice and Data",
    "Data Center Solutions",
    "Software Upgrades and Licensing Solutions",
    "IT Consultancy",
    "Solution Integration",
    "Application Programming",
    "System Traffic Evaluation and Recommendations",
    "Training Programs",
    "Free Estimates and Project Surveys",
  ];

  let managedServices = [
    "On-Call Support Services",
    "Call Billing Reports",
    "PABX Leasing and Rental Agreements",
    "Basic Maintenance Agreement",
    "Quarterly Maintenance Agreement",
    "Semi-Annual Maintenance Agreement",
    "Annual Maintenance Agreement",
    "24/7 On-Call Support Services",
  ];

  let movingServices = [
    { src: "icblemployees01.webp", alt: "ICBL Employees 01" },
    { src: "icblemployees02.webp", alt: "ICBL Employees 02" },
    { src: "icblemployees03.webp", alt: "ICBL Employees 03" },
    { src: "icblemployees04.webp", alt: "ICBL Employees 04" },
    { src: "icblemployees05.webp", alt: "ICBL Employees 05" },
    { src: "icblemployees06.webp", alt: "ICBL Employees 06" },
    { src: "icblemployees07.webp", alt: "ICBL Employees 07" },
    { src: "icblemployees08.webp", alt: "ICBL Employees 08" },
    { src: "icblemployees09.webp", alt: "ICBL Employees 09" },
    { src: "icblemployees10.webp", alt: "ICBL Employees 10" },
    { src: "icblemployees11.webp", alt: "ICBL Employees 11" },
    { src: "icblemployees12.webp", alt: "ICBL Employees 12" },
    { src: "icblemployees13.webp", alt: "ICBL Employees 13" },
  ];

  let container = $state();
  let track = $state();
  let speed = $state(60);
  let pos = $state(0);
  let start = $state(null);
  let rafId;
  let trackWidth = $state(0);

  function animate(timestamp) {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;
    pos = -(elapsed / 1000) * speed;

    if (Math.abs(pos) >= trackWidth) {
      start = timestamp;
      pos = 0;
    }

    container.style.transform = `translateX(${pos}px)`;
    rafId = requestAnimationFrame(animate);
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      trackWidth = track.getBoundingClientRect().width;
      container.style.width = `${trackWidth}px`;
      rafId = requestAnimationFrame(animate);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      cancelAnimationFrame(rafId);
      if (container) container.style.transform = "";
    }
  });
</script>

<section class="px-4 pb-10 md:pb-20 mx-auto lg:max-w-7xl" id="services">
  <header class="py-4 text-center">
    <h2 class="text-4xl font-bold text-[#0a0e30] mb-4">OUR SERVICES</h2>

    <p class="text-primary text-gray-600 text-base md:text-lg my-4">
      From specialized system services to comprehensive end-to-end
      solutions—including networking, security, telephony, structured cabling,
      and integrated communications—we empower your business with speed,
      efficiency, and modern connectivity. Rely on our trusted, high-quality
      services to keep your operations running smoothly and seamlessly.
    </p>
  </header>

  <!-- Moving banner -->
  <section
    class="pt-2 pb-6 px-0 md:pt-8 md:pb-16 relative flex gap-4 items-center"
  >
    <div class="wrapper">
      <div class="marquee">
        <div bind:this={container} class="marquee-container">
          <div bind:this={track} class="marquee-track">
            {#each movingServices as { src, alt }}
              <div class="marquee-item">
                <img
                  class="block max-w-full object-cover rounded-md"
                  {src}
                  {alt}
                  width="400"
                  height="250"
                />
              </div>
            {/each}
          </div>
          <!-- duplicate for looping effect -->
          <div class="marquee-track" aria-hidden="true">
            {#each movingServices as { src, alt }}
              <div class="marquee-item">
                <img
                  class="block max-w-full object-cover rounded-md"
                  {src}
                  {alt}
                  width="400"
                  height="250"
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="grid gap-8 md:gap-15">
    <div
      class="relative overflow-hidden container shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)]
 py-8 px-8 md:py-16 md:px-16 rounded-[2rem]"
    >
      <div class="svg-wrapper">
        <svg
          width="1050"
          height="1050"
          viewBox="0 0 750 750"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="branch-bg-gradientcolor"
        >
          <defs>
            <filter id="blurFilterOne" x="-20" y="-20" width="200" height="200">
              <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
          </defs>
          <circle
            cx="220"
            cy="350"
            r="125"
            fill="#014e89"
            filter="url(#blurFilterOne)"
          />

          <circle
            cx="380"
            cy="335"
            r="125"
            fill="#46a8c3"
            filter="url(#blurFilterOne)"
          />
        </svg>
      </div>

      <div
        class="grid lg:grid-cols-2 sm:gap-4 gap-10 items-center relative z-99"
      >
        <div>
          <p class="text-[#110467] sm:text-sm uppercase font-bold text-sm mb-3">
            Services
          </p>
          <h2
            class="text-primary sm:text-2xl text-lg font-semibold mb-6 md:mb-8"
          >
            PROFESSIONAL SERVICES
          </h2>
          <div class="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-8 gap-5">
            {#each professionalServices as service, index}
              <div key={index} class="flex gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--la text-white group-hover:text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    ><path
                      fill="#110467"
                      d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"
                    ></path></svg
                  >
                </div>
                <div>
                  <h4 class="text-base text-muted text-opacity-70 text-wrap">
                    {service}
                  </h4>
                </div>
              </div>
            {/each}
          </div>
        </div>
        <div>
          <div>
            <img
              class="-mr-5"
              width="625"
              height="580"
              src="/services1.webp"
              alt="service page"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="relative overflow-hidden container shadow-[0px_-1px_17px_-2px_rgba(0,_0,_0,_0.45)]
 py-8 px-8 md:py-16 md:px-16 rounded-[2rem]"
    >
      <div class="svg-wrapper-2">
        <svg
          width="1050"
          height="1050"
          viewBox="0 0 850 850"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="branch-bg-gradientcolor"
        >
          <defs>
            <filter id="blurFilterOne" x="-20" y="-20" width="200" height="200">
              <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
          </defs>
          <circle
            cx="320"
            cy="250"
            r="120"
            fill="#4a4bf6"
            filter="url(#blurFilterOne)"
          />

          <circle
            cx="180"
            cy="235"
            r="125"
            fill="#f2dbfc"
            filter="url(#blurFilterOne)"
          />
        </svg>
      </div>
      <div
        class="grid lg:grid-cols-2 sm:gap-4 gap-10 items-center relative z-99"
      >
        <div class="order-2 md:order-1">
          <img
            class="-mr-5"
            width="625"
            height="580"
            src="/services2.webp"
            alt="service page"
          />
        </div>
        <div class="md:order-2 order-1">
          <p class="text-[#110467] sm:text-sm uppercase font-bold text-sm mb-3">
            Services
          </p>
          <h2
            class="text-primary sm:text-2xl text-lg font-semibold mb-6 md:mb-8"
          >
            MANAGED SERVICES
          </h2>
          <div class="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
            {#each managedServices as service, index}
              <div key={index} class="flex gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--la text-white group-hover:text-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    ><path
                      fill="#110467"
                      d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5c0 6.102-4.898 11-11 11S5 22.102 5 16S9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3m11.281 4.281L16 18.563l-4.281-4.282l-1.438 1.438l5 5l.719.687l.719-.687l12-12z"
                    ></path></svg
                  >
                </div>
                <div>
                  <h4 class="text-base text-muted text-opacity-60 text-wrap">
                    {service}
                  </h4>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .wrapper {
    display: grid;
    place-content: center;
    height: 100%;
  }

  .marquee {
    overflow: hidden;
    position: relative;
    mask-image: linear-gradient(
      var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 10%,
      hsl(0 0% 0% / 1) 90%,
      hsl(0 0% 0% / 0)
    );
  }

  .marquee-container {
    display: flex;
    width: 100%;
  }

  .marquee-track {
    display: flex;
  }

  @supports (-webkit-touch-callout: none) {
    .marquee-container {
      transform: translate3d(0, 0, 0) scale(1);
      perspective: 1px;
    }
  }

  .marquee-item {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    width: 400px;
    margin-inline-end: 1.5rem;
  }

  .svg-wrapper {
    position: absolute;
    bottom: -10%;
    right: -10%;
    opacity: 1;
    scale: 1.275;
    animation: rotate_move 35s infinite;
    transition: opacity 100ms ease-in-out;

    @media only screen and (max-width: 640px) {
      bottom: -500px;
      right: -70%;
    }
  }

  @keyframes rotate_move {
    50% {
      transform: rotate(180deg);
    }
  }

  .svg-wrapper-2 {
    position: absolute;
    top: 0;
    left: -400px;
    opacity: 1;
    scale: 1.275;
    animation: rotate_move 35s infinite;
    transition: opacity 100ms ease-in-out;

    @media only screen and (max-width: 640px) {
      top: 400px;
      right: -60%;
    }
  }

  @keyframes rotate_move {
    50% {
      transform: rotate(180deg);
    }
  }
</style>

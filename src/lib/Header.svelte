<script>
  let { route } = $props();
  let navs = [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Products",
      href: "/product",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact-us",
    },
  ];

  let scrollY = $state(0);

  let open = $state(false);

  let previousRoute = $state("");

  $effect(() => {
    if (previousRoute === undefined) {
      previousRoute = route;
    }

    if (open && route !== previousRoute) {
      open = false;
    }

    previousRoute = route;
  });
</script>

<svelte:window bind:scrollY />

<div class="header transition-all duration-350" class:addBG={scrollY >= 275}>
  <nav class="desktop-nav">
    <ul class="primary">
      <li class="mr-10">
        <a class="brand cursor-pointer" href="/" aria-label="ICBL">
          <img
            class="object-cover"
            src="/logo.png"
            alt="Logo"
            width="175"
            height="auto"
          />
        </a>
      </li>

      {#each navs as nav}
        <li class="menu-item">
          <a class="item" href={nav.href}> {nav.label} </a>
        </li>
      {/each}
      <li>
        <a
          class="item bg-[#0a0e30] call-now"
          href="https://icbestlink.com/icbldialer3.html">Call Us Now</a
        >
      </li>
    </ul>
  </nav>

  <div class="mobile-nav">
    <a class="" href="/" aria-label="ICBL">
      <img
        class="object-cover"
        src="/logo.png"
        alt="Logo"
        width="200"
        height="auto"
      />
    </a>
    <input type="checkbox" id="burger-toggle" bind:checked={open} />
    <label
      for="burger-toggle"
      class="burger-container"
      class:moveBurger={scrollY >= 500}
    >
      <div class="burger-line"></div>
      <div class="burger-line"></div>
      <div class="burger-line"></div>
    </label>
    <nav class="nav-menu">
      <ul>
        {#each navs as nav}
          <li class="">
            <a class="" href={nav.href}> {nav.label} </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</div>

<style lang="scss">
  .header {
    width: -webkit-fill-available;
    z-index: 999;
    opacity: 1;
    transition: all 0.25s ease-in-out;
    animation: fade-in 2.5s forwards;

    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90px;
    padding: 0rem 2rem;
    color: #2a2f1e;

    position: fixed;

    @media only screen and (min-width: 640px) {
      position: absolute;
      padding: 1rem 2rem 0;
    }
  }

  .addBG {
    background-color: #0a0e30;
    top: 0;

    @media only screen and (min-width: 640px) {
      background-color: transparent;
    }
  }

  .brand {
    position: fixed;
    @media only screen and (min-width: 640px) {
      position: relative;
    }
  }

  .desktop-nav {
    display: none;

    @media only screen and (min-width: 992px) {
      width: 100%;
      display: flex;
      flex: 1;
      gap: 2rem;
      align-items: center;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }

  ul li {
    list-style: none;
  }

  .primary {
    background-color: #fff;
    border-radius: 9999px;
    padding: 0.15rem 1.75rem;
    display: flex;
    margin-inline: auto;
    gap: 0.5rem;
    width: fit-content;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  }

  .item {
    text-decoration: none;
    color: #2a2f1e;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    transition: background-color 0.3s ease;
    line-height: 2;

    &:hover {
      background-color: #0a0e30;
      color: #fff;
    }
  }

  .call-now {
    cursor: pointer;
    color: #fff;
  }

  .mobile-nav {
    @media (min-width: 992px) {
      display: none;
    }

    @media (min-width: 992px) {
      .nav-menu {
        width: 900px;
      }
    }

    @media (min-width: 1200px) {
      .nav-menu {
        width: 1170px;
      }
    }

    .burger-container {
      position: fixed;
      top: 35px;
      right: 30px;
      z-index: 1000;
      cursor: pointer;
      width: 40px;
      height: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5px;
      border-radius: 5px;
      background: transparent;

      @media (min-width: 768px) {
        top: 45px;
      }
    }

    .moveBurger {
      top: 27px;
    }

    .burger-line {
      width: 100%;
      height: 3px;
      background-color: #ffffff;
      border-radius: 2px;
      transform-origin: center;
      transition: all 0.4s ease-in-out;
    }

    #burger-toggle {
      display: none;
    }

    /* Navigation Styles */
    .nav-menu {
      position: fixed;
      top: 0;
      right: -300px;
      width: 300px;
      height: 100%;
      background: linear-gradient(135deg, #0a0e30 0%, #273849 100%);
      transition: right 0.4s cubic-bezier(0.77, 0.2, 0.05, 1);
      box-shadow: -4px 0 15px #00000033;
      overflow-y: auto;
      padding-top: 100px;
    }

    .nav-menu::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background: #ffffff0d;
      backdrop-filter: blur(10px);
    }

    .nav-menu ul {
      list-style-type: none;
    }

    .nav-menu ul li {
      margin: 0 15px;
      border-bottom: 1px solid #ffffff1a;
    }

    .nav-menu ul li a {
      color: white;
      text-decoration: none;
      display: block;
      padding: 15px;
      font-weight: 500;
      position: relative;
      overflow: hidden;
    }

    .nav-menu ul li a::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background-color: var(--secondary-color);
      transition: left 0.3s ease;
    }

    .nav-menu ul li a:hover::after {
      left: 0;
    }

    /* Burger Icon Animation on Checkbox Checked */
    #burger-toggle:checked ~ .burger-container .burger-line:nth-child(1) {
      transform: rotate(45deg) translate(7px, 4px);

      background-color: #fff;
    }

    #burger-toggle:checked ~ .burger-container .burger-line:nth-child(2) {
      opacity: 0;
    }

    #burger-toggle:checked ~ .burger-container .burger-line:nth-child(3) {
      transform: rotate(-45deg) translate(8px, -5px);
      background-color: #fff;
    }

    /* Navigation Slide In */
    #burger-toggle:checked ~ .nav-menu {
      right: 0;
    }
  }
</style>

<script>
  let { text = "Contact Us", link = "/contact-us" } = $props();
</script>

<a class="learn-more" href={link} aria-label="Learn more about our services">
  <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
  </span>
  <span class="button-text">{text}</span>
</a>

<style>
  a {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  a.learn-more {
    width: 12rem;
    height: auto;
  }

  a.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #fff;
    border-radius: 1.625rem;
  }

  a.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #0a0e30;
  }

  a.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  a.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.25rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #0a0e30;
    border-right: 0.125rem solid #0a0e30;
    transform: rotate(45deg);
  }

  a.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #fff;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
  }

  a:hover .circle {
    width: 100%;
  }

  a:hover .circle .icon.arrow {
    background: #282936;
    transform: translate(1rem, 0);
  }

  a:hover .button-text {
    color: #282936;
  }

  @media (max-width: 768px) {
    a.learn-more .circle {
      width: 100%;
    }

    a.learn-more .circle .icon.arrow {
      background: #282936;
      transform: translate(1rem, 0);
    }

    a.learn-more .button-text {
      color: #282936;
    }
  }
</style>

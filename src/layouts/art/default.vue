<template>
  <div>
    <div class="a-layout a-sticky-header">
      <header class="a-header a-sticky">
        <div class="a-container">
          <div class="a-left">
            <g-link to="/" aria-current="page" class="a-home-link a-active--exact a-active">
              <img src="/img/logo.svg" alt="Nichlas W. Andersen" class="a-logo">
            </g-link>
          </div>
          <nav class="a-nav a-right">
            <a href="/journal" class="a-nav__link">Journal</a>
            <a href="/contact" class="a-nav__link">Say Hi!</a>
          </nav>
        </div>
      </header>
    </div>

    <div class="a-container">
      <slot/>
    </div>

    <footer class="a-footer">
      <div class="a-container">
        <span >Copyright © 2021</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "artLayout"
}
</script>

<style scoped>

</style>
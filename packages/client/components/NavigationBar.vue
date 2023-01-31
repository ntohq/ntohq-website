<template>
  <nav :class="{ 'is-transformed': !showNavbar }" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <img class="image is-rounded" src="@/assets/images/text-logo.png" width="64" height="64">
      </NuxtLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-content"
        @click="isActive = !isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar-content" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <NuxtLink class="navbar-item navlink" v-for="navRoutes in navigationRoutes" :to="navRoutes.link">
          {{ navRoutes.name }}
        </NuxtLink>
      </div>

      <div class="navbar-end">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    navigationRoutes: Array,
  },
  data() {
    return {
      isActive: false,
      showNavbar: true
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: transform 200ms ease-out;
  -webkit-box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 4px 38px 0px rgba(0, 0, 0, 0.5);
}

@media (min-width: calc(960px + (2 * 0.75rem))) {
  a.navbar-item.navlink{
    &:after {
      content: '';
      height: 1.5px;
      width: 0;
      background-color: #598d58;
      position: absolute;
      left: calc(50%);
      bottom: 10%;
      -webkit-transition: width 300ms linear;
      transition: width 300ms linear;
    }
    &:hover:after {
      width: calc(90% - 30%);
      left: 20%;
    }
  }
}


.navbar-item img {
  max-height: 64px;
  border-radius: 50%;
}

.navbar-burger {
  height: auto;
}
</style>
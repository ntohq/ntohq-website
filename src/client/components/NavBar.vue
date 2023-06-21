<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">ntohq developers</NuxtLink>
            <ul :class="[{ 'is-active': isActive }, 'menu', 'menu-horizontal', 'px-1']">
                <li v-for="navRoutes in navigationRoutes">
                    <NuxtLink :to="navRoutes.link">{{ navRoutes.name }}</NuxtLink>
                    <ul v-if="navRoutes.dropdown != null || navRoutes.dropdown != undefined" class="bg-white">
                        <li v-for="item in navRoutes.dropdown">
                            <NuxtLink :to="item.link">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <ThemeChanger></ThemeChanger>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navigationRoutes: Array,
    },
    data() {
        return {
            isActive: false,
        }
    },
}
</script>

<style>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
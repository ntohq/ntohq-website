<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">YourImage</NuxtLink>
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
            <div class="form-control">
                <div class="input-group">
                    <input type="text" placeholder="Search…" class="input input-bordered" />
                    <button class="btn btn-square">
                        <span class="i-mdi i-mdi-magnify"></span>
                    </button>
                </div>
            </div>
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
            showNavbar: true
        }
    }
}
</script>
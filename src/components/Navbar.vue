<template>
    <nav class="navbar bg-base-100" aria-label="Primary">
        <div class="navbar-start">
            <a href="/" class="btn btn-ghost normal-case text-xl">ntohq developers</a>
            <ul :class="[{ 'is-active': isActive }, 'menu', 'menu-horizontal', 'px-1']">
                <li v-for="navRoutes in navigationRoutes">
                    <a :href="navRoutes.link" :aria-label="navRoutes.label">{{ navRoutes.name }}</a>
                    <!-- <ul v-if="navRoutes.dropdown != null || navRoutes.dropdown != undefined" class="bg-white">
                        <li v-for="item in navRoutes.dropdown">
                            <a :href="item.link">{{ item.name }}</a>
                        </li>
                    </ul> -->
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <!-- <ThemeChanger></ThemeChanger> -->
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            navigationRoutes: [
                {
                    link: '/',
                    name: 'Home',
                    label: 'Go Home'
                },
                {
                    link: '/about',
                    name: 'About Us',
                    label: 'Go About Us'
                },
                {
                    link: '/blog',
                    name: 'Blog',
                    label: 'Go Blog'
                },
                
            ]
        }
    },
}
</script>
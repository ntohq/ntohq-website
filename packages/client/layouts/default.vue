<template>
    <div>
        <NavigationBar  :navigationRoutes="navigationLinks"/>
        <slot />
        <NavigationFooter/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                navigationLinks: [
                    {
                        link: '/',
                        name: 'Home'
                    },
                    {
                        link: '/',
                        name: 'About Us'
                    },
                    {
                        link: '/',
                        name: 'News'
                    }
                ]
            }
        }
    }
</script>
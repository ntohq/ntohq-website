<template>
    <div>
        <NavBar :navigationRoutes="navigationLinks"></NavBar>
        <slot />
        <NavFooter></NavFooter>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationLinks: [
                {
                    name: 'Home',
                    link: '/',
                    dropdown: [
                        {
                            name: 'Test',
                            link: '/#test'
                        },
                        {
                            name: 'Test Two',
                            link: '/#test2'
                        }
                    ]
                },
                {
                    name: 'About Us',
                    link: '/about',
                    dropdown: null
                }
            ]
        }
    }
}
</script>
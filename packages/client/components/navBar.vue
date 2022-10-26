<template>
    <nav>
        <div id="branding"></div>
        <div id="start">
            <ul>
                <li v-for="navSet in navRoutes">
                    <NuxtLink 
                        :to="navSet.pageLink" 
                        tag="router-link"
                        exact-active-class="is-active"
                    >
                        {{ navSet.pageTitle }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div id="end"></div>
    </nav>
</template>

<script>
export default {
    // props: {
    //     start:  Array,
    //     end:    Array,
    //     imgSrc: String
    // }
    data() {
        return {
            navRoutes: [
                {
                    pageTitle: 'Home',
                    pageLink:  '/'
                },
                {
                    pageTitle: 'About Us',
                    pageLink:  '/about'
                },
                {
                    pageTitle: 'News',
                    pageLink:  '/news'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    ul {
        list-style: none;
        display: flex;

        li {
            flex: 1;
            margin: auto;

            // Navigation Links
            a {
                text-decoration: none;
            }

            a:visited {
                color: red;
            }
            
            a.is-active {
                color: blue;
            }
        }
    }
}
</style>
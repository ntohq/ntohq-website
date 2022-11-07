<template>
    <nav>
        <div id="branding">
            <img src="@/assets/images/logo_transparent.png"/>
        </div>
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
            <n-checkbox></n-checkbox>
        </div>
        <div id="end"></div>
    </nav>
</template>

<script>
export default {
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
    display: flex;
    flex-direction: row;    
    height: 8vh;
    background-color: #47c7c5;

    #branding {
        flex: 0.3;

        img {
            height: 8vh;
        }
    }

    #start {
        flex: 1;
        margin: auto;

        ul {
            list-style: none;
            display: flex;

            li {
                flex: 1 0 10px;
                margin: auto;

                // Navigation Links
                a {
                    text-decoration: none;
                }

                a:hover {
                    color: red;
                }

                a:active {
                    color: green;
                }
                
                a.is-active {
                    color: lightblue;
                }

                a:link {
                    color: blue;
                }
            }
        }
    }
}
</style>
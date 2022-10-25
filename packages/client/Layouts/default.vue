<template>
    <header>
        <navigationBar></navigationBar>
    </header>
    <main>
        <h2>Wassup</h2>
        <slot />        
    </main>
</template>

<script>
import navigationBar from '@/components/navBar.vue'

export default {
    components: {
        navigationBar
    }
}
</script>
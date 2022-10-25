<template>
    <header>
        <navigationBar></navigationBar>
    </header>
    <main>
        <slot />        
    </main>
    <navigationFooter></navigationFooter>
</template>

<script>
import navigationBar    from '@/components/navBar.vue'
import navigationFooter from '@/components/navFooter.vue'

export default {
    components: {
        navigationBar,
        navigationFooter
    }
}
</script>
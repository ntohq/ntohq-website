<template>
    <div id="_container">
        <NavBar/>
        <slot />
        <NavFooter/>
    </div>
</template>

<style lang="scss" scoped>
    div#_container {
        height: 100%;
    }
</style>
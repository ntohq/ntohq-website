<template>
    <div class="flex grid-flow-col">
        <span class="i-mdi-weather-sunny hover:i-mdi-weather-sunny-alert m-auto"></span>
        <input type="checkbox" class="toggle mx-2 m-auto" ref="toggleSwitch" @change="toggleTheme"/>
        <span class="i-mdi-weather-night hover:i-mdi-weather-night-alert m-auto"></span>
    </div>
</template>

<script setup>
const colorMode = useColorMode();
const themes = [
    'system',
    'dark',
    'light'
];
</script>

<script>
export default {
    mounted() {
        if(this.$colorMode.value == 'dark')
        {
            this.$refs.toggleSwitch.checked = true;
        }
    },
    methods: {
        toggleTheme(event) {
            if(event) {
                let checked = event.target.checked || false;

                if(checked) {
                    this.$colorMode.value ='dark';
                }
                else {
                    this.$colorMode.value = 'light';
                }
            }
            else {
                throw console.error("toggleTheme event param is null or undefined. Pleaser reload the webpage.");
            }
        }
    }
}
</script>
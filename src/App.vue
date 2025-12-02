<template>
    <div id="app" class = "page-container">
        <HeroSection />
        <DescriptionSection />
        <FinalSection />
    </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import DescriptionSection from "./components/DescriptionSection.vue";
import FinalSection from "./components/FinalSection.vue";

export default {
    name: 'App',
    components: {
        DescriptionSection,
        HeroSection,
        FinalSection
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow-x: hidden;
    font-family: 'Manrope', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.page-container {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
}
</style>


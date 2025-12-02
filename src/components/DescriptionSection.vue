<template>
    <section class="section description-section">
        <p class="desc-text">At NEXA, we believe real connections happen face-to-face.</p>
        <p class="desc-text">In a world crowded with digital noise, we’re building a simple and meaningful way for people to meet offline whether to make new friends, discover shared interests, or strengthen existing relationships.</p>
        <p class="desc-text">NEXA helps you find the right people, at the right moment, in the real world.</p>
        <p class="desc-text">We’re here to make meeting up effortless, natural, and fun.</p>
        <p class="desc-text">Join us as we bring back the power of real human connection.</p>
    </section>
</template>

<script>
export default {
    name: "DescriptionSection",
    mounted() {
        const section = this.$el;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('revealed');
                    observer.unobserve(section);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(section);
    }
}
</script>

<style scoped>
.section {
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    padding: 2rem;
    box-sizing: border-box;
}

.section > * {
    opacity: 0;
    transform: translateY(20px);
    filter: brightness(0.6);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out;
}

/* Revealed state */
.section.revealed > * {
    opacity: 1;
    transform: translateY(0);
    filter: brightness(1);
}

.section.revealed > *:nth-child(1) { transition-delay: 0.2s; }
.section.revealed > *:nth-child(2) { transition-delay: 0.4s; }
.section.revealed > *:nth-child(3) { transition-delay: 0.6s; }
.section.revealed > *:nth-child(4) { transition-delay: 0.8s; }
.section.revealed > *:nth-child(5) { transition-delay: 1s; }

.desc-text {
    max-width: 80%;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
}
</style>

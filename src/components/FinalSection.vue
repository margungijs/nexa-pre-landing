<template>
    <section class="section final">
        <div class="final-image-container">
            <img src="/pre-landing.jpg" alt="Final Section Image" class="final-image" />
            <div class="overlay">
                <div class="overlay-content">
                    <img src="/nexa-logo.png" alt="Overlay Logo" class="overlay-logo" />
                    <div class="overlay-text">
                        <h2>NEXA</h2>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-title">CONTACT US</h3>
                    <p>+371 26126991</p>
                    <p>1nexaapp@gmail.com</p>
                </div>
                <div class="footer-section">
                    <h3 class="footer-title">OUR LOCATION</h3>
                    <p>Riga, Latvia</p>
                </div>
                <div class="footer-section">
                    <h3 class="footer-title">FOLLOW US ON LINKEDIN</h3>
                    <a href="https://linkedin.com/in/valdaorina" target="_blank">
                        linkedin.com/in/valdaorina
                    </a>
                    <a href="https://linkedin.com/in/diana-butirina" target="_blank">
                        linkedin.com/in/diana-butirina
                    </a>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
export default {
    name: "FinalSection",
};
</script>

<style scoped>
.section {
    display: grid;
    grid-template-rows: 2fr 1fr;
    width: 100vw;
    height: 100vh;
    scroll-snap-align: start;
}

.final-image-container {
    position: relative;
    width: 100%;
    height: 100%;
}
.final-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 2;
    padding: 40px;
    box-sizing: border-box;
}
.overlay-content {
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
}
.overlay-logo {
    width: 60px;
    height: auto;
}
.overlay-text h2 {
    margin: 0;
    font-size: 2rem;
}
.footer {
    background: #000;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    max-width: 1200px;
    flex-wrap: wrap;
}
.footer-section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 40px;
    flex: 1 1 250px;
    margin: 10px;
}

.footer-section a {
    text-decoration: none;
    cursor: pointer;
    color: white;
}

.footer-section h3 {
    margin-top: 10px;
    margin-bottom: 20px;
    color: darkgray;
    text-align: left;
}
.footer-section p {
    margin: 2px 0;
}

@media (max-width: 768px) {
    .section {
        grid-template-rows: 1fr 1fr;
    }

    .footer-section {
        padding-bottom: 0;
        text-align: center;
        margin: 0;
    }

    .footer-section h3 {
        text-align: center;
    }
}
</style>

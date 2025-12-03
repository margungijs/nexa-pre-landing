<template>
    <section class="section hero">
        <video autoPlay muted loop playsInline class="hero-video">
            <source src="/public/Hero.mp4" type="video/mp4">
        </video>

        <div class="hero-overlay"></div>

        <div class="hero-content">
            <img src="/nexa-logo.png" alt="nexa-logo" class="hero-logo">
            <h1 class="hero-title">NEXA</h1>
            <h3 class="hero-desc">Launching Soon!</h3>
            <button class="sub-button" @click="openModal">Subscribe to be updated</button>
        </div>

        <div class="modal-backdrop" v-if="showModal" @click="closeModal"></div>

        <div class="modal" v-if="showModal">
            <button class="modal-close" @click="closeModal">✕</button>
            <h2 class="modal-title">Stay Updated</h2>
            <p class="modal-subtitle">Enter your email to get launch updates.</p>

            <form @submit.prevent="submitEmail" class="modal-form">
                <input
                    v-model="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    class="modal-input"
                />

                <button type="submit" class="modal-submit">
                    Subscribe
                </button>
            </form>

            <p v-if="successMessage" class="success-message">
                {{ successMessage }}
            </p>
        </div>
    </section>
</template>

<script>
import { db } from '@/main.js';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export default {
    name: "HeroSection",

    data() {
        return {
            showModal: false,
            email: "",
            successMessage: ""
        };
    },

    mounted() {
        const heroContent = this.$el.querySelector('.hero-content');
        requestAnimationFrame(() => {
            heroContent.classList.add('enter-active');
        });
    },

    methods: {
        openModal() {
            this.showModal = true;
        },

        closeModal() {
            this.showModal = false;
            this.email = "";
            this.successMessage = "";
        },

        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        },

        async submitEmail() {
            if (!this.email) {
                this.successMessage = "Please enter your email.";
                return;
            }

            if(!this.validateEmail(this.email)){
                this.successMessage = "Invalid email address.";
                return;
            }

            try {
                const subscribersCollection = collection(db, 'subscribers');

                await addDoc(subscribersCollection, {
                    email: this.email,
                    timestamp: serverTimestamp()
                })

                this.successMessage = "You're subscribed!";
                this.email = "";

                setTimeout(() => this.closeModal(), 1500);
            } catch (err) {
                console.error(err);
                this.successMessage = "Something went wrong. Please try again.";
            }
        }
    }
};
</script>

<style scoped>
.section {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: white;
}

.hero-video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 0;
}

.hero-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;
    padding: 0 20px;
}

.hero-content > * {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero-content.enter-active > * {
    opacity: 1;
    transform: translateY(0);
}

.modal-close {
    position: absolute;
    top: 12px;
    right: 14px;
    background: transparent;
    border: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    transition: opacity 0.2s ease;
}

.modal-close:hover {
    opacity: 0.6;
}

.hero-content.enter-active > *:nth-child(1) { transition-delay: 0.2s; }
.hero-content.enter-active > *:nth-child(2) { transition-delay: 0.4s; }
.hero-content.enter-active > *:nth-child(3) { transition-delay: 0.6s; }
.hero-content.enter-active > *:nth-child(4) { transition-delay: 0.8s; }

.hero-logo { width: 120px; }
.hero-title { font-size: 120px; font-weight: 600; }
.hero-desc { font-size: 60px; }

.sub-button {
    background-color: white;
    padding: 18px 36px;
    border-radius: 12px;
    font-size: 20px;
    color: black;
}

/* --- MODAL --- */
.modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 5;
    backdrop-filter: blur(4px);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #111;
    padding: 2rem;
    width: 90%;
    max-width: 420px;
    border-radius: 14px;
    text-align: center;
    z-index: 10;
    animation: fadeIn 0.3s ease-out;
}

.modal-title {
    font-size: 28px;
    margin-bottom: 8px;
}

.modal-subtitle {
    color: #ccc;
    margin-bottom: 20px;
}

.modal-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.modal-input {
    padding: 14px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
}

.modal-submit {
    padding: 14px;
    border-radius: 10px;
    border: none;
    font-size: 18px;
    background: white;
    color: black;
    font-weight: 600;
}

.success-message {
    margin-top: 12px;
    color: #4aff7e;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translate(-50%, -48%); }
    to   { opacity: 1; transform: translate(-50%, -50%); }
}
</style>

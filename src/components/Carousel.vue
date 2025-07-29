<template>
<div class="max-w-md mx-auto">
        <!-- Carousel Container -->
        <div class="relative bg-white rounded-2xl shadow-lg overflow-hidden" style="height: 400px;">
            <!-- Carousel Wrapper -->
            <div id="carousel" class="carousel-container flex transition-transform duration-500 ease-in-out h-full">
                <!-- Slide 1 -->
                <div class="carousel-slide w-full flex-shrink-0 bg-gradient-to-b from-blue-50 to-blue-100 p-8 text-center flex flex-col justify-center">
                    <h2 class="text-2xl font-bold text-green-500 mb-8">Como funciona?</h2>
                    
                    <!-- Icon -->
                    <div class="mb-8">
                        <div class="inline-block">
                            <div class="w-16 h-1 bg-green-500 mb-2 mx-auto"></div>
                            <div class="w-16 h-1 bg-green-500 mb-2 mx-auto"></div>
                            <div class="w-16 h-1 bg-green-500 mx-auto"></div>
                        </div>
                    </div>
                    
                    <div class="text-green-600 text-xl font-semibold mb-4">1.</div>
                    <p class="text-gray-700 text-lg font-medium">
                        Cadastre-se na nossa<br>
                        plataforma
                    </p>
                </div>

                <!-- Slide 2 -->
                <div class="carousel-slide w-full flex-shrink-0 bg-gradient-to-b from-blue-50 to-blue-100 p-8 text-center flex flex-col justify-center">
                    <h2 class="text-2xl font-bold text-green-500 mb-8">Como funciona?</h2>
                    
                    <!-- Icon -->
                    <div class="mb-8">
                        <div class="inline-block">
                            <svg class="w-16 h-16 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="text-green-600 text-xl font-semibold mb-4">2.</div>
                    <p class="text-gray-700 text-lg font-medium">
                        Configure suas<br>
                        preferências
                    </p>
                </div>

                <!-- Slide 3 -->
                <div class="carousel-slide w-full flex-shrink-0 bg-gradient-to-b from-blue-50 to-blue-100 p-8 text-center flex flex-col justify-center">
                    <h2 class="text-2xl font-bold text-green-500 mb-8">Como funciona?</h2>
                    
                    <!-- Icon -->
                    <div class="mb-8">
                        <div class="inline-block">
                            <svg class="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="text-green-600 text-xl font-semibold mb-4">3.</div>
                    <p class="text-gray-700 text-lg font-medium">
                        Comece a usar<br>
                        nossa solução
                    </p>
                </div>
            </div>

            <!-- Navigation Dots -->
            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2">
                <button class="dot w-3 h-3 rounded-full dot-active transition-colors duration-300" onclick="goToSlide(0)"></button>
                <button class="dot w-3 h-3 rounded-full dot-inactive transition-colors duration-300" onclick="goToSlide(1)"></button>
                <button class="dot w-3 h-3 rounded-full dot-inactive transition-colors duration-300" onclick="goToSlide(2)"></button>
            </div>


        </div>
    </div>
</template>

    <style>
        .carousel-container {
            scroll-behavior: smooth;
        }
        .carousel-slide {
            scroll-snap-align: start;
        }
        .dot-active {
            background-color: #22c55e;
        }
        .dot-inactive {
            background-color: #d1d5db;
        }
    </style>

        <script>
        let currentSlide = 0;
        const totalSlides = 3;
        const carousel = document.getElementById('carousel');
        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            const translateX = -currentSlide * 100;
            carousel.style.transform = `translateX(${translateX}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.remove('dot-inactive');
                    dot.classList.add('dot-active');
                } else {
                    dot.classList.remove('dot-active');
                    dot.classList.add('dot-inactive');
                }
            });
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        // Auto-play functionality (optional)
        setInterval(nextSlide, 5000);

        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateCarousel();
                }
            }
        }

        // Initialize
        updateCarousel();
    </script>
// --- Artists Enum Model ---
const ARTISTS = {
    PRODUCERS: {
        IRAJ: 'Iraj',
        PASAN_LIYANAGE: 'Pasan Liyanage',
        ADEESHA_BEATS: 'Adeesha Beats',
        Dilshan_L_Silva: 'Dilshan L Silva',
    },
    LYRICISTS: {
        WASANTHA_DUGGANARALA: 'Wasantha Dugganarala',
        SAJITH_AKMEEMANA: 'Sajith Akmeemana',
        YASHODHA_ADHIKARI: 'Yashodha Adhikari',
        SANKHA_B: 'Sankha B',
        LASITHA_JAYANETHTHI: 'Lasitha Jayaneththi Arachchige',
    }
};

// --- Songs Constant ---
const SONGS = [
    {
        name: 'Kathirina',
        producer: ARTISTS.PRODUCERS.IRAJ,
        lyrics: ARTISTS.LYRICISTS.WASANTHA_DUGGANARALA,
        artwork: 'images/songs/kathirina.jpg', // Placeholder, update as needed
        audio: 'audio/kathirina.mp3', // Placeholder, update as needed
        description: 'A soulful ballad about love and longing under the stars.',
        album: 'Malindu, Iraj, Hirushi',
        year: 2020,
    },
    {
        name: 'Saavi',
        producer: ARTISTS.PRODUCERS.IRAJ,
        lyrics: ARTISTS.LYRICISTS.SAJITH_AKMEEMANA,
        artwork: 'images/songs/saavi.jpg', // Placeholder, update as needed
        audio: 'audio/saavi.mp3', // Placeholder, update as needed
        description: 'An upbeat anthem celebrating the power of connection.',
        album: 'Malindu, Iraj, Romaine',
        year: 2017,
    },
    {
        name: 'Muthu Warusa',
        producer: ARTISTS.PRODUCERS.PASAN_LIYANAGE,
        lyrics: ARTISTS.LYRICISTS.YASHODHA_ADHIKARI,
        artwork: 'images/songs/muthuwarusa.jpg', // Placeholder, update as needed
        audio: 'audio/muthuwarusa.mp3', // Placeholder, update as needed
        description: 'An upbeat anthem celebrating the power of connection.',
        album: 'Malindu, Pasan Liyanage',
        year: 2024,
    },
    {
        name: 'Rathu Saaya',
        producer: ARTISTS.PRODUCERS.ADEESHA_BEATS,
        lyrics: ARTISTS.LYRICISTS.SANKHA_B,
        artwork: 'images/songs/rathusaaya.jpg', // Placeholder, update as needed
        audio: 'audio/rathusaaya.mp3', // Placeholder, update as needed
        description: 'An upbeat anthem celebrating the power of connection.',
        album: 'Malindu, Sankha B, Adeesha Beats',
        year: 2025,
    },
    {
        name: 'Untitled (Coming Soon)',
        producer: ARTISTS.PRODUCERS.Dilshan_L_Silva,
        lyrics: ARTISTS.LYRICISTS.LASITHA_JAYANETHTHI,
        artwork: 'images/songs/untitled.jpg', // Placeholder, update as needed
        audio: 'audio/.mp3', // Placeholder, update as needed
        description: 'An upbeat anthem celebrating the power of connection.',
        album: 'Dilshan Silva, Lasitha Jayaneththi',
        year: 2026,
    },
    {
        name: 'Untitled (Coming Soon)',
        producer: ARTISTS.PRODUCERS.IRAJ,
        lyrics: ARTISTS.LYRICISTS.IRAJ,
        artwork: 'images/songs/untitled.jpg', // Placeholder, update as needed
        audio: 'audio/.mp3', // Placeholder, update as needed
        description: 'An upbeat anthem celebrating the power of connection.',
        album: 'Iraj',
        year: 2026,
    }
];

// --- Music Videos Data ---
const VIDEOS = [
    {
      title: 'Kathirina',
      youtubeUrl: 'https://www.youtube.com/embed/bHGdcG6R-xQ',
      thumbnail: 'images/songs/kathirina.jpg',
    },
    {
      title: 'Saavi',
      youtubeUrl: 'https://www.youtube.com/embed/IIG8x725JxE',
      thumbnail: 'images/songs/saavi.jpg',
    },
    {
        title: 'Rathu Saaya',
        youtubeUrl: 'https://www.youtube.com/embed/jCob6x0eDd0',
        thumbnail: 'images/songs/rathusaaya.jpg',
    },
  ];

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  // Safety: Always hide menu on load
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Audio player functionality
document.querySelectorAll('.song-card').forEach(card => {
    const audio = card.querySelector('audio');
    const playOverlay = card.querySelector('.play-overlay');
    
    if (playOverlay && audio) {
        playOverlay.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playOverlay.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                playOverlay.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        audio.addEventListener('ended', () => {
            playOverlay.innerHTML = '<i class="fas fa-play"></i>';
        });
    }
});

// Video card click handlers
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
        // You can add YouTube video opening functionality here
        console.log('Video clicked:', card.querySelector('h3').textContent);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Social media link hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Streaming button hover effects
document.querySelectorAll('.streaming-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.song-card, .collab-card, .video-card');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .song-card, .collab-card, .video-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .song-card.active, .collab-card.active, .video-card.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: #00d4ff !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Initialize reveal animation on page load
window.addEventListener('load', revealOnScroll);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
    
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    revealOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation
// --- Enhanced Animations ---

// Helper: Animate cards with stagger only when in viewport
function animateCardsOnScroll() {
    const cardSelectors = ['.song-card', '.collab-card', '.video-card'];
    cardSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((card, idx) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.style.animationPlayState = 'running';
            }
        });
    });
}
window.addEventListener('scroll', animateCardsOnScroll);
window.addEventListener('load', animateCardsOnScroll);

// Ensure hero buttons animate in after typing effect
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
        setTimeout(() => {
            document.querySelectorAll('.hero-buttons .btn').forEach(btn => {
                btn.style.animationPlayState = 'running';
            });
        }, 150 * originalText.length + 400); // after typing
    }
});

// --- 3D Tilt and Glow for Song Cards ---
function enableSongCardTilt() {
    if (window.innerWidth <= 768) return; // Only desktop
    document.querySelectorAll('.song-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            card.classList.add('tilted');
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.classList.remove('tilted');
        });
    });
}
window.addEventListener('DOMContentLoaded', enableSongCardTilt);
window.addEventListener('resize', enableSongCardTilt); 

// --- Custom Glowing Cursor ---
function initCustomCursor() {
    if (window.innerWidth <= 768) return;
    let cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
    }
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}
window.addEventListener('DOMContentLoaded', initCustomCursor);
window.addEventListener('resize', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (window.innerWidth <= 768 && cursor) cursor.style.display = 'none';
    else if (cursor) cursor.style.display = '';
}); 

// --- Render SONGS to Songs Section ---
function renderSongs() {
    const container = document.getElementById('songs-list');
    if (!container) return;
    container.innerHTML = '';
    SONGS.forEach((song, idx) => {
        const row = document.createElement('div');
        row.className = 'song-row';
        let subtitle = '';
        if (song.album && song.year) {
            subtitle = `${song.album} · ${song.year}`;
        } else if (song.year) {
            subtitle = `Single · ${song.year}`;
        } else {
            subtitle = `Music: ${song.producer} · Lyrics: ${song.lyrics}`;
        }
        row.innerHTML = `
            <div class="song-art">
                <button class="song-play-btn" aria-label="Play"><i class="fas fa-play"></i></button>
                <img src="${song.artwork}" alt="${song.name} Album Art">
            </div>
            <div class="song-meta">
                <div class="song-title">${song.name}</div>
                <div class="song-sub">${subtitle}</div>
            </div>
            <div class="song-menu"><i class="fas fa-ellipsis-h"></i></div>
        `;
        // Play button logic
        row.querySelector('.song-play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            showBottomPlayer(song, idx);
        });
        container.appendChild(row);
    });
}

// --- Bottom Popup Player ---
function ensureBottomPlayer() {
    if (!document.getElementById('bottom-player')) {
        const div = document.createElement('div');
        div.id = 'bottom-player';
        document.body.appendChild(div);
    }
}

function showSongNotAvailablePopup(songName) {
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'song-popup-overlay';
    overlay.innerHTML = `
        <div class="song-popup">
            <div class="song-popup-content">
                <div class="song-popup-icon">🎵</div>
                <p>Sorry, "${songName}" is not available yet. Distribution is still in progress.</p>
                <p>Want to stay tuned?</p>
                <button class="song-popup-subscribe-btn" onclick="window.open('https://www.youtube.com/@Malindu?sub_confirmation=1', '_blank')">
                    <i class="fab fa-youtube"></i>
                    Subscribe on YouTube
                </button>
                <button class="song-popup-close-btn" onclick="this.closest('.song-popup-overlay').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Auto-remove after 8 seconds
    setTimeout(() => {
        if (overlay.parentNode) {
            overlay.remove();
        }
    }, 8000);
}

function showBottomPlayer(song, idx) {
    ensureBottomPlayer();
    const player = document.getElementById('bottom-player');
    let subtitle = '';
    if (song.album && song.year) {
        subtitle = `${song.album} · ${song.year}`;
    } else if (song.year) {
        subtitle = `Single · ${song.year}`;
    } else {
        subtitle = `Music: ${song.producer} · Lyrics: ${song.lyrics}`;
    }
    player.innerHTML = `
        <div class="bottom-player active">
            <div class="bottom-player-art">
                <img src="${song.artwork}" alt="${song.name} Album Art">
            </div>
            <div class="bottom-player-meta">
                <div class="bottom-player-title">${song.name}</div>
                <div class="bottom-player-sub">${subtitle}</div>
            </div>
            <div class="bottom-player-controls">
                <button class="bottom-player-btn" aria-label="Play/Pause"><i class="fas fa-pause"></i></button>
                <div class="bottom-player-progress"><div class="bottom-player-progress-bar"></div></div>
                <div class="bottom-player-time">0:00 / 0:00</div>
            </div>
            <button class="bottom-player-close" aria-label="Close"><i class="fas fa-times"></i></button>
            <audio preload="metadata" src="${song.audio}"></audio>
        </div>
    `;
    
    // Add error handling for audio
    const audio = player.querySelector('audio');
    audio.addEventListener('error', () => {
        // Hide the bottom player
        const wrapper = player.querySelector('.bottom-player');
        wrapper.classList.remove('active');
        setTimeout(() => { player.innerHTML = ''; }, 300);
        
        // Show popup message
        showSongNotAvailablePopup(song.name);
    });
    
    setupBottomPlayerLogic(player);
}

function setupBottomPlayerLogic(player) {
    const wrapper = player.querySelector('.bottom-player');
    const audio = wrapper.querySelector('audio');
    const btn = wrapper.querySelector('.bottom-player-btn');
    const bar = wrapper.querySelector('.bottom-player-progress-bar');
    const progress = wrapper.querySelector('.bottom-player-progress');
    const time = wrapper.querySelector('.bottom-player-time');
    const closeBtn = wrapper.querySelector('.bottom-player-close');
    let raf = null;
    function formatTime(sec) {
        sec = Math.floor(sec);
        return `${Math.floor(sec/60)}:${('0'+(sec%60)).slice(-2)}`;
    }
    function updateTime() {
        time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration||0)}`;
    }
    function updateBar() {
        const percent = (audio.currentTime / (audio.duration||1)) * 100;
        bar.style.width = percent + '%';
    }
    function step() {
        updateTime();
        updateBar();
        raf = requestAnimationFrame(step);
    }
    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btn.querySelector('i').className = 'fas fa-pause';
            raf = requestAnimationFrame(step);
        } else {
            audio.pause();
            btn.querySelector('i').className = 'fas fa-play';
            cancelAnimationFrame(raf);
        }
    });
    audio.addEventListener('play', () => {
        btn.querySelector('i').className = 'fas fa-pause';
        raf = requestAnimationFrame(step);
    });
    audio.addEventListener('pause', () => {
        btn.querySelector('i').className = 'fas fa-play';
        cancelAnimationFrame(raf);
    });
    audio.addEventListener('ended', () => {
        btn.querySelector('i').className = 'fas fa-play';
        bar.style.width = '0%';
        updateTime();
        cancelAnimationFrame(raf);
    });
    audio.addEventListener('loadedmetadata', updateTime);
    progress.addEventListener('click', (e) => {
        const rect = progress.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
        updateBar();
    });
    closeBtn.addEventListener('click', () => {
        wrapper.classList.remove('active');
        setTimeout(() => { player.innerHTML = ''; }, 300);
        audio.pause();
    });
    // Pause any other audio
    document.querySelectorAll('audio').forEach(a => { if (a !== audio) a.pause(); });
    audio.play();
    btn.querySelector('i').className = 'fas fa-pause';
    raf = requestAnimationFrame(step);
}

// Loading Screen Functionality
function waitForCriticalImages(timeout = 7000) {
    const images = Array.from(document.querySelectorAll('img')).filter(img => {
        const attr = img.getAttribute('loading');
        const prop = typeof img.loading === 'string' ? img.loading.toLowerCase() : '';
        return attr !== 'lazy' && prop !== 'lazy';
    });

    if (!images.length) {
        return Promise.resolve(true);
    }

    return new Promise(resolve => {
        let remaining = images.length;
        let resolved = false;
        let allSucceeded = true;
        const cleanup = [];

        const finish = (allLoaded) => {
            if (resolved) return;
            resolved = true;
            cleanup.forEach(fn => fn());
            resolve(allLoaded);
        };

        const timer = setTimeout(() => finish(false), timeout);
        cleanup.push(() => clearTimeout(timer));

        const markDone = (succeeded) => {
            if (!succeeded) {
                allSucceeded = false;
            }
            remaining -= 1;
            if (remaining <= 0) {
                finish(allSucceeded);
            }
        };

        images.forEach(img => {
            if (img.complete) {
                markDone(img.naturalWidth !== 0);
                return;
            }

            const onDone = (event) => {
                img.removeEventListener('load', onDone);
                img.removeEventListener('error', onDone);
                markDone(event.type !== 'error');
            };

            img.addEventListener('load', onDone);
            img.addEventListener('error', onDone);
            cleanup.push(() => {
                img.removeEventListener('load', onDone);
                img.removeEventListener('error', onDone);
            });
        });

        if (remaining <= 0) {
            finish(allSucceeded);
        }
    });
}

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    if (!loadingScreen || !mainContent) {
        document.body.classList.remove('is-loading');
        document.body.classList.add('loaded');
        return;
    }

    const storageKey = 'initialImagesLoaded';
    let hasPreloaded = false;
    try {
        hasPreloaded = localStorage.getItem(storageKey) === 'true';
    } catch (err) {
        hasPreloaded = false;
    }
    const minDisplayTime = 300;
    const maxWaitTime = 7000;
    let revealed = false;

    const revealContent = (skipAnimation = false) => {
        if (revealed) return;
        revealed = true;

        document.body.classList.remove('is-loading');
        document.body.classList.add('loaded');
        mainContent.style.display = 'block';

        if (skipAnimation) {
            loadingScreen.style.display = 'none';
            loadingScreen.classList.remove('fade-out');
            return;
        }

        if (!loadingScreen.classList.contains('fade-out')) {
            loadingScreen.classList.add('fade-out');
        }

        const hideLoader = () => {
            loadingScreen.style.display = 'none';
            loadingScreen.removeEventListener('transitionend', hideLoader);
        };

        loadingScreen.addEventListener('transitionend', hideLoader);
        setTimeout(hideLoader, 600);
    };

    if (hasPreloaded) {
        revealContent(true);
        return;
    }

    loadingScreen.style.display = 'flex';
    mainContent.style.display = 'none';

    const ensureMinDisplay = new Promise(resolve => setTimeout(resolve, minDisplayTime));

    Promise.all([ensureMinDisplay, waitForCriticalImages(maxWaitTime)]).then(([, allLoaded]) => {
        if (allLoaded) {
            try {
                localStorage.setItem(storageKey, 'true');
            } catch (err) {
                // Storage might be unavailable; ignore
            }
        }
        revealContent();
    }).catch(() => {
        revealContent();
    });
}

window.addEventListener('DOMContentLoaded', () => {
    // Initialize loading screen
    initLoadingScreen();
    const hydrateInteractiveBits = () => {
        renderSongs();
        ensureBottomPlayer();
        // Back to top button functionality
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            // Show/hide back to top button based on scroll position
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            // Smooth scroll to top when button is clicked
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        // Toast for all coming soon streaming buttons
        document.body.addEventListener('click', function(e) {
            const target = e.target.closest('.coming-soon-btn');
            if (target) {
                e.preventDefault();
                showToast('Rathu Saaya is coming soon!');
            }
        });
    };

    if ('requestIdleCallback' in window) {
        requestIdleCallback(hydrateInteractiveBits, { timeout: 800 });
    } else {
        setTimeout(hydrateInteractiveBits, 0);
    }
});

// Fallback: ensure body becomes visible if loader fails to resolve before full load
window.addEventListener('load', () => {
    if (!document.body.classList.contains('loaded')) {
        document.body.classList.add('loaded');
    }
});

// --- Custom Player Logic ---
function initCustomPlayers() {
    const players = document.querySelectorAll('.custom-player');
    let currentAudio = null;
    let currentBtn = null;
    let currentBar = null;
    let currentTime = null;
    let raf = null;

    players.forEach(player => {
        const idx = player.getAttribute('data-song-idx');
        const card = player.closest('.song-card');
        const audio = card.querySelector('audio');
        const btn = player.querySelector('.player-btn');
        const bar = player.querySelector('.player-progress-bar');
        const progress = player.querySelector('.player-progress');
        const time = player.querySelector('.player-time');

        // Add error handling for audio
        audio.addEventListener('error', () => {
            // Get song name from the card
            const songName = card.querySelector('h3').textContent;
            showSongNotAvailablePopup(songName);
        });

        function formatTime(sec) {
            sec = Math.floor(sec);
            return `${Math.floor(sec/60)}:${('0'+(sec%60)).slice(-2)}`;
        }
        function updateTime() {
            time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration||0)}`;
        }
        function updateBar() {
            const percent = (audio.currentTime / (audio.duration||1)) * 100;
            bar.style.width = percent + '%';
        }
        function step() {
            updateTime();
            updateBar();
            raf = requestAnimationFrame(step);
        }
        btn.addEventListener('click', () => {
            // Pause any other audio
            document.querySelectorAll('audio').forEach(a => { if (a !== audio) a.pause(); });
            document.querySelectorAll('.player-btn i').forEach(i => { i.className = 'fas fa-play'; });
            if (audio.paused) {
                audio.play();
                btn.querySelector('i').className = 'fas fa-pause';
                raf = requestAnimationFrame(step);
            } else {
                audio.pause();
                btn.querySelector('i').className = 'fas fa-play';
                cancelAnimationFrame(raf);
            }
        });
        audio.addEventListener('play', () => {
            btn.querySelector('i').className = 'fas fa-pause';
            raf = requestAnimationFrame(step);
        });
        audio.addEventListener('pause', () => {
            btn.querySelector('i').className = 'fas fa-play';
            cancelAnimationFrame(raf);
        });
        audio.addEventListener('ended', () => {
            btn.querySelector('i').className = 'fas fa-play';
            bar.style.width = '0%';
            updateTime();
            cancelAnimationFrame(raf);
        });
        audio.addEventListener('loadedmetadata', updateTime);
        progress.addEventListener('click', (e) => {
            const rect = progress.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audio.currentTime = percent * audio.duration;
            updateBar();
        });
    });
}
window.addEventListener('DOMContentLoaded', initCustomPlayers); 

// --- Toast for Coming Soon ---
function ensureToast() {
    if (!document.getElementById('toast')) {
        const toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.position = 'fixed';
        toast.style.left = '50%';
        toast.style.bottom = '40px';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = 'linear-gradient(90deg, #23234b 60%, #8b5cf6 100%)';
        toast.style.color = '#fff';
        toast.style.padding = '14px 32px';
        toast.style.borderRadius = '24px';
        toast.style.fontSize = '1.08rem';
        toast.style.boxShadow = '0 2px 16px #0005';
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
        toast.style.zIndex = '99999';
        toast.style.transition = 'opacity 0.3s';
        document.body.appendChild(toast);
    }
}
function showToast(msg) {
    ensureToast();
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('coming-soon-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            showToast('Rathu Saaya is coming soon!');
        });
    }
}); 

// --- Render Music Videos ---
function isEmbeddable(youtubeUrl) {
  // Only works for standard YouTube video IDs, not playlists or shorts
  // This is a placeholder: in production, you'd check via YouTube API, but here we fallback for all
  return youtubeUrl.includes('youtube.com/embed/');
}

function getYoutubeWatchUrl(embedUrl) {
  // Convert embed URL to watch URL
  const match = embedUrl.match(/embed\/([\w-]+)/);
  if (match) {
    return `https://www.youtube.com/watch?v=${match[1]}`;
  }
  return embedUrl;
}

function renderVideos() {
  const videosList = document.getElementById('videos-list');
  if (!videosList) return;
  videosList.innerHTML = VIDEOS.map(video => {
    if (isEmbeddable(video.youtubeUrl)) {
      return `
        <div class="video-card">
          <div class="video-embed-wrapper">
            <iframe width="100%" height="220" src="${video.youtubeUrl}" title="${video.title}"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>${video.title}</h3>
        </div>
      `;
    } else {
      return `
        <div class="video-card">
          <div class="video-embed-wrapper">
            <img src="${video.thumbnail || 'images/placeholder-info.txt'}" alt="${video.title}" style="width:100%;height:220px;object-fit:cover;border-radius:8px;" />
          </div>
          <h3>${video.title}</h3>
          <a href="${getYoutubeWatchUrl(video.youtubeUrl)}" target="_blank" class="btn btn-primary" style="margin-top:0.5rem;">Watch on YouTube</a>
        </div>
      `;
    }
  }).join('');
}

document.addEventListener('DOMContentLoaded', function() {
  renderVideos();
}); 

// === Scroll-triggered entrance animations ===
(function() {
  const animatedEls = document.querySelectorAll('.swipe-in-left, .swipe-in-right, .fade-in-up');
  if ('IntersectionObserver' in window && animatedEls.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: show all
    animatedEls.forEach(el => el.classList.add('in-view'));
  }
})(); 

// === Scroll-indicator click to scroll to About ===
document.addEventListener('DOMContentLoaded', function() {
  var scrollIndicator = document.getElementById('scroll-indicator');
  if (scrollIndicator) {
    var scrollToAbout = function(e) {
      e.preventDefault();
      var aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    scrollIndicator.addEventListener('click', scrollToAbout);
    scrollIndicator.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        scrollToAbout(e);
      }
    });
  }
}); 

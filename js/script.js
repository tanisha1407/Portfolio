// Generate floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particlesContainer.appendChild(particle);
    }
}

// Typing Animation
const texts = ['AI/ML Engineer', 'Data Scientist', 'Innovation Creator', 'Problem Solver'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        typedElement.innerHTML = letter;
    }
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

if (cursor && cursorDot) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
    });
}

// Magnetic effect on buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .project-link').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// Scroll Effects
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    
    // Reveal animations
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
});

// Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Resume Functions
function openResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeResumeModal() {
    const modal = document.getElementById('resumeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume/Tanisha_Jain_Resume.pdf';
    link.download = 'Tanisha_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('📄 Downloading resume...');
}

// Demo Video Modal
function openDemo(videoUrl) {
    const modal = document.getElementById('demoModal');
    const iframe = document.getElementById('demoIframe');
    if (modal && iframe) {
        iframe.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeDemo() {
    const modal = document.getElementById('demoModal');
    const iframe = document.getElementById('demoIframe');
    if (modal && iframe) {
        iframe.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Certificate Functions
let currentCertData = null;

function openCertificateModal(certType) {
    const modal = document.getElementById('certModal');
    const modalImage = document.getElementById('certModalImage');
    const modalTitle = document.getElementById('certModalTitle');
    const modalIssuer = document.getElementById('certModalIssuer');
    const modalDate = document.getElementById('certModalDate');
    
    const certificates = {
        'machine-learning': {
            title: 'Machine Learning with Python',
            issuer: 'Regex Software Services',
            date: 'July-September 2024',
            imagePath: 'certificates/machine-learning-cert.jpg'
        },
        'cpp': {
            title: 'C++ Programming',
            issuer: 'Programmers World',
            date: '2022',
            imagePath: 'certificates/cpp-cert.jpg'
        },
        'python': {
            title: 'Python Programming',
            issuer: 'CISCO',
            date: '2023',
            imagePath: 'certificates/python-cert.jpg'
        },
        'data-science': {
            title: 'Data Science Fundamentals',
            issuer: 'Fractal',
            date: '2026',
            imagePath: 'certificates/data-science-cert.jpg'
        }
    };
    
    currentCertData = certificates[certType];
    
    if (modalTitle) modalTitle.textContent = currentCertData.title;
    if (modalIssuer) modalIssuer.textContent = currentCertData.issuer;
    if (modalDate) modalDate.textContent = currentCertData.date;
    if (modalImage) modalImage.src = currentCertData.imagePath;
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCertModal() {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function downloadCertificate() {
    if (currentCertData) {
        const link = document.createElement('a');
        link.href = currentCertData.imagePath;
        link.download = `${currentCertData.title.replace(/\s+/g, '_')}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert(`✅ Downloading: ${currentCertData.title}`);
    }
}

// Project Functions
function openProjectDetail(projectId) {
    window.location.href = `project-details.html?id=${projectId}`;
}

function showModelDetails() {
    const details = `🚗 Vehicle Price Predictor - Technical Deep Dive 🚗

📊 Dataset Statistics:
• Total Records: 50,000+ vehicle listings
• Features Used: 15+ categorical & numerical features

🤖 Models Implemented:
1. Linear Regression (Baseline)
2. Random Forest Regressor (Optimized)

📈 Performance Metrics:
• Random Forest R² Score: 0.82 (82% variance explained)
• RMSE: $7,413
• MAE: $4,435

🔍 Key Insights:
• Vehicle age is the strongest price predictor (24% importance)
• Mileage accounts for 18% of price variation
• Luxury brands command 15-30% price premium`;
    
    alert(details);
}

function showNotebookPreview(projectTitle) {
    alert(`📓 ${projectTitle}

This project includes comprehensive analysis with:

✅ Complete Jupyter Notebook implementation
✅ Exploratory Data Analysis (EDA)
✅ Data cleaning and preprocessing
✅ Feature engineering
✅ Model training and evaluation
✅ Performance metrics and visualizations

Check out the GitHub repository for the complete notebook!`);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth <= 768) {
                const navLinks = document.getElementById('navLinks');
                if (navLinks) navLinks.classList.remove('active');
            }
        }
    });
});

// Close modals on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeDemo();
        closeResumeModal();
        closeCertModal();
    }
});

// Close modals on click outside
window.addEventListener('click', function (e) {
    const demoModal = document.getElementById('demoModal');
    const resumeModal = document.getElementById('resumeModal');
    const certModal = document.getElementById('certModal');
    
    if (e.target === demoModal) closeDemo();
    if (e.target === resumeModal) closeResumeModal();
    if (e.target === certModal) closeCertModal();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    type();
    
    // Trigger initial reveal
    window.dispatchEvent(new Event('scroll'));
});
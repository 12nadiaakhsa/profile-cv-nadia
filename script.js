document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Nadia Khairunnisa Portfolio telah dimuat!');
    
    // Animasi untuk identity section
    const identityItems = document.querySelectorAll('.identity-item');
    identityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animasi untuk achievement cards
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200 + 600);
    });
    
    // Animasi untuk moto cards
    const motoCards = document.querySelectorAll('.moto-card');
    motoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300 + 1000);
    });
    
    // Efek hover untuk semua kartu
    const allCards = document.querySelectorAll('.panel-section, .identity-item, .moto-card, .hobby-card');
    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        });
    });
    
    // Tambahkan efek glow pada highlight nama
    const highlightName = document.querySelector('.highlight');
    setInterval(() => {
        highlightName.style.textShadow = '0 0 20px rgba(102, 126, 234, 0.7)';
        setTimeout(() => {
            highlightName.style.textShadow = 'none';
        }, 1000);
    }, 3000);
    
    // Efek parallax pada sticker saat scroll
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const stickers = document.querySelectorAll('.math-sticker');
        
        stickers.forEach((sticker, index) => {
            const speed = 0.2 + (index * 0.05);
            const yPos = -(scrolled * speed);
            sticker.style.transform = `translateY(${yPos}px) ${sticker.style.transform.split(' ').slice(1).join(' ')}`;
        });
    });
    
    // Efek hover untuk foto profile
    const photoFrame = document.querySelector('.photo-frame');
    if (photoFrame) {
        photoFrame.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4)';
        });
        
        photoFrame.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = '0 15px 30px rgba(102, 126, 234, 0.3)';
        });
    }
    
    // Animasi untuk timeline items
    const schoolItems = document.querySelectorAll('.school-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    schoolItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(item);
    });
    
    // Tambahkan tanggal dan waktu di footer
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
        const dateStr = now.toLocaleDateString('id-ID', options);
        
        let dateElement = document.querySelector('.current-date');
        if (!dateElement) {
            const copyright = document.querySelector('.copyright p');
            if (copyright) {
                dateElement = document.createElement('div');
                dateElement.className = 'current-date';
                dateElement.style.cssText = `
                    margin-top: 10px;
                    color: #667eea;
                    font-size: 0.8rem;
                `;
                copyright.parentNode.insertBefore(dateElement, copyright.nextSibling);
            }
        }
        
        if (dateElement) {
            dateElement.innerHTML = `<i class="far fa-calendar-alt"></i> Diperbarui: ${dateStr}`;
        }
    }
    
    updateDateTime();
});
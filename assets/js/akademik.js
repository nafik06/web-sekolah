// ===== AKADEMIK PAGES JAVASCRIPT =====

// Curriculum Card Hover Effects
document.addEventListener('DOMContentLoaded', function() {
    const curriculumCards = document.querySelectorAll('.curriculum-card');
    
    curriculumCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.08)';
        });
    });
    
    // Program Card Click Events
    const programCards = document.querySelectorAll('.program-card');
    
    programCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const badge = this.querySelector('.program-badge').textContent;
            
            // You can add modal functionality here
            console.log(`Program: ${title} | Tipe: ${badge}`);
        });
    });
    
    // Schedule Table Row Highlight
    const scheduleRows = document.querySelectorAll('.schedule-table tbody tr');
    
    scheduleRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e8f5e8';
        });
        
        row.addEventListener('mouseleave', function() {
            if (this.rowIndex % 2 === 0) {
                this.style.backgroundColor = '#f8f9fa';
            } else {
                this.style.backgroundColor = '#ffffff';
            }
        });
    });
    
    // Achievement Card Flip Effect
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.achievement-badge');
            if (badge) {
                badge.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.achievement-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
        
        // Click to show details
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-link')) {
                const title = this.querySelector('.achievement-title').textContent;
                const year = this.querySelector('.achievement-year').textContent;
                const student = this.querySelector('.achievement-student').textContent;
                
                // You can implement modal or expand functionality here
                console.log(`Prestasi: ${title}\nTahun: ${year}\nPemenang: ${student}`);
            }
        });
    });
    
    // Download Button Animation
    const downloadBtns = document.querySelectorAll('.download-btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const originalText = this.innerHTML;
            const fileName = this.closest('.download-card').querySelector('h3').textContent;
            
            // Simulate download
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            this.style.backgroundColor = '#27ae60';
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.backgroundColor = '';
                    
                    // Log download
                    console.log(`File downloaded: ${fileName}`);
                }, 1500);
            }, 1000);
        });
    });
    
    // Agenda Item Click Handler
    const agendaItems = document.querySelectorAll('.agenda-item');
    
    agendaItems.forEach(item => {
        const detailBtn = item.querySelector('.agenda-btn');
        
        if (detailBtn) {
            detailBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const title = item.querySelector('h3').textContent;
                const date = item.querySelector('.agenda-date').textContent;
                const description = item.querySelector('p').textContent;
                
                // Show modal or alert with details
                alert(`AGENDA DETAIL\n\nJudul: ${title}\nTanggal: ${date}\n\nDeskripsi: ${description}\n\nInformasi lebih lengkap akan tersedia di halaman detail.`);
            });
        }
        
        // Add to Calendar button
        const addToCalendarBtn = item.querySelector('.agenda-btn[style*="background: var(--secondary-color)"]');
        
        if (addToCalendarBtn) {
            addToCalendarBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                const title = item.querySelector('h3').textContent;
                const date = item.querySelector('.agenda-date').textContent;
                
                // Simulate adding to calendar
                this.innerHTML = '<i class="fas fa-check"></i> Added!';
                this.style.backgroundColor = '#004d00';
                
                setTimeout(() => {
                    this.innerHTML = 'Add to Calendar';
                    this.style.backgroundColor = '';
                    
                    console.log(`Added to calendar: ${title} on ${date}`);
                }, 1500);
            });
        }
    });
    
    // Calendar Day Click Handler
    const calendarDays = document.querySelectorAll('.calendar-day:not(.empty)');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            const dayNumber = this.querySelector('.day-number').textContent;
            const eventItem = this.querySelector('.event-item');
            
            if (eventItem) {
                const eventTitle = eventItem.textContent;
                alert(`Tanggal: ${dayNumber}\nAcara: ${eventTitle}`);
            } else {
                alert(`Tanggal: ${dayNumber}\nTidak ada acara terjadwal.`);
            }
        });
    });
    
    // Filter Functionality for Prestasi Page
    const filterButtons = document.querySelectorAll('.filter-btn');
    const achievementCardsAll = document.querySelectorAll('.achievement-card');
    
    if (filterButtons.length > 0 && achievementCardsAll.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter achievement cards
                achievementCardsAll.forEach(card => {
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (filterValue === 'all' || categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Print Schedule Functionality
    const printScheduleBtn = document.createElement('button');
    printScheduleBtn.innerHTML = '<i class="fas fa-print"></i> Cetak Jadwal';
    printScheduleBtn.className = 'btn-primary';
    printScheduleBtn.style.marginTop = '20px';
    
    const scheduleContainer = document.querySelector('.schedule-container');
    if (scheduleContainer) {
        scheduleContainer.parentNode.insertBefore(printScheduleBtn, scheduleContainer.nextSibling);
        
        printScheduleBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Export Calendar Functionality
    const exportCalendarBtn = document.createElement('button');
    exportCalendarBtn.innerHTML = '<i class="fas fa-calendar-plus"></i> Export to Google Calendar';
    exportCalendarBtn.className = 'btn-secondary';
    exportCalendarBtn.style.marginTop = '20px';
    exportCalendarBtn.style.marginLeft = '10px';
    
    if (scheduleContainer) {
        scheduleContainer.parentNode.insertBefore(exportCalendarBtn, printScheduleBtn.nextSibling);
        
        exportCalendarBtn.addEventListener('click', function() {
            alert('Fitur export ke Google Calendar akan segera tersedia. Untuk saat ini, silakan download file ICS dari tautan di bawah.');
        });
    }
});
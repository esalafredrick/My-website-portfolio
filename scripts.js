document.addEventListener('DOMContentLoaded', () => {
    
    const contactMeBtn = document.getElementById('contact-me-btn');
    if (contactMeBtn) {
        contactMeBtn.addEventListener('click', () => {
            
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            console.log('Contact Me button clicked: Scrolling to contact section.');
        });
    }

   
    const downloadCvBtn = document.getElementById('download-cv-btn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', () => {
            
            const cvFilePath = './assets/Esala_Fredrick_BIO_2025.pdf';
            
            
            const link = document.createElement('a');
            link.href = cvFilePath;
            link.download = 'EsalaFredrick_CV.pdf'; 
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            console.log('Download CV button clicked: Attempting to download CV.');
        });
    }

    
    const submitBtn = document.getElementById('submit-btn');
    if (submitBtn) {
        
        const contactForm = submitBtn.closest('form'); 

        
        submitBtn.setAttribute('type', 'button'); 

        submitBtn.addEventListener('click', (event) => {
           
            event.preventDefault(); 
            
            
            if (contactForm.checkValidity()) {
                
                const formData = {
                    firstName: document.getElementById('first-name').value,
                    lastName: document.getElementById('last-name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone-no').value,
                    message: document.getElementById('msg').value
                };

                console.log('Form Data:', formData);
             
                
                alert('Thank you for your message! (Submission functionality requires a backend service.)');
                contactForm.reset(); 
                
            } else {
                
                contactForm.reportValidity();
            }
        });
    }
});
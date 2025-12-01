document.addEventListener('DOMContentLoaded', function() {
  // Menu Mobile
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
  });
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          navList.classList.remove('active');
      });
  });
  
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
          header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      } else {
          header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
  });
  
  // Form submission
  const contactForm = document.getElementById('form-contato');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Simulação de envio
          const nome = document.getElementById('nome').value;
          alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
          
          // Reset do formulário
          contactForm.reset();
      });
  }
  
  // Atualizar ano no footer
  document.getElementById('year').textContent = new Date().getFullYear();
});


document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Form submission
    const contactForm = document.getElementById('form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const servico = document.getElementById('servico').value;
            
            // Simulação de envio
            const submitBtn = this.querySelector('.btn-submit') || this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Simular processamento
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Obrigado, ${nome}! Sua solicitação para ${servico} foi enviada com sucesso. Entraremos em contato em breve no email ${email}.`);
                
                // Reset do formulário
                contactForm.reset();
                
                // Restaurar botão
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Animações de entrada ao scroll
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const checkFadeElements = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    };
    
    // Verificar elementos na carga inicial
    checkFadeElements();
    
    // Verificar elementos durante o scroll
    window.addEventListener('scroll', checkFadeElements);
});
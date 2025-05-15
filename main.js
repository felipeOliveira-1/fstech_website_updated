// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
});

// Filtros do blog
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove a classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adiciona a classe active ao botão clicado
                this.classList.add('active');
                
                // Aqui seria implementada a lógica de filtragem dos posts
                // Por enquanto, apenas para demonstração visual
            });
        });
    }
});

// Formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio do formulário
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Simulação de delay para envio
            setTimeout(function() {
                submitButton.textContent = 'Mensagem Enviada!';
                
                // Limpa o formulário
                contactForm.reset();
                
                // Restaura o botão após alguns segundos
                setTimeout(function() {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }
});

// Formulário de newsletter
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio do formulário
            const submitButton = newsletterForm.querySelector('button');
            const originalText = submitButton.textContent;
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (!emailInput.value) {
                alert('Por favor, insira seu email.');
                return;
            }
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Simulação de delay para envio
            setTimeout(function() {
                submitButton.textContent = 'Inscrito!';
                
                // Limpa o formulário
                newsletterForm.reset();
                
                // Restaura o botão após alguns segundos
                setTimeout(function() {
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }
});

// Integração com Cal.com
function initCalComIntegration() {
    // Verifica se o elemento de integração do Cal.com existe
    const calEmbed = document.querySelector('.cal-embed');
    
    if (calEmbed) {
        // Aqui seria inserido o código de integração com o Cal.com
        // Este é um exemplo de como seria a integração usando o script do Cal.com
        
        // Exemplo:
        // const calScript = document.createElement('script');
        // calScript.src = 'https://cal.com/embed.js';
        // calScript.async = true;
        // document.head.appendChild(calScript);
        
        // calScript.onload = function() {
        //     Cal('init', {
        //         elementOrSelector: '.cal-embed',
        //         calLink: 'fstech/consulta'
        //     });
        // };
        
        // Por enquanto, apenas exibimos uma mensagem para demonstração
        calEmbed.innerHTML = `
            <div style="height: 500px; display: flex; align-items: center; justify-content: center; background-color: #f5f5f7; border-radius: 18px;">
                <div style="text-align: center;">
                    <h3 style="margin-bottom: 20px; color: #1d1d1f;">Integração com Cal.com</h3>
                    <p style="color: #86868b; max-width: 400px; margin: 0 auto;">
                        Aqui será integrado o calendário do Cal.com para agendamento de consultas.
                    </p>
                </div>
            </div>
        `;
    }
}

// Inicializa a integração com Cal.com quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initCalComIntegration);

// Carrossel Netflix Style
function initCarousel() {
    const carousel = document.querySelector('.carousel-container');
    if (!carousel) return;
    const track = carousel.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const leftBtn = carousel.querySelector('.carousel-arrow.left');
    const rightBtn = carousel.querySelector('.carousel-arrow.right');
    let cardWidth = cards[0]?.offsetWidth || 320;
    let visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    let position = 0;

    function updateCardWidth() {
        cardWidth = cards[0]?.offsetWidth || 320;
        visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
    }

    function updateArrows() {
        leftBtn.disabled = position <= 0;
        rightBtn.disabled = position >= cards.length - visibleCards;
        leftBtn.style.opacity = leftBtn.disabled ? 0.3 : 1;
        rightBtn.style.opacity = rightBtn.disabled ? 0.3 : 1;
    }

    function scrollTo(pos) {
        position = Math.max(0, Math.min(pos, cards.length - visibleCards));
        track.style.transform = `translateX(-${position * (cardWidth + 30)}px)`;
        updateArrows();
    }

    leftBtn.addEventListener('click', () => scrollTo(position - 1));
    rightBtn.addEventListener('click', () => scrollTo(position + 1));

    window.addEventListener('resize', () => {
        updateCardWidth();
        scrollTo(position);
    });

    // Drag/Swipe support
    let startX = 0, scrollStart = 0, isDragging = false;
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        scrollStart = position;
        track.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
        track.style.cursor = '';
    });
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > cardWidth / 2) {
            if (dx < 0 && position < cards.length - visibleCards) scrollTo(position + 1);
            if (dx > 0 && position > 0) scrollTo(position - 1);
            isDragging = false;
        }
    });
    // Touch events
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollStart = position;
    });
    window.addEventListener('touchend', () => {
        isDragging = false;
    });
    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].pageX - startX;
        if (Math.abs(dx) > cardWidth / 2) {
            if (dx < 0 && position < cards.length - visibleCards) scrollTo(position + 1);
            if (dx > 0 && position > 0) scrollTo(position - 1);
            isDragging = false;
        }
    });

    updateCardWidth();
    scrollTo(0);
}
document.addEventListener('DOMContentLoaded', initCarousel);

// Animações de scroll
// Removido efeito fade/entrada para service-card e imagens
// Caso queira manter animação para outros elementos, ajuste o seletor abaixo
// document.addEventListener('DOMContentLoaded', function() {
//     // Função para verificar se um elemento está visível na viewport
//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }
//     
//     // Elementos que receberão animações
//     const animatedElements = document.querySelectorAll('.value-card, .team-member, .client-logo, .case-study, .testimonial-card, .blog-card');
//     
//     // Função para adicionar classe de animação aos elementos visíveis
//     function checkForVisibleElements() {
//         animatedElements.forEach(element => {
//             if (isElementInViewport(element) && !element.classList.contains('animated')) {
//                 element.classList.add('animated');
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     }
//     
//     // Inicializa os elementos com opacidade 0 e transformação
//     animatedElements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(20px)';
//         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//     });
//     
//     // Verifica elementos visíveis no carregamento e no scroll
//     window.addEventListener('load', checkForVisibleElements);
//     window.addEventListener('scroll', checkForVisibleElements);
// });


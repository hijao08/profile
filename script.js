document.addEventListener('DOMContentLoaded', () => {
    // Animação de entrada para os elementos da página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, { threshold: 0.1 });

    // Seleciona todos os elementos de seção para animação
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Também aplica animação aos itens da timeline
    document.querySelectorAll('.timeline-item, .project-card, .certification-item').forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
    });

    // Adiciona o estilo CSS para a animação
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Efeito de destaque nas habilidades */
        .skill-tags span:hover {
            background-color: var(--primary-light);
            color: white;
            transform: translateY(-3px);
            transition: all 0.3s ease;
        }

        /* Efeito de destaque nos itens de contato */
        .contact-item:hover i {
            transform: scale(1.2);
            transition: transform 0.3s ease;
        }

        /* Modo dark/light toggle - preparação para futura implementação */
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #0f172a;
                --text-color: #e2e8f0;
                --text-light: #94a3b8;
                --card-bg: #1e293b;
                --border-color: #334155;
            }
            
            .highlight::after {
                background-color: rgba(59, 130, 246, 0.3);
            }
        }
    `;
    document.head.appendChild(style);
});
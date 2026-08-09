/* ==========================================================================
   PromptCraft Studio Pro - Interactive Application Logic
   ========================================================================== */

// 1. Initial State & Data Store
const PROMPTS_DATABASE = [
    {
        id: 1,
        title: "Senior Full-Stack Code Review & Security Audit",
        category: "coding",
        badge: "badge-code",
        desc: "Audita código en busca de vulnerabilidades OWASP, fugas de memoria y optimiza el rendimiento.",
        llms: ["Claude 3.5 Sonnet", "GPT-4o"],
        isPro: false,
        prompt: `Actúa como un Arquitecto de Software Senior y Especialista en Ciberseguridad. Analiza el siguiente código minuciosamente.

Tu objetivo:
1. Identificar vulnerabilidades de seguridad (SQL Injection, XSS, autenticación, sanitización).
2. Evaluar el rendimiento, complejidad temporal O(n) y uso de memoria.
3. Proponer una versión refactorizada lista para producción con mejores prácticas e inmunidad a fallos.

Proporciona el resultado en Markdown estructurado con bloques de código comentados.`
    },
    {
        id: 2,
        title: "SaaS VSL (Video Sales Letter) High-Converting Script",
        category: "marketing",
        badge: "badge-marketing",
        desc: "Guion paso a paso de 3 minutos para convertir tráfico frío en suscriptores de pago.",
        llms: ["GPT-4o", "Gemini 1.5 Pro"],
        isPro: false,
        prompt: `Actúa como un Copywriter de Respuesta Directa nivel Elite. Escribe el guion para un Video Sales Letter (VSL) de 3 minutos para el siguiente producto:

[INSERTAR PRODUCTO/SERVICIO AQUÍ]

Estructura requerida:
- 0:00-0:15 - Hook disruptivo que ataque el dolor principal.
- 0:15-1:00 - Historia de agitación del problema + la solución descubierta.
- 1:00-2:00 - Demostración de la propuesta de valor única (UVP) y pruebas sociales.
- 2:00-3:00 - Llamado a la acción (CTA) urgente con garantía libre de riesgo.`
    },
    {
        id: 3,
        title: "Viral Twitter/X Thread Generator for Product Launch",
        category: "copywriting",
        badge: "badge-copywriting",
        desc: "Hilo viral de 7 tweets diseñado para generar tráfico orgánico y ventas en 24 horas.",
        llms: ["Claude 3.5", "GPT-4o"],
        isPro: false,
        prompt: `Genera un hilo de Twitter/X de 7 tweets con alta tasa de retención para anunciar el lanzamiento de:

[INSERTAR PRODUCTO]

Estructura:
- Tweet 1: Hook magnético con cifra o afirmación contraintuitiva + emoji estratégico.
- Tweets 2-5: El desglose del problema, por qué las soluciones tradicionales fallan y cómo nuestro producto lo resuelve.
- Tweet 6: Testimonio o métrica de impacto visual.
- Tweet 7: CTA directo con enlace e incentivo de tiempo limitado.`
    },
    {
        id: 4,
        title: "Cold Email B2B Outreach (45%+ Open Rate)",
        category: "business",
        badge: "badge-business",
        desc: "Plantilla de correo en frío ultraligera (menos de 80 palabras) para agencias y fundadores.",
        llms: ["Claude 3.5", "GPT-4o", "Gemini Pro"],
        isPro: false,
        prompt: `Redacta un correo electrónico de prospección B2B hiper-personalizado.

Reglas estrictas:
- Menos de 80 palabras en total.
- Asunto de 3 a 4 palabras en minúsculas (parece escrito por un colega).
- Cero palabrería corporativa ("Espero que estés bien").
- Centrado 100% en el resultado concreto para la otra empresa.
- CTA suave ("¿Te valdría la pena ver una breve demo de 2 minutos esta semana?").`
    },
    {
        id: 5,
        title: "Micro-SaaS Product Requirement Document (PRD)",
        category: "business",
        badge: "badge-business",
        desc: "Genera el documento de especificación funcional listo para entregar a desarrolladores o IA.",
        llms: ["GPT-4o", "Claude 3.5 Sonnet"],
        isPro: true,
        prompt: `Actúa como Lead Product Manager en una Startup B2B. Elabora un Product Requirement Document (PRD) completo para la siguiente idea de software:

Idea: [INSERTAR IDEA DE SOFTWARE]

Incluye:
1. Problem Statement & User Personas.
2. Core Features (MVP Scope vs Phase 2).
3. Data Model Schema & API Endpoints requeridos.
4. User Journey Flow & Criterios de Aceptación.`
    },
    {
        id: 6,
        title: "Next.js 14 API Route & Supabase Auth Boilerplate",
        category: "coding",
        badge: "badge-code",
        desc: "Genera código limpio en TypeScript con validación Zod y gestión de sesiones segura.",
        llms: ["Claude 3.5 Sonnet"],
        isPro: true,
        prompt: `Genera una ruta de API en Next.js 14 (App Router) utilizando TypeScript, Zod para validación de entrada y Supabase Auth para verificación de tokens JWT.

Asegúrate de incluir:
- Manejo estructurado de errores HTTP (400, 401, 500).
- Respuestas en formato JSON estándar { success: boolean, data?: any, error?: string }.
- Código tipado estrictamente sin usar 'any'.`
    },
    {
        id: 7,
        title: "High-Ticket Sales Objection Handling Script",
        category: "marketing",
        badge: "badge-marketing",
        desc: "Respuestas exactas para neutralizar objeciones de precio, falta de tiempo o indecisión.",
        llms: ["GPT-4o"],
        isPro: true,
        prompt: `Actúa como un Consultor de Ventas de Alto Valor. Genera un manual de refutación de objeciones para las siguientes 3 situaciones:

1. "Está muy caro / No tengo presupuesto ahora."
2. "Necesito pensarlo / Hablarlo con mi socio."
3. "Ya uso otra alternativa y me funciona."

Para cada objeción, proporciona:
- La empatía inicial (Reframe).
- La pregunta de descubrimiento estratégica.
- El guion exacto de respuesta.`
    },
    {
        id: 8,
        title: "Automated SEO Keyword Clustering & Content Brief",
        category: "productivity",
        badge: "badge-pro-lock",
        desc: "Agrupa palabras clave por intención de búsqueda y genera la escaleta H2/H3 para posicionar #1.",
        llms: ["Gemini 1.5 Pro", "GPT-4o"],
        isPro: true,
        prompt: `Toma la siguiente lista de palabras clave y organízalas en clusters temáticos por intención de búsqueda (Informacional, Transaccional, Comercial).

Luego, para el cluster principal, crea un Content Brief detallado:
- Título H1 optimizado con CTR magnético.
- Estructura de encabezados H2 y H3.
- Entidades semánticas clave que deben mencionarse.`
    }
];

let state = {
    isPro: localStorage.getItem('promptcraft_pro') === 'true',
    savedPrompts: JSON.parse(localStorage.getItem('promptcraft_saved') || '[]'),
    activeCategory: 'all',
    searchQuery: ''
};

// 2. DOM Elements
const promptsGrid = document.getElementById('prompts-grid');
const savedGrid = document.getElementById('saved-grid');
const savedCount = document.getElementById('saved-count');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryPills = document.querySelectorAll('#category-filters .pill');
const navLinks = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-content');

// Builder Elements
const bRole = document.getElementById('b-role');
const bCustomRoleGroup = document.getElementById('custom-role-group');
const bCustomRole = document.getElementById('b-custom-role');
const bTask = document.getElementById('b-task');
const bContext = document.getElementById('b-context');
const bFormat = document.getElementById('b-format');
const bTone = document.getElementById('b-tone');
const btnGenerateCustom = document.getElementById('btn-generate-custom');
const builtPromptText = document.getElementById('built-prompt-text');
const btnCopyBuilt = document.getElementById('btn-copy-built');
const btnSaveBuilt = document.getElementById('btn-save-built');
const btnExportMarkdown = document.getElementById('btn-export-markdown');

// Modal & Checkout
const checkoutModal = document.getElementById('checkout-modal');
const modalCloseBtn = document.getElementById('modal-close');
const btnGetLicense = document.getElementById('btn-get-license');
const btnDemoPro = document.getElementById('btn-demo-pro');
const buyNowBtns = document.querySelectorAll('.btn-buy-now');
const unlockTriggers = document.querySelectorAll('.btn-unlock-trigger');
const btnApplyPromo = document.getElementById('btn-apply-promo');
const promoCodeInput = document.getElementById('promo-code');
const toastNotif = document.getElementById('toast-notif');
const toastMsg = document.getElementById('toast-msg');

// 3. Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateSavedCount();
    renderLibrary();
    setupEventListeners();
    
    if (state.isPro) {
        enableProModeVisuals();
    }
});

// 4. Render Functions
function renderLibrary() {
    promptsGrid.innerHTML = '';

    const filtered = PROMPTS_DATABASE.filter(p => {
        const matchesCategory = state.activeCategory === 'all' 
            ? true 
            : state.activeCategory === 'pro' 
                ? p.isPro 
                : p.category === state.activeCategory;

        const matchesSearch = p.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                              p.desc.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                              p.prompt.toLowerCase().includes(state.searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        promptsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-ghost"></i>
                <p>No se encontraron prompts para tu búsqueda. Intenta con otros términos o cambia de categoría.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(p => {
        const isSaved = state.savedPrompts.includes(p.id);
        const card = document.createElement('div');
        card.className = 'prompt-card';

        const isLocked = p.isPro && !state.isPro;

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <h3 class="card-title">${p.title}</h3>
                    <span class="card-badge ${isLocked ? 'badge-pro-lock' : p.badge}">
                        ${isLocked ? '<i class="fa-solid fa-lock"></i> PRO' : p.category.toUpperCase()}
                    </span>
                </div>
                <p class="card-desc">${p.desc}</p>
                <div class="card-prompt-box">
                    ${isLocked ? '🔒 Contenido exclusivo para usuarios Licencia PRO. Desbloquea para ver el prompt maestro completo.' : escapeHtml(p.prompt)}
                </div>
            </div>
            <div class="card-footer">
                <div class="card-llms">
                    ${p.llms.map(l => `<span><i class="fa-solid fa-microchip"></i> ${l}</span>`).join(' • ')}
                </div>
                <div class="card-actions">
                    <button class="btn-icon btn-toggle-save" data-id="${p.id}" title="${isSaved ? 'Quitar de guardados' : 'Guardar'}">
                        <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="${isSaved ? 'color: var(--accent-gold);' : ''}"></i>
                    </button>
                    <button class="btn-primary btn-sm btn-copy-prompt" data-id="${p.id}">
                        <i class="fa-solid ${isLocked ? 'fa-lock' : 'fa-copy'}"></i> ${isLocked ? 'Desbloquear' : 'Copiar'}
                    </button>
                </div>
            </div>
        `;
        promptsGrid.appendChild(card);
    });

    attachCardEventListeners();
}

function renderSaved() {
    savedGrid.innerHTML = '';
    const savedItems = PROMPTS_DATABASE.filter(p => state.savedPrompts.includes(p.id));

    if (savedItems.length === 0) {
        savedGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-bookmark"></i>
                <p>Aún no has guardado ningún prompt. Haz clic en el ícono de marcador en cualquier card para agregarlo a tus favoritos.</p>
            </div>
        `;
        return;
    }

    savedItems.forEach(p => {
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <h3 class="card-title">${p.title}</h3>
                    <span class="card-badge ${p.badge}">${p.category.toUpperCase()}</span>
                </div>
                <p class="card-desc">${p.desc}</p>
                <div class="card-prompt-box">${escapeHtml(p.prompt)}</div>
            </div>
            <div class="card-footer">
                <div class="card-llms">
                    ${p.llms.map(l => `<span><i class="fa-solid fa-microchip"></i> ${l}</span>`).join(' • ')}
                </div>
                <div class="card-actions">
                    <button class="btn-icon btn-toggle-save" data-id="${p.id}" title="Quitar">
                        <i class="fa-solid fa-trash" style="color: #f87171;"></i>
                    </button>
                    <button class="btn-primary btn-sm btn-copy-prompt" data-id="${p.id}">
                        <i class="fa-solid fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `;
        savedGrid.appendChild(card);
    });

    attachCardEventListeners();
}

// 5. Event Listeners Setup
function setupEventListeners() {
    // Navigation Tabs
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tab = link.getAttribute('data-tab');
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            tabContents.forEach(c => c.classList.remove('active'));
            const targetTab = document.getElementById(`tab-${tab}`);
            if (targetTab) targetTab.classList.add('active');

            if (tab === 'saved') renderSaved();
        });
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        renderLibrary();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderLibrary();
    });

    // Category Pills
    categoryPills.forEach(pill => {
        pill.addEventListener('click', () => {
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.activeCategory = pill.getAttribute('data-cat');
            renderLibrary();
        });
    });

    // Builder Role Selector
    bRole.addEventListener('change', (e) => {
        bCustomRoleGroup.style.display = e.target.value === 'Custom' ? 'block' : 'none';
    });

    // Generate Custom Prompt
    btnGenerateCustom.addEventListener('click', () => {
        const role = bRole.value === 'Custom' ? (bCustomRole.value || 'Experto') : bRole.value;
        const task = bTask.value || 'Crear una solución optimizada';
        const context = bContext.value || 'Para uso profesional en desarrollo e inteligencia artificial';
        const format = bFormat.value;
        const tone = bTone.value;

        const masterPrompt = `[ROL & PERSONALIDAD]
Actúa como un ${role}. Posees un conocimiento profundo y años de experiencia práctica en este campo.

[OBJETIVO DE LA TAREA]
${task}

[CONTEXTO & AUDIENCIA]
${context}

[RESTRICCIONES & TONO DE VOZ]
- Mantiene un tono ${tone}.
- Evita explicaciones superficiales o genéricas; sé directo y de alto impacto.
- Aplica razonamiento paso a paso (Chain-of-Thought) antes de entregar el resultado final.

[FORMATO DE SALIDA DE REQUERIDO]
Proporciona la respuesta estructurada en: ${format}.`;

        builtPromptText.textContent = masterPrompt;
        showToast('¡Prompt Maestro generado con éxito!');
    });

    // Builder Actions
    btnCopyBuilt.addEventListener('click', () => {
        copyToClipboard(builtPromptText.textContent);
    });

    btnExportMarkdown.addEventListener('click', () => {
        downloadFile('prompt-maestro.md', builtPromptText.textContent);
    });

    // Modal Triggers
    btnGetLicense.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('Licencia PRO', '$29 USD');
    });

    btnDemoPro.addEventListener('click', () => {
        openModal('Licencia PRO', '$29 USD');
    });

    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const price = btn.getAttribute('data-price');
            openModal(price === '49' ? 'Licencia Agency' : 'Licencia PRO', `$${price} USD`);
        });
    });

    unlockTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            openModal('Pack de Automatización PRO', '$29 USD');
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeModal();
    });

    // Promo Code Handler
    btnApplyPromo.addEventListener('click', () => {
        const code = promoCodeInput.value.trim().toUpperCase();
        const validCodes = ['GOAL50USD', 'PROMO2026', 'LAUNCH2026', 'NOVAPRO', 'DEMOPRO'];
        
        if (validCodes.includes(code)) {
            state.isPro = true;
            localStorage.setItem('promptcraft_pro', 'true');
            enableProModeVisuals();
            renderLibrary();
            closeModal();
            showToast('🎉 ¡Licencia PRO Desbloqueada con Éxito!');
        } else if (code === '') {
            showToast('⚠️ Ingresa un código promocional');
        } else {
            showToast('❌ Código no válido. Ingresa GOAL50USD o PROMO2026');
        }
    });

    // Export Saved
    const btnExportSaved = document.getElementById('btn-export-all-saved');
    if (btnExportSaved) {
        btnExportSaved.addEventListener('click', () => {
            const savedItems = PROMPTS_DATABASE.filter(p => state.savedPrompts.includes(p.id));
            downloadFile('mis-prompts-guardados.json', JSON.stringify(savedItems, null, 2));
        });
    }
}

function attachCardEventListeners() {
    document.querySelectorAll('.btn-copy-prompt').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const p = PROMPTS_DATABASE.find(item => item.id === id);
            
            if (p.isPro && !state.isPro) {
                openModal('Licencia PRO', '$29 USD');
                return;
            }

            copyToClipboard(p.prompt);
        });
    });

    document.querySelectorAll('.btn-toggle-save').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const index = state.savedPrompts.indexOf(id);
            
            if (index > -1) {
                state.savedPrompts.splice(index, 1);
                showToast('Eliminado de guardados');
            } else {
                state.savedPrompts.push(id);
                showToast('Guardado en tus marcadores');
            }

            localStorage.setItem('promptcraft_saved', JSON.stringify(state.savedPrompts));
            updateSavedCount();
            renderLibrary();
            if (document.getElementById('tab-saved').classList.contains('active')) {
                renderSaved();
            }
        });
    });
}

// 6. Helpers & Utilities
function updateSavedCount() {
    savedCount.textContent = state.savedPrompts.length;
}

function enableProModeVisuals() {
    const badge = document.querySelector('.badge-pro');
    if (badge) {
        badge.textContent = 'PRO ACTIVADO';
        badge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    }
    btnDemoPro.innerHTML = '<i class="fa-solid fa-circle-check"></i> Modo PRO Activo';
    btnDemoPro.style.borderColor = '#10b981';
    btnDemoPro.style.color = '#10b981';
}

function openModal(planName, price) {
    document.getElementById('modal-plan-name').textContent = planName;
    document.getElementById('modal-plan-price').textContent = price;
    
    const gumroadBtn = document.getElementById('link-gumroad');
    if (gumroadBtn) {
        if (price.includes('49') || planName.toLowerCase().includes('agency')) {
            gumroadBtn.href = 'https://moosoficial.gumroad.com/l/promptcraft-agency';
            gumroadBtn.innerHTML = '<i class="fa-solid fa-building"></i> Comprar Licencia AGENCY con Gumroad ($49 USD)';
        } else {
            gumroadBtn.href = 'https://moosoficial.gumroad.com/l/promptcraft-pro';
            gumroadBtn.innerHTML = '<i class="fa-solid fa-bag-shopping"></i> Comprar Licencia PRO con Gumroad ($29 USD)';
        }
    }
    
    checkoutModal.classList.add('active');
}

function closeModal() {
    checkoutModal.classList.remove('active');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('¡Prompt copiado al portapapeles!');
    }).catch(err => {
        showToast('Error al copiar');
    });
}

function downloadFile(filename, text) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Archivo ${filename} descargado`);
}

function showToast(message) {
    toastMsg.textContent = message;
    toastNotif.classList.add('show');
    setTimeout(() => {
        toastNotif.classList.remove('show');
    }, 3000);
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
}

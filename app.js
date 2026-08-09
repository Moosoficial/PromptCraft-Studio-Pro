/* ==========================================================================
   PromptCraft Studio Pro - Interactive Application Logic & QA Engine
   ========================================================================== */

// 1. Database of Master Prompts (16+ High-Value Engineered Prompts)
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
    },
    {
        id: 9,
        title: "Python Web Scraping & Data Extraction Pipeline",
        category: "coding",
        badge: "badge-code",
        desc: "Script robusto con BeautifulSoup/Playwright, rotación de User-Agents y manejo de rate limits.",
        llms: ["Claude 3.5 Sonnet", "GPT-4o"],
        isPro: false,
        prompt: `Actúa como Senior Data Engineer. Diseña un pipeline de web scraping en Python para extraer datos estructurados.

Requisitos:
1. Usar Playwright o BeautifulSoup con asyncio.
2. Implementar rotación de User-Agent y reintentos exponenciales.
3. Exportar resultados a un archivo CSV limpio y JSON validado.`
    },
    {
        id: 10,
        title: "High-Converting Facebook & Instagram Ad Copy Engine",
        category: "copywriting",
        badge: "badge-copywriting",
        desc: "Crea 3 variaciones de anuncios (PAS, AIDA, BAB) para campañas de retargeting y tráfico frío.",
        llms: ["GPT-4o", "Claude 3.5"],
        isPro: false,
        prompt: `Actúa como Media Buyer y Copywriter Senior. Crea 3 variaciones de texto publicitario para Meta Ads (Facebook/Instagram).

Producto: [INSERTAR PRODUCTO]

Variaciones requeridas:
1. Fórmula PAS (Problema - Agitación - Solución).
2. Fórmula AIDA (Atención - Interés - Deseo - Acción).
3. Fórmula BAB (Before - After - Bridge).
Incluye recomendaciones de ángulos creativos e íconos visuales.`
    },
    {
        id: 11,
        title: "Make / n8n Workflow Automation Architecture",
        category: "productivity",
        badge: "badge-pro-lock",
        desc: "Diseña un flujo de trabajo sin código para conectar Webhooks, CRM, Slack y OpenAI API.",
        llms: ["Claude 3.5", "Gemini Pro"],
        isPro: true,
        prompt: `Actúa como especialista en Automatización de Procesos (Make/n8n/Zapier). Diseña una arquitectura de flujo automatizado para:

[DESCRIBIR PROCESO MANUAL O FLUJO DE TRABAJO]

Proporciona:
- Esquema paso a paso de los módulos y webhooks requeridos.
- Mapeo de campos JSON entre servicios.
- Estrategia de manejo de errores y notificaciones de fallback.`
    },
    {
        id: 12,
        title: "SaaS Pitch Deck & Investor Executive Summary",
        category: "business",
        badge: "badge-business",
        desc: "Estructura narrativa de 10 diapositivas para convencer a inversores de ángel o Venture Capital.",
        llms: ["GPT-4o", "Claude 3.5"],
        isPro: true,
        prompt: `Actúa como Venture Capital Partner & Startup Advisor. Redacta el guion y contenido para un Pitch Deck de 10 diapositivas para:

Startup: [NOMBRE Y CONCEPTO]

Diapositivas:
1. Vision & Hook | 2. Problem | 3. Solution | 4. Market Size (TAM/SAM/SOM) | 5. Product | 6. Business Model | 7. Traction | 8. Go-To-Market | 9. Financial Projection | 10. The Ask.`
    },
    {
        id: 13,
        title: "Docker & Kubernetes Deployment Manifest Generator",
        category: "coding",
        badge: "badge-code",
        desc: "Genera Dockerfile multi-stage y archivos YAML de Kubernetes optimizados para producción.",
        llms: ["Claude 3.5 Sonnet"],
        isPro: true,
        prompt: `Actúa como Principal DevOps & Cloud Engineer. Genera la configuración completa de despliegue para:

Aplicación: [LENGUAJE / FRAMEWORK]

Incluye:
1. Dockerfile Multi-Stage optimizado para tamaño mínimo de imagen.
2. deployment.yaml y service.yaml con Resource Limits e Ingress.
3. Health check endpoints y variables de entorno seguras.`
    },
    {
        id: 14,
        title: "LinkedIn Thought Leadership & Lead Magnet Post",
        category: "copywriting",
        badge: "badge-copywriting",
        desc: "Post de LinkedIn formateado con espacio en blanco, gancho emocional y entrega de recurso gratuito.",
        llms: ["GPT-4o"],
        isPro: false,
        prompt: `Escribe un post de LinkedIn de autoridad enfocado en captar leads calificados.

Tema: [RECURSO GRATUITO O APRENDIZAJE]

Reglas:
- Gancho de 1 línea impactante.
- Frases cortas y párrafos de 1 o 2 líneas para lectura ágil en móvil.
- Call to action claro: "Comenta [PALABRA CLAVE] y te lo envío por mensaje privado".`
    },
    {
        id: 15,
        title: "Customer Support Automation Bot Persona & FAQ Solver",
        category: "marketing",
        badge: "badge-marketing",
        desc: "System Prompt empático para bots de atención al cliente con instrucciones estricta anti-alucinaciones.",
        llms: ["GPT-4o", "Gemini 1.5"],
        isPro: true,
        prompt: `Actúa como el Asistente Virtual de Atención al Cliente de [EMPRESA].

Instrucciones de comportamiento:
1. Tono empático, resolutivo y educado.
2. Basar las respuestas EXCLUSIVAMENTE en la siguiente base de conocimientos: [INSERTAR FAQ].
3. Si no conoces la respuesta, responde: "Lamento no tener esa información directa. Te conectaré con un agente humano inmediatamente."`
    },
    {
        id: 16,
        title: "Executive Weekly Summary & KPI Dashboard Prompt",
        category: "productivity",
        badge: "badge-pro-lock",
        desc: "Sintetiza métricas brutas y reportes en un informe ejecutivo listo para la junta directiva.",
        llms: ["Claude 3.5", "GPT-4o"],
        isPro: true,
        prompt: `Actúa como Chief of Staff. Transforma las siguientes métricas desordenadas en un reporte ejecutivo semanal:

Métricas: [INSERTAR DATOS DE LA SEMANA]

Secciones del reporte:
- Executive Summary (3 viñetas clave).
- Wins & Logros Principales.
- Bottlenecks & Riesgos Detectados.
- Plan de Acción Prioritario para la Próxima Semana.`
    }
];

// 2. Pro Template Bundles / Modules Data
const TEMPLATE_MODULES = {
    1: {
        title: "SaaS Landing Page Conversion System",
        badge: "Módulo 1",
        desc: "Secuencia completa de prompts para diseñar el copy de 5 secciones principales que convierten visitantes en clientes de pago.",
        prompts: [
            {
                name: "Section 1: Hero Banner & UVP Hook",
                text: "Escribe el H1, H2 y CTA para el Hero Banner de un SaaS de [CATEGORÍA]. Debe resolver el dolor principal en 5 segundos."
            },
            {
                name: "Section 2: Social Proof & Client Logos Counter",
                text: "Redacta frases de prueba social y subtítulos de autoridad para mostrar testimonios de clientes B2B."
            },
            {
                name: "Section 3: Feature Matrix & Benefit Breakdown",
                text: "Diseña la sección de 3 características principales enfocadas en BENEFICIOS (no solo specs técnicas)."
            },
            {
                name: "Section 4: Pricing Table Copy & Plan Distinction",
                text: "Escribe los descripciones de planes (Starter vs Pro vs Enterprise) destacando el valor percibido del plan Pro."
            },
            {
                name: "Section 5: Guarantee & Risk Reversal CTA",
                text: "Crea una sección de cierre con garantía de devolución de 30 días y llamado a la acción final urgente."
            }
        ]
    },
    2: {
        title: "Code Refactor & Bug Hunter Pro",
        badge: "Módulo 2",
        desc: "Auditoría de código, optimización de algoritmos y conversión entre frameworks (React, Vue, Node, Python) con cero alucinaciones.",
        prompts: [
            {
                name: "Auditoría OWASP Top 10",
                text: "Analiza el siguiente código y detecta posibles fallas de seguridad OWASP Top 10 con sugerencias de parches."
            },
            {
                name: "Optimización de Complejidad O(n)",
                text: "Refactoriza el siguiente algoritmo para reducir su complejidad de tiempo O(n^2) a O(n log n) o O(n)."
            },
            {
                name: "Migración de Componente React a Vue 3",
                text: "Convierte el siguiente componente React (TypeScript + Tailwind) a Vue 3 Script Setup manteniendo la misma lógica."
            },
            {
                name: "Generador de Tests Unitarios (Jest/Vitest)",
                text: "Genera una suite completa de pruebas unitarias cubriendo edge cases y casos de falla para la función adjunta."
            }
        ]
    },
    3: {
        title: "Cold Email & Outreach Monetization Engine",
        badge: "Módulo 3",
        desc: "Cadena de 4 correos de venta en frío con tasa de apertura del +45% y respuesta garantizada para vender servicios de $500 - $2,000 USD.",
        prompts: [
            {
                name: "Email 1: The Soft Pattern Disrupt Hook",
                text: "Redacta el primer correo de prospección en frío (máx 75 palabras) con propuesta de valor hiper-específica."
            },
            {
                name: "Email 2: Case Study & Social Proof Follow-up",
                text: "Escribe el seguimiento 3 días después citando un caso de estudio con resultados cuantitativos."
            },
            {
                name: "Email 3: The Quick Question Reframe",
                text: "Redacta un correo de 2 líneas preguntando si el proyecto sigue siendo una prioridad este trimestre."
            },
            {
                name: "Email 4: Breakup Email with Unexpected Value",
                text: "Crea el último correo de la secuencia retirando la oferta elegantemente con un recurso de regalo."
            }
        ]
    },
    4: {
        title: "Social Media Viral Thread & Post Engine",
        badge: "Módulo 4",
        desc: "Crea hilos virales de Twitter/X y posts de LinkedIn que atraen clientes calificados sin invertir en publicidad.",
        prompts: [
            {
                name: "X/Twitter Storytelling Thread",
                text: "Escribe un hilo de 8 tweets contando la historia de cómo se resolvió [PROBLEMA] usando una estrategia contraintuitiva."
            },
            {
                name: "LinkedIn Carousel Slide Script",
                text: "Crea el contenido textual de 6 diapositivas para un carrusel de LinkedIn sobre [TEMA TÉCNICO/NEGOCIOS]."
            },
            {
                name: "Contrarian Industry Hot Take",
                text: "Genera una publicación opinativa sobre una creencia popular en la industria que es errónea y por qué."
            }
        ]
    }
};

// 3. Application State Store
let state = {
    isPro: localStorage.getItem('promptcraft_pro') === 'true',
    savedPrompts: JSON.parse(localStorage.getItem('promptcraft_saved') || '[]'),
    customSavedPrompts: JSON.parse(localStorage.getItem('promptcraft_custom_saved') || '[]'),
    activeCategory: 'all',
    searchQuery: ''
};

// 4. DOM Elements Lookup
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
const tokenEstimateBox = document.getElementById('token-estimate-box');

// Modals & Triggers
const checkoutModal = document.getElementById('checkout-modal');
const modalCloseBtn = document.getElementById('modal-close');
const templateModal = document.getElementById('template-modal');
const templateModalCloseBtn = document.getElementById('template-modal-close');
const templateModalTitle = document.getElementById('template-modal-title');
const templateModalDesc = document.getElementById('template-modal-desc');
const templateModalBody = document.getElementById('template-modal-body');

const btnGetLicense = document.getElementById('btn-get-license');
const btnDemoPro = document.getElementById('btn-demo-pro');
const buyNowBtns = document.querySelectorAll('.btn-buy-now');
const unlockTriggers = document.querySelectorAll('.btn-unlock-trigger');
const btnApplyPromo = document.getElementById('btn-apply-promo');
const promoCodeInput = document.getElementById('promo-code');
const toastNotif = document.getElementById('toast-notif');
const toastMsg = document.getElementById('toast-msg');

// 5. Application Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateSavedCount();
    updatePillCounts();
    renderLibrary();
    setupEventListeners();
    updateBuilderMetrics();

    if (state.isPro) {
        enableProModeVisuals();
    }
});

// 6. Metrics & Category Counts Calculators
function updatePillCounts() {
    const counts = {
        all: PROMPTS_DATABASE.length,
        coding: PROMPTS_DATABASE.filter(p => p.category === 'coding').length,
        marketing: PROMPTS_DATABASE.filter(p => p.category === 'marketing').length,
        copywriting: PROMPTS_DATABASE.filter(p => p.category === 'copywriting').length,
        business: PROMPTS_DATABASE.filter(p => p.category === 'business').length,
        productivity: PROMPTS_DATABASE.filter(p => p.category === 'productivity').length,
        pro: PROMPTS_DATABASE.filter(p => p.isPro).length
    };

    for (const key in counts) {
        const el = document.getElementById(`count-${key}`);
        if (el) el.textContent = `(${counts[key]})`;
    }
}

function updateBuilderMetrics() {
    const text = builtPromptText ? builtPromptText.textContent : '';
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const estTokens = Math.ceil(words * 1.35);

    let score = 50;
    if (bRole && bRole.value) score += 10;
    if (bTask && bTask.value.length > 10) score += 15;
    if (bContext && bContext.value.length > 10) score += 15;
    if (bFormat && bFormat.value) score += 5;
    if (bTone && bTone.value) score += 5;
    score = Math.min(100, score);

    let qualityLabel = "Básica (60/100)";
    if (score >= 90) qualityLabel = "Excelente (98/100)";
    else if (score >= 75) qualityLabel = "Muy Buena (85/100)";
    else if (score >= 60) qualityLabel = "Aceptable (70/100)";

    if (tokenEstimateBox) {
        tokenEstimateBox.innerHTML = `<i class="fa-solid fa-coins"></i> Tokens: <strong>~${estTokens}</strong> | Calidad: <strong>${qualityLabel}</strong>`;
    }
}

// 7. Core Render Functions
function renderLibrary() {
    promptsGrid.innerHTML = '';

    const filtered = PROMPTS_DATABASE.filter(p => {
        const matchesCategory = state.activeCategory === 'all' 
            ? true 
            : state.activeCategory === 'pro' 
                ? p.isPro 
                : p.category === state.activeCategory;

        const query = state.searchQuery.toLowerCase();
        const matchesSearch = p.title.toLowerCase().includes(query) ||
                              p.desc.toLowerCase().includes(query) ||
                              p.prompt.toLowerCase().includes(query);

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
                    <button class="btn-icon btn-toggle-save" data-id="${p.id}" title="${isSaved ? 'Quitar de guardados' : 'Guardar en favoritos'}">
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
    const customItems = state.customSavedPrompts || [];

    if (savedItems.length === 0 && customItems.length === 0) {
        savedGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-regular fa-bookmark"></i>
                <p>Aún no has guardado ningún prompt. Haz clic en el ícono de marcador en cualquier card o guarda un prompt generado en el Creador Dinámico.</p>
            </div>
        `;
        return;
    }

    // 1. Render Bookmarked Database Prompts
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
                    <button class="btn-icon btn-toggle-save" data-id="${p.id}" title="Quitar de marcadores">
                        <i class="fa-solid fa-trash" style="color: #dc2626;"></i>
                    </button>
                    <button class="btn-primary btn-sm btn-copy-prompt" data-id="${p.id}">
                        <i class="fa-solid fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `;
        savedGrid.appendChild(card);
    });

    // 2. Render Custom Built Saved Prompts
    customItems.forEach((c, index) => {
        const card = document.createElement('div');
        card.className = 'prompt-card custom-saved-card';
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <h3 class="card-title">${escapeHtml(c.title || 'Prompt Maestro Personalizado')}</h3>
                    <span class="card-badge badge-custom"><i class="fa-solid fa-wand-magic-sparkles"></i> PERSONALIZADO</span>
                </div>
                <p class="card-desc">Creado en el Generador Dinámico de Prompts (${c.date || 'Reciente'}).</p>
                <div class="card-prompt-box">${escapeHtml(c.prompt)}</div>
            </div>
            <div class="card-footer">
                <div class="card-llms">
                    <span><i class="fa-solid fa-sliders"></i> Generador Dinámico</span>
                </div>
                <div class="card-actions">
                    <button class="btn-icon btn-remove-custom" data-index="${index}" title="Eliminar prompt personalizado">
                        <i class="fa-solid fa-trash" style="color: #dc2626;"></i>
                    </button>
                    <button class="btn-primary btn-sm btn-copy-custom" data-index="${index}">
                        <i class="fa-solid fa-copy"></i> Copiar
                    </button>
                </div>
            </div>
        `;
        savedGrid.appendChild(card);
    });

    attachCardEventListeners();
}

// 8. Event Listeners Setup
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

    // Builder Form Controls
    bRole.addEventListener('change', (e) => {
        bCustomRoleGroup.style.display = e.target.value === 'Custom' ? 'block' : 'none';
        updateBuilderMetrics();
    });

    [bCustomRole, bTask, bContext, bFormat, bTone].forEach(el => {
        if (el) {
            el.addEventListener('input', updateBuilderMetrics);
            el.addEventListener('change', updateBuilderMetrics);
        }
    });

    // Generate Custom Prompt
    btnGenerateCustom.addEventListener('click', () => {
        const role = bRole.value === 'Custom' ? (bCustomRole.value.trim() || 'Experto') : bRole.value;
        const task = bTask.value.trim() || 'Crear una solución optimizada de alto impacto';
        const context = bContext.value.trim() || 'Para uso profesional en desarrollo e inteligencia artificial';
        const format = bFormat.value;
        const tone = bTone.value;

        const masterPrompt = `[ROL & PERSONALIDAD]
Actúa como un ${role}. Posees un conocimiento profundo y años de experiencia práctica en este campo.

[OBJETIVO DE LA TAREA]
${task}

[CONTEXTO & AUDIENCIA]
${context}

[RESTRICCIONES & TONO DE VOZ]
- Mantén un tono ${tone}.
- Evita explicaciones superficiales o genéricas; sé directo y de alto impacto.
- Aplica razonamiento paso a paso (Chain-of-Thought) antes de entregar el resultado final.

[FORMATO DE SALIDA REQUERIDO]
Proporciona la respuesta estructurada en: ${format}.`;

        builtPromptText.textContent = masterPrompt;
        updateBuilderMetrics();
        showToast('¡Prompt Maestro generado con éxito!');
    });

    // Builder Actions
    btnCopyBuilt.addEventListener('click', () => {
        copyToClipboard(builtPromptText.textContent, btnCopyBuilt);
    });

    // Fix: Wire up btnSaveBuilt properly
    btnSaveBuilt.addEventListener('click', () => {
        const promptContent = builtPromptText.textContent.trim();
        if (!promptContent || promptContent.startsWith('Rellena los campos')) {
            showToast('⚠️ Primero genera un prompt maestro antes de guardar.');
            return;
        }

        const role = bRole.value === 'Custom' ? (bCustomRole.value || 'Personalizado') : bRole.value;
        const newCustomPrompt = {
            title: `Prompt: ${role}`,
            prompt: promptContent,
            date: new Date().toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })
        };

        state.customSavedPrompts.push(newCustomPrompt);
        localStorage.setItem('promptcraft_custom_saved', JSON.stringify(state.customSavedPrompts));
        updateSavedCount();
        showToast('📌 ¡Prompt personalizado guardado en tus marcadores!');
        
        if (document.getElementById('tab-saved').classList.contains('active')) {
            renderSaved();
        }
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
        if (state.isPro) {
            showToast('✓ Ya tienes activada la Licencia PRO');
        } else {
            openModal('Licencia PRO', '$29 USD');
        }
    });

    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const price = btn.getAttribute('data-price');
            openModal(price === '49' ? 'Licencia Agency' : 'Licencia PRO', `$${price} USD`);
        });
    });

    // Template Module Cards Click Handler
    unlockTriggers.forEach(btn => {
        btn.addEventListener('click', () => {
            const moduleId = btn.getAttribute('data-module');
            if (!state.isPro) {
                openModal('Pack de Automatización PRO', '$29 USD');
            } else {
                openTemplateModal(moduleId);
            }
        });
    });

    modalCloseBtn.addEventListener('click', closeModal);
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeModal();
    });

    if (templateModalCloseBtn) templateModalCloseBtn.addEventListener('click', closeTemplateModal);
    if (templateModal) {
        templateModal.addEventListener('click', (e) => {
            if (e.target === templateModal) closeTemplateModal();
        });
    }

    // Keyboard Escape Listener for Modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeTemplateModal();
        }
    });

    // Promo Code Handler
    btnApplyPromo.addEventListener('click', applyPromoCode);
    promoCodeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            applyPromoCode();
        }
    });

    // Export Saved
    const btnExportSaved = document.getElementById('btn-export-all-saved');
    if (btnExportSaved) {
        btnExportSaved.addEventListener('click', () => {
            const savedItems = PROMPTS_DATABASE.filter(p => state.savedPrompts.includes(p.id));
            const customItems = state.customSavedPrompts || [];
            
            if (savedItems.length === 0 && customItems.length === 0) {
                showToast('⚠️ No tienes prompts guardados para exportar.');
                return;
            }

            const exportPayload = {
                exportDate: new Date().toISOString(),
                savedDatabasePrompts: savedItems,
                customPrompts: customItems
            };

            downloadFile('mis-prompts-guardados.json', JSON.stringify(exportPayload, null, 2));
        });
    }
}

function attachCardEventListeners() {
    // Copy buttons in Database Prompt Cards
    document.querySelectorAll('.btn-copy-prompt').forEach(btn => {
        btn.onclick = () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const p = PROMPTS_DATABASE.find(item => item.id === id);
            if (!p) return;
            
            if (p.isPro && !state.isPro) {
                openModal('Licencia PRO', '$29 USD');
                return;
            }

            copyToClipboard(p.prompt, btn);
        };
    });

    // Toggle Save buttons in Database Prompt Cards
    document.querySelectorAll('.btn-toggle-save').forEach(btn => {
        btn.onclick = () => {
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
        };
    });

    // Copy custom saved prompts
    document.querySelectorAll('.btn-copy-custom').forEach(btn => {
        btn.onclick = () => {
            const index = parseInt(btn.getAttribute('data-index'));
            const item = state.customSavedPrompts[index];
            if (item && item.prompt) {
                copyToClipboard(item.prompt, btn);
            }
        };
    });

    // Remove custom saved prompts
    document.querySelectorAll('.btn-remove-custom').forEach(btn => {
        btn.onclick = () => {
            const index = parseInt(btn.getAttribute('data-index'));
            state.customSavedPrompts.splice(index, 1);
            localStorage.setItem('promptcraft_custom_saved', JSON.stringify(state.customSavedPrompts));
            updateSavedCount();
            showToast('Prompt personalizado eliminado');
            renderSaved();
        };
    });
}

function applyPromoCode() {
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
}

// 9. Helpers & Visual Updates
function updateSavedCount() {
    const dbCount = state.savedPrompts.length;
    const customCount = (state.customSavedPrompts || []).length;
    savedCount.textContent = dbCount + customCount;
}

function enableProModeVisuals() {
    const badge = document.querySelector('.badge-pro');
    if (badge) {
        badge.textContent = 'PRO ACTIVADO';
        badge.style.background = '#000000';
        badge.style.color = '#ffffff';
    }
    if (btnDemoPro) {
        btnDemoPro.innerHTML = '<i class="fa-solid fa-circle-check"></i> Modo PRO Activo';
        btnDemoPro.style.borderColor = '#047857';
        btnDemoPro.style.color = '#047857';
    }

    // Update Pro Template Cards UI
    document.querySelectorAll('.template-card').forEach(card => {
        const proTag = card.querySelector('.pro-tag');
        if (proTag) {
            proTag.className = 'pro-tag unlocked';
            proTag.innerHTML = '<i class="fa-solid fa-circle-check"></i> DESBLOQUEADO';
        }
        const btn = card.querySelector('.btn-unlock-trigger');
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-folder-open"></i> Ver Prompts';
        }
    });

    // Update Pricing Cards Status
    const starterBtn = document.getElementById('btn-starter-status');
    if (starterBtn) {
        starterBtn.textContent = 'Plan Gratuito';
        starterBtn.disabled = true;
    }

    const proBtn = document.getElementById('btn-plan-pro');
    if (proBtn) {
        proBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Licencia PRO Activa';
        proBtn.style.background = '#000000';
        proBtn.style.color = '#ffffff';
        proBtn.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
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

function openTemplateModal(moduleId) {
    const mod = TEMPLATE_MODULES[moduleId];
    if (!mod) return;

    templateModalTitle.textContent = `${mod.badge} — ${mod.title}`;
    templateModalDesc.textContent = mod.desc;

    let html = '<div class="template-prompts-list">';
    mod.prompts.forEach((p, idx) => {
        html += `
            <div class="template-prompt-item">
                <div class="t-prompt-header">
                    <h4>${idx + 1}. ${escapeHtml(p.name)}</h4>
                    <button class="btn-primary btn-sm btn-copy-tmpl" data-text="${escapeHtml(p.text)}">
                        <i class="fa-solid fa-copy"></i> Copiar
                    </button>
                </div>
                <div class="t-prompt-body">${escapeHtml(p.text)}</div>
            </div>
        `;
    });
    html += '</div>';

    templateModalBody.innerHTML = html;

    // Attach copy handlers inside template modal
    templateModalBody.querySelectorAll('.btn-copy-tmpl').forEach(b => {
        b.onclick = () => {
            const text = b.getAttribute('data-text');
            copyToClipboard(text, b);
        };
    });

    templateModal.classList.add('active');
}

function closeTemplateModal() {
    if (templateModal) templateModal.classList.remove('active');
}

function copyToClipboard(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('¡Prompt copiado al portapapeles!');

        if (btnElement) {
            const origHTML = btnElement.innerHTML;
            btnElement.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
            btnElement.style.background = '#10b981';
            btnElement.style.color = '#fff';
            setTimeout(() => {
                btnElement.innerHTML = origHTML;
                btnElement.style.background = '';
                btnElement.style.color = '';
            }, 2000);
        }
    }).catch(err => {
        showToast('Error al copiar el texto');
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
    if (!text) return '';
    return text.replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;")
               .replace(/"/g, "&quot;")
               .replace(/'/g, "&#039;");
}

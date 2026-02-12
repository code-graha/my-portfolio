// Tailwind config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'dark-navy': '#0a0e1a',
                'dark-slate': '#1a1f35',
                'neon-cyan': '#06b6d4',
                'neon-violet': '#8b5cf6',
                'neon-blue': '#3b82f6'
            }
        }
    }
}

// Default Portfolio Data (fallback if JSON fails to load)
const defaultPortfolioData = {
  "siteTitle": "Siddharth Mahajan | Solution Architect & Cloud Engineer",
  "personal": {
    "name": "Siddharth Mahajan",
    "title": "Solution Architect & Cloud Engineer",
    "subtitle": "Kubernetes | Scripting | Full-Stack | Software Architecture",
    "location": "India",
    "email": "siddharth.mhjn99@gmail.com",
    "availableForWork": true,
    "availabilityText": "Available for work",
    "availability": "Available for Technical Consulting",
    "yearsExperience": "3+",
    "projectsCompleted": "5+",
    "resume": "assets/docs/resume.pdf",
    "googleScriptURL": "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE",
    "heroSkills": ["Kubernetes", "Spring Boot", "Scripting", "Architecture"],
    "socialLinks": [
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/siddharth-mhjn",
        "icon": "fa-brands fa-linkedin"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/siddharth-mhjn",
        "icon": "fa-brands fa-github"
      },
      {
        "name": "Email",
        "url": "mailto:siddharth.mhjn99@gmail.com",
        "icon": "fa-solid fa-envelope"
      }
    ]
  },
  "about": {
    "description": [
      "Cloud Engineer, Full-Stack Developer, and Software Architect with expertise in building scalable, secure cloud-native systems.",
      "Skilled in Kubernetes, Istio, Spring Boot, Spring Cloud, Keycloak, and observability tools like OpenSearch, Prometheus, and Grafana.",
      "Experienced in designing API Gateways, automating infrastructure, and building real-time data pipelines across enterprise environments.",
      "Passionate about mentoring teams, evaluating emerging technologies, and aligning architecture with business goals."
    ],
    "currentRole": {
      "title": "Software Engineer I",
      "company": "Astreya",
      "period": "June 2025 – Present"
    },
    "specialization": "Cloud Engineering, Full-Stack Development & Software Architecture",
    "focusAreas": "Kubernetes, API Gateway, Observability, Multi-Tenant Auth, Data Pipelines"
  },
  "skills": {
    "Cloud & DevOps": {
      "icon": "fa-solid fa-cloud",
      "color": "neon-cyan",
      "technologies": ["Docker/Podman", "Kubernetes/Rancher", "Istio", "Azure/AKS", "AWS", "VMware", "Nginx", "CI/CD"]
    },
    "Programming": {
      "icon": "fa-solid fa-code",
      "color": "neon-violet",
      "technologies": ["Java", "C/C++", "Python", "Bash/Shell/PowerShell"]
    },
    "Frameworks": {
      "icon": "fa-solid fa-layer-group",
      "color": "neon-blue",
      "technologies": ["Spring Boot/Cloud/Security", "Vue.js/Quasar", "HTML/CSS"]
    },
    "Data & Security": {
      "icon": "fa-solid fa-database",
      "color": "cyan-500",
      "technologies": ["MySQL/PostgreSQL", "OpenSearch", "Prometheus/Grafana", "Kafka", "APISIX", "Keycloak"]
    }
  },
  "skillStats": [
    { "value": "10+", "label": "Cloud & DevOps Tools", "color": "neon-cyan" },
    { "value": "5+", "label": "Programming Languages", "color": "neon-violet" },
    { "value": "15+", "label": "Frameworks & Libraries", "color": "neon-blue" }
  ],
  "experience": [
    {
      "title": "Software Engineer I",
      "company": "Astreya",
      "period": "June 2025 – Present",
      "isCurrent": true,
      "color": "neon-cyan",
      "logo": "https://cdn.brandfetch.io/id1iVW1Ptm/w/820/h/218/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
      "responsibilities": [
        "Developed a reactive API Gateway with Spring Cloud Gateway, enabling dynamic routing and zero-downtime configuration updates.",
        "Implemented multi-tenant authentication with Keycloak and OAuth2 across distributed Kubernetes environments.",
        "Set up centralized logging with OpenSearch and unified API documentation using Swagger/OpenAPI.",
        "Led R&D on authentication strategies and contributed to architecture and IP planning decisions."
      ],
      "technologies": ["Spring Cloud Gateway", "Keycloak", "Kubernetes", "OpenSearch", "OAuth2"]
    },
    {
      "title": "Member Technical Staff",
      "company": "NEC India",
      "period": "April 2025 – June 2025",
      "isCurrent": false,
      "color": "neon-violet",
      "logo": "https://www.logo.wine/a/logo/NEC/NEC-Logo.wine.svg",
      "responsibilities": [
        "Built 4+ real-time data pipelines for smart city projects, enabling unified data flow and faster decision-making.",
        "Deployed EFK logging with Istio on Kubernetes, cutting root cause analysis time by 50% and reducing service interruptions by 30%.",
        "Enhanced platform architecture to onboard 5+ vendors, improving scalability and ecosystem interoperability."
      ],
      "technologies": ["Kubernetes", "EFK", "Istio", "NiFi"]
    },
    {
      "title": "Software Engineer",
      "company": "LTIMindtree",
      "period": "July 2022 – March 2025",
      "isCurrent": false,
      "color": "neon-blue",
      "logo": "https://brandlogos.net/wp-content/uploads/2025/03/mindtree-logo_brandlogos.net_u5gci.png",
      "responsibilities": [
        "Managed 5+ enterprise Kubernetes clusters with Istio service mesh, achieving 80% traceability for an AIOps platform.",
        "Built a custom API Gateway and operated a telemetry platform processing terabytes of monitoring data.",
        "Evaluated 5+ cloud-native tools across service mesh, orchestration, and API management to drive architecture decisions.",
        "Automated infrastructure with 10+ Bash/Python scripts, improving provisioning efficiency by 20%, and mentored team members."
      ],
      "technologies": ["Kubernetes", "Service Mesh", "API Gateway", "Spring Cloud"]
    }
  ],
  "projects": [
    {
      "id": "project1",
      "title": "Protofolio_",
      "description": "A collection of 6 professionally designed portfolio templates with a retro terminal-style landing page.",
      "image": "https://protofolio.siddharthmhjn.com/resources/protofolio-logo.png",
      "color": "neon-blue",
      "gradient": "from-neon-blue to-blue-600",
      "technologies": ["HTML", "Tailwind CSS", "JavaScript", "JSON"],
      "problem": "Finding a good-looking, ready-to-use portfolio template is time-consuming and most options need heavy customization or coding knowledge.",
      "solution": "Created Protofolio, a curated set of 6 portfolio templates that users can browse via a retro terminal landing page, pick a style, and customize content through a simple JSON file.",
      "architecture": [
        "Retro terminal-style landing page with live iframe previews",
        "6 templates: Clean Minimalist, Bento, Retro Gaming, Illustrative UI, Modern SaaS, Digital Nebula",
        "JSON-based content management for all templates",
        "Google Apps Script integration for contact forms",
        "Custom themed 404 and 405 error pages"
      ],
      "impact": [
        "6 unique, fully responsive portfolio templates",
        "Edit one JSON file to update all content - no coding needed",
        "SEO optimized with meta tags and semantic HTML",
        "Works on any static hosting - GitHub Pages, Netlify, Vercel"
      ],
      "link": "https://protofolio.siddharthmhjn.com",
      "popupDisabled": false
    },
    {
      "id": "project2",
      "title": "API Gateway Solution",
      "description": "Scalable API gateway with rate limiting, authentication, and analytics dashboard.",
      "image": "",
      "color": "neon-violet",
      "gradient": "from-neon-violet to-purple-600",
      "technologies": ["APISIX", "Keycloak", "Docker"],
      "problem": "Microservices architecture lacked centralized API management, leading to security vulnerabilities, inconsistent authentication, and difficulty in monitoring API usage.",
      "solution": "Built a custom API Gateway using APISIX with Keycloak integration for authentication, comprehensive rate limiting, and real-time analytics dashboard.",
      "architecture": [
        "APISIX as API Gateway with custom plugins",
        "Keycloak for centralized authentication and authorization",
        "Redis for rate limiting and caching",
        "Real-time analytics with custom dashboard",
        "Automated API documentation generation"
      ],
      "impact": [
        "Reduced API response time by 35%",
        "Prevented 10,000+ unauthorized access attempts",
        "Improved API discoverability by 50%",
        "Decreased security incidents by 70%"
      ],
      "link": "",
      "popupDisabled": true
    }
  ],
  "certifications": [
    {
      "title": "ITOPS Automation Engineer",
      "level": "Foundation Level",
      "issuer": "LTIMindtree",
      "icon": "fa-solid fa-certificate",
      "color": "neon-cyan"
    },
    {
      "title": "Cloud & Infrastructure Service",
      "level": "Professional Certification",
      "issuer": "LTI",
      "icon": "fa-solid fa-cloud",
      "color": "neon-violet"
    },
    {
      "title": "Web Development",
      "level": "Full-Stack Development",
      "issuer": "Internshala",
      "icon": "fa-solid fa-code",
      "color": "neon-blue"
    }
  ],
  "awards": [
    {
      "title": "Technical Subject Matter Expert",
      "date": "June 2024",
      "description": "Appreciated as a Technical Subject Matter Expert for contributions to the Automation Academy training program from April 2023 to March 2024.",
      "authorization": "LTIMindtree",
      "icon": "fa-solid fa-trophy",
      "color": "neon-cyan"
    },
    {
      "title": "Spotlight Award",
      "date": "June 2023",
      "description": "Honored for pioneering advanced technologies and implementing a robust Service Mesh architecture, leading to a 30% improvement in system scalability.",
      "authorization": "LTIMindtree",
      "icon": "fa-solid fa-award",
      "color": "neon-violet"
    },
    {
      "title": "Spotlight Award",
      "date": "March 2023",
      "description": "Recognized for rapidly mastering Platform (JORITZ) Core and Istio; delivered a live Service Mesh demo that influenced architectural direction, reducing decision-making time by 30%.",
      "authorization": "LTIMindtree",
      "icon": "fa-solid fa-star",
      "color": "neon-blue"
    }
  ],
  "testimonials": [
    {
      "name": "Karthik Battaram",
      "role": "Senior Data Engineer",
      "company": "LTIMindtree",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQFr1PpRelbMfw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721402399725?e=1772064000&v=beta&t=hYc7p2csvG1gm-6qNWkYHE3dmwPCQhDAivdU9adVFlU",
      "quote": "I've had the pleasure of working closely with Siddharth and can confidently say he is one of the most technically sound and dependable engineers I’ve worked with. What truly sets him apart is his strong sense of ownership — once he takes on a task, he sees it through with focus, accountability, and a clear understanding of the bigger picture.",
      "rating": 0
    },
    {
      "name": "Akshay Reddy Emmadi",
      "role": "Software Engineer",
      "company": "LTIMindtree",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQHKQoydTJDNpw/profile-displayphoto-shrink_800_800/B56ZwOJh6kJMAc-/0/1769763908903?e=1772064000&v=beta&t=lxOfFNMuxMp1kV6y0Llhlu3DQ2Pzf4lOv-jHmnMHbbg",
      "quote": "I had the privilege of working closely with Siddharth Mahajan on our platform team, and I can confidently say that he has been a cornerstone in shaping our microservices architecture. His deep expertise in Spring Cloud and hands-on experience with Istio and API Gateway played a crucial role in transforming our monolithic system into a scalable, secure, and efficient microservices-based architecture.",
      "rating": 0
    },
    {
      "name": "Priyanka A",
      "role": "Specialist Data Engineer",
      "company": "LTIMindtree",
      "image": "https://media.licdn.com/dms/image/v2/D5603AQEXwqOrrUL2UQ/profile-displayphoto-crop_800_800/B56Zt9SpAFHkAI-/0/1767333599747?e=1772064000&v=beta&t=chyHD6VS928a5xB16R65fP2xRAtj74Fuv7uUyM7pBl8",
      "quote": "It was an absolute pleasure working with Siddharth. He is a young, energetic professional with a strong eagerness to learn and grow. As a Site Reliability Engineer, Siddharth played a crucial role in holding the systems team together, consistently demonstrating ownership and resilience under pressure.",
      "rating": 0
    }
  ],
  "testimonialsLink": "https://www.linkedin.com/in/siddharth-mhjn/details/recommendations/",
  "devtoURL": "https://dev.to/siddharth-mhjn",
  "blog": [],
  "footerServices": [
    "Cloud Architecture",
    "Kubernetes Solutions",
    "Platform Engineering",
    "Website Development"
  ],
  "footerQuickLinks": [
    { "name": "About", "href": "#about" },
    { "name": "Projects", "href": "#projects" },
    { "name": "Blog", "href": "#blog" },
    { "name": "Contact", "href": "#contact" }
  ]
};

// Portfolio Data (will be updated from JSON or use defaults)
let portfolioData = { ...defaultPortfolioData };

// Get project by ID
function getProjectById(projectId) {
    return portfolioData.projects.find(p => p.id === projectId);
}

// Open project modal
function openProject(projectId, event) {
    const project = getProjectById(projectId);

    if (!project) return;

    // Check if popup is disabled for this project
    if (project.popupDisabled) {
        // If link exists, open it directly
        if (project.link) {
            window.open(project.link, '_blank');
            return;
        }
        // If no link, show coming soon
        showComingSoon(event);
        return;
    }

    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectContent');

    const gradient = project.gradient || 'from-neon-cyan to-neon-blue';
    const color = project.color || 'neon-cyan';

    content.innerHTML = `
        <!-- Header - Fixed -->
        <div class="p-5 sm:p-6 border-b border-gray-800/50 flex-shrink-0">
            <div class="flex items-start justify-between gap-4 pr-8">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="px-2 py-0.5 text-[10px] font-mono text-${color} bg-${color}/10 rounded">${project.type || 'Project'}</span>
                        ${project.link ? '<span class="w-1.5 h-1.5 rounded-full bg-green-500"></span>' : ''}
                    </div>
                    <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2">${project.title}</h2>
                    <p class="text-sm text-gray-400 leading-relaxed max-w-2xl">${project.description}</p>
                </div>
            </div>
        </div>

        <!-- Content - Scrollable -->
        <div class="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 min-h-0">
            <!-- Problem & Solution Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-dark-navy/50 border border-gray-800/40">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fa-solid fa-triangle-exclamation text-neon-cyan text-xs"></i>
                        <span class="text-xs font-semibold text-neon-cyan uppercase tracking-wide">Problem</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">${project.problem}</p>
                </div>
                <div class="p-4 rounded-xl bg-dark-navy/50 border border-gray-800/40">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fa-solid fa-lightbulb text-neon-violet text-xs"></i>
                        <span class="text-xs font-semibold text-neon-violet uppercase tracking-wide">Solution</span>
                    </div>
                    <p class="text-sm text-gray-400 leading-relaxed">${project.solution}</p>
                </div>
            </div>

            <!-- Architecture -->
            <div class="p-4 rounded-xl bg-dark-navy/50 border border-gray-800/40">
                <div class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-sitemap text-neon-blue text-xs"></i>
                    <span class="text-xs font-semibold text-neon-blue uppercase tracking-wide">Architecture</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${project.architecture.map((item, index) => `
                        <div class="flex items-center gap-2 p-2 rounded-lg bg-dark-slate/40 text-sm">
                            <span class="text-neon-blue/60 font-mono text-xs">${String(index + 1).padStart(2, '0')}</span>
                            <span class="text-gray-300">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Impact -->
            <div class="p-4 rounded-xl bg-dark-navy/50 border border-gray-800/40">
                <div class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-chart-line text-green-400 text-xs"></i>
                    <span class="text-xs font-semibold text-green-400 uppercase tracking-wide">Impact & Results</span>
                </div>
                <div class="space-y-2">
                    ${project.impact.map((item, index) => {
                        const colors = ['neon-cyan', 'neon-violet', 'neon-blue', 'green-400'];
                        return `
                        <div class="flex items-start gap-2 text-sm">
                            <i class="fa-solid fa-check text-${colors[index % colors.length]} text-xs mt-1"></i>
                            <span class="text-gray-300">${item}</span>
                        </div>
                    `}).join('')}
                </div>
            </div>

            <!-- Tech Stack -->
            <div class="p-4 rounded-xl bg-dark-navy/50 border border-gray-800/40">
                <div class="flex items-center gap-2 mb-3">
                    <i class="fa-solid fa-layer-group text-${color} text-xs"></i>
                    <span class="text-xs font-semibold text-${color} uppercase tracking-wide">Technologies</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${project.technologies.map(tech => `
                        <span class="px-2.5 py-1 bg-dark-slate/60 border border-gray-700/40 text-gray-300 rounded-lg text-xs font-medium">${tech}</span>
                    `).join('')}
                </div>
            </div>
        </div>

        <!-- Footer - Fixed -->
        <div class="p-5 sm:p-6 border-t border-gray-800/50 bg-dark-navy/30 flex-shrink-0">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-4 text-xs text-gray-500">
                    <span class="flex items-center gap-1.5">
                        <i class="fa-solid fa-code"></i>
                        ${project.technologies.length} technologies
                    </span>
                    <span class="flex items-center gap-1.5">
                        <i class="fa-solid fa-cubes"></i>
                        ${project.architecture.length} components
                    </span>
                </div>
                <div class="flex items-center gap-3">
                    ${project.github ? `
                    <a href="${project.github}" target="_blank" class="px-4 py-2 text-sm border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 hover:text-white transition-all flex items-center gap-2">
                        <i class="fa-brands fa-github"></i>
                        <span>Source</span>
                    </a>
                    ` : ''}
                    ${project.link ? `
                    <a href="${project.link}" target="_blank" class="px-4 py-2 text-sm bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-navy font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/20 transition-all flex items-center gap-2">
                        <span>View Live</span>
                        <i class="fa-solid fa-external-link text-xs"></i>
                    </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Load portfolio data from JSON file and update the page
async function loadPortfolioData() {
    try {
        const response = await fetch('portfolio-data.json');
        if (!response.ok) {
            console.log('JSON file not found, using default values');
            // Use defaultPortfolioData as fallback
            updatePageContent(defaultPortfolioData);
            return;
        }
        const data = await response.json();

        // Update portfolioData with loaded data
        Object.assign(portfolioData, data);

        // Update the HTML with loaded data
        updatePageContent(data);
    } catch (error) {
        console.log('Error loading JSON, using default values:', error);
        // Use defaultPortfolioData as fallback
        updatePageContent(defaultPortfolioData);
    }
}

// Color arrays for cycling through colors
const colors = ['neon-cyan', 'neon-violet', 'neon-blue', 'cyan-500'];
const gradients = ['from-neon-cyan to-neon-blue', 'from-neon-violet to-purple-600', 'from-neon-blue to-blue-600', 'from-cyan-500 to-teal-500'];

// Helper function to get color by index
function getColor(index) {
    return colors[index % colors.length];
}

function getGradient(index) {
    return gradients[index % gradients.length];
}

// Update all page content with data from JSON - DYNAMICALLY GENERATES HTML
function updatePageContent(data) {
    // Update page title
    if (data.siteTitle) {
        document.title = data.siteTitle;
    } else if (data.personal && data.personal.name) {
        // Fallback: generate title from name and title
        document.title = data.personal.title
            ? `${data.personal.name} | ${data.personal.title}`
            : data.personal.name;
    }

    // Update Hero Section - Modern Tech Style
    if (data.personal) {
        // Left side text content
        const heroGreeting = document.querySelector('#hero .hero-greeting');
        if (heroGreeting) heroGreeting.textContent = 'Hello, I\'m';

        const heroName = document.querySelector('#hero .hero-name');
        if (heroName) heroName.textContent = data.personal.name;

        const heroTitle = document.querySelector('#hero .hero-title');
        if (heroTitle) heroTitle.textContent = data.personal.title;

        const heroSubtitle = document.querySelector('#hero .hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = data.personal.subtitle;

        // Terminal/code block content
        const heroCodeName = document.querySelector('#hero .hero-code-name');
        if (heroCodeName) heroCodeName.textContent = `"${data.personal.name}"`;

        const heroCodeRole = document.querySelector('#hero .hero-code-role');
        if (heroCodeRole) heroCodeRole.textContent = `"${data.personal.title}"`;

        const heroCodeLocation = document.querySelector('#hero .hero-code-location');
        if (heroCodeLocation) heroCodeLocation.textContent = `"${data.personal.location || 'Remote'}"`;

        // Generate skills array for terminal
        const heroCodeSkills = document.querySelector('#hero .hero-code-skills');
        if (heroCodeSkills) {
            let topSkills = [];

            // Check if heroSkills is defined in personal section
            if (data.personal.heroSkills && data.personal.heroSkills.length > 0) {
                topSkills = data.personal.heroSkills.slice(0, 4);
            } else if (data.skills) {
                // Fallback: Extract first few technologies from each category
                const allSkills = [];
                Object.values(data.skills).forEach(category => {
                    if (category.technologies) {
                        allSkills.push(...category.technologies.slice(0, 2));
                    }
                });
                topSkills = allSkills.slice(0, 4);
            }

            if (topSkills.length > 0) {
                heroCodeSkills.textContent = `"${topSkills.join('", "')}"`;
            }
        }

        // Generate social links
        const socialContainer = document.querySelector('#hero .hero-social-links');
        if (socialContainer && data.personal.socialLinks) {
            socialContainer.innerHTML = data.personal.socialLinks.map(link => `
                <a href="${link.url}" target="_blank" class="w-10 h-10 rounded-lg bg-dark-slate/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300">
                    <i class="${link.icon} text-lg"></i>
                </a>
            `).join('');
        }

        // Update hero resume button
        const heroResumeBtn = document.querySelector('#hero .hero-resume-btn');
        if (heroResumeBtn && data.personal.resume) {
            heroResumeBtn.href = data.personal.resume;
        }

        // Update available for work status
        const isAvailable = data.personal.availableForWork !== false;
        const availabilityText = data.personal.availabilityText || 'Available for work';

        // Hero section availability badge
        const heroBadge = document.querySelector('#hero .hero-available-badge');
        if (heroBadge) {
            if (isAvailable) {
                heroBadge.style.display = 'inline-flex';
                const heroBadgeText = heroBadge.querySelector('.hero-available-text');
                if (heroBadgeText) {
                    heroBadgeText.textContent = availabilityText;
                }
            } else {
                heroBadge.style.display = 'none';
            }
        }

        // Terminal code available value
        const terminalAvailable = document.querySelector('#hero .hero-code-available');
        if (terminalAvailable) {
            terminalAvailable.textContent = isAvailable ? 'true' : 'false';
            terminalAvailable.className = `hero-code-available ${isAvailable ? 'text-neon-cyan' : 'text-red-400'}`;
        }

        // Footer available status
        const footerAvailable = document.querySelector('#footer .footer-available');
        if (footerAvailable) {
            if (isAvailable) {
                footerAvailable.style.display = 'flex';
                const footerAvailableText = footerAvailable.querySelector('.footer-available-text');
                if (footerAvailableText) {
                    footerAvailableText.textContent = availabilityText;
                }
            } else {
                footerAvailable.style.display = 'none';
            }
        }
    }

    // Update About Section
    if (data.about) {
        // Dynamically generate about description paragraphs - minimal layout
        const aboutDescContainer = document.querySelector('#about .about-description');
        if (aboutDescContainer && data.about.description) {
            aboutDescContainer.innerHTML = data.about.description.map(text => `
                <p>${text}</p>
            `).join('');
        }

        // Update stats - minimal inline
        if (data.personal) {
            const statYears = document.querySelector('#about .stat-years');
            const statProjects = document.querySelector('#about .stat-projects');
            const statLocation = document.querySelector('#about .stat-location');
            if (statYears) statYears.textContent = data.personal.yearsExperience;
            if (statProjects) statProjects.textContent = data.personal.projectsCompleted;
            if (statLocation) statLocation.textContent = data.personal.location;
        }

        // Update info - minimal text
        if (data.about.currentRole) {
            const roleEl = document.querySelector('#about .about-role');
            const rolePeriodEl = document.querySelector('#about .about-role-period');
            if (roleEl) roleEl.textContent = `${data.about.currentRole.title} at ${data.about.currentRole.company}`;
            if (rolePeriodEl) rolePeriodEl.textContent = data.about.currentRole.period;
        }

        const specEl = document.querySelector('#about .about-specialization');
        if (specEl && data.about.specialization) specEl.textContent = data.about.specialization;

        const focusEl = document.querySelector('#about .about-focus');
        if (focusEl && data.about.focusAreas) focusEl.textContent = data.about.focusAreas;
    }

    // Dynamically generate Career Timeline - Polished single column layout
    if (data.experience) {
        const timelineContainer = document.querySelector('#about .timeline-container');
        if (timelineContainer) {
            timelineContainer.innerHTML = data.experience.map((exp, index) => {
                const color = exp.color || getColor(index);
                const isFirst = index === 0;

                return `
                    <div class="relative pl-7 group">
                        <!-- Dot with glow -->
                        <div class="absolute left-0 top-0.5 w-3 h-3 rounded-full bg-${color} shadow-lg shadow-${color}/30 ring-4 ring-${color}/10 group-hover:ring-${color}/20 transition-all"></div>
                        <!-- Content -->
                        <div class="pb-1">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-medium text-${color}">${exp.period}</span>
                                ${isFirst ? '<span class="px-1.5 py-0.5 text-[8px] bg-neon-cyan/20 text-neon-cyan rounded font-medium">Current</span>' : ''}
                            </div>
                            <h4 class="text-sm font-semibold text-white mb-0.5 group-hover:text-${color} transition-colors">${exp.title}</h4>
                            <p class="text-xs text-gray-400">${exp.company}</p>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Skill Stats - updated selector for responsive grid
    if (data.skillStats) {
        // Find the skill stats grid (second grid in skills section)
        const skillsGrids = document.querySelectorAll('#skills .grid');
        const skillStatsContainer = skillsGrids.length > 1 ? skillsGrids[1] : null;
        if (skillStatsContainer) {
            skillStatsContainer.className = 'mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5';
            skillStatsContainer.innerHTML = data.skillStats.map((stat, index) => {
                const color = stat.color || getColor(index);
                return `
                    <div class="gradient-border rounded-lg p-3 sm:p-4 bg-dark-navy text-center">
                        <div class="text-xl sm:text-2xl font-bold text-${color} mb-1">${stat.value}</div>
                        <div class="text-xs sm:text-sm text-gray-400">${stat.label}</div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Skills Section - redesigned with modern card layout
    if (data.skills) {
        const skillsGrid = document.querySelector('#skills .grid');
        if (skillsGrid) {
            skillsGrid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5';
            const categories = Object.keys(data.skills);

            skillsGrid.innerHTML = categories.map((category, index) => {
                const skill = data.skills[category];
                const color = skill.color || getColor(index);
                const icon = skill.icon || 'fa-solid fa-star';
                const gradient = getGradient(index);

                return `
                    <div class="group relative">
                        <div class="gradient-border rounded-xl p-4 sm:p-5 bg-dark-navy h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}/10">
                            <!-- Icon and Title Row -->
                            <div class="flex items-center gap-3 mb-3">
                                <div class="w-10 h-10 rounded-xl bg-${color}/10 flex items-center justify-center flex-shrink-0">
                                    <i class="${icon} text-lg text-${color}"></i>
                                </div>
                                <h3 class="text-base font-bold text-white group-hover:text-${color} transition-colors duration-300">${category}</h3>
                            </div>

                            <!-- Technologies Badges -->
                            <div class="flex flex-wrap gap-1.5">
                                ${skill.technologies.map(tech => `
                                    <span class="inline-block px-2.5 py-1 rounded-full text-[11px] font-medium bg-${color}/10 text-${color} border border-${color}/20 group-hover:bg-${color}/20 group-hover:border-${color}/40 transition-all duration-300">${tech}</span>
                                `).join('')}
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Experience Section - redesigned modern card layout with enhanced colors
    if (data.experience) {
        const expContainer = document.querySelector('#experience .space-y-6, #experience .space-y-8');
        if (expContainer) {
            expContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8';

            // Enhanced color palette for experience cards - using static classes for Tailwind
            const expStyles = [
                { textColor: 'text-cyan-400', bgColor: 'bg-cyan-400/10', borderColor: 'border-cyan-400/20', hoverBorder: 'hover:border-cyan-400/40', gradient: 'from-cyan-400 to-blue-500', shadow: 'shadow-cyan-400/20' },
                { textColor: 'text-violet-400', bgColor: 'bg-violet-400/10', borderColor: 'border-violet-400/20', hoverBorder: 'hover:border-violet-400/40', gradient: 'from-violet-500 to-purple-600', shadow: 'shadow-violet-400/20' },
                { textColor: 'text-blue-400', bgColor: 'bg-blue-400/10', borderColor: 'border-blue-400/20', hoverBorder: 'hover:border-blue-400/40', gradient: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-400/20' }
            ];
            const expIcons = ['fa-solid fa-rocket', 'fa-solid fa-building-columns', 'fa-solid fa-layer-group'];

            expContainer.innerHTML = data.experience.map((exp, index) => {
                const style = expStyles[index % expStyles.length];
                const icon = expIcons[index % expIcons.length];
                const hasLogo = exp.logo && exp.logo.trim() !== '';

                return `
                    <div class="group relative">
                        <div class="relative rounded-2xl p-6 sm:p-8 bg-[#1a1f35] h-full transition-all duration-500 hover:transform hover:scale-[1.03] hover:-translate-y-2 border border-gray-800/50 ${style.hoverBorder} overflow-hidden">
                            <!-- Top Badge with Period -->
                            <div class="absolute -top-0 left-6 sm:left-8">
                                <span class="px-4 py-1.5 bg-gradient-to-r ${style.gradient} text-white text-xs font-bold rounded-b-xl shadow-lg ${style.shadow}">
                                    ${exp.period}
                                </span>
                            </div>

                            <!-- Header -->
                            <div class="flex items-start justify-between gap-3 pt-4 mb-5 sm:mb-6">
                                <div class="relative">
                                    ${hasLogo ? `
                                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg ${style.shadow} overflow-hidden p-2">
                                        <img src="${exp.logo}" alt="${exp.company} logo" class="w-full h-full object-contain">
                                    </div>
                                    ` : `
                                    <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg ${style.shadow}">
                                        <i class="${icon} text-xl sm:text-2xl text-white"></i>
                                    </div>
                                    `}
                                </div>
                                ${exp.isCurrent ? `
                                    <span class="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-green-500/30">
                                        <span class="w-2 h-2 bg-white rounded-full animate-pulse"></span>Current
                                    </span>
                                ` : ''}
                            </div>

                            <!-- Company & Title -->
                            <div class="mb-4">
                                <p class="text-sm font-bold ${style.textColor} mb-1 tracking-wide">${exp.company}</p>
                                <h3 class="text-lg sm:text-xl font-bold text-white transition-colors duration-300">${exp.title}</h3>
                            </div>

                            <!-- Responsibilities -->
                            <div class="space-y-2.5 sm:space-y-3 mb-5">
                                ${exp.responsibilities.map(resp => `
                                    <div class="flex items-start gap-3 group/item">
                                        <div class="w-6 h-6 rounded-lg ${style.bgColor} flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                                            <i class="fa-solid fa-chevron-right ${style.textColor} text-[10px]"></i>
                                        </div>
                                        <p class="text-xs sm:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">${resp}</p>
                                    </div>
                                `).join('')}
                            </div>

                            <!-- Technologies -->
                            <div class="pt-4 border-t border-gray-700/30">
                                <div class="flex flex-wrap gap-2">
                                    ${exp.technologies.map(tech => `
                                        <span class="px-3 py-1.5 ${style.bgColor} ${style.textColor} rounded-lg text-xs font-semibold ${style.borderColor} border transition-all cursor-default">${tech}</span>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${style.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Projects Section - redesigned modern card layout
    if (data.projects) {
        const projectsGrid = document.querySelector('#projects .grid');
        if (projectsGrid) {
            projectsGrid.className = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`;

            projectsGrid.innerHTML = data.projects.map((project, index) => {
                const color = project.color || getColor(index);
                const gradient = project.gradient || getGradient(index);
                const colSpanClass = (index === data.projects.length - 1 && data.projects.length % 2 === 1 && data.projects.length > 1) ? 'md:col-span-2 lg:col-span-1' : '';
                const hasLink = project.link && project.link.trim() !== '';
                const isComingSoon = project.popupDisabled && !hasLink;

                const bannerContent = project.image
                    ? `<img src="${project.image}" alt="${project.title}" class="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110">`
                    : `<div class="h-40 sm:h-48 bg-gradient-to-br ${gradient} opacity-30 flex items-center justify-center">
                        <i class="fa-solid fa-code text-4xl text-white/30"></i>
                       </div>`;

                return `
                    <div class="group relative ${colSpanClass}" onclick="openProject('${project.id}', event)">
                        <div class="gradient-border rounded-2xl overflow-hidden bg-dark-navy h-full cursor-pointer transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}/10">
                            <!-- Project Image/Banner -->
                            <div class="relative overflow-hidden">
                                ${bannerContent}
                                <!-- Overlay on hover -->
                                <div class="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent opacity-60"></div>
                                <!-- Category Badge -->
                                <div class="absolute top-4 left-4">
                                    <span class="px-3 py-1 bg-${color}/90 text-dark-navy text-xs font-bold rounded-full backdrop-blur-sm">
                                        ${project.category || 'Project'}
                                    </span>
                                </div>
                                ${isComingSoon ? `
                                <!-- Coming Soon Overlay -->
                                <div class="absolute top-0 left-0 right-0 bottom-0 m-[1px] rounded-t-2xl bg-dark-navy/70 flex items-center justify-center">
                                    <span class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                                        <i class="fa-solid fa-clock"></i>
                                        Coming Soon
                                    </span>
                                </div>
                                ` : ''}
                            </div>

                            <div class="p-5 sm:p-6">
                                <!-- Title -->
                                <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-${color} transition-colors duration-300">${project.title}</h3>

                                <!-- Description -->
                                <p class="text-sm text-gray-400 mb-4 line-clamp-2">${project.description}</p>

                                <!-- Technologies -->
                                <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                    ${project.technologies.slice(0, 4).map(tech => `
                                        <span class="px-2 py-1 bg-dark-slate text-${color} rounded-lg text-xs font-mono border border-${color}/10">${tech}</span>
                                    `).join('')}
                                    ${project.technologies.length > 4 ? `<span class="px-2 py-1 bg-dark-slate text-gray-400 rounded-lg text-xs">+${project.technologies.length - 4}</span>` : ''}
                                </div>

                                <!-- View Details -->
                                <div class="flex items-center justify-between pt-4 border-t border-gray-700/30">
                                    <span class="text-sm text-${isComingSoon ? 'gray-500' : color} font-semibold ${isComingSoon ? '' : 'group-hover:underline'}">${project.popupDisabled ? (hasLink ? 'Visit Project' : 'Coming Soon') : 'View Details'}</span>
                                    <div class="w-8 h-8 rounded-full bg-${isComingSoon ? 'gray-500' : color}/10 flex items-center justify-center ${isComingSoon ? '' : 'group-hover:bg-' + color + '/20'} transition-colors">
                                        <i class="fa-solid ${project.popupDisabled ? (hasLink ? 'fa-external-link' : 'fa-clock') : 'fa-arrow-right'} text-${isComingSoon ? 'gray-500' : color} text-sm ${isComingSoon ? '' : 'group-hover:translate-x-0.5'} transition-transform"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Update GitHub link
        const githubLink = document.querySelector('#projects .mt-10 a, #projects .mt-16 a');
        if (githubLink && data.personal && data.personal.socialLinks) {
            const github = data.personal.socialLinks.find(l => l.name === 'GitHub');
            if (github) {
                githubLink.href = github.url;
            }
        }
    }

    // Dynamically generate Blog Section - redesigned modern card layout
    if (data.blog) {
        const mainBlogGrid = document.querySelector('#blog .grid');
        const smallBlogGrid = document.querySelector('#blog .mt-8, #blog .mt-12');

        if (mainBlogGrid) {
            const allBlogs = data.blog;
            mainBlogGrid.className = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`;

            mainBlogGrid.innerHTML = allBlogs.map((blog, index) => {
                const color = blog.color || getColor(index);
                const gradient = blog.gradient || getGradient(index);
                const icon = blog.icon || 'fa-solid fa-newspaper';
                const hasUrl = blog.url && blog.url.trim() !== '';

                return `
                    <article class="group relative" onclick="${hasUrl ? `window.open('${blog.url}', '_blank')` : 'showComingSoon(event)'}">
                        <div class="gradient-border rounded-2xl overflow-hidden bg-dark-navy h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-${color}/20">
                            <!-- Header with Icon -->
                            <div class="h-32 sm:h-36 bg-gradient-to-br ${gradient} relative overflow-hidden">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                        <i class="${icon} text-2xl sm:text-3xl text-white/70 group-hover:scale-110 transition-transform duration-300"></i>
                                    </div>
                                </div>
                                <!-- Category Badge -->
                                <div class="absolute top-4 left-4">
                                    <span class="px-3 py-1.5 bg-${color} text-white text-xs font-bold rounded-full shadow-lg">
                                        ${blog.category}
                                    </span>
                                </div>
                                <!-- Read Time Badge -->
                                <div class="absolute top-4 right-4">
                                    <span class="px-3 py-1.5 bg-dark-slate text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1.5">
                                        <i class="fa-solid fa-clock text-[10px]"></i>${blog.readTime}
                                    </span>
                                </div>
                                ${!hasUrl ? `
                                <!-- Coming Soon Overlay -->
                                <div class="absolute top-0 left-0 right-0 bottom-0 m-[1px] rounded-t-2xl bg-dark-navy/70 flex items-center justify-center">
                                    <span class="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg flex items-center gap-2">
                                        <i class="fa-solid fa-clock"></i>
                                        Coming Soon
                                    </span>
                                </div>
                                ` : ''}
                            </div>

                            <div class="p-5 sm:p-6">
                                <!-- Date -->
                                <p class="text-xs text-${color} font-semibold mb-2">${blog.date}</p>

                                <!-- Title -->
                                <h3 class="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-white group-hover:text-${color} transition-colors duration-300 line-clamp-2">${blog.title}</h3>

                                <!-- Description -->
                                <p class="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2">${blog.description}</p>

                                <!-- Read More Link -->
                                <div class="inline-flex items-center gap-2 text-sm text-${hasUrl ? color : 'gray-500'} font-semibold ${hasUrl ? 'group-hover:underline' : ''}">
                                    <span>${hasUrl ? 'Read Article' : 'Coming Soon'}</span>
                                    <div class="w-6 h-6 rounded-full bg-${hasUrl ? color : 'gray-500'}/10 flex items-center justify-center ${hasUrl ? 'group-hover:bg-' + color + '/20' : ''} transition-colors">
                                        <i class="fa-solid ${hasUrl ? 'fa-arrow-right' : 'fa-clock'} text-xs ${hasUrl ? 'group-hover:translate-x-0.5' : ''} transition-transform"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </article>
                `;
            }).join('');
        }

        // Hide the secondary blog grid
        if (smallBlogGrid) {
            smallBlogGrid.style.display = 'none';
        }

        // Update "View All Blog Posts" button
        const viewAllBlogBtn = document.querySelector('#blog .mt-10 a, #blog .mt-16 a');
        if (viewAllBlogBtn && data.devtoURL) {
            viewAllBlogBtn.href = data.devtoURL;
            viewAllBlogBtn.setAttribute('target', '_blank');
            viewAllBlogBtn.removeAttribute('onclick');
        }
    }

    // Dynamically generate Certifications Section - redesigned modern card layout
    if (data.certifications) {
        const certGrid = document.querySelector('#certifications .grid');
        if (certGrid) {
            certGrid.className = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`;

            certGrid.innerHTML = data.certifications.map((cert, index) => {
                const color = cert.color || getColor(index);
                const icon = cert.icon || 'fa-solid fa-certificate';
                const gradient = getGradient(index);
                const colSpanClass = (index === data.certifications.length - 1 && data.certifications.length % 2 === 1 && data.certifications.length > 1) ? 'md:col-span-2 lg:col-span-1' : '';

                return `
                    <div class="group relative ${colSpanClass}">
                        <div class="gradient-border rounded-2xl p-6 sm:p-8 bg-dark-navy h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}/10">
                            <!-- Issuer Badge -->
                            <div class="absolute -top-3 left-6 sm:left-8">
                                <span class="px-3 py-1 bg-gradient-to-r ${gradient} text-dark-navy text-xs font-bold rounded-full">
                                    ${cert.issuer}
                                </span>
                            </div>

                            <!-- Icon Container -->
                            <div class="flex justify-center mb-5 sm:mb-6 pt-2">
                                <div class="relative">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-${color}/10 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                        <i class="${icon} text-2xl sm:text-3xl text-${color}"></i>
                                    </div>
                                    <div class="absolute -inset-1 rounded-2xl border border-${color}/20 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="text-center">
                                <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-${color} transition-colors duration-300">${cert.title}</h3>
                                <p class="text-sm text-gray-400">${cert.level}</p>
                            </div>

                            <!-- Verified Badge -->
                            <div class="flex justify-center mt-4">
                                <span class="inline-flex items-center gap-1 px-3 py-1 bg-${color}/10 text-${color} rounded-full text-xs font-semibold">
                                    <i class="fa-solid fa-check-circle"></i>
                                    Verified
                                </span>
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Awards Section - redesigned card layout
    if (data.awards) {
        const awardsGrid = document.querySelector('#awards-grid');
        if (awardsGrid) {
            awardsGrid.innerHTML = data.awards.map((award, index) => {
                const color = award.color || getColor(index);
                const icon = award.icon || 'fa-solid fa-trophy';
                const gradient = getGradient(index);
                return `
                    <div class="group relative">
                        <!-- Card -->
                        <div class="gradient-border rounded-2xl p-6 sm:p-8 bg-dark-slate h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}/10">
                            <!-- Top Badge -->
                            <div class="absolute -top-3 left-6 sm:left-8">
                                <span class="px-3 py-1 bg-gradient-to-r ${gradient} text-dark-navy text-xs font-bold rounded-full">
                                    ${award.date}
                                </span>
                            </div>

                            <!-- Icon Container -->
                            <div class="flex justify-center mb-5 sm:mb-6 pt-2">
                                <div class="relative">
                                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-${color}/10 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                                        <i class="${icon} text-2xl sm:text-3xl text-${color}"></i>
                                    </div>
                                    <!-- Decorative ring -->
                                    <div class="absolute -inset-1 rounded-2xl border border-${color}/20 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="text-center">
                                <h3 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-${color} transition-colors duration-300">${award.title}</h3>
                                <p class="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">${award.description}</p>

                                ${award.authorization ? `
                                <!-- Authorization Badge -->
                                <div class="flex justify-center">
                                    <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-${color}/10 border border-${color}/20 text-${color} rounded-full text-xs font-semibold">
                                        <i class="fa-solid fa-building-columns text-[10px]"></i>
                                        Awarded by ${award.authorization}
                                    </span>
                                </div>
                                ` : ''}
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Dynamically generate Testimonials Section - redesigned modern card layout
    if (data.testimonials) {
        const testimonialsGrid = document.querySelector('#testimonials .grid');
        if (testimonialsGrid) {
            testimonialsGrid.className = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8`;

            testimonialsGrid.innerHTML = data.testimonials.map((testimonial, index) => {
                const color = getColor(index);
                const gradient = getGradient(index);
                const colSpanClass = (index === data.testimonials.length - 1 && data.testimonials.length % 2 === 1 && data.testimonials.length > 1) ? 'md:col-span-2 lg:col-span-1' : '';

                // Generate star rating (hide if null/empty/0)
                const rating = testimonial.rating;
                let starsHTML = '';
                if (rating != null && rating !== '' && rating > 0) {
                    const fullStars = Math.floor(rating);
                    const hasHalfStar = rating % 1 >= 0.5;
                    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
                    starsHTML =
                        '<i class="fa-solid fa-star text-yellow-500 text-sm"></i>'.repeat(fullStars) +
                        (hasHalfStar ? '<i class="fa-solid fa-star-half-stroke text-yellow-500 text-sm"></i>' : '') +
                        '<i class="fa-regular fa-star text-yellow-500/50 text-sm"></i>'.repeat(emptyStars);
                }

                return `
                    <div class="group relative ${colSpanClass}">
                        <div class="gradient-border rounded-2xl p-6 sm:p-8 bg-dark-navy h-full transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-${color}/10">
                            <!-- Quote Icon -->
                            <div class="absolute -top-4 left-6 sm:left-8">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg">
                                    <i class="fa-solid fa-quote-left text-dark-navy text-sm"></i>
                                </div>
                            </div>

                            <!-- Stars -->
                            ${starsHTML ? `<div class="flex gap-1 mb-4 pt-2">${starsHTML}</div>` : ''}

                            <!-- Quote -->
                            <p class="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 italic">"${testimonial.quote}"</p>

                            <!-- Author -->
                            <div class="flex items-center gap-4 pt-4 border-t border-gray-700/30">
                                <div class="relative">
                                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-${color}/30">
                                    <div class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-${color} flex items-center justify-center">
                                        <i class="fa-solid fa-check text-dark-navy text-[10px]"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-base sm:text-lg font-bold text-white group-hover:text-${color} transition-colors duration-300">${testimonial.name}</h4>
                                    <p class="text-xs sm:text-sm text-gray-400">${testimonial.role}</p>
                                    <p class="text-xs text-${color} font-semibold">${testimonial.company}</p>
                                </div>
                            </div>

                            <!-- Bottom Accent Line -->
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${gradient} rounded-t-full opacity-50 group-hover:opacity-100 group-hover:w-2/3 transition-all duration-300"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Update testimonials link
        const testimonialsLink = document.getElementById('testimonials-link');
        if (testimonialsLink && data.testimonialsLink) {
            testimonialsLink.href = data.testimonialsLink;
        }
    }

    // Update Contact Section
    if (data.personal) {
        // Update email
        const emailText = document.getElementById('contact-email');
        if (emailText && data.personal.email) {
            emailText.textContent = data.personal.email;
        }

        // Update LinkedIn
        const linkedinText = document.getElementById('contact-linkedin');
        if (linkedinText && data.personal.socialLinks) {
            const linkedin = data.personal.socialLinks.find(l => l.name === 'LinkedIn');
            if (linkedin) {
                linkedinText.textContent = linkedin.url.replace('https://www.', '');
            }
        }

        // Update GitHub
        const githubText = document.getElementById('contact-github');
        if (githubText && data.personal.socialLinks) {
            const github = data.personal.socialLinks.find(l => l.name === 'GitHub');
            if (github) {
                githubText.textContent = github.url.replace('https://', '');
            }
        }

        // Update location
        const locationText = document.getElementById('contact-location');
        if (locationText && data.personal.location) {
            locationText.textContent = data.personal.location;
        }

        // Update resume link
        const resumeLink = document.querySelector('#contact a[download]');
        if (resumeLink && data.personal.resume) {
            resumeLink.href = data.personal.resume;
        }
    }

    // Update Footer
    if (data.personal) {
        const footerName = document.querySelector('#footer h4');
        if (footerName) footerName.textContent = data.personal.name;

        // Find the paragraph after brand section
        const brandSection = document.querySelector('#footer .lg\\:col-span-4');
        if (brandSection) {
            const footerTitle = brandSection.querySelector('p.text-gray-400');
            if (footerTitle) footerTitle.textContent = data.personal.title;
        }

        const footerCopyright = document.getElementById('footer-copyright');
        if (footerCopyright) footerCopyright.textContent = `© ${new Date().getFullYear()} ${data.personal.name}. All rights reserved.`;
    }

    // Dynamically generate Footer Services
    if (data.footerServices) {
        const servicesUl = document.querySelectorAll('#footer ul')[0];
        if (servicesUl) {
            servicesUl.innerHTML = data.footerServices.map(service => `
                <li class="hover:text-neon-cyan transition-colors cursor-default">${service}</li>
            `).join('');
        }
    }

    // Dynamically generate Footer Social Links
    if (data.personal && data.personal.socialLinks) {
        const footerSocialContainer = document.querySelector('#footer .flex.space-x-3');
        if (footerSocialContainer) {
            const socialColors = ['neon-cyan', 'neon-violet', 'neon-blue'];
            footerSocialContainer.innerHTML = data.personal.socialLinks.map((link, index) => {
                const color = socialColors[index % socialColors.length];
                return `
                    <a href="${link.url}" target="_blank" class="w-10 h-10 rounded-xl bg-dark-slate border border-gray-800 flex items-center justify-center hover:bg-${color} hover:border-${color} hover:text-dark-navy text-${color} transition-all duration-300 group">
                        <i class="${link.icon} group-hover:scale-110 transition-transform"></i>
                    </a>
                `;
            }).join('');
        }
    }

    // Hide sections that have no data in JSON
    const sectionDataMap = {
        'about': !!(data.about && data.about.description && data.about.description.length > 0),
        'skills': !!(data.skills && Object.keys(data.skills).length > 0),
        'experience': !!(data.experience && data.experience.length > 0),
        'projects': !!(data.projects && data.projects.length > 0),
        'awards': !!(data.awards && data.awards.length > 0),
        'certifications': !!(data.certifications && data.certifications.length > 0),
        'testimonials': !!(data.testimonials && data.testimonials.length > 0),
        'blog': !!(data.blog && data.blog.length > 0),
    };

    Object.keys(sectionDataMap).forEach(sectionId => {
        const hasData = sectionDataMap[sectionId];
        const section = document.getElementById(sectionId);

        if (section) {
            section.style.display = hasData ? '' : 'none';
        }

        // Hide/show desktop nav dot
        const desktopNavLink = document.querySelector(`#navigation a[href="#${sectionId}"]`);
        if (desktopNavLink) {
            desktopNavLink.style.display = hasData ? '' : 'none';
        }

        // Hide/show mobile nav link
        const mobileNavLink = document.querySelector(`#mobileMenu a[href="#${sectionId}"]`);
        if (mobileNavLink) {
            mobileNavLink.style.display = hasData ? '' : 'none';
        }
    });
}

// Initialize navigation observer
document.addEventListener('DOMContentLoaded', function() {
    // Load portfolio data from JSON
    loadPortfolioData();

    // Initialize contact form
    initContactForm();

    const sections = document.querySelectorAll('section');
    const navDots = document.querySelectorAll('#navigation a');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navDots.forEach(link => {
                    const dot = link.querySelector('.nav-dot');
                    if (link.getAttribute('href') === `#${id}`) {
                        // Active: cyan dot
                        if (dot) {
                            dot.classList.remove('bg-gray-500');
                            dot.classList.add('bg-neon-cyan');
                        }
                    } else {
                        // Inactive: gray dot
                        if (dot) {
                            dot.classList.add('bg-gray-500');
                            dot.classList.remove('bg-neon-cyan');
                        }
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Contact form submission handler - Google Sheets integration
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Create info message element if it doesn't exist
    let formInfo = document.getElementById('formInfo');
    if (!formInfo) {
        formInfo = document.createElement('div');
        formInfo.id = 'formInfo';
        formInfo.className = 'hidden mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-lg text-blue-400 text-center text-sm sm:text-base';
        form.parentNode.appendChild(formInfo);
    }

    // Create validation message element if it doesn't exist
    let formValidation = document.getElementById('formValidation');
    if (!formValidation) {
        formValidation = document.createElement('div');
        formValidation.id = 'formValidation';
        formValidation.className = 'hidden mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-500 bg-opacity-20 border border-yellow-500 rounded-lg text-yellow-400 text-center text-sm sm:text-base';
        form.parentNode.appendChild(formValidation);
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitBtn');
        const submitText = document.getElementById('submitText');
        const submitLoading = document.getElementById('submitLoading');
        const formSuccess = document.getElementById('formSuccess');
        const formError = document.getElementById('formError');

        // Hide all messages first
        formSuccess.classList.add('hidden');
        formError.classList.add('hidden');
        formInfo.classList.add('hidden');
        formValidation.classList.add('hidden');

        // Get form data
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        // Validate
        if (!name || !email || !subject || !message) {
            formValidation.innerHTML = '<i class="fa-solid fa-exclamation-triangle mr-2"></i>Please fill in all fields.';
            formValidation.classList.remove('hidden');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formValidation.innerHTML = '<i class="fa-solid fa-exclamation-triangle mr-2"></i>Please enter a valid email address.';
            formValidation.classList.remove('hidden');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');

        const googleScriptURL = portfolioData.personal.googleScriptURL;

        // Check if Google Script URL is configured
        if (!googleScriptURL || googleScriptURL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
            // Show info message and reset form
            formInfo.innerHTML = '<i class="fa-solid fa-info-circle mr-2"></i>Thank you for your message! Please email me directly at <a href="mailto:' + portfolioData.personal.email + '" class="underline hover:text-blue-300">' + portfolioData.personal.email + '</a>';
            formInfo.classList.remove('hidden');
            form.reset();

            // Reset button state
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
            return;
        }

        try {
            // Submit to Google Apps Script
            await fetch(googleScriptURL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                    timestamp: new Date().toISOString()
                })
            });

            // Since we use no-cors, we can't read the response
            // Assume success if no error was thrown
            formSuccess.classList.remove('hidden');
            form.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            formError.innerHTML = '<i class="fa-solid fa-exclamation-circle mr-2"></i>Failed to send message. Please try again or email directly at <a href="mailto:' + portfolioData.personal.email + '" class="underline hover:text-red-300">' + portfolioData.personal.email + '</a>';
            formError.classList.remove('hidden');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            submitText.classList.remove('hidden');
            submitLoading.classList.add('hidden');
        }
    });
}


// Allow navigations for legitimate links
(function() {
    document.addEventListener('click', function(e) {
        var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
        if (!a) return;
        var href = a.getAttribute('href');

        // Handle "Coming Soon" links (blog posts without URLs)
        if (a.hasAttribute('data-coming-soon')) {
            e.preventDefault();
            showComingSoon(e);
            return;
        }

        // Allow links with onclick handlers to execute their handlers
        if (a.hasAttribute('onclick')) {
            return; // Let the onclick handler deal with it
        }

        // Allow external links with target="_blank" (social links, GitHub, LinkedIn, blog posts)
        if (a.getAttribute('target') === '_blank') {
            return; // Allow external links to proceed
        }

        // Allow internal hash navigation (links starting with #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                closeMobileMenu();
            }
            return;
        }

        // Allow mailto links
        if (href && href.startsWith('mailto:')) {
            return; // Allow mailto to proceed
        }

        // Allow download links (resume)
        if (a.hasAttribute('download')) {
            return; // Allow download to proceed
        }

        // Allow links to actual URLs (not placeholder #)
        if (href && href !== '#' && (href.startsWith('http://') || href.startsWith('https://'))) {
            return; // Allow real URLs to proceed
        }

        // Block placeholder # links
        if (href === '#') {
            e.preventDefault();
            return;
        }
    }, true);

    // Block form submissions except for contact form
    document.addEventListener('submit', function(e) {
        // Allow contact form submission - do not interfere
        if (e.target && e.target.id === 'contactForm') {
            return true; // Allow contact form to submit
        }
        e.preventDefault();
        e.stopPropagation();
    }, false);
})();

// Show coming soon message for placeholder links
function showComingSoon(event) {
    event.preventDefault();
    // Create and show a toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-dark-slate border border-neon-cyan rounded-lg text-neon-cyan font-semibold z-50 transition-opacity duration-300';
    toast.textContent = 'Coming Soon!';
    document.body.appendChild(toast);

    // Remove toast after 2 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Privacy Policy Modal
function openPrivacyPolicy() {
    const modal = document.getElementById('privacyModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closePrivacyPolicy() {
    const modal = document.getElementById('privacyModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Terms of Service Modal
function openTermsOfService() {
    const modal = document.getElementById('termsModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeTermsOfService() {
    const modal = document.getElementById('termsModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

// Export data and functions for use in HTML onclick handlers
window.portfolioData = portfolioData;
window.openProject = openProject;
window.closeProject = closeProject;
window.showComingSoon = showComingSoon;
window.openPrivacyPolicy = openPrivacyPolicy;
window.closePrivacyPolicy = closePrivacyPolicy;
window.openTermsOfService = openTermsOfService;
window.closeTermsOfService = closeTermsOfService;

// Mobile menu toggle functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('mobileMenuBtn');

    if (mobileMenu && hamburger) {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
        document.body.classList.toggle('overflow-hidden');
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('mobileMenuBtn');

    if (mobileMenu && hamburger) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.classList.remove('overflow-hidden');
    }
}

// Close mobile menu on resize to desktop
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {
        closeMobileMenu();
    }
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
        closeProject();
    }
});

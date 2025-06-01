// Website Data Loader - Easy Content Management System
class WebsiteDataLoader {
    constructor() {
        this.data = null;
        this.currentLang = 'en';
        this.isInitialized = false;
        
        // Fallback data embedded directly (in case JSON loading fails)
        this.fallbackData = {
            "personal": {
                "name": "Kasra",
                "title": "AI Engineer & Quant Developer",
                "email": "mail.kasrasaeid[at]gmail.com",
                "university": "Tehran University",
                "location": "Tehran, Iran",
                "bio": {
                    "en": "Passionate about artificial intelligence, machine learning, quantitative finance, and creating intelligent solutions that make a difference. Currently studying at Tehran University.",
                    "fa": "علاقه‌مند به هوش مصنوعی، یادگیری ماشین، مالی کمی و ایجاد راه‌حل‌های هوشمند. در حال تحصیل در دانشگاه تهران."
                },
                "about": {
                    "en": "I'm Kasra, an AI Engineering student at Tehran University, deeply passionate about the intersection of technology, intelligence, and quantitative finance. My journey began with curiosity about how machines can learn and think, and has evolved into creating intelligent systems for both AI applications and financial markets.",
                    "fa": "من کسری هستم، دانشجوی مهندسی هوش مصنوعی در دانشگاه تهران که عمیقاً به تقاطع فناوری، هوش و مالی کمی علاقه‌مند است."
                },
                "stats": {
                    "projects": "50+",
                    "experience": "3+",
                    "technologies": "10+"
                }
            },
            "social": {
                "github": "#",
                "linkedin": "#",
                "twitter": "#",
                "instagram": "#",
                "youtube": "#"
            },
            "youtube": {
                "channelName": "Kasra AI Tutorials",
                "subscriberCount": "1.2K",
                "totalViews": "25K",
                "videoCount": "15",
                "hoursOfContent": "48",
                "channelLink": "#"
            },
            "achievements": {
                "stats": {
                    "researchPapers": 5,
                    "competitionAwards": 12,
                    "researchPositions": 3,
                    "citations": 42
                }
            },
            "skills": [
                {
                    "category": {
                        "en": "Machine Learning",
                        "fa": "یادگیری ماشین"
                    },
                    "icon": "fas fa-brain",
                    "items": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"]
                },
                {
                    "category": {
                        "en": "Quantitative Finance",
                        "fa": "مالی کمی"
                    },
                    "icon": "fas fa-coins",
                    "items": ["QuantLib", "Zipline", "Backtrader", "Pandas", "Risk Management"]
                },
                {
                    "category": {
                        "en": "Programming",
                        "fa": "برنامه‌نویسی"
                    },
                    "icon": "fas fa-code",
                    "items": ["Python", "JavaScript", "R", "SQL", "C++"]
                },
                {
                    "category": {
                        "en": "Computer Vision",
                        "fa": "بینایی کامپیوتر"
                    },
                    "icon": "fas fa-eye",
                    "items": ["OpenCV", "YOLO", "CNN", "Image Processing"]
                },
                {
                    "category": {
                        "en": "NLP",
                        "fa": "پردازش زبان طبیعی"
                    },
                    "icon": "fas fa-comments",
                    "items": ["NLTK", "spaCy", "Transformers", "BERT"]
                },
                {
                    "category": {
                        "en": "Data Science",
                        "fa": "علم داده"
                    },
                    "icon": "fas fa-database",
                    "items": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"]
                },
                {
                    "category": {
                        "en": "Web Development",
                        "fa": "توسعه وب"
                    },
                    "icon": "fas fa-globe",
                    "items": ["React", "Node.js", "Flask", "Django", "HTML/CSS"]
                },
                {
                    "category": {
                        "en": "Trading & Analytics",
                        "fa": "معاملات و تحلیل"
                    },
                    "icon": "fas fa-chart-bar",
                    "items": ["Algorithmic Trading", "Portfolio Optimization", "Technical Analysis", "Market Data", "Backtesting"]
                }
            ],
            "featured": [
                {
                    "id": "deep-learning-paper",
                    "type": "research",
                    "title": {
                        "en": "Deep Learning for Financial Time Series",
                        "fa": "یادگیری عمیق برای سری‌های زمانی مالی"
                    },
                    "description": {
                        "en": "Published research paper in IEEE Transactions introducing a novel attention mechanism that improved cryptocurrency prediction accuracy by 23%. Featured in top-tier venue with 15+ citations.",
                        "fa": "مقاله پژوهشی منتشر شده در IEEE Transactions که مکانیزم توجه جدیدی را معرفی می‌کند که دقت پیش‌بینی رمزارز را 23% بهبود داد."
                    },
                    "icon": "fas fa-file-alt",
                    "tags": ["Research Paper", "Deep Learning", "IEEE Publication", "15+ Citations"],
                    "links": {
                        "paper": "#",
                        "github": "#"
                    }
                },
                {
                    "id": "ai-competition",
                    "type": "achievement",
                    "title": {
                        "en": "National AI Competition Winner",
                        "fa": "برنده مسابقه ملی هوش مصنوعی"
                    },
                    "description": {
                        "en": "1st place among 500+ participants in National AI Competition 2024. Developed real-time object detection system achieving 95.8% accuracy, earning $10,000 prize and national recognition.",
                        "fa": "رتبه اول در میان 500+ شرکت‌کننده در مسابقه ملی هوش مصنوعی 2024."
                    },
                    "icon": "fas fa-trophy",
                    "tags": ["Gold Medal", "Computer Vision", "Competition Winner", "$10K Prize"],
                    "links": {
                        "certificate": "#",
                        "github": "#"
                    }
                },
                {
                    "id": "trading-bot",
                    "type": "project",
                    "title": {
                        "en": "Algorithmic Trading Bot",
                        "fa": "ربات معاملات الگوریتمی"
                    },
                    "description": {
                        "en": "Sophisticated trading system using machine learning for market prediction and automated execution. Achieved 34.2% annual return with 18% volatility, earning 2nd place in International Quant Challenge.",
                        "fa": "سیستم معاملاتی پیشرفته با استفاده از یادگیری ماشین برای پیش‌بینی بازار و اجرای خودکار."
                    },
                    "icon": "fas fa-coins",
                    "tags": ["Quantitative Finance", "Machine Learning", "Trading", "Silver Medal"],
                    "links": {
                        "github": "#",
                        "demo": "#"
                    }
                }
            ],
            "projects": [
                {
                    "id": "neural-network-scratch",
                    "category": "ai-ml",
                    "title": {
                        "en": "Neural Network from Scratch",
                        "fa": "شبکه عصبی از ابتدا"
                    },
                    "description": {
                        "en": "Built a complete neural network implementation from scratch using only NumPy, including backpropagation, various activation functions, and gradient descent optimization.",
                        "fa": "ساخت پیاده‌سازی کامل شبکه عصبی از ابتدا با استفاده از NumPy."
                    },
                    "icon": "fas fa-brain",
                    "tags": ["Python", "NumPy", "Machine Learning", "Deep Learning"],
                    "links": {
                        "github": "#",
                        "demo": "#"
                    }
                },
                {
                    "id": "object-detection",
                    "category": "ai-ml",
                    "title": {
                        "en": "Computer Vision Object Detection",
                        "fa": "تشخیص اشیاء با بینایی کامپیوتر"
                    },
                    "description": {
                        "en": "Real-time object detection system using YOLO and OpenCV for identifying and tracking multiple objects in video streams with high accuracy and performance.",
                        "fa": "سیستم تشخیص اشیاء زمان واقعی با استفاده از YOLO و OpenCV."
                    },
                    "icon": "fas fa-eye",
                    "tags": ["Python", "OpenCV", "YOLO", "Computer Vision"],
                    "links": {
                        "github": "#",
                        "demo": "#"
                    }
                },
                {
                    "id": "algorithmic-trading-bot",
                    "category": "quant-finance",
                    "title": {
                        "en": "Algorithmic Trading Bot",
                        "fa": "ربات معاملات الگوریتمی"
                    },
                    "description": {
                        "en": "Sophisticated algorithmic trading system using machine learning for market prediction, automated execution of trading strategies, and real-time risk management.",
                        "fa": "سیستم معاملات الگوریتمی پیشرفته با استفاده از یادگیری ماشین برای پیش‌بینی بازار، اجرای خودکار استراتژی‌های معاملاتی و مدیریت ریسک زمان واقعی."
                    },
                    "icon": "fas fa-coins",
                    "tags": ["Python", "QuantLib", "Machine Learning", "Trading"],
                    "links": {
                        "github": "#",
                        "demo": "#"
                    }
                }
            ],
            "videos": [
                {
                    "id": "neural-networks-tutorial",
                    "title": {
                        "en": "Neural Networks from Scratch in Python",
                        "fa": "شبکه‌های عصبی از ابتدا با پایتون"
                    },
                    "description": {
                        "en": "Learn how to build neural networks from scratch using only NumPy. We'll cover forward propagation, backpropagation, and gradient descent optimization.",
                        "fa": "یاد بگیرید چگونه شبکه‌های عصبی را از ابتدا فقط با NumPy بسازید."
                    },
                    "thumbnail": "Neural Networks Explained",
                    "publishDate": "2 weeks ago",
                    "views": "2.3K",
                    "tags": ["Python", "Neural Networks", "Machine Learning", "Tutorial"],
                    "links": {
                        "youtube": "#",
                        "github": "#"
                    }
                },
                {
                    "id": "trading-bot-tutorial",
                    "title": {
                        "en": "Building an Algorithmic Trading Bot",
                        "fa": "ساخت ربات معاملات الگوریتمی"
                    },
                    "description": {
                        "en": "Step-by-step guide to creating an algorithmic trading bot using Python. We'll implement moving averages, RSI indicators, and backtesting strategies.",
                        "fa": "راهنمای گام به گام برای ایجاد ربات معاملات الگوریتمی با پایتون."
                    },
                    "thumbnail": "Algorithmic Trading",
                    "publishDate": "1 month ago",
                    "views": "4.1K",
                    "tags": ["Python", "Trading", "Quantitative Finance", "Algorithms"],
                    "links": {
                        "youtube": "#",
                        "github": "#"
                    }
                }
            ],
            "achievements_detailed": [
                {
                    "id": "ieee-paper",
                    "category": "papers",
                    "type": "paper",
                    "title": {
                        "en": "Deep Learning Approaches for Financial Time Series Prediction",
                        "fa": "روش‌های یادگیری عمیق برای پیش‌بینی سری‌های زمانی مالی"
                    },
                    "subtitle": {
                        "en": "IEEE Transactions on Neural Networks",
                        "fa": "IEEE Transactions on Neural Networks"
                    },
                    "description": {
                        "en": "A comprehensive study on applying LSTM and Transformer architectures for predicting cryptocurrency market movements. The paper introduces a novel attention mechanism that improved prediction accuracy by 23%.",
                        "fa": "مطالعه جامعی درباره کاربرد معماری‌های LSTM و Transformer برای پیش‌بینی حرکات بازار رمزارز."
                    },
                    "date": "March 2024",
                    "status": "published",
                    "icon": "fas fa-file-alt",
                    "details": {
                        "contributions": [
                            "Novel attention mechanism for time series",
                            "23% improvement in prediction accuracy",
                            "Comprehensive evaluation on 50+ cryptocurrencies",
                            "Open-source implementation provided"
                        ]
                    },
                    "links": {
                        "paper": "#",
                        "github": "#",
                        "citations": "#"
                    },
                    "citations": 15
                },
                {
                    "id": "national-ai-competition",
                    "category": "competitions",
                    "type": "competition",
                    "title": {
                        "en": "1st Place - National AI Competition 2024",
                        "fa": "رتبه اول - مسابقه ملی هوش مصنوعی 2024"
                    },
                    "subtitle": {
                        "en": "Computer Vision Challenge",
                        "fa": "چالش بینایی کامپیوتر"
                    },
                    "description": {
                        "en": "Won first place among 500+ participants in a national computer vision competition. Developed a real-time object detection system achieving 95.8% accuracy on the test dataset.",
                        "fa": "رتبه اول در میان 500+ شرکت‌کننده در یک مسابقه ملی بینایی کامپیوتر."
                    },
                    "date": "February 2024",
                    "status": "completed",
                    "icon": "fas fa-trophy",
                    "details": {
                        "contributions": [
                            "500+ participants from 50+ universities",
                            "Real-time object detection challenge",
                            "95.8% accuracy achieved",
                            "$10,000 prize money"
                        ]
                    },
                    "links": {
                        "certificate": "#",
                        "github": "#",
                        "news": "#"
                    }
                }
            ],
            "education": [
                {
                    "id": "ai-engineering",
                    "title": {
                        "en": "AI Engineering Student",
                        "fa": "دانشجوی مهندسی هوش مصنوعی"
                    },
                    "institution": {
                        "en": "Tehran University",
                        "fa": "دانشگاه تهران"
                    },
                    "period": "2021 - Present",
                    "description": {
                        "en": "Pursuing a degree in AI Engineering with focus on machine learning, deep learning, and intelligent systems. Maintaining excellent academic performance while working on cutting-edge research projects.",
                        "fa": "تحصیل در رشته مهندسی هوش مصنوعی با تمرکز بر یادگیری ماشین، یادگیری عمیق و سیستم‌های هوشمند."
                    }
                },
                {
                    "id": "ml-intern",
                    "title": {
                        "en": "Machine Learning Intern",
                        "fa": "کارآموز یادگیری ماشین"
                    },
                    "institution": {
                        "en": "Tech Startup",
                        "fa": "استارتاپ فناوری"
                    },
                    "period": "Summer 2023",
                    "description": {
                        "en": "Developed and deployed machine learning models for real-world applications. Gained hands-on experience with MLOps, model optimization, and production deployment.",
                        "fa": "توسعه و استقرار مدل‌های یادگیری ماشین برای کاربردهای دنیای واقعی."
                    }
                }
            ]
        };
    }

    // Test data loading
    testDataLoading() {
        console.log('Testing data loading...');
        console.log('Data object:', this.data);
        if (this.data) {
            console.log('Personal data:', this.data.personal);
            console.log('Featured data:', this.data.featured);
            console.log('Projects data:', this.data.projects);
            console.log('Videos data:', this.data.videos);
            console.log('Skills data:', this.data.skills);
        }
    }

    // Load data from JSON file
    async loadData() {
        try {
            console.log('Loading data from data.json...');
            
            // Try to load from JSON file first
            const response = await fetch('./data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            console.log('Data loaded successfully from JSON file:', this.data);
            this.testDataLoading();
            return this.data;
        } catch (error) {
            console.error('Error loading data from JSON file:', error);
            console.log('Using embedded fallback data...');
            
            // Use fallback data immediately for better user experience
            this.data = this.fallbackData;
            console.log('Fallback data loaded successfully:', this.data);
            this.testDataLoading();
            return this.data;
        }
    }

    // Set current language
    setLanguage(lang) {
        this.currentLang = lang;
    }

    // Get text in current language
    getText(textObj) {
        if (typeof textObj === 'string') return textObj;
        return textObj[this.currentLang] || textObj.en || textObj;
    }

    // Populate personal information
    populatePersonalInfo() {
        if (!this.data) return;

        const personal = this.data.personal;
        
        // Update name and title
        document.querySelectorAll('.logo-text').forEach(el => {
            el.innerHTML = `${personal.name}<span class="accent">.dev</span>`;
        });

        // Update hero section
        const heroTitle = document.querySelector('.hero-title .gradient-text');
        if (heroTitle) heroTitle.textContent = personal.name;

        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) heroSubtitle.textContent = this.getText(personal.bio);

        // Update about section
        const aboutText = document.querySelectorAll('.about-text p');
        if (aboutText.length > 0) {
            aboutText[0].textContent = this.getText(personal.about);
        }

        // Update stats
        const stats = document.querySelectorAll('.stat-item h3');
        if (stats.length >= 3) {
            stats[0].textContent = personal.stats.projects;
            stats[1].textContent = personal.stats.experience;
            stats[2].textContent = personal.stats.technologies;
        }

        // Update contact info
        const emailElement = document.querySelector('.contact-item p');
        if (emailElement) emailElement.textContent = personal.email;
    }

    // Populate skills section
    populateSkills() {
        console.log('=== populateSkills called ===');
        console.log('Data available:', !!this.data);
        
        if (!this.data || !this.data.skills) {
            console.log('No data or skills available for skills section');
            return;
        }

        console.log('Skills data:', this.data.skills);
        
        const skillsGrid = document.querySelector('.skills-grid');
        console.log('Skills grid element found:', !!skillsGrid);
        
        if (!skillsGrid) {
            console.log('Skills grid element not found');
            return;
        }

        // Force the grid to be visible
        skillsGrid.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; background: #f8f8f8; padding: 20px; border: 2px solid red;';
        skillsGrid.innerHTML = '<div style="background: red; color: white; padding: 15px; margin: 10px 0; font-size: 18px; font-weight: bold;">SKILLS SECTION LOADING...</div>';
        console.log('Skills data available:', this.data.skills.length);

        this.data.skills.forEach((skill, index) => {
            console.log(`Processing skill category ${index}:`, skill);
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skill-category';
            skillCategory.style.cssText = 'background: #f8f9fa; border: 1px solid #dee2e6; padding: 20px; margin: 15px 0; border-radius: 8px; display: block !important; visibility: visible !important; opacity: 1 !important;';
            
            skillCategory.innerHTML = `
                <h3 style="color: #333 !important; margin-bottom: 10px; font-size: 1.2rem;"><i class="${skill.icon || 'fas fa-cog'}"></i> <span>${this.getText(skill.category) || 'Unknown Category'}</span></h3>
                <div class="skill-items" style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${(skill.items || []).map(item => `<span class="skill-tag" style="background: #007bff; color: white; padding: 6px 12px; border-radius: 4px; font-size: 0.9rem; display: inline-block;">${item}</span>`).join('')}
                </div>
            `;
            
            skillsGrid.appendChild(skillCategory);
            console.log(`Skill category ${index} added to grid`);
        });
        
        console.log('Skills section population complete');
        console.log('Final skills grid children count:', skillsGrid.children.length);
    }

    // Populate featured section
    populateFeatured() {
        console.log('=== populateFeatured called ===');
        console.log('Data available:', !!this.data);
        
        if (!this.data || !this.data.featured) {
            console.log('No data or featured items available for featured section');
            return;
        }

        console.log('Featured data:', this.data.featured);

        const featuredGrid = document.querySelector('#featured .projects-grid');
        console.log('Featured grid element found:', !!featuredGrid);
        
        if (!featuredGrid) {
            console.log('Featured grid element not found - trying alternative selector');
            const altGrid = document.querySelector('.projects-grid');
            if (altGrid) {
                console.log('Using alternative selector for featured grid');
                this.populateFeaturedItems(altGrid);
                return;
            }
            console.log('No suitable grid element found for featured section');
            return;
        }

        this.populateFeaturedItems(featuredGrid);
    }

    // Helper function to populate featured items
    populateFeaturedItems(grid) {
        console.log('Featured data available:', this.data.featured ? this.data.featured.length : 0);

        // Force the grid to be visible
        grid.style.cssText = 'display: block !important; visibility: visible !important; opacity: 1 !important; background: #f0f8ff; padding: 20px; border: 2px solid blue;';
        grid.innerHTML = '<div style="background: blue; color: white; padding: 15px; margin: 10px 0; font-size: 18px; font-weight: bold;">FEATURED SECTION LOADING...</div>';

        if (!this.data.featured || this.data.featured.length === 0) {
            console.log('No featured items to display');
            grid.innerHTML = '<p>No featured items available.</p>';
            return;
        }

        this.data.featured.forEach((item, index) => {
            console.log(`Processing featured item ${index}:`, item);
            const featuredCard = document.createElement('div');
            featuredCard.className = 'project-card';
            featuredCard.style.cssText = 'background: white; border: 1px solid #ddd; padding: 25px; margin: 20px 0; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); display: block !important; visibility: visible !important; opacity: 1 !important; min-height: 200px;';
            
            const linksHtml = Object.entries(item.links || {}).map(([key, url]) => {
                let icon = 'fas fa-external-link-alt';
                if (key === 'github') icon = 'fab fa-github';
                else if (key === 'youtube') icon = 'fab fa-youtube';
                else if (key === 'paper') icon = 'fas fa-file-alt';
                else if (key === 'certificate') icon = 'fas fa-certificate';
                else if (key === 'demo') icon = 'fas fa-play';
                else if (key === 'lab') icon = 'fas fa-university';
                
                return `<a href="${url}" class="project-link" style="display: inline-block; margin: 5px; padding: 10px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;"><i class="${icon}"></i></a>`;
            }).join('');
            
            featuredCard.innerHTML = `
                <div class="project-image" style="text-align: center; font-size: 2.5rem; color: #007bff; margin-bottom: 15px;">
                    <i class="${item.icon || 'fas fa-project-diagram'}"></i>
                </div>
                <div class="project-content">
                    <h3 style="color: #333 !important; font-size: 1.3rem; margin-bottom: 10px; font-weight: 600;">${this.getText(item.title) || 'Untitled Project'}</h3>
                    <p style="color: #666 !important; line-height: 1.6; margin-bottom: 15px; font-size: 0.95rem;">${this.getText(item.description) || 'No description available'}</p>
                    <div class="project-tags" style="margin: 15px 0;">
                        ${(item.tags || []).map(tag => `<span style="background: #28a745; color: white; padding: 4px 8px; margin: 3px; border-radius: 3px; font-size: 0.8rem; display: inline-block;">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
            
            grid.appendChild(featuredCard);
            console.log(`Featured item ${index} added to grid`);
        });
        
        console.log('Featured section population complete');
        console.log('Final featured grid children count:', grid.children.length);
    }

    // Populate projects section (for projects.html)
    populateProjects() {
        console.log('populateProjects called, data:', this.data);
        if (!this.data) return;

        const projectsGrid = document.querySelector('.projects-grid');
        console.log('Projects grid element:', projectsGrid);
        if (!projectsGrid) return;

        // Clear existing projects but keep the structure
        projectsGrid.innerHTML = '';
        console.log('Projects data:', this.data.projects);

        this.data.projects.forEach((project, index) => {
            console.log(`Processing project ${index}:`, project);
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            
            const linksHtml = Object.entries(project.links).map(([key, url]) => {
                let icon = 'fas fa-external-link-alt';
                if (key === 'github') icon = 'fab fa-github';
                else if (key === 'demo') icon = 'fas fa-play';
                
                return `<a href="${url}" class="project-link"><i class="${icon}"></i></a>`;
            }).join('');
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-content">
                    <h3>${this.getText(project.title)}</h3>
                    <p>${this.getText(project.description)}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
            console.log(`Project ${index} added to grid`);
        });
        
        console.log('Projects section population complete');

        // Set up filtering after projects are loaded
        setTimeout(() => {
            this.setupProjectFiltering();
        }, 100);
    }

    // Project filtering functionality
    setupProjectFiltering() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        if (filterBtns.length === 0 || projectCards.length === 0) {
            console.log('Filter buttons or project cards not found for filtering setup');
            return;
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
        
        console.log('Project filtering setup complete');
    }

    // Populate videos section (for youtube.html)
    populateVideos() {
        if (!this.data) return;

        const videosGrid = document.querySelector('.videos-grid');
        if (!videosGrid) return;

        videosGrid.innerHTML = '';

        this.data.videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            
            const linksHtml = Object.entries(video.links).map(([key, url]) => {
                let icon = 'fab fa-youtube';
                let text = 'Watch Video';
                if (key === 'github') {
                    icon = 'fab fa-github';
                    text = 'Source Code';
                }
                
                return `
                    <a href="${url}" class="video-link">
                        <i class="${icon}"></i>
                        <span>${text}</span>
                    </a>
                `;
            }).join('');
            
            videoCard.innerHTML = `
                <div class="video-thumbnail">
                    <div class="video-placeholder">
                        <i class="fab fa-youtube"></i>
                        <p>${video.thumbnail}</p>
                    </div>
                </div>
                <div class="video-content">
                    <h3>${this.getText(video.title)}</h3>
                    <p>${this.getText(video.description)}</p>
                    
                    <div class="video-meta">
                        <div class="video-date">
                            <i class="fas fa-calendar"></i>
                            <span>${video.publishDate}</span>
                        </div>
                        <div class="video-views">
                            <i class="fas fa-eye"></i>
                            <span>${video.views} views</span>
                        </div>
                    </div>
                    
                    <div class="video-tags">
                        ${video.tags.map(tag => `<span class="video-tag">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="video-links">
                        ${linksHtml}
                    </div>
                </div>
            `;
            
            videosGrid.appendChild(videoCard);
        });

        // Update YouTube stats
        this.populateYouTubeStats();
    }

    // Populate YouTube stats
    populateYouTubeStats() {
        if (!this.data) return;

        const youtube = this.data.youtube;
        const statCards = document.querySelectorAll('.youtube-stats .stat-card');
        
        if (statCards.length >= 4) {
            statCards[0].querySelector('.stat-number').textContent = youtube.subscriberCount;
            statCards[1].querySelector('.stat-number').textContent = youtube.totalViews;
            statCards[2].querySelector('.stat-number').textContent = youtube.videoCount;
            statCards[3].querySelector('.stat-number').textContent = youtube.hoursOfContent;
        }
    }

    // Populate achievements
    populateAchievements() {
        if (!this.data) return;

        // Update achievement stats
        const achievementStats = document.querySelectorAll('.achievements-stats .stat-number');
        if (achievementStats.length >= 4) {
            const stats = this.data.achievements.stats;
            achievementStats[0].textContent = stats.researchPapers;
            achievementStats[1].textContent = stats.competitionAwards;
            achievementStats[2].textContent = stats.researchPositions;
            achievementStats[3].textContent = stats.citations;
        }

        // Populate detailed achievements
        const achievementsGrid = document.querySelector('.achievements-grid');
        if (achievementsGrid && this.data.achievements_detailed) {
            achievementsGrid.innerHTML = '';

            this.data.achievements_detailed.forEach(achievement => {
                const achievementCard = document.createElement('div');
                achievementCard.className = 'achievement-card';
                achievementCard.setAttribute('data-category', achievement.category);

                // Generate status class and text
                let statusClass = '';
                let statusIcon = '';
                let statusText = '';

                switch(achievement.status) {
                    case 'published':
                        statusClass = 'status-published';
                        statusIcon = 'fas fa-check-circle';
                        statusText = 'Published';
                        break;
                    case 'ongoing':
                        statusClass = 'status-ongoing';
                        statusIcon = 'fas fa-clock';
                        statusText = 'Ongoing';
                        break;
                    case 'completed':
                        statusClass = 'status-completed';
                        statusIcon = 'fas fa-medal';
                        statusText = achievement.type === 'competition' ? 'Gold Medal' : 'Completed';
                        break;
                    default:
                        statusClass = 'status-completed';
                        statusIcon = 'fas fa-check';
                        statusText = 'Completed';
                }

                // Generate achievement type class and text
                let typeClass = '';
                let typeText = '';

                switch(achievement.type) {
                    case 'paper':
                        typeClass = 'paper';
                        typeText = 'Research Paper';
                        break;
                    case 'competition':
                        typeClass = 'competition';
                        typeText = 'Competition';
                        break;
                    case 'position':
                        typeClass = 'position';
                        typeText = 'Position';
                        break;
                    default:
                        typeClass = 'paper';
                        typeText = 'Achievement';
                }

                // Generate links HTML
                const linksHtml = Object.entries(achievement.links).map(([key, url]) => {
                    let icon = 'fas fa-external-link-alt';
                    let text = key.charAt(0).toUpperCase() + key.slice(1);

                    switch(key) {
                        case 'github':
                            icon = 'fab fa-github';
                            text = 'Source Code';
                            break;
                        case 'paper':
                            icon = 'fas fa-external-link-alt';
                            text = 'Read Paper';
                            break;
                        case 'certificate':
                            icon = 'fas fa-certificate';
                            text = 'Certificate';
                            break;
                        case 'lab':
                            icon = 'fas fa-university';
                            text = 'Lab Website';
                            break;
                        case 'publications':
                            icon = 'fas fa-file-alt';
                            text = 'Publications';
                            break;
                        case 'citations':
                            icon = 'fas fa-quote-right';
                            text = achievement.citations ? `${achievement.citations} Citations` : 'Citations';
                            break;
                        case 'news':
                            icon = 'fas fa-newspaper';
                            text = 'News Article';
                            break;
                        case 'report':
                            icon = 'fas fa-chart-line';
                            text = 'Strategy Report';
                            break;
                        case 'tutorials':
                            icon = 'fas fa-play';
                            text = 'Video Tutorials';
                            break;
                        case 'materials':
                            icon = 'fab fa-github';
                            text = 'Lab Materials';
                            break;
                        case 'preprint':
                            icon = 'fas fa-file-pdf';
                            text = 'Preprint';
                            break;
                    }

                    return `
                        <a href="${url}" class="achievement-link">
                            <i class="${icon}"></i>
                            <span>${text}</span>
                        </a>
                    `;
                }).join('');

                // Generate details HTML
                const detailsHtml = achievement.details ? `
                    <div class="achievement-details">
                        <h4>Key ${achievement.type === 'competition' ? 'Details' : achievement.type === 'position' ? 'Responsibilities' : 'Contributions'}:</h4>
                        <ul>
                            ${achievement.details.contributions.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                ` : '';

                achievementCard.innerHTML = `
                    <div class="achievement-header">
                        <div class="achievement-type ${typeClass}">${typeText}</div>
                        <div class="achievement-icon">
                            <i class="${achievement.icon}"></i>
                        </div>
                        <div class="achievement-title">${this.getText(achievement.title)}</div>
                        <div class="achievement-subtitle">${this.getText(achievement.subtitle)}</div>
                    </div>
                    <div class="achievement-content">
                        <div class="achievement-meta">
                            <div class="achievement-date">
                                <i class="fas fa-calendar"></i>
                                <span>${achievement.date}</span>
                            </div>
                            <div class="achievement-status ${statusClass}">
                                <i class="${statusIcon}"></i>
                                <span>${statusText}</span>
                            </div>
                        </div>
                        
                        <p class="achievement-description">${this.getText(achievement.description)}</p>
                        
                        ${detailsHtml}
                        
                        <div class="achievement-links">
                            ${linksHtml}
                        </div>
                    </div>
                `;

                achievementsGrid.appendChild(achievementCard);
            });

            // Set up filtering after achievements are loaded
            setTimeout(() => {
                if (typeof setupAchievementFiltering === 'function') {
                    setupAchievementFiltering();
                }
            }, 100);
        }
    }

    // Populate education timeline
    populateEducation() {
        if (!this.data) return;

        const timeline = document.querySelector('.timeline');
        if (!timeline) return;

        timeline.innerHTML = '';

        this.data.education.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${this.getText(item.title)}</h3>
                    <h4>${this.getText(item.institution)}</h4>
                    <span class="timeline-date">${item.period}</span>
                    <p>${this.getText(item.description)}</p>
                </div>
            `;
            
            timeline.appendChild(timelineItem);
        });
    }

    // Initialize all content
    async initializeContent() {
        if (this.isInitialized) {
            console.log('Already initialized, skipping...');
            return;
        }

        console.log('=== DataLoader Initialization Started ===');
        console.log('Current URL:', window.location.href);
        console.log('Current pathname:', window.location.pathname);
        
        await this.loadData();
        if (!this.data) {
            console.error('Failed to load website data');
            this.data = this.fallbackData;
        }

        // Ensure we have data before proceeding
        if (!this.data) {
            console.error('No data available, cannot initialize content');
            return;
        }

        this.isInitialized = true;

        const pathname = window.location.pathname.toLowerCase();
        console.log('Processed pathname:', pathname);
        console.log('Available data sections:', Object.keys(this.data));

        // Always populate basic content
        console.log('Populating personal info...');
        this.populatePersonalInfo();
        
        // Page-specific content loading
        if (pathname.includes('projects.html') || pathname.endsWith('projects.html')) {
            console.log('=== PROJECTS PAGE DETECTED ===');
            console.log('Calling populateProjects...');
            this.populateProjects();
        } else if (pathname.includes('youtube.html') || pathname.endsWith('youtube.html')) {
            console.log('=== YOUTUBE PAGE DETECTED ===');
            console.log('Calling populateVideos...');
            this.populateVideos();
        } else if (pathname.includes('achievements.html') || pathname.endsWith('achievements.html')) {
            console.log('=== ACHIEVEMENTS PAGE DETECTED ===');
            console.log('Calling populateAchievements...');
            this.populateAchievements();
        } else {
            // This is index.html or main page
            console.log('=== INDEX/MAIN PAGE DETECTED ===');
            console.log('Available skills data:', this.data.skills ? this.data.skills.length + ' skill categories' : 'No skills data');
            console.log('Available featured data:', this.data.featured ? this.data.featured.length + ' featured items' : 'No featured data');
            console.log('Available education data:', this.data.education ? this.data.education.length + ' education items' : 'No education data');
            
            console.log('Calling populateSkills...');
            this.populateSkills();
            
            console.log('Calling populateFeatured...');
            this.populateFeatured();
            
            console.log('Calling populateEducation...');
            this.populateEducation();
        }
        
        console.log('=== Content initialization complete ===');
    }
}

// Global instance
const dataLoader = new WebsiteDataLoader();

// Make dataLoader globally accessible for debugging
window.dataLoader = dataLoader;

// Add a global function to manually test data loading
window.testDataLoader = async function() {
    console.log('Manual data loader test...');
    await dataLoader.initializeContent();
    console.log('Current data:', dataLoader.data);
    return dataLoader.data;
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing dataLoader...');
    // Add a small delay to ensure any other scripts have loaded
    setTimeout(() => {
        dataLoader.initializeContent();
    }, 100);
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WebsiteDataLoader;
} 
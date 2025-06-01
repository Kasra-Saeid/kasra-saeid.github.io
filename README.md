# Kasra's AI Engineering Portfolio

A modern, responsive portfolio website showcasing AI engineering projects, research papers, achievements, and educational content.

## 🌟 Features

- **Dynamic Content Management**: JSON-based content system for easy updates
- **Responsive Design**: Optimized for all devices and screen sizes
- **Multi-language Support**: English and Persian language options
- **Interactive Sections**: 
  - Personal information and skills
  - Featured projects and research papers
  - Project portfolio with filtering
  - YouTube educational content
  - Achievements and awards
  - Education timeline

## 🚀 Live Demo

Visit the live website: [https://yourusername.github.io/portfoliowebsite](https://yourusername.github.io/portfoliowebsite)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design principles
- **Icons**: Font Awesome, Devicon
- **Fonts**: Google Fonts (Inter)
- **Data Management**: JSON-based content system
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
portfoliowebsite/
├── index.html              # Main landing page
├── projects.html           # All projects showcase
├── youtube.html            # YouTube channel content
├── achievements.html       # Awards and achievements
├── styles.css              # Main stylesheet
├── script.js               # Core JavaScript functionality
├── dataLoader.js           # Dynamic content loading system
├── data.json               # Content database
└── README.md               # Project documentation
```

## 🔧 Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/portfoliowebsite.git
   cd portfoliowebsite
   ```

2. **Local Development**:
   ```bash
   # Start a local server to avoid CORS issues
   python -m http.server 8000
   # or
   npx http-server
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

## 📝 Content Management

The website uses a JSON-based content management system. Update `data.json` to modify:

- Personal information and bio
- Skills and technologies
- Featured projects
- Project portfolio
- YouTube videos
- Achievements and awards
- Education timeline

### Example data structure:
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": {"en": "English bio", "fa": "Persian bio"}
  },
  "skills": [...],
  "featured": [...],
  "projects": [...]
}
```

## 🌐 Deployment

The website is automatically deployed using GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Visit your live site at `https://yourusername.github.io/portfoliowebsite`

## 🎨 Customization

### Colors & Themes
- Primary colors defined in CSS variables
- Easy theme switching capability
- Dark/light mode support

### Adding New Sections
1. Add data structure to `data.json`
2. Create populate function in `dataLoader.js`
3. Add HTML structure and CSS styling
4. Update navigation if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: mail.kasrasaeid[at]gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ for showcasing AI engineering and quantitative development skills.** 
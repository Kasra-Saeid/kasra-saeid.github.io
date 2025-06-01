# Content Management Guide

This guide explains how to update the content of your portfolio website. The website uses a dynamic content management system that loads data from multiple sources.

## 📁 Content Sources

### 1. Primary Source: `data.json`
- **Purpose**: Main content storage in JSON format
- **Best for**: Regular content updates when hosting on a web server
- **Location**: Root directory (`/data.json`)

### 2. Fallback Source: `dataLoader.js`
- **Purpose**: Embedded content for maximum compatibility
- **Best for**: GitHub Pages hosting and static file serving
- **Location**: Inside the `WebsiteDataLoader` class under `fallbackData`

## 🔄 How It Works

The website automatically tries to load content in this order:
1. First, tries to load from `data.json` file
2. If that fails (e.g., CORS issues, file not found), uses embedded fallback data
3. This ensures your website always works, regardless of hosting environment

## ✏️ Updating Content

### Method 1: Edit JSON File (Recommended for Web Servers)

Edit the `data.json` file to update your content:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    "university": "Your University",
    "location": "Your Location",
    "bio": {
      "en": "Your bio in English",
      "fa": "Your bio in Persian"
    }
  }
}
```

### Method 2: Edit Embedded Data (Recommended for GitHub Pages)

Edit the `fallbackData` object in `dataLoader.js`:

```javascript
this.fallbackData = {
  "personal": {
    "name": "Your Name",
    // ... your content
  }
}
```

## 📝 Content Structure

### Personal Information
```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "university": "Your University",
    "location": "Your City, Country",
    "bio": {
      "en": "English bio",
      "fa": "Persian bio (optional)"
    },
    "about": {
      "en": "Detailed about section in English",
      "fa": "Detailed about section in Persian (optional)"
    },
    "stats": {
      "projects": "50+",
      "experience": "3+", 
      "technologies": "10+"
    }
  }
}
```

### Skills Section
```json
{
  "skills": [
    {
      "category": {
        "en": "Machine Learning",
        "fa": "یادگیری ماشین"
      },
      "icon": "fas fa-brain",
      "items": ["TensorFlow", "PyTorch", "Scikit-learn"]
    }
  ]
}
```

### Featured Work
```json
{
  "featured": [
    {
      "id": "unique-project-id",
      "type": "research|project|achievement|position|content",
      "title": {
        "en": "Project Title in English",
        "fa": "Project Title in Persian"
      },
      "description": {
        "en": "Description in English",
        "fa": "Description in Persian"
      },
      "icon": "fas fa-icon-name",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "links": {
        "github": "https://github.com/username/repo",
        "demo": "https://demo-url.com",
        "paper": "https://paper-url.com"
      }
    }
  ]
}
```

### Projects Section
```json
{
  "projects": [
    {
      "id": "project-id",
      "category": "ai-ml|web-dev|data-science|quant-finance",
      "title": {
        "en": "Project Title",
        "fa": "عنوان پروژه"
      },
      "description": {
        "en": "Project description",
        "fa": "توضیحات پروژه"
      },
      "icon": "fas fa-icon",
      "tags": ["Technology1", "Technology2"],
      "links": {
        "github": "https://github.com/...",
        "demo": "https://demo.com"
      }
    }
  ]
}
```

### YouTube Content
```json
{
  "youtube": {
    "channelName": "Your Channel Name",
    "subscriberCount": "1.2K",
    "totalViews": "25K", 
    "videoCount": "15",
    "hoursOfContent": "48",
    "channelLink": "https://youtube.com/@yourchannel"
  },
  "videos": [
    {
      "id": "video-id",
      "title": {
        "en": "Video Title",
        "fa": "عنوان ویدیو"
      },
      "description": {
        "en": "Video description",
        "fa": "توضیحات ویدیو"
      },
      "thumbnail": "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
      "url": "https://youtube.com/watch?v=VIDEO_ID",
      "views": "5.2K",
      "duration": "12:34",
      "publishedDate": "2024-01-15"
    }
  ]
}
```

### Achievements
```json
{
  "achievements": {
    "stats": {
      "researchPapers": 5,
      "competitionAwards": 12,
      "researchPositions": 3,
      "citations": 42
    },
    "items": [
      {
        "id": "achievement-id",
        "type": "research|competition|position|publication",
        "title": {
          "en": "Achievement Title",
          "fa": "عنوان دستاورد"
        },
        "subtitle": {
          "en": "Subtitle or Organization",
          "fa": "زیرعنوان یا سازمان"
        },
        "description": {
          "en": "Achievement description",
          "fa": "توضیحات دستاورد"
        },
        "date": "2024",
        "status": "completed|ongoing|upcoming",
        "icon": "fas fa-trophy",
        "links": {
          "certificate": "https://...",
          "github": "https://...",
          "paper": "https://..."
        }
      }
    ]
  }
}
```

## 🌐 Multilingual Support

The website supports both English and Persian (Farsi) content:

### Adding Multilingual Text
```json
{
  "title": {
    "en": "English text",
    "fa": "متن فارسی"
  }
}
```

### Single Language Text
```json
{
  "title": "English only text"
}
```

If only one language is provided, it will be used for both languages.

## 🎨 Customization Options

### Icons
Use Font Awesome icon classes:
- `fas fa-brain` - Brain icon
- `fas fa-code` - Code icon  
- `fab fa-github` - GitHub icon
- `fas fa-external-link-alt` - External link icon

### Categories
For projects, use these predefined categories:
- `ai-ml` - AI & Machine Learning
- `web-dev` - Web Development
- `data-science` - Data Science
- `quant-finance` - Quantitative Finance

### Link Types
Supported link types with automatic icons:
- `github` - GitHub repository
- `demo` - Live demo
- `paper` - Research paper
- `certificate` - Certificate
- `youtube` - YouTube video
- `website` - Website link

## 🚀 Publishing Changes

### For GitHub Pages:
1. **Update the embedded data in `dataLoader.js`** (recommended)
2. Commit and push changes
3. GitHub Pages will automatically update

### For Web Servers:
1. **Update `data.json`** (easier to edit)
2. Upload files to your server
3. Changes take effect immediately

## 🧪 Testing Your Changes

1. **Local Testing:**
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/test.html`

2. **Online Testing:**
   Visit your GitHub Pages URL + `/test.html`

3. **Debug Console:**
   Open browser developer tools and check for any errors

## 📋 Content Checklist

Before publishing, ensure:
- [ ] All required personal information is updated
- [ ] Contact email is correct
- [ ] Skills reflect your current expertise
- [ ] Featured items showcase your best work
- [ ] All links are working and correct
- [ ] Both English and Persian content (if desired)
- [ ] Icons are displaying correctly
- [ ] No JavaScript errors in console

## 🔧 Troubleshooting

### Data Not Loading?
1. Check browser console for errors
2. Ensure JSON syntax is valid
3. Verify file paths are correct
4. Test with the test.html page

### Icons Not Displaying?
1. Check Font Awesome icon names
2. Ensure internet connection for CDN
3. Verify icon class format: `fas fa-icon-name`

### Language Switching Not Working?
1. Ensure multilingual objects have `en` and `fa` keys
2. Check browser console for errors
3. Verify dataLoader is properly initialized

## 📞 Need Help?

If you encounter issues:
1. Check the test page: `/test.html`
2. Review browser console for errors
3. Refer to the example data structure
4. Test with minimal content first

---

**Remember**: Always backup your content before making major changes! 
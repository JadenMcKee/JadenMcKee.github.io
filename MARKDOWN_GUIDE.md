# Markdown Guide for Chirpy Theme

Yes, **Chirpy uses Markdown syntax** for all content! Here's how it works:

## How Chirpy Displays Content

### Home Page (`index.html`)
- The `layout: home` automatically displays all posts from `_posts/` folder
- Posts are shown in reverse chronological order (newest first)
- The welcome message I added will appear above the posts

### Posts (`_posts/` folder)
- All posts must be in the `_posts/` folder
- Filename format: `YYYY-MM-DD-title.md`
- Example: `2025-12-15-sample-project-automotive-brake-system.md`

## Post Structure

Every post needs **front matter** (YAML metadata at the top):

```markdown
---
title: "Your Project Title"
date: 2025-12-15
categories:
  - Design
  - Analysis
tags:
  - FEA
  - SolidWorks
math: true
toc: true
---

## Your Content Here

Write your content using Markdown syntax below the front matter.
```

## Markdown Syntax Cheat Sheet

### Headings
```markdown
# H1 - Main Title
## H2 - Section
### H3 - Subsection
#### H4 - Sub-subsection
```

### Text Formatting
```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Lists
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list
2. Second item
```

### Links and Images
```markdown
[Link text](https://example.com)
![Image alt text](/assets/img/image.png)
```

### Code Blocks
````markdown
```python
def hello():
    print("Hello, World!")
```
````

### Tables
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

### Math Equations (LaTeX)
```markdown
Inline math: $E = mc^2$

Block equation:
$$
F = ma
$$
```

### Blockquotes
```markdown
> This is a quote
> Multiple lines
```

## Why Your Page Might Be Empty

1. **No posts in `_posts/` folder** - Add Markdown files
2. **Future-dated posts** - Jekyll hides posts with future dates by default
3. **Missing front matter** - Posts need YAML front matter
4. **Build cache** - Try rebuilding the site

## Quick Fixes

### Check if posts are showing:
1. Verify files exist in `_posts/` folder
2. Check post dates are not in the future
3. Make sure front matter is correct (between `---` markers)
4. Rebuild the site: `bundle exec jekyll serve`

### Add a new post:
1. Create file: `_posts/2025-12-22-my-project.md`
2. Add front matter with title, date, categories, tags
3. Write content in Markdown below
4. Push to GitHub - site will rebuild automatically

## Example Post Template

```markdown
---
title: "My Engineering Project"
date: 2025-12-22
categories:
  - Design
tags:
  - CAD
  - Prototyping
math: true
toc: true
---

## Project Overview

Brief description of your project.

## Objectives

- Goal 1
- Goal 2
- Goal 3

## Design Process

Detailed explanation of your design process.

### CAD Modeling

Used **SolidWorks** to create the 3D model.

![Design Image](/assets/img/my-design.png)

## Results

| Metric | Value |
|--------|-------|
| Weight | 2.5 kg |
| Efficiency | 95% |

## Conclusion

Summary of findings and future work.
```

## Need Help?

- [Markdown Guide](https://www.markdownguide.org/)
- [Chirpy Theme Docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki)
- [Jekyll Documentation](https://jekyllrb.com/docs/)

---

**Your posts should now appear on the home page!** If they don't, check the build logs in GitHub Actions.

# Main Title

## 📋 Table of contents

- [Overview](#-overview)
  - [The functionality](#-the-functionality)
  - [Screenshot](#-screenshot)
  - [Links](#-links)
- [Workin process](#-working-process)
  - [Creating with](#-creating-with)
  - [Inside the project](#-inside-the-project)
  - [Useful resources](#-useful-resources)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)
----
## Overview

### The functionality
Users should be able to:

- Add a title, expirence date and how much money they plane to expense;
- Using three different colored cards, users can plan their expense in a hierarchical way;
- It should be possible to mark items already payable or to remove them from the list;

### Screenshot
![](./public/img/Screenshot--GitHub.jpg)

### Links
- Live Site URL: [Live]()

### Working process
- Describing the whole process...

### Creating with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Website

### Inside the project
<details>
  <summary markdown="span">Look inside 👀</summary>

```html
<div class="cards__column card card--sedans">
  <div class="card__icon"><img src="images/icon-sedans.svg" alt="Car icon"></div>
  <h2 class="card__title">Sedans</h2>
  <p class="card__text">
    Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
    or on your next road trip.
  </p>
  <a href="#" class="card__button card__button--text-gold">Learn More</a>
</div>
```

Short describing the code block...
```css
.card__text {
	flex: 1 0 100%;
}
```
Short describing the code block...
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
</details>  
<br>

### Useful resources
  Add some useful resources...

### Author
- Website - [Serhii "Gr[i]fano" Orlenko"](https://grifano.webflow.io/)
- Twitter - [@Grifano](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Grifano](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

### Acknowledgments
🙏 To Ahmad for his [article](https://ishadeed.com/article/custom-scrollbars-css/) about styling custom scrool-bar.  
🙏 To David Adeneye for his [article](https://www.smashingmagazine.com/2020/08/mastering-props-proptypes-react/) where his explain what is a PropTypes.  
🙏 To Rafael Leitão thanks to his [post](https://dev.to/carlosrafael22/using-refs-in-react-functional-components-part-1-useref-callback-ref-2j5i), I understood how useRef is works.  
🙏 To Shedrack Akintayo for his [article](https://www.smashingmagazine.com/2020/05/styling-components-react/) about styling React components.  
🙏 To Michał Bednarz for his [article](https://dev.to/mr_frontend/absolute-imports-in-create-react-app-3ge8) about "Absolute import".  
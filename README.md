# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Links

- Solution URL: https://github.com/ccrump1280/news-homepage-main/tree/master
- Live Site URL: https://your-live-site-url.com

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JQuery

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

The trickiest part of this project for me was darkening the app behind the pop-up mobile menu. To solve the problem, I created 
a CSS class with the before Psuedo-element to overlay the container of the page content. The mobile menu container was placed outside of this container so that it would not be effected by the overlay. The overlay would be added or removed based on click events on the 
corresponding menu icon. 

```css
.darken:before {
        background: black;
        content: "";
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        }
```
```js
$(document).ready(function() {
    $("#mobile-menu-icon").click(openMenu);
    $("#mobile-menu-icon-close").click(closeMenu);
    function openMenu(){
        $(".mobile-navigation").css("display", "block");
        $(".content-container").addClass("darken");
    };
    function closeMenu(){
        $(".mobile-navigation").css("display", "none");
        $(".content-container").removeClass("darken");
    }
});
```

### Continued development

This project was made with a desktop-first development proccess. I do not normally do this as mobile-first is more commonly 
accepted, but I wanted to try a desktop-first approach at least once. This project was relatively simple to convert from desktop 
to mobile. Going further I would like to learn from the community if there are cases where desktop-first approaches are acceptable.


## Author

- Frontend Mentor - [@ccrump1280](https://www.frontendmentor.io/profile/ccrump1280)




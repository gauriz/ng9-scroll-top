# 'Scroll To Top' Library

# ng9-scroll-top

ng9-scoll-top Library is made using Angular CLI 9.1.7


# Demo (example)

 Watch this [demo page](https://gauriz.github.io/ng9-scroll-to-top-demo/)
 
Or play with it live on [stackblitz.com/edit/ng9-scroll-top](https://stackblitz.com/edit/ng9-scroll-topl)


## Installation

> ng add ng9-scroll-top

```javascript

import  {  ScrollToTopModule  }  from  'ng9-scroll-top';
............................................................................

@NgModule({
imports:  [ ScrollToTopModule, ... ],
providers:  [... ],
bootstrap:  [AppComponent]
})
export  class  AppModule  {  }

```

## Usage

### [](https://www.npmjs.com/package/ng9-scroll-top#component-way)Component way

In **component.html**  you just need to add the selector of the button wherever needed.

<ng9-scroll-top></ng9-scroll-top>


## Options

OPTION|TYPE|DEFAULT| DESCRIPTION| 
|-|-|-|-|
|backgroundColor|`string`|purple| Background Color|
|color |`string` |white| Color|
|height |`string` |50px| Height |
|width |`string` |50px| Width |
|lineHeight |`string` |55px| Minimal height of line boxes within the element|
|fontSize |`string` |30px| Font size of the icon/character given as text|
|borderRadius |`string` |20%| Border Radius in % (0 : Square, 50% : circle)|
|right |`string` |50px| Px value from the right-most border|
|bottom|`string` |50px| Px value from the bottom-most border|
|text |`string` |↟ | Will be taken to display if no svgIcon link is specified|
|svgIcon|`string` |null| Icon link to be displayed|

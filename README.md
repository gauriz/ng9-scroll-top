# 'Scroll To Top' Library

# ng9-scroll-top

ng9-scoll-top Library is made using Angular CLI 9.1.7


# Demo (example)

 Watch this [demo page](https://ng9-scroll-top.stackblitz.io/)
 
Or play with it live on [stackblitz.com/edit/ng9-scroll-top](https://stackblitz.com/edit/ng9-scroll-top)


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

OPTION|TYPE|DEFAULT| DESCRIPTION| UNIT|
|-|-|-|-|-|
|backgroundColor|`string`|purple| Background Color|
|color |`string` |white| Color|
|height |`number` |50| Height |px|
|width |`number` |50| Width |px|
|lineHeight |`number` |55| Minimal height of line boxes within the element|px|
|fontSize |`number` |30| Font size of the icon/character given as text|px|
|borderRadius |`string` |20%| Border Radius in % (0 : Square, 50% : circle)|
|right |`number` |50| Px value from the right-most border|px|
|bottom|`number` |50| Px value from the bottom-most border|px|
|text |`string` |↟| Will be taken to display if no svgIcon link is specified|
|svgIcon|`string` |null| Icon link to be displayed|
|type|`string` |pulse| Type of hovered button|
|breakpoints|`string[]` |null| Breakpoints/ Fragment ID's to be navigated to|


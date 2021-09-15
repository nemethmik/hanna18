# hanna18
This project is basically my main experiment with configuring WebPack5 in general and for web components specifically to build 
a webcomponent mobile app with Webpack/NodeJS and TypeScript (titled after Hanna Davyskiba 18 BLR)

The project was created on GitHub site with a NodeJS gitignore, MIT license and a README. Then it was cloned on a local computer to start experimenting and developing.
Here are the steps that were followed for scaffolding up the project:
- *main* - is empty has only this readme 
- *01webpacksetup* - it was a dead end since it didn't use the excellent *webpack-cli init*
  - [WebPack setup with TypeScrip](https://youtu.be/4lpmVZdj12g)
- [02webpacksetuptheproperway](https://github.com/nemethmik/hanna18/tree/02webpacksetuptheproperway) is a detailed step-by-step demonstration how to use *webpack-cli init*
- *03webpackwithlit* seems to be the same as 02, even Lit wasn't installed into the project. This branch could be safely deleted.
- [04demoviewwithlit](https://github.com/nemethmik/hanna18/tree/04demoviewwithlit) had a basic view from a Marcus Hellberg video or maybe from his tutorial.
  ```typescript
  import { html, render, LitElement, TemplateResult } from 'lit';
  import { customElement,property } from 'lit/decorators.js';
  @customElement('minimal-view')
  export class MinimalView extends LitElement {
      @property() name = "Hanna 18"
      override render(): TemplateResult {
          return html`<h1>My View ${this.name}</h1>`;
      }
  }
  window.addEventListener("load",()=>{
      render(html`<h1>Hello</h1><minimal-view></minimal-view>`,document.getElementById("root"))
  })
  ```
  Here *tsconfig.json* has the proper **"target": "ES2021"** setting which is mandatory for web components with Lit Element decorators.

## Web Components
[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) are with us for a while and market/community/business acceptance os mature enough: [Lit (formerly Lit Element)](https://lit.dev/) and Stencil, Ionic are librraies based on Web Components. Number of these videos are from  Marcus Hellberg (vaadin).
The [vaadin core web components](https://vaadin.com/components) are [free on GitHub](https://github.com/vaadin/vaadin) and excellent, perfectly fine for business applications. Most of them are free including a decent grid; some of them are not free, but those features are not really relevant to mobile applications.

- [Build an app with WebComponents in 9 minutes, 2018.10.11](https://youtu.be/mTNdTcwK3MM) shows explains the basics with plain JS.
- [Web Components Crash Course, 2020](https://youtu.be/PCWaFLy3VUo) a decent example app from Traversy.
- [How to use Web Components in a JavaScript project, 2018.12.12](https://youtu.be/88Sa-SlHRxk)
  - Here is the accompanying website by Marcus Hellberg [using-web-components](https://vaadin.com/learn/tutorials/using-web-components)
- [Using Web Components in React, 2018.12.12](https://youtu.be/2B4rTQYJHL8)
- [lit-plugin Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)

Eventually, I found that Li/Lit-Elements just like Stencil are self contained fully functional component technology, and it needs no React or any frameworks.
Practically, React is the older technology, and is irrelevant when you decide to go web components.

[shoelace](https://shoelace.style/) is another excellent web component library which has even an [image comparer](https://shoelace.style/components/image-comparer) but has no list nor grid/table.

Form handling requires special attention, [Form Data Event](https://glitch.com/~formdata-event), which is supported by most browsers (Chrome, Edge).
[more-capable-form-controls](https://web.dev/more-capable-form-controls/) is to show even more sophisticated custom controls for forms.

[SAP ui5 webcomponents](https://sap.github.io/ui5-webcomponents/) could be an excellent option for business applications, since it has a number of components typically needed for mobile business apps. However, it is not written in TypeScript, which is a shame for an enterprise level solution.
Vaadin seems to have better components in this regard.

[Microsoft Fluent UI](https://github.com/microsoft/fluentui) has a webcomponent implementation next to the react component libraries. Fluent UI has the Azure look-and-feel.
The library is based on [Microsoft Fast](https://github.com/microsoft/fast) web component elemnt toolset.
Of course Microsoft web component technology is written in TypeScript.



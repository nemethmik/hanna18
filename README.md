# hanna18
A webcomponent mobile app with Webpack/NodeJS and Typescript (Hanna Davyskiba 18 BLR)

The project was created on GitHub site with a NodeJS gitignore, MIT license and a README. Then it was cloned on a local computer to start experimenting and developing.
Here are the steps that were followed for scaffolding up the project:
- [WebPack setup with TypeScrip](https://youtu.be/4lpmVZdj12g)
  - A 01webpacksetup branch was created for the experimental video, but eventually at 5:50 I found that what the instructor was doing is not really the proper way.
  - So, I create a new branch *02webpacksetuptheproperway* to experiment with the proper webpack project setup process which is based on [webpack-cli init](https://github.com/webpack/webpack-cli/blob/master/packages/generators/INIT.md)
- Instead of using *npm init* use **npx webpack init* which will have a number of questions including support for typescrip and SASS. Here are the sequence without installing webpack-cli globally.



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



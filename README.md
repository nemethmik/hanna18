# hanna18
A webcomponent mobile app with Webpack/NodeJS and Typescript (Hanna Davyskiba 18 BLR)

The project was created on GitHub site with a NodeJS gitignore, MIT license and a README. Then it was cloned on a local computer to start experimenting and developing.
Here are the steps that were followed for scaffolding up the project:
- [WebPack setup with TypeScrip](https://youtu.be/4lpmVZdj12g)
  - A 01webpacksetup branch was created for the experimental video
  - npm init
  - npm i -D webpack
    - When you just enter *npx webpack* it will ask if you want to install *webpack-cli*, smart design from webpack team. When I entered yes, eventually I received an error since Windows didn't allow some wripe operations, so I executed the command manually.
  - npm i -D webpack-cli
  - Running *npx webpack* at this stage gives these errors and warnings:
    - The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment. You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
    - ERROR in main Module not found: Error: Can't resolve './src' in 'N:\GitHub\hanna18'
      That is, the default input for webpack should be placed in the **src** subfolder. 
    - Continue watching at 4:00
    - So, just create an *src* folder and move the *index.js* into that folder, then running again *npx webpack* will create a *dist* folder with a *main.js* and the default build is production, that is it removes anz code that is irrelevent and not doing anything.
  - At this point you can add a *build* command to *package.json* to use *npm run build*
  - If you rename *index.js* in the src folder to *index.ts* running build gives an error *Module not found: Error: Can't resolve './src' in ...* which actually means that it cannot find an index.js. This is the point when you need to create a webpack configuration file to handle typescript files, too.
  - In the video the instructor manually creating webpack configuration file, but there is a lot more [elegant and official](https://webpack.js.org/api/cli/#init) way, since then the newer versions of webpack will have a chance to create a more uptodate version of config: **npx webpack init** 
    - But, idea for *webpack init* is to replace npm init and tsc --init, too, since it will ask a handful of questions, and one of them is to support typescript, so the way this instructor explained how to setup a webpack project with typescript support is absolutely not the recommended way.
    - Therefore, **I abort this branch** and restart a branch *02webpacksetuptheproperway* from the master branch.



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



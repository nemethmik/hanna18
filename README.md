# hanna18
A webcomponent mobile app with Webpack/NodeJS and Typescript (Hanna Davyskiba 18 BLR)

The project was created on GitHub site with a NodeJS gitignore, MIT license and a README. Then it was cloned on a local computer to start experimenting and developing.

I started watching [WebPack setup with TypeScrip](https://youtu.be/4lpmVZdj12g) which is not bad video at all. 
I created *01webpacksetup* branch for experimenting and remaikng according to the video, but eventually at 5:50 I found that what the instructor was doing is not really the proper way.
So, I create a new branch *02webpacksetuptheproperway* to experiment with [webpack-cli init](https://github.com/webpack/webpack-cli/blob/master/packages/generators/INIT.md)
When a branch is created on a different computer, the Git in Visual Studio Code doesn't automatically fetch this branch. The **Git: Autofetch** should be set to true, and then you can select any branch from all remote branches.

When using *webpack-cli init* don't use *npm init* since *npx webpack init* will generate a package.json, too.
As well as it will have a number of questions including support for typescrip and SASS. 
Here are the sequence of steps I setup the project. The inspiration came from the [webpack-cli init documentation](https://github.com/webpack/webpack-cli/blob/master/packages/generators/INIT.md):
- **npm i webpack-cli** 
  - Since at this point we have no package.json, this will give a warning for a missing package.json, but generate a package-lock.json.
- **npx webpack-cli init**
  - This will request to auto-install first *webpack* then *@webpack-cli/generators* package, since they are required for the init command.
  - After installing these two packages, it asks a handful of questions:
    - Which of the following JS solutions do you want to use? **Typescript**
    - Do you want to use webpack-dev-server? Yes
    - Do you want to simplify the creation of HTML files for your bundle? **Yes**
      - This is very important to get an *index.html* generated along with the [html webpack plugin](https://www.npmjs.com/package/html-webpack-plugin). Webpack without plugins and loaders understands only plain javascript files, it is a javascript bundler. 
    - Do you want to add PWA support? Yes
    - Which of the following CSS solutions do you want to use? CSS only
    - Will you be using PostCSS in your project? No
    - Do you want to extract CSS for every file? No
    - Do you like to install prettier to format generated configuration? Yes
    - Since I already had a README.md it asked what to do, and I picked, don't override. 
  - Eventually it creates these files:
    - package.json
    - src/index.ts 
    - index.html
      - The index.html has no any reference since webpack automatically generates the links to the bundled scripts.
    - webpack.config.js
    - tsconfig.json
- **npm i bootstrap popper bootstrap-icons** 
- **npm i -D @types/bootstrap** This is very important otherwise `import { Toast } from "bootstrap"` shows an error in index.ts.
  - then, I added a root div element to the index.html `<div id="root"></div>`
  - imported the bootstrap CSS into *index.ts* `import "bootstrap/dist/css/bootstrap.min.css"`
  - added a dynamically generated content (a bootstrap styled button) to *index.ts*
    ```
    window.addEventListener("load",() => {
        const root = document.getElementById("root")
        root.innerHTML = `<button type="button" class="btn btn-primary">Say Hello Webpack</button>`
    })
    ```
  - added `<meta name="viewport" content="width=device-width, initial-scale=1.0">` to the header part in index.html.
  - copied the [Bootstrap Toast](https://getbootstrap.com/docs/5.1/components/toasts/) sample and adjusted a bit. For this I imported the Toast component from Bootstrap `import { Toast } from "bootstrap"` Bootstrap requires *popper*.
  - used [Bootstrap icons](https://icons.getbootstrap.com/) in the example like so `import "bootstrap-icons/font/bootstrap-icons.css"` and `<i class="bi bi-book-half">`
- [Importing Other Assets into TypeScript](https://webpack.js.org/guides/typescript/#importing-other-assets) explains that we should create a *custom.d.ts* and add it to the files secion in *tsconfig.json* like so `"files": ["src/index.ts","src/custom.d.ts"]` if we want to use the import syntax: `import logo from "./bootstrap-logo.svg"` The simpler solution is just use the *require* syntax, which doesn't need this custom.d.ts `const logo = require("./bootstrap-logo.svg")` 
Here is an example how the asset can be used in an HTML template: `<img src=${logo} width=30 class="rounded me-2" alt="logo">`
- To get source maps two things are to be done:
  - Add `"sourceMap": true,` in *tsconfig.json*
  - Add `devtool:"inline-source-map"` to *webpack.config.js*

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



[node]: https://nodejs.org/en
[pnpm]: https://pnpm.io/installation
[bun]: https://bun.com/docs/installation
[yarn]: https://yarnpkg.com/getting-started/install
[demo]: https://vite-three-js.d1a.app
[license]: https://github.com/doinel1a/vite-three-js/blob/main/LICENSE
[code-of-conduct]: https://github.com/doinel1a/vite-three-js/blob/main/CODE_OF_CONDUCT.md
[issues]: https://github.com/doinel1a/vite-three-js/issues
[pulls]: https://github.com/doinel1a/vite-three-js/pulls
[browserslist]: https://browsersl.ist/#q=last+3+versions%2C%3E+0.2%25%2C+not+dead
[commitlint]: https://github.com/conventional-changelog/commitlint/#what-is-commitlint
[chrome-icon]: https://github.com/alrra/browser-logos/blob/main/src/chrome/chrome_64x64.png
[firefox-icon]: https://github.com/alrra/browser-logos/blob/main/src/firefox/firefox_64x64.png
[edge-icon]: https://github.com/alrra/browser-logos/blob/main/src/edge/edge_64x64.png
[opera-icon]: https://github.com/alrra/browser-logos/blob/main/src/opera/opera_64x64.png
[safari-icon]: https://github.com/alrra/browser-logos/blob/main/src/safari/safari_64x64.png

# Vite Three.js — Template

This development starter template is the ultimate solution to help you getting started on your project in no time, without the hassle of setting up and configuring your development environment from scratch each time you start working. <br />
This repository is ideal for front-end developers who want to build modern, fast and reliable **webgl** web applications with the latest cutting edge technologies such as **Three.js**, **GLSL**, **JavaScript**, **TailwindCSS 4**, **Vite**, **ESLint**, **Prettier**, **Husky** and much more!

**[Demo][demo]** | **[Bug(label: bug)][issues]** | **[Feature(label: enhancement)][issues]**

## :bookmark: Table of contents

- :computer: [Getting started](#computer-getting-started "Go to 'Getting started' section")
- :battery: [Features](#battery-features "Go to 'Features' section")
- :globe_with_meridians: [Browsers support](#globe_with_meridians-browsers-support "Go to 'Browsers support' section")
- :busts_in_silhouette: [Contribute](#busts_in_silhouette-contribute "Go to 'Contribute' section")
- :bookmark_tabs: [License](#bookmark_tabs-license "Go to 'License' section")
- :gem: [Acknowledgements](#gem-acknowledgements "Go to 'Acknowledgements' section")

---

## :computer: Getting started

### Prerequisites

1. JavaScript runtime **[node.js][node]**
2. **(OPTIONAL)** Alternative package manager:
   - **[bun][bun]** <br /> or
   - **[pnpm][pnpm]** <br /> or
   - **[yarn][yarn]**

### Start developing:

1. Get the repository
   - click **"Use this template"** &nbsp; or &nbsp; **"Fork"** button <br /> _alternately_
   - **clone** the repository through your terminal: <br />
     ```bash
     git clone https://github.com/doinel1a/vite-three-js YOUR-PROJECT-NAME
     ```
2. Decide which package manager you want to use, then delete the unused "**.lock**" file(s)
3. Open your terminal or code editor to the path your project is located, and run:

   |                                     | **npm**           | **bun**           | **pnpm**       | **yarn**       |
   | ----------------------------------- | ----------------- | ----------------- | -------------- | -------------- |
   | **install** dependencies            | `npm install`     | `bun install`     | `pnpm install` | `yarn install` |
   | **run** the **development server**  | `npm run dev`     | `bun run dev`     | `pnpm dev`     | `yarn dev`     |
   | **build** your **production app**   | `npm run build`   | `bun run build`   | `pnpm build`   | `yarn build`   |
   | **preview** your **production app** | `npm run preview` | `bun run preview` | `pnpm preview` | `yarn preview` |

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

---

## :battery: Features

This repository comes 🔋 packed with:

- **Three.js**
- **TailwindCSS 4**
- **Vite**
- **SASS** & **SCSS**
- **ESLint**
- **Prettier**
- **Husky**
- **Commitlint**
- **Lint staged**
- **Playwright**

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

---

## :globe_with_meridians: Browsers support

The configuration achieves **92.3%** coverage across all major browsers, specifically including:

|            Chrome             |             Firefox              |             Edge             |        Opera         | Safari                       |
| :---------------------------: | :------------------------------: | :--------------------------: | :------------------: | ---------------------------- |
| ![Google Chrome][chrome-icon] | ![Mozilla Firefox][firefox-icon] | ![Microsoft Edge][edge-icon] | ![Opera][opera-icon] | ![Apple Safari][safari-icon] |

**\*** In order to support a wider percentage of browsers, update the `.browserslistrc` configuration file:

- `last 3 versions`: browser version
- `> 0.2%`: browser usage statistics
- `not dead`: whether the browser is officially supported

Update the configuration [here][browserslist] and check in real-time the **global browsers support**.

**\* The more versions you need to support, the larger the JS and CSS bundle sizes will be.**

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

---

## :busts_in_silhouette: Contribute

Contributions are what make the open source community such an amazing place to learn, inspire, and create.  
Any contribution is greatly appreciated: big or small, it can be documentation updates, adding new features or something bigger.  
Please check the [**contributing guide**][code-of-conduct] for details on how to help out and keep in mind that all commits must follow the **[conventional commit format][commitlint]**.

### How to contribute

1.  **[Get started](#computer-getting-started "Go to 'Getting started' section")**
2.  **For a new feature**
    1.  Create a new branch: `git checkout -b feat/NEW-FEATURE`
    2.  Add your changes to the staging area: `git add PATH/TO/FILENAME.EXTENSION`
    3.  Commit your changes: `git commit -m "feat: NEW FEATURE"`
    4.  Push your new branch: `git push origin feat/NEW-FEATURE`
3.  **For a bug fix**
    1.  Create a new branch: `git checkout -b fix/BUG-FIX`
    2.  Add your changes to the staging area: `git add PATH/TO/FILENAME.EXTENSION`
    3.  Commit your changes: `git commit -m "fix: BUG FIX"`
    4.  Push your new branch: `git push origin fix/BUG-FIX`
4.  **Open a new [pull request][pulls]**

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

---

## :bookmark_tabs: License

All logos and trademarks are the property of their respective owners.  
Everything else is distributed under the **MIT License**.  
See the [LICENSE][license] file for more informations.

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

---

## :gem: Acknowledgements

Special thanks to:

- [alrra](https://github.com/alrra) for [browser-logos](https://github.com/alrra/browser-logos)
- [tandpfun](https://github.com/tandpfun) for [skill-icons](https://github.com/tandpfun/skill-icons)

[Back to :arrow_up:](#vite-threejs--template "Back to 'Table of contents' section")

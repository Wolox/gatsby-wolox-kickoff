# Gatsby Wolox Kickoff

This project is a baseline for a [Gatsby](https://www.gatsbyjs.org/) project as we use it in [Wolox](www.wolox.com.ar). We recommend to use it if you wish to have a minimal configuration and some small components to start your new Gatsby application

This project is based on [Gatsby Starter Landing Page](https://www.gatsbyjs.org/starters/gillkyle/gatsby-starter-landing-page/)

## Usage

You can simply clone this repository

```
git clone https://github.com/Wolox/gatsby-wolox-kickoff
```

Or you can download the code from Github. **Remember to change the project name and description in the package.json**

## Run

If you do not have the Gatsby CLI installed yet, do it first.

npm install --global gatsby-cli


To run the project, as with any Gatsby proyect:

```
npm run develop
```

## Plugins and additions

This are the Gatsby plugins present in this project:

|Name|Description|
|----|-----------|
|[gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)| Google Analytics support
|[gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)| Adds SEO improvements for the document head
|[gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)| SASS/SCSS support
|[gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)| Image processing functions
|[gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)| Provides GraphQL fields for images
|[gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)| Automatically  create a sitemap
|[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)| Get files from local filesystem
|[gatsby-plugin-root-import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/)| Allows alias for absolute imports


Also, this projects uses [Wolox's Stylelint configuration](https://github.com/Wolox/stylelint-config-wolox) and [Eslint React configuration](https://github.com/Wolox/eslint-config-wolox-react).

There's also a pre-commit hook setup up using [Husky](https://github.com/typicode/husky/issues)

## About

This repository is maintained by everyone at [Wolox](https://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## License

**wolox-react-bootstrap** is available under the MIT [license](LICENSE).

    Copyright (c) 2020 Wolox

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

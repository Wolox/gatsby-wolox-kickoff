# Gatsby Wolox Kickoff

This project is a baseline for a [Gatsby](https://www.gatsbyjs.org/) project as we use it in [Wolox](www.wolox.com.ar). We recommend to use it if you wish to have a minimal configuration and some small components to start your new Gatsby application

This project is based on [Gatsby Landing Page Starter](https://github.com/btahir/gatsby-landing-page-starter)

## Features

* Responsive layout
* SEO optimized
* Sitemap plugin
* Offline plugin / PWA out of the box
* Fast

## Usage

You can simply clone this repository

```
git clone https://github.com/Wolox/gatsby-wolox-kickoff
```

Or you can download the code from Github. **Remember to change the project name and description in the package.json**

After cloning the repository you should change `package.json`'s name, description and author, as well as the manifest and siteMetadata in `gatsby-config.js`

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
|[gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)| Adds SEO improvements for the document head
|[gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/)| SASS/SCSS support
|[gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)| Image processing functions
|[gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)| Provides GraphQL fields for images
|[gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)| Automatically  create a sitemap
|[gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)| Get files from local filesystem
|[gatsby-plugin-root-import](https://www.gatsbyjs.org/packages/gatsby-plugin-root-import/)| Allows alias for absolute imports
|[gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/)| Adds drop-in support for making a Gatsby site work offline and more resistant to bad network connections


Also, this projects uses [Wolox's Stylelint configuration](https://github.com/Wolox/stylelint-config-wolox) and [Eslint React configuration](https://github.com/Wolox/eslint-config-wolox-react).

There's also a pre-commit hook setup up using [Husky](https://github.com/typicode/husky/issues)

## About

This repository is maintained by everyone at [Wolox](https://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

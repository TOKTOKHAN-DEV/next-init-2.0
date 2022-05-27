/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const Eta = require('eta');
const { prettierString } = require('../../../utils/nodejs/prettier');
const { getTextCase } = require('../../../utils/nodejs/getTextCase');

class GeneratorByEta {
  eta = Eta;

  rootPath = process.env.PWD;
  commonTemplatePath = path.resolve(
    this.rootPath,
    'src/utils/nodejs/eta/template',
  );

  definedTemplate = {
    Index: {
      name: 'Index',
      path: path.resolve(this.commonTemplatePath, 'index.template.eta'),
      getProps: ({ exportName, importPath }) => ({ exportName, importPath }),
    },
    ChakraComponent: {
      name: 'ChakraComponent',
      path: path.resolve(this.commonTemplatePath, 'component.template.eta'),
      getProps: ({ name, props, additionalImports }) => ({
        name,
        props,
        additionalImports,
      }),
    },
    PageComponent: {
      name: 'PageComponent',
      path: path.resolve(
        this.commonTemplatePath,
        'page-component.template.eta',
      ),
      getProps: ({ name, contentName, pageTitle }) => ({
        name,
        contentName,
        pageTitle,
      }),
    },
    DynamicPageComponent: {
      name: 'DynamicPageComponent',
      path: path.resolve(
        this.commonTemplatePath,
        'dynamic-page-component.template.eta',
      ),
      getProps: ({ name, contentName, pageTitle, slug }) => ({
        name,
        contentName,
        pageTitle,
        slug,
      }),
    },
    Import: {
      name: 'Import',
      path: path.resolve(this.commonTemplatePath, 'import.template.eta'),
      getProps: ({ exportName, importPath }) => ({ exportName, importPath }),
    },
  };

  constructor() {
    this.init();
  }

  init() {
    Object.keys(this.definedTemplate).forEach((key) => {
      const { name, path: templatePath } = this.definedTemplate[key];
      this.defineByPath({ name, templatePath });
    });
    return this;
  }

  defineByPath({ name, templatePath, getProps }) {
    const target = path.resolve(this.rootPath, templatePath);
    const template = fs.readFileSync(target, { encoding: 'utf-8' });
    this.eta.templates.define(name, this.eta.compile(template));
    this.definedTemplate = {
      ...this.definedTemplate, //
      [name]: { name, getProps, path: templatePath },
    };
    return this;
  }

  async renderDefinedEta(name, options) {
    return this.eta.render(
      `<%~ include("${name}",${JSON.stringify(options)})%>`,
    );
  }

  async generate({
    view, //
    output,
  }) {
    const { dir } = path.parse(output);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(output, await prettierString(view), 'utf-8');
  }

  async generateFileByEta({
    template, //
    output,
    config,
  }) {
    const view = await this.eta.renderFile(template, {
      ...config, //
      utils: { getTextCase, ...config.utils },
      definedTemplate: this.definedTemplate,
    });
    this.generate({ view, output });
    return this;
  }

  async generateIndexFile({ config: { exportName, importPath }, output }) {
    const { Index } = this.definedTemplate;
    const view = await this.renderDefinedEta(Index.name, {
      exportName,
      importPath,
    });
    this.generate({ view, output });
  }

  async generateComponentFile({
    config: { name, props, additionalImports },
    output,
  }) {
    const { ChakraComponent } = this.definedTemplate;
    const view = await this.renderDefinedEta(ChakraComponent.name, {
      name,
      props,
      additionalImports,
    });
    this.generate({ view, output });
  }

  async generatePageComponentFile({
    config: { name, contentName, pageTitle },
    output,
  }) {
    const { PageComponent } = this.definedTemplate;
    const view = await this.renderDefinedEta(PageComponent.name, {
      name,
      contentName,
      pageTitle,
    });
    this.generate({ view, output });
  }

  async generateDynamicPageComponentFile({
    config: { name, contentName, pageTitle, slug },
    output,
  }) {
    const { DynamicPageComponent } = this.definedTemplate;
    const view = await this.renderDefinedEta(DynamicPageComponent.name, {
      name,
      contentName,
      pageTitle,
      slug,
    });
    this.generate({ view, output });
  }
}

module.exports = GeneratorByEta;

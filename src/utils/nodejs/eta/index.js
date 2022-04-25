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
      getProps: ({ name }) => ({ name }),
    },
    PageComponent: {
      name: 'PageComponent',
      path: path.resolve(
        this.commonTemplatePath,
        'page-component.template.eta',
      ),
      getProps: ({ name, contentName }) => ({ name, contentName }),
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
}

module.exports = GeneratorByEta;

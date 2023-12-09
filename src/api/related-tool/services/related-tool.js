'use strict';

/**
 * related-tool service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::related-tool.related-tool');

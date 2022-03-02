'use strict';

/**
 * gemstone service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gemstone.gemstone');

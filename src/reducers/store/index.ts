import NodeService from '~services/common/node-service';

import production from './configure-store.prod';
import development from './configure-store.dev';

/**
 * Determine which Redux store to provide based on the
 * Environment Type of Node.js
 * @return {object}    Redux store
 */

export default NodeService.isProduction() ? production() : development();

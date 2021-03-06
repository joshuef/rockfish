/**
 * ## getConfig
 *
 *  gets the correct configuration from the config file
 *
 * @param {Object} query string object
 *
 * @return {Object} config object for the current site
 */

import config from '../../cfg/config';

const getConfig = ( query ) =>
{
    const { env, site } = query;


    const siteConfig = config[ env ] ? config[ env ][ site ] : undefined;

    if ( siteConfig )
    {
        siteConfig.env = env;
        siteConfig.site = site;
        siteConfig.mainDomain = config[ env ].mainDomain;
        siteConfig.timestamp = new Date().toISOString();
        siteConfig.siteTargetDir =
            `static.${siteConfig.env}.${siteConfig.site}`;
        siteConfig.releaseDir =
            `${siteConfig.siteTargetDir}/releases/${siteConfig.timestamp}/`;
    }

    return siteConfig;
};

export default getConfig;

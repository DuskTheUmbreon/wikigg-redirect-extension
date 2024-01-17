/** @typedef {import( '../util.js' ).SiteRecord} SiteRecord */


import {
    createDomElement,
    getMessage
} from '../util.js';


/**
 * @typedef {Object} RedirectBadgeOptions
 * @property {boolean} [allMoved=false]
 * @property {boolean} [isGoogleMobile=false]
 */


/**
 * @param {RedirectBadgeOptions} options
 * @return {HTMLElement}
 */
export function constructRedirectBadge( options ) {
    return createDomElement( 'span', {
        text: options.allMoved ? 'redirected' : 'some redirected',
        style: {
            backgroundColor: '#0002',
            fontSize: '90%',
            opacity: 0.6,
            borderRadius: '4px',
            padding: '1px 6px',
            marginLeft: options.isMobile ? null : '4px'
        }
    } );
}


/**
 * @param {SiteRecord} wikiInfo
 * @return {HTMLElement}
 */
export function constructReplacementMarker( wikiInfo ) {
    return createDomElement( 'span', {
        text: `Result from ${wikiInfo.search.placeholderTitle} hidden by wiki.gg Redirect`,
        style: {
            paddingBottom: '1em',
            display: 'inline-block',
            color: '#5f6368'
        }
    } );
}

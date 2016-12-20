import React, {PropTypes} from 'react';
import {translate} from 'focus-core/translation';
import Link from './link';

const propTypes = {
    labelKey: PropTypes.string,
    keyKey: PropTypes.string,
    childrenKey: PropTypes.string,
    element: PropTypes.object,
    rootLink: PropTypes.string.isRequired,
    linkKey: PropTypes.string.isRequired,
    viewSelected: PropTypes.string.isRequired,
    viewKey: PropTypes.string.isRequired
}


const lineComponent = (props) => {
    const {element, labelKey, childrenKey, rootLink, viewSelected, viewKey, linkKey, onClick} = props;
    return (
        element[childrenKey] ?
            <div data-vision="conteiners-with-children" onClick={() => onClick(element)}>
                <span className={'menu-liste-item-left' + (element.isTreeOpen ? ' menu-liste-item-left-open' : '')}>
                    {translate(element[labelKey])}
                </span>
            </div>
        :
            <div data-vision="link-conteiners">
                <Link className={viewSelected === ''+element[viewKey] ? 'menu-liste-item-left menu-liste-item-left-selected' : 'menu-liste-item-left'} to={rootLink + element[linkKey]}>
                    <span>{translate(element[labelKey])}{element.siArchive ? ' (Archivé)' : null}</span>
                </Link>
                <Link className="menu-liste-item-right" to={rootLink + element[linkKey]}>
                    <i className="material-icons">{'chevron_right'}</i>
                </Link>
            </div>
    )
}

lineComponent.displayName = 'LineComponent'
export default lineComponent;

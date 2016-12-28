import './style/menu-list.scss';

import React, {PropTypes} from 'react';

import {translate} from 'focus-core/translation';

import Grid from 'focus-components/common/grid';
import Column from 'focus-components/common/column';
import Panel from 'focus-components/components/panel';

import TreeView from './components/tree-view';


const propTypes = {
    list: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object  
    ]).isRequired,
    title: PropTypes.string,
    keyKey: PropTypes.string,
    rootLink: PropTypes.string.isRequired,
    linkKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
    ]),
    viewSelected: PropTypes.string,
    viewKey: PropTypes.string.isRequired,
    childrenKey: PropTypes.string
};

const defaultProps = {
    labelKey: 'label',
    childrenKey: 'children',
    keyKey: 'id'
};

const menuList = (props) => {
    const {list, title, keyKey, rootLink, linkKey, labelKey, children, viewSelected, viewKey, childrenKey} = props;
    return (
        <Grid data-vision="menu-grille">
            <Column size={2}>
                <Panel data-vision="menu-panel" title={translate(title)}>
                    <TreeView list={list}
                        labelKey={labelKey}
                        keyKey={keyKey}
                        linkKey={linkKey}
                        viewKey={viewKey}
                        viewSelected={viewSelected}
                        rootLink={rootLink}
                        childrenKey={childrenKey}
                    />
                </Panel>
            </Column>
            <Column size={10}>
                {children}
            </Column>
        </Grid>
    );
};

menuList.displayName = 'menuList';
menuList.propTypes = propTypes;
menuList.defaultProps = defaultProps;

export default menuList;

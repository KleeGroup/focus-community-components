import React, {Component, PropTypes} from 'react';
import {isArray, isObject, isEqual} from 'lodash';
import LineComponent from './line-component';

const propTypes = {
    labelKey: PropTypes.string,
    keyKey: PropTypes.string,
    childrenKey: PropTypes.string,
    list: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object  
    ]).isRequired,
    rootLink: PropTypes.string.isRequired,
    linkKey: PropTypes.string.isRequired,
    viewSelected: PropTypes.string,
    viewKey: PropTypes.string.isRequired
}

const defaultProps = {
    labelKey: 'name',
    childrenKey: 'children',
    keyKey: 'id'
}


class TreeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        }
    }

    componentWillReceiveProps(nextProps) {
        const {list} = this.state;
        if(nextProps.list && isEqual(list, nextProps.list)) {
            this.setState({list: nextProps.list});
        }
        if(!list || !nextProps.list) {
            throw new Error('Le composant doit obligatoirement recevoir une liste. Merci !!!');
        }
    }

    onClick(element) {
        element.isTreeOpen = !element.isTreeOpen;
        this.forceUpdate();
    }

    renderChildren(child) {
        const {labelKey, childrenKey, keyKey, rootLink, viewSelected, viewKey, linkKey} = this.props;
        return child.map((element) => (
            <li key={element[keyKey]} data-vision="menu-liste-item" className="mdl-list__item">
                <LineComponent element={element} labelKey={labelKey} linkKey={linkKey} viewKey={viewKey}
                    viewSelected={viewSelected} rootLink={rootLink} onClick={(e) => this.onClick(e)} childrenKey={childrenKey}
                />
                {element[childrenKey] && element.isTreeOpen &&
                    <ul data-vision="menu-liste" className="mdl-list">
                        {this.renderChildren(element[childrenKey])}
                    </ul>
                }
            </li>
        ));
    }

    renderData(list) {
        const {labelKey, childrenKey} = this.props;
        if(isArray(list)) {
            return (
                <ul data-vision="menu-liste" className="mdl-list">
                    {this.renderChildren(list)}
                </ul>
            )
        }
        if(isObject(list)) {
            return (
                <ul data-vision="menu-liste" className="mdl-list">
                    {list[labelKey]}
                    {list[childrenKey] && this.renderChildren(list[childrenKey])}
                </ul>
            )
        }
        return null;
    }

    render() {
        const {list} = this.state;
        const {keyName, childrenKey, idKey} = this.props;
        return (
            <div>
                {this.renderData(list)}
            </div>
        )
    }
}

TreeView.displayName = 'TreeView';
TreeView.propTypes = propTypes;
TreeView.defaultProps = defaultProps;

export default TreeView;

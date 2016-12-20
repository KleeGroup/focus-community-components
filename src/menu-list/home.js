import React from 'react';
import {translate} from 'focus-core/translation';
import {component as Icon} from 'focus-components/common/icon';

function parametrageInstancesHomeView(titre) {
    return (
        <div data-vision="nomenclature-home">
            <div>
                <Icon name="arrow_back" />
                <span>{titre}</span>
            </div>
        </div>
    );
}

parametrageInstancesHomeView.displayName = 'parametrageInstancesHomeView';
export default parametrageInstancesHomeView;

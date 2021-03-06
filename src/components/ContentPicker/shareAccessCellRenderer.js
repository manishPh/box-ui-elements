/**
 * @flow
 * @file Function to render the share access table cell
 * @author Box
 */

import React from 'react';
import isRowSelectable from './cellRendererHelper';
import ShareAccessSelect from '../ShareAccessSelect';
import type { BoxItem } from '../../flowTypes';

export default (
    onChange: Function,
    canSetShareAccess: boolean,
    selectableType: string,
    extensionsWhitelist: string[],
    hasHitSelectionLimit: boolean,
    getLocalizedMessage: Function
) => ({ rowData }: { rowData: BoxItem }) => {
    if (!isRowSelectable(selectableType, extensionsWhitelist, hasHitSelectionLimit, rowData)) {
        return <span />;
    }

    return (
        <ShareAccessSelect
            className='bcp-shared-access-select'
            canSetShareAccess={canSetShareAccess}
            onChange={onChange}
            item={rowData}
            getLocalizedMessage={getLocalizedMessage}
        />
    );
};

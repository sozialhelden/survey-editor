import { HTMLDivProps } from '@blueprintjs/core';
import * as React from 'react';

export default function OverflowScrollContainer(props: HTMLDivProps) {
    return <div {...props} style={{ overflow: 'auto', flex: 1, ...props.style }}>
        {props.children}
    </div>;
}
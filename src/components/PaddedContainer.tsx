import { HTMLDivProps } from '@blueprintjs/core';
import * as React from 'react';

export default function PaddedContainer(props: HTMLDivProps & {
    horizontal: number,
    vertical: number,
}) {
    return <div {...{props}} style={{ margin: `${props.horizontal}rem ${props.vertical}rem`, ...props.style}}>
        {props.children}
    </div>;
}
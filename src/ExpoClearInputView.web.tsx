import * as React from 'react';

import { ExpoClearInputViewProps } from './ExpoClearInput.types';

export default function ExpoClearInputView(props: ExpoClearInputViewProps) {
    return (
        <div>
            <span>{props.name}</span>
        </div>
    );
}

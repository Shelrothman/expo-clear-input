import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoClearInputViewProps } from './ExpoClearInput.types';

const NativeView: React.ComponentType<ExpoClearInputViewProps> =
    requireNativeViewManager('ExpoClearInput');

export default function ExpoClearInputView(props: ExpoClearInputViewProps) {
    return <NativeView {...props} />;
}

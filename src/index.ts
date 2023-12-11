import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoClearInput.web.ts
// and on native platforms to ExpoClearInput.ts
import ExpoClearInputModule from './ExpoClearInputModule';
import ExpoClearInputView from './ExpoClearInputView';
import { ChangeEventPayload, ExpoClearInputViewProps } from './ExpoClearInput.types';

// Get the native constant value.
export const PI = ExpoClearInputModule.PI;

export function hello(): string {
  return ExpoClearInputModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoClearInputModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoClearInputModule ?? NativeModulesProxy.ExpoClearInput);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoClearInputView, ExpoClearInputViewProps, ChangeEventPayload };

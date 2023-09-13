import React from 'react';
import { DeviceEventEmitter } from 'react-native';

export enum EDeviceEmitter {
  GLOBAL_LOADING = 'GLOBAL_LOADING',
}

export const emitter = <T>(type: EDeviceEmitter, param?: T) => {
  DeviceEventEmitter.emit(type, param);
};

const useEmitter = <G>(type: EDeviceEmitter, callback?: (data: G) => void) => {
  const savedCallback = React.useRef((_data: G) => {});
  if (callback) {
    savedCallback.current = callback;
  }

  React.useEffect(() => {
    DeviceEventEmitter.addListener(type, savedCallback.current);
    return () => {
      DeviceEventEmitter.removeAllListeners(type);
    };
  }, [callback, type]);
};

export default useEmitter;

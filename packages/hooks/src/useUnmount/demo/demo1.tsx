/**
 * title: 基础用法
 * desc: 在组件卸载（unmount）时执行的 Hook。
 */

import { message } from 'antd';
import { useBoolean, useUnmount } from 'anya-hooks';
import React from 'react';

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, { toggle }] = useBoolean(true);

  return (
    <>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};

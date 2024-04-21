/**
 * title: Open console to view logs
 * description: The counter prints the value every 3 seconds
 *
 * title.zh-CN: 打开控制台查看输出
 * description.zh-CN: 计数器每 3 秒打印一次值
 */

import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useGetState } from 'ahooks';

export default () => {
  const [count, setCount, getCount] = useGetState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval count', getCount());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Button onClick={() => setCount((item) => item + 1)}>count: {count}</Button>;
};

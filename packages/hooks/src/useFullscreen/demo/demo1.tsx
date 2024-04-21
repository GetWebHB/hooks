/**
 * title: Default usage
 * description: Use ref to set elements that need full screen
 *
 * title.zh-CN: 基础用法
 * description.zh-CN: 使用 ref 设置需要全屏的元素
 */

import React, { useRef } from 'react';
import { Button, Space } from 'antd';
import { useFullscreen } from 'ahooks';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: 'white' }}>
      <Space style={{ marginBottom: 16 }} wrap>
        <Button onClick={enterFullscreen}>Enter Fullscreen</Button>
        <Button onClick={exitFullscreen}>Exit Fullscreen</Button>
        <Button onClick={toggleFullscreen}>Toggle Fullscreen</Button>
      </Space>
      <div>{isFullscreen ? 'Fullscreen' : 'Not Fullscreen'}</div>
    </div>
  );
};

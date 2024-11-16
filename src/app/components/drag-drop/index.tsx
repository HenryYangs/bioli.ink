/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { FILE_TYPE_MAP } from '@/app/constant/file';
import { FileType } from '@/app/types/my';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './drag-drop.module.scss';
import { DragAndDropProps } from './types';

const DragAndDrop = (props: DragAndDropProps = {}) => {
  const { type = FileType.FILE, multiple = false, accept = '' } = props;
  const [, setFiles] = useState<any[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const updateFile = (files: any[]) => {
    const newFiles = Array.from(files);
    // 校验文件类型是否符合要求
    const validFiles = accept ? newFiles.filter(file => {
      const target = accept.split('/')[0];

      return file.type.startsWith(target);
    }) : newFiles;

    setFiles((prevFiles) => {
      const result = multiple ? [...prevFiles, ...validFiles] : validFiles;

      event.emit(EVENTS.AVATAR_UPDATE, result);

      return result;
    });
  }

  const handleDrop = async (ev: any) => {
    ev.preventDefault();
    setIsDragging(false); // 重置拖拽状态

    updateFile(ev.dataTransfer.files);
  };

  const handleChange = (ev: any) => {
    updateFile(ev.target.files);
  };

  const handleDragOver = (ev: any) => {
    ev.preventDefault();
    setIsDragging(true); // 设置拖拽状态
  };

  const handleDragLeave = () => {
    setIsDragging(false); // 离开时重置拖拽状态
  };

  return (
    <div
      className={cls(style.wrapper, 'hover-bg')}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave} // 新增事件处理
      style={{
        backgroundColor: isDragging ? 'var(--deep-background)' : '', // 根据拖拽状态改变背景色
      }}
    >
      <label htmlFor='fileInput' className={style['file-area']}>
        <p>
          <i className={cls('iconfont-my', `icon-my-${type}`, style['icon-type'])}></i>
        </p>
        <p>拖拽{FILE_TYPE_MAP[type]}到这里<br />或点击选择{FILE_TYPE_MAP[type]}</p>
        <input type='file' onChange={handleChange} style={{ display: 'none' }} id='fileInput' accept={accept} />
      </label>
    </div>
  );
};

export default DragAndDrop;
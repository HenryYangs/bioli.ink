/**
 * 全局使用唯一的弹窗
 * 使用事件触发弹窗的展示和隐藏
 */

'use client'

import { 
  Modal as ModalComponent,
  ModalBody, 
  ModalContent, 
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';
import React, { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import { cls } from '@/app/utils/string';

import style from './modal.module.scss';
import { BackOptions, ModalOperateProps } from './types';

const DEFAULT_BACK_OPTIONS = {
  show: false,
};

export default function Modal() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [title, setTitle] = useState('');
  const [modalBody, setModalBody] = useState<React.ReactNode | React.ReactNode[]>(null);
  const [modalFooter, setModalFooter] = useState<React.ReactNode | React.ReactNode[] | boolean>(null);
  const [backOpts, setBackOpts] = useState<BackOptions>(DEFAULT_BACK_OPTIONS);

  const showModal = (props: ModalOperateProps = {}) => {
    const {
      title = '',
      body = null,
      footer = null,
      backOptions = DEFAULT_BACK_OPTIONS,
    } = props;

    setTitle(title);
    setModalBody(body);
    setModalFooter(footer);
    setBackOpts(backOptions);

    onOpen();
  }
  const hideModal = () => {
    onClose();
  }

  useEventListener({
    [EVENTS.SHOW_MODAL]: showModal,
    [EVENTS.HIDE_MODAL]: hideModal,
  });

  return (
    <ModalComponent
      scrollBehavior='inside'
      isOpen={isOpen}
      onClose={onOpenChange}
      className={style.wrapper}
      classNames={{
        closeButton: 'hidden'
      }}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='py-6 justify-center'>
              <div className={style['title-wrapper']}>
                {
                  backOpts.show ? (
                    <i className={cls('iconfont-my', 'icon-my-arrow', style['icon-action'])}></i>
                  ) : null
                }

                <span className={style.title}>{title}</span>

                <i
                  className={cls('iconfont-my', 'icon-my-close', style['icon-action'])}
                  onClick={onOpenChange}
                ></i>
              </div>
            </ModalHeader>
            <ModalBody>{modalBody}</ModalBody>
            <ModalFooter>{modalFooter}</ModalFooter>
          </>
        )}
      </ModalContent>
    </ModalComponent>
  )
};

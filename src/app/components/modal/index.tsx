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
  ModalProps,
  useDisclosure,
} from '@nextui-org/modal';
import React, { useState } from 'react';

import { EVENTS } from '@/app/constant/events';
import { useEventListener } from '@/app/hooks/use-event-listener';
import event from '@/app/utils/event';
import { cls } from '@/app/utils/string';

import style from './modal.module.scss';
import { ModalOperateProps } from './types';

export default function Modal() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [title, setTitle] = useState('');
  const [modalBody, setModalBody] = useState<React.ReactNode | React.ReactNode[]>(null);
  const [modalFooter, setModalFooter] = useState<React.ReactNode | React.ReactNode[] | boolean>(null);
  const [backToEvent, setBackToEvent] = useState<EVENTS>();
  const [modalProps, setModalProps] = useState<Partial<ModalProps>>();
  const [showCloseButton, setShowCloseButton] = useState(true);

  const showModal = (props: ModalOperateProps = {}) => {
    const {
      title = '',
      body = null,
      footer = null,
      backTo,
      showCloseBtn = true,
      modalProps: innerModalProps,
    } = props;

    setTitle(title);
    setModalBody(body);
    setModalFooter(footer);
    setBackToEvent(backTo);
    setModalProps(innerModalProps);
    setShowCloseButton(showCloseBtn);

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
      {...modalProps}
      scrollBehavior='inside'
      isOpen={isOpen}
      onClose={onOpenChange}
      className={cls(style.wrapper, modalProps?.className || '')}
      classNames={{
        // closeButton: 'hidden',
        base: 'max-h-[600px]',
        body: 'overflow-hidden'
      }}
      hideCloseButton
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className='py-6 justify-center'>
              <div className={style['title-wrapper']}>
                {
                  backToEvent ? (
                    <i className={cls('iconfont-my', 'icon-my-arrow', style['icon-action'])} onClick={() => { event.emit(backToEvent) }}></i>
                  ) : null
                }

                <span className={style.title}>{title}</span>

                {
                  showCloseButton ? (
                    <i
                      className={cls('iconfont-my', 'icon-my-close', style['icon-action'])}
                      onClick={onOpenChange}
                    ></i>
                  ) : null
                }
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

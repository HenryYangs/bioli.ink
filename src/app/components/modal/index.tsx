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

import { ModalOperateProps } from './types';

export default function Modal() {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [title, setTitle] = useState('');
  const [modalBody, setModalBody] = useState<React.ReactNode | React.ReactNode[]>(null);
  const [modalFooter, setModalFooter] = useState<React.ReactNode | React.ReactNode[] | boolean>(null);

  const showModal = (props: ModalOperateProps = {}) => {
    const {
      title = '',
      body = null,
      footer = null,
    } = props;

    setTitle(title);
    setModalBody(body);
    setModalFooter(footer);

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
    <ModalComponent isOpen={isOpen} onClose={onOpenChange}>
      <ModalContent>
          {() => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>{modalBody}</ModalBody>
              <ModalFooter>{modalFooter}</ModalFooter>
            </>
          )}
        </ModalContent>
    </ModalComponent>
  )
};

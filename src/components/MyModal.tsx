import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import ModalContent from './ModalContent';
import { useDispatch, useSelector } from "react-redux"
import { State } from "../redux/configReducer"
import { setVisibleModalActionCreator } from '../redux/action-creator/ModalActionCreator';
interface Props {
  title: string,

}
export default function MyModal(props: Props) {

  const { isVisible } = useSelector((state: State) => state.ModalReducer)
  const dispatch = useDispatch();
  const { title } = props;

  
  const handleOk = () => {
    dispatch(setVisibleModalActionCreator(false));
  };

  const handleCancel = () => {
    dispatch(setVisibleModalActionCreator(false));
  };
  return (

    <>
      <Modal centered = {true} title={title} visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <ModalContent />
      </Modal>
    </>
  )
}

import React from "react";
import styled from "styled-components";
import MediumBtn from "../Atoms/Buttons/MediumBtn";
import Modal from "../Atoms/Modal";
import ModalBody from "../Templates/Modal/ModalBody";

const Header = styled.div`
  width: 360px;
  display: flex;
  color: ${({ theme }) => theme.color.white};
`;
const CloseBtn = styled.button`
  width: 40px;
  height: 24px;
  //   background: url("/image/close.svg") norepeat 24px 16px;
  background: url("/image/close.svg");
  background-repeat: no-repeat;
  background-position: 16px 0px;
`;
export default function ModalSetCategory({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  const apply = () => {
    closeModal();
  };
  return (
    <Modal>
      <div height="24px" className="page-header">
        　
      </div>
      <Header>
        <CloseBtn onClick={closeModal} />
        <div className="page-header" height>
          카테고리
        </div>
      </Header>
      <ModalBody>
        <MediumBtn name="초기화" />
        <MediumBtn name="적용" buttonClick={apply} />
      </ModalBody>
    </Modal>
  );
}
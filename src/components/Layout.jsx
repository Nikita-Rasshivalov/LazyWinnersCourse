import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Main from "./shared/Main";
import Background from "./Background";
import useModal from  "../hooks/useModal"
import {ModalForm} from "./Modal/ModalForm"
import React from 'react';

const Layout = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div className="wrapper">
      <Header />
      <Main openModal={openModal} />
      <Footer openModal={openModal} />
      <ModalForm isOpen={isOpen} onClose={closeModal} />
      <Background />
    </div>
  );
};

export default Layout;
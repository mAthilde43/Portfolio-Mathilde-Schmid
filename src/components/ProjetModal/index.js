import React, { useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 20px;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  position: relative;
  transition: all 0.5s ease;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Image = styled.img`
  width: auto;
  height: 300px;
  object-fit: cover;
  border: 1.5px solid #854ce6;
  border-radius: 20px;
`;

const Description = styled.p`
  font-size: 17px;
  margin: 15px 60px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const ProjectModal = ({ project, setOpenModal }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpenModal({ state: false, project: null });
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setOpenModal]);

  return (
    <Overlay onClick={() => setOpenModal({ state: false, project: null })}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton
          onClick={() => setOpenModal({ state: false, project: null })}
        >
          X
        </CloseButton>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        <Image src={project.image} alt={project.title} />
      </ModalContainer>
    </Overlay>
  );
};

export default ProjectModal;

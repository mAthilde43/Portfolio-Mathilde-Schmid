import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  width: 95%;
  max-width: 600px;
`;

const InfoItem = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  gap: 8px;

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>N'hésitez pas à me contacter pour toute question !</Desc>
        <ContactInfo>
          <InfoItem>
            📞 Téléphone : <a href="tel:+330786242680">+33 7 86 24 26 80</a>{" "}
          </InfoItem>
          <InfoItem>
            📧 Email :{" "}
            <a href="mathilde.schmid@orange.fr">mathilde.schmid@orange.fr</a>{" "}
          </InfoItem>
          <InfoItem>
            📍 Adresse : 25 rue de la Krutenau, 67000 Strasbourg{" "}
          </InfoItem>
          <InfoItem>
            🔗 LinkedIn :{" "}
            <a
              href="https://www.linkedin.com/in/mathilde-schmid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mon Profil
            </a>
          </InfoItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;

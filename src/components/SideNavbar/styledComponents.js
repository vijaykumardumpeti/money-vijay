import styled from "styled-components";

export const Sidebar = styled.div`
  width: 17.36%;
  height: 100%;
  border-right: 1px solid #e2e2e2;
  background: #fff;
  flex-shrink: 0;
  display flex;
  flex-direction: column;

`;

export const SectionsContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-bewtween;
  align-items: flex-start;

  min-height: 200px;
  max-height: 300px;
`

export const Para = styled.p`
  padding-right: -20px;
`
export const LogoContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-bewtween;
  align-items: center;

  font-size: 22px;
  min-width: 200px;
  max-width: 250px;

`
export const NameAndLogo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 11px;
`;

export const CompanyName = styled.p`
  color: #f89a23;
  font-family: Poppins;
  font-size: 19.66px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const CompanyNameMatters = styled.span`
  color: #02969c;
`;

import styled from "styled-components";
import CardBackground from '../../Assets/cardBackground.svg';

export const AccountNumberBlock = styled.div`
    color: #FFFFFF;
    font-family: 'BasierCircle', sans-serif;
    font-size: 26px;
    font-weight: bold;
    justify-content: center;
    line-height: ${props => props.half ? '16px' : '32px'};
    margin-bottom: 24px;
    padding-right: 10px;
    height: 32px;
`;

export const AccountRow = styled.div`
    align-items: center;
    display: flex;
`;

export const BottomRow = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: calc(100% - 48px);
    bottom: 24px;
`;

export const CardContainer = styled.div`
    background-image: url(${CardBackground});
    background-position: center;
    border-radius: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 272px;
    padding: 24px;
    position: relative;
    max-width: 392px;
`;

export const CardInfo = styled.div`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: bold;
    height: 24px;
    line-height: ${props => props.half ? '12px' : '24px'};
`;

export const CardInfoRow = styled.div`
    display: flex;
`;

export const InfoLabel = styled.div`
    color: #D3D2DE;
    font-size: 12px;
    line-height: 16px;
`;

export const InfoContainer = styled.div`
    margin-right: 36px;
`;

export const Tag = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 40px;
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 4px 12px;
    text-align: center;
`;

export const TopRow = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    width: 100%;
`;

export const ZipContainer = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #FFFFFF;
`;
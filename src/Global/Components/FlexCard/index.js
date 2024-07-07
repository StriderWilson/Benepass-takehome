import { useContext } from "react";
import {
    AccountNumberBlock,
    AccountRow,
    BottomRow,
    CardContainer,
    CardInfo,
    CardInfoRow,
    InfoContainer,
    InfoLabel,
    Tag,
    TopRow,
    ZipContainer,
} from "./styledComponents";
import { StateContext } from "../../../Controllers/contexts/StateContext";
import { BenepassLogo, VisaLogo } from "../../Icons";

const FlexCard = () => {
    const { cardDetails, showDetails } = useContext(StateContext);

    return (
        <CardContainer>
            <TopRow>
                <BenepassLogo />
                <Tag>
                    Virtual
                </Tag>
            </TopRow>
            <AccountRow>
                {showDetails ?
                    Object.keys(cardDetails?.cardNumber).map(key => (
                        <AccountNumberBlock>
                            {cardDetails?.cardNumber[key]}
                        </AccountNumberBlock>
                    )) :
                    <>
                        <AccountNumberBlock half={!showDetails}>
                            . . . .
                        </AccountNumberBlock>
                        <AccountNumberBlock>
                            {cardDetails?.cardNumber?.fourth}
                        </AccountNumberBlock>
                    </>
                }
            </AccountRow>
            <CardInfoRow>
                <InfoContainer>
                    <InfoLabel>
                            VALID THRU
                    </InfoLabel>
                    <CardInfo>
                        {cardDetails?.expirationDate}
                    </CardInfo>
                </InfoContainer>
                <InfoContainer>
                    <InfoLabel>
                            CVC
                    </InfoLabel>
                    <CardInfo half={!showDetails}>
                        {showDetails ?
                            cardDetails?.cvc :
                            '. . .'
                        }
                    </CardInfo>
                </InfoContainer>
            </CardInfoRow>
            <BottomRow>
                <ZipContainer>
                    ZIP {cardDetails?.zip}
                </ZipContainer>
                <VisaLogo />
            </BottomRow>

        </CardContainer>
    );
};

export default FlexCard;

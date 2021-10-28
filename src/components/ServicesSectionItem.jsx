import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemStyles = styled.div`
    text-align: center;

    .services_icon {
        svg {
            width: 3rem;
        }
    }
    .servicesItem_title {
        font-size: 2.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para {
        margin-top: 2rem;
    }
`;

const ServicesSectionItem = ({
    icon = <MdDesktopMac />,
    title = 'Web Design',
    desc = 'lorem...'
}) => {
    return (
        <ItemStyles>
            <div className="services_icon">
                {icon}
                <div className="servicesItem_title">{title}</div>
                <Ptext>{desc}</Ptext>
            </div>
        </ItemStyles>
    );
};

export default ServicesSectionItem;

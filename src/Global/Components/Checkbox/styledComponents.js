import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    cursor: pointer;
`;

export const StyledCheckbox = styled.div`
    background: ${props => (props.checked ? '#ED0E61' : 'white')};
    border: 2px solid ${props => (props.checked ? '#ED0E61' : 'black')};
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    height: 24px;
    position: relative;
    transition: all 150ms;
    width: 24px;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    }

    ${HiddenCheckbox}:checked + &::after {
        border: solid white;
        border-width: 0 2px 2px 0;
        content: '';
        height: 10px;
        left: 7px;
        position: absolute;
        top: 3px;
        width: 5px;
        transform: rotate(45deg);
    }
`;

export const CheckboxLabel = styled.label`
    color: ${props => (props.checked ? '#ED0E61' : 'black')};
    cursor: pointer;
    margin-left: 8px;
`;
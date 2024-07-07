import {
  CheckboxContainer,
  CheckboxLabel,
  HiddenCheckbox,
  StyledCheckbox,
} from "./styledComponents";

const Checkbox = ({ checked, label, onChange }) => (
  <CheckboxContainer onClick={onChange}>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked} />
    <CheckboxLabel checked={checked}>{label}</CheckboxLabel>
  </CheckboxContainer>
);

export default Checkbox;

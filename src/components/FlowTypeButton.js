// @flow
import React from 'react';

type PropsType = {
  /** The text to be rendered in the button */
  label: string,
  /** Function to be called when the button is clicked */
  onClick?: Function,
  /** Boolean representing wether the button is disabled */
  disabled?: boolean,
};

/** Flow type button description */
const FlowTypeButton = ({ label, onClick, disabled }: PropsType) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

FlowTypeButton.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default FlowTypeButton;

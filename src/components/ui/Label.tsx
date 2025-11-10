import React from 'react';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className = '', children, ...props }) => (
  <label
    className={`block text-sm font-medium text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </label>
);

export default Label;

import React from 'react';
import '../../styles/StableForm.css';

export default function StableForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
      className={['Stable-form', className].join(' ')}
      action="#"
      {...otherProps}
    />
  );
}

import React from 'react';

export default function HorseForm(props) {
  const { className, ...otherProps } = props;
  return (
    <form
      className={['Horse=form', className].join(' ')}
      action="#"
      {...otherProps}
    />
  );
}

import React from 'react';
export const Message = ({ message }) => {
    if (!message) {
      return null;
    }
    return (<p className="text-danger pb-2">{message}</p>);
 }
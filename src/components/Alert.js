import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    let newText = word.charAt(0).toUpperCase() + word.slice(1);
    return newText;
  };
  return (
    <div style={{ height: '50px' }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;

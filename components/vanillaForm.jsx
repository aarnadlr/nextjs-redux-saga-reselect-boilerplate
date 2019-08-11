import React, { useState, useRef, useEffect } from 'react';
import {actionTypes, submitForm} from '../actions/actions.js';

function validate(valuesObj) {
  let errors = {};

  if (!valuesObj.inputValKey) {
    errors.message = 'required field';
    errors.color = 'red';
  } else {
    errors.message = 'all good';
    errors.color = '#02CE5A';
  }

  return errors;
}

const VanillaForm = ({dispatch}) => {
  const [inputVal, setInputVal] = useState('');
  const [errorsObj, setErrorsObj] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setInputVal(e.target.value);
  };

  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //Run validate() on every input character keystroke
  useEffect(() => {
    setErrorsObj(validate({ inputValKey: inputVal }));
  }, [inputVal]);

  const handleSubmit = e => {
    e.preventDefault();

    setSubmitting(true);

    dispatch(submitForm(inputVal));

    setSubmitting(false);
    setInputVal('');
  };

  const inputStyle = {
    width: '200px',
    height: '34px',
    fontSize: '22px',
    boxSizing: 'border-box',
  };

  const btnStyle = {
    margin: '8px 0 26px 0',
    width: '100px',
    height: '29px',
    fontSize: '15px',
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', fontSize: '14px' }} htmlFor="name">
          Vanilla Name
        </label>
        <input
          ref={inputRef}
          onChange={handleChange}
          style={{
            ...inputStyle,
            border: errorsObj.message
              ? `1px solid ${errorsObj.color}`
              : '1px solid silver',
          }}
          type="text"
          name="name"
          id="name"
          value={inputVal}
        />

        <div
          style={{
            display: 'block',
            fontSize: '12px',
            color: `${errorsObj.color}`,
          }}
        >
          {errorsObj.message}
        </div>

        <button disabled={submitting} style={btnStyle} type="submit">
          Submit
        </button>

      </form>
    </>
  );
};

export default VanillaForm;

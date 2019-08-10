// import Link from "next/link";
import { connect } from 'react-redux';
import { selectNewColorState, selectCount } from '../selectors/selectors';
import {
  actionTypes,
  buttonClicked,
  incrementByOne,
  incrementByTen,
  incrementBySaga,
} from '../actions/actions';
import { useRef, useEffect, useState } from 'react';
import VanillaForm from "./vanillaForm";

function Page({ title, color, justColor, count, dispatch, inputText }) {
  const handleClick = () => {
    console.log('clicked');
    dispatch(incrementBySaga());
  };

  return (
    <div style={{fontFamily:'sans-serif'}}>
      <h1>{title}</h1>

      <h1>
        <span style={{ color: justColor }}>{color}</span>
      </h1>

      <VanillaForm dispatch={dispatch}/>

      <h3>inputText val from Redux Store: {inputText}</h3>

      <h1>Count: {count}</h1>

      <button
        onClick={handleClick}
        style={{ width: '100px', height: '30px', textTransform: 'uppercase' }}
      >
        Click
      </button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  justColor: state.color,
  color: selectNewColorState(state),
  count: selectCount(state),
  inputText: state.inputText
});

export default connect(mapStateToProps)(Page);

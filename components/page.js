// import Link from "next/link";
import { connect } from 'react-redux';
import { selectNewColorState, selectCount } from '../selectors/selectors';
import { actionTypes, buttonClicked, incrementByOne, incrementByTen } from '../actions/actions';

function Page({ title, color, justColor, count, dispatch }) {

  const handleClick = () => {
    console.log('clicked');
    dispatch(incrementByOne());
  };

  return (
    <div>
      <h1>{title}</h1>

      <h1>
        <span style={{ color: justColor }}>{color}</span>
      </h1>

      <h1>Count: {count}</h1>

      <button onClick={handleClick} style={{ width: '100px', height: '30px', textTransform: 'uppercase' }}>
        Click
      </button>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  justColor: state.color,
  color: selectNewColorState(state),
  count: selectCount(state),
});

export default connect(mapStateToProps)(Page);

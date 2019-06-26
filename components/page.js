// import Link from "next/link";
import { connect } from "react-redux";
import {selectNewColorState, selectCount} from '../selectors/selectors'

function Page({ title, color, justColor, count }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1 ><span style={{color:justColor}}>{color}</span></h1>
      <h1>Count: {count}</h1>
    </div>
  );
}

const mapStateToProps = (state, props)=>{
  return{
    justColor: state.color,
    color: selectNewColorState(state),
    count: selectCount(state)
  }
}

export default connect(mapStateToProps)(Page);

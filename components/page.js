import Link from "next/link";
import { connect } from "react-redux";
import {selectNewColorState} from '../selectors/selectors'

function Page({ title, color, justColor }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1 ><span style={{color:justColor}}>{color}</span></h1>
    </div>
  );
}

const mapStateToProps = (state, props)=>{
  return{
    justColor: state.color,
    color: selectNewColorState(state)
  }
}

export default connect(mapStateToProps)(Page);

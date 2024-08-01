import WithCounter from "./WithCounter";

function Hover(props) {
  const {count , incrementCount} = props;

  return (
    <div>
        <button onMouseOver = {incrementCount} > Hover Me </button>
        <p> Count is : {count} </p>

    </div>
  )
}

export default WithCounter(Hover , 5);

import WithCounter from "./WithCounter"



function ClickCounter(props) {

  const {count , incrementCount} = props;

  return (
    <div>

        <button onClick={incrementCount} > Click Me </button>
        <p> Count is : {count} </p>

    </div>
  )
}

export default WithCounter(ClickCounter , 10);
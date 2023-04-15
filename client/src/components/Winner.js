import { useEffect } from "react";

function Winner(props) {
  useEffect(() => {
    const { contract } = props.state;
    const win_ner = async () => {
      debugger;
      const winningAddress = await contract.methods.winner().call();
      winningAddress !== "0x0000000000000000000000000000000000000000"
        ? props.setwinner(winningAddress)
        : props.setwinner("");
    };
    contract && win_ner();
  }, [props]);

  return <div className="win">Winner is : {props.winner} </div>;
}
export default Winner;

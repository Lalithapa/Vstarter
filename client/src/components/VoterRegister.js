import VoterList from "./VoterList";
import Vote from "./Vote";

function VoterRegister(props) {
  const register = async (event) => {
    event.preventDefault();
    const { contract } = props.state;
    const _name = document.querySelector("#name").value;
    const _age = document.querySelector("#age").value;
    const _gender = document.querySelector("#gender").value;
    try {
      await contract.methods.voterRegister(_name, _age, _gender).send({
        from: props.account,
        gas: "1000000",
      });
      alert("registered Successfully");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <div className="btnContainer">
        <form className="form" onSubmit={register}>
          <label className="label2" htmlFor="name">
            Name:
          </label>
          <input className="innerBoxVote" type="text" id="name"></input>

          <label className="label2" htmlFor="age">
            Age:
          </label>
          <input className="innerBoxVote" type="text" id="age"></input>

          <label className="label2" htmlFor="gender">
            Gender:
          </label>
          <input className="innerBoxVote" type="text" id="gender"></input>

          <button className="regBtn" type="submit">
            Register
          </button>
        </form>
        <VoterList state={props.state}></VoterList>
        <Vote state={props.state} account={props.account}></Vote>
      </div>
    </div>
  );
}
export default VoterRegister;

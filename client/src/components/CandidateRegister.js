import CandidateDisplay from "./CandidateDisplay";
function CandidateRegister(props) {
  const candidateRegister = async (event) => {
    event.preventDefault();
    const { contract } = props.state;
    const _name = document.querySelector("#name").value;
    const _party = document.querySelector("#party").value;
    const _age = document.querySelector("#age").value;
    const _gender = document.querySelector("#gender").value;
    try {
      await contract.methods
        .candidateRegister(_name, _party, _age, _gender)
        .send({ from: props.account, gas: "1000000" });
      alert("Candidate Registered");
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <form className="form" onSubmit={candidateRegister}>
        <label className="label1" htmlFor="name">
          Name:
        </label>
        <input className="innerBoxCand" type="text" id="name"></input>

        <label className="label1" htmlFor="party">
          Party:
        </label>
        <input className="innerBoxCand" type="text" id="party"></input>

        <label className="label1" htmlFor="age">
          Age:
        </label>
        <input className="innerBoxCand" type="text" id="age"></input>

        <label className="label1" htmlFor="gender">
          Gender:
        </label>
        <input className="innerBoxCand" type="text" id="gender"></input>

        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
      <CandidateDisplay state={props.state}></CandidateDisplay>
    </div>
  );
}
export default CandidateRegister;

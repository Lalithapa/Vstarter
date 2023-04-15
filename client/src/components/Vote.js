import { useEffect, useState } from "react";

function Vote(props) {
  const giveVote = async (event) => {
    event.preventDefault();
    const { contract } = props.state;
    const voter_add = document.querySelector("#voterId").value;
    const can_id = document.querySelector("#candidateId").value;
    try {
      await contract.methods.vote(voter_add, can_id).send({
        from: props.account,
        gas: "1000000",
      });
      alert("Vote Given Successfully");
    } catch (error) {
      alert(error);
    }
  };
  const [status, setstatus] = useState("Not Declared");
  useEffect(() => {
    const { contract } = props.state;
    const whatStatus = async () => {
      const what_status = await contract.methods.votingStatus().call();
      setstatus(what_status);
    };
    contract && whatStatus();
  }, [props.state]);

  return (
    <div>
      <form className="form" onSubmit={giveVote}>
        <p className="status">Voting Status: {status}</p>
        <label className="label2" htmlFor="voterId">
          VoterId:
        </label>
        <input className="innerBoxVote" type="text" id="voterId"></input>

        <label className="label2" htmlFor="candidateId">
          Candidate Id:
        </label>
        <input className="innerBoxVote" type="text" id="candidateId"></input>
        <button className="regBtn" type="submit">
          Vote
        </button>
      </form>
    </div>
  );
}
export default Vote;

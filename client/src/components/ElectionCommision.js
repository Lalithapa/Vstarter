function ElectionCommision(props) {
  const { contract } = props.state;
  const startVote = async (event) => {
    event.preventDefault();
    const start = document.querySelector("#start").value;
    const end = document.querySelector("#end").value;
    try {
      await contract.methods.voteTime(start, end).send({
        from: props.account,
        gas: "1000000",
      });
      alert("Voting Started");
    } catch (error) {
      alert(error);
    }
  };
  const emer = async () => {
    try {
      await contract.methods.emergency().send({
        from: props.account,
        gas: "1000000",
      });
      alert("Voting Stopped due to an Emergency");
    } catch (error) {
      alert(error);
    }
  };
  const results = async () => {
    try {
      await contract.methods.result().send({
        from: props.account,
        gas: "1000000",
      });
    } catch (error) {
      alert(error);
    }
    window.location.reload();
  };
  return (
    <>
      <div>
        <form className="form" onSubmit={startVote}>
          <label className="label2" htmlFor="start">
            Start Time:
          </label>
          <input className="innerBoxVote" type="text" id="start"></input>

          <label className="label2" htmlFor="end">
            End Time:
          </label>
          <input className="innerBoxVote" type="text" id="end"></input>

          <button className="regBtn" type="submit">
            Voting Start
          </button>
        </form>
      </div>
      <div className="space">
        <button className="emerBtn" onClick={emer}>
          Emergency
        </button>
        <button className="resBtn" onClick={results}>
          Result
        </button>
      </div>
    </>
  );
}
export default ElectionCommision;

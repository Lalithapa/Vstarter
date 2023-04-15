import { useEffect, useState } from "react";

function CandidateDisplay(props) {
  const [displayAccounts, setdisplayAccounts] = useState([]);
  useEffect(() => {
    debugger;
    const { contract } = props.state;
    const getList = async () => {
      const allCandidates = await contract.methods.candidateList().call();
      setdisplayAccounts(allCandidates);
    };
    contract && getList();
  }, [props.state]);

  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Party</th>
              <th>Address</th>
              <th>Candidate Id</th>
              <th>Vote Count</th>
            </tr>
            {displayAccounts.map((mmm) => {
              return (
                <>
                  <tr>
                    <td>{mmm.name}</td>
                    <td>{mmm.party}</td>
                    <td>{mmm.candidateAddress}</td>
                    <td>{mmm.candidateId}</td>
                    <td>{mmm.votes}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default CandidateDisplay;

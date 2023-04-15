import { useEffect, useState } from "react";

function VoterLists(props) {
  const [votList, setvotList] = useState([]);
  useEffect(() => {
    const { contract } = props.state;
    const getVoter = async () => {
      const allVoters = await contract.methods.voterList().call();
      setvotList(allVoters);
    };
    contract && getVoter();
  }, [props.state]);
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Voter Address</th>
              <th>Voter Id</th>
            </tr>
            {votList.map((mmm) => {
              return (
                <>
                  <tr>
                    <td>{mmm.name}</td>
                    <td>{mmm.age}</td>
                    <td>{mmm.voterAddress}</td>
                    <td>{mmm.voterId}</td>
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
export default VoterLists;

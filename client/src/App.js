// import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import getWeb3 from "./getWeb3";
// import Form from "./Components/Form.jsx";

// import "./App.css";

// class App extends Component {
//   state = { storageValue: 0, web3: null, accounts: null, contract: null };

//   componentDidMount = async () => {
//     try {
//       // Get network provider and web3 instance.
//       const web3 = await getWeb3();

//       // Use web3 to get the user's accounts.
//       const accounts = await web3.eth.getAccounts();

//       // Get the contract instance.
//       const networkId = await web3.eth.net.getId();
//       const deployedNetwork = SimpleStorageContract.networks[networkId];
//       const instance = new web3.eth.Contract(
//         SimpleStorageContract.abi,
//         deployedNetwork && deployedNetwork.address,
//       );

//       // Set web3, accounts, and contract to the state, and then proceed with an
//       // example of interacting with the contract's methods.
//       this.setState({ web3, accounts, contract: instance }, this.runExample);
//     } catch (error) {
//       // Catch any errors for any of the above operations.
//       alert(
//         `Failed to load web3, accounts, or contract. Check console for details.`,
//       );
//       console.error(error);
//     }
//   };

//   runExample = async () => {
//     const { accounts, contract } = this.state;

//     // Stores a given value, 5 by default.
//     await contract.methods.set(5).send({ from: accounts[0] });

//     // Get the value from the contract to prove it worked.
//     const response = await contract.methods.get().call();

//     // Update state with the result.
//     this.setState({ storageValue: response });
//   };

//   render() {
//     if (!this.state.web3) {
//       return <div>Loading Web3, accounts, and contract...</div>;
//     }
//     return (
//       <div className="Form__Container">
//         <h1> Welcome to Donation for the Vithushan's Foundation</h1>

//         <Form />
//         {/* <h1>Charity Chain</h1> <p>Your Truffle Box is installed and ready.</p>
//         <h2>Smart Contract Example</h2>
//         <p>
//           If your contracts compiled and migrated successfully, below will show
//           a stored value of 5 (by default).
//         </p>
//         <p>
//           Try changing the value stored on <strong>line 42</strong> of App.js.
//         </p>
//         <div>The stored value is: {this.state.storageValue}</div> */}
//       </div>
//     );
//   }
// }

// export default App;


// Importing modules
import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  // usetstate for storing and retrieving wallet details
   const [data, setdata] = useState({
         address: "",
         Balance: null,
          });

  // Button handler button for handling a
 // request event for metamask
    const btnhandler = () => {

        // Asking if metamask is already present or not
        if (window.ethereum) {

        // res[0] for fetching a first wallet
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((res) => accountChangeHandler(res[0]));
        } else {
        alert("install metamask extension!!");
        }
      };

      // getbalance function for getting a balance in
      // a right format with help of ethers
      const getbalance = (address) => {

        // Requesting balance method
        window.ethereum
        .request({
          method: "eth_getBalance",
          params: [address, "latest"]
        })
        .then((balance) => {
          // Setting balance
          setdata({
          Balance: ethers.utils.formatEther(balance),
          });
        });
      };

      // Function for getting handling all events
      const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
        address: account,
        });

        // Setting a balance
        getbalance(account);
      };

      return (
        <div className="App">
        {/* Calling all values which we
        have stored in usestate */}

        <Card className="text-center">
          <Card.Header>
          <strong>Address: </strong>
          {data.address}
          </Card.Header>
          <Card.Body>
          <Card.Text>
            <strong>Balance: </strong>
            {data.Balance}
          </Card.Text>
          <Button onClick={btnhandler} variant="primary">
            Connect to wallet
          </Button>
          </Card.Body>
        </Card>
        </div>
      );
      }

      export default App;

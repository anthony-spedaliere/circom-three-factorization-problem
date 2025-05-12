/**
 * @title Proof Verification Script
 * @author Anthony Spedaliere
 * @notice Script to verify a ZK proof using the deployed Groth16Verifier contract
 * @dev Uses proof data from snarkjs generatecall to verify a proof on-chain
 */

const { ethers } = require("hardhat");

async function main() {
  // Get the deployed verifier contract address
  // Replace with your actual deployed contract address after deployment
  const VERIFIER_ADDRESS = "0xC576A87447908f9d9C262152DF0787434C284637";

  // Get the verifier contract instance
  const verifier = await ethers.getContractAt(
    "Groth16Verifier",
    VERIFIER_ADDRESS
  );

  console.log("Calling verifyProof on contract:", VERIFIER_ADDRESS);

  // Proof data from snarkjs generatecall
  const a = [
    "0x297e5d7a7f903d15e81e2be0af1d269e643c92d807682198594b031323077bd1",
    "0x06ea797c8fbbd32e99df61e09e616865f42b0816d6acf1d9f44544038b622b8a",
  ];

  const b = [
    [
      "0x03c0ddadf43e837eee817ccd271f348b6df79daf022852b30bffae8937d66836",
      "0x171554644a519e04f4b25d250683ef0e54007172fa65dd2dc30973c89e1c310a",
    ],
    [
      "0x2a1c87099d6d172321c72831330d39d615e78b0e8e7ff3a54237b71617f18fe6",
      "0x26ceb46c67bd009abe08c6de0daba6831a68be0a8fb9eca1c14535a4e50960c5",
    ],
  ];

  const c = [
    "0x0851be7a97a12b6a8bac7c99f249ccdf8327f6062fc8829fd47e7a856742b819",
    "0x08a8c60556323d42d83db4d1b04f6fcc9b763d507b1adb21d1186721a8fa2a41",
  ];

  const publicInputs = [
    "0x1516fc71ee3e06fc2427ce8f605c17df03e07fde78602138764a42dbf8ae0cd3",
  ];

  // Call verifyProof function
  console.log("Verifying proof...");
  const result = await verifier.verifyProof(a, b, c, publicInputs);

  console.log("Proof verification result:", result);

  if (result) {
    console.log("✅ Proof is valid!");
  } else {
    console.log("❌ Proof is invalid!");
  }

  return result;
}

// Execute the verification
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

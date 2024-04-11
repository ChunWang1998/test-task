const hre = require("hardhat");
const contractAddress = "0x210624C5A959A20aD89239Ec3103F254E3E97601";

let myContract;

async function getContractInstance() {
  if (!myContract) {
    myContract = await hre.ethers.getContractAt("Test", contractAddress);
  }

  return myContract;
}

exports.getBalance = async (req, res) => {
  try {
    const address = req.query.address; // Get address from request query parameter
    const myContractInstance = await getContractInstance();

    // Use myContractInstance to interact with the contract
    const balance = await myContractInstance.balanceOf(address);

    return res.status(200).send({
      success: true,
      msg: "Token balance retrieved",
      data: {
        address,
        balance: balance.toString(), // Convert BigNumber to string
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      msg: "Server error",
      error: error.message,
    });
  }
};

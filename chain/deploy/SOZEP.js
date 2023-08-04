async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying SOZEP with the account:", deployer.address);

  const sozep = await ethers.deployContract("SOZEP");

  console.log("SOZEP token address:", await sozep.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode(1);
  });

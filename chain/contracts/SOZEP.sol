// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SOZEP is ERC20, Ownable {
    constructor() ERC20("Simple OpenZeppelin Token", "SOZEP") {}

    function issueToken() public onlyOwner {
        _mint(msg.sender, 1000*10**18);
    }
}
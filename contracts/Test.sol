// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract Test is ERC20, ERC20Permit {
    constructor() ERC20("Test", "T") ERC20Permit("Test") {
        _mint(msg.sender, 10001 * 10 ** decimals());
    }
}

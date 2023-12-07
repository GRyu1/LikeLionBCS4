// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("G-ryu", "ChKR") {
        _mint(msg.sender, initialSupply * 10 ** 18);
    }
}

//Zero address 로 보내면 토큰이 탐, 세폴리아 이더스캔io
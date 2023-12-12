// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MintNFT is ERC1155 {
    string public name;
    string public symbol;
    string metadataURI;
    uint maxSupply;

    constructor(string memory _name, string memory _symbol, string memory _metadataURI, uint _maxSupply) ERC1155("") {
        name = _name;
        symbol = _symbol;
        metadataURI= _metadataURI;
        maxSupply = _maxSupply;
    }
}
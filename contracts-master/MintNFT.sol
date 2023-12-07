// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintNFT is ERC721Enumerable {
    mapping(uint => string) metadataURIs;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function mintNFT(string memory _metadataURI) public {
        uint tokenId = totalSupply() + 1;

    _mint(msg.sender, tokenId);

    metadataURIs[tokenId] = _metadataURI; 

    }
    

    function tokenURI(uint _tokenId) public view override returns(string memory) {
        return metadataURIs[_tokenId];
    }
}
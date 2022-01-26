// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract AdminBoxV2 is Initializable {
    uint256 private _value;
    address private _admin;

    event ValueChanged(uint256 value);

    function initialize(address admin) public initializer {
        _admin = admin;        
    }

    function store(uint256 value) public {
        require(msg.sender == _admin, 'AdminBox: not admin!');
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }

    function increment(uint256 value) public {
        require(msg.sender == _admin, "AdminBox: not Admin!");
        _value = _value + value;
        emit ValueChanged(_value); 
    }
}
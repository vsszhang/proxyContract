// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Addition {
	uint256 _number = 256;

	function setNumber(uint256 num) public {
		_number = num;
	}

	function getNumber() public view returns (uint256)  {
		return _number;
	}
}

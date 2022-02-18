// SPDX-License-Identifier: MIT
pragma solidity^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract StoreNum is Initializable {
    uint _x;
    uint _y;

    function initialize() public initializer {
        _x = 1;
        _y = 2;
    }

    function _setx(uint num) private {
        _x = num;
    }
    function getx() view public returns (uint) {
        return _x;
    }

    function _sety(uint num) private {
        _y = num;
    }
    function gety() view public returns (uint) {
        return _y;
    }
}
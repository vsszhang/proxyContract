//// SPDX-License-Identifier: MIT
pragma solidity^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract StoreNumV2 is Initializable {
    uint _x;
    uint _y;

    // add new varaiable
    uint _z;

    function initialize() public initializer {
        _x = 1;
        _y = 2;
    }

    function _setx(uint num) external {
        _x = num;
    }
    function getx() view public returns (uint) {
        return _x;
    }

    function _sety(uint num) external {
        _y = num;
    }
    function gety() view public returns (uint) {
        return _y;
    }

    // TODO:add V2 content and use newAdmin to upgrade
    // Asked LinHan can JS whether write content into file and read the file or not
    function _setz(uint num) external {
        _z = num;
    }
    function getz() view public returns (uint) {
        return _z;
    }

}

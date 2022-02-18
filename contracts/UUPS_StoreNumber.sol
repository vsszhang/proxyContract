// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract UUPS_StoreNumber is Initializable, UUPSUpgradeable, OwnableUpgradeable {
    uint _a;
    uint _b;

    function initialize() initializer public {
        _a = 1;
        _b = 2;
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function geta() view external returns (uint) {
        return _a;
    }

    function getb() view external returns (uint) {
        return _b;
    }

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function _authorizeUpgrade(address) internal override onlyOwner {}
}
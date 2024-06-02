// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable {
    string public status;
    uint256 public totalFunds;

    function launch() public {
        status = "lift-off";
    }

    constructor() payable Ownable(msg.sender) {
        totalFunds = msg.value;
        status = "ignition";
    }

    function addFunds() public payable {
        totalFunds += msg.value;
    }

    function releaseFunds(address _payee, uint256 amount) public onlyOwner {
        payable(_payee).transfer(amount);
    }
}

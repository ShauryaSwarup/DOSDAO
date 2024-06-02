export const DT = {
    _format: "hh-sol-artifact-1",
    contractName: "DOSToken",
    sourceName: "contracts/DOSToken.sol",
    abi: [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [],
            name: "CheckpointUnorderedInsertion",
            type: "error",
        },
        {
            inputs: [],
            name: "ECDSAInvalidSignature",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "length",
                    type: "uint256",
                },
            ],
            name: "ECDSAInvalidSignatureLength",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32",
                },
            ],
            name: "ECDSAInvalidSignatureS",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "increasedSupply",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "cap",
                    type: "uint256",
                },
            ],
            name: "ERC20ExceededSafeSupply",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "allowance",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "needed",
                    type: "uint256",
                },
            ],
            name: "ERC20InsufficientAllowance",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "balance",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "needed",
                    type: "uint256",
                },
            ],
            name: "ERC20InsufficientBalance",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "approver",
                    type: "address",
                },
            ],
            name: "ERC20InvalidApprover",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "receiver",
                    type: "address",
                },
            ],
            name: "ERC20InvalidReceiver",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "sender",
                    type: "address",
                },
            ],
            name: "ERC20InvalidSender",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
            ],
            name: "ERC20InvalidSpender",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                },
            ],
            name: "ERC2612ExpiredSignature",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "signer",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "ERC2612InvalidSigner",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "timepoint",
                    type: "uint256",
                },
                {
                    internalType: "uint48",
                    name: "clock",
                    type: "uint48",
                },
            ],
            name: "ERC5805FutureLookup",
            type: "error",
        },
        {
            inputs: [],
            name: "ERC6372InconsistentClock",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "currentNonce",
                    type: "uint256",
                },
            ],
            name: "InvalidAccountNonce",
            type: "error",
        },
        {
            inputs: [],
            name: "InvalidShortString",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint8",
                    name: "bits",
                    type: "uint8",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "SafeCastOverflowedUintDowncast",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "str",
                    type: "string",
                },
            ],
            name: "StringTooLong",
            type: "error",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256",
                },
            ],
            name: "VotesExpiredSignature",
            type: "error",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "delegator",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "fromDelegate",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "toDelegate",
                    type: "address",
                },
            ],
            name: "DelegateChanged",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "delegate",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "previousVotes",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "newVotes",
                    type: "uint256",
                },
            ],
            name: "DelegateVotesChanged",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [],
            name: "EIP712DomainChanged",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            inputs: [],
            name: "CLOCK_MODE",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
            ],
            name: "allowance",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "approve",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    internalType: "uint32",
                    name: "pos",
                    type: "uint32",
                },
            ],
            name: "checkpoints",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint48",
                            name: "_key",
                            type: "uint48",
                        },
                        {
                            internalType: "uint208",
                            name: "_value",
                            type: "uint208",
                        },
                    ],
                    internalType: "struct Checkpoints.Checkpoint208",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "clock",
            outputs: [
                {
                    internalType: "uint48",
                    name: "",
                    type: "uint48",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "decimals",
            outputs: [
                {
                    internalType: "uint8",
                    name: "",
                    type: "uint8",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "delegatee",
                    type: "address",
                },
            ],
            name: "delegate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "delegatee",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "nonce",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "expiry",
                    type: "uint256",
                },
                {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8",
                },
                {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32",
                },
                {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32",
                },
            ],
            name: "delegateBySig",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "delegates",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "eip712Domain",
            outputs: [
                {
                    internalType: "bytes1",
                    name: "fields",
                    type: "bytes1",
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "version",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "chainId",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "verifyingContract",
                    type: "address",
                },
                {
                    internalType: "bytes32",
                    name: "salt",
                    type: "bytes32",
                },
                {
                    internalType: "uint256[]",
                    name: "extensions",
                    type: "uint256[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "timepoint",
                    type: "uint256",
                },
            ],
            name: "getPastTotalSupply",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "timepoint",
                    type: "uint256",
                },
            ],
            name: "getPastVotes",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "getVotes",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "launch",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "name",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
            ],
            name: "nonces",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "account",
                    type: "address",
                },
            ],
            name: "numCheckpoints",
            outputs: [
                {
                    internalType: "uint32",
                    name: "",
                    type: "uint32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "spender",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                },
                {
                    internalType: "uint8",
                    name: "v",
                    type: "uint8",
                },
                {
                    internalType: "bytes32",
                    name: "r",
                    type: "bytes32",
                },
                {
                    internalType: "bytes32",
                    name: "s",
                    type: "bytes32",
                },
            ],
            name: "permit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "status",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "transfer",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "value",
                    type: "uint256",
                },
            ],
            name: "transferFrom",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    bytecode:
        "0x6101606040523480156200001257600080fd5b506040518060400160405280600981526020017f444f5320546f6b656e0000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600981526020017f444f5320546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f444f5300000000000000000000000000000000000000000000000000000000008152508160039081620000fd9190620013bc565b5080600490816200010f9190620013bc565b505050620001286005836200024e60201b90919060201c565b6101208181525050620001466006826200024e60201b90919060201c565b6101408181525050818051906020012060e08181525050808051906020012061010081815250504660a0818152505062000185620002a660201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff16815250505050506200020133620001d86200030360201b60201c565b600a620001e6919062001633565b6103e8620001f5919062001684565b6200030c60201b60201c565b6040518060400160405280600881526020017f69676e6974696f6e000000000000000000000000000000000000000000000000815250600b9081620002479190620013bc565b5062001bbc565b600060208351101562000274576200026c836200039960201b60201c565b9050620002a0565b8262000286836200040660201b60201c565b6000019081620002979190620013bc565b5060ff60001b90505b92915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60e051610100514630604051602001620002e895949392919062001740565b60405160208183030381529060405280519060200120905090565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620003815760006040517fec442f050000000000000000000000000000000000000000000000000000000081526004016200037891906200179d565b60405180910390fd5b62000395600083836200041060201b60201c565b5050565b600080829050601f81511115620003e957826040517f305a27a9000000000000000000000000000000000000000000000000000000008152600401620003e0919062001849565b60405180910390fd5b805181620003f7906200189f565b60001c1760001b915050919050565b6000819050919050565b620004238383836200042860201b60201c565b505050565b6200043b838383620004fd60201b60201c565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620004e5576000620004826200072d60201b60201c565b90506000620004966200073760201b60201c565b905080821115620004e25781816040517f1cb15d26000000000000000000000000000000000000000000000000000000008152600401620004d99291906200190f565b60405180910390fd5b50505b620004f88383836200075b60201b60201c565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620005535780600260008282546200054691906200193c565b9250508190555062000629565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015620005e2578381836040517fe450d38c000000000000000000000000000000000000000000000000000000008152600401620005d99392919062001977565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620006745780600260008282540392505081905550620006c1565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620007209190620019b4565b60405180910390a3505050565b6000600254905090565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620007c257620007bf600a6200086160201b62000ee817620007b3846200087960201b60201c565b620008ea60201b60201c565b50505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620008295762000826600a6200093a60201b62000efe176200081a846200087960201b60201c565b620008ea60201b60201c565b50505b6200085c6200083e846200095260201b60201c565b6200084f846200095260201b60201c565b83620009bb60201b60201c565b505050565b60008183620008719190620019f7565b905092915050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115620008e25760d0826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401620008d992919062001a8f565b60405180910390fd5b819050919050565b6000806200092e6200090162000c6e60201b60201c565b6200091d620009168862000c8560201b60201c565b868860201c565b8762000cf960201b9092919060201c565b91509150935093915050565b600081836200094a919062001abc565b905092915050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015620009f85750600081115b1562000c6957600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161462000b335760008062000aa2600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200093a60201b62000efe1762000a96866200087960201b60201c565b620008ea60201b60201c565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405162000b289291906200190f565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161462000c685760008062000bd7600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200086160201b62000ee81762000bcb866200087960201b60201c565b620008ea60201b60201c565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405162000c5d9291906200190f565b60405180910390a250505b5b505050565b600062000c8062000d1e60201b60201c565b905090565b600080826000018054905090506000811462000cee5762000cbe8360000160018362000cb2919062001b11565b62000d3660201b60201c565b60000160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1662000cf1565b60005b915050919050565b60008062000d1285600001858562000d4b60201b60201c565b91509150935093915050565b600062000d3143620010e560201b60201c565b905090565b60008260005281602060002001905092915050565b600080600085805490509050600081111562000ff557600062000d838760018462000d77919062001b11565b62000d3660201b60201c565b6040518060400160405290816000820160009054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020016000820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152505090508565ffffffffffff16816000015165ffffffffffff16111562000e73576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8565ffffffffffff16816000015165ffffffffffff160362000f03578462000eb08860018562000ea4919062001b11565b62000d3660201b60201c565b60000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555062000fe3565b8660405180604001604052808865ffffffffffff1681526020018779ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b806020015185935093505050620010dd565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550505060008492509250505b935093915050565b600065ffffffffffff80168211156200113a576030826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016200113192919062001b8f565b60405180910390fd5b819050919050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620011c457607f821691505b602082108103620011da57620011d96200117c565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620012447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262001205565b62001250868362001205565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200129d62001297620012918462001268565b62001272565b62001268565b9050919050565b6000819050919050565b620012b9836200127c565b620012d1620012c882620012a4565b84845462001212565b825550505050565b600090565b620012e8620012d9565b620012f5818484620012ae565b505050565b5b818110156200131d5762001311600082620012de565b600181019050620012fb565b5050565b601f8211156200136c576200133681620011e0565b6200134184620011f5565b8101602085101562001351578190505b620013696200136085620011f5565b830182620012fa565b50505b505050565b600082821c905092915050565b6000620013916000198460080262001371565b1980831691505092915050565b6000620013ac83836200137e565b9150826002028217905092915050565b620013c78262001142565b67ffffffffffffffff811115620013e357620013e26200114d565b5b620013ef8254620011ab565b620013fc82828562001321565b600060209050601f8311600181146200143457600084156200141f578287015190505b6200142b85826200139e565b8655506200149b565b601f1984166200144486620011e0565b60005b828110156200146e5784890151825560018201915060208501945060208101905062001447565b868310156200148e57848901516200148a601f8916826200137e565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b60018511156200153157808604811115620015095762001508620014a3565b5b6001851615620015195780820291505b80810290506200152985620014d2565b9450620014e9565b94509492505050565b6000826200154c57600190506200161f565b816200155c57600090506200161f565b81600181146200157557600281146200158057620015b6565b60019150506200161f565b60ff841115620015955762001594620014a3565b5b8360020a915084821115620015af57620015ae620014a3565b5b506200161f565b5060208310610133831016604e8410600b8410161715620015f05782820a905083811115620015ea57620015e9620014a3565b5b6200161f565b620015ff8484846001620014df565b92509050818404811115620016195762001618620014a3565b5b81810290505b9392505050565b600060ff82169050919050565b6000620016408262001268565b91506200164d8362001626565b92506200167c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200153a565b905092915050565b6000620016918262001268565b91506200169e8362001268565b9250828202620016ae8162001268565b91508282048414831517620016c857620016c7620014a3565b5b5092915050565b6000819050919050565b620016e481620016cf565b82525050565b620016f58162001268565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200172882620016fb565b9050919050565b6200173a816200171b565b82525050565b600060a082019050620017576000830188620016d9565b620017666020830187620016d9565b620017756040830186620016d9565b620017846060830185620016ea565b6200179360808301846200172f565b9695505050505050565b6000602082019050620017b460008301846200172f565b92915050565b600082825260208201905092915050565b60005b83811015620017eb578082015181840152602081019050620017ce565b60008484015250505050565b6000601f19601f8301169050919050565b6000620018158262001142565b620018218185620017ba565b935062001833818560208601620017cb565b6200183e81620017f7565b840191505092915050565b6000602082019050818103600083015262001865818462001808565b905092915050565b600081519050919050565b6000819050602082019050919050565b6000620018968251620016cf565b80915050919050565b6000620018ac826200186d565b82620018b88462001878565b9050620018c58162001888565b925060208210156200190857620019037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8360200360080262001205565b831692505b5050919050565b6000604082019050620019266000830185620016ea565b620019356020830184620016ea565b9392505050565b6000620019498262001268565b9150620019568362001268565b9250828201905080821115620019715762001970620014a3565b5b92915050565b60006060820190506200198e60008301866200172f565b6200199d6020830185620016ea565b620019ac6040830184620016ea565b949350505050565b6000602082019050620019cb6000830184620016ea565b92915050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001a0482620019d1565b915062001a1183620019d1565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff81111562001a465762001a45620014a3565b5b92915050565b6000819050919050565b600062001a7762001a7162001a6b8462001a4c565b62001272565b62001626565b9050919050565b62001a898162001a56565b82525050565b600060408201905062001aa6600083018562001a7e565b62001ab56020830184620016ea565b9392505050565b600062001ac982620019d1565b915062001ad683620019d1565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff81111562001b0b5762001b0a620014a3565b5b92915050565b600062001b1e8262001268565b915062001b2b8362001268565b925082820390508181111562001b465762001b45620014a3565b5b92915050565b6000819050919050565b600062001b7762001b7162001b6b8462001b4c565b62001272565b62001626565b9050919050565b62001b898162001b56565b82525050565b600060408201905062001ba6600083018562001b7e565b62001bb56020830184620016ea565b9392505050565b60805160a05160c05160e051610100516101205161014051613ea462001c176000396000611515015260006114da0152600061193601526000611915015260006110ba01526000611110015260006111390152613ea46000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636fcfff45116100de57806395d89b4111610097578063c3cda52011610071578063c3cda520146104c9578063d505accf146104e5578063dd62ed3e14610501578063f1127ed8146105315761018e565b806395d89b411461044b5780639ab24eb014610469578063a9059cbb146104995761018e565b80636fcfff451461034957806370a08231146103795780637ecebe00146103a957806384b0196e146103d95780638e539e8c146103fd57806391ddadf41461042d5761018e565b8063313ce5671161014b57806340c10f191161012557806340c10f19146102c35780634bf5d7e9146102df578063587cde1e146102fd5780635c19a95c1461032d5761018e565b8063313ce567146102575780633644e515146102755780633a46b1a8146102935761018e565b806301339c211461019357806306fdde031461019d578063095ea7b3146101bb57806318160ddd146101eb578063200d2ed21461020957806323b872dd14610227575b600080fd5b61019b610561565b005b6101a56105a8565b6040516101b29190612d1a565b60405180910390f35b6101d560048036038101906101d09190612dd5565b61063a565b6040516101e29190612e30565b60405180910390f35b6101f361065d565b6040516102009190612e5a565b60405180910390f35b610211610667565b60405161021e9190612d1a565b60405180910390f35b610241600480360381019061023c9190612e75565b6106f5565b60405161024e9190612e30565b60405180910390f35b61025f610724565b60405161026c9190612ee4565b60405180910390f35b61027d61072d565b60405161028a9190612f18565b60405180910390f35b6102ad60048036038101906102a89190612dd5565b61073c565b6040516102ba9190612e5a565b60405180910390f35b6102dd60048036038101906102d89190612dd5565b610815565b005b6102e7610841565b6040516102f49190612d1a565b60405180910390f35b61031760048036038101906103129190612f33565b6108d5565b6040516103249190612f6f565b60405180910390f35b61034760048036038101906103429190612f33565b61093e565b005b610363600480360381019061035e9190612f33565b610958565b6040516103709190612fa9565b60405180910390f35b610393600480360381019061038e9190612f33565b61096a565b6040516103a09190612e5a565b60405180910390f35b6103c360048036038101906103be9190612f33565b6109b2565b6040516103d09190612e5a565b60405180910390f35b6103e16109c4565b6040516103f497969594939291906130bd565b60405180910390f35b61041760048036038101906104129190613141565b610a6e565b6040516104249190612e5a565b60405180910390f35b610435610b09565b604051610442919061318f565b60405180910390f35b610453610b18565b6040516104609190612d1a565b60405180910390f35b610483600480360381019061047e9190612f33565b610baa565b6040516104909190612e5a565b60405180910390f35b6104b360048036038101906104ae9190612dd5565b610c16565b6040516104c09190612e30565b60405180910390f35b6104e360048036038101906104de9190613202565b610c39565b005b6104ff60048036038101906104fa919061328f565b610cff565b005b61051b60048036038101906105169190613331565b610e47565b6040516105289190612e5a565b60405180910390f35b61054b6004803603810190610546919061339d565b610ece565b6040516105589190613450565b60405180910390f35b6040518060400160405280600881526020017f6c6966742d6f6666000000000000000000000000000000000000000000000000815250600b90816105a591906136a6565b50565b6060600380546105b7906134c9565b80601f01602080910402602001604051908101604052809291908181526020018280546105e3906134c9565b80156106305780601f1061060557610100808354040283529160200191610630565b820191906000526020600020905b81548152906001019060200180831161061357829003601f168201915b5050505050905090565b600080610645610f14565b9050610652818585610f1c565b600191505092915050565b6000600254905090565b600b8054610674906134c9565b80601f01602080910402602001604051908101604052809291908181526020018280546106a0906134c9565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b505050505081565b600080610700610f14565b905061070d858285610f2e565b610718858585610fc2565b60019150509392505050565b60006012905090565b60006107376110b6565b905090565b600080610747610b09565b90508065ffffffffffff1683106107975782816040517fecd3f81e00000000000000000000000000000000000000000000000000000000815260040161078e929190613778565b60405180910390fd5b6107f06107a38461116d565b600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206111c790919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff1691505092915050565b61083d82610821610724565b600a61082d9190613903565b83610838919061394e565b6112c1565b5050565b606061084b611343565b65ffffffffffff1661085b610b09565b65ffffffffffff161461089a576040517f6ff0714000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060400160405280601d81526020017f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000815250905090565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610948610f14565b90506109548183611353565b5050565b600061096382611467565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006109bd826114bf565b9050919050565b6000606080600080600060606109d86114d1565b6109e061150c565b46306000801b600067ffffffffffffffff811115610a0157610a0061346b565b5b604051908082528060200260200182016040528015610a2f5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b600080610a79610b09565b90508065ffffffffffff168310610ac95782816040517fecd3f81e000000000000000000000000000000000000000000000000000000008152600401610ac0929190613778565b60405180910390fd5b610ae5610ad58461116d565b600a6111c790919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000610b13611343565b905090565b606060048054610b27906134c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b53906134c9565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b5050505050905090565b6000610bf3600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611547565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b600080610c21610f14565b9050610c2e818585610fc2565b600191505092915050565b83421115610c7e57836040517f4683af0e000000000000000000000000000000000000000000000000000000008152600401610c759190612e5a565b60405180910390fd5b6000610ce0610cd87fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf898989604051602001610cbd9493929190613990565b604051602081830303815290604052805190602001206115af565b8585856115c9565b9050610cec81876115f9565b610cf68188611353565b50505050505050565b83421115610d4457836040517f62791302000000000000000000000000000000000000000000000000000000008152600401610d3b9190612e5a565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610d738c611651565b89604051602001610d89969594939291906139d5565b6040516020818303038152906040528051906020012090506000610dac826115af565b90506000610dbc828787876115c9565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e3057808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610e27929190613a36565b60405180910390fd5b610e3b8a8a8a610f1c565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610ed6612c4c565b610ee083836116a8565b905092915050565b60008183610ef69190613a5f565b905092915050565b60008183610f0c9190613aad565b905092915050565b600033905090565b610f298383836001611709565b505050565b6000610f3a8484610e47565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fbc5781811015610fac578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610fa393929190613afb565b60405180910390fd5b610fbb84848484036000611709565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110345760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161102b9190612f6f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110a65760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161109d9190612f6f565b60405180910390fd5b6110b18383836118e0565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561113257507f000000000000000000000000000000000000000000000000000000000000000046145b1561115f577f0000000000000000000000000000000000000000000000000000000000000000905061116a565b6111676118f0565b90505b90565b600065ffffffffffff80168211156111bf576030826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016111b6929190613b6d565b60405180910390fd5b819050919050565b60008083600001805490509050600080829050600583111561124f5760006111ee84611986565b846111f99190613b96565b90506112088760000182611a7f565b60000160009054906101000a900465ffffffffffff1665ffffffffffff168665ffffffffffff16101561123d5780915061124d565b60018161124a9190613bca565b92505b505b600061126087600001878585611a94565b9050600081146112b2576112838760000160018361127e9190613b96565b611a7f565b60000160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166112b5565b60005b94505050505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113335760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161132a9190612f6f565b60405180910390fd5b61133f600083836118e0565b5050565b600061134e4361116d565b905090565b600061135e836108d5565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611462818361145d86611b0d565b611b1f565b505050565b60006114b86114b3600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d98565b611da9565b9050919050565b60006114ca82611e01565b9050919050565b606061150760057f0000000000000000000000000000000000000000000000000000000000000000611e4a90919063ffffffff16565b905090565b606061154260067f0000000000000000000000000000000000000000000000000000000000000000611e4a90919063ffffffff16565b905090565b60008082600001805490509050600081146115a457611575836000016001836115709190613b96565b611a7f565b60000160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166115a7565b60005b915050919050565b60006115c26115bc6110b6565b83611efa565b9050919050565b6000806000806115db88888888611f3b565b9250925092506115eb828261202f565b829350505050949350505050565b600061160483611651565b905080821461164c5782816040517f752d88c0000000000000000000000000000000000000000000000000000000008152600401611643929190613bfe565b60405180910390fd5b505050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050559050919050565b6116b0612c4c565b61170182600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061219390919063ffffffff16565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361177b5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016117729190612f6f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036117ed5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016117e49190612f6f565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156118da578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118d19190612e5a565b60405180910390a35b50505050565b6118eb838383612268565b505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000463060405160200161196b959493929190613c27565b60405160208183030381529060405280519060200120905090565b60008082036119985760009050611a7a565b600060016119a584612319565b901c6001901b905060018184816119bf576119be613c7a565b5b048201901c905060018184816119d8576119d7613c7a565b5b048201901c905060018184816119f1576119f0613c7a565b5b048201901c90506001818481611a0a57611a09613c7a565b5b048201901c90506001818481611a2357611a22613c7a565b5b048201901c90506001818481611a3c57611a3b613c7a565b5b048201901c90506001818481611a5557611a54613c7a565b5b048201901c9050611a7681828581611a7057611a6f613c7a565b5b046123fa565b9150505b919050565b60008260005281602060002001905092915050565b60005b81831015611b02576000611aab8484612413565b90508465ffffffffffff16611ac08783611a7f565b60000160009054906101000a900465ffffffffffff1665ffffffffffff161115611aec57809250611afc565b600181611af99190613bca565b93505b50611a97565b819050949350505050565b6000611b188261096a565b9050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611b5b5750600081115b15611d9357600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611c7957600080611bea600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610efe611be586612439565b6124a7565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611c6e929190613ca9565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611d9257600080611d03600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610ee8611cfe86612439565b6124a7565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d87929190613ca9565b60405180910390a250505b5b505050565b600081600001805490509050919050565b600063ffffffff8016821115611df9576020826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401611df0929190613d0d565b60405180910390fd5b819050919050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060ff60001b8314611e6757611e60836124e7565b9050611ef4565b818054611e73906134c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9f906134c9565b8015611eec5780601f10611ec157610100808354040283529160200191611eec565b820191906000526020600020905b815481529060010190602001808311611ecf57829003601f168201915b505050505090505b92915050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c1115611f7b576000600385925092509250612025565b600060018888888860405160008152602001604052604051611fa09493929190613d36565b6020604051602081039080840390855afa158015611fc2573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361201657600060016000801b93509350935050612025565b8060008060001b935093509350505b9450945094915050565b6000600381111561204357612042613d7b565b5b82600381111561205657612055613d7b565b5b031561218f57600160038111156120705761206f613d7b565b5b82600381111561208357612082613d7b565b5b036120ba576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260038111156120ce576120cd613d7b565b5b8260038111156120e1576120e0613d7b565b5b03612126578060001c6040517ffce698f700000000000000000000000000000000000000000000000000000000815260040161211d9190612e5a565b60405180910390fd5b60038081111561213957612138613d7b565b5b82600381111561214c5761214b613d7b565b5b0361218e57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016121859190612f18565b60405180910390fd5b5b5050565b61219b612c4c565b826000018263ffffffff16815481106121b7576121b6613daa565b5b906000526020600020016040518060400160405290816000820160009054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020016000820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b61227383838361255b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036123095760006122b161065d565b905060006122bd612780565b9050808211156123065781816040517f1cb15d260000000000000000000000000000000000000000000000000000000081526004016122fd929190613ca9565b60405180910390fd5b50505b6123148383836127a4565b505050565b600080600090506000608084901c111561233b57608083901c92506080810190505b6000604084901c111561235657604083901c92506040810190505b6000602084901c111561237157602083901c92506020810190505b6000601084901c111561238c57601083901c92506010810190505b6000600884901c11156123a757600883901c92506008810190505b6000600484901c11156123c257600483901c92506004810190505b6000600284901c11156123dd57600283901c92506002810190505b6000600184901c11156123f1576001810190505b80915050919050565b6000818310612409578161240b565b825b905092915050565b600060028284186124249190613dd9565b8284166124319190613bca565b905092915050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff801682111561249f5760d0826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401612496929190613e45565b60405180910390fd5b819050919050565b6000806124db6124b5610b09565b6124cb6124c188611547565b868863ffffffff16565b8761285e9092919063ffffffff16565b91509150935093915050565b606060006124f48361287b565b90506000602067ffffffffffffffff8111156125135761251261346b565b5b6040519080825280601f01601f1916602001820160405280156125455781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036125ad5780600260008282546125a19190613bca565b92505081905550612680565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612639578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161263093929190613afb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036126c95780600260008282540392505081905550612716565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516127739190612e5a565b60405180910390a3505050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036127f1576127ee600a610ee86127e984612439565b6124a7565b50505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361283e5761283b600a610efe61283684612439565b6124a7565b50505b61285961284a846108d5565b612853846108d5565b83611b1f565b505050565b60008061286f8560000185856128cb565b91509150935093915050565b60008060ff8360001c169050601f8111156128c2576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b6000806000858054905090506000811115612b5c5760006128f8876001846128f39190613b96565b611a7f565b6040518060400160405290816000820160009054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020016000820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152505090508565ffffffffffff16816000015165ffffffffffff1611156129e7576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8565ffffffffffff16816000015165ffffffffffff1603612a6b5784612a1988600185612a149190613b96565b611a7f565b60000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550612b4b565b8660405180604001604052808865ffffffffffff1681526020018779ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b806020015185935093505050612c44565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550505060008492509250505b935093915050565b6040518060400160405280600065ffffffffffff168152602001600079ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cc4578082015181840152602081019050612ca9565b60008484015250505050565b6000601f19601f8301169050919050565b6000612cec82612c8a565b612cf68185612c95565b9350612d06818560208601612ca6565b612d0f81612cd0565b840191505092915050565b60006020820190508181036000830152612d348184612ce1565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612d6c82612d41565b9050919050565b612d7c81612d61565b8114612d8757600080fd5b50565b600081359050612d9981612d73565b92915050565b6000819050919050565b612db281612d9f565b8114612dbd57600080fd5b50565b600081359050612dcf81612da9565b92915050565b60008060408385031215612dec57612deb612d3c565b5b6000612dfa85828601612d8a565b9250506020612e0b85828601612dc0565b9150509250929050565b60008115159050919050565b612e2a81612e15565b82525050565b6000602082019050612e456000830184612e21565b92915050565b612e5481612d9f565b82525050565b6000602082019050612e6f6000830184612e4b565b92915050565b600080600060608486031215612e8e57612e8d612d3c565b5b6000612e9c86828701612d8a565b9350506020612ead86828701612d8a565b9250506040612ebe86828701612dc0565b9150509250925092565b600060ff82169050919050565b612ede81612ec8565b82525050565b6000602082019050612ef96000830184612ed5565b92915050565b6000819050919050565b612f1281612eff565b82525050565b6000602082019050612f2d6000830184612f09565b92915050565b600060208284031215612f4957612f48612d3c565b5b6000612f5784828501612d8a565b91505092915050565b612f6981612d61565b82525050565b6000602082019050612f846000830184612f60565b92915050565b600063ffffffff82169050919050565b612fa381612f8a565b82525050565b6000602082019050612fbe6000830184612f9a565b92915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b612ff981612fc4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61303481612d9f565b82525050565b6000613046838361302b565b60208301905092915050565b6000602082019050919050565b600061306a82612fff565b613074818561300a565b935061307f8361301b565b8060005b838110156130b0578151613097888261303a565b97506130a283613052565b925050600181019050613083565b5085935050505092915050565b600060e0820190506130d2600083018a612ff0565b81810360208301526130e48189612ce1565b905081810360408301526130f88188612ce1565b90506131076060830187612e4b565b6131146080830186612f60565b61312160a0830185612f09565b81810360c0830152613133818461305f565b905098975050505050505050565b60006020828403121561315757613156612d3c565b5b600061316584828501612dc0565b91505092915050565b600065ffffffffffff82169050919050565b6131898161316e565b82525050565b60006020820190506131a46000830184613180565b92915050565b6131b381612ec8565b81146131be57600080fd5b50565b6000813590506131d0816131aa565b92915050565b6131df81612eff565b81146131ea57600080fd5b50565b6000813590506131fc816131d6565b92915050565b60008060008060008060c0878903121561321f5761321e612d3c565b5b600061322d89828a01612d8a565b965050602061323e89828a01612dc0565b955050604061324f89828a01612dc0565b945050606061326089828a016131c1565b935050608061327189828a016131ed565b92505060a061328289828a016131ed565b9150509295509295509295565b600080600080600080600060e0888a0312156132ae576132ad612d3c565b5b60006132bc8a828b01612d8a565b97505060206132cd8a828b01612d8a565b96505060406132de8a828b01612dc0565b95505060606132ef8a828b01612dc0565b94505060806133008a828b016131c1565b93505060a06133118a828b016131ed565b92505060c06133228a828b016131ed565b91505092959891949750929550565b6000806040838503121561334857613347612d3c565b5b600061335685828601612d8a565b925050602061336785828601612d8a565b9150509250929050565b61337a81612f8a565b811461338557600080fd5b50565b60008135905061339781613371565b92915050565b600080604083850312156133b4576133b3612d3c565b5b60006133c285828601612d8a565b92505060206133d385828601613388565b9150509250929050565b6133e68161316e565b82525050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61341b816133ec565b82525050565b60408201600082015161343760008501826133dd565b50602082015161344a6020850182613412565b50505050565b60006040820190506134656000830184613421565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134e157607f821691505b6020821081036134f4576134f361349a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261355c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261351f565b613566868361351f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006135a361359e61359984612d9f565b61357e565b612d9f565b9050919050565b6000819050919050565b6135bd83613588565b6135d16135c9826135aa565b84845461352c565b825550505050565b600090565b6135e66135d9565b6135f18184846135b4565b505050565b5b818110156136155761360a6000826135de565b6001810190506135f7565b5050565b601f82111561365a5761362b816134fa565b6136348461350f565b81016020851015613643578190505b61365761364f8561350f565b8301826135f6565b50505b505050565b600082821c905092915050565b600061367d6000198460080261365f565b1980831691505092915050565b6000613696838361366c565b9150826002028217905092915050565b6136af82612c8a565b67ffffffffffffffff8111156136c8576136c761346b565b5b6136d282546134c9565b6136dd828285613619565b600060209050601f83116001811461371057600084156136fe578287015190505b613708858261368a565b865550613770565b601f19841661371e866134fa565b60005b8281101561374657848901518255600182019150602085019450602081019050613721565b86831015613763578489015161375f601f89168261366c565b8355505b6001600288020188555050505b505050505050565b600060408201905061378d6000830185612e4b565b61379a6020830184613180565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561382757808604811115613803576138026137a1565b5b60018516156138125780820291505b8081029050613820856137d0565b94506137e7565b94509492505050565b60008261384057600190506138fc565b8161384e57600090506138fc565b8160018114613864576002811461386e5761389d565b60019150506138fc565b60ff8411156138805761387f6137a1565b5b8360020a915084821115613897576138966137a1565b5b506138fc565b5060208310610133831016604e8410600b84101617156138d25782820a9050838111156138cd576138cc6137a1565b5b6138fc565b6138df84848460016137dd565b925090508184048111156138f6576138f56137a1565b5b81810290505b9392505050565b600061390e82612d9f565b915061391983612ec8565b92506139467fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613830565b905092915050565b600061395982612d9f565b915061396483612d9f565b925082820261397281612d9f565b91508282048414831517613989576139886137a1565b5b5092915050565b60006080820190506139a56000830187612f09565b6139b26020830186612f60565b6139bf6040830185612e4b565b6139cc6060830184612e4b565b95945050505050565b600060c0820190506139ea6000830189612f09565b6139f76020830188612f60565b613a046040830187612f60565b613a116060830186612e4b565b613a1e6080830185612e4b565b613a2b60a0830184612e4b565b979650505050505050565b6000604082019050613a4b6000830185612f60565b613a586020830184612f60565b9392505050565b6000613a6a826133ec565b9150613a75836133ec565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613aa757613aa66137a1565b5b92915050565b6000613ab8826133ec565b9150613ac3836133ec565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613af557613af46137a1565b5b92915050565b6000606082019050613b106000830186612f60565b613b1d6020830185612e4b565b613b2a6040830184612e4b565b949350505050565b6000819050919050565b6000613b57613b52613b4d84613b32565b61357e565b612ec8565b9050919050565b613b6781613b3c565b82525050565b6000604082019050613b826000830185613b5e565b613b8f6020830184612e4b565b9392505050565b6000613ba182612d9f565b9150613bac83612d9f565b9250828203905081811115613bc457613bc36137a1565b5b92915050565b6000613bd582612d9f565b9150613be083612d9f565b9250828201905080821115613bf857613bf76137a1565b5b92915050565b6000604082019050613c136000830185612f60565b613c206020830184612e4b565b9392505050565b600060a082019050613c3c6000830188612f09565b613c496020830187612f09565b613c566040830186612f09565b613c636060830185612e4b565b613c706080830184612f60565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050613cbe6000830185612e4b565b613ccb6020830184612e4b565b9392505050565b6000819050919050565b6000613cf7613cf2613ced84613cd2565b61357e565b612ec8565b9050919050565b613d0781613cdc565b82525050565b6000604082019050613d226000830185613cfe565b613d2f6020830184612e4b565b9392505050565b6000608082019050613d4b6000830187612f09565b613d586020830186612ed5565b613d656040830185612f09565b613d726060830184612f09565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613de482612d9f565b9150613def83612d9f565b925082613dff57613dfe613c7a565b5b828204905092915050565b6000819050919050565b6000613e2f613e2a613e2584613e0a565b61357e565b612ec8565b9050919050565b613e3f81613e14565b82525050565b6000604082019050613e5a6000830185613e36565b613e676020830184612e4b565b939250505056fea26469706673582212201bdc6e6bc10cc0a79e1be5914213e58fedb8053f7f72966e78e22d1b2529b77764736f6c63430008180033",
    deployedBytecode:
        "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c80636fcfff45116100de57806395d89b4111610097578063c3cda52011610071578063c3cda520146104c9578063d505accf146104e5578063dd62ed3e14610501578063f1127ed8146105315761018e565b806395d89b411461044b5780639ab24eb014610469578063a9059cbb146104995761018e565b80636fcfff451461034957806370a08231146103795780637ecebe00146103a957806384b0196e146103d95780638e539e8c146103fd57806391ddadf41461042d5761018e565b8063313ce5671161014b57806340c10f191161012557806340c10f19146102c35780634bf5d7e9146102df578063587cde1e146102fd5780635c19a95c1461032d5761018e565b8063313ce567146102575780633644e515146102755780633a46b1a8146102935761018e565b806301339c211461019357806306fdde031461019d578063095ea7b3146101bb57806318160ddd146101eb578063200d2ed21461020957806323b872dd14610227575b600080fd5b61019b610561565b005b6101a56105a8565b6040516101b29190612d1a565b60405180910390f35b6101d560048036038101906101d09190612dd5565b61063a565b6040516101e29190612e30565b60405180910390f35b6101f361065d565b6040516102009190612e5a565b60405180910390f35b610211610667565b60405161021e9190612d1a565b60405180910390f35b610241600480360381019061023c9190612e75565b6106f5565b60405161024e9190612e30565b60405180910390f35b61025f610724565b60405161026c9190612ee4565b60405180910390f35b61027d61072d565b60405161028a9190612f18565b60405180910390f35b6102ad60048036038101906102a89190612dd5565b61073c565b6040516102ba9190612e5a565b60405180910390f35b6102dd60048036038101906102d89190612dd5565b610815565b005b6102e7610841565b6040516102f49190612d1a565b60405180910390f35b61031760048036038101906103129190612f33565b6108d5565b6040516103249190612f6f565b60405180910390f35b61034760048036038101906103429190612f33565b61093e565b005b610363600480360381019061035e9190612f33565b610958565b6040516103709190612fa9565b60405180910390f35b610393600480360381019061038e9190612f33565b61096a565b6040516103a09190612e5a565b60405180910390f35b6103c360048036038101906103be9190612f33565b6109b2565b6040516103d09190612e5a565b60405180910390f35b6103e16109c4565b6040516103f497969594939291906130bd565b60405180910390f35b61041760048036038101906104129190613141565b610a6e565b6040516104249190612e5a565b60405180910390f35b610435610b09565b604051610442919061318f565b60405180910390f35b610453610b18565b6040516104609190612d1a565b60405180910390f35b610483600480360381019061047e9190612f33565b610baa565b6040516104909190612e5a565b60405180910390f35b6104b360048036038101906104ae9190612dd5565b610c16565b6040516104c09190612e30565b60405180910390f35b6104e360048036038101906104de9190613202565b610c39565b005b6104ff60048036038101906104fa919061328f565b610cff565b005b61051b60048036038101906105169190613331565b610e47565b6040516105289190612e5a565b60405180910390f35b61054b6004803603810190610546919061339d565b610ece565b6040516105589190613450565b60405180910390f35b6040518060400160405280600881526020017f6c6966742d6f6666000000000000000000000000000000000000000000000000815250600b90816105a591906136a6565b50565b6060600380546105b7906134c9565b80601f01602080910402602001604051908101604052809291908181526020018280546105e3906134c9565b80156106305780601f1061060557610100808354040283529160200191610630565b820191906000526020600020905b81548152906001019060200180831161061357829003601f168201915b5050505050905090565b600080610645610f14565b9050610652818585610f1c565b600191505092915050565b6000600254905090565b600b8054610674906134c9565b80601f01602080910402602001604051908101604052809291908181526020018280546106a0906134c9565b80156106ed5780601f106106c2576101008083540402835291602001916106ed565b820191906000526020600020905b8154815290600101906020018083116106d057829003601f168201915b505050505081565b600080610700610f14565b905061070d858285610f2e565b610718858585610fc2565b60019150509392505050565b60006012905090565b60006107376110b6565b905090565b600080610747610b09565b90508065ffffffffffff1683106107975782816040517fecd3f81e00000000000000000000000000000000000000000000000000000000815260040161078e929190613778565b60405180910390fd5b6107f06107a38461116d565b600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206111c790919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff1691505092915050565b61083d82610821610724565b600a61082d9190613903565b83610838919061394e565b6112c1565b5050565b606061084b611343565b65ffffffffffff1661085b610b09565b65ffffffffffff161461089a576040517f6ff0714000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040518060400160405280601d81526020017f6d6f64653d626c6f636b6e756d6265722666726f6d3d64656661756c74000000815250905090565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610948610f14565b90506109548183611353565b5050565b600061096382611467565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006109bd826114bf565b9050919050565b6000606080600080600060606109d86114d1565b6109e061150c565b46306000801b600067ffffffffffffffff811115610a0157610a0061346b565b5b604051908082528060200260200182016040528015610a2f5781602001602082028036833780820191505090505b507f0f00000000000000000000000000000000000000000000000000000000000000959493929190965096509650965096509650965090919293949596565b600080610a79610b09565b90508065ffffffffffff168310610ac95782816040517fecd3f81e000000000000000000000000000000000000000000000000000000008152600401610ac0929190613778565b60405180910390fd5b610ae5610ad58461116d565b600a6111c790919063ffffffff16565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000610b13611343565b905090565b606060048054610b27906134c9565b80601f0160208091040260200160405190810160405280929190818152602001828054610b53906134c9565b8015610ba05780601f10610b7557610100808354040283529160200191610ba0565b820191906000526020600020905b815481529060010190602001808311610b8357829003601f168201915b5050505050905090565b6000610bf3600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611547565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff169050919050565b600080610c21610f14565b9050610c2e818585610fc2565b600191505092915050565b83421115610c7e57836040517f4683af0e000000000000000000000000000000000000000000000000000000008152600401610c759190612e5a565b60405180910390fd5b6000610ce0610cd87fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf898989604051602001610cbd9493929190613990565b604051602081830303815290604052805190602001206115af565b8585856115c9565b9050610cec81876115f9565b610cf68188611353565b50505050505050565b83421115610d4457836040517f62791302000000000000000000000000000000000000000000000000000000008152600401610d3b9190612e5a565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610d738c611651565b89604051602001610d89969594939291906139d5565b6040516020818303038152906040528051906020012090506000610dac826115af565b90506000610dbc828787876115c9565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e3057808a6040517f4b800e46000000000000000000000000000000000000000000000000000000008152600401610e27929190613a36565b60405180910390fd5b610e3b8a8a8a610f1c565b50505050505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610ed6612c4c565b610ee083836116a8565b905092915050565b60008183610ef69190613a5f565b905092915050565b60008183610f0c9190613aad565b905092915050565b600033905090565b610f298383836001611709565b505050565b6000610f3a8484610e47565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610fbc5781811015610fac578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610fa393929190613afb565b60405180910390fd5b610fbb84848484036000611709565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110345760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161102b9190612f6f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110a65760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161109d9190612f6f565b60405180910390fd5b6110b18383836118e0565b505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614801561113257507f000000000000000000000000000000000000000000000000000000000000000046145b1561115f577f0000000000000000000000000000000000000000000000000000000000000000905061116a565b6111676118f0565b90505b90565b600065ffffffffffff80168211156111bf576030826040517f6dfcc6500000000000000000000000000000000000000000000000000000000081526004016111b6929190613b6d565b60405180910390fd5b819050919050565b60008083600001805490509050600080829050600583111561124f5760006111ee84611986565b846111f99190613b96565b90506112088760000182611a7f565b60000160009054906101000a900465ffffffffffff1665ffffffffffff168665ffffffffffff16101561123d5780915061124d565b60018161124a9190613bca565b92505b505b600061126087600001878585611a94565b9050600081146112b2576112838760000160018361127e9190613b96565b611a7f565b60000160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166112b5565b60005b94505050505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113335760006040517fec442f0500000000000000000000000000000000000000000000000000000000815260040161132a9190612f6f565b60405180910390fd5b61133f600083836118e0565b5050565b600061134e4361116d565b905090565b600061135e836108d5565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611462818361145d86611b0d565b611b1f565b505050565b60006114b86114b3600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d98565b611da9565b9050919050565b60006114ca82611e01565b9050919050565b606061150760057f0000000000000000000000000000000000000000000000000000000000000000611e4a90919063ffffffff16565b905090565b606061154260067f0000000000000000000000000000000000000000000000000000000000000000611e4a90919063ffffffff16565b905090565b60008082600001805490509050600081146115a457611575836000016001836115709190613b96565b611a7f565b60000160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff166115a7565b60005b915050919050565b60006115c26115bc6110b6565b83611efa565b9050919050565b6000806000806115db88888888611f3b565b9250925092506115eb828261202f565b829350505050949350505050565b600061160483611651565b905080821461164c5782816040517f752d88c0000000000000000000000000000000000000000000000000000000008152600401611643929190613bfe565b60405180910390fd5b505050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050559050919050565b6116b0612c4c565b61170182600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061219390919063ffffffff16565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361177b5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016117729190612f6f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036117ed5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016117e49190612f6f565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080156118da578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516118d19190612e5a565b60405180910390a35b50505050565b6118eb838383612268565b505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000463060405160200161196b959493929190613c27565b60405160208183030381529060405280519060200120905090565b60008082036119985760009050611a7a565b600060016119a584612319565b901c6001901b905060018184816119bf576119be613c7a565b5b048201901c905060018184816119d8576119d7613c7a565b5b048201901c905060018184816119f1576119f0613c7a565b5b048201901c90506001818481611a0a57611a09613c7a565b5b048201901c90506001818481611a2357611a22613c7a565b5b048201901c90506001818481611a3c57611a3b613c7a565b5b048201901c90506001818481611a5557611a54613c7a565b5b048201901c9050611a7681828581611a7057611a6f613c7a565b5b046123fa565b9150505b919050565b60008260005281602060002001905092915050565b60005b81831015611b02576000611aab8484612413565b90508465ffffffffffff16611ac08783611a7f565b60000160009054906101000a900465ffffffffffff1665ffffffffffff161115611aec57809250611afc565b600181611af99190613bca565b93505b50611a97565b819050949350505050565b6000611b188261096a565b9050919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611b5b5750600081115b15611d9357600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611c7957600080611bea600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610efe611be586612439565b6124a7565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611c6e929190613ca9565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611d9257600080611d03600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610ee8611cfe86612439565b6124a7565b79ffffffffffffffffffffffffffffffffffffffffffffffffffff16915079ffffffffffffffffffffffffffffffffffffffffffffffffffff1691508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d87929190613ca9565b60405180910390a250505b5b505050565b600081600001805490509050919050565b600063ffffffff8016821115611df9576020826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401611df0929190613d0d565b60405180910390fd5b819050919050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060ff60001b8314611e6757611e60836124e7565b9050611ef4565b818054611e73906134c9565b80601f0160208091040260200160405190810160405280929190818152602001828054611e9f906134c9565b8015611eec5780601f10611ec157610100808354040283529160200191611eec565b820191906000526020600020905b815481529060010190602001808311611ecf57829003601f168201915b505050505090505b92915050565b60006040517f190100000000000000000000000000000000000000000000000000000000000081528360028201528260228201526042812091505092915050565b60008060007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08460001c1115611f7b576000600385925092509250612025565b600060018888888860405160008152602001604052604051611fa09493929190613d36565b6020604051602081039080840390855afa158015611fc2573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361201657600060016000801b93509350935050612025565b8060008060001b935093509350505b9450945094915050565b6000600381111561204357612042613d7b565b5b82600381111561205657612055613d7b565b5b031561218f57600160038111156120705761206f613d7b565b5b82600381111561208357612082613d7b565b5b036120ba576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600260038111156120ce576120cd613d7b565b5b8260038111156120e1576120e0613d7b565b5b03612126578060001c6040517ffce698f700000000000000000000000000000000000000000000000000000000815260040161211d9190612e5a565b60405180910390fd5b60038081111561213957612138613d7b565b5b82600381111561214c5761214b613d7b565b5b0361218e57806040517fd78bce0c0000000000000000000000000000000000000000000000000000000081526004016121859190612f18565b60405180910390fd5b5b5050565b61219b612c4c565b826000018263ffffffff16815481106121b7576121b6613daa565b5b906000526020600020016040518060400160405290816000820160009054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020016000820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b61227383838361255b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036123095760006122b161065d565b905060006122bd612780565b9050808211156123065781816040517f1cb15d260000000000000000000000000000000000000000000000000000000081526004016122fd929190613ca9565b60405180910390fd5b50505b6123148383836127a4565b505050565b600080600090506000608084901c111561233b57608083901c92506080810190505b6000604084901c111561235657604083901c92506040810190505b6000602084901c111561237157602083901c92506020810190505b6000601084901c111561238c57601083901c92506010810190505b6000600884901c11156123a757600883901c92506008810190505b6000600484901c11156123c257600483901c92506004810190505b6000600284901c11156123dd57600283901c92506002810190505b6000600184901c11156123f1576001810190505b80915050919050565b6000818310612409578161240b565b825b905092915050565b600060028284186124249190613dd9565b8284166124319190613bca565b905092915050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff801682111561249f5760d0826040517f6dfcc650000000000000000000000000000000000000000000000000000000008152600401612496929190613e45565b60405180910390fd5b819050919050565b6000806124db6124b5610b09565b6124cb6124c188611547565b868863ffffffff16565b8761285e9092919063ffffffff16565b91509150935093915050565b606060006124f48361287b565b90506000602067ffffffffffffffff8111156125135761251261346b565b5b6040519080825280601f01601f1916602001820160405280156125455781602001600182028036833780820191505090505b5090508181528360208201528092505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036125ad5780600260008282546125a19190613bca565b92505081905550612680565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015612639578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161263093929190613afb565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036126c95780600260008282540392505081905550612716565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516127739190612e5a565b60405180910390a3505050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff8016905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036127f1576127ee600a610ee86127e984612439565b6124a7565b50505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361283e5761283b600a610efe61283684612439565b6124a7565b50505b61285961284a846108d5565b612853846108d5565b83611b1f565b505050565b60008061286f8560000185856128cb565b91509150935093915050565b60008060ff8360001c169050601f8111156128c2576040517fb3512b0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80915050919050565b6000806000858054905090506000811115612b5c5760006128f8876001846128f39190613b96565b611a7f565b6040518060400160405290816000820160009054906101000a900465ffffffffffff1665ffffffffffff1665ffffffffffff1681526020016000820160069054906101000a900479ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff1679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152505090508565ffffffffffff16816000015165ffffffffffff1611156129e7576040517f2520601d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8565ffffffffffff16816000015165ffffffffffff1603612a6b5784612a1988600185612a149190613b96565b611a7f565b60000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550612b4b565b8660405180604001604052808865ffffffffffff1681526020018779ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b806020015185935093505050612c44565b8560405180604001604052808765ffffffffffff1681526020018679ffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060208201518160000160066101000a81548179ffffffffffffffffffffffffffffffffffffffffffffffffffff021916908379ffffffffffffffffffffffffffffffffffffffffffffffffffff160217905550505060008492509250505b935093915050565b6040518060400160405280600065ffffffffffff168152602001600079ffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600081519050919050565b600082825260208201905092915050565b60005b83811015612cc4578082015181840152602081019050612ca9565b60008484015250505050565b6000601f19601f8301169050919050565b6000612cec82612c8a565b612cf68185612c95565b9350612d06818560208601612ca6565b612d0f81612cd0565b840191505092915050565b60006020820190508181036000830152612d348184612ce1565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612d6c82612d41565b9050919050565b612d7c81612d61565b8114612d8757600080fd5b50565b600081359050612d9981612d73565b92915050565b6000819050919050565b612db281612d9f565b8114612dbd57600080fd5b50565b600081359050612dcf81612da9565b92915050565b60008060408385031215612dec57612deb612d3c565b5b6000612dfa85828601612d8a565b9250506020612e0b85828601612dc0565b9150509250929050565b60008115159050919050565b612e2a81612e15565b82525050565b6000602082019050612e456000830184612e21565b92915050565b612e5481612d9f565b82525050565b6000602082019050612e6f6000830184612e4b565b92915050565b600080600060608486031215612e8e57612e8d612d3c565b5b6000612e9c86828701612d8a565b9350506020612ead86828701612d8a565b9250506040612ebe86828701612dc0565b9150509250925092565b600060ff82169050919050565b612ede81612ec8565b82525050565b6000602082019050612ef96000830184612ed5565b92915050565b6000819050919050565b612f1281612eff565b82525050565b6000602082019050612f2d6000830184612f09565b92915050565b600060208284031215612f4957612f48612d3c565b5b6000612f5784828501612d8a565b91505092915050565b612f6981612d61565b82525050565b6000602082019050612f846000830184612f60565b92915050565b600063ffffffff82169050919050565b612fa381612f8a565b82525050565b6000602082019050612fbe6000830184612f9a565b92915050565b60007fff0000000000000000000000000000000000000000000000000000000000000082169050919050565b612ff981612fc4565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61303481612d9f565b82525050565b6000613046838361302b565b60208301905092915050565b6000602082019050919050565b600061306a82612fff565b613074818561300a565b935061307f8361301b565b8060005b838110156130b0578151613097888261303a565b97506130a283613052565b925050600181019050613083565b5085935050505092915050565b600060e0820190506130d2600083018a612ff0565b81810360208301526130e48189612ce1565b905081810360408301526130f88188612ce1565b90506131076060830187612e4b565b6131146080830186612f60565b61312160a0830185612f09565b81810360c0830152613133818461305f565b905098975050505050505050565b60006020828403121561315757613156612d3c565b5b600061316584828501612dc0565b91505092915050565b600065ffffffffffff82169050919050565b6131898161316e565b82525050565b60006020820190506131a46000830184613180565b92915050565b6131b381612ec8565b81146131be57600080fd5b50565b6000813590506131d0816131aa565b92915050565b6131df81612eff565b81146131ea57600080fd5b50565b6000813590506131fc816131d6565b92915050565b60008060008060008060c0878903121561321f5761321e612d3c565b5b600061322d89828a01612d8a565b965050602061323e89828a01612dc0565b955050604061324f89828a01612dc0565b945050606061326089828a016131c1565b935050608061327189828a016131ed565b92505060a061328289828a016131ed565b9150509295509295509295565b600080600080600080600060e0888a0312156132ae576132ad612d3c565b5b60006132bc8a828b01612d8a565b97505060206132cd8a828b01612d8a565b96505060406132de8a828b01612dc0565b95505060606132ef8a828b01612dc0565b94505060806133008a828b016131c1565b93505060a06133118a828b016131ed565b92505060c06133228a828b016131ed565b91505092959891949750929550565b6000806040838503121561334857613347612d3c565b5b600061335685828601612d8a565b925050602061336785828601612d8a565b9150509250929050565b61337a81612f8a565b811461338557600080fd5b50565b60008135905061339781613371565b92915050565b600080604083850312156133b4576133b3612d3c565b5b60006133c285828601612d8a565b92505060206133d385828601613388565b9150509250929050565b6133e68161316e565b82525050565b600079ffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b61341b816133ec565b82525050565b60408201600082015161343760008501826133dd565b50602082015161344a6020850182613412565b50505050565b60006040820190506134656000830184613421565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806134e157607f821691505b6020821081036134f4576134f361349a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261355c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261351f565b613566868361351f565b95508019841693508086168417925050509392505050565b6000819050919050565b60006135a361359e61359984612d9f565b61357e565b612d9f565b9050919050565b6000819050919050565b6135bd83613588565b6135d16135c9826135aa565b84845461352c565b825550505050565b600090565b6135e66135d9565b6135f18184846135b4565b505050565b5b818110156136155761360a6000826135de565b6001810190506135f7565b5050565b601f82111561365a5761362b816134fa565b6136348461350f565b81016020851015613643578190505b61365761364f8561350f565b8301826135f6565b50505b505050565b600082821c905092915050565b600061367d6000198460080261365f565b1980831691505092915050565b6000613696838361366c565b9150826002028217905092915050565b6136af82612c8a565b67ffffffffffffffff8111156136c8576136c761346b565b5b6136d282546134c9565b6136dd828285613619565b600060209050601f83116001811461371057600084156136fe578287015190505b613708858261368a565b865550613770565b601f19841661371e866134fa565b60005b8281101561374657848901518255600182019150602085019450602081019050613721565b86831015613763578489015161375f601f89168261366c565b8355505b6001600288020188555050505b505050505050565b600060408201905061378d6000830185612e4b565b61379a6020830184613180565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561382757808604811115613803576138026137a1565b5b60018516156138125780820291505b8081029050613820856137d0565b94506137e7565b94509492505050565b60008261384057600190506138fc565b8161384e57600090506138fc565b8160018114613864576002811461386e5761389d565b60019150506138fc565b60ff8411156138805761387f6137a1565b5b8360020a915084821115613897576138966137a1565b5b506138fc565b5060208310610133831016604e8410600b84101617156138d25782820a9050838111156138cd576138cc6137a1565b5b6138fc565b6138df84848460016137dd565b925090508184048111156138f6576138f56137a1565b5b81810290505b9392505050565b600061390e82612d9f565b915061391983612ec8565b92506139467fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484613830565b905092915050565b600061395982612d9f565b915061396483612d9f565b925082820261397281612d9f565b91508282048414831517613989576139886137a1565b5b5092915050565b60006080820190506139a56000830187612f09565b6139b26020830186612f60565b6139bf6040830185612e4b565b6139cc6060830184612e4b565b95945050505050565b600060c0820190506139ea6000830189612f09565b6139f76020830188612f60565b613a046040830187612f60565b613a116060830186612e4b565b613a1e6080830185612e4b565b613a2b60a0830184612e4b565b979650505050505050565b6000604082019050613a4b6000830185612f60565b613a586020830184612f60565b9392505050565b6000613a6a826133ec565b9150613a75836133ec565b9250828201905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613aa757613aa66137a1565b5b92915050565b6000613ab8826133ec565b9150613ac3836133ec565b9250828203905079ffffffffffffffffffffffffffffffffffffffffffffffffffff811115613af557613af46137a1565b5b92915050565b6000606082019050613b106000830186612f60565b613b1d6020830185612e4b565b613b2a6040830184612e4b565b949350505050565b6000819050919050565b6000613b57613b52613b4d84613b32565b61357e565b612ec8565b9050919050565b613b6781613b3c565b82525050565b6000604082019050613b826000830185613b5e565b613b8f6020830184612e4b565b9392505050565b6000613ba182612d9f565b9150613bac83612d9f565b9250828203905081811115613bc457613bc36137a1565b5b92915050565b6000613bd582612d9f565b9150613be083612d9f565b9250828201905080821115613bf857613bf76137a1565b5b92915050565b6000604082019050613c136000830185612f60565b613c206020830184612e4b565b9392505050565b600060a082019050613c3c6000830188612f09565b613c496020830187612f09565b613c566040830186612f09565b613c636060830185612e4b565b613c706080830184612f60565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000604082019050613cbe6000830185612e4b565b613ccb6020830184612e4b565b9392505050565b6000819050919050565b6000613cf7613cf2613ced84613cd2565b61357e565b612ec8565b9050919050565b613d0781613cdc565b82525050565b6000604082019050613d226000830185613cfe565b613d2f6020830184612e4b565b9392505050565b6000608082019050613d4b6000830187612f09565b613d586020830186612ed5565b613d656040830185612f09565b613d726060830184612f09565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000613de482612d9f565b9150613def83612d9f565b925082613dff57613dfe613c7a565b5b828204905092915050565b6000819050919050565b6000613e2f613e2a613e2584613e0a565b61357e565b612ec8565b9050919050565b613e3f81613e14565b82525050565b6000604082019050613e5a6000830185613e36565b613e676020830184612e4b565b939250505056fea26469706673582212201bdc6e6bc10cc0a79e1be5914213e58fedb8053f7f72966e78e22d1b2529b77764736f6c63430008180033",
    linkReferences: {},
    deployedLinkReferences: {},
};

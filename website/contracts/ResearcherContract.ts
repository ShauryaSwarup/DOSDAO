export const RC = {
    _format: "hh-sol-artifact-1",
    contractName: "ResearcherContract",
    sourceName: "contracts/ResearcherContract.sol",
    abi: [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_treasury",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_contracttoken",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_title",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_description",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_grant",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "_researcher",
                    type: "address",
                },
            ],
            name: "addProposal",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_walletid",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "_name",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_affiliation",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_email",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_university",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "_profession",
                    type: "string",
                },
            ],
            name: "addResearcher",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "checkproposalvoter",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "dost",
            outputs: [
                {
                    internalType: "contract DOSToken",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "executeProposal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "getAllProposals",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "title",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "description",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "grant",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "researcher",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "votes",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "yay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "nay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "snapshot",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256",
                        },
                        {
                            internalType: "bool",
                            name: "queued",
                            type: "bool",
                        },
                        {
                            internalType: "bool",
                            name: "executed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct ResearcherContract.Proposal[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getAllResearchers",
            outputs: [
                {
                    components: [
                        {
                            internalType: "address",
                            name: "walletid",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "name",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "affiliation",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "email",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "university",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "profession",
                            type: "string",
                        },
                    ],
                    internalType: "struct ResearcherContract.Researcher[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlock",
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
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "getDeadline",
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
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "getProposalById",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "title",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "description",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "grant",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "researcher",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "votes",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "yay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "nay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "snapshot",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256",
                        },
                        {
                            internalType: "bool",
                            name: "queued",
                            type: "bool",
                        },
                        {
                            internalType: "bool",
                            name: "executed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct ResearcherContract.Proposal",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getProposalCount",
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
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "getProposalVoters",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_researcher",
                    type: "address",
                },
            ],
            name: "getProposalsByResearcher",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "id",
                            type: "uint256",
                        },
                        {
                            internalType: "string",
                            name: "title",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "description",
                            type: "string",
                        },
                        {
                            internalType: "uint256",
                            name: "grant",
                            type: "uint256",
                        },
                        {
                            internalType: "address",
                            name: "researcher",
                            type: "address",
                        },
                        {
                            internalType: "uint256",
                            name: "votes",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "yay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "nay",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "snapshot",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "deadline",
                            type: "uint256",
                        },
                        {
                            internalType: "bool",
                            name: "queued",
                            type: "bool",
                        },
                        {
                            internalType: "bool",
                            name: "executed",
                            type: "bool",
                        },
                    ],
                    internalType: "struct ResearcherContract.Proposal[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_walletAddress",
                    type: "address",
                },
            ],
            name: "getResearcherByAddress",
            outputs: [
                {
                    components: [
                        {
                            internalType: "address",
                            name: "walletid",
                            type: "address",
                        },
                        {
                            internalType: "string",
                            name: "name",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "affiliation",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "email",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "university",
                            type: "string",
                        },
                        {
                            internalType: "string",
                            name: "profession",
                            type: "string",
                        },
                    ],
                    internalType: "struct ResearcherContract.Researcher",
                    name: "",
                    type: "tuple",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getResearcherCount",
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
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "getSnapshot",
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
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "isApproved",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "isExecuted",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "isQueued",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_walletAddress",
                    type: "address",
                },
            ],
            name: "isResearcher",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "isVotingPeriod",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool",
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
            inputs: [],
            name: "proposalCount",
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
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "proposals",
            outputs: [
                {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "title",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "description",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "grant",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "researcher",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "votes",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "yay",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "nay",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "snapshot",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "queued",
                    type: "bool",
                },
                {
                    internalType: "bool",
                    name: "executed",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "proposalvoters",
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
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
            ],
            name: "queueProposal",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "researchIds",
            outputs: [
                {
                    internalType: "address",
                    name: "walletid",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "affiliation",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "email",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "university",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "profession",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "researcherCount",
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
                    name: "",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "researcherProposals",
            outputs: [
                {
                    internalType: "uint256",
                    name: "id",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "title",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "description",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "grant",
                    type: "uint256",
                },
                {
                    internalType: "address",
                    name: "researcher",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "votes",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "yay",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "nay",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "snapshot",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "deadline",
                    type: "uint256",
                },
                {
                    internalType: "bool",
                    name: "queued",
                    type: "bool",
                },
                {
                    internalType: "bool",
                    name: "executed",
                    type: "bool",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
            ],
            name: "researchers",
            outputs: [
                {
                    internalType: "address",
                    name: "walletid",
                    type: "address",
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "affiliation",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "email",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "university",
                    type: "string",
                },
                {
                    internalType: "string",
                    name: "profession",
                    type: "string",
                },
            ],
            stateMutability: "view",
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
            name: "treasury_",
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
            inputs: [
                {
                    internalType: "uint256",
                    name: "_proposalId",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_choice",
                    type: "uint256",
                },
            ],
            name: "vote",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    bytecode:
        "0x60806040523480156200001157600080fd5b50604051620055a5380380620055a5833981810160405281019062000037919062000172565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060400160405280600881526020017f69676e6974696f6e00000000000000000000000000000000000000000000000081525060009081620000ff919062000433565b5050506200051a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200013a826200010d565b9050919050565b6200014c816200012d565b81146200015857600080fd5b50565b6000815190506200016c8162000141565b92915050565b600080604083850312156200018c576200018b62000108565b5b60006200019c858286016200015b565b9250506020620001af858286016200015b565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200023b57607f821691505b602082108103620002515762000250620001f3565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002bb7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200027c565b620002c786836200027c565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003146200030e6200030884620002df565b620002e9565b620002df565b9050919050565b6000819050919050565b6200033083620002f3565b620003486200033f826200031b565b84845462000289565b825550505050565b600090565b6200035f62000350565b6200036c81848462000325565b505050565b5b8181101562000394576200038860008262000355565b60018101905062000372565b5050565b601f821115620003e357620003ad8162000257565b620003b8846200026c565b81016020851015620003c8578190505b620003e0620003d7856200026c565b83018262000371565b50505b505050565b600082821c905092915050565b60006200040860001984600802620003e8565b1980831691505092915050565b6000620004238383620003f5565b9150826002028217905092915050565b6200043e82620001b9565b67ffffffffffffffff8111156200045a5762000459620001c4565b5b62000466825462000222565b6200047382828562000398565b600060209050601f831160018114620004ab576000841562000496578287015190505b620004a2858262000415565b86555062000512565b601f198416620004bb8662000257565b60005b82811015620004e557848901518255600182019150602085019450602081019050620004be565b8683101562000505578489015162000501601f891682620003f5565b8355505b6001600288020188555050505b505050505050565b61507b806200052a6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806376f10ad01161011a578063a1fc4494116100ad578063c08cc02d1161007c578063c08cc02d1461066c578063c73a6d781461068a578063cceb68f5146106ba578063da35c664146106d8578063e11dbad1146106f6576101fb565b8063a1fc4494146105cd578063a68f34f7146105eb578063b384abef1461061b578063becd8b5814610637576101fb565b806382862275116100e9578063828622751461051657806394a14a34146105465780639ab3f7a614610562578063a1c92b9a14610592576101fb565b806376f10ad0146104685780637910867b146104985780637d26646b146104c85780637e339a9c146104f8576101fb565b8063363fdebd11610192578063663a5f7111610161578063663a5f71146103ba578063672d5d3b146103ea57806369d887661461040857806376a6bf5214610438576101fb565b8063363fdebd146103205780633656de21146103505780633d3f8c4b14610380578063614d5ceb1461039e576101fb565b80630d61b519116101ce5780630d61b519146102aa5780630e415a86146102c6578063200d2ed2146102e457806323272ad514610302576101fb565b806301339c2114610200578063013cf08b1461020a57806301bc237d1461024557806307497b211461027a575b600080fd5b610208610726565b005b610224600480360381019061021f919061361d565b61076d565b60405161023c9c9b9a99989796959493929190613745565b60405180910390f35b61025f600480360381019061025a9190613839565b610917565b60405161027196959493929190613866565b60405180910390f35b610294600480360381019061028f9190613839565b610c1b565b6040516102a19190613b2e565b60405180910390f35b6102c460048036038101906102bf919061361d565b610eb0565b005b6102ce61111f565b6040516102db9190613baf565b60405180910390f35b6102ec611145565b6040516102f99190613bca565b60405180910390f35b61030a6111d3565b6040516103179190613bec565b60405180910390f35b61033a60048036038101906103359190613839565b6111f9565b6040516103479190613c07565b60405180910390f35b61036a6004803603810190610365919061361d565b611294565b6040516103779190613d2d565b60405180910390f35b6103886114b8565b6040516103959190613eb6565b60405180910390f35b6103b860048036038101906103b3919061400d565b6118a2565b005b6103d460048036038101906103cf9190614126565b611c6d565b6040516103e19190613bec565b60405180910390f35b6103f2611cbb565b6040516103ff9190614166565b60405180910390f35b610422600480360381019061041d9190613839565b611cc3565b60405161042f9190614226565b60405180910390f35b610452600480360381019061044d919061361d565b61204c565b60405161045f9190613c07565b60405180910390f35b610482600480360381019061047d919061361d565b612079565b60405161048f9190614166565b60405180910390f35b6104b260048036038101906104ad919061361d565b612099565b6040516104bf9190613c07565b60405180910390f35b6104e260048036038101906104dd9190614248565b612164565b6040516104ef9190613c07565b60405180910390f35b610500612193565b60405161050d9190614166565b60405180910390f35b610530600480360381019061052b919061361d565b61219d565b60405161053d9190614166565b60405180910390f35b610560600480360381019061055b919061361d565b6121bd565b005b61057c60048036038101906105779190614288565b612421565b6040516105899190614166565b60405180910390f35b6105ac60048036038101906105a79190614327565b6128ec565b6040516105c49c9b9a99989796959493929190613745565b60405180910390f35b6105d5612ab3565b6040516105e29190614166565b60405180910390f35b6106056004803603810190610600919061361d565b612ab9565b6040516106129190614416565b60405180910390f35b61063560048036038101906106309190614126565b612b5a565b005b610651600480360381019061064c919061361d565b612ef7565b60405161066396959493929190613866565b60405180910390f35b6106746131fb565b6040516106819190614166565b60405180910390f35b6106a4600480360381019061069f919061361d565b613205565b6040516106b19190613c07565b60405180910390f35b6106c2613232565b6040516106cf9190613b2e565b60405180910390f35b6106e06134e3565b6040516106ed9190614166565b60405180910390f35b610710600480360381019061070b919061361d565b6134e9565b60405161071d9190613c07565b60405180910390f35b6040518060400160405280600881526020017f6c6966742d6f66660000000000000000000000000000000000000000000000008152506000908161076a919061463a565b50565b600760205280600052604060002060009150905080600001549080600101805461079690614467565b80601f01602080910402602001604051908101604052809291908181526020018280546107c290614467565b801561080f5780601f106107e45761010080835404028352916020019161080f565b820191906000526020600020905b8154815290600101906020018083116107f257829003601f168201915b50505050509080600201805461082490614467565b80601f016020809104026020016040519081016040528092919081815260200182805461085090614467565b801561089d5780601f106108725761010080835404028352916020019161089d565b820191906000526020600020905b81548152906001019060200180831161088057829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600501549080600601549080600701549080600801549080600901549080600a0160009054906101000a900460ff169080600a0160019054906101000a900460ff1690508c565b60066020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461096090614467565b80601f016020809104026020016040519081016040528092919081815260200182805461098c90614467565b80156109d95780601f106109ae576101008083540402835291602001916109d9565b820191906000526020600020905b8154815290600101906020018083116109bc57829003601f168201915b5050505050908060020180546109ee90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1a90614467565b8015610a675780601f10610a3c57610100808354040283529160200191610a67565b820191906000526020600020905b815481529060010190602001808311610a4a57829003601f168201915b505050505090806003018054610a7c90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa890614467565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b505050505090806004018054610b0a90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3690614467565b8015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b505050505090806005018054610b9890614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc490614467565b8015610c115780601f10610be657610100808354040283529160200191610c11565b820191906000526020600020905b815481529060010190602001808311610bf457829003601f168201915b5050505050905086565b6060600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610ea557838290600052602060002090600b02016040518061018001604052908160008201548152602001600182018054610cba90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce690614467565b8015610d335780601f10610d0857610100808354040283529160200191610d33565b820191906000526020600020905b815481529060010190602001808311610d1657829003601f168201915b50505050508152602001600282018054610d4c90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7890614467565b8015610dc55780601f10610d9a57610100808354040283529160200191610dc5565b820191906000526020600020905b815481529060010190602001808311610da857829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff16151515158152505081526020019060010190610c7c565b505050509050919050565b60006007600083815260200190815260200160002090506001151581600a0160009054906101000a900460ff16151514610f1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1690614758565b60405180910390fd5b6000151581600a0160019054906101000a900460ff16151514610f77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6e906147ea565b60405180910390fd5b600181600a0160016101000a81548160ff0219169083151502179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836003015460405160240161100a92919061480a565b6040516020818303038152906040527fd6e982e5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051611094919061487a565b6000604051808303816000865af19150503d80600081146110d1576040519150601f19603f3d011682016040523d82523d6000602084013e6110d6565b606091505b505090508061111a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611111906148dd565b60405180910390fd5b505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000805461115290614467565b80601f016020809104026020016040519081016040528092919081815260200182805461117e90614467565b80156111cb5780601f106111a0576101008083540402835291602001916111cb565b820191906000526020600020905b8154815290600101906020018083116111ae57829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff16600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61129c61350c565b6007600083815260200190815260200160002060405180610180016040529081600082015481526020016001820180546112d590614467565b80601f016020809104026020016040519081016040528092919081815260200182805461130190614467565b801561134e5780601f106113235761010080835404028352916020019161134e565b820191906000526020600020905b81548152906001019060200180831161133157829003601f168201915b5050505050815260200160028201805461136790614467565b80601f016020809104026020016040519081016040528092919081815260200182805461139390614467565b80156113e05780601f106113b5576101008083540402835291602001916113e0565b820191906000526020600020905b8154815290600101906020018083116113c357829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff1615151515815250509050919050565b6060600060045467ffffffffffffffff8111156114d8576114d7613ee2565b5b60405190808252806020026020018201604052801561151157816020015b6114fe613587565b8152602001906001900390816114f65790505b50905060005b60045481101561189a57600560008281526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546115a590614467565b80601f01602080910402602001604051908101604052809291908181526020018280546115d190614467565b801561161e5780601f106115f35761010080835404028352916020019161161e565b820191906000526020600020905b81548152906001019060200180831161160157829003601f168201915b5050505050815260200160028201805461163790614467565b80601f016020809104026020016040519081016040528092919081815260200182805461166390614467565b80156116b05780601f10611685576101008083540402835291602001916116b0565b820191906000526020600020905b81548152906001019060200180831161169357829003601f168201915b505050505081526020016003820180546116c990614467565b80601f01602080910402602001604051908101604052809291908181526020018280546116f590614467565b80156117425780601f1061171757610100808354040283529160200191611742565b820191906000526020600020905b81548152906001019060200180831161172557829003601f168201915b5050505050815260200160048201805461175b90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461178790614467565b80156117d45780601f106117a9576101008083540402835291602001916117d4565b820191906000526020600020905b8154815290600101906020018083116117b757829003601f168201915b505050505081526020016005820180546117ed90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461181990614467565b80156118665780601f1061183b57610100808354040283529160200191611866565b820191906000526020600020905b81548152906001019060200180831161184957829003601f168201915b505050505081525050828281518110611882576118816148fd565b5b60200260200101819052508080600101915050611517565b508091505090565b600073ffffffffffffffffffffffffffffffffffffffff16600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196a90614978565b60405180910390fd5b6040518060c001604052808773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182815250600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081611a51919061463a565b506040820151816002019081611a67919061463a565b506060820151816003019081611a7d919061463a565b506080820151816004019081611a93919061463a565b5060a0820151816005019081611aa9919061463a565b509050506040518060c001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018381526020018281525060056000600454815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081611b61919061463a565b506040820151816002019081611b77919061463a565b506060820151816003019081611b8d919061463a565b506080820151816004019081611ba3919061463a565b5060a0820151816005019081611bb9919061463a565b50905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f198760646040518363ffffffff1660e01b8152600401611c1b9291906149d3565b600060405180830381600087803b158015611c3557600080fd5b505af1158015611c49573d6000803e3d6000fd5b5050505060046000815480929190611c6090614a2b565b9190505550505050505050565b600a6020528160005260406000208181548110611c8957600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600043905090565b611ccb613587565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611d7b90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611da790614467565b8015611df45780601f10611dc957610100808354040283529160200191611df4565b820191906000526020600020905b815481529060010190602001808311611dd757829003601f168201915b50505050508152602001600282018054611e0d90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3990614467565b8015611e865780601f10611e5b57610100808354040283529160200191611e86565b820191906000526020600020905b815481529060010190602001808311611e6957829003601f168201915b50505050508152602001600382018054611e9f90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611ecb90614467565b8015611f185780601f10611eed57610100808354040283529160200191611f18565b820191906000526020600020905b815481529060010190602001808311611efb57829003601f168201915b50505050508152602001600482018054611f3190614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5d90614467565b8015611faa5780601f10611f7f57610100808354040283529160200191611faa565b820191906000526020600020905b815481529060010190602001808311611f8d57829003601f168201915b50505050508152602001600582018054611fc390614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611fef90614467565b801561203c5780601f106120115761010080835404028352916020019161203c565b820191906000526020600020905b81548152906001019060200180831161201f57829003601f168201915b5050505050815250509050919050565b600060076000838152602001908152602001600020600a0160019054906101000a900460ff169050919050565b600060076000838152602001908152602001600020600801549050919050565b600060646003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561210c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121309190614a88565b61213a9190614ab5565b6121449190614b26565b600760008481526020019081526020016000206006015410159050919050565b60096020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6000600454905090565b600060076000838152602001908152602001600020600901549050919050565b60006007600083815260200190815260200160002090508060090154431161221a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221190614ba3565b60405180910390fd5b6000816005015411612261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161225890614c0f565b60405180910390fd5b60646003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156122d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f69190614a88565b6123009190614ab5565b61230a9190614b26565b81600601541015612350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234790614c7b565b60405180910390fd5b6000151581600a0160009054906101000a900460ff161515146123a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161239f90614ce7565b60405180910390fd5b6000151581600a0160019054906101000a900460ff16151514612400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123f7906147ea565b60405180910390fd5b600181600a0160006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036124f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ea90614d53565b60405180910390fd5b60405180610180016040528060035481526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001438152602001603c4361255d9190614d73565b8152602001600015158152602001600015158152506007600060035481526020019081526020016000206000820151816000015560208201518160010190816125a6919061463a565b5060408201518160020190816125bc919061463a565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080155610120820151816009015561014082015181600a0160006101000a81548160ff02191690831515021790555061016082015181600a0160016101000a81548160ff021916908315150217905550905050600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060076000600354815260200190815260200160002090806001815401808255809150506001900390600052602060002090600b020160009091909190915060008201548160000155600182018160010190816127229190614dbd565b50600282018160020190816127379190614dbd565b50600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820154816005015560068201548160060155600782015481600701556008820154816008015560098201548160090155600a820160009054906101000a900460ff1681600a0160006101000a81548160ff021916908315150217905550600a820160019054906101000a900460ff1681600a0160016101000a81548160ff02191690831515021790555050506003600081548092919061284a90614a2b565b9190505550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193360326040518363ffffffff1660e01b81526004016128ad929190614ee0565b600060405180830381600087803b1580156128c757600080fd5b505af11580156128db573d6000803e3d6000fd5b505050506003549050949350505050565b600b602052816000526040600020818154811061290857600080fd5b90600052602060002090600b02016000915091505080600001549080600101805461293290614467565b80601f016020809104026020016040519081016040528092919081815260200182805461295e90614467565b80156129ab5780601f10612980576101008083540402835291602001916129ab565b820191906000526020600020905b81548152906001019060200180831161298e57829003601f168201915b5050505050908060020180546129c090614467565b80601f01602080910402602001604051908101604052809291908181526020018280546129ec90614467565b8015612a395780601f10612a0e57610100808354040283529160200191612a39565b820191906000526020600020905b815481529060010190602001808311612a1c57829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600501549080600601549080600701549080600801549080600901549080600a0160009054906101000a900460ff169080600a0160019054906101000a900460ff1690508c565b60045481565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612b4e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612b04575b50505050509050919050565b6000600760008481526020019081526020016000209050600015156009600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514612c15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c0c90614f55565b60405180910390fd5b8060090154431115612c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5390614fc1565b60405180910390fd5b60008203612d1f57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401612cbf9190613bec565b602060405180830381865afa158015612cdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d009190614a88565b816007016000828254612d139190614d73565b92505081905550612ddf565b60018203612dde57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401612d829190613bec565b602060405180830381865afa158015612d9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dc39190614a88565b816006016000828254612dd69190614d73565b925050819055505b5b806005016000815480929190612df490614a2b565b9190505550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933601e6040518363ffffffff1660e01b8152600401612e5792919061501c565b600060405180830381600087803b158015612e7157600080fd5b505af1158015612e85573d6000803e3d6000fd5b5050505060016009600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505050565b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054612f4090614467565b80601f0160208091040260200160405190810160405280929190818152602001828054612f6c90614467565b8015612fb95780601f10612f8e57610100808354040283529160200191612fb9565b820191906000526020600020905b815481529060010190602001808311612f9c57829003601f168201915b505050505090806002018054612fce90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054612ffa90614467565b80156130475780601f1061301c57610100808354040283529160200191613047565b820191906000526020600020905b81548152906001019060200180831161302a57829003601f168201915b50505050509080600301805461305c90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461308890614467565b80156130d55780601f106130aa576101008083540402835291602001916130d5565b820191906000526020600020905b8154815290600101906020018083116130b857829003601f168201915b5050505050908060040180546130ea90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461311690614467565b80156131635780601f1061313857610100808354040283529160200191613163565b820191906000526020600020905b81548152906001019060200180831161314657829003601f168201915b50505050509080600501805461317890614467565b80601f01602080910402602001604051908101604052809291908181526020018280546131a490614467565b80156131f15780601f106131c6576101008083540402835291602001916131f1565b820191906000526020600020905b8154815290600101906020018083116131d457829003601f168201915b5050505050905086565b6000600354905090565b600060076000838152602001908152602001600020600a0160009054906101000a900460ff169050919050565b6060600060035467ffffffffffffffff81111561325257613251613ee2565b5b60405190808252806020026020018201604052801561328b57816020015b61327861350c565b8152602001906001900390816132705790505b50905060005b6003548110156134db576007600082815260200190815260200160002060405180610180016040529081600082015481526020016001820180546132d490614467565b80601f016020809104026020016040519081016040528092919081815260200182805461330090614467565b801561334d5780601f106133225761010080835404028352916020019161334d565b820191906000526020600020905b81548152906001019060200180831161333057829003601f168201915b5050505050815260200160028201805461336690614467565b80601f016020809104026020016040519081016040528092919081815260200182805461339290614467565b80156133df5780601f106133b4576101008083540402835291602001916133df565b820191906000526020600020905b8154815290600101906020018083116133c257829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff1615151515815250508282815181106134c3576134c26148fd565b5b60200260200101819052508080600101915050613291565b508091505090565b60035481565b600060076000838152602001908152602001600020600901544311159050919050565b60405180610180016040528060008152602001606081526020016060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6135fa816135e7565b811461360557600080fd5b50565b600081359050613617816135f1565b92915050565b600060208284031215613633576136326135dd565b5b600061364184828501613608565b91505092915050565b613653816135e7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613693578082015181840152602081019050613678565b60008484015250505050565b6000601f19601f8301169050919050565b60006136bb82613659565b6136c58185613664565b93506136d5818560208601613675565b6136de8161369f565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613714826136e9565b9050919050565b61372481613709565b82525050565b60008115159050919050565b61373f8161372a565b82525050565b60006101808201905061375b600083018f61364a565b818103602083015261376d818e6136b0565b90508181036040830152613781818d6136b0565b9050613790606083018c61364a565b61379d608083018b61371b565b6137aa60a083018a61364a565b6137b760c083018961364a565b6137c460e083018861364a565b6137d261010083018761364a565b6137e061012083018661364a565b6137ee610140830185613736565b6137fc610160830184613736565b9d9c50505050505050505050505050565b61381681613709565b811461382157600080fd5b50565b6000813590506138338161380d565b92915050565b60006020828403121561384f5761384e6135dd565b5b600061385d84828501613824565b91505092915050565b600060c08201905061387b600083018961371b565b818103602083015261388d81886136b0565b905081810360408301526138a181876136b0565b905081810360608301526138b581866136b0565b905081810360808301526138c981856136b0565b905081810360a08301526138dd81846136b0565b9050979650505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61391f816135e7565b82525050565b600082825260208201905092915050565b600061394182613659565b61394b8185613925565b935061395b818560208601613675565b6139648161369f565b840191505092915050565b61397881613709565b82525050565b6139878161372a565b82525050565b6000610180830160008301516139a66000860182613916565b50602083015184820360208601526139be8282613936565b915050604083015184820360408601526139d88282613936565b91505060608301516139ed6060860182613916565b506080830151613a00608086018261396f565b5060a0830151613a1360a0860182613916565b5060c0830151613a2660c0860182613916565b5060e0830151613a3960e0860182613916565b50610100830151613a4e610100860182613916565b50610120830151613a63610120860182613916565b50610140830151613a7861014086018261397e565b50610160830151613a8d61016086018261397e565b508091505092915050565b6000613aa4838361398d565b905092915050565b6000602082019050919050565b6000613ac4826138ea565b613ace81856138f5565b935083602082028501613ae085613906565b8060005b85811015613b1c5784840389528151613afd8582613a98565b9450613b0883613aac565b925060208a01995050600181019050613ae4565b50829750879550505050505092915050565b60006020820190508181036000830152613b488184613ab9565b905092915050565b6000819050919050565b6000613b75613b70613b6b846136e9565b613b50565b6136e9565b9050919050565b6000613b8782613b5a565b9050919050565b6000613b9982613b7c565b9050919050565b613ba981613b8e565b82525050565b6000602082019050613bc46000830184613ba0565b92915050565b60006020820190508181036000830152613be481846136b0565b905092915050565b6000602082019050613c01600083018461371b565b92915050565b6000602082019050613c1c6000830184613736565b92915050565b600061018083016000830151613c3b6000860182613916565b5060208301518482036020860152613c538282613936565b91505060408301518482036040860152613c6d8282613936565b9150506060830151613c826060860182613916565b506080830151613c95608086018261396f565b5060a0830151613ca860a0860182613916565b5060c0830151613cbb60c0860182613916565b5060e0830151613cce60e0860182613916565b50610100830151613ce3610100860182613916565b50610120830151613cf8610120860182613916565b50610140830151613d0d61014086018261397e565b50610160830151613d2261016086018261397e565b508091505092915050565b60006020820190508181036000830152613d478184613c22565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060c083016000830151613d93600086018261396f565b5060208301518482036020860152613dab8282613936565b91505060408301518482036040860152613dc58282613936565b91505060608301518482036060860152613ddf8282613936565b91505060808301518482036080860152613df98282613936565b91505060a083015184820360a0860152613e138282613936565b9150508091505092915050565b6000613e2c8383613d7b565b905092915050565b6000602082019050919050565b6000613e4c82613d4f565b613e568185613d5a565b935083602082028501613e6885613d6b565b8060005b85811015613ea45784840389528151613e858582613e20565b9450613e9083613e34565b925060208a01995050600181019050613e6c565b50829750879550505050505092915050565b60006020820190508181036000830152613ed08184613e41565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b613f1a8261369f565b810181811067ffffffffffffffff82111715613f3957613f38613ee2565b5b80604052505050565b6000613f4c6135d3565b9050613f588282613f11565b919050565b600067ffffffffffffffff821115613f7857613f77613ee2565b5b613f818261369f565b9050602081019050919050565b82818337600083830152505050565b6000613fb0613fab84613f5d565b613f42565b905082815260208101848484011115613fcc57613fcb613edd565b5b613fd7848285613f8e565b509392505050565b600082601f830112613ff457613ff3613ed8565b5b8135614004848260208601613f9d565b91505092915050565b60008060008060008060c0878903121561402a576140296135dd565b5b600061403889828a01613824565b965050602087013567ffffffffffffffff811115614059576140586135e2565b5b61406589828a01613fdf565b955050604087013567ffffffffffffffff811115614086576140856135e2565b5b61409289828a01613fdf565b945050606087013567ffffffffffffffff8111156140b3576140b26135e2565b5b6140bf89828a01613fdf565b935050608087013567ffffffffffffffff8111156140e0576140df6135e2565b5b6140ec89828a01613fdf565b92505060a087013567ffffffffffffffff81111561410d5761410c6135e2565b5b61411989828a01613fdf565b9150509295509295509295565b6000806040838503121561413d5761413c6135dd565b5b600061414b85828601613608565b925050602061415c85828601613608565b9150509250929050565b600060208201905061417b600083018461364a565b92915050565b600060c083016000830151614199600086018261396f565b50602083015184820360208601526141b18282613936565b915050604083015184820360408601526141cb8282613936565b915050606083015184820360608601526141e58282613936565b915050608083015184820360808601526141ff8282613936565b91505060a083015184820360a08601526142198282613936565b9150508091505092915050565b600060208201905081810360008301526142408184614181565b905092915050565b6000806040838503121561425f5761425e6135dd565b5b600061426d85828601613608565b925050602061427e85828601613824565b9150509250929050565b600080600080608085870312156142a2576142a16135dd565b5b600085013567ffffffffffffffff8111156142c0576142bf6135e2565b5b6142cc87828801613fdf565b945050602085013567ffffffffffffffff8111156142ed576142ec6135e2565b5b6142f987828801613fdf565b935050604061430a87828801613608565b925050606061431b87828801613824565b91505092959194509250565b6000806040838503121561433e5761433d6135dd565b5b600061434c85828601613824565b925050602061435d85828601613608565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061439f838361396f565b60208301905092915050565b6000602082019050919050565b60006143c382614367565b6143cd8185614372565b93506143d883614383565b8060005b838110156144095781516143f08882614393565b97506143fb836143ab565b9250506001810190506143dc565b5085935050505092915050565b6000602082019050818103600083015261443081846143b8565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061447f57607f821691505b60208210810361449257614491614438565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026144fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826144bd565b61450486836144bd565b95508019841693508086168417925050509392505050565b600061453761453261452d846135e7565b613b50565b6135e7565b9050919050565b6000819050919050565b6145518361451c565b61456561455d8261453e565b8484546144ca565b825550505050565b600090565b61457a61456d565b614585818484614548565b505050565b5b818110156145a95761459e600082614572565b60018101905061458b565b5050565b601f8211156145ee576145bf81614498565b6145c8846144ad565b810160208510156145d7578190505b6145eb6145e3856144ad565b83018261458a565b50505b505050565b600082821c905092915050565b6000614611600019846008026145f3565b1980831691505092915050565b600061462a8383614600565b9150826002028217905092915050565b61464382613659565b67ffffffffffffffff81111561465c5761465b613ee2565b5b6146668254614467565b6146718282856145ad565b600060209050601f8311600181146146a45760008415614692578287015190505b61469c858261461e565b865550614704565b601f1984166146b286614498565b60005b828110156146da578489015182556001820191506020850194506020810190506146b5565b868310156146f757848901516146f3601f891682614600565b8355505b6001600288020188555050505b505050505050565b7f50726f706f73616c20686173206e6f74206265656e2071756575656400000000600082015250565b6000614742601c83613664565b915061474d8261470c565b602082019050919050565b6000602082019050818103600083015261477181614735565b9050919050565b7f50726f706f73616c2068617320616c7265616479206265656e2065786563757460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b60006147d4602283613664565b91506147df82614778565b604082019050919050565b60006020820190508181036000830152614803816147c7565b9050919050565b600060408201905061481f600083018561371b565b61482c602083018461364a565b9392505050565b600081519050919050565b600081905092915050565b600061485482614833565b61485e818561483e565b935061486e818560208601613675565b80840191505092915050565b60006148868284614849565b915081905092915050565b7f4661696c656420746f20657865637574652070726f706f73616c000000000000600082015250565b60006148c7601a83613664565b91506148d282614891565b602082019050919050565b600060208201905081810360008301526148f6816148ba565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f5265736561726368657220616c72656164792065786973747300000000000000600082015250565b6000614962601983613664565b915061496d8261492c565b602082019050919050565b6000602082019050818103600083015261499181614955565b9050919050565b6000819050919050565b60006149bd6149b86149b384614998565b613b50565b6135e7565b9050919050565b6149cd816149a2565b82525050565b60006040820190506149e8600083018561371b565b6149f560208301846149c4565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614a36826135e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614a6857614a676149fc565b5b600182019050919050565b600081519050614a82816135f1565b92915050565b600060208284031215614a9e57614a9d6135dd565b5b6000614aac84828501614a73565b91505092915050565b6000614ac0826135e7565b9150614acb836135e7565b9250828202614ad9816135e7565b91508282048414831517614af057614aef6149fc565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614b31826135e7565b9150614b3c836135e7565b925082614b4c57614b4b614af7565b5b828204905092915050565b7f566f74696e6720706572696f6420686173206e6f7420656e6465640000000000600082015250565b6000614b8d601b83613664565b9150614b9882614b57565b602082019050919050565b60006020820190508181036000830152614bbc81614b80565b9050919050565b7f50726f706f73616c20686173206e6f74206265656e20766f746564206f6e0000600082015250565b6000614bf9601e83613664565b9150614c0482614bc3565b602082019050919050565b60006020820190508181036000830152614c2881614bec565b9050919050565b7f50726f706f73616c20686173206e6f74206265656e20617070726f7665640000600082015250565b6000614c65601e83613664565b9150614c7082614c2f565b602082019050919050565b60006020820190508181036000830152614c9481614c58565b9050919050565b7f50726f706f73616c2068617320616c7265616479206265656e20717565756564600082015250565b6000614cd1602083613664565b9150614cdc82614c9b565b602082019050919050565b60006020820190508181036000830152614d0081614cc4565b9050919050565b7f5265736561726368657220646f6573206e6f7420657869737400000000000000600082015250565b6000614d3d601983613664565b9150614d4882614d07565b602082019050919050565b60006020820190508181036000830152614d6c81614d30565b9050919050565b6000614d7e826135e7565b9150614d89836135e7565b9250828201905080821115614da157614da06149fc565b5b92915050565b600081549050614db681614467565b9050919050565b818103614dcb575050614ea3565b614dd482614da7565b67ffffffffffffffff811115614ded57614dec613ee2565b5b614df78254614467565b614e028282856145ad565b6000601f831160018114614e315760008415614e1f578287015490505b614e29858261461e565b865550614e9c565b601f198416614e3f87614498565b9650614e4a86614498565b60005b82811015614e7257848901548255600182019150600185019450602081019050614e4d565b86831015614e8f5784890154614e8b601f891682614600565b8355505b6001600288020188555050505b5050505050505b565b6000819050919050565b6000614eca614ec5614ec084614ea5565b613b50565b6135e7565b9050919050565b614eda81614eaf565b82525050565b6000604082019050614ef5600083018561371b565b614f026020830184614ed1565b9392505050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6000614f3f601683613664565b9150614f4a82614f09565b602082019050919050565b60006020820190508181036000830152614f6e81614f32565b9050919050565b7f566f74696e6720706572696f642068617320656e646564000000000000000000600082015250565b6000614fab601783613664565b9150614fb682614f75565b602082019050919050565b60006020820190508181036000830152614fda81614f9e565b9050919050565b6000819050919050565b6000615006615001614ffc84614fe1565b613b50565b6135e7565b9050919050565b61501681614feb565b82525050565b6000604082019050615031600083018561371b565b61503e602083018461500d565b939250505056fea264697066735822122042af74acf60be63f0e6882b9a90ada20d7fab2dd0859fa051564777835cd89bd64736f6c63430008180033",
    deployedBytecode:
        "0x608060405234801561001057600080fd5b50600436106101fb5760003560e01c806376f10ad01161011a578063a1fc4494116100ad578063c08cc02d1161007c578063c08cc02d1461066c578063c73a6d781461068a578063cceb68f5146106ba578063da35c664146106d8578063e11dbad1146106f6576101fb565b8063a1fc4494146105cd578063a68f34f7146105eb578063b384abef1461061b578063becd8b5814610637576101fb565b806382862275116100e9578063828622751461051657806394a14a34146105465780639ab3f7a614610562578063a1c92b9a14610592576101fb565b806376f10ad0146104685780637910867b146104985780637d26646b146104c85780637e339a9c146104f8576101fb565b8063363fdebd11610192578063663a5f7111610161578063663a5f71146103ba578063672d5d3b146103ea57806369d887661461040857806376a6bf5214610438576101fb565b8063363fdebd146103205780633656de21146103505780633d3f8c4b14610380578063614d5ceb1461039e576101fb565b80630d61b519116101ce5780630d61b519146102aa5780630e415a86146102c6578063200d2ed2146102e457806323272ad514610302576101fb565b806301339c2114610200578063013cf08b1461020a57806301bc237d1461024557806307497b211461027a575b600080fd5b610208610726565b005b610224600480360381019061021f919061361d565b61076d565b60405161023c9c9b9a99989796959493929190613745565b60405180910390f35b61025f600480360381019061025a9190613839565b610917565b60405161027196959493929190613866565b60405180910390f35b610294600480360381019061028f9190613839565b610c1b565b6040516102a19190613b2e565b60405180910390f35b6102c460048036038101906102bf919061361d565b610eb0565b005b6102ce61111f565b6040516102db9190613baf565b60405180910390f35b6102ec611145565b6040516102f99190613bca565b60405180910390f35b61030a6111d3565b6040516103179190613bec565b60405180910390f35b61033a60048036038101906103359190613839565b6111f9565b6040516103479190613c07565b60405180910390f35b61036a6004803603810190610365919061361d565b611294565b6040516103779190613d2d565b60405180910390f35b6103886114b8565b6040516103959190613eb6565b60405180910390f35b6103b860048036038101906103b3919061400d565b6118a2565b005b6103d460048036038101906103cf9190614126565b611c6d565b6040516103e19190613bec565b60405180910390f35b6103f2611cbb565b6040516103ff9190614166565b60405180910390f35b610422600480360381019061041d9190613839565b611cc3565b60405161042f9190614226565b60405180910390f35b610452600480360381019061044d919061361d565b61204c565b60405161045f9190613c07565b60405180910390f35b610482600480360381019061047d919061361d565b612079565b60405161048f9190614166565b60405180910390f35b6104b260048036038101906104ad919061361d565b612099565b6040516104bf9190613c07565b60405180910390f35b6104e260048036038101906104dd9190614248565b612164565b6040516104ef9190613c07565b60405180910390f35b610500612193565b60405161050d9190614166565b60405180910390f35b610530600480360381019061052b919061361d565b61219d565b60405161053d9190614166565b60405180910390f35b610560600480360381019061055b919061361d565b6121bd565b005b61057c60048036038101906105779190614288565b612421565b6040516105899190614166565b60405180910390f35b6105ac60048036038101906105a79190614327565b6128ec565b6040516105c49c9b9a99989796959493929190613745565b60405180910390f35b6105d5612ab3565b6040516105e29190614166565b60405180910390f35b6106056004803603810190610600919061361d565b612ab9565b6040516106129190614416565b60405180910390f35b61063560048036038101906106309190614126565b612b5a565b005b610651600480360381019061064c919061361d565b612ef7565b60405161066396959493929190613866565b60405180910390f35b6106746131fb565b6040516106819190614166565b60405180910390f35b6106a4600480360381019061069f919061361d565b613205565b6040516106b19190613c07565b60405180910390f35b6106c2613232565b6040516106cf9190613b2e565b60405180910390f35b6106e06134e3565b6040516106ed9190614166565b60405180910390f35b610710600480360381019061070b919061361d565b6134e9565b60405161071d9190613c07565b60405180910390f35b6040518060400160405280600881526020017f6c6966742d6f66660000000000000000000000000000000000000000000000008152506000908161076a919061463a565b50565b600760205280600052604060002060009150905080600001549080600101805461079690614467565b80601f01602080910402602001604051908101604052809291908181526020018280546107c290614467565b801561080f5780601f106107e45761010080835404028352916020019161080f565b820191906000526020600020905b8154815290600101906020018083116107f257829003601f168201915b50505050509080600201805461082490614467565b80601f016020809104026020016040519081016040528092919081815260200182805461085090614467565b801561089d5780601f106108725761010080835404028352916020019161089d565b820191906000526020600020905b81548152906001019060200180831161088057829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600501549080600601549080600701549080600801549080600901549080600a0160009054906101000a900460ff169080600a0160019054906101000a900460ff1690508c565b60066020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461096090614467565b80601f016020809104026020016040519081016040528092919081815260200182805461098c90614467565b80156109d95780601f106109ae576101008083540402835291602001916109d9565b820191906000526020600020905b8154815290600101906020018083116109bc57829003601f168201915b5050505050908060020180546109ee90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1a90614467565b8015610a675780601f10610a3c57610100808354040283529160200191610a67565b820191906000526020600020905b815481529060010190602001808311610a4a57829003601f168201915b505050505090806003018054610a7c90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa890614467565b8015610af55780601f10610aca57610100808354040283529160200191610af5565b820191906000526020600020905b815481529060010190602001808311610ad857829003601f168201915b505050505090806004018054610b0a90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3690614467565b8015610b835780601f10610b5857610100808354040283529160200191610b83565b820191906000526020600020905b815481529060010190602001808311610b6657829003601f168201915b505050505090806005018054610b9890614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610bc490614467565b8015610c115780601f10610be657610100808354040283529160200191610c11565b820191906000526020600020905b815481529060010190602001808311610bf457829003601f168201915b5050505050905086565b6060600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610ea557838290600052602060002090600b02016040518061018001604052908160008201548152602001600182018054610cba90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce690614467565b8015610d335780601f10610d0857610100808354040283529160200191610d33565b820191906000526020600020905b815481529060010190602001808311610d1657829003601f168201915b50505050508152602001600282018054610d4c90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7890614467565b8015610dc55780601f10610d9a57610100808354040283529160200191610dc5565b820191906000526020600020905b815481529060010190602001808311610da857829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff16151515158152505081526020019060010190610c7c565b505050509050919050565b60006007600083815260200190815260200160002090506001151581600a0160009054906101000a900460ff16151514610f1f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1690614758565b60405180910390fd5b6000151581600a0160019054906101000a900460ff16151514610f77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f6e906147ea565b60405180910390fd5b600181600a0160016101000a81548160ff0219169083151502179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168260040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836003015460405160240161100a92919061480a565b6040516020818303038152906040527fd6e982e5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051611094919061487a565b6000604051808303816000865af19150503d80600081146110d1576040519150601f19603f3d011682016040523d82523d6000602084013e6110d6565b606091505b505090508061111a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611111906148dd565b60405180910390fd5b505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000805461115290614467565b80601f016020809104026020016040519081016040528092919081815260200182805461117e90614467565b80156111cb5780601f106111a0576101008083540402835291602001916111cb565b820191906000526020600020905b8154815290600101906020018083116111ae57829003601f168201915b505050505081565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008073ffffffffffffffffffffffffffffffffffffffff16600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61129c61350c565b6007600083815260200190815260200160002060405180610180016040529081600082015481526020016001820180546112d590614467565b80601f016020809104026020016040519081016040528092919081815260200182805461130190614467565b801561134e5780601f106113235761010080835404028352916020019161134e565b820191906000526020600020905b81548152906001019060200180831161133157829003601f168201915b5050505050815260200160028201805461136790614467565b80601f016020809104026020016040519081016040528092919081815260200182805461139390614467565b80156113e05780601f106113b5576101008083540402835291602001916113e0565b820191906000526020600020905b8154815290600101906020018083116113c357829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff1615151515815250509050919050565b6060600060045467ffffffffffffffff8111156114d8576114d7613ee2565b5b60405190808252806020026020018201604052801561151157816020015b6114fe613587565b8152602001906001900390816114f65790505b50905060005b60045481101561189a57600560008281526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546115a590614467565b80601f01602080910402602001604051908101604052809291908181526020018280546115d190614467565b801561161e5780601f106115f35761010080835404028352916020019161161e565b820191906000526020600020905b81548152906001019060200180831161160157829003601f168201915b5050505050815260200160028201805461163790614467565b80601f016020809104026020016040519081016040528092919081815260200182805461166390614467565b80156116b05780601f10611685576101008083540402835291602001916116b0565b820191906000526020600020905b81548152906001019060200180831161169357829003601f168201915b505050505081526020016003820180546116c990614467565b80601f01602080910402602001604051908101604052809291908181526020018280546116f590614467565b80156117425780601f1061171757610100808354040283529160200191611742565b820191906000526020600020905b81548152906001019060200180831161172557829003601f168201915b5050505050815260200160048201805461175b90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461178790614467565b80156117d45780601f106117a9576101008083540402835291602001916117d4565b820191906000526020600020905b8154815290600101906020018083116117b757829003601f168201915b505050505081526020016005820180546117ed90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461181990614467565b80156118665780601f1061183b57610100808354040283529160200191611866565b820191906000526020600020905b81548152906001019060200180831161184957829003601f168201915b505050505081525050828281518110611882576118816148fd565b5b60200260200101819052508080600101915050611517565b508091505090565b600073ffffffffffffffffffffffffffffffffffffffff16600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196a90614978565b60405180910390fd5b6040518060c001604052808773ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182815250600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081611a51919061463a565b506040820151816002019081611a67919061463a565b506060820151816003019081611a7d919061463a565b506080820151816004019081611a93919061463a565b5060a0820151816005019081611aa9919061463a565b509050506040518060c001604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018481526020018381526020018281525060056000600454815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019081611b61919061463a565b506040820151816002019081611b77919061463a565b506060820151816003019081611b8d919061463a565b506080820151816004019081611ba3919061463a565b5060a0820151816005019081611bb9919061463a565b50905050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f198760646040518363ffffffff1660e01b8152600401611c1b9291906149d3565b600060405180830381600087803b158015611c3557600080fd5b505af1158015611c49573d6000803e3d6000fd5b5050505060046000815480929190611c6090614a2b565b9190505550505050505050565b600a6020528160005260406000208181548110611c8957600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600043905090565b611ccb613587565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182018054611d7b90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611da790614467565b8015611df45780601f10611dc957610100808354040283529160200191611df4565b820191906000526020600020905b815481529060010190602001808311611dd757829003601f168201915b50505050508152602001600282018054611e0d90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611e3990614467565b8015611e865780601f10611e5b57610100808354040283529160200191611e86565b820191906000526020600020905b815481529060010190602001808311611e6957829003601f168201915b50505050508152602001600382018054611e9f90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611ecb90614467565b8015611f185780601f10611eed57610100808354040283529160200191611f18565b820191906000526020600020905b815481529060010190602001808311611efb57829003601f168201915b50505050508152602001600482018054611f3190614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611f5d90614467565b8015611faa5780601f10611f7f57610100808354040283529160200191611faa565b820191906000526020600020905b815481529060010190602001808311611f8d57829003601f168201915b50505050508152602001600582018054611fc390614467565b80601f0160208091040260200160405190810160405280929190818152602001828054611fef90614467565b801561203c5780601f106120115761010080835404028352916020019161203c565b820191906000526020600020905b81548152906001019060200180831161201f57829003601f168201915b5050505050815250509050919050565b600060076000838152602001908152602001600020600a0160019054906101000a900460ff169050919050565b600060076000838152602001908152602001600020600801549050919050565b600060646003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561210c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121309190614a88565b61213a9190614ab5565b6121449190614b26565b600760008481526020019081526020016000206006015410159050919050565b60096020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6000600454905090565b600060076000838152602001908152602001600020600901549050919050565b60006007600083815260200190815260200160002090508060090154431161221a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221190614ba3565b60405180910390fd5b6000816005015411612261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161225890614c0f565b60405180910390fd5b60646003600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156122d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122f69190614a88565b6123009190614ab5565b61230a9190614b26565b81600601541015612350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161234790614c7b565b60405180910390fd5b6000151581600a0160009054906101000a900460ff161515146123a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161239f90614ce7565b60405180910390fd5b6000151581600a0160019054906101000a900460ff16151514612400576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123f7906147ea565b60405180910390fd5b600181600a0160006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff16600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16036124f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016124ea90614d53565b60405180910390fd5b60405180610180016040528060035481526020018681526020018581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001438152602001603c4361255d9190614d73565b8152602001600015158152602001600015158152506007600060035481526020019081526020016000206000820151816000015560208201518160010190816125a6919061463a565b5060408201518160020190816125bc919061463a565b506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005015560c0820151816006015560e082015181600701556101008201518160080155610120820151816009015561014082015181600a0160006101000a81548160ff02191690831515021790555061016082015181600a0160016101000a81548160ff021916908315150217905550905050600b60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060076000600354815260200190815260200160002090806001815401808255809150506001900390600052602060002090600b020160009091909190915060008201548160000155600182018160010190816127229190614dbd565b50600282018160020190816127379190614dbd565b50600382015481600301556004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506005820154816005015560068201548160060155600782015481600701556008820154816008015560098201548160090155600a820160009054906101000a900460ff1681600a0160006101000a81548160ff021916908315150217905550600a820160019054906101000a900460ff1681600a0160016101000a81548160ff02191690831515021790555050506003600081548092919061284a90614a2b565b9190505550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193360326040518363ffffffff1660e01b81526004016128ad929190614ee0565b600060405180830381600087803b1580156128c757600080fd5b505af11580156128db573d6000803e3d6000fd5b505050506003549050949350505050565b600b602052816000526040600020818154811061290857600080fd5b90600052602060002090600b02016000915091505080600001549080600101805461293290614467565b80601f016020809104026020016040519081016040528092919081815260200182805461295e90614467565b80156129ab5780601f10612980576101008083540402835291602001916129ab565b820191906000526020600020905b81548152906001019060200180831161298e57829003601f168201915b5050505050908060020180546129c090614467565b80601f01602080910402602001604051908101604052809291908181526020018280546129ec90614467565b8015612a395780601f10612a0e57610100808354040283529160200191612a39565b820191906000526020600020905b815481529060010190602001808311612a1c57829003601f168201915b5050505050908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600501549080600601549080600701549080600801549080600901549080600a0160009054906101000a900460ff169080600a0160019054906101000a900460ff1690508c565b60045481565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015612b4e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612b04575b50505050509050919050565b6000600760008481526020019081526020016000209050600015156009600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514612c15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c0c90614f55565b60405180910390fd5b8060090154431115612c5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c5390614fc1565b60405180910390fd5b60008203612d1f57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401612cbf9190613bec565b602060405180830381865afa158015612cdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612d009190614a88565b816007016000828254612d139190614d73565b92505081905550612ddf565b60018203612dde57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401612d829190613bec565b602060405180830381865afa158015612d9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612dc39190614a88565b816006016000828254612dd69190614d73565b925050819055505b5b806005016000815480929190612df490614a2b565b9190505550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933601e6040518363ffffffff1660e01b8152600401612e5792919061501c565b600060405180830381600087803b158015612e7157600080fd5b505af1158015612e85573d6000803e3d6000fd5b5050505060016009600085815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505050565b60056020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001018054612f4090614467565b80601f0160208091040260200160405190810160405280929190818152602001828054612f6c90614467565b8015612fb95780601f10612f8e57610100808354040283529160200191612fb9565b820191906000526020600020905b815481529060010190602001808311612f9c57829003601f168201915b505050505090806002018054612fce90614467565b80601f0160208091040260200160405190810160405280929190818152602001828054612ffa90614467565b80156130475780601f1061301c57610100808354040283529160200191613047565b820191906000526020600020905b81548152906001019060200180831161302a57829003601f168201915b50505050509080600301805461305c90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461308890614467565b80156130d55780601f106130aa576101008083540402835291602001916130d5565b820191906000526020600020905b8154815290600101906020018083116130b857829003601f168201915b5050505050908060040180546130ea90614467565b80601f016020809104026020016040519081016040528092919081815260200182805461311690614467565b80156131635780601f1061313857610100808354040283529160200191613163565b820191906000526020600020905b81548152906001019060200180831161314657829003601f168201915b50505050509080600501805461317890614467565b80601f01602080910402602001604051908101604052809291908181526020018280546131a490614467565b80156131f15780601f106131c6576101008083540402835291602001916131f1565b820191906000526020600020905b8154815290600101906020018083116131d457829003601f168201915b5050505050905086565b6000600354905090565b600060076000838152602001908152602001600020600a0160009054906101000a900460ff169050919050565b6060600060035467ffffffffffffffff81111561325257613251613ee2565b5b60405190808252806020026020018201604052801561328b57816020015b61327861350c565b8152602001906001900390816132705790505b50905060005b6003548110156134db576007600082815260200190815260200160002060405180610180016040529081600082015481526020016001820180546132d490614467565b80601f016020809104026020016040519081016040528092919081815260200182805461330090614467565b801561334d5780601f106133225761010080835404028352916020019161334d565b820191906000526020600020905b81548152906001019060200180831161333057829003601f168201915b5050505050815260200160028201805461336690614467565b80601f016020809104026020016040519081016040528092919081815260200182805461339290614467565b80156133df5780601f106133b4576101008083540402835291602001916133df565b820191906000526020600020905b8154815290600101906020018083116133c257829003601f168201915b50505050508152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201548152602001600a820160009054906101000a900460ff16151515158152602001600a820160019054906101000a900460ff1615151515815250508282815181106134c3576134c26148fd565b5b60200260200101819052508080600101915050613291565b508091505090565b60035481565b600060076000838152602001908152602001600020600901544311159050919050565b60405180610180016040528060008152602001606081526020016060815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6135fa816135e7565b811461360557600080fd5b50565b600081359050613617816135f1565b92915050565b600060208284031215613633576136326135dd565b5b600061364184828501613608565b91505092915050565b613653816135e7565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613693578082015181840152602081019050613678565b60008484015250505050565b6000601f19601f8301169050919050565b60006136bb82613659565b6136c58185613664565b93506136d5818560208601613675565b6136de8161369f565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000613714826136e9565b9050919050565b61372481613709565b82525050565b60008115159050919050565b61373f8161372a565b82525050565b60006101808201905061375b600083018f61364a565b818103602083015261376d818e6136b0565b90508181036040830152613781818d6136b0565b9050613790606083018c61364a565b61379d608083018b61371b565b6137aa60a083018a61364a565b6137b760c083018961364a565b6137c460e083018861364a565b6137d261010083018761364a565b6137e061012083018661364a565b6137ee610140830185613736565b6137fc610160830184613736565b9d9c50505050505050505050505050565b61381681613709565b811461382157600080fd5b50565b6000813590506138338161380d565b92915050565b60006020828403121561384f5761384e6135dd565b5b600061385d84828501613824565b91505092915050565b600060c08201905061387b600083018961371b565b818103602083015261388d81886136b0565b905081810360408301526138a181876136b0565b905081810360608301526138b581866136b0565b905081810360808301526138c981856136b0565b905081810360a08301526138dd81846136b0565b9050979650505050505050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61391f816135e7565b82525050565b600082825260208201905092915050565b600061394182613659565b61394b8185613925565b935061395b818560208601613675565b6139648161369f565b840191505092915050565b61397881613709565b82525050565b6139878161372a565b82525050565b6000610180830160008301516139a66000860182613916565b50602083015184820360208601526139be8282613936565b915050604083015184820360408601526139d88282613936565b91505060608301516139ed6060860182613916565b506080830151613a00608086018261396f565b5060a0830151613a1360a0860182613916565b5060c0830151613a2660c0860182613916565b5060e0830151613a3960e0860182613916565b50610100830151613a4e610100860182613916565b50610120830151613a63610120860182613916565b50610140830151613a7861014086018261397e565b50610160830151613a8d61016086018261397e565b508091505092915050565b6000613aa4838361398d565b905092915050565b6000602082019050919050565b6000613ac4826138ea565b613ace81856138f5565b935083602082028501613ae085613906565b8060005b85811015613b1c5784840389528151613afd8582613a98565b9450613b0883613aac565b925060208a01995050600181019050613ae4565b50829750879550505050505092915050565b60006020820190508181036000830152613b488184613ab9565b905092915050565b6000819050919050565b6000613b75613b70613b6b846136e9565b613b50565b6136e9565b9050919050565b6000613b8782613b5a565b9050919050565b6000613b9982613b7c565b9050919050565b613ba981613b8e565b82525050565b6000602082019050613bc46000830184613ba0565b92915050565b60006020820190508181036000830152613be481846136b0565b905092915050565b6000602082019050613c01600083018461371b565b92915050565b6000602082019050613c1c6000830184613736565b92915050565b600061018083016000830151613c3b6000860182613916565b5060208301518482036020860152613c538282613936565b91505060408301518482036040860152613c6d8282613936565b9150506060830151613c826060860182613916565b506080830151613c95608086018261396f565b5060a0830151613ca860a0860182613916565b5060c0830151613cbb60c0860182613916565b5060e0830151613cce60e0860182613916565b50610100830151613ce3610100860182613916565b50610120830151613cf8610120860182613916565b50610140830151613d0d61014086018261397e565b50610160830151613d2261016086018261397e565b508091505092915050565b60006020820190508181036000830152613d478184613c22565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600060c083016000830151613d93600086018261396f565b5060208301518482036020860152613dab8282613936565b91505060408301518482036040860152613dc58282613936565b91505060608301518482036060860152613ddf8282613936565b91505060808301518482036080860152613df98282613936565b91505060a083015184820360a0860152613e138282613936565b9150508091505092915050565b6000613e2c8383613d7b565b905092915050565b6000602082019050919050565b6000613e4c82613d4f565b613e568185613d5a565b935083602082028501613e6885613d6b565b8060005b85811015613ea45784840389528151613e858582613e20565b9450613e9083613e34565b925060208a01995050600181019050613e6c565b50829750879550505050505092915050565b60006020820190508181036000830152613ed08184613e41565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b613f1a8261369f565b810181811067ffffffffffffffff82111715613f3957613f38613ee2565b5b80604052505050565b6000613f4c6135d3565b9050613f588282613f11565b919050565b600067ffffffffffffffff821115613f7857613f77613ee2565b5b613f818261369f565b9050602081019050919050565b82818337600083830152505050565b6000613fb0613fab84613f5d565b613f42565b905082815260208101848484011115613fcc57613fcb613edd565b5b613fd7848285613f8e565b509392505050565b600082601f830112613ff457613ff3613ed8565b5b8135614004848260208601613f9d565b91505092915050565b60008060008060008060c0878903121561402a576140296135dd565b5b600061403889828a01613824565b965050602087013567ffffffffffffffff811115614059576140586135e2565b5b61406589828a01613fdf565b955050604087013567ffffffffffffffff811115614086576140856135e2565b5b61409289828a01613fdf565b945050606087013567ffffffffffffffff8111156140b3576140b26135e2565b5b6140bf89828a01613fdf565b935050608087013567ffffffffffffffff8111156140e0576140df6135e2565b5b6140ec89828a01613fdf565b92505060a087013567ffffffffffffffff81111561410d5761410c6135e2565b5b61411989828a01613fdf565b9150509295509295509295565b6000806040838503121561413d5761413c6135dd565b5b600061414b85828601613608565b925050602061415c85828601613608565b9150509250929050565b600060208201905061417b600083018461364a565b92915050565b600060c083016000830151614199600086018261396f565b50602083015184820360208601526141b18282613936565b915050604083015184820360408601526141cb8282613936565b915050606083015184820360608601526141e58282613936565b915050608083015184820360808601526141ff8282613936565b91505060a083015184820360a08601526142198282613936565b9150508091505092915050565b600060208201905081810360008301526142408184614181565b905092915050565b6000806040838503121561425f5761425e6135dd565b5b600061426d85828601613608565b925050602061427e85828601613824565b9150509250929050565b600080600080608085870312156142a2576142a16135dd565b5b600085013567ffffffffffffffff8111156142c0576142bf6135e2565b5b6142cc87828801613fdf565b945050602085013567ffffffffffffffff8111156142ed576142ec6135e2565b5b6142f987828801613fdf565b935050604061430a87828801613608565b925050606061431b87828801613824565b91505092959194509250565b6000806040838503121561433e5761433d6135dd565b5b600061434c85828601613824565b925050602061435d85828601613608565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600061439f838361396f565b60208301905092915050565b6000602082019050919050565b60006143c382614367565b6143cd8185614372565b93506143d883614383565b8060005b838110156144095781516143f08882614393565b97506143fb836143ab565b9250506001810190506143dc565b5085935050505092915050565b6000602082019050818103600083015261443081846143b8565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061447f57607f821691505b60208210810361449257614491614438565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026144fa7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826144bd565b61450486836144bd565b95508019841693508086168417925050509392505050565b600061453761453261452d846135e7565b613b50565b6135e7565b9050919050565b6000819050919050565b6145518361451c565b61456561455d8261453e565b8484546144ca565b825550505050565b600090565b61457a61456d565b614585818484614548565b505050565b5b818110156145a95761459e600082614572565b60018101905061458b565b5050565b601f8211156145ee576145bf81614498565b6145c8846144ad565b810160208510156145d7578190505b6145eb6145e3856144ad565b83018261458a565b50505b505050565b600082821c905092915050565b6000614611600019846008026145f3565b1980831691505092915050565b600061462a8383614600565b9150826002028217905092915050565b61464382613659565b67ffffffffffffffff81111561465c5761465b613ee2565b5b6146668254614467565b6146718282856145ad565b600060209050601f8311600181146146a45760008415614692578287015190505b61469c858261461e565b865550614704565b601f1984166146b286614498565b60005b828110156146da578489015182556001820191506020850194506020810190506146b5565b868310156146f757848901516146f3601f891682614600565b8355505b6001600288020188555050505b505050505050565b7f50726f706f73616c20686173206e6f74206265656e2071756575656400000000600082015250565b6000614742601c83613664565b915061474d8261470c565b602082019050919050565b6000602082019050818103600083015261477181614735565b9050919050565b7f50726f706f73616c2068617320616c7265616479206265656e2065786563757460008201527f6564000000000000000000000000000000000000000000000000000000000000602082015250565b60006147d4602283613664565b91506147df82614778565b604082019050919050565b60006020820190508181036000830152614803816147c7565b9050919050565b600060408201905061481f600083018561371b565b61482c602083018461364a565b9392505050565b600081519050919050565b600081905092915050565b600061485482614833565b61485e818561483e565b935061486e818560208601613675565b80840191505092915050565b60006148868284614849565b915081905092915050565b7f4661696c656420746f20657865637574652070726f706f73616c000000000000600082015250565b60006148c7601a83613664565b91506148d282614891565b602082019050919050565b600060208201905081810360008301526148f6816148ba565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f5265736561726368657220616c72656164792065786973747300000000000000600082015250565b6000614962601983613664565b915061496d8261492c565b602082019050919050565b6000602082019050818103600083015261499181614955565b9050919050565b6000819050919050565b60006149bd6149b86149b384614998565b613b50565b6135e7565b9050919050565b6149cd816149a2565b82525050565b60006040820190506149e8600083018561371b565b6149f560208301846149c4565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614a36826135e7565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203614a6857614a676149fc565b5b600182019050919050565b600081519050614a82816135f1565b92915050565b600060208284031215614a9e57614a9d6135dd565b5b6000614aac84828501614a73565b91505092915050565b6000614ac0826135e7565b9150614acb836135e7565b9250828202614ad9816135e7565b91508282048414831517614af057614aef6149fc565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000614b31826135e7565b9150614b3c836135e7565b925082614b4c57614b4b614af7565b5b828204905092915050565b7f566f74696e6720706572696f6420686173206e6f7420656e6465640000000000600082015250565b6000614b8d601b83613664565b9150614b9882614b57565b602082019050919050565b60006020820190508181036000830152614bbc81614b80565b9050919050565b7f50726f706f73616c20686173206e6f74206265656e20766f746564206f6e0000600082015250565b6000614bf9601e83613664565b9150614c0482614bc3565b602082019050919050565b60006020820190508181036000830152614c2881614bec565b9050919050565b7f50726f706f73616c20686173206e6f74206265656e20617070726f7665640000600082015250565b6000614c65601e83613664565b9150614c7082614c2f565b602082019050919050565b60006020820190508181036000830152614c9481614c58565b9050919050565b7f50726f706f73616c2068617320616c7265616479206265656e20717565756564600082015250565b6000614cd1602083613664565b9150614cdc82614c9b565b602082019050919050565b60006020820190508181036000830152614d0081614cc4565b9050919050565b7f5265736561726368657220646f6573206e6f7420657869737400000000000000600082015250565b6000614d3d601983613664565b9150614d4882614d07565b602082019050919050565b60006020820190508181036000830152614d6c81614d30565b9050919050565b6000614d7e826135e7565b9150614d89836135e7565b9250828201905080821115614da157614da06149fc565b5b92915050565b600081549050614db681614467565b9050919050565b818103614dcb575050614ea3565b614dd482614da7565b67ffffffffffffffff811115614ded57614dec613ee2565b5b614df78254614467565b614e028282856145ad565b6000601f831160018114614e315760008415614e1f578287015490505b614e29858261461e565b865550614e9c565b601f198416614e3f87614498565b9650614e4a86614498565b60005b82811015614e7257848901548255600182019150600185019450602081019050614e4d565b86831015614e8f5784890154614e8b601f891682614600565b8355505b6001600288020188555050505b5050505050505b565b6000819050919050565b6000614eca614ec5614ec084614ea5565b613b50565b6135e7565b9050919050565b614eda81614eaf565b82525050565b6000604082019050614ef5600083018561371b565b614f026020830184614ed1565b9392505050565b7f596f75206861766520616c726561647920766f74656400000000000000000000600082015250565b6000614f3f601683613664565b9150614f4a82614f09565b602082019050919050565b60006020820190508181036000830152614f6e81614f32565b9050919050565b7f566f74696e6720706572696f642068617320656e646564000000000000000000600082015250565b6000614fab601783613664565b9150614fb682614f75565b602082019050919050565b60006020820190508181036000830152614fda81614f9e565b9050919050565b6000819050919050565b6000615006615001614ffc84614fe1565b613b50565b6135e7565b9050919050565b61501681614feb565b82525050565b6000604082019050615031600083018561371b565b61503e602083018461500d565b939250505056fea264697066735822122042af74acf60be63f0e6882b9a90ada20d7fab2dd0859fa051564777835cd89bd64736f6c63430008180033",
    linkReferences: {},
    deployedLinkReferences: {},
};

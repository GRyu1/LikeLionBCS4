// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.20;

contract TEST_1 {
    struct AnswerDto {
        uint length;
        uint[] arr;    
    }
    uint[] arr;
    
    function test1 (uint number) public returns (AnswerDto memory){    
        uint tmp;
        while(number>0){
            arr.push(number%10);
            number/=10;
        }
        for(uint i=0; i<arr.length/2 ; i++){
            tmp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = tmp;
        }
        return AnswerDto(arr.length, arr);
    }
}

contract TEST_2 {
    struct AnswerDto {
        uint length;
        string arr;    
    }
    
    function test2 (string memory input) public pure returns (AnswerDto memory){
        bytes memory a = new bytes(bytes(input).length*2);
        for(uint i=0; i<a.length; i+=2){
            a[i] = bytes(input)[i/2];
            a[i+1] = bytes1(",");
        }
        return AnswerDto(bytes(input).length,string(a));
    }
 
}


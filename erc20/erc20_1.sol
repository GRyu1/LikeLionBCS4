// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/ERC20.sol)

pragma solidity ^0.8.20;

import {IERC20} from "./IERC20.sol";
import {IERC20Metadata} from "./extensions/IERC20Metadata.sol"; // name, simbol, decimals를 포함하고 있음 (중요도가 낮아 생략)
import {Context} from "../../utils/Context.sol";
import {IERC20Errors} from "../../interfaces/draft-IERC6093.sol"; //ERC코드를 자세히 알고싶다면 draft-IERC6093 오픈제플린 or 깃허브로 확인해볼 것

// ERC20상의 BalanceOf를 찾는 경우 Contract address가 key값이 된다. => 스마트 컨트랙트안에 잔고가 따로 존재하므로 ERC20의 정보가 바뀌더라도 이더리움의 정보는 바뀌지 않는다(if. ERC20을 실행할 때 가스비를 제외한다면).
//  => cf. 이더리움 헤더에서 BalanceOf를 찾는 경우는 나의 지갑주소가 필요(key 값)하다. (ex, 머클 패트리시아 storage tri).

// ERC20, ERC721은 Smart Contract에 해당함.(특이한 형태일 뿐) Ether는 Core에서 생성됨.

// balance 함수
// mint , burn 함수


// state tri 와 storage tri는 다름 => erc20은 storage tri를 변경하는 CA임을 이해해야함.

abstract contract ERC20 is Context, IERC20, IERC20Metadata, IERC20Errors {
    mapping(address account => uint256) private _balances; // ERC20의 잔액을 확일할 때 사용하게 됨 // 상태 변수로서 잔액을 보관하고 있음

    mapping(address account => mapping(address spender => uint256)) private _allowances; 
    //ex. A와 B의 게임으로 인해 지는사람이 벌금을 낸다고 가정할 떄 거래에 대한 강제성을 위에 A,B가 ERC20에 내에 있는 돈을 움직이는 것을 허용할 떄 사용
    // account가 spender에게 uint256의 양을 위임했는가
    uint256 private _totalSupply; // 전체 발행된 양

    string private _name; //이름(full name)
    string private _symbol; //심볼(ticker)

    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    function name() public view virtual returns (string memory) {
        return _name;//++
    }

    function symbol() public view virtual returns (string memory) {
        return _symbol; //++(메타마스크 import tokens 탭에서 costom시 토큰 simbol, balance가 출력되는 예시를 보여주심 사용되는 함수 ++ 표시)
    }

    function decimals() public view virtual returns (uint8) {
        return 18; 
    }

    function totalSupply() public view virtual returns (uint256) {
        return _totalSupply; // 총 발행량
    }

    function balanceOf(address account) public view virtual returns (uint256) {
        return _balances[account];//++ 맵핑을 사용하여 address => uint256 의 자료형으로 출력
    }

    function transfer(address to, uint256 value) public virtual returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, value); // _transfer함수 아래에 있으니 같이 참고해볼 것, 함수를 확인해보면 ERC20내에서 잔액이 이동한다는 것을 알 수 있다.
        return true; // 돈을 송금하는 코드, 8번째 줄 Context 내에 msg.sender가 존재.(참고)
    }

    function allowance(address owner, address spender) public view virtual returns (uint256) {
        return _allowances[owner][spender];
    }
    // owner, spender 사용
    // owner = EOA, spender = CA

    function approve(address spender, uint256 value) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, value);
        return true; // 내가 잔고가 없는데도 approve가 가능하다는 문제점이 있긴 함.
    }
    //spender에게 value만큼 허가하겠다는 의미

    function transferFrom(address from, address to, uint256 value) public virtual returns (bool) {
        address spender = _msgSender(); //CA가 권한을 가지고 있음
        _spendAllowance(from, spender, value);
        _transfer(from, to, value);
        return true;
    } // transferFrom는 transfer할 때 내가 allow한 address가 맞는지 확인 후 전송 

    function _transfer(address from, address to, uint256 value) internal {
        if (from == address(0)) {
            revert ERC20InvalidSender(address(0)); // from address가 0일 때, 오류를 revert함
        }
        if (to == address(0)) {
            revert ERC20InvalidReceiver(address(0)); // to address가 0일 때, 오류를 revert함
        }
        _update(from, to, value); // _update 함수를 불러옴
    }

    function _update(address from, address to, uint256 value) internal virtual {
        if (from == address(0)) {
            _totalSupply += value; // 여러 코드에서 사용됨, _transfer와는 관계 없음 => _mint 사용 시 필요하며 _totalSupply의 총량을 추가 
        } else {
            uint256 fromBalance = _balances[from]; // Transfer 사용 시 사용 , from이 변경되면 _balances가 계속 변하는 것을 확인할 수 있음
            if (fromBalance < value) {
                revert ERC20InsufficientBalance(from, fromBalance, value); // fromBalance < value일 경우 revert하는 코드
            unchecked { 
                // uint256 = 2**256-1 //숫자가 계산함에 있어 자릿수가 큰지 확인하는 용도로 생각하면 된다.(overflow 문제를 확인하기 위해) => 지정된 숫자가 초과되면 0으로 출력하여 overflow를 피해주기 위함. //unchecked는 가스비를 아끼기 위함이지 안전하게 사용하기 위해서가 아님.
                _balances[from] = fromBalance - value; // 내 잔액이 충족된다면 내 잔액에서 송금하는 value를 뺀 뒤 적용시키는 함수 
            } //if - revert는 예외처리 => revert에 해당되지 않으면 if-unchecked
        }

        if (to == address(0)) {
            unchecked {
                _totalSupply -= value; // Burn    
            }
        } else {
            unchecked {
                _balances[to] += value;  //mint
            }
        }// mint와 burn에 관련된 if문 

        emit Transfer(from, to, value);
    } 

    /* 
    _balance (from : 100 , to : 75 amount :25) 
    _transfer => update (from이 포함된 if문 => to가 포함된 if문 => 모든 조건 충족 후 emit(ex.웹소켓 emit사용하여 자동으로 이벤트를 읽어내기 위함(ierc20_s 내의 Transfer)=> 최종적으로 추적하기 위함)) 
    */

    function _mint(address account, uint256 value) internal { 
        if (account == address(0)) {
            revert ERC20InvalidReceiver(address(0));
        }
        _update(address(0), account, value);
    }
        // 없는 토큰을 찍어내는 코드 (Etherscan에서 확인해보면 mint할 때 from은 0x000...0에서 오는 것을 확인할 수 있다.)
        // mint에서 받는 account가 0일때 revert

    function _burn(address account, uint256 value) internal { // ex. 주식 소각
        if (account == address(0)) {
            revert ERC20InvalidSender(address(0));
        }
        _update(account, address(0), value);
    } //burn을 하지 않더라도 mint에서 limit을 정하는 방법 또한 존재함

        // burn에서 받는 account가 0일때 revert

    function _approve(address owner, address spender, uint256 value) internal {
        _approve(owner, spender, value, true); // input값의 차이로 아래와 같은 함수이름 가능, ture로 고정되어 있음 자세하지 설명x, 이 함수를 통해 바로 아래의 _approve로 이동한다고 생각할 것(과정이 길어 짧게 설명하기 위함, 전부 예시이니 비약이 많음. 참고만 할 것)
    }

    function _approve(address owner, address spender, uint256 value, bool emitEvent) internal virtual {
        if (owner == address(0)) {
            revert ERC20InvalidApprover(address(0));
        }
        if (spender == address(0)) {
            revert ERC20InvalidSpender(address(0));
        }
        _allowances[owner][spender] = value; //owner가 spender에게 value만큼 허가해주었다. /1. +=가 아닌 =인 이유는 erc20 자체에 자금이 많은 경우 value값이 임의로 추가되는 것을 방지하기 위해 2. _spendAllowance 함수에서 -value가 들어가 있는데 업데이트 할 때 새로운 value를 삽입하기 위해
        if (emitEvent) {
            emit Approval(owner, spender, value);
        }
    }

    function _spendAllowance(address owner, address spender, uint256 value) internal virtual { //owner가 spender의 돈을 value만큼 쓴다는 의미 
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            if (currentAllowance < value) {
                revert ERC20InsufficientAllowance(spender, currentAllowance, value);
            }
            unchecked {
                _approve(owner, spender, currentAllowance - value, false);
            }// _approve의 총량을 바꿔줘야 함, spender가 돈을 사용하는 것이므로 위에 있는 _approve는 통과 함
        }
    }
}

// @openzeppelin => npm
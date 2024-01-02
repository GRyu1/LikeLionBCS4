// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.15;

// 학생 점수관리 프로그램입니다.
// 여러분은 한 학급을 맡았습니다.
// 가장 점수가 낮은 사람을 집중관리하려고 합니다.

contract Test231226 {
    // 학생은 번호, 이름, 점수로 구성되어 있고(구조체)
    struct Student {
        uint id;
        string name;
        uint score;
    }
    struct ScoreOverview{
        uint totalScore;
        uint averageScore;
    }
    Student[] studentsList;
    mapping(uint => Student) students;

    // 가장 점수가 낮은 사람의 정보를 보여주는 기능,
    function getLowestStudent() public view returns(Student memory){
        uint temp= 101;
        uint tempIdx = 0;

        for (uint i = 0; i < studentsList.length; i++) {
            if(temp > studentsList[i].score){
                temp = studentsList[i].score;
                tempIdx = i;
            }
        }
        return studentsList[tempIdx];
    }
    // 총 점수 합계, 총 점수 평균을 보여주는 기능,
    function getstudentsListScoreInfo() public view returns(ScoreOverview memory) {
        uint totlaScore = 0;
        for (uint i = 0; i < studentsList.length; i++) {
            totlaScore += studentsList[i].score;
        }
        return ScoreOverview(totlaScore, totlaScore/studentsList.length);
    }
    // 특정 학생을 반환하는 기능, -> 숫자로 반환
    function findStudentById(uint _id) public view returns (Student memory){
        return students[_id];
    }

    // 가능하다면 학생 전체를 반환하는 기능을 구현하세요. ([] <- array)
    function getAllStudent() public view returns(Student[] memory){
        return studentsList;
    }
}


import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
const MyName = ({ name }) => {
    return (
        <div>
            안녕하세요! 제 이름은 {name} 입니다.
        </div>
    );
};

export default MyName;

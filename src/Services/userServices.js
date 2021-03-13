import axios from "axios";
import React from "react";
import { Component } from "react";
const baseUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user";




export function login(data) {

    try {
        console.log("This is the Sign in part", data);
        let data3 = axios.post(`http://localhost:5000/api/user/login`, data);
        return data3;
    } catch (error) {
        return error;
    }

};


export function registration(data) {
    try {
        console.log("This is the Sign up part", data);
        let data1 = axios.post(`http://localhost:5000/api/user/register`, data);
        return data1;
    } catch (error) {
        return error;
    }

};


export function forgotPass(data) {
    try {
        console.log("This is forgot password part", data);
        let data2 = axios.put(`http://localhost:5000/api/user/forgetPassword`, data);
        return data2;
    } catch (error) {
        return error;
    }
};

export function resetPass(data, token) {
    try {
        console.log("This is the reset password page", token);
        let data4 = axios.put(`http://localhost:5000/api/user/resetPassword`, data, {
            headers: {
                token: token,
            },
        });
        return data4;
    } catch (error) {
        return error;
    }
}


export function addNote(data){
    console.log('We are inside userServices addNote function',data)
    let localStorageToken = localStorage.getItem('token')
    console.log('localStorageToken',localStorageToken)
    return axios.post(`http://localhost:5000/api/user/addNote`, data, {  headers: { token: localStorage.getItem('token') }})
}


export function updateNotes(data){
    console.log('We are inside userServices updateNotes function',data)
    let data6 = axios.put(`http://localhost:5000/api/user/updateNotes`, data, {  headers: { token: localStorage.getItem('token') }})
    console.log('data 6 : ',data6)
    return data6;
}

export function getNotes(){
    console.log('We are inside userServices getNotes function')
    let localStorageToken = localStorage.getItem('token')
    console.log('localStorageToken',localStorageToken)
    let data5 = axios.get(`http://localhost:5000/api/user/getAllNotes`, {  headers: { token: localStorage.getItem('token') }})
    
    return data5;
}

export function getTrashNotes(){
    console.log('We are inside userServices getTrashNotes function')
    let data7 = axios.get(`http://localhost:5000/api/user/getAllTrashNotes`, {  headers: { token: localStorage.getItem('token') }} )
    console.log('data7 : ',data7)
    return data7;
}


export function deleteforever(data){
    console.log('We are inside userServices deleteforever function',data)
    return axios.put(`http://localhost:5000/api/user/deleteNote`, data, {  headers: { token: localStorage.getItem('token') }} )
}


export function deleteNotes(data){
    console.log('We are inside userServices deleteNotes function',data)
    return axios.put(`http://localhost:5000/api/user/moveToTrash`, data, {  headers: { token: localStorage.getItem('token') }} )
}


export function ArchiveNotes(data){
    console.log('We are inside userServices ArchiveNotes function',data)
    return axios.put(`http://localhost:5000/api/user/moveToArchive`, data, {  headers: { token: localStorage.getItem('token') }})
}

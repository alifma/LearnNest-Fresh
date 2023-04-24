import { Injectable } from "@nestjs/common";
// Tempat menyimpan bisnis logic
@Injectable({})
export class AuthService{
  signin(){
    return {msg: 'I have signin'}
  }
  signup(){
    return {msg: 'I have signup'}
  }
}
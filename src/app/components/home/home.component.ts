import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NiceService} from "../../nice.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user_name:string;
  public info_user_realName:string;
  public info_user_phone:string;
  public user_psd:string;
  public user_psd_two:string;
  public user_invitation_code:string;
  public user_withdrawal_password:number;
  public PhoneStatus:string="0";
  public RealNameStatus:string="0";
  public nowdown:boolean=false;
  public isPhone:boolean=true;
  constructor( private router:Router,public nice:NiceService) { 

  }

  ngOnInit() {
   this.getData();
   if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
   }else{
     this.isPhone=false;
   }
  }
  getData(){
    this.nice.get("WS/MobileInterface.ashx?action=getregistrationswitch").then((res:any)=>{
      this.PhoneStatus=res.data.PhoneStatus;
      this.RealNameStatus=res.data.RealNameStatus;
    })
  }

  submit(){
    // 检验数据类型
    let usernameTp = /^[a-zA-Z]\w{5,11}$/;
    let userpasswsd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/;//
    if (this.user_name == "") {
        alert("用户名不能为空")
        return
    } else if (this.user_psd == "") {
        alert("用户密码不能为空")
        return
    } else if (this.user_psd_two == "") {
        alert("用户再次输入密码不能为空")
        return
    } else if (this.user_withdrawal_password == null) {
        alert("用户取款密码不能为空")
        return
    } else if (this.user_withdrawal_password.toString().length < 6) {
        alert("取款密码不能少于六位数")
        return
    } else if (!usernameTp.test(this.user_name)) {
        alert("用户名错误")
        return
    } else if (!userpasswsd.test(this.user_psd)) {
        alert("密码错误")
        return
    } else if (!userpasswsd.test(this.user_psd_two)) {
        alert("第二次输入密码错误")
        return
    } else if (this.user_psd !== this.user_psd_two) {
        alert("两次输入的密码不一致")
        return
    }else{
      let parameter:any = new Object();
      parameter.user_name=this.user_name;
      parameter.user_psd=this.user_psd;
      parameter.user_withdrawal_password=this.user_withdrawal_password;
      if(this.user_invitation_code){
      parameter.user_invitation_code=this.user_invitation_code;
      }
      if(this.RealNameStatus=="1"){
        if(this.info_user_realName==""){
            alert("真实姓名不能为空")
            return
        }
        parameter.user_realName=this.info_user_realName;
      }
    if(this.PhoneStatus=="1"){
        if(this.info_user_phone==""){
            alert("电话不能为空")
            return
        }
        parameter.user_phone=this.info_user_phone;
    }
      let api="QuickRegister.aspx";
      // console.log(parameter)
      this.nice.post("WS/MobileInterface.ashx?action=quickregister",parameter).then((res:any)=>{
          if(res.data.valid){
              this.nowdown=true;
          }else{
            alert(res.msg)
          }
          // console.log(res)
      })
    }
  }


  godown(){
    // console.log("去下载");
    this.router.navigate(['/download']);
  } 
}

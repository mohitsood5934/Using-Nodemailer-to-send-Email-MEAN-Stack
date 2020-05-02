import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '../../node_modules/@angular/forms';
import {FormControl, FormGroupDirective, NgForm, FormGroup,Validators} from '@angular/forms';
import { EmailService } from './email.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'myapp';
  public emailForm:FormGroup;
  constructor(private email:EmailService,private fb:FormBuilder,private toastr: ToastrService){

  }
  ngOnInit(){
    this.emailForm=this.fb.group({
      name:["",Validators.required],
      email:[" ",Validators.required],
      mobileNumber:["",Validators.required],
      message:["",Validators.required]
    })
  }
  sendEmail(){
    let data=this.emailForm.value;
    this.email.sendEmail(data)
    .then((data)=>{
      console.log(data)
      this.toastr.success("Mail delivered successfully")
    })
    .catch((err)=>{
      this.toastr.info("Some error occured")
      console.log(err)
    })
  }
  reset(){
    this.emailForm.reset()
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal ,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { FormGroup,FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  public regForm:FormGroup
  public issubmitted:boolean=false;
  public isPhoneVisible:boolean=true;

  constructor(private modalService:NgbModal,private formBuilder:FormBuilder) {

    this.regForm=this.formBuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      month:['',Validators.required],
      date:['',Validators.required],
      year:['',Validators.required]
    })
   }
 
  ngOnInit(): void {
  }
 public closeModal:any
 


  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  nextModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

get control()
{
  return this.regForm.controls
}

Change()
{
   if(this.isPhoneVisible)
   {
     this.isPhoneVisible=false;
   }
   else
   {
     this.isPhoneVisible=true;
   }
}
 
signup()
{

}

login()
{

}
nextStep()
{
  
}



}

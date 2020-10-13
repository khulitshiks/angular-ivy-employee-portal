import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogtwo',
  templateUrl: './dialogtwo.component.html',
  styleUrls: ['./dialogtwo.component.css']
})
export class DialogtwoComponent implements OnInit {


   message: string = "UPDATE DETAILS"
    public _contactForm: FormGroup;

  constructor( private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) private data: any,
   private dialogRef: MatDialogRef<DialogtwoComponent>,
   //private _employeeService: EmployeeService 
   ) {
 console.log(this.data);
    }
      onNoClick(): void {
    this.dialogRef.close();
   }
 

      
  ngOnInit() {
   this._contactForm = this._formBuilder.group({
     ID: [this.data.Id],
      FirstName: [ this.data.name, [Validators.required]],
      LastName: [ this.data.surname, [Validators.required]],
       Title: [ this.data.position, [Validators.required]],
    });


  }


 onSubmit() {
     
   this.dialogRef.close();
 }
  

}

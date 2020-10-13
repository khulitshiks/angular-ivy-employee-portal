import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import { DialogtwoComponent } from '../dialogtwo/dialogtwo.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  

employees = [{name:"Julius", surname:"Mlambo", position:"CEO", age:27},
                   {name:"Peter", surname:"Brown", position:"Executive Director", age:32},
                   {name:"Angel", surname:"Zulu", position:"Managing Director", age:22},
                   {name:"Stanly", surname:"Scott", position:"Chief Financial Office", age:28},
                   {name:"Amanda", surname:"Solo", position:"Online Manager", age:29},
                   {name:"Chris", surname:"Malana", position:"Chief Technology officer", age:33},
                   {name:"Noma", surname:"Mzobe", position:"Developer", age:22},
                   {name:"Arthur", surname:"Mazibuko", position:"Front-end developer", age:23},
                   {name:"Anathi", surname:"Xulu", position:"Software Developer", age:21},
                   {name:"Amo", surname:"Zwane", position:"Intern", age:19},
  ];

//x : number;


 employeeArr = 
  [ {image: "https://www.byrdie.com/thmb/suFrTj4B-G3whCMUxtO60o2EDnI=/1024x775/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-154990476-fc11384d773b45ff82b48a2aa50a9507.jpeg", name:"Julius", surname:"Mlambo", position:"CEO", age:27 },
  { image: "https://st.depositphotos.com/1905901/1880/i/950/depositphotos_18800379-stock-photo-asian-man-smiling.jpg",name:"Peter", surname:"Brown", position:"Executive Director", age:32},
  {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStktAVwIe6xnl3UVjsNhPVdhKr6ZZRC50hGQ&usqp=CAU", name:"Angel", surname:"Zulu", position:"Managing Director", age:22},
   {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV-6dBzrXhqhG8ozzzYvDiwLXcYSbaRN7KfA&usqp=CAU", name:"Stanly", surname:"Scott", position:"Chief Financial Office", age:28},
   {image: "https://vistapointe.net/images/face-2.jpg", name:"Amanda", surname:"Solo", position:"Online Manager", age:29},
   {image: "https://headtopics.com/images/2020/7/10/premiumtimesng/the-humane-faces-showing-that-all-lives-matter-by-owei-lakemfa-premium-times-opinion-1281635027831476225.webp", name:"Chris", surname:"Malana", position:"Chief Technology officer", age:33},
   {image: "https://previews.123rf.com/images/albertiniz/albertiniz1508/albertiniz150800101/43189017-young-women-showing-funny-faces-in-different-actions.jpg", name:"Noma", surname:"Mzobe", position:"Developer", age:22},
   {image: "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528", name:"Arthur", surname:"Mazibuko", position:"Front-end developer", age:23},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB_Vwm3dGPKmxdZSw0yTdF0drp9kOopDEpUw&usqp=CAU", name:"Anathi", surname:"Xulu", position:"Software Developer", age:21},
    {image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTI6Pp1HrYl0YOzgkknEd50b76vc4oCc5pnqQ&usqp=CAU", name:"Amo", surname:"Zwane", position:"Intern", age:19}
  ];

  setArray() {
    let employeeArray:any[];
    for(let i=0; i < this.employeeArr.length;i++) { 
     // higest_bid_array.push(this.crypto[i].highestBid);
      employeeArray.push(this.employeeArr[i]);
    }
    return employeeArray;
  }

openDialog(Employee) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    });

       dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      const index = this.employeeArr.indexOf(Employee,0)
      if (index >-1) {
        this.employeeArr.splice(index,1);
      }
      }
    });
     }

  update() {
    const dialogRef = this.dialog.open(DialogtwoComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'YES',
          cancel: 'NO'
        }
      }
    })
  }

  updateDialog(employees) {
    const dialogRef = this.dialog.open(DialogtwoComponent);
    
 
  }


ngOnInit() {
  }

}
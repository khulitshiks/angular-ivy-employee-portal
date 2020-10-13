import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 projects = [
    {projectName:"Tracking app",projectDetails:"tracking daily activities. this prvides users with simple navigation application provided through google maps"
    , Department:"Maps"},
    {projectName:"Mining app",projectDetails:"stores information of miners. Mining industries has faced the issue of lack of communication within their employees.",
     Department:"Mining"},
    {projectName:"advertising",projectDetails:"promote products and sell brands that are exported from other coutries such as USA, Australia,Brazil and more",
     Department:"marketing"},
    {projectName:"Web Application",projectDetails:"creating responsive and applications one page applications using HTML5, Angular, PHP and Javascripts",
     Department:" development"},

  ]

}
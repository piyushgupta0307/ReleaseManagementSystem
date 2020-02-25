import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 private assetsPath: string = "../../../assets/";
  public data: any;
  closePreTab: boolean = true;
  public arr: any;
  public arr2: any;
  constructor(private http: HttpClient){}

  ngOnInit() {

    this.http.get(this.assetsPath + "data/data.json").subscribe((data) => {
    this.data = data;
	localStorage.setItem("jsonData", JSON.stringify(this.data));
	this.arr=Object.keys(this.data);
	}, (error) => {
      console.log(error);
    });

  }

}

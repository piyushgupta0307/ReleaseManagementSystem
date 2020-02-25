import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
ind: string;
indNum: number;
arr3: any;
private jdata: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  
  this.route.queryParams.subscribe(params => {
      if (params.ind != null) {
	  this.indNum=params.ind;
	  
	  this.jdata=JSON.parse(localStorage.getItem('jsonData'));
	  this.arr3=Object.values(this.jdata)[this.indNum];
	  console.log("arr3 "+this.arr3[0].title);
	  
   
      }
	  else{
	  console.log("Index Number Not Found");
	  }

    });
  }

}

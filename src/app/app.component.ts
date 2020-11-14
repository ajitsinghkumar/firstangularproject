import { Component ,OnInit} from '@angular/core';
import {ProvidedataService} from './providedata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pagination';
  data;
  totaldata=[];
  p: number = 1;
  constructor(private service:ProvidedataService) { }

  ngOnInit(): void {
    this.service.getdatafromservice().subscribe(data=>{
    this.data=data;
    for(let i=0;i<this.data.length;i++){
     this.totaldata.push(this.data[i]);
    }
    });
  }

  deletedata(index){
     console.log(index);
    this.totaldata.splice(index, 1)
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name:any="Santhosh"
  gigsData:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:3000/getData",{}).subscribe((data)=>{
      console.log(data);
      this.gigsData  = data
      console.log( this.gigsData);

    })

  }

}

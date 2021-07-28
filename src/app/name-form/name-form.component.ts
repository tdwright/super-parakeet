import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age-service/age.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  age? : number;
  public nameInput : string = '';
  public loading = false;

  constructor(private ageService: AgeService) { }

  ngOnInit(): void {
  }

  getDataForName(event: Event) : void {
    this.age = undefined;
    this.loading = true;
    this.ageService.getAgeApi(this.nameInput).subscribe((json:any) => {
        if(json?.age){
          this.age = json.age;
        }
      this.loading = false;
    });

    event.preventDefault();
  }

}

import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age-service/age.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  nameInput? : string;
  age? : number;

  constructor(private ageService: AgeService) {
    this.nameInput =  '';
  }

  ngOnInit(): void {
  }

  getDataForName(event: Event) : void {
    this.ageService.getAge(this.nameInput ?? '').subscribe(result => this.age = result);
    event.preventDefault();
  }

}

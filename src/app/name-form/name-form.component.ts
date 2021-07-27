import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age-service/age.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  age? : number;

  constructor(private ageService: AgeService) { }

  ngOnInit(): void {
  }

  getDataForName(event: Event) : void {
    this.age = this.ageService.getAge();
    event.preventDefault();
  }

}

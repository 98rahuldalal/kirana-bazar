import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor() { }
  listData = [
    {
      items: 'Oreo',
      description: 'Biscuit',
      date: '2020-07-12',
      stock: '5'
    }
  ]

  submitForm: FormGroup;

  ngOnInit() {

    this.submitForm = new FormGroup ({
      items: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required),
      
    })
  }

  onSubmit(){
    this.listData.push(this.submitForm.value);
    this.submitForm.reset();
  }


  }



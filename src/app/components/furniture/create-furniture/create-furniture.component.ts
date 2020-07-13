import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FurnitureService} from '../../../core/services/furniture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.scss']
})
export class CreateFurnitureComponent implements OnInit {

  form: FormGroup;
  action: string;

  constructor(private fb: FormBuilder,
              private furnitureService: FurnitureService,
              private router: Router) {
  }

  ngOnInit() {
    this.action = 'create';
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      subtitle: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      image: ['', [Validators.required]],
    });
  }
}

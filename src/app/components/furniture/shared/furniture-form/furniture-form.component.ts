import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FurnitureService} from '../../../../core/services/furniture.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-furniture-form',
  templateUrl: './furniture-form.component.html',
  styleUrls: ['./furniture-form.component.scss']
})
export class FurnitureFormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() action: string;
  @Input() id: string;
  constructor(private fb: FormBuilder,
              private furnitureService: FurnitureService,
              private router: Router) {
  }

  ngOnInit() {
  }

  createFurniture() {
    this.furnitureService.createFurniture(this.form.value).subscribe(() => {
      this.router.navigate(['/furniture/all']);
    });
  }

  editFurniture() {
    console.log(this.form.value);
    this.furnitureService.editFurniture(this.form.value, this.id).subscribe(() => {
      this.router.navigate(['/furniture/user']);
    });
  }

  get f() {
    return this.form.controls;
  }

}

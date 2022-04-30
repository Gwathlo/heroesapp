import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [],
})
export class ConfirmComponent implements OnInit {
  constructor(
    private dialref: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Heroe
  ) {}

  ngOnInit(): void {}

  deleteConfirm() {
    this.dialref.close(true);
  }

  close() {
    this.dialref.close(false);
  }
}

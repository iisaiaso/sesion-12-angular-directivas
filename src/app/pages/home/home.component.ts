import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formContac!: FormGroup
  show = false;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.formContac = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      mensaje: ['', [Validators.required, Validators.maxLength(100)]]
    })

    // console.log(this.onSubmit(), 'aqui');
    
  }

  onSubmit() {
    this.show = true    
  }
   
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  forma: FormGroup;

  constructor(private fire: FirebaseService) {
    this.forma = new FormGroup({
      correo: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      contrase: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  guardarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    this.fire.nuevoUsuario({
      email: this.forma.value.correo,
      password: this.forma.value.contrase,
      returnSecureToken: true
    }).subscribe( resp => {
      console.log(resp);
    }, (error) => {
      console.log(error);
    });

    this.forma.reset({
      correo: '',
      contrase: ''
    });

  }
}

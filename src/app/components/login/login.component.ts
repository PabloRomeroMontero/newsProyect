import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {FirebaseService} from '../../services/firebase.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;

  constructor(private fire: FirebaseService, private router: Router) {
    this.forma = new FormGroup({
      correo: new FormControl('', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      contrase: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  ngOnInit() {
  }

  iniciarSesion() {
    console.log(this.forma.value.correo);
    if (this.forma.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });

    Swal.showLoading();

    this.fire.login({
      email: this.forma.value.correo,
      password: this.forma.value.contrase,
      returnSecureToken: true
    }).subscribe(resp => {
      console.log(resp);
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Has iniciado sesion correctamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['home']);
    }, (error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: error.error.error.message,
        footer: '¿No tiene cuenta? Registrese aqui',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Registrarse'
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['registrar']);
        }
      });
    });
  }
}

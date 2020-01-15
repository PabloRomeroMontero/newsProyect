import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {UsuarioModel} from '../model/usuario-model';
import {NewModel} from '../model/new-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private urlCrud = 'https://proyectoromeronews.firebaseio.com/';
  private urlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey = 'AIzaSyAVUBpsE-sRNzPx3BwbLRqBvXPleYny_zQ';
  private userToken: string;

  constructor(private http: HttpClient) {
  }

  borrarNoticia(id: string) {
    return this.http.delete(`${this.urlCrud}/news/${id}.json`);
  }

  crearNoticia(news: NewModel) {
    return this.http.post(`${this.urlCrud}/news.json`, news)
      .pipe(
        map((resp: any) => {
          news.id = resp.name;
          return news;
        }));
  }

  actualizarNoticia(news: NewModel) {
    const newsTemporal = {
      ...news
    };
    delete newsTemporal.id;
    return this.http.put(`${this.urlCrud}/news/${news.id}.json`, newsTemporal);
  }

  getNews() {
    return this.http.get(`${this.urlCrud}/news.json`)
      .pipe(
        map(this.createArray)
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.urlLogin}:signUp?key=${this.apiKey}`, authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }


  login(usuario: UsuarioModel) {
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.urlLogin}:signInWithPassword?key=${this.apiKey}`, authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }


  guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('toke');
    } else {
      this.userToken = '';
    }
  }

  private createArray(newsObj: object) {
    const newsList: NewModel[] = [];

    if (newsObj === null) {
      return [];
    }
    Object.keys(newsObj).forEach(key => {
      const ne: NewModel = newsObj[key];
      ne.id = key;
      newsList.push(ne);
    });
    return newsList;
  }

  comprobarEstarAutenticado() {
    this.leerToken();
    return this.userToken.length > 2;
  }


  salir() {
    localStorage.removeItem('token');
  }
}

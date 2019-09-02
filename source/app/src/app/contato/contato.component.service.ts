import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

const host  = 'http://dbapi.io/db/coll';

@Injectable()
export class ContatoComponentService {

  constructor(private http: Http) {
  }

  enviarContato(contatoForm: any): Observable<Response> {
    const nomeCompleto = contatoForm.nomeCompleto;
    const em = contatoForm.contato.email;
    const mensagem = contatoForm.contato.mensagem;

    return this.http.post(host, {email: em, from: nomeCompleto, message: mensagem});
  }
}

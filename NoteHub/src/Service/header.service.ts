import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  Ativa: boolean = false;

  GetHeader() {
    return this.Ativa;
  }

  AlterHeader(): boolean { // Retorna um booleano
    this.Ativa = !this.Ativa; // Alterna o valor de Ativa
    return this.Ativa; // Retorna o novo valor
  }
}

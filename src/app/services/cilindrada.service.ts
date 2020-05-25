import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { Cilindrada } from '../models/cilindrada.model';

@Injectable({
  providedIn: 'root'
})
export class CilindradaService {
  
  constructor(private firestore: AngularFirestore) { }

  async add(cilindrada: Cilindrada): Promise<Cilindrada> {

    const docRef = await this.firestore.collection<Cilindrada>("cilindrada").add(cilindrada);
    const doc = await docRef.get();

    return {
      idCilindrada: doc.id,
      ...doc.data()
    } as Cilindrada;

  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Marca } from '../models/marca.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Marca[]> {
    return this.firestore.collection<Marca>('marca').valueChanges({ idField: 'id' });
  }

  async add(marca: Marca): Promise<Marca> {
    
    const docRef = await this.firestore.collection<Marca>("marca").add(marca);
    const doc = await docRef.get();

    return {
      id: doc.id,
      ...doc.data()
    } as Marca;

  }

  async get(id: string): Promise<Marca> {
  
    const doc = await this.firestore.collection<Marca>('marcas').doc(id).get().toPromise();
    
    return{
      id: doc.id,
      ...doc.data()
    } as Marca;

  }

  
}

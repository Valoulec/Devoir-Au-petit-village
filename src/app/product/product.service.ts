import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product = [
    {
      id: 1,
      name: 'Astérix',
      description:
        'Craquez pour cette belle figurine en plastique de 9cm aux finitions soignées ! Poursuivez vos aventures dans l’univers des irréductibles Gaulois avec le livre d’Astérix ! Centré sur l’album Astérix et le chaudron, ce livre La Galerie des personnages, au format 20 x 20 cm avec une couverture rigide, révèle au lecteur la création et l’évolution du personnage d’Astérix à travers les années. Il relate également la rencontre de René Goscinny et d’Albert Uderzo, deux auteurs de génie, grâce à des documents exclusifs.',
      price: 10.99,
      image: '../../assets/108_1024x1024.webp',
    },
    {
      id: 2,
      name: 'Obelix',
      description:
        "'Craquez pour cette belle figurine en plastique de 11cm aux finitions soignées ! Poursuivez vos aventures dans l’univers des irréductibles Gaulois avec un livre ! Ce livre La Galerie des personnages, au format 20 x 20 cm avec une couverture rigide, révèle au lecteur la création et l’évolution du personnage d’Obélix à travers les années. N’oublions pas bien sûr l’histoire du petit chien Idéfix ! Enfin, découvrez la jeunesse de René Goscinny et d’Albert Uderzo grâce à des documents exclusifs !',",
      price: 20.49,
      image: '../../assets/lot (1).jpeg',
    },
    {
      id: 3,
      name: 'Panoramix',
      description:
        "Craquez pour cette belle figurine en plastique de 9 cm aux finitions soignées ! Poursuivez vos aventures dans l’univers des irréductibles Gaulois avec le livre d’Astérix ! Centré sur l’album Astérix et les Goths, ce livre La Galerie des personnages, au format 20 x 20 cm avec une couverture rigide, révèle au lecteur la création et l’évolution du personnage de Panoramix à travers les années. Saviez-vous que René Goscinny et Albert Uderzo ont participé à la création du magazine de bande dessinée à succès Pilote, dans lequel a été publié la première planche des Aventures d'Astérix le Gaulois ? Découvrez les documents exclusifs à propos de ce journal !",
      price: 20.49,
      image: '../../assets/lot.jpeg',
    },
  ];

  constructor() {}

  getProducts() {
    return this.product;
  }

  getProductById(id: number) {
    return this.product.find((product) => product.id === id);
  }
}

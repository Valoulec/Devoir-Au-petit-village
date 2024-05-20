import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { ProductService } from '../product/product.service';
import { SortByPricePipe } from '../sort-by-price.pipe';
// Correction ici

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [ProductService, FilterByNamePipe],
  imports: [
    CommonModule,
    RouterModule,
    SortByPricePipe,
    FilterByNamePipe,
    FormsModule,
  ],
})
export class CardComponent implements OnInit {
  products: any;
  sortOrder: string = 'asc';
  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  constructor(
    private productService: ProductService,
    private filterByNamePipe: FilterByNamePipe
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  searchText: string = ''; // Nouvelle propriété pour la recherche par nom

  // Fonction pour filtrer les produits par nom
  filterProductsByName(): any[] {
    return this.card.filter((product) =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  card = [
    {
      id: '1',
      name: 'Astérix',
      description: "figurine d'astérix",
      price: 20.0,
      image: '../../assets/108_1024x1024.webp',
    },
    {
      id: '2',
      name: 'Obélix',
      description: "figurine d'obélix",
      price: 21.0,
      image: '../../assets/lot (1).jpeg',
    },
    {
      id: '3',
      name: 'Panoramix',
      description: 'figurine de paronamix',
      price: 39.99,
      image: '../../assets/lot.jpeg',
    },
  ];
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { Product } from './product.module';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports: [
    CommonModule,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  standalone: true,
})
export class ProductComponent implements OnInit {
  product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // Récupère 'id' comme une chaîne ou utilise '0' si 'id' est null ou undefined
      const productIdStr = params.get('id') ?? '0';
      // Convertit la chaîne en nombre
      const productId = +productIdStr;
      if (productId) {
        const product = this.productService.getProductById(productId);
        if (product) {
          this.product = [product]; // Encapsulez le produit dans un tableau
        } else {
          this.product = []; // Assurez-vous que product est toujours un tableau
        }
      }
    });
  }
}

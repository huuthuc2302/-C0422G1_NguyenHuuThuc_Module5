import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../model/category';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService, private router: Router) {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
    console.log(this.categories);
  }
  getAllCategory() {
    this.categoryService.getAll().subscribe(categoires => {
      this.categories = categoires;
    });
  }
  submit() {
    let category: Category;
    const product = this.productForm.value;
    console.log(this.productForm.value);
    this.categoryService.findById(this.productForm.value.category).subscribe(n => {
      category = n;
      product.category = category;
      this.productService.saveProduct(product).subscribe(() => {
        alert('Tạo thành công');
        this.router.navigateByUrl('product/list/new');
      }, e => console.log(e));
    });

    product.category = {
      id: product.category
    };

  }

}

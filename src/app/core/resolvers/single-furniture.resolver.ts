import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Furniture} from '../../components/shared/models/furniture';
import {FurnitureService} from '../services/furniture.service';

@Injectable({
  providedIn: 'root'
})

export class SingleFurnitureResolver implements Resolve<Furniture> {

  constructor(private furnitureService: FurnitureService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    return this.furnitureService.getFurnitureById(id);
  }
}

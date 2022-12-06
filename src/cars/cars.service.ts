import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      Model: 'Corolla',
    },

    {
      id: 2,
      brand: 'Honda',
      Model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      Model: 'Cheroke',
    },
  ];

  FindAll() {
    return this.cars;
  }

  FindOneByid(id: number) {
    const carid = this.cars.find((carid) => carid.id === id);
    if (!carid) {
      throw new NotFoundException(`Car Whit id '${id}' not found`);
    }
    return carid;
  }
}

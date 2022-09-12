enum Colors {
  BLACK = 'Preta',
  WHITE = 'Branca',
  RED = 'Vermelha',
  SILVER = 'Prata',
}

interface ICar {
  brand: string;
  doors: number;
  color: Colors;
}

class Car implements ICar {
  doors: number;
  brand: string;
  color: Colors;

  constructor(door: number, brand: string, color: Colors) {
    this.doors = door;
    this.brand = brand;
    this.color = color;
  }

  honk(): string {
    return 'aciona a buzina do carro';
  }
  openTheDoor(door: number): string {
    return `abre a porta ${door}`;
  }
}

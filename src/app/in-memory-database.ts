import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model';
export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da Casa.' },
      { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios.' },
      { id: 3, name: 'Lazer', description: 'Cinema, Parques, Praia, Etc.' },
      { id: 4, name: 'Salários', description: 'Recebimento de Salário.' },
      { id: 5, name: 'Freelas', description: 'Trabalhos como Freelancer.' }
    ];
    return { categories };
  }
}

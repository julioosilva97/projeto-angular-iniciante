import { Cliente } from './../../clientes/cliente.model';
export interface ServicoPrestadoConsulta {
  id?: number;
  descricao: string;
  cliente : Cliente
  valor: number;
  data: string;
}

export interface ServicoPrestado {
  id?: number;
  descricao: string;
  idCliente: number | null;
  valor: string;
  data: string;
}

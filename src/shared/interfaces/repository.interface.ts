export interface Repository<
  Entity,
  CreateDTO,
  UpdateDTO
> {
  findAll(): Promise<Entity[]>;
  create(dto: CreateDTO): Promise<Entity>;
  update(id: string, dto: UpdateDTO): Promise<Entity>;
  delete(id: string): Promise<Entity>;
}
export interface IdRepository<Entity> {
    findById(id: string): Promise<Entity | null>;
}
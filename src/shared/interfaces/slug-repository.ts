export interface SlugRepository<Entity> {
    findBySlug(slug: string): Promise<Entity | null>;
}


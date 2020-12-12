import { registerGlobalRoutes } from "@global/routes";
import { Router } from "express";

/* export interface IComponentService<T> {
	readonly repo: Repository<T>;
	readonly cacheService?: CacheService;
	readonly defaultRelations?: string[];
}

export interface IComponentServiceStrict<T> extends IComponentService<T> {
	readAll(options: FindManyOptions<T>, cached?: boolean): Promise<T[]>;
	read(options: FindOneOptions<T>): Promise<T | undefined>;
	save(entity: T): Promise<T>;
	delete(entity: T): Promise<T>;
} */

export interface IComponentRoutes<T> {
	readonly controller: T;
	readonly router: Router;

	initRoutes(): void;
	initChildRoutes?(): void;
}

export function registerApiRoutes(router: Router, prefix: string = ''): void{
    registerGlobalRoutes(router, prefix);
}
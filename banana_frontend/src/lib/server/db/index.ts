import { env } from "$env/dynamic/private";
import * as t from "$lib/server/db/schema";
import { createClient, LibsqlError } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

if (!env.DATABASE_PATH) throw new Error("DATABASE_PATH is not set");

const client = createClient({ url: `file:${env.DATABASE_PATH}` });

export const db = drizzle(client, { schema: t });
export * as t from "$lib/server/db/schema";

export async function dbRetry<T>(fn: () => Promise<T>) {
    while (true) {
        try {
            return await fn();
        } catch (e) {
            if (!(e instanceof LibsqlError)) throw e;
            if (e.code != "SQLITE_BUSY") throw e;
        }
    }
}

export async function dbRetryTx<T>(
    fn: (tx: Parameters<Parameters<typeof db.transaction>[0]>[0]) => Promise<T>
) {
    return dbRetry(() => db.transaction(fn));
}

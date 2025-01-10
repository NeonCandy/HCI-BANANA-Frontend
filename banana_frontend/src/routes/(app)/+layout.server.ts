import { encodeUser } from "$lib/server/db_utils";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
    if (!event.locals.user) {
        return redirect(302, "/login");
    }
    return { user: encodeUser(event.locals.user) };
};

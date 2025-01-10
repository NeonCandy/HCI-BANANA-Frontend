FROM node:23-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
COPY --exclude=node_modules --exclude=build --exclude=.svelte-kit --exclude=.env --exclude=local.db ./ .
RUN corepack enable && corepack install

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN DATABASE_PATH=local.db pnpm run build

FROM base
WORKDIR /app
COPY --from=prod-deps /app/node_modules node_modules
COPY --from=build /app/package.json .
COPY --from=build /app/build build

ENV PORT=5000
EXPOSE 5000
CMD pnpm run db:push && node build

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SearchImport } from './routes/search'
import { Route as DownloadsImport } from './routes/downloads'
import { Route as CollectionsImport } from './routes/collections'
import { Route as AccountImport } from './routes/account'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const DownloadsRoute = DownloadsImport.update({
  id: '/downloads',
  path: '/downloads',
  getParentRoute: () => rootRoute,
} as any)

const CollectionsRoute = CollectionsImport.update({
  id: '/collections',
  path: '/collections',
  getParentRoute: () => rootRoute,
} as any)

const AccountRoute = AccountImport.update({
  id: '/account',
  path: '/account',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/account': {
      id: '/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AccountImport
      parentRoute: typeof rootRoute
    }
    '/collections': {
      id: '/collections'
      path: '/collections'
      fullPath: '/collections'
      preLoaderRoute: typeof CollectionsImport
      parentRoute: typeof rootRoute
    }
    '/downloads': {
      id: '/downloads'
      path: '/downloads'
      fullPath: '/downloads'
      preLoaderRoute: typeof DownloadsImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/downloads': typeof DownloadsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/downloads': typeof DownloadsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/account': typeof AccountRoute
  '/collections': typeof CollectionsRoute
  '/downloads': typeof DownloadsRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/account'
    | '/collections'
    | '/downloads'
    | '/search'
    | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/account' | '/collections' | '/downloads' | '/search' | '/settings'
  id:
    | '__root__'
    | '/'
    | '/account'
    | '/collections'
    | '/downloads'
    | '/search'
    | '/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AccountRoute: typeof AccountRoute
  CollectionsRoute: typeof CollectionsRoute
  DownloadsRoute: typeof DownloadsRoute
  SearchRoute: typeof SearchRoute
  SettingsRoute: typeof SettingsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AccountRoute: AccountRoute,
  CollectionsRoute: CollectionsRoute,
  DownloadsRoute: DownloadsRoute,
  SearchRoute: SearchRoute,
  SettingsRoute: SettingsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/account",
        "/collections",
        "/downloads",
        "/search",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/account": {
      "filePath": "account.tsx"
    },
    "/collections": {
      "filePath": "collections.tsx"
    },
    "/downloads": {
      "filePath": "downloads.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
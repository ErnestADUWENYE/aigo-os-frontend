# AIGO OS Route Namespace Contract

The application surfaces use Next.js route groups for composition and
explicit URL namespaces where route names would otherwise overlap.

## Public Website

URL namespace: `/`

Examples:

- `/`
- `/product`
- `/solutions`
- `/pricing`
- `/security`
- `/status`

## Authentication

URL namespace: root authentication routes

Examples:

- `/sign-in`
- `/sign-up`
- `/accept-invitation`
- `/select-organization`
- `/forbidden`
- `/session-expired`

## Customer Console

URL namespace: `/console`

Examples:

- `/console/dashboard`
- `/console/governance`
- `/console/assurance`
- `/console/integrations`
- `/console/settings`

## AIGO Admin Console

URL namespace: `/admin`

Examples:

- `/admin/dashboard`
- `/admin/customers`
- `/admin/system-health`
- `/admin/security`
- `/admin/settings`

The route namespaces do not change feature ownership or application
surface boundaries.

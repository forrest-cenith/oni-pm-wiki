# Google Drive Folder Structure

## Overview
ONI uses Google Drive as the primary document repository for all challenge and contract operations. Each customer and project gets a standardized folder hierarchy to keep documents organized and auditable.

## Standard Customer Folder Layout

```
[Customer Name] (e.g., ONR, DEVCOM, OUSW)
├── [Project Name] (e.g., LRUAS, Elevated Sensor)
│   ├── 1. Award Docs
│   │   └── Executed agreements, award letters
│   ├── 2. Submissions
│   │   └── Downloaded vendor proposals (named per convention)
│   ├── 3. ACC-RI Documents
│   │   └── Challenge Overview, Market Research, Tech Eval docs
│   ├── 4. Invoices Received
│   │   └── Vendor invoices as received
│   ├── 5. ONI Invoices
│   │   └── ONI-generated invoices for ACC-RI
│   ├── 6. Modifications
│   │   └── Contract modifications and supporting docs
│   └── Operations Tracker (spreadsheet at root)
```

## Key Principles
- Every project gets its own folder under the customer
- The Operations Tracker lives at the project root level — it's the single source of truth
- Submissions are downloaded and renamed per [Naming Conventions](/docs/google-drive/naming-conventions)
- ACC-RI documents follow strict naming templates (see [Challenge Closeout Package](/docs/marketplace-workflows/02-challenge-closeout-package))
- Archive folders when a project reaches closeout — don't delete

## Related
- [Challenge Closeout Package](/docs/marketplace-workflows/02-challenge-closeout-package) — what goes in the ACC-RI Documents folder
- [Processing an Invoice](/docs/marketplace-workflows/03-processing-an-invoice) — how the Operations Tracker is used for invoicing

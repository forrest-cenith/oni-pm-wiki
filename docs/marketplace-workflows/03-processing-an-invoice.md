# Processing an Invoice

## Overview
When a vendor invoice is received by ONI, the PM maps vendor line items to contract CLINs and generates the ONI invoice for submission to ACC-RI.

**Related pipeline stages:** [ONI Invoice Review](/docs/invoices-pipeline/03-oni-invoice-review), [Submitted to ACC-RI](/docs/invoices-pipeline/04-submitted-to-acc-ri)

## Steps

1. **Invoice received by ONI**

2. **Open the relevant contract file**

3. **Open the relevant Ops folder** (Customer > Project)
   - Example: ONR > LRUAS

4. **Open the Operations Tracker** (typically at root level of the ops folder)
   - Example: `ONR LRUAS Operations Tracker`

5. **Create an ONI Invoice from template**
   - Row 2 = Invoice total
   - CLIN rows = Map CLINs from the vendor invoice to CLINs in the tracker

6. **File the received invoice**
   - Paste the vendor's original invoice into the **Invoices Received** folder

## Key Principles
- Always map vendor line items to specific contract CLINs
- Verify totals match before submitting to ACC-RI
- Keep the operations tracker current — it's the single source of truth for billing status
- Save exactly what was submitted, not just the final ONI invoice PDF

## Related Templates
- [CLIN Invoice Worksheet](/templates/documents/clin-invoice-worksheet)
- [Invoice Intake Checklist](/templates/checklists/invoice-intake)

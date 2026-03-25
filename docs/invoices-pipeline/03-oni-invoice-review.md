# ONI Invoice Review

## Overview

ONI validates the vendor invoice and generates the corresponding ONI invoice for submission to ACC-RI, mapped to CLINs. This is the critical translation step where vendor billing is reconciled against the contract structure and packaged into the format ACC-RI requires. Any discrepancies must be resolved with the vendor before the ONI invoice is submitted.

## Key Tasks / Checklist

- [ ] Review vendor invoice for allowability and accuracy against the contract
- [ ] Map vendor charges to the correct CLINs using the billing worksheet
- [ ] Generate the ONI invoice to ACC-RI with correct CLIN references, amounts, and descriptions
- [ ] Ensure totals and descriptions on the ONI invoice match the underlying vendor charges
- [ ] Confirm all required attachments and backup are included in the submission package
- [ ] Resolve any discrepancies with the vendor before finalizing the ONI invoice
- [ ] Obtain internal approval or sign-off on the ONI invoice package
- [ ] Document any adjustments, notes, or clarifications made during review

## Documents Needed or Produced

| Document | Direction | Notes |
|---|---|---|
| Vendor Invoice | Input | The validated vendor invoice being used as the basis for the ONI invoice |
| CLIN Matrix / Billing Worksheet | Input | Maps vendor line items to ONI line items to ACC-RI CLINs |
| ONI Invoice to ACC-RI | Output | The invoice ONI submits to ACC-RI for payment processing |
| Approval Notes | Output | Internal record of review decisions, adjustments, and sign-off |

## Email Templates

### Invoice Discrepancy / Clarification to Vendor

**Subject:** Invoice Clarification Needed -- [Project Name] -- [Invoice Number]

**Body:**

Team,

During our review of invoice [invoice number], we identified the following items that need clarification or correction before we can process:

1. [Specific discrepancy -- e.g., "Line item 3 totals $12,500 but the CLIN allocation for this deliverable is $10,000"]
2. [Specific discrepancy]
3. [Specific discrepancy]

Please provide a corrected invoice or written clarification for each item by **[date]**.

Thank you,
[Name]

### ONI Invoice Review Complete -- Internal Notification

**Subject:** Invoice Review Complete -- [Project Name] -- [Invoice Number] -- Ready for Submission

**Body:**

Team,

The ONI invoice for [project name], based on vendor invoice [invoice number], has been reviewed and is ready for submission to ACC-RI.

- **Total amount:** [Amount]
- **CLINs billed:** [CLIN numbers]
- **Attachments included:** [List -- e.g., vendor invoice, backup documentation, CLIN mapping]

Please confirm or proceed with submission.

Thank you,
[Name]

## Common Hangups & Resolutions

| Hangup | Resolution |
|---|---|
| Vendor invoice not aligned to CLIN structure | Work with the vendor to reformat or provide a breakdown that maps to CLINs; do not force-fit charges into CLINs without clear traceability |
| Work is complete but acceptance is undocumented | Obtain written acceptance from the government or ONI lead before generating the ONI invoice; do not submit without it |
| Mod not yet processed but vendor billing reflects changed scope | Hold the invoice until the mod is executed, or bill only the portion that aligns with the current contract baseline |
| Math or period of performance (POP) mismatch | Verify rates, quantities, and POP dates against the contract; flag specific errors back to the vendor for correction |

## Stakeholders & Roles

| Stakeholder | Role |
|---|---|
| ONI PM | Reviews vendor invoice against scope and milestones, coordinates discrepancy resolution |
| ONI Finance / Contracts Admin | Maps charges to CLINs, generates the ONI invoice, assembles submission package |
| Vendor Finance | Responds to clarification requests and provides corrected invoices if needed |
| ACC-RI Finance (as needed) | May be consulted on CLIN interpretation or billing format questions before submission |

## Typical Timeline

Should be completed promptly after receipt of the vendor invoice -- typically within a few business days. Discrepancy resolution with the vendor may extend this, but the review itself should not be the bottleneck.

## Tips & Lessons Learned

- **Keep a reusable invoice worksheet that traces vendor line items to ONI line items to ACC-RI CLINs.** This is the single most useful artifact for preventing errors and speeding up review.
- Do not submit an ONI invoice with unresolved questions -- it is faster to fix issues before submission than to respond to ACC-RI rejections.
- If a vendor consistently submits invoices that do not align to CLINs, provide them with the CLIN matrix and walk through the mapping together.
- Save the completed billing worksheet alongside each invoice for audit traceability.
- When in doubt about a CLIN mapping, consult with ACC-RI before submitting rather than guessing.

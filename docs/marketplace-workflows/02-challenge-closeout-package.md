# Challenge Closeout Package

## Overview
After a challenge closes, ONI prepares a closeout package for ACC-RI containing submissions, challenge overview, market research report, and technical evaluation. This is done on Monday of the week following close.

**Related pipeline stages:** [Evaluation](/docs/challenge-pipeline/04-evaluation), [Vendor Coordination](/docs/challenge-pipeline/05-vendor-coordination)

## Steps

### 1. Create Google Drive Folders
In the relevant Operations folder for the customer:
- Create a **Submissions** folder
- Create an **ACC-RI Documents** folder

### 2. Download and Organize Submissions
- Use the [ONI PM Dashboard](/docs/marketplace-workflows/09-oni-pm-dashboard) to bulk-select and download submission files — this is much faster than downloading them individually from the public challenge page

- Combine multiple files from a single submission into one PDF
- Naming convention: `[[Company Name]]_Proposal_[[Challenge Name]].pdf`
  - Example: `Vertex Modernization and Sustainment LLC_Proposal_UAS Launcher_OUSW.pdf`
- If a company has multiple submissions, see [What do we do if one company has multiple submissions?](#multiple-submissions)
- Upload the final downloaded, combined, and deduplicated proposal PDFs to the **Submissions** folder in Google Drive

### 3. Fill Out ACC-RI Documents
Three documents are required:

**Technical Evaluation & Award Selection Recommendation**
- Use the **Download Technical Evaluation Report** button in the [ONI PM Dashboard](/docs/marketplace-workflows/09-oni-pm-dashboard) to generate this document instead of filling it out manually
- Template: [Google Doc](https://docs.google.com/document/d/1Ptuns28PMSY-cE2HE0RkFZp_lcpjvYXd/edit?usp=sharing&ouid=116482897251814755876&rtpof=true&sd=true)
- Naming: `C04 Technical Evaluation and Award Selection Recommendation - [[marketplace.challenge.name]].docx`

**Challenge Overview Document**
- Sort submissions A-Z and screenshot for the overview
- Example: [Google Doc](https://docs.google.com/document/d/1L0QbmYiN0027o7iUnBajGFQxCdGnOz5L/edit?usp=drive_link&ouid=116482897251814755876&rtpof=true&sd=true)
- Naming: `Challenge Overview - [[marketplace.challenge.name]].docx`

**Market Research Report**
- This should already be completed from the [Drafting Challenge](/docs/challenge-pipeline/02-drafting-challenge) stage — confirm it's up to date and finalized before including in the package
- Template: [Google Doc](https://docs.google.com/document/d/1vS2kBLzg0H1kq2XCFTlIFSvMrrkew8LW/edit?usp=drive_link&ouid=116482897251814755876&rtpof=true&sd=true)
- Naming: `A02 Challenge Market Research Report (Market Intelligence) - [[marketplace.challenge.name]].docx`

### 4. Email the Package to ACC-RI

<span class="badge badge-oni">ONI</span> → <span class="badge badge-acc-ri">ACC-RI</span>

**Subject:** Challenge Closeout Package – [[Challenge Name]]

**To:** <span class="badge badge-acc-ri">ACC-RI</span>
cc: <span class="badge badge-oni">ONI</span>

```
The following [Challenge Name] challenge package documents are attached:

1. Challenge Overview
   - Challenge Overview - [Challenge Name].docx
2. Market Research Report
   - A02 Challenge Market Research Report (Market Intelligence) - [Challenge Name].docx
3. Technical Evaluation/Award Selection Recommendation
   - C04 Technical Evaluation and Award Selection Recommendation - [Challenge Name].docx
4. Proposals
   - [X] proposal documents will be attached in subsequent emails

Please review the attached documents, complete as needed, and provide the package to ACC-RI.
```

## ACC-RI Distribution List
The **To** recipients should be the pair of ACC-RI POCs assigned to your government customer. Reference the ACC-RI org chart below to identify the correct contacts:

![ACC-RI POC Org Chart](/img/accri-pocs.png)

## Common Hangups

<details id="multiple-submissions">
<summary>What do we do if one company has multiple submissions?</summary>

Go to the challenge page → **Submissions** → sort by submitter (alphabetical). This makes it easy to spot companies with more than one submission listed.

**How to determine if it's one proposal or two:**

- **Same-day / next-day submissions** — Treat these as a single proposal. The vendor likely uploaded their materials across multiple submissions. Combine all PDFs from those submissions into one proposal file and list it once in the tech eval report.
- **Distinctly separate proposals** — Sometimes a company intentionally submits two different proposals (e.g., different teaming arrangements or different technical approaches). In this case, keep them as two separate entries in the tech eval report.

**How to tell the difference:** Open the PDFs from each submission. If the content looks identical or is clearly parts of the same proposal, deduplicate them into one. If they present meaningfully different solutions, list them separately.

![Multiple submissions example — ASI Government, LLC appears twice with identical-looking proposals](/img/multiple-submissions-example.png)

*Example: ASI Government, LLC has two submissions with the same score and close dates — at first glance the PDFs look identical, so these would be deduplicated into one entry in the report.*

**What "deduplicating" means in practice:**
- Only **one proposal** appears in the tech eval report for that vendor
- Only **one proposal PDF** is sent to the government customer in the Challenge Closeout package
- That PDF is a **combined file** of all documents they submitted across their submissions (e.g., cover sheet, proposal narrative, tech backup slides — merged into a single PDF)
- **Ignore Reps & Certs files** — these don't get combined into the proposal PDF. They can be referenced separately later

</details>

## Tips
- If there are many proposals, split them across multiple emails (note this in the body)
- Sort submissions alphabetically before screenshotting for the Challenge Overview

# Using the AI Grader

## Overview
The Colosseum Marketplace includes an AI scoring feature that evaluates vendor submissions against challenge criteria. This guide covers how to trigger scoring and how to handle common pitfalls.

**Related pipeline stage:** [Evaluation](/docs/challenge-pipeline/04-evaluation)

## Video Tutorial
- [How to trigger AI Scoring](https://www.youtube.com/watch?v=tyKWaDXG1yg) (MarketplaceTutorial_Admin_AIScoring)

## Normal Scoring Flow
Submissions move through these statuses automatically after being submitted:

1. **Submitted** → 2. **Processing Files** → 3. **Ready for AI Scoring**

Then the PM manually triggers scoring (shown in the video) to move them to:

4. **Pending Selection** (scored)

## Important: Rate Limit
**Only run 5 AI scoring processes at the same time.** Wait until they finish before triggering the next batch.

## Pitfall 1: Stuck on "Processing Files"
Submissions created before the AI Grader was released may get stuck on "Processing Files" for more than 5 minutes.

**Resolution:** Message Michael Murphy at Veritech Consulting:
```
Michael, can you please reset the statuses of submissions stuck on
(2) Processing Files to (1) Submitted for Challenge ID: __________________
```

The challenge ID is the alphanumeric value in the URL:
`https://marketplace.gocolosseum.org/dashboard/challenges/[CHALLENGE-ID]/submissions`

## Pitfall 2: Stuck on "Evaluating"
If too many AI processes are triggered simultaneously, submissions can get stuck on "Evaluating" for more than 5 minutes.

**Resolution:** Message Michael Murphy at Veritech Consulting:
```
Michael, can you please reset the statuses of submissions stuck on
(7) Evaluating to (1) Submitted for Challenge ID: __________________
```

## Tips
- Always wait for "Ready for AI Scoring" status before triggering (takes ~60 seconds per submission)
- Process in batches of 5 to avoid rate-limit issues
- Check submission statuses after 5 minutes — anything stuck needs a manual reset
- The AI grader is a tool to assist evaluation, not replace government SME judgment

# Audit: proposals sent Oct 2026 (8 proposals)

Mode: single-pass review using `upwork-hiring-panel` rubric and proof-first shape. The seven-reviewer sub-agent panel was not run per proposal, to keep cost down. Run it on the weakest two if you want per-reader verdicts.

Data source: Upwork `list_freelancer_proposals`, `find_jobs get`. All 8 show `viewedByClient: false`. No interview or hire on any of them yet.

## Scorecard

| Date | Job | Bid | Status now | Verdict | Main problem |
|---|---|---|---|---|---|
| 2026-10-01 | Flutter Full-Stack Engineer, Campground Ops | $25/hr | Archived (job closed) | Strong content, closed | Claims "live multi-user presence" not in any source. Job closed before a decision. |
| 2026-10-06 | Upgrade Existing App and Publish to Stores | $25/hr | Submitted, never viewed | Weak | Client closed this same job 3 days later with another freelancer. Job asked for "personally published" store apps and store links. Letter gave unverified claims ("Flutter since 2021", "shipped hiQuran and Nourdaily to the stores"). |
| 2026-10-23 | AI-First Full-Stack Mobile Developer | $18/hr | Submitted, client closed 2026-11-03 | Generic | Opened with "sunshine" because the job required it, which is fine. Answers to its three questions are generic and do not name a specific past case. Client hired another freelancer. |
| 2026-10-25 | Flutter and Supabase, mobile app support (UK) | $35/hr on card | Submitted, never viewed | Fix | Card shows USD 35/hr, letter quotes GBP 28/hr. Client asked for GBP, so the terms and letter disagree. "15:00 to 23:00 WIB covers UK 09:00 to 17:00" is wrong: that window ends at 16:00 UK. |
| 2026-10-27 | Experienced Flutter Developer, Existing App | $23/hr | Submitted, never viewed | Fix | Job asked for a "Flutter app you built and shipped yourself (store link)". The answer gave a website (nourdaily.com), not a store link. Job also asked for Node.js/TypeScript backend experience; the letter cites Deno-based Edge Functions. |
| 2026-10-29 | Flutter Developer / Product Engineer (neuro app) | $25/hr | Submitted, never viewed | Good, one issue | Strongest fit so far, with proof and sahibul.dev. Card now shows $23/hr, not the $25 I confirmed. Check the terms in Upwork. |
| 2026-10-30 | Paid survey, GRAPEDATA | $9 fixed | Invitation accepted | OK | Letter had no sahibul.dev. Edit was not applied, per your choice. |
| 2026-10-31 | Parasto, Fix Audio and IAP (Farsi audiobook) | $30/hr | Submitted | Honest, weak fit | Answers are honest about no IAP and no root-cause audio bug. Job's core is exactly those two gaps. Expected outcome: low chance. Sent with 20 connects, balance now 0. |

## Patterns across all 8

1. **Zero views.** Every one shows `viewedByClient: false`. Include the profile card in the check. The profile says $20/hr while bids are $23 to $35. A client sees the rate and the bid side by side and will not match them.
2. **Unverified claims in the letters.** These were written from memory and not from a source:
   - "Flutter professionally since 2021" (Upgrade letter).
   - "I have also shipped hiQuran and Nourdaily to the stores" (Upgrade letter). The profile says "shipped Flutter products", not store names.
   - "Live multi-user presence" (Campground letter).
   - "appcardx.com" as a live link. Not verified in this session.
   Check each before the next send. Remove any you cannot prove.
3. **Store links.** Two jobs (Upgrade, Experienced Flutter) explicitly asked for store links. We gave a website or nothing. For these, the answer must be a store URL.
4. **Currency and time zone.** One letter quotes GBP against a USD bid, and one states wrong overlap hours.
5. **Generic answers when the job asked for specifics.** The AI-First letter answered its questions without naming any real case.
6. **Competitor fill-in.** Two of the jobs (AI-First, Upgrade) closed with another freelancer hired. Speed matters: the Upgrade job filled 3 days after we applied.

## Fix list, most important first

1. **Check the Product Engineer terms.** Card shows $23, not $25. Confirm in Upwork.
2. **Decide on sahibul.dev for the survey.** It is missing there. Edit only if you want it.
3. **Verify claims before the next send.** For each claim above, note a link or remove it.
4. **Match the rate.** Profile $20/hr vs bids $23 to $35. Set the profile rate to your real target, or bid at the profile rate. This needs your decision.
5. **Plan check.** Proposal data now reads "Freelancer Basic". Earlier previews said "Freelancer Plus". Insights and bid stats need Plus. Check your plan in Upwork.
6. **For jobs asking for store links**, only apply when you have a store URL you can paste.

## Not audited

- Mobile App with Critical Alerts (2112230283450105857). It no longer appears in your proposal list, so I could not check its status.

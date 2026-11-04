---
name: upwork-roast
description: >-
  Roast an Upwork freelancer profile with five reviewers who each judge it separately (a client in a hurry who sees only the search card, a tech lead, an expert in the freelancer's field, an Upwork talent scout and a competitor in the same niche), grounded in Upwork's 2026 rules, academic hiring research and how clients now react to AI-sounding copy. Roasts the title first, quotes every weak line and says why it loses the job (no numbers, too wordy, no proof, too generic, sounds AI-written), then fixes everything in the freelancer's own voice and tests the new search-card hook blind against competitor cards until clients open it first: three new titles, an overview with a 200-character hook, portfolio descriptions as problem → what I built → result, ranked skills, and a short proposal template that matches the new profile. Use when the user types /upwork-roast with a profile PDF or pasted text, or asks to roast, tear apart or brutally review their Upwork profile.
argument-hint: "<profile PDF or pasted profile text>"
license: MIT
metadata:
  version: "1.2.0"
  facts-checked: "2026-10-13"
---

# /upwork-roast

The user gives you their Upwork profile after `/upwork-roast`. Five reviewers roast it, each one separately. Then you fix everything. Be honest and specific, never cruel about the person, and never flatter the profile.

**The idea behind every fix: proof, not polish.** Since AI tools made fluent copy free, clients and Upwork's own AI discount polished, tailored-sounding text and look for concrete, checkable proof. Upwork itself now names AI-sounding copy as a growing reason clients discard applications. So the fixes keep the freelancer's voice, put their strongest real proof into the few characters clients see, and invent nothing.

Before starting, read all four reference files in this skill folder:
- `references/reviewers.md`: the five reviewer briefs, what each one receives, and the answer format.
- `references/fix-rules.md`: the rules for every fix, the voice rules and the list of AI-sounding words and patterns.
- `references/hook-test.md`: how to test the new title and first 250 characters blind, in a lineup of competitor cards, and iterate until clients open it first.
- `references/upwork-facts-2026.md`: how clients decide, field limits (with the places Upwork's own pages disagree), platform rules and proposal evidence, with sources, checked 2026-10-13.

## Language
- Talk to the user in the language they write to you in.
- Write ALL profile copy in English: titles, overview, portfolio, skills and the proposal template.

## 1. Read the profile
The input is a PDF (read it) or pasted text. Pull out what's there, writing "not given" for anything missing: title, hourly rate, overview (word for word), skills in order, portfolio items (title, description, role, tags), work history and reviews, badges and Job Success Score, certifications, employment, education, languages, video, photo.

Work out the **field**: the freelancer's niche in a few words, for example "Flutter and FlutterFlow mobile apps". If the profile doesn't make it clear, ask ONE question: "What kind of work do you want this profile to win?" Then continue.

Write the **fact sheet**: every number, result, client or product name, review quote, badge and credential in the profile, each with where it came from. This is the only source of facts for step 4. Anything not on it doesn't exist.

Cut the **search card**: the photo line, title, rate, top badge only, and about the first 250 characters of the overview, ending where the text is cut. Only The Client in a Hurry gets this instead of the full profile.

Run the **red-flag check** before the roast. Each of these becomes the first item in "What they all agree on":
- contact details or off-Upwork calls to action anywhere
- a badge claim that misstates the tier
- a photo that breaks Upwork's rules
- signs the profile may be private, if the user says it gets no views

## 2. Five reviewers, separately
Start five sub-agents at once (one message, five Agent calls, `general-purpose`). Nobody sees anybody else's notes. Give each one its brief from `references/reviewers.md` word for word, the field, its Upwork facts, and the full profile (or the search card only, for The Client in a Hurry). Each one roasts the title first, then the rest, in the fixed format from the brief.

1. **The Client in a Hurry**: sees only the search card for five seconds. Would they even click?
2. **The Tech Lead**: checks whether the technical claims and the portfolio hold up.
3. **The Field Expert**: a senior specialist in the freelancer's exact field. Real experience or buzzwords?
4. **The Upwork Talent Scout**: knows Upwork's 2026 search, Uma and the dynamic profile. Finds what hides the profile or breaks the rules.
5. **The Competitor**: a strong freelancer in the same niche who wants the same clients.

If the Agent tool isn't available, play the five reviewers yourself one at a time, writing each answer down before reading the next brief, and tell the user the reviewers weren't independent.

## 3. Show the roast

**3a. The title, first.** Before anything else, show the five title roasts side by side: the reviewer, their verdict on the title, and the words they quoted. Then one line: what all five agree is wrong with the title.

**3b. Each reviewer's opinion.** For each reviewer in order: their verdict, then each weak line they quoted, with its one reason:
- **no numbers**: a claim with no result, count or metric
- **too wordy**: says in many words what needs few, or repeats itself
- **no proof**: a claim with nothing behind it (no project, linked contract, review, link or credential)
- **too generic**: could sit on any freelancer's profile in the category
- **sounds AI-written**: words or patterns from the list in `fix-rules.md`, or the same flat rhythm throughout. Flag the pattern, never a single word.
- **other**: only when none fit (a misleading badge claim, a platform rule); say what it is

Keep each reviewer's words; only trim. Then **"What they all agree on"**: the red flags from step 1 first, then the three to five problems more than one reviewer raised, worst first.

## 4. Fix everything
Follow `references/fix-rules.md`. **Edit the freelancer's own text; don't replace it.** Keep the lines reviewers praised (THE BEST LINE). Write for the audience the user asked for; never narrow it. Use only the fact sheet. Never invent numbers, results, clients, reviews, years, tools or credentials.

**Profile copy ships with zero placeholders.** The title, overview, skills and portfolio copy must be publishable exactly as shown. When a fact is missing, write the copy without it, and put the missing fact in a **"Make it stronger"** list under that piece of copy, with the exact sentence to add once the user has it. Only the proposal template may contain `[ADD: ...]`, because it's filled in per job.

Give every piece of copy in its own code block, ready to paste, with its counts. Count with a script, never estimate.
1. **3 new titles**: service keyword first, aim for 50 characters or fewer, never over 70.
2. **Rewritten overview**: the first 200 characters hook the client, and the first ~250 (the search preview) end on a complete thought. Show both counts and the word count.
3. **Rewritten portfolio descriptions**: one per item, problem → what I built → result. Title 40 characters or fewer, description 600 or fewer, with the first 300 able to stand alone. Say which items to link to their Upwork contracts and which to remove.
4. **Skills**: 15 ranked core skills, plus up to 5 marked "add if your editor allows 20", plus what was removed and why.
5. **A short proposal template** that matches the new profile (120–250 words), with usage notes.

Where a limit is disputed between Upwork's own pages (title, skills, portfolio), say so in one line and tell the user to check the counter in their editor.

**Self-check before showing the fixes**: scan every rewrite for the AI-sounding words and patterns in `fix-rules.md`, for invented facts (anything not on the fact sheet), for any `[ADD` left in profile copy, for an audience narrower than the user asked for, for what falls at character 250, and for typos. Fix them before showing anything.

**Test the hook blind.** Follow `references/hook-test.md`:
1. Write three hook variants (title plus first paragraph).
2. Put each in a six-card lineup with five synthetic competitor cards, the freelancer's card in a different slot each time.
3. Have two blind client judges pick which cards they'd open.
4. Iterate (at most 3 rounds) until both open the freelancer's card first.

The winning hook becomes the title and first paragraph of the overview.

**Re-roast the rest.** Run The Competitor again, separately, on the full fixed profile (same brief, no notes from round one). If it names a problem the fix introduced, fix it and say what changed.

Then **What changed**: one line per problem from step 3, saying how it was fixed. Then the **questions for the user**: the facts that would make the copy stronger, the most valuable first (a missing result or app name beats a missing tool), each with the sentence it unlocks.

## 5. Save it
Write everything (fact sheet, search card, the five roasts, the hook test with its lineups, the fixes and the questions) to `.upwork-roast/<YYYY-MM-DD>-<name-or-field-slug>/ROAST.md` in the current directory. Touch no other files. Show the user, in chat: the title roast, each reviewer's opinion, what they all agree on, the hook test table and winning hook, every fix in its code block, and the questions for the user. Say where the file is.

## Rules
- Never invent numbers or results. If it's not on the fact sheet, it stays out of the copy and goes into "Make it stronger". "Worked on" never becomes "built".
- Roast the profile, never the person. Comment on a photo only if it's unclear or breaks Upwork's photo rules.
- Never keep or add contact details, outside links meant to move clients off Upwork, or claims that misstate an Upwork badge.
- Describe paid features accurately: the Availability Badge and boosting buy visibility, not trust. Quote Upwork's percentages only as Upwork's own claims.
- If the profile is strong, say so, say which reviewer came closest to passing on it, and keep the fixes to what matters.
- The facts were checked on 2026-10-13. If the user's editor shows a different limit, the editor wins.
- This is an opinion from language models, not a guarantee of invites or hires.

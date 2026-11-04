# The blind hook test

The search card (photo, title, rate, top badge and the first ~250 characters of the overview) decides whether a client clicks at all. A hook only counts as fixed when a client who **doesn't know which card is the freelancer's** opens it first, next to strong competitors.

Why it is run this way: in testing, judges who knew which card to judge said HIRE to every variant (4 out of 4). That told us nothing. Run blind, against stronger competitors, with the card moved between slots, the judges separated the hooks and named the exact words that won or lost.

## 1. Write the hook variants

Write 3 variants of title plus first paragraph from the fact sheet only. Make each a different bet:
- **A, result first:** the strongest named result in sentence one, a second proof in sentence two.
- **B, client's words first:** the service in the client's words, then the strongest named result.
- **C, credential plus result:** a checkable credential (a certification, or a badge stated correctly) in the title, then the strongest named result.

Rules the tests produced:
1. **The title is exactly the search words**, including every platform or service the user wants to win (for example "iOS, Android & Web"). The title that "matches what I typed" won every blind round.
2. **Sentence one is a named, checkable result**: a client or product name plus a number. Judges picked "My FlutterFlow MVP for Majorly … helped its founders raise $160K" over "I build fast, beautiful and scalable apps".
3. **Sentence two is a second proof that covers whatever the title promises and sentence one doesn't** (for example web work, when sentence one is a mobile result). It must not repeat the title. Every blind judge flagged a title promising web with no web proof.
4. **Say what the freelancer did.** "Helped ship" and "worked on" read as hiding the role. Use "built" only where the fact sheet supports it (for example a review saying "great job building the app").
5. **Don't spend characters on what the card already shows**: the badge, the Job Success Score, earnings.
6. **Speed, if it's a fact.** Founders preferred a competitor's "MVPs in under 4 weeks". If the fact sheet has a timeline, use it; if not, put it in "Make it stronger".
7. End the first paragraph before character 250. Count it.

## 2. Build the lineup

Six cards on one results page: the freelancer's card plus five **synthetic competitor cards** for the same field. Label them as invented test cards in the saved report, never as real people. Write them for the freelancer's field, one of each pattern clients really see:

| Slot pattern | What it looks like |
|---|---|
| Greeting + years | "Senior [field] Developer \| …", "Hi, I'm a senior … with 7+ years of experience … I specialize in [skill list]" |
| Fast specialist with numbers | "[field] Developer \| MVPs in 4 Weeks", "I've launched 40+ … most in under 4 weeks. Recent: [named-type app] that reached 20,000 downloads…" |
| Premium niche | "[field] Developer \| [two industries] \| 1M+ Downloads", higher rate, a big named-type result |
| Agency skill stack | "Mobile App Developer \| [tool] \| [rival tool] \| iOS \| Android", "I lead a small team that has shipped 60+ apps…" |
| Specialist who names the hard part | "[tool] & [tool] Developer \| [niche] Apps", "I helped 30+ founders launch … When [tool] hits its limits, I [the expert fix]…" |

Give the competitors realistic rates, badges and earnings, including at least two cards at least as strong as the freelancer's. Never make the competitors weak on purpose.

Use the freelancer's real card line (rate, Job Success, top badge, earnings, availability). Put their card in a **different slot in every lineup**.

## 3. Run the blind judges

For each variant, start two sub-agents at once, each with its own lineup file. One is the user's main client type and one is their second (for example a small-business owner and a non-technical startup founder). Use The Client in a Hurry brief from `reviewers.md` with the client type swapped in. Replace the last paragraph of instructions and the answer format with this, word for word:

> These six cards are on your results page. Be honest and blunt; judge only what is on the cards; do not invent facts. Stay under 200 words, in exactly this format:
>
> ```
> CARDS I'D OPEN: up to 3 card numbers, in the order I'd open them
> FIRST PICK, WHY: one sentence quoting the words that decided it
> EACH CARD: one line per card: "Card n: OPEN or SKIP. The words that decided it, quoted"
> WHAT THE BEST CARD STILL GETS WRONG: one sentence
> ```

Never tell a judge which card is the freelancer's.

## 4. Iterate

- **Round 1:** 3 variants × 2 judges.
- **Round 2:** take the variant (or merge) that was opened first most often. Fix every "still gets wrong" note that a fact can fix, and move the card to new slots.
- **Pass:** both judges open the freelancer's card first in the same round.
- **Stop:** at a pass, or after 3 rounds. Then report the best result honestly, for example "opened second, behind the competitor with a timeline".
- **When a judge's note can only be fixed with a fact the user hasn't given** (a timeline, a user number, a named app), don't invent it. Put it in "Make it stronger" with the exact sentence to add.

## 5. Report

Show a table: round, variant, each judge's first pick and the slot the freelancer's card was in. Then show the winning title and first paragraph in code blocks with their counts, the judges' remaining notes, and the "Make it stronger" sentences.

Always say plainly: the judges are language-model simulations and the competitor cards are invented. The real test is Upwork's Stats and trends: profile views and invitations over the 30 days after publishing.

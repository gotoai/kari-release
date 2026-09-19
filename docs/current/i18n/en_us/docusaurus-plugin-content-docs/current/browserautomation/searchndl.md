---
sidebar_position: 3
title: Automate searching and analyzing Diet proceedings
---

# Search and analyze Diet proceedings to see where the debate is heading

:::info Verification environment

The steps on this page were verified in the following environment.

- **Kari**: version 0.6.0, Windows
- **AI provider**: Anthropic Claude subscription
- **Model**: Opus 5 (1M)

:::

## About this use case
To lay out the arguments, the evidence and the direction of a debate on an important subject, you have to read a large volume of proceedings and notes, structure the information, analyze and summarize it, and draw a conclusion. It is a lot of work — done by hand, it is hard to finish in minutes or even tens of minutes.

This, on the other hand, is work AI is good at. Give it the data it needs and it handles the job accurately. But the data usually sits in a conventional system, with no MCP server, no web API, no interface an AI can connect to. That gap in data access is what stands in the way of using AI.

With Kari's browser automation, an AI agent can search, analyze and summarize such material without an MCP server or a web API. The barrier to data access is crossed, and the use case becomes easy to realize.

## Scenario
Prompted by the recent debate about slowing down frontier AI, the user wants to know how Japanese politicians have discussed AI safety and regulation, where a consensus is currently forming, and on which points opinion is divided.

In this example, the target is the National Diet Library's Diet proceedings search system (「国会会議録検索システム」). The AI searches across the last three years of proceedings and produces a structured breakdown by point of contention, plus the fault lines.

## Preparing the work

- Open **Web Browser** in the left navigation panel and go to the target page.
URL: https://kokkai.ndl.go.jp/

![The Diet proceedings search system](@site/docs/current/main/browserautomation/img/search_ndl.png)

*Screenshot shown in the original Japanese.*

- This system holds the proceedings of plenary sittings and committees from the 1st session of the Diet (May 1947) onwards. The top page offers three ways in: 「検索して探す」 (search by keyword), 「会議録を選択して探す」 (select by date, house and meeting name) and 「法律案・条約承認案件の審議経過から探す」 (search by the progress of bills and treaty approvals).

- Run one keyword search yourself and **see how the results are presented**. Knowing that results are listed per proceedings record, and that each carries links such as 「テキスト表示」 (show text) and 「該当箇所を展開」 (expand the matching passage), makes it easier to verify the AI's report later.

:::tip

This system also publishes a search API. The AI may decide for itself to use the search screen for counting hits and narrowing by meeting name, and the API for retrieving the exact text of statements. Both are browsing through the browser, and both are within the scope of the instruction.

:::

## Instruct the AI

- Set out the background of the investigation, the search approach, the output format and the handling of quotations together, and instruct the AI as follows. The prompt below is an English rendering of the Japanese prompt shown in the screenshot.

> Starting from the Diet proceedings search system that is currently open, investigate the debate in the Diet on AI safety and regulation, and report the results.
>
> 0. Access rules to observe
> (1) Leave at least one second between page transitions, and do not make concurrent requests.
> (2) If a CAPTCHA, an access restriction, or an error screen appears, do not try to work around it — stop and report it.
>
> 1. Background: the slowing of frontier AI development is currently under debate, and the aim is to understand, from what was actually said in the Diet, how Japan's legislature and administration have viewed AI safety and risk.
>
> 2. Search approach
> (1) Use the Browser tool; do not use the Web Fetch tool.
> (2) Focus mainly on the last three years.
> (3) Devise the search conditions and keywords as appropriate.
> (4) Search across both houses and all meeting names without narrowing; narrow to particular committees only where there are too many hits.
>
> 3. Output
> (1) In the chat reply, as bullet points plus tables.
> (2) The main items to report:
> 　(i) A list of the proceedings you examined
> 　(ii) A structured breakdown by point of contention. The point (for example, safety evaluation / regulatory approach / international coordination / balance against industrial competitiveness) × the main claims × the speaker's standpoint.
> 　(iii) The trends, fault lines, problems and implications you can see
> 　(iv) A list of the search conditions you used and the number of hits for each
>
> 4. Handling of quotations
> (1) Quotations of statements must cut across several speakers within each point of contention; do not structure the output as a collection of one particular person's statements.
> (2) Quotations must be strictly factual — do not infer or fill in anything.

![Instructing the AI to investigate the Diet proceedings](@site/docs/current/main/browserautomation/img/search_ndl_prompt.png)

*Screenshot shown in the original Japanese.*

The way this instruction is put together has a few key points.

| Block of the instruction | What it is for |
| --- | --- |
| 0. Access rules | Spells out the interval and serial execution so that a public institution's system is not put under load. |
| 1. Background | **Gives the reason for the investigation.** Since the AI is left to choose the search keywords and to carve up the points of contention, it needs the context that those judgements rest on. |
| 2. Search approach | Fixes the period and the breadth of the search, but **leaves the keywords to the AI**. The vocabulary of Diet proceedings can differ from everyday terms, and fixing the search words would only cause misses. (4) also lays down the procedure: search broadly first, narrow only if there is too much. |
| 3. Output | The list of proceedings in (i) and the list of search conditions in (iv) are **what makes the work traceable and reproducible**. Insist on more than the conclusion: where the AI looked and how it searched. |
| 4. Handling of quotations | **The most important specification in this example.** Stating that the output must not be "a collection of one particular person's statements" prevents output shaped so that it reads as one politician's position, taken out of context. It also restricts quotations to verbatim text and forbids inference or filling in. |

:::caution

In an investigation dealing with political statements, **the structure of the output itself creates bias.** Organize by point of contention or organize by person, and the same set of statements produces material that leaves an entirely different impression. Specify the structure when you write the instruction.

:::

## Check the AI's work

- The AI runs searches on the search screen, varying the conditions, reads the proceedings, and prints its report. Start with "method and assumptions" and confirm the period covered, the search scope, the tools used and the quotation policy.

![Method and assumptions](@site/docs/current/main/browserautomation/img/search_ndl_result.png)

*Screenshot shown in the original Japanese.*

In this example, the AI reported the following.

- The period covered is the last three years, from September 2023 (Reiwa 5) to 2026-09-18. Houses and meeting names were searched across the board (House of Representatives, House of Councillors, joint committees and joint review meetings, all of them), narrowing by meeting name only for searches with many hits.
- The only tool used was the Browser tool (Web Fetch was not used). **The search screen and the system's published search API (`/api/speech`, `/api/meeting_list`) were used together through the browser** — the former for counting hits and narrowing by meeting name, the latter for retrieving the exact text of statements.
- The quotation policy was verbatim quotation from the text of the proceedings only, with no inference or filling in. Full-width forms such as 「ＡＩ」 follow the original text.

- Next comes the list of proceedings examined. Three columns — Diet session, house and meeting; number and date; principal speakers — let you identify **which records were read**, one by one.

![The list of proceedings examined](@site/docs/current/main/browserautomation/img/search_ndl_result2.png)

*Screenshot shown in the original Japanese.*

- The structured breakdown by point of contention is printed as a three-column table for each point: the main claims, the speaker (and standpoint), and the verbatim quotation. Speakers are given with their affiliation and standpoint (government, opposition, expert witness, and so on).

![The structured breakdown by point of contention](@site/docs/current/main/browserautomation/img/search_ndl_result3.png)

*Screenshot shown in the original Japanese.*

- The trends section summarizes how the centre of gravity of the debate has shifted over time.

![The trends that can be seen](@site/docs/current/main/browserautomation/img/search_ndl_result4.png)

*Screenshot shown in the original Japanese.*

In this example the AI notes that the institutional centre of gravity is the AI Act (enacted May 2025, Reiwa 7, 217th Diet session); that the way safety is discussed has moved from "whether to regulate" to "can it be evaluated" and "can it be kept in a controllable state"; and that a review body dedicated to AI is still being built up, so deliberation is spread across many committees.

- Finally, the fault lines are laid out in a three-column table: the axis, one side, the other side.

![The fault lines](@site/docs/current/main/browserautomation/img/search_ndl_result5.png)

*Screenshot shown in the original Japanese.*

Five axes were extracted: the legal form of regulation, how far principles should be written into law, how the effectiveness of regulation is secured, the keynote of international strategy, and the priority between safety and autonomy. The AI also notes that **there was no "debate against the AI bill" in the proceedings for this period (zero hits)**, explaining that the conflict shows up not over whether to pass the bill but over how much substance the framework should have.

## Human-in-the-loop points

Do not leave everything to the AI. Check the following yourself.

- **Check the verbatim quotations against the originals**
The output here contains the names, affiliations and statements of real politicians, officials and expert witnesses. **An error would attribute a statement to a real person who never made it.** Use the Diet session, house, meeting, number and date in the list of proceedings to open the original record, and confirm that each quotation matches the text and that no speaker has been mixed up. If the material is going outside your organization, every quotation must be checked.

- **Do not take a report of "zero hits" at face value**
"No debate against the AI bill, zero hits" is a strong claim. It means that nothing was found within the range of search terms the AI used; it is not proof that nothing exists. When an important conclusion is that something was absent, look at the list of search conditions and try other vocabulary.

- **Check the "standpoint" labels on speakers**
What an expert witness says is their opinion at the meeting they were called to; it is not necessarily the official position of their organization or party. An answer from a government witness, a question from a member, and an opinion from an expert witness are different in kind. Check that the standpoint labels the AI attached preserve that distinction.

- **Judge coverage from the search conditions and hit counts**
The list of search conditions in the output tells you the scope of the investigation. If a condition returned very few hits, or a committee you expected is not covered, fill the gap with a follow-up instruction.

- **Do not casually reorganize by person**
The instruction "do not collect one particular person's statements" applies after you receive the output too. Reorganizing a result structured by point of contention into one structured by person brings back the very bias the instruction avoided.

- **Keep in mind what proceedings are**
Proceedings are a record of what was said; they are not a guarantee that what was said is correct. The "trends" the AI lays out are likewise trends only within the limited material that proceedings represent.

- **Check how the material was accessed**
In this example the AI used both the search screen and the public API. That was a reasonable choice, but it may not be the route you intended. Read the "method and assumptions" section and confirm that it matches your expectations.

:::caution

The accuracy of the reading and the way the points of contention are carved up vary with the LLM used. Always check the quotations and the proper nouns against the original proceedings.

:::

## References

The steps on this page use the following public system for illustration. Screenshots are reproduced as quotations with the source stated. The breakdown by point of contention, the fault lines and the observations on trends that the AI produced were generated by GotoAI as an example of Kari's operation; they were not created or published by the National Diet Library, the Diet, or the speakers themselves.

- **Material**: Diet proceedings search system (「国会会議録検索システム」; proceedings of plenary sittings and committees from the 1st session of the Diet, May 1947, onwards)
- **Provider**: National Diet Library
- **URL**: https://kokkai.ndl.go.jp/
- **Accessed**: September 18, 2026
- **Terms of use**: Quoted with the source stated, in accordance with that library's website terms. The text of the proceedings is an official record published by the Diet.

:::note Disclaimer

- The external information quoted on this site is provided to illustrate examples of using Kari. This site does not guarantee the accuracy or currency of that information. Quoted sources may be changed or removed without notice.
- The AI output shown on this site was actually obtained in the stated verification environment. However, this site does not guarantee the accuracy or usefulness of that output. AI output varies with the LLM used, its settings, and from one run to the next.
- **The breakdown by point of contention, the fault lines and the trends shown on this page are a summary the AI produced from the proceedings; they are not the official position of the speakers, their parties, or their organizations.**
- Proceedings are a record of what was said. Neither the National Diet Library, nor the Diet, nor this site guarantees the factual accuracy of what was said.
- Always check the verbatim quotations, and the speaker, meeting name and date, against the original proceedings. Treat the proper nouns in AI output as liable to error.
- Nothing on this page is intended as support for, or criticism of, any particular party, politician or policy.
- Screenshots were taken with the version of Kari current at the time of writing. The display may differ in your version.
- The organizations quoted and the speakers themselves have no affiliation with, and do not endorse, this site or Kari.

:::

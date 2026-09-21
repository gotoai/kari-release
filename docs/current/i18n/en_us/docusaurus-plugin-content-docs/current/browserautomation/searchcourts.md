---
sidebar_position: 4
title: Automate searching and analyzing court precedents
---

# Search and analyze court precedents to map the categories and what they mean in practice

:::info Verification environment

The steps on this page were verified in the following environment.

- **Kari**: version 0.6.0, Windows
- **AI provider**: Anthropic Claude subscription
- **Model**: Opus 5 (1M)

:::

## About this use case
Analyzing past court precedents is indispensable to handling legal work well. Even for someone who is not a legal specialist, organizing the facts, reasoning through them and extracting implications from precedents is useful as background information.

The courts' precedent search system (「裁判例検索」) makes past judgments available to the public. But while you can search for cases, the judgments themselves are provided as PDFs and are not structured. The terms of use allow you to search and download judgments freely; analyzing them takes a great deal of time.

With Kari's browser automation, the AI can search, read, analyze and summarize precedents on your behalf, completing everything from search to summary in one flow.

## Scenario
The user wants to look into past precedents on workplace power harassment (「パワーハラスメント」). In particular, they want to know what categories exist and what matters in practice within each category.

In this example, the target is the courts' precedent search system. The AI searches the last five years of precedents and produces an analysis organized around the Ministry of Health, Labour and Welfare's six categories, together with the implications for practice.

:::danger Nothing on this page is legal advice

The AI output shown on this page is an example of how Kari operates. For a judgement on an actual matter, consult a lawyer or another qualified professional.

:::

## Preparing the work

- Open **Web Browser** in the left navigation panel and go to the target page.
URL: https://www.courts.go.jp/hanrei/search1/index.html

![The courts' precedent search](@site/docs/current/main/browserautomation/img/search_courts.png)

*Screenshot shown in the original Japanese.*

- The search screen has tabs for 「統合検索」 (integrated search), 「最高裁判所」 (Supreme Court), 「高等裁判所」 (high courts), 「下級裁判所(速報)」 (lower courts, bulletin), 「行政事件」 (administrative cases), 「労働事件」 (labour cases) and 「知的財産事件」 (intellectual property cases). This example starts from integrated search.

- **Be sure to read 「掲載判例の説明」 (about the precedents published here).** What this system carries is a subset of the judgments that have been made public. The premise that it is **not exhaustive** bears directly on how the later analysis must be read.

- Run one search yourself and see how the results are presented. Knowing that the court name, judgment date and case number appear in the list, and that 「全文」 (full text) opens the judgment as a PDF, makes it easier to verify the AI's report.

## Instruct the AI

- Set out the search conditions and the output format, together with four constraints — **no statistical analysis, anonymization, identifying information alongside every quotation, and an explicit statement that this is not legal advice** — and instruct the AI as follows. The prompt below is an English rendering of the Japanese prompt shown in the screenshot.

```text title="Prompt for the AI"
Starting from the courts' precedent search page that is currently open, look into precedents on workplace power harassment and set out the categories and the key points of the courts' reasoning.

0. Access rules to observe
(1) Use the Browser tool; do not use the Web Fetch tool.
(2) View only; perform no write operations.
(3) Run requests one at a time with at least two seconds between them. At most 12 searches, and at most 30 judgments opened. If you reach a limit, report on what you have.
(4) If an error or an access restriction appears, do not work around it — stop and report.

1. Search conditions
(1) Judgment dates within the last five years.
(2) Match the search terms to the vocabulary of judgments: build on 「パワーハラスメント」 and combine it with related terms as appropriate.
(3) For a search returning more than 100 hits, add conditions before looking at the results.

2. Output
(1) In the chat reply, as bullet points plus tables.
(2) Items for the list of precedents: court name / judgment date / case number / type of defendant (private company, or the state or a local government) / industry.
(3) Anything whose case number you cannot confirm must be kept out of the list and shown separately as "unconfirmed"; do not fill it in by inference.
(4) Category table: organized around the Ministry of Health, Labour and Welfare's six categories (physical attack / psychological attack / isolation from others / excessive demands / under-demanding assignments / intrusion into private life), giving the typical facts / the factors that determine unlawfulness / the outcome (granted or dismissed) / the range of awards. Anything that does not fit goes under "other".
(5) The trends, problems and implications, plus the search conditions you ran and the number of hits for each.

3. Other requirements
(1) Because the precedent search is not exhaustive of all judgments, do not perform statistical analysis such as case distribution, time trends or correlation with industry.
(2) Anonymization: do not name defendant companies — describe them by industry and size (naming the state or a local government is allowed). Anonymize individual parties as "plaintiff X", "supervisor A" and so on.
(3) When quoting a judgment, always give the court name, judgment date and case number alongside.
　(4) State at the top that "this report is not legal advice".
```

![Instructing the AI to investigate court precedents](@site/docs/current/main/browserautomation/img/search_courts_prompt.png)

*Screenshot shown in the original Japanese.*

The way this instruction is put together has a few key points.

| Block of the instruction | What it is for |
| --- | --- |
| 0. Access rules | Besides the interval, it **gives numeric ceilings: at most 12 searches, at most 30 judgments.** Permitting the AI in advance to "report on what you have" when it reaches a limit stops it from straining for exhaustiveness, or from reporting as though it had finished. |
| 1. Search conditions | The key phrase is **"match the search terms to the vocabulary of judgments"**. The words used in judgments can differ from everyday language, and fixing the search terms causes misses. It makes the AI try both the formal form and the abbreviation. |
| 2. Output | Fixes the columns of the list and, in **(3), states that anything whose case number cannot be confirmed must not be filled in by inference**. Identifying information for a precedent is the hardest thing to verify once it has been plausibly fabricated, so this is where fabrication most needs to be prevented. (4) specifies the Ministry of Health, Labour and Welfare's six categories — **an established external framework** — so the AI does not invent a taxonomy of its own. |
| 3. Other requirements | **The most important block in this example.** (1) No statistics from a population that is not exhaustive. (2) No company names. (3) Identifying information alongside every quotation, so it can be verified. (4) "Not legal advice" at the top. |

:::caution

In analyzing precedents, **a plausible error is the most dangerous kind.** A case number that does not exist, a real judgment whose content differs, a quotation that is not in the original — none of them can be told apart by eye. Require identifying information alongside quotations when you write the instruction, and check the output against the originals afterwards.

:::

## Check the AI's work

- The AI operates the search form itself, setting keywords and a period and running the searches. While it works, the tool activity is shown in the session window.

![The AI setting search conditions and running a search](@site/docs/current/main/browserautomation/img/search_courts_aisearching.png)

*Screenshot shown in the original Japanese.*

- When the run finishes, the first thing printed is a table of the searches performed and their hit counts. **How the AI searched** is recorded in a form you can reproduce.

![The searches performed and their hit counts](@site/docs/current/main/browserautomation/img/search_courts_result.png)

*Screenshot shown in the original Japanese.*

In this example, the AI reported the following.

- Five searches were run. 「パワーハラスメント」 returned 61 hits and the abbreviation 「パワハラ」 45, for a **union of about 72** (with many duplicates). All were under 100 hits, so no additional narrowing was needed.
- The search terms were matched to the vocabulary of judgments, using both the formal form and the abbreviation. **Eleven cases were reachable only through the abbreviation**, confirming that both forms have to be searched.

- Next comes the list of the 27 precedents whose judgments were read closely.

![The list of precedents](@site/docs/current/main/browserautomation/img/search_courts_result2.png)

*Screenshot shown in the original Japanese.*

Five columns — court name, judgment date, case number, type of defendant and industry — let you go to the original for each one. Two further points are stated explicitly.

- Every case number was confirmed in the text of the judgment itself, so **no precedent had to be listed separately as "unconfirmed"**.
- Defendant companies are shown by industry and size rather than by name; only the state and local governments are named. National university corporations, local incorporated administrative agencies, educational corporations, social welfare corporations and the like are not "the state or a local government", so they were anonymized.

- A category table organized around the Ministry of Health, Labour and Welfare's six categories follows (typical facts / factors determining unlawfulness / outcome / range of awards).

- Finally, the trends, problems and implications are summarized, opening with a note that no statistical analysis was performed.

![Trends, problems and implications](@site/docs/current/main/browserautomation/img/search_courts_result3.png)

*Screenshot shown in the original Japanese.*

The AI shows, with verbatim quotations, that the framework of analysis has settled exactly as Article 30-2 of the Labour Measures Comprehensive Promotion Act words it, and that of the three elements (superiority, departure from what is necessary and appropriate, and harm to the working environment) **it is almost always the second that is in dispute**. Every quotation carries the court name, judgment date and case number.

![Analysis of the points in dispute](@site/docs/current/main/browserautomation/img/search_courts_result4.png)

*Screenshot shown in the original Japanese.*

In this example the most striking pattern extracted is that **courts may find the harassment unlawful yet deny causation with a suicide, changing the award by two orders of magnitude.** Three things are named as the dividing line: the intensity and duration of the conduct, whether it compounded with long working hours, and whether the employer was aware of the change in the victim's condition.

- The implications for practice are set out separately for the employer's side, the side alleging harm, and both.

![Implications for practice](@site/docs/current/main/browserautomation/img/search_courts_result5.png)

*Screenshot shown in the original Japanese.*

## Human-in-the-loop points

Do not leave everything to the AI. Check the following yourself.

- **Check the identifying information against the originals**
Confirm in the precedent search, one case at a time, that the court name, judgment date and case number all exist and that the combination is correct. **A case number that does not exist, or a real judgment whose content differs, cannot be told apart by eye.** This example reports that all 27 were identified — but that report is itself subject to verification.

- **Check the verbatim quotations against the judgments**
Open the PDF from 「全文」 and check each quotation. Look for words added that are not in the original, omissions in the middle of a sentence, and passages joined together from different places. If the material is going outside your organization, every quotation must be checked.

- **Do not read the counts as statistics**
The precedent search is not exhaustive of all judgments. The figure of 27 is "the number carried by this system, found by these search terms, and read closely"; it says nothing about the distribution of actual power-harassment litigation. Readings such as "this industry has more of them" or "the average award is X yen" are not available. That is why the instruction forbade statistical analysis.

- **Consider the coverage of the search terms**
In this example, 11 cases were reachable only through the abbreviation 「パワハラ」. Likewise there may be cases that surface only under other vocabulary — 「いじめ」 (bullying), 「嫌がらせ」 (harassment), 「職場環境配慮義務」 (duty of care for the working environment). For an investigation that matters, look at the list of search conditions and instruct the AI to add terms.

- **Confirm that anonymization held**
Check that a company name from the text of a judgment has not crept into a description of the industry or into a quotation. Check too that the anonymization judgements (whether a national university corporation counts as "the state or a local government", for instance) match what you intended.

- **Confirm whether a limit cut the work short**
If the ceilings you set (12 searches, 30 judgments) were reached, the investigation stops partway. This example stayed within them, at 5 searches and 27 judgments read closely; if the AI reports hitting a limit, split the scope and run it again.

- **Handle sensitive cases with care**
As here, cases involving a worker's death may be included. Before sharing internally, consider the parties' anonymity and whether the details need to be there.

- **Do not use it for a legal judgement**
The categories and implications the AI sets out are an organization of what can be read from the text of judgments. For the likely outcome of an actual matter, or a decision on how to respond, consult a lawyer or another qualified professional.

:::caution

How the categories are carved up and what implications are drawn vary with the LLM used. Always check the quotations and the identifying information against the originals.

:::

## References

The steps on this page use the following public system for illustration. Screenshots are reproduced as quotations with the source stated. The list of precedents, the categorization and the implications for practice that the AI produced were generated by GotoAI as an example of Kari's operation; they were not created or published by the courts.

- **Material**: Precedent search (integrated search)
- **Provider**: The courts of Japan (Supreme Court)
- **URL**: https://www.courts.go.jp/hanrei/search1/index.html
- **Accessed**: September 18, 2026
- **Terms of use**: Quoted with the source stated, in accordance with that website's usage guidance. The precedents carried by the system are a subset of the judgments that have been made public and are not exhaustive of all judgments.

:::note Disclaimer

- **Nothing on this page is legal advice.** For a judgement on an actual matter, consult a lawyer or another qualified professional.
- The external information quoted on this site is provided to illustrate examples of using Kari. This site does not guarantee the accuracy or currency of that information. Quoted sources may be changed or removed without notice.
- The AI output shown on this site was actually obtained in the stated verification environment. However, this site does not guarantee the accuracy or usefulness of that output. AI output varies with the LLM used, its settings, and from one run to the next.
- **The precedents carried by the precedent search are not exhaustive of all judgments.** No statistical trend can be drawn from the counts shown on this page.
- Always check the identifying information for a precedent (court name, judgment date, case number) and the verbatim quotations against the original judgment. Treat AI output as liable to contain plausible errors.
- The cases quoted on this page include one concerning a worker's death. Out of consideration for those involved, no company or individual names are given.
- Screenshots were taken with the version of Kari current at the time of writing. The display may differ in your version.
- The organizations quoted have no affiliation with, and do not endorse, this site or Kari.

:::

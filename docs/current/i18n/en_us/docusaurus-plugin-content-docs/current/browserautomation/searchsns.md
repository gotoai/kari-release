---
sidebar_position: 2
title: Public opinion analysis on social media
---

# Sign in to a social network and analyze public opinion

:::info Verification environment

The steps on this page were verified in the following environment.

- **Kari**: version 0.6.0, Windows
- **AI provider**: Anthropic Claude subscription
- **Model**: Opus 5 (1M)

:::

## About this use case
When you want to know what a lot of people think about a hot topic, or to get a sense of where a discussion stands and where it is heading, going through social media posts one by one takes an enormous amount of time.

With Kari's browser automation, you can hand the work of organizing and summarizing the opinions visible from your own social media account to an AI agent.

## Scenario
The user has been following the recent debate about slowing down frontier AI development, and wants to know what is being discussed on mastodon.social — the social network they use — and which side of the argument prevails. But they do not want to spend a lot of time on it. Using an AI agent brings the following benefits.

- This is not web scraping or bot crawling: **the AI operates a signed-in browser on the user's behalf**. It works within the conditions you set explicitly (the interval between accesses, the maximum number of posts to read, viewing only and never writing), so the work stays in line with the target service's terms.
(\* For this example with mastodon.social, we confirmed that the steps do not breach that service's terms. For a different service, always check its terms yourself before proceeding.)
- Posts in several languages can be read as they are and classified by the same criteria.
- Listing the citations and summarizing the points of contention happen in one pass, which cuts the time spent organizing the material dramatically.

## Preparing the work

:::caution Check this first

Check the target service's terms of use, API policy and `robots.txt` to understand **how far automated browsing is permitted**. Writing the access interval and the cap on how much to collect into the instruction is the responsibility of the person making the request. If you cannot determine what is permitted, do not do this work.

:::

- Open **Web Browser** in the left navigation panel and **sign in to the target service with your own account**. This example uses mastodon.social, signed in.
URL: https://mastodon.social/

![Signed in to mastodon.social](@site/docs/current/main/browserautomation/img/search_sns_timeline_trend.png)

*Screenshot shown in the original Japanese.*

- Open the page the collection will start from. This example starts from the Explore page.
URL: https://mastodon.social/explore

![The mastodon.social Explore page](@site/docs/current/main/browserautomation/img/search_sns_timeline_mastodon.png)

*Screenshot shown in the original Japanese.*

- Look over the starting page and note **what sort of posts are there**. At this point the topics may be miscellaneous and your topic may be nowhere in sight. That in itself becomes meaningful information later.

:::tip

The AI uses the browser session you signed in with, as it is. An internal social network or a closed community that requires a login can be worked the same way.

:::

## Instruct the AI

- Set out the scope of collection, the definitions for classification and the access rules together, and instruct the AI as follows. The prompt below is an English rendering of the Japanese prompt shown in the screenshot.

```text title="Prompt for the AI"
Starting from the mastodon.social Explore page that is currently open, collect public posts about slowing down frontier AI development, organize the points of contention and report back.

0. Access rules to observe
(1) Run requests serially, one at a time, leaving at least 1.5 seconds between each.
(2) View at most 10 tags and read at most 100 posts in total.
(3) Do not download images or video.
(4) If a CAPTCHA, an access restriction, or an error screen appears, do not try to work around it — stop and report it.
(5) Write operations of every kind are forbidden. View only.

1. Tools: use the Browser tool; do not use the Web Fetch tool.

2. Scope of the survey
(1) As a rule, cover posts in Japanese and English made within the last 72 hours.
(2) Only posts that address whether frontier AI development should be slowed down are in scope. General mentions of AI, product announcements, posts of AI-generated images and the like are out of scope.
(3) Exclude obvious bot posts, automatic reposts of news headlines, and duplicate boosts of identical content.
(4) You may stop collecting once you judge that no new points are appearing (saturation). Report the basis for that judgement.

3. Classifying the position taken (use the following definitions)
　・For: holds that development should be slowed down
　・Against: holds that it should not be slowed down, that development should continue or accelerate
　・Neutral / both sides: conditional, only laying out the arguments, or readable either way
　・Undeterminable: irony, sarcasm, or too little context to fix a position. Do not force a position onto anything classed as undeterminable.

4. Output (in the chat reply, as bullet points plus tables)
(1) A record of the collection conditions: the tag names viewed, the time of collection (UTC), the period covered, the number of posts read.
(2) Counts by position. Always include this note: "This is the breakdown within the collected sample and is not representative of the population."
(3) A breakdown by point of contention. Point (for example, demonstrability of safety / regulatory approach / international competition / environmental cost / employment) × the gist of the claim × the position.
(4) For each point, give one or two post URLs as typical examples.
(5) The trends, the fault lines and the implications you can see. If a particular news event within the last 72 hours is driving the discussion, name it.
```

![Instructing the AI to collect social media posts](@site/docs/current/main/browserautomation/img/search_sns_search_prompt.png)

*Screenshot shown in the original Japanese.*

The way this instruction is put together has a few key points.

| Block of the instruction | What it is for |
| --- | --- |
| 0. Access rules | Gives the access interval and the caps on tags and posts as numbers, controlling the volume of work. **(5), "write operations of every kind are forbidden", is specific to social media** — it is the brake that stops a reply, boost, favourite or follow from being performed by mistake. |
| 1. Tools | Limits the tool to Browser so that the browser's signed-in state is used. Web Fetch cannot retrieve pages that require a login, or this instance's rendering. |
| 2. Scope of the survey | Narrows the target by period, language and topic, and excludes bot posts and automatic reposts. **(4) says explicitly that the AI may stop once saturated**, and asks for the basis; that makes the AI itself declare that coverage is not exhaustive. |
| 3. Classifying the position | Gives the definitions and, on top of that, **provides "undeterminable" as a catch-all**. This keeps irony and under-contextualized posts from being forced into for or against. |
| 4. Output | **(2) makes the "not representative of the population" note mandatory**, heading off a statistical misreading of the counts. (4) asks for URLs of typical examples, so a person can go to the original posts and verify. |

:::caution

On social media an action you meant as viewing can turn into a write by mistake (a mis-click, a keyboard shortcut). Put "view only" in the instruction, and check your account's post history and notifications afterwards.

:::

## Check the AI's work

- The AI follows tags from the starting Explore page, reads the posts, and prints its report in the session window. Start with "compliance with the access rules" to confirm that the caps you set were respected.

![Compliance with the access rules, and the record of collection conditions](@site/docs/current/main/browserautomation/img/search_sns_search_result.png)

*Screenshot shown in the original Japanese.*

In this example, the AI reported the following.

- Every request was run serially, one at a time, with a sleep of at least 1.6 seconds between requests.
- **4 tags** were viewed (within the cap of 10) and **97 posts** read (within the cap of 100).
- No images or video were downloaded (text was read only). No CAPTCHA, access restriction or error screen was encountered.
- No write operation of any kind was performed (the reply, boost, favourite and follow buttons were never touched).
- As the record of collection conditions: the starting point `https://mastodon.social/explore`, collection time 2026-09-18 04:05–04:20 UTC, and the period covered stated as the last 72 hours.

- Next come the counts by position, in a table. Confirm that the required note is there.

![Counts by position](@site/docs/current/main/browserautomation/img/search_sns_search_result2.png)

*Screenshot shown in the original Japanese.*

Of the 97 posts read, **15 met the criteria** (2 for, 3 against, 8 neutral or both sides, 2 undeterminable). The note "This is the breakdown within the collected sample and is not representative of the population." is included, along with the breakdown by language (15 in English, **0 in Japanese**).

- The breakdown by point of contention is printed as a three-column table: the point, the gist of the claim, and the position.

![The breakdown by point of contention](@site/docs/current/main/browserautomation/img/search_sns_search_result3.png)

*Screenshot shown in the original Japanese.*

- Finally, the trends, fault lines and implications are summarized. The events within the last 72 hours that are driving the discussion are listed with their dates.

![Trends, fault lines and implications](@site/docs/current/main/browserautomation/img/search_sns_search_result4.png)

*Screenshot shown in the original Japanese.*

In this example three fault lines were extracted: where the burden of proof lies, the legitimacy of who acts, and whether international coordination can be made to work. Alongside them the AI reports the finding that **"slowdown is not a trending topic on mastodon.social"**, with the figures behind it (no AI-related tag among the top 10 trending tags; `#PauseAI` has 2 posts across the whole tag and none today; the newest post under `#AI規制` is three weeks old).

:::tip

"The discussion is not lively" is itself a result. When the counts are low, have the AI report exactly that — and **always make it attach the figures that back it up**.

:::

## Human-in-the-loop points

Do not leave everything to the AI. Check the following yourself.

- **Do not read the counts as public opinion**
The breakdown here covers the 15 posts, out of the 97 the AI read, that met the criteria. It is not a miniature of the population. You cannot argue from 2 for and 3 against which side prevails. The note the AI was made to include exists to prevent exactly that misreading.

- **Check the bias in language and in what was observable**
The instruction covered Japanese and English, yet the matches were **15 in English and 0 in Japanese**. That does not mean Japanese speakers are uninterested; it means **there happened to be no Japanese posts within what this instance made visible**. Social media results depend heavily on which account you look from and which instance you look through.

- **Read what went into "undeterminable"**
Irony and sarcasm are where AI is most likely to go wrong. Two posts were classed undeterminable here. Go to the original text of those posts and confirm that they were not forced into for or against.

- **Actually open the URLs of the typical examples**
The "gist of the claim" in the table is the AI's summary. For at least one post per point, open the original and confirm that the summary has not drifted from what the poster meant.

- **Confirm that no write occurred**
Afterwards, check your account's post history, boost history and notifications to confirm that no unintended write happened.

- **Read the basis for stopping the collection**
"Saturated" is the AI's judgement. If it stopped at 4 tags, whether that really was saturation or whether it missed tags it should have followed is for a person to decide.

- **Be careful about quoting posts**
Even for public posts, reproducing an account name or the text of a post verbatim in external material may run against the service's terms or the poster's intent. Whether secondary use is acceptable is your own responsibility to judge.

:::caution

The accuracy of the classification and the summaries varies with the LLM used. The same post can be classified differently from one run to the next, so treat the counts as indicative and go to the original posts for anything that matters.

:::

## References

The steps on this page use the following public service for illustration. Screenshots are reproduced as quotations with the source stated. The report the AI produced (the counts, the breakdown by point, the observations on trends) was generated by GotoAI as an example of Kari's operation; it was not created or published by Mastodon or by the individual posters.

- **Service**: the Mastodon instance `mastodon.social` (the Explore page and public posts)
- **Provider**: Mastodon gGmbH
- **URL**: https://mastodon.social/explore (Explore page)
- **Accessed**: September 18, 2026 (collected 04:05–04:20 UTC)
- **Terms of use**: Viewing only, in accordance with that instance's terms of service and server rules. Posts are quoted only where they are set to public, with the source stated.

:::note Disclaimer

- The external information quoted on this site is provided to illustrate examples of using Kari. This site does not guarantee the accuracy or currency of that information. Quoted sources may be changed or removed without notice.
- The AI output shown on this site was actually obtained in the stated verification environment. However, this site does not guarantee the accuracy or usefulness of that output. AI output varies with the LLM used, its settings, and from one run to the next.
- **The counts and trends shown on this page are the result of classifying a limited sample; this is not an opinion poll.** Do not treat them as representative of the population.
- The classification of a post's position (for, against, and so on) is a mechanical judgement made by AI and is no guarantee of what the poster intended.
- Collecting information from social media must follow the target service's terms of use, API policy and `robots.txt`. Secondary use of the posts you collect is likewise your own responsibility to judge.
- Screenshots were taken with the version of Kari current at the time of writing. The display may differ in your version.
- The services, organizations and individuals quoted have no affiliation with, and do not endorse, this site or Kari.

:::

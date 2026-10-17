---
sidebar_position: 1
title: Overview
---

# Overview

## About this use case

The figures you want to know in business are, **in most cases, not all in one file**. The information you need is published by several data sources, each on its own terms, and they differ in granularity, format and publication timing.

The **total inbound spending by nationality and region** dealt with in this use case is **estimated** by taking the spending per person and the number of visitors from separate data sources and multiplying them together. Done the conventional way, the preparation alone takes a great deal of work. You extract the figures from Excel tables, align the granularity, reconcile differences in how country names are written, and join the data — and every time you change your hypothesis, you do the same work again.

With Kari's AI agent, **you can hand over the whole job, from retrieval through parsing, joining, estimating and visualization to drawing out insights.** Because every step of the processing is kept as a Dataflow, re-running it under different conditions takes little time. Use this use case to see how far **data analysis that spans several sources** can be automated.

## Scenario

From the standpoint of treating inbound demand as a business opportunity, we analyze **the spending trends of foreign visitors to Japan**. The questions to examine are, for example, the following.

- How many people come from which nationalities and regions? Is that mix changing?
- How does spending per person differ by nationality and region?
- How is total spending changing over time? **What is driving the increases and decreases?**
- Are the markets where visitor numbers are growing also growing in spending?

The last question is the crux of this use case. **Numbers of people and amounts of money do not necessarily move in the same direction.** If you judge a market by visitor numbers alone, you will reach the wrong conclusion.

## The nature of the data

This use case joins **data of different kinds, published by three data sources**. Before you start the analysis, make sure you understand what each one is.

| | Consumption Trend Survey for Foreigners Visiting Japan (「インバウンド消費動向調査」) | JNTO's statistics on visitor arrivals (「訪日外客統計」) | Immigration control statistics (「出入国管理統計」) |
| --- | --- | --- | --- |
| Publisher | Japan Tourism Agency (Ministry of Land, Infrastructure, Transport and Tourism) | Japan National Tourism Organization (JNTO) | Ministry of Justice (Immigration Services Agency of Japan) |
| What it represents | **How much each visitor spent** | **How many visitors came** | **How many of them were cruise passengers** |
| Nature of the data | **Aggregated survey (questionnaire) results** | Statistics on entries and departures | Number of landing permits |
| Published granularity | **Quarterly** | **Monthly** | **Monthly** |
| Publication timing | Late (quarterly, preliminary → final figures) | Early (the following month) | Monthly |
| File layout | A separate file for each period | One file with a sheet per year | A separate file for each month |

## How this use case proceeds

This use case proceeds in the following steps.

1. [Retrieve the data needed for the analysis from the web pages of the Japan Tourism Agency, JNTO and the Ministry of Justice](./retrievedata.md)
2. [Automate parsing of the Excel files with Kari's AI Analysis feature](./parserawdata.md)
3. [Have the AI automate joining the data and building the fact table](./joindata.md)
4. [Automate visualizing inbound visitor-number trends by nationality and region, and drawing out insights](./visittrend.md)
5. [Automate visualizing trends in estimated total spending by nationality and region, and drawing out insights](./consumptiontrend.md)

Steps 1 to 3 are **preparing for the analysis**; steps 4 and 5 are **the analysis itself**. Three pages are spent on preparation because, **in data analysis that spans several sources, that is where most of the work lies**.

The formulas for the estimate are as follows. Step 3 builds a fact table of this shape, and step 5 calculates total spending.

```
General visitors[country, month]            = JNTO visitor arrivals[country, month] − cruise passengers[country, month]
Travel spending per person[country]         = 参考2「全体」[country, quarter]
Estimated total spending[country, month]    = travel spending per person[country, quarter containing that month] × general visitors[country, month]
```


## Background information

### Why the cruise passenger statistics are needed

The travel spending per person that the Japan Tourism Agency publishes by nationality and region is for **"general visitors", excluding cruise passengers**. JNTO's visitor arrivals, on the other hand, **include cruise passengers**. A calculation like the one below is therefore needed.

```
General visitors = JNTO visitor arrivals − cruise landing permits (cruise passengers)
```

The number of cruise passengers is taken from the Ministry of Justice's immigration control statistics. The Japan Tourism Agency also notes that it uses these statistics to estimate the number of cruise passengers.


### Points to note in processing the data

:::caution What to understand before the analysis

**1. Figures of different granularity are being multiplied together.**

The consumption survey is quarterly; the visitor arrival statistics and the cruise passenger figures are monthly. In this use case, **the quarterly spending per person is copied to each month of the same quarter** before joining. As a result, **the month-to-month variation in estimated total spending comes only from the variation in visitor numbers.** You cannot read it as "spending per person rose in this month".

**2. Publication timing differs.**

Visitor numbers are published up to August 2026, whereas the consumption survey, published quarterly and lagging behind, runs only to June 2026. **The multiplied estimates must be cut off to match the shorter series.** If they are not, the most recent months will be values in which only the visitor numbers have moved while the spending per person stays at an old quarter's figure.

**3. Sheets with similar names differ in value by 10%.**

The consumption survey workbook has 37 sheets, and several of its tables give spending per person. **The result changes depending on which one you use.**

| Sheet | Content | All nationalities, April–June 2026 |
| --- | --- | --- |
| `表3-1` (Table 3-1) | **Does not include** the domestic portion of package tour fees | 222,119 yen |
| `参考2` (Reference 2) | **Includes** the breakdown of package tour fees | **244,733 yen** |

The total spending that the Japan Tourism Agency publishes rests on the `参考2` series. This use case uses it too.

**4. Preliminary figures are included and are revised later.**

The sheets carry **labels showing the publication stage**, such as `【確報】` (final figures) and `【2次速報】` (second preliminary figures). In an analysis that includes the most recent periods, record the retrieval date and treat the conclusions as valid as of that point.


**5. The structure of the tables also changes between periods and years.**

Every data set changes shape a little with each publication.

- In the consumption survey, the nationality and region categories increased from 21 to 24 in 2026 (Mexico, the Nordic countries and the Middle East were added). That is why the sheets grew from 48 columns to 54
- The visitor arrival statistics have four different table structures depending on the year. The breakdown rows for the Middle East and the Nordic region exist only from 2020 onwards; **for 2019 and earlier the columns themselves do not exist**
- In the immigration control statistics, **the ports listed vary from month to month**

If you process the data assuming "every sheet has the same structure", the columns will quietly shift from some year onwards. The [Excel parsing page](./parserawdata.md) covers how the AI detected these differences.



**6. Total rows and breakdown rows sit in the same column.**

In every data set, aggregate rows are mixed in the same column as the individual countries and regions.

- Consumption survey: `全国籍・地域` (all nationalities and regions; the overall total), `中東` (Middle East) and `北欧` (Nordic countries) (regional totals), `その他` (others; the remainder)
- Visitor arrival statistics: `総数` (total), `アジア計` (Asia total), `ヨーロッパ計` (Europe total), and the breakdown of `中東地域` (Middle East region) (Israel, Türkiye, the six GCC countries)
- Immigration control statistics: `総数` (total), `アジア` (Asia), `ヨーロッパ` (Europe)

If you add them up as they are, you will **count the same people twice**. The [data joining page](./joindata.md) covers how these were excluded.


**7. The labels also differ between data sources.**

The same item may be written differently depending on the data source. The data processing has to take this into account and match them correctly.

| | JNTO | Immigration control statistics |
| --- | --- | --- |
| Hong Kong | `香港` | `中国〔香港〕` |

This mapping is covered on the [data joining page](./joindata.md).

:::



:::caution This use case is an "illustration"

**This use case is an illustration of how Kari works, and the figures it produces may differ from those published by the Japan Tourism Agency.**

Total spending is an **estimate** obtained by multiplying the per-person spending from a sample survey by the number of visitors. In addition, the number of general visitors by nationality and region is an approximation calculated as "JNTO's figure − the Ministry of Justice's figure", and there is no guarantee that it matches the Japan Tourism Agency's estimate.

This site has not verified the causal relationships or background behind the interpretations of market trends and the insights that the AI draws out. If you use them for business decisions, **always check them against the primary sources and other sources of information.** The "Human-in-the-loop points" on each page describe what to check.

:::

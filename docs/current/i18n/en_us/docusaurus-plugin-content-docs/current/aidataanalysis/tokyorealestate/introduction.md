---
sidebar_position: 1
title: Overview
---

# Overview

## About this use case

The purpose of business data analysis is to extract useful information from data and to draw out insights that support decisions. In the conventional way of working, without AI, cleansing, shaping and aggregating the raw data takes a great deal of effort. On top of that, every time you rework a hypothesis, you end up redoing the same processing. As a result, it often takes a long time to get from obtaining the data to drawing out insights.

With Kari's AI agent, you can hand over the whole job, from working out the structure of the raw data and processing it on the basis of a hypothesis to visualizing the results. Because redoing the processing after a change of hypothesis takes only a short time, you can make more attempts within limited time. Use this example to see how far the productivity of data analysis can be raised.

## Scenario

From the standpoint of buying a home or of real estate investment, we analyze real estate prices in Tokyo's 23 special wards. The hypotheses to test are, for example, the following.

- Which factors do real estate prices correlate with?
- How does the rate of real estate price growth differ from area to area?
- Does that growth rate correlate with environmental factors such as population growth or decline?

Conventionally, this kind of testing was handed to data analysis specialists and took many hours of work. With an AI agent, you can carry out the same testing yourself, and in a short time.

## The nature of the data

Before you start the analysis, be clear about **what you are looking at**. The price data in the Ministry of Land, Infrastructure, Transport and Tourism (MLIT) Real Estate Information Library (「不動産情報ライブラリ」) comes from two sources of different character, and neither of them is "the whole market".

| | Real estate transaction price information (不動産取引価格情報) | Closed-sale price information (成約価格情報) |
| --- | --- | --- |
| Source | Answers to a **questionnaire survey** that MLIT sends to the parties to real estate transactions | Closed-sale information that licensed real estate brokers register in **REINS**, provided through REINS Market Information (RMI) |
| How it is collected | Questionnaires are sent to buyers on the basis of published real estate registry information | Registered by the licensed broker when a transaction it brokered is closed |
| Types covered | Residential land (land only), residential land (land and building), second-hand condominiums, agricultural land, forest land | Only 【土地と建物】 (land and building, i.e. detached houses) and 【中古マンション等】 (second-hand condominiums) |

The 207,636 records retrieved in this example break down into 103,769 records of real estate transaction price information and 103,867 records of closed-sale price information, roughly half and half. **It may look like one table, but its contents are two streams of data of different origin.**

:::caution Four points to understand before analysis

**1. These are questionnaire answers, not records of contracts. They are not a complete count.**

Real estate transaction price information collects the answers to questionnaires sent to buyers on the basis of registry information. Transactions for which no answer was received are not included. Closed-sale price information likewise covers only transactions that licensed brokers registered in REINS, that is, **transactions that went through a broker**. Neither covers every transaction that took place in the period.

**2. Transaction prices are rounded to two significant figures.**

This is because the data is processed so that individual properties cannot easily be identified. Checking all 207,636 records retrieved in this example showed that **100% had no more than two significant figures**, as in `13,000,000`, `32,000,000`, `85,000,000` and `640,000,000`. You therefore cannot discuss price differences of a few percent, or read meaning into the lower digits of an average. Locations are also given only down to town or district (町・大字) level, with no lot numbers.

**3. The same transaction may appear in both sources.**

The sale of a detached house through a broker can show up both in the REINS registration (closed-sale price information) and in the buyer questionnaire (real estate transaction price information). If you simply add up all records and take the average, you risk **counting the same transaction twice**. Either aggregate separately by 「価格情報区分」 (price information category), or restrict the analysis to one of the two.

**4. Data for the most recent period changes afterwards.**

The site's 「留意事項」 (notes) state that the number of transaction price records may continue to change depending on how questionnaire collection progresses, and that **the latest period in particular may change significantly in subsequent periods**. In any analysis that includes the most recent quarter, record the date of retrieval and treat your conclusions as valid as of that date.

:::

:::tip Which columns are filled also depends on the source

Even when they sit side by side in the same table, which columns are filled differs from source to source. In the data for this example, the share of empty values in 「建ぺい率（％）」 (building coverage ratio (%)) was **0.5%** in real estate transaction price information and **84.5%** in closed-sale price information. So that you do not describe the whole from a column that is filled in only one source, check for missing values per 「価格情報区分」 before aggregating.

Some columns look numeric but are not. 「建築年」 (year built) is a string such as `1990年`, and 「取引時期」 (transaction period) a string such as `2021年第2四半期` (2021 Q2); 「面積（㎡）」 (area (m²)) contains capped values such as `2,000㎡以上` (2,000 m² or more), and 「最寄駅：距離（分）」 (nearest station: distance (minutes)) mixes in ranges such as `30分～60分` and `1H～1H30`. How to type these columns is covered in [Automate parsing raw CSV data with AI](./parserawdata.md).

:::

Sources and references:

- Real Estate Information Library (MLIT) https://www.reinfolib.mlit.go.jp/realEstatePrices/
- Real estate transaction price information provision system (「不動産取引価格情報提供制度」, MLIT) https://www.mlit.go.jp/totikensangyo/totikensangyo_tk5_000069.html
- Frequently asked questions about the real estate transaction questionnaire survey (「不動産取引のアンケート調査についてよくあるご質問」, MLIT) https://e-answer.mlit.go.jp/enquete/top-index!doIndexquestion.action

Counts and shares are aggregated from the data retrieved for this example on October 13, 2026.

## How this use case proceeds

This use case proceeds in the following steps.

1. [Retrieve real estate price data for Tokyo's 23 special wards from MLIT's Real Estate Information Library](./retrievedata.md)
2. [Automate parsing the raw CSV data with Kari's AI Analysis feature](./parserawdata.md)
3. [Have the AI visualize the composition of each variable to check the structure of the data](./analyzedataratio.md)
4. [Analyze the correlation between the price per unit area of second-hand condominiums and other variables](./pricecorrelation.md)
5. [Analyze the growth rate of the price per unit area of second-hand condominiums by segment](./pricegrowthsegment.md)
6. [Analyze the correlation between the growth rate of the price per unit area of second-hand condominiums and the rate of population change](./populationcorrelation.md)

Steps 1 to 3 are **preparation for the analysis**; steps 4 to 6 are **the analysis itself**. In the preparation, you turn the raw CSV into a Table and check what each column contains and how much. **Knowing in advance which columns are unusable or have many missing values** determines the accuracy of the analysis that follows.

The three analysis pages ask questions that change step by step.

| Step | Question |
| --- | --- |
| 4 | What does the price **move together with**? |
| 5 | **Properties with what characteristics** have risen in price the most? |
| 6 | Are prices rising more in the wards where people are gathering? |

In step 6, you **go outside the real estate data**, retrieve Tokyo Metropolitan Government population statistics and match them up ward by ward.

:::caution

This use case deals with actual real estate transaction price data. If you use the results of the analysis for purchase or investment decisions, **always check the figures the AI outputs against the original data.** The "Human-in-the-loop points" section on each page lists what to check.

:::

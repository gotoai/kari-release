---
sidebar_position: 6
title: Aggregate Excel data
---

# Aggregate Excel data

:::info Verification environment

The steps on this page were verified in the following environment.

- **Kari**: version 0.5.0 Beta
- **AI provider**: standalone OumiGo (version 0.3.0)
- **GPU**: RTX A6000
- **LLM**: Google Gemma 4 31B IT (quantized by Google, Hugging Face repository: `google/gemma-4-31B-it-qat-w4a16-ct`)

:::

With Kari, the AI can aggregate Excel data for you. The result is saved as an Excel file.

## Check the input

- Open the Japan Tourism Agency's page on the Consumption Trend Survey for Foreigners Visiting Japan (「インバウンド消費動向調査」). Under the survey results, download the Excel data for the April to June tables, first preliminary report (「4-6月 集計表（1次速報）」), to a local folder.  

Page URL: https://www.mlit.go.jp/kankocho/tokei_hakusyo/gaikokujinshohidoko.html  
Excel file URL: https://www.mlit.go.jp/kankocho/content/002011743.xlsx  

- In Kari's Explorer, navigate to where the downloaded file is saved and click the file to view its contents.

![Viewing the survey data](@site/docs/current/main/usekari/img/usekari_analyzeexcelinput.png)

*Screenshot shown in the original Japanese.*

## Instruct the AI

We analyze, by nationality and region, the breakdown of the number of visits to Japan in the past year. Instruct the AI as follows. The prompt below is an English rendering of the Japanese prompt shown in the screenshot; the sheet, row and column labels are quoted as they appear in the Japanese source file.

> Based on the sheet 「表3-1」 of the Excel file that is currently open, aggregate the percentage breakdown of answers to 「過去1年間の日本来訪回数」 (number of visits to Japan in the past year) by nationality and region.
>
> 1. Structure of the source data  
> (1) Row 5 holds the column headings. From column E rightwards come 「全国籍･地域」 (all nationalities and regions), then the nationality and region names 「韓国」, 「台湾」 and so on. Each nationality or region occupies a pair of merged columns; row 6 labels the left column 「回答数」 (number of respondents) and the right column 「消費単価」 (spending per person). Use only the 「回答数」 columns; do not use the 「消費単価」 columns.  
> (2) Rows 82 to 87 are the answer items for 「過去1年間の日本来訪回数」. The answer labels are in column C (six items: 「過去1年間は来訪していない」, 「1回」, 「2回」, 「3～5回」, 「6～9回」, 「10回以上」).
>
> 2. Aggregation method  
> (1) For each nationality or region, calculate the share of each answer = respondents for that answer ÷ total respondents across the six items. The total should match the number of respondents in row 7 「全体」; report any column where it does not.  
> (2) Write the figures as Excel values with the number format "0.0%" (percentage with one decimal place). Do not write rounded strings.
>
> 3. Output  
> (1) Arrange the results as the following matrix:  
>  - Rows: the six answer items, in the source sheet's top-to-bottom order (row 82 to row 87)  
>  - Columns: 「全国籍･地域」 followed by each nationality or region, in the source sheet's left-to-right order  
>  - Column headings (nationality and region names) in row 1, answer labels in column A  
>  - A final 「合計」 (total) row showing that each column adds up to 100.0%  
> (2) Save the matrix of respondent counts the percentages were derived from (same rows and columns) in a separate sheet named 「回答数」.  
> (3) Leave the original file unchanged and save the result as a new file, 「国籍・地域別の訪日回数集計.xlsx」, in the same folder. After saving, report the file path and the six percentages in the 「全国籍･地域」 column.

![Instructing the AI](@site/docs/current/main/usekari/img/usekari_analyzeexcelinstruction.png)

*Screenshot shown in the original Japanese.*

## Check the AI's output

Open the Excel file produced by the AI and review the result.

![Reviewing the AI's output](@site/docs/current/main/usekari/img/usekari_analyzeexcelresult.png)

*Screenshot shown in the original Japanese.*

:::caution

The structure and formatting of the generated material vary with the LLM used.

:::

:::note Disclaimer

- The external information quoted on this site is provided to illustrate examples of using Kari. This site does not guarantee the accuracy or currency of that information. Quoted sources may be changed or removed without notice.
- The AI output shown on this site was actually obtained in the stated verification environment. However, this site does not guarantee the accuracy or usefulness of that output. AI output varies with the LLM used, its settings, and from one run to the next.
- Before using AI output in your work, always check it against the original material and make your own judgement, at your own responsibility.
- Screenshots were taken with the version of Kari current at the time of writing. The display may differ in your version.
- The organizations quoted have no affiliation with, and do not endorse, this site or Kari.

:::

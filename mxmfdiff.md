---
layout: page
title: Mendix Diff Tool
permalink: /mxmfdiff/
---

### 1. How do you find a committed bug?
I am javascript developer, developing widgets for Mendix applications.
As a routine, I often check my code one time before commit, review and merge code from colleages. 
For that kind of work, one indispensable tool is "git diff". 

Quite often, I also work with Mendix modeller on server side. 
It is a great tool for business engineers thanks to intuitive way to design business logic.

In term of code review, what mendix can do:
   - Show list of changes between 2 revisions
   - Show overview history of microflow 

Most of the time, after knowing that a microflow is changed between 2 specific revisions, I am interested in more detailed changes. 
For example, I would like to know what exactly changes of: 
   - Xpath
   - Attribute values
   - Sorting criteria 

Those information provides more insight for the commit than just revision's description which is quite short and sometimes quite misleading. Normally, I have to ask authors of the commit to understand the reason. That process take a lot of time.
In some cases, if the commit is older than 2 weeks, recalling all the bits and bytes is impossible.

That's why for a long time, we were thinking about making a _**diff tool**_ for Mendix. 

It was impossible to implement that kind of tool if you cannot read Mendix code. 
Luckily, last year, Mendix have just had their SDK, making it possible to developers to read all mendix apps info: Microflow, forms, domain models, web services. Just then, we decided to implement **diff tool**

For some of the first versions of the tool, I want to mainly focus on analyzing Microflow, and also get feedback of users on the tool.

### 2. Chosen technology
- React: for its ability to build application by assemble different components.
- Mobx: for its easiness to learn and apply quickly.
- Electron: for its ability to build standalone app. For the future, it's also easy to be converted to an online version.

### 3. Pre-requisite
- You need your APIKey. Following these steps to generate one:
https://docs.mendix.com/apidocs-mxsdk/apidocs/authentication

Note: You should save this APIKey since you can see it only one.

### 4. Feature
As you enter your username and ApiKey, the tool will use it to connect to Team Server to get the list of your applications and to create an OnlineWorkingCopy. 
(What is an OnlineWorkingCopy? Link). And here is the list of features:

- Show overview of new/edited/deleted microflows.

![statusoverview](https://raw.githubusercontent.com/vietduc1441/vietduc1441.github.io/master/img/sttoverview.png)

- Visualize microflow as it is on Mendix Modeller.

![over_view](https://raw.githubusercontent.com/vietduc1441/vietduc1441.github.io/master/img/mf.png)

- Properties of Microflow action is displayed as it is on Mendix Modeller.

![properties](https://raw.githubusercontent.com/vietduc1441/vietduc1441.github.io/master/img/prop.png)

- Highlight associated microflow activities and their comparison.

<iframe width="640" height="360" src="https://www.youtube.com/embed/Bnskh7YNqTs?rel=0" frameborder="0" ></iframe>

### 5. Roadmap
We have many ideas in mind for the next version. Here are some of them:

- Store username & apiKey so user doesn't have to reenter.
- Compare microflows between different branches
- Upload a microflow from local to compare 
- Compare microflows between different projects
- Export microflow directly from the tool 
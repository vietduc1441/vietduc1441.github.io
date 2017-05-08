---
layout: page
title: Mendix Microflow Diff tool
permalink: /mxmfdiff/
---

# 1. Introduction 
I am javascript developer, developing widgets for Mendix applications.
As a routine, I often check my code one time before commit, review and merge code from colleages. 
For that kind of work, one indispensable tool is "git diff" (do you know that the first diff utility was created in 1974?)

Quite often, I also work with Mendix modeller for  server side. 
It is a great tool for business engineer by it's intuitive way to design business logic.
In term of code review, what mendix can do:
   - Show list of changes between 2 revisions
   - Show overview history of microflow 

Most of the time, after knowing that a microflow is changed between 2 specific revisions, I am interested in more detailed changes. 
For example, I would like to know what are exactly changes of: 
   - Xpath
   - Attribute values
   - Sorting criteria 
Those information provides more insight for the commit than just description on revision which is quite short and sometimes quite misleading. Normally, I have to ask the author of the commit to know then understand the reason. That process take a lot of time.
In some cases, if the commit is older than 2 weeks, recalling all the bites and bits is impossible.

That's why for a long time, i was thinking about making a _**diff tool**_ for Mendix that saves a ton of time for comparing and reviewing changes.


It was impossible to implement that kind of tool if you can not read Mendix code. 
Luckily, last year, Mendix have just had their SDK, making it possible to developers to read all mendix apps info: Microflow, forms, domain models, web services. Just then, we decided to implemement **Mx DiffTool**

For some of the first versions of the tool, I want to mainly focus on analyzing Microflow, and also get feedback of users on the tool.

# 2. Chosen technology
- React: for its ability to build application by assemble different components.
- Mobx: for its easiness to learn and apply quickly.
- Electron: for its ability to build standanlone app. For the future, it's also easy to be converted to an online version.

# 3. Pre-requisite
- You need your APIKey. Following these steps to generate one:
https://docs.mendix.com/apidocs-mxsdk/apidocs/authentication

Note: You should save this APIKey since you can see it only once, and the tool doesn't keep it (and any other information of you app).

# 4. Feature
As you enter your username and ApiKey, the toll will use it to connect to Team Server to get the list of your applications and to create an OnlineWorkingCopy. (What is an OnlineWorkingCopy? Link)
And here is the list of features:

- Load the list of applications
- Load 2 revisions and their microflows. For now Mendix just gives back full information of 20 latest revisions. For the rest, we just show the revision number with empty details.
- As you move the microflow list dropdown, the microflows be loaded and compared on the fly. One of user's feedback mentioned that he could love to see only edited microlows and we think it's very reasonable. But if we compare all microflows, loading them all could take a lot of time so we decided to lazy load then compare only the ones user see. 
- Visualize microflow as it is on Mendix Modeller
- Properties of each action on Microflow is displayed as it is on Mendix Modeller
- Overview bar so you can navigate to the changes faster.
- Move microflows side by side.
- Highlight associated microflow activities and their comparision

# 5. Roadmap

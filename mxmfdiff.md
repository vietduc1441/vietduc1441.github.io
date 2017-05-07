---
layout: page
title: Mendix Microflow Diff tool
permalink: /mxmfdiff/
---

# 1. Introduction: 
- I am javascript developer, developing widgets for Mendix applications.
  As a routine, I often check my code one time before commit, review and merge code from colleages. 
  For that kind of work, one indispensable tool is "git diff". 
  Quite often, i also work with Mendix modeller for  server side. 
  Great tool for business engineer by it's intuitive way to design the logic.
  In term of code review, What mendix can do:
    - Show list of changes between 2 revisions
    - Show overview history of microflow 

- Looking at another tool to do code review, Mendix user would want to have a look with more details on changes of: 
    - Xpath
    - Attribute value
    - New settings of widget 

It was impossible to developer to intereact with it until last year. Then, Mendix have just had their SDK, making it possible to developers to read all mendix app info: mf, forms, domain models. 

I think I have enought material in hand to implement a tool that allows user to have better ways to review their modelling code. 
For some of the first versions of the tool, I want to mainly focus on analyze Microflow and also get feedback of users on the tool.

# 2. Chosen technology
- React: for its ability to build application by assemble different components.
- Mobx: for its easiness to learn and apply quickly.
- Electron: for its ability to build standanlone app. For the future, it's also easy to be converted to an online version.
# 3. Pre-requisite
- You need to generate your APIKey. Following these steps to get one:

You should save this APIKey since you can see it only once and the tool doesn't keep it (and any other information of you app).

# 4. Feature
As you enter your username and ApiKey. The application will use it to connect to Team Server to get the list of your applications and to create an OnlineWorkingCopy. (What is an OnlineWorkingCopy?)
And the following is what the tool provides:

- Load the list of applications
- Load 2 revisions and their microflows. For now Mendix just gives back full information of 20 latest revisions. For the rest, we just show the revision number with empty details.
- As you move the microflow list dropdown, the microflows be loaded and compared on the fly. One of user's feedback mentioned that he could love to see only edited microlows and we think it's very reasonable. But if we compare all microflows, loading them all could take a lot of time so we decided to lazy load then compare only the ones user see. 
- Visualize microflow as it is on Mendix Modeller
- Properties of each action on Microflow is displayed as it is on Mendix Modeller
- Overview bar so you can navigate to the changes faster.
- Move microflows side by side.
- Highlight associated microflow activities and their comparision

# 5. Roadmap

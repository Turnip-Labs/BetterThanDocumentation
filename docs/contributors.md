# Contributing to Better than Documentation

Before all, all help to make documentation better is welcomed and dearly appreciated. Please feel free to contribute!

## what should I write?

Anything! Everything! Seriously! All you have to do is follow the document structure and produce a document that should be helpful to at least one other dev.
Please always make sure to look into existing documents and improve them first before attempting to initiate a new one from scratch. 
Together with that make sure to always ask permission before reorganizing documents.
    
The following are not rules but what you should strive to accomplish when writing. It is fine to break one or three of these.

1. Avoid jargon and abbreviations! type out the name of a concept by its entirety and use simpler words. 
Not every last one of us is proficient with english, and you should be always mindful of those who are learning.

2. Keep a dialectic formal tone and avoid any kind of swear words, slurs or slang.

3. Write with the search query in mind! You don't need to be a SEO expert, but you should know people who are looking on how to make a block will search for "how to make block", "make block", "add block", etc.

## What you need to know:

To contribute to Better than Documentation, you should at least know markdown and git. 
Markdown is a very simple text format with support across many platforms such as GitHub, Reddit and Discord, you probably used at least one of them before.
While git is the leading version control software used in the software industry invented by John Linux himself (Linus Torvalds).

### Markdown
Editing Markdown can be done with any plain text editor as it is made to be readable in raw form as opposed to say... an MS Word / HTML document. 
I would recommend that you skim the surface of the following document, [here](https://github.github.com/gfm/), together with replicating patterns you see through the text as you read it.

Some editors you might want to use:

- [Zed](https://zed.dev/) : Simple lightweight fast.
- [VScode](https://code.visualstudio.com/download) : Industry standard code editor.
- [Pycharm](https://www.jetbrains.com/pycharm/) : Heavyweight full-featured DE for python and webDev, useful here as well.
- [Obsidian](https://obsidian.md/) : Document editor tailored for markdown, best looking and easiest to use but lacks Git support.

### Git

Git is quite easy to learn, in fact, you basically don't need to learn it really well. You will want a GitHub account to interact with our repo.
The following resources can be used to learn git:

- [Official Git documentation](https://git-scm.com/docs/giteveryday)
- [Learn Git - The Full Course](https://www.youtube.com/watch?v=rH3zE7VlIMs&pp=ygUMYm9vdC5kZXYgZ2l0)

### (Optional) Python

MKDocs, the software used to generate the website is written in python and as such supports python scripts for automation.
If you have experience with that: We are using [UV](https://docs.astral.sh/uv/) as our environment manager and poethepoet as our test runner. 

You should be able to write scripts here contribute them and declare them in `pyproject.toml`.

For example: `poe dev` starts the test server so you can visualize your changes locally before merging.

## With that said...
You can find our glorious most prized repo [here.](https://github.com/Turnip-Labs/BetterThanDocumentation)

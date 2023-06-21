---
layout: post
title:  'Deep Reinforcement Learning from Human Preferences
(2017 NeurIPS) '
date:   2023-04-17
description: 'Paper reading #1'
tags: paper_reading, reinforcement_learning
categories: General
---
### Website

[https://openai.com/research/learning-from-human-preferences](https://openai.com/research/learning-from-human-preferences)

### Problem

Reward functions for complex tasks are hard to design

### Solution

![img](https://openaicom.imgix.net/76127a33-15be-4357-aefb-1e509fe1330f/diagram2x-2.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C1124%2C453&w=2600)

human preference data → reward model(NN)

“Our algorithm fits a reward function to the human's preferences while simultaneously training a policy to optimize the current predicted reward function”

1. The policy π interacts with the environment to produce a set of trajectories {τ 1, . . . , τ i}. The parameters of π are updated by a traditional reinforcement learning algorithm, in order to maximize the sum of the predicted rewards rt = ˆr(ot, at). 
2. We select pairs of segments (σ1, σ2) from the trajectories {τ 1, . . . , τ i} produced in step 1, and send them to a human for comparison. 
3. The parameters of the mapping ˆr are optimized via supervised learning to fit the comparisons collected from the human so far.
4. Repeat

注意⚠️：reward是continuous value，因为它只是一个predictor，probability是reward套一个softmax得出来的，而非预测完probability之后，用0或1作为reward

### Contributions

scale human feedback up to deep reinforcement learning and to learn much more complex behaviors.

### Weaknesses

1. 高昂人力成本
2. 没有利用好score的力量

### Experiment

Env: MuJoCo and Atari game

Comparison Experiment：

1. Human queries: 人来标注数据
2. Synthetic Oracle：when the agent queries for a comparison, instead of sending the query to a human, we immediately reply by indicating a preference for whichever trajectory segment actually receives a higher reward in the underlying task
3. Real Reward

Ablation Experiment:

1. Offline queries(train on queries only gathered at the beginning of training, rather than gathered throughout training) performs bad. Online queries are important for learning
2. Comparison is easier to do for humans but 

### Findings

1. human通过comparison标注数据的原因是it much easier for humans to provide consistent comparisons than consistent absolute scores
2. For continuous control tasks we found that **predicting comparisons worked much better than predicting scores**. This is likely because the scale of rewards varies substantially and this complicates the regression problem, which is smoothed significantly when we only need to predict comparisons.
    
    注意⚠️：是predict不是label
    

### Deeper?

1. Binary comparison只能提供2选1的信息，relative magnitude of the reward are important to learning
2. How to accelerate the learning and reduce the time of human labeling
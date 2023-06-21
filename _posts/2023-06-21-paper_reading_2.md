---
layout: post
title:  'Language to Rewards for Robotic Skill Synthesis (2023.6.14 Google DeepMind)'
date:   2023-06-21
description: 'Paper reading #2'
tags: paper_reading, reinforcement_learning LLM
categories: General
---

### Website

https://language-to-reward.github.io/

### Problem

reward shaping in robotics

### Solution

utilize LLMs to define **reward parameters**, and bridge the gap between high-level language instructions or corrections to low-level robot actions

Reward translator + Motion controller

Reward translator:

![img](https://language-to-reward.github.io/img/reward_translator.png)

User instructions + Motion template and rules → Motion description

Motion description + Reward Coder Prompt → Reward function

The transformation is done by LLM

Keypoints:

1. Step by step thinking: 
    
    Not directly generate codes but firstly generate description and then generate codes
    
2. Template:
    
    Directly generating codes is difficult for LLM. But it is much more easier to complete a template
    

### Contributions

Firstly apply the LLM to reward shaping in for robotic skill synthesis

### Weaknesses

1. Still much work(template design) need to be done by human. 
2. Constraining the reward design space helps improve stability of the system while sacrifices some flexibility.

### Experiments

Environment: MuJoCo MPC

Underlying LLM: GPT-4

2 robots: quadrupted robot(locomotion) and dexterous manipulator(manipulation)

![img](https://language-to-reward.github.io/videos/sim/bowl2.png)

Comparison and ablation experiment:

![img](https://language-to-reward.github.io/videos/sim/face_sunset.png)

### Reflection

1. learn to tell a good story.
2. If you have a novel idea, but it does not work well. Maybe you can try to take a step back (i.e. template in this paper) to let it work temporarily. Figure out how to let it work later.
### Question 1

We will lean on this excellent Git resource https://learngitbranching.js.org/

Complete every exercise under "Main", except for the "Advanced topics". Take a screenshot. Mine looks like this

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/b64cbb8f-1192-4482-92bd-2e2b7acd95f4)

Under "Remote", complete all questions under "Push & Pull — Git Remotes". Take a screenshot

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/b242e470-4cbc-4da0-8f15-d11e6795f29d)

(I haven't completed the easier stuff, but hey...I'm the instructor, lol!)

Write an explanation for the following questions:

- A Mixed Bag - Grabbing just 1 commit
- A Mixed Bag - Juggling commits
- A Mixed Bag - Juggling commits 2
- Push & Pull -- Git Remotes - 7. Diverged History

### Question 2 - Github setup

If you don't have a Github account yet, Create one using the instructions here https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account

Setup SSH keys if you haven't done so yet. This will allow you to push/pull from Github
https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

![image](https://github.com/TienSFU25/2650-weekly-exercises/assets/10173141/03bf0cd7-7777-4b96-b8bf-19a32cb69998)

Now follow these instructions to create a repository. Make sure your repo is public so the marker can view it
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository

Using the Git knowledge you've learned so far, initialize a Git repo locally.

1. On `master/main`, create 3 commits, each with one text file named 1.txt, 2.txt, 3.txt. Each of these files contain just the number in the filename (1.txt has 1)
2. Switch to another branch `experiment`. Change the 1 in 1.txt to 4. Commit
3. Switch back to `main`. Change the 1 in 1.txt to 5. Commit
4. Switch to `experiment2`. `git reset --hard experiment` , this moves HEAD to the same commit as experiment (the one where 1.txt has 4). Now `git merge master`, fix conflicts, and commit
5. Switch to `experiment3`. Again, `git reset --hard experiment`. Now `git rebase master`, fix conflicts, `git rebase --continue`, and commit

For conflict resolution, just keep both the 4 and the 5 in 1.txt

Recap: you should have 4 branches, `main` and 3 `experiments`

`master/main`: should have 4 commits. `1.txt` has 5

`experiment`: 4 commits. `1.txt` has 4

`experiment2`: 5 commits. `1.txt` has 4 5

`experiment3`: 5 commits. `1.txt` has 4 5 (or 5 4)

Push your local Git repo onto the Github remote repository and submit the repo URL.

### Submission

1. Screenshot of how much you've been able to do from https://learngitbranching.js.org/
2. Explanation of the 4 questions
3. A Github link to your Github repo

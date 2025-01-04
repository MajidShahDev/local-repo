// Git > Git is version control system, that track the history of project
//       that when a new file was added, changed and deleted from the project.

// Git help us to track the history of project.
// Git help us to collobrate mean work with team.

// Github > Github is a website that allows developers to store/upload and manage
//          their code, with or without git.

// commit is changes in our project
// git save commit in the form of history of our project
// eg commit take a screenshot of our history

// commit message, means reason of making change, giving a name to our screeshot

// Git
// clear    ... for clearing window
// ls       ... list files in directory
// pwd      ... for working directory
// ~  tild is showing that we are in our root directory mean main directory or folder


// CONFIGURING GIT > mean hm git ko bta rhy hn k hm kon c account mn changes krny
//                   ja rghy hn, mtlb agr hm git c github pr change kr rhy hn to
//                   hm kon c email id c changes hn
// git config --global user.name "MajidShahDev"
// git config --global user.email "mail.syedmajid@gmail.com"
// git config --list

// credential.helper store our user name or email etc

//---------------------------------------------------------------------
// CLONE & STATUS

// CLONE > Cloning a repository in our local machine
//         git clone https://github.com/MajidShahDev/demo-project.git
// STATUS > Display the state of the code
//          git status
//          Status have four type
//              untracked  > new files that git does'nt yet tracked.
//              modified   > changed
//              staged     > file is ready to be committed(when we add)
//              unmodified > unchanged (when we committ)

// when we modified our code cloned from github the files become yellow
// and M sign comes, which shows file is modified, which need to be add and
// commit/take a screenshot.

//---------------------------------------------------------------------
// ADD & COMMIT & PUSH

// ADD >    Add new or changed files in our working directory to git staging
//          area. add means engaging to stage.
//          git add index.html (this will add only index.html file)
//          git add . (this will add all files)

// COMMIT > It is the record of change
//          git commit -m "some message"     // her -m is short for message
//                                           // message should be meaningful

//          Your branch is ahead of 'origin/main' by 1 commit.
//          mltb hm orignal github code c 1 commit agy ho gaey hn

// PUSH   > upload local repo content to remote repo
//          git push origin main
//                yhn orign c murad ha jhan c hm ny clone lia tha
//                yhn main c murad ha k main branch
//---------------------------------------------------------------------
// Remote > means files and folders on github
// Local  > means files and folder in our laptop or machine.
//---------------------------------------------------------------------

// cd           for changing directory
// cd..         for one step back in directory
// cd + tab     for auto completion
// mkdir new    for making new directory / folder
// "" > file.js for making new file
// clear/cls    for clearing terminal
// cntrl + l    for clearing terminal
// ls           for listing or showing files in directory
// ls -a        for listing all files (hidden files) bash
// ls -Force    for listing all files (hidden files) powershell

//---------------------------------------------------------------------
// INIT COMMAND
// git init             (to create new repo)
// git remote add origin https://github.com/MajidShahDev/local-repo.git (we are going to add new remote(github repo))
//                       origin is the default name of remote repo
// git remote -v        (to verify remote)
//                      (is used to display the URLs of the remote repositories linked to your local Git repository)
//                      fetch: The URL used to pull (download) changes from the remote repository.
//                      push: The URL used to push (upload) changes to the remote repository.
// git branch           (to check branch)
// git branch -M main   (to rename branch)
// git push origin main (upload local repo content to remote repo)
// git push -u origin main (after this we can use only (git push) with full command)

//---------------------------------------------------------------------
// WORK FLOW
// github repo
// clone
// changes
// add
// commit
// push

//---------------------------------------------------------------------
// BRANCH COMMANDS
// git branch                          (to check branch)
// git branch -M <-rename->            (to rename branch)
// git checkout <-branch name->        (to nagivate)
// git branch <-new branch name->      (to create new branch)
// git checkout -b <-new branch name-> (to create new branch & also switch to new branch)
// git branch -d <-branch name->       (to delete branch)

//---------------------------------------------------------------------
// MERGING CODE
// git diff <-branch-name->            (to compare commits, branches files and more)
// git merge <-branch name->           (to merge two branches)

// WAY TWO
// Create a PR (pull request ) > it lets you tell other about
//    changes you have pushed to a branch in a resporatory on
//    Github, we are sending a request on github team to review
//    and accept the change,

//---------------------------------------------------------------------
// PULL COMMAND
// git pull origin main   > used to fetch and download content from a
//                          remote repo and immediately update the local
//                          repo to match the content

//---------------------------------------------------------------------
// UNDO CHANGES
// git log     (for checking git log)
// q           (for quitting from log)

// Staged Changes (added but not committed)
//      git reset index.html (for single file name)
//      git reset            (for many files)
//      git reset --hard     (also vs code changes will undo)

// Commited Changes (for one commit)
//      git reset Head~1

// Commited Changes (for many commit)
//      git reset <-commit hash->
//      git reset 7584a2cefa5f26bd990a9adf6efea774a9c4337a
//      git reset --hard <-commit hash->




// if modified is red mean changes are made but not added
// if modified is green mean changes are added(staged).

//---------------------------------------------------------------------
// FORK   > Fork is independent raw copy of repo
//          Fork is new repository that shares code and visibility
//          setting with orignal 'upstream' repository.
//
// # Configuration
// git config --global user.name "Your Name"              # Set global username
// git config --global user.email "your.email@example.com" # Set global email
// git config --list                                      # List all configuration settings

// # Initializing and Cloning
// git init                                               # Initialize a new repository
// git clone <repo-url>                                   # Clone a remote repository

// # Staging and Committing
// git status                                             # Check the status of files in the repo
// git add <file>                                         # Stage a specific file
// git add .                                              # Stage all changes
// git commit -m "Commit message"                         # Commit staged changes with a message

// # Branching
// git branch                                             # List all branches
// git branch <new-branch>                                # Create a new branch
// git checkout <branch-name>                             # Switch to another branch
// git checkout -b <new-branch>                           # Create and switch to a new branch

// # Merging
// git merge <branch-name>                                # Merge a branch into the current branch

// # Pulling and Pushing
// git pull                                               # Fetch and merge changes from the remote repo
// git push                                               # Push changes to the remote repo
// git push -u origin <branch-name>                       # Push a branch and set upstream tracking

// # Logging and Viewing History
// git log                                                # View commit history
// git log --oneline                                      # View condensed commit history

// # Undoing Changes
// git reset <file>                                       # Unstage a file (remove from staging area)
// git reset --hard HEAD                                  # Undo all changes and reset to last commit
// git checkout -- <file>                                 # Discard changes in a specific file

// # Remote Management
// git remote -v                                          # View remote repository URLs
// git remote add origin <repo-url>                      # Add a remote repository
// git remote remove <name>                               # Remove a remote repository

// # Stashing
// git stash                                              # Save uncommitted changes for later
// git stash list                                         # View stashed changes
// git stash apply                                        # Reapply stashed changes

// # Deleting
// git branch -d <branch-name>                            # Delete a branch (merged branches)
// git branch -D <branch-name>                            # Force delete a branch

// # Tags
// git tag                                                # List tags
// git tag <tag-name>                                     # Create a new tag
// git push origin <tag-name>                             # Push a tag to remote

// # Useful Shortcuts
// git diff                                               # Show changes between commits or working directory
// git diff --staged                                      # Show staged changes
// git blame <file>                                       # View who made changes to each line of a file
// git clean -f                                           # Remove untracked files

// # Git Ignore
// echo "node_modules/" >> .gitignore                     # Add a folder to ignore list
// git rm -r --cached <file-or-folder>                    # Remove tracked file/folder added to `.gitignore`

// # Aliases (Optional)
// git config --global alias.st status                   # Create an alias for `git status`
// git config --global alias.co checkout                 # Create an alias for `git checkout`
// git config --global alias.br branch                   # Create an alias for `git branch`
// git config --global alias.cm "commit -m"              # Create an alias for `git commit -m`

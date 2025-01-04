// # Authentication and Setup
// gh auth login                            # Login to GitHub via CLI
// gh auth logout                           # Logout from GitHub
// gh auth status                           # Check current authentication status

// # Repository Management
// gh repo create <repo-name>               # Create a new repository
// gh repo clone <owner>/<repo>             # Clone a repository
// gh repo fork <owner>/<repo>              # Fork a repository
// gh repo view                             # View the current repository details
// gh repo view <owner>/<repo> --web        # Open the repository in the browser
// gh repo list                             # All repository list

// # Pull Requests (PRs)
// gh pr create                             # Create a new pull request
// gh pr list                               # List all pull requests
// gh pr view <pr-number>                   # View details of a specific pull request
// gh pr view <pr-number> --web             # Open the pull request in the browser
// gh pr checkout <pr-number>               # Check out a pull request branch locally
// gh pr merge <pr-number>                  # Merge a pull request

// # Issues
// gh issue create                          # Create a new issue
// gh issue list                            # List all issues
// gh issue view <issue-number>             # View details of a specific issue
// gh issue close <issue-number>            # Close an issue

// # GitHub Actions
// gh workflow list                         # List all workflows in the repository
// gh workflow view <workflow-name>         # View details of a specific workflow
// gh workflow run <workflow-name>          # Trigger a workflow run
// gh run list                              # List all recent workflow runs
// gh run view <run-id>                     # View details of a specific run

// # Notifications
// gh notifications                         # View GitHub notifications
// gh notifications mark-read               # Mark all notifications as read

// # Gists
// gh gist create <file> --public           # Create a public gist from a file
// gh gist list                             # List all your gists
// gh gist view <gist-id>                   # View a specific gist

// # Managing SSH Keys
// gh ssh-key add <key-file>                # Add an SSH key to your GitHub account
// gh ssh-key list                          # List SSH keys in your GitHub account
// gh ssh-key delete <key-id>               # Delete an SSH key by its ID

// # Open in Browser
// gh browse                                # Open the current repository in a browser
// gh pr view <pr-number> --web             # Open a pull request in the browser
// gh issue view <issue-number> --web       # Open an issue in the browser

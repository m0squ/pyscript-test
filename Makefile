### The relative path for all of the commands executed in this makefile is the WORKING DIRECTORY ###

# make git-init: makes the directory a Git repository
git-init:
	git init
git-identify:
	git config --global user.email "$(email)"
	git config --global user.name "$(name)"
# make git-connect url="https://github.com/user/repo.git"           : connects the GitHub repository to the Git one
#                  url="https://user:token@github.com/user/repo.git": this also sets the user and the token to use when updating the GitHub repository
git-connect:
	git remote add origin $(url)
	git branch -M master
# make git-disconnect: disconnects GitHub from the Git repository
git-disconnect:
	git remote rm origin
# make git-status: shows the files that are syncronised with the Git repository, the ones that had been modified and the untracked ones
git-status:
	git status
# make git-add file="file.txt": adds a file to the Git repository
git-add:
	git add $(file)
# make git-rm file="file.txt": removes a file from the Git repository
git-rm:
	git rm $(file) --cached
# make git-commit msg="Commit\ message": updates the Git repository
git-commit:
	git add -u
	git commit -m $(msg)

# make git-push: updates the GitHub repository
git-push:
	git push -u origin master

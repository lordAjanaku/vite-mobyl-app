#!/bin/sh

	# Initialize git (if not already initialized)
	git init

	# Add all project files
	git add .

	# First commit
	git commit -m "first commit"

	# Remove origin if it already exists (avoids error)
	git remote remove origin 2>/dev/null

		# Add your GitHub repo
		git remote add origin https://github.com/lordAjanaku/vite-mobyl-app.git

		# Rename default branch to main
			git branch -M main

			# Push to GitHub
			git push -u origin main
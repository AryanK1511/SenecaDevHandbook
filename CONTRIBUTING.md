# Contributing to the SenecaDev Handbook

Thank you for considering contributing to our documentation! Whether you're fixing a typo, adding a new section, or improving existing content, we welcome your contributions. Here's a quick guide to get started with setting up the project locally and contributing effectively.

## Raising an Issue

Before you start working on a new feature or bug fix, it's a good idea to raise an issue to discuss your proposed changes. This helps ensure that your work aligns with the project's goals and that no one else is already working on the same thing.

**Steps to Raise an Issue:**

1. **Go to the Issues tab:**

    Navigate to the [Issues tab](https://github.com/AryanK1511/SenecaDevHandbook/issues) of the repository.

2. **Click on "New issue":**

    Click the "New issue" button to open a new issue form.

3. **Fill out the issue template:**

    Provide a clear and concise description of the issue or feature request. Make sure to include the following information:

    - A descriptive title
    - A detailed description of the problem or feature
    - Steps to reproduce the issue (if applicable)
    - Any relevant screenshots or code snippets
    - Any other information that might be helpful

4. **Submit the issue:**

    Once you've filled out the necessary information, click on "Submit new issue".

5. **Wait for someone to approve your issue:**

    After submitting your issue, wait for a project maintainer or a team member to review and approve it. They might ask for more information or suggest changes. Once your issue is approved, you can start working on it.

## Prerequisites

Before you can start contributing, you need to have **[Bun](https://bun.sh/)** installed. Bun is a fast, modern JavaScript runtime that we use to manage dependencies and run the development server.

## Setting Up the Project Locally

1. **Fork the repository:**

    First, fork the repository on GitHub by clicking the "Fork" button on the [repository's page](https://github.com/AryanK1511/SenecaDevHandbook).

2. **Clone the repository:**

    Clone the forked repository to your local machine:

    ```bash
    git clone https://github.com/your-username/handbook.git
    cd handbook
    ```

3. **Install dependencies:**

    Run the following command to install the required dependencies:

    ```bash
    bun install
    ```

    This will install all the necessary packages for the documentation site.

4. **Run the development server:**

    To view the documentation locally and start contributing, run the development server:

    ```bash
    bun start
    ```

    This will start a local development server, and you can view the documentation in your browser by going to [http://localhost:3000](http://localhost:3000).

## Contributing Guidelines

### Rebasing Your PR on `main`

When you open a pull request (PR), it is essential that your changes are rebased on the latest `main` branch to ensure your PR can be merged cleanly. This helps avoid merge conflicts and ensures your changes are based on the most up-to-date version of the code.

**Steps for Rebasing:**

1. Make sure you're on your feature branch:

    ```bash
    git checkout your-branch
    ```

2. Fetch the latest changes from `main`:

    ```bash
    git fetch origin
    ```

3. Rebase your feature branch onto `main`:

    ```bash
    git rebase origin/main
    ```

4. If there are any merge conflicts, resolve them, and then continue the rebase:

    ```bash
    git rebase --continue
    ```

5. Once the rebase is complete, push your changes:

    ```bash
    git push --force-with-lease
    ```

Rebasing ensures that your PR is based on the latest version of the `main` branch and that we can merge it smoothly.

### Commit Message Convention

We follow a conventional commit message format to make the commit history clean and meaningful. Each commit message should have a prefix that describes the type of change. Here's the format we use:

```txt
<type>: <short description>
```

Some common prefixes are:

- `fix:` for bug fixes
- `feat:` for new features
- `docs:` for documentation changes
- `chore:` for routine tasks, like updates or refactoring
- `style:` for changes that don't affect the logic (e.g., formatting, missing semi-colons)
- `test:` for adding or updating tests

**Examples:**

- `fix: correct typo in installation instructions`
- `feat: add new section about configuration`
- `docs: update contributing guidelines`
- `chore: update dependencies`

This helps maintain a consistent and easily understandable commit history.

## Making Changes

- **Editing Documentation:** You can edit the Markdown files under the `docs` directory. Any changes you make will be reflected immediately in the development server.
- **Adding New Pages:** If you're adding new sections or pages to the documentation, make sure to follow the existing structure and style to keep the documentation consistent.

## Submitting Changes

1. **Commit your changes:**

    After making your changes, commit them with a clear and concise message:

    ```bash
    git add .
    git commit -m "fix: correct typo in installation instructions"
    ```

2. **Push your changes:**

    Push your changes to your forked repository:

    ```bash
    git push origin your-branch
    ```

3. **Open a Pull Request:**

    Open a pull request to the main repository and describe your changes in detail. Make sure to include any necessary information about what has been fixed or added.

Thank you for helping improve our documentation! If you have any questions, feel free to reach out.

## Author

- [Aryan Khurana](https://github.com/AryanK1511)

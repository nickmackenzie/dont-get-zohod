---
title: Deploy Via GitHub Actions
description: Deploy functions and client GitHub Actions.
---

# Deploy Via GitHub Actions

Deploy functions and client GitHub Actions.

## Prerequisites:

- Generate a [Catalyst CLI token](https://docs.catalyst.zoho.com/en/cli/v1/working-with-tokens/generate-token/) and add it to your GitHub repository as a secret.
- Create a [GitHub Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets) named `CATALYST_TOKEN` with the above Catalyst token.

## Optional:

You can remove the `--verbose` flag from the catalyst deploy command to hide the output logs.

## YAML Script:

```yaml
name: Deploy

on:
  push:
    branches:
      - main # Trigger only on pushes to the main branch. Change to your branch name.

env:
  PROJECT_ID: "REPLACE_WITH_YOUR_PROJECT_ID" # Catalyst project ID
  NODE_VERSION: "18"

jobs:
  deploy_functions:
    name: Deploy Functions
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js and Install Dependencies
        id: setup-node
        uses: actions/setup-node@v2
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install zcatalyst-cli
        run: npm install -g zcatalyst-cli

      - name: Deploy Functions
        env:
          CATALYST_TOKEN: ${{ secrets.CATALYST_TOKEN }} # Requires catalyst token secret
        run: catalyst deploy --only functions --project $PROJECT_ID --token $CATALYST_TOKEN --verbose

  deploy_client:
    name: Deploy Client
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js and Install Dependencies
        id: setup-node
        uses: actions/setup-node@v2
        with:
          node-version: ${{ env.NODE_VERSION }}

      - name: Install zcatalyst-cli
        run: npm install -g zcatalyst-cli

      - name: Deploy Client
        env:
          CATALYST_TOKEN: ${{ secrets.CATALYST_TOKEN }} # Requires catalyst token secret
        run: catalyst deploy --only client --project $PROJECT_ID --token $CATALYST_TOKEN --verbose
```

---
title: Deploy Via Azure DevOps Pipeline
description: Deploy functions and client Azure DevOps Pipeline.
---

# Deploy Via Azure DevOps Pipeline

Deploy functions and client Via Azure DevOps Pipeline.

## Prerequisites:

- Generate a [Catalyst CLI token](https://docs.catalyst.zoho.com/en/cli/v1/working-with-tokens/generate-token/) and add it to your GitHub repository as a secret.
- Create a [Pipeline Secret](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/set-secret-variables?view=azure-devops&tabs=yaml,bash) named `CATALYST_TOKEN` with the above Catalyst token.

## Optional:

You can remove the `--verbose` flag from the catalyst deploy command to hide the output logs.

## YAML Script:

```yaml
trigger:
  branches:
    include:
      - master # Trigger only on pushes to the main branch. Change to your branch name.

variables:
  PROJECT_ID: "{REPLACE_WITH_YOUR_PROJECT_ID}" # Catalyst project ID
  NODE_VERSION: "18"

jobs:
  - job: DeployClient
    displayName: "Deploy Client"
    pool:
      vmImage: ubuntu-latest

    steps:
      - checkout: self
        displayName: "Checkout code"

      - task: NodeTool@0
        inputs:
          versionSpec: $(NODE_VERSION)
        displayName: "Setup Node.js and Install Dependencies"

      - script: |
          npm install -g zcatalyst-cli
          cd dashboard
          npm install zcatalyst-cli-plugin-react --save-dev
        displayName: "Install zcatalyst-cli"

      - script: |
          catalyst deploy --only client --project $(PROJECT_ID) --token $(CATALYST_TOKEN) --verbose
        displayName: "Deploy Client"
        env:
          CATALYST_TOKEN: $(CATALYST_TOKEN) # Requires catalyst token secret

  - job: DeployFunctions
    displayName: "Deploy Functions"
    pool:
      vmImage: ubuntu-latest

    steps:
      - checkout: self
        displayName: "Checkout code"

      - task: NodeTool@0
        inputs:
          versionSpec: $(NODE_VERSION)
        displayName: "Setup Node.js and Install Dependencies"

      - script: |
          npm install -g zcatalyst-cli
        displayName: "Install zcatalyst-cli"

      - script: |
          catalyst deploy --only functions --project $(PROJECT_ID) --token $(CATALYST_TOKEN) --verbose
        displayName: "Deploy Functions"
        env:
          CATALYST_TOKEN: $(CATALYST_TOKEN) # Requires catalyst token secret
```
